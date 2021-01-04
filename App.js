import React from 'react';
import Routes from './src/routes/routes';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default class App extends React.Component {
  constructor(props) {
		super(props)
		this.state = {
			isLoadingComplete: false,
		}
	}

  render() {
    if(!this.state.isLoadingComplete) {
      return(
        <AppLoading
          startAsync={loadResourcesAsync}
					onFinish={() => this.setState({ isLoadingComplete: true })}
					onError={console.warn}
        />
      )
    }

    return (
      <SafeAreaProvider>
        <Routes/>
      </SafeAreaProvider>
    );
  }
}

async function loadResourcesAsync() {
	await Promise.all([
		Font.loadAsync({
			"AirbnbCereal-Medium": require("./assets/fonts/AirbnbCereal-Medium.ttf"),
			"AirbnbCereal-Black": require("./assets/fonts/AirbnbCereal-Black.ttf"),
			"AirbnbCereal-Bold": require("./assets/fonts/AirbnbCereal-Bold.ttf"),
		}),
	]);
}
