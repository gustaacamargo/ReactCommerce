import React from "react";
import { TouchableOpacity } from "react-native";
import { Header as He } from "react-native-elements";
import { Ionicons, SimpleLineIcons } from '@expo/vector-icons'; 
import Fonts from "../../constants/Fonts";
import { screenWidth } from "../../constants/Screen";

export default function Header({ navigation, text, goTo, onPress }) {
    
    function action(type) {
        if(type == 'action') {
            if (goTo) {
                if(goTo == "drawer") {
                    navigation.toggleDrawer();
                }
                else if(goTo == "goBack") {
                    navigation.goBack()
                }
                else {
                    navigation.navigate(goTo)
                }
            }
            else if (onPress) {
                onPress()
            }
        }
        else {
            if(goTo == "drawer") {
                return "ios-menu-outline"
            }
            else if(goTo == "goBack") {
                return "arrow-back"
            }
        }
    }

    return (
        <He
            leftComponent={
                <TouchableOpacity onPress={() => action('action')}>
                    <Ionicons name={action()} size={32} color="white" />
                </TouchableOpacity>
            }
            centerComponent={{
                text: text ? text : "",
                style: {
                    color: "#fff",
                    fontSize: 18,
                    fontFamily: Fonts.mainBold,
                    width: screenWidth * 0.7,
                    textAlign: "center"
                }
            }}
            rightComponent={
                <TouchableOpacity style={{ width: screenWidth * 0.078, height: screenWidth * 0.078, borderRadius: 250, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' }}>
                    <SimpleLineIcons style={{ bottom: 1 }} name="handbag" size={22} color="black" />
                </TouchableOpacity>
            }
            
            backgroundColor="#131432"
            barStyle={"light-content"}
        />
    );
}