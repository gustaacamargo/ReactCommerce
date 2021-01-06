import * as Facebook from "expo-facebook";
import * as GoogleSignIn from "expo-google-sign-in";
import { Platform } from "react-native";
import * as Constants from "expo-constants";
import * as SecureStore from "expo-secure-store";
import firebase from "firebase";
// Required for side-effects
// require("firebase/firestore");
require("firebase/auth");
// require("firebase/FacebookAuthProvider")
const FACEBOOK_APP_ID = "199387224393217";
// const { OAuthRedirect, URLSchemes } = AppAuth

class Fire {
	constructor() {
		// firebase temporario
		firebase.initializeApp({
			// __dev__
			apiKey: "AIzaSyA9ObmyfwRR1hMgRX3Bt09W5-dFjYTKHm0",
			authDomain: "reactcommerce-3a887.firebaseapp.com",
			databaseURL: "https://reactcommerce-3a887.firebaseio.com",
			projectId: "reactcommerce-3a887",
			storageBucket: "reactcommerce-3a887.appspot.com",
			// __prod__
			/*apiKey: "AIzaSyCmprzbuCbxi-hbUZZvRvYpgxsQm2NI1Nc",
			authDomain: "bl-prod-a61d3.firebaseapp.com",
			databaseURL: "https://bl-prod-a61d3.firebaseio.com",
			projectId: "bl-prod-a61d3",
			storageBucket: "bl-prod-a61d3.appspot.com",
			messagingSenderId: "697022644326",
			appId: "1:697022644326:web:e7547d365b2e01f8ce6da7",
			measurementId: "G-P42WPJZKC9"*/
		});
		firebase.auth().languageCode = "pt-BR";
		const isInClient = Constants.appOwnership === "expo";
		if (isInClient) {
			GoogleSignIn.allowInClient();
		}
		var yourClientIdForUseInStandalone = Platform.select({
			android:
				"481340704816-vkbtct7ht541vcjkgu64b5072mh932tl.apps.googleusercontent.com",
			ios:
				"481340704816-36on7r5sglh2i5e1kqsooq57a34l7quk.apps.googleusercontent.com",
		});
		GoogleSignIn.initAsync({
			clientId: yourClientIdForUseInStandalone,
		})
			.then((val) => console.log(val))
			.catch((message) => {
				console.log("GoogleSignIn.initAsync(): " + message);
			});
		firebase.auth().onAuthStateChanged(async (user) => {
			if (user) {
				this.token = user.getIdToken(true);
				SecureStore.setItemAsync("token", await this.token);
			} else {
				this.token = null;
				SecureStore.deleteItemAsync("token");
			}
		});
	}

	auth = firebase.auth;

	facebookInit = async () => {
		const { type, token } = await Facebook.logInWithReadPermissionsAsync(
			FACEBOOK_APP_ID,
			{
				permissions: ["public_profile", "email"],
			}
		);
		switch (type) {
			case "success":
				const credential = await firebase.auth.FacebookAuthProvider.credential(
					token
				);
				return firebase.auth().signInWithCredential(credential);
			case "cancel":
				return false;
			default:
				throw new Error("erro no facebook");
		}
	};

	googleLogin = async () => {
		try {
			if (!firebase.apps.length) {
				firebase.initializeApp({
					apiKey: "AIzaSyA9ObmyfwRR1hMgRX3Bt09W5-dFjYTKHm0",
                    authDomain: "reactcommerce-3a887.firebaseapp.com",
                    databaseURL: "https://reactcommerce-3a887.firebaseio.com",
                    projectId: "reactcommerce-3a887",
                    storageBucket: "reactcommerce-3a887.appspot.com",
				});
			}

			firebase.auth().languageCode = "pt-BR";
			const isInClient = Constants.appOwnership === "expo";
			if (isInClient) {
				GoogleSignIn.allowInClient();
			}
			var yourClientIdForUseInStandalone = Platform.select({
				android:
                    "481340704816-vkbtct7ht541vcjkgu64b5072mh932tl.apps.googleusercontent.com",
                ios:
                    "481340704816-36on7r5sglh2i5e1kqsooq57a34l7quk.apps.googleusercontent.com",
			});

			GoogleSignIn.initAsync({
				clientId: yourClientIdForUseInStandalone,
			}).catch((message) => {
				//if(!__DEV__) alert('GoogleSignIn.initAsync(): ' + message)
				console.log("GoogleSignIn.initAsync(): " + message);
			});
			var credential;
			// add any configuration settings here:

			await GoogleSignIn.askForPlayServicesAsync();
			const { type, user } = await GoogleSignIn.signInAsync();
			if (type === "success") {
				credential = await firebase.auth.GoogleAuthProvider.credential(
					user.auth.idToken,
					user.auth.accessToken
				);
			} else {
				console.error(type);
			}
			await firebase
				.auth()
				.signInWithCredential(credential)
				.catch((e) => {
					alert(e.message);
					console.error(e);
				});
			return firebase.auth().currentUser.uid
				? firebase.auth().currentUser
				: null;
		} catch ({ message }) {
			alert("login: Error:" + message);
		}
	};

	updateUser = async (nome, url) => {
		firebase.auth().updateCurrentUser({ nome, url });
	};

	signUp = async (email, password) => {
		console.log('sign up')
		return firebase.auth().createUserWithEmailAndPassword(email, password);
	};

	getProfilePicture = async () => {
		return firebase.auth().currentUser && firebase.auth().currentUser.photoURL;
	};

	userLogado = async () => {
		return firebase.auth().onAuthStateChanged(function (user) {
			if (user) {
				console.log("User is signed in.");
			} else {
				console.log("No user is signed in.");
			}
		});
	};

	usuarioAtual = async () => {
		return firebase.auth().currentUser;
	};

	userEmailSend = async () => {
		var user = firebase.auth().currentUser;
		user
			.sendEmailVerification()
			.then(function () {
				// Email sent.
				console.log("Email enviado");
			})
			.catch(function (error) {
				// An error happened.
				console.log(error);
			});
	};

	addTel = async (telefone, capth) => {
		return firebase.auth().currentUser.linkWithPhoneNumber(telefone, capth);
	};

	logout = async () => {
		firebase.auth().signOut();
	};

	checkUserLogado = async (cb) => {
		// eslint-disable-next-line standard/no-callback-literal
		return firebase.auth().onAuthStateChanged((user) => cb(!!user));
	};

	checkTel = async (fone, captchaVerifier) => {
		return firebase.auth().signInWithPhoneNumber(fone, captchaVerifier);
	};

	loginEmailSenha = async (email, password) => {
		return firebase.auth().signInWithEmailAndPassword(email, password);
	};

	checkSms = async (telefone) => {
		var applicationVerifier = new firebase.auth.RecaptchaVerifier(
			"recaptcha-container"
		);
		var provider = new firebase.auth.PhoneAuthProvider();
		provider
			.verifyPhoneNumber(telefone, applicationVerifier)
			.then(function (verificationId) {
				var verificationCode = console.log(
					"Please enter the verification " +
					"code that was sent to your mobile device."
				);
				return firebase.auth.PhoneAuthProvider.credential(
					verificationId,
					verificationCode
				);
			})
			.then(function (phoneCredential) {
				// return firebase.auth().signInWithCredential(phoneCredential);

				console.log("add telefone funcionou");
			});
	};

	updatePassword = async (currentPass, newPass) => {
		let user = firebase.auth().currentUser;
		var cred = firebase.auth.EmailAuthProvider.credential(
			user.email,
			currentPass
		);
		await user.reauthenticateWithCredential(cred);
		user = firebase.auth().currentUser;
		await user.updatePassword(newPass);
	};

	resetPass = async (email) => {
		return firebase.auth().sendPasswordResetEmail(email);
	};

	signInMethod = async () => {
		const signInMethods = await firebase
			.auth()
			.fetchSignInMethodsForEmail(firebase.auth().currentUser.email);
		return (
			signInMethods.indexOf(
				firebase.auth.EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD
			) != -1
		);
	};

	refreshToken = async () => {
		if (!firebase.auth().currentUser) return null;
		return firebase.auth().currentUser.getIdToken(true);
	};

	chatFire = () => {
		return firebase.database();
	};
}
export default new Fire();
