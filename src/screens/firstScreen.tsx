import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Navigator } from 'react-native-navigation';
import HelloWorld from "../components/HelloWorld/index";
import Button from "react-native-button";

interface Props {
    navigator: Navigator;
}

interface State {
    hideNav: boolean;
    badgeNumber: number;
    toggleTabs: boolean;
}

export default class FirstScreen extends Component<Props, State> {
    static navigatorStyle = {
        drawUnderNavBar: true,
        navBarBackgroundColor: '#00f7f7',
        collapsingToolBarImage: "http://lorempixel.com/400/200/",
        collapsingToolBarCollapsedColor: '#0f2362',
        navBarTranslucent: true
    };

    static navigatorButtons = {
        rightButtons: [
            {
                title: 'Edit', // for a textual button, provide the button title (label)
                id: 'edit', // id for this button, given in onNavigatorEvent(event) to help understand which button was clicked
                testID: 'e2e_rules', // optional, used to locate this view in end-to-end tests
                disabled: false, // optional, used to disable the button (appears faded and doesn't interact)
                disableIconTint: true, // optional, by default the image colors are overridden and tinted to navBarButtonColor, set to true to keep the original image colors
                showAsAction: 'ifRoom' // optional, Android only. Control how the button is displayed in the Toolbar. Accepted valued: 'ifRoom' (default) - Show this item as a button in an Action Bar if the system decides there is room for it. 'always' - Always show this item as a button in an Action Bar. 'withText' - When this item is in the action bar, always show it with a text label even if it also has an icon specified. 'never' - Never show this item as a button in an Action Bar.
            }]
    };

    constructor(props: Props) {
        super(props)

    }
    state: State = {
        hideNav: true,
        badgeNumber: 0,
        toggleTabs: true
    }

    toggleNavigationBar() {
        this.setState({ hideNav: !this.state.hideNav })
        let hideNav: string = this.state.hideNav ? "shown" : "hidden";
        this.props.navigator.toggleNavBar({
            to: hideNav, // required, 'hidden' = hide navigation bar, 'shown' = show navigation bar
            animated: true // does the toggle have transition animation or does it happen immediately (optional). By default animated: true
        });

    }

    increasTapBatge() {
        let badge: number = this.state.badgeNumber + 1;
        this.props.navigator.setTabBadge({
            badge // badge value, null to remove badge
        });

        this.setState({ badgeNumber: badge })
    }

    toggleTaps() {
        this.setState({ toggleTabs: !this.state.toggleTabs })
        let ShowTabs: string = this.state.toggleTabs ? "shown" : 'hidden';
        this.props.navigator.toggleTabs({
            to: ShowTabs, // required, 'hidden' = hide tab bar, 'shown' = show tab bar
            animated: true // does the toggle have transition animation or does it happen immediately (optional)
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to React Native!
                </Text>
                <Text style={styles.instructions}>
                    To get started, edit index.android.js
                </Text>
                <Text style={styles.instructions}>
                    Shake or press menu button for dev menu{this.state.badgeNumber}
                </Text>
                <Button onPress={this.toggleNavigationBar.bind(this)} >show/hide navBar</Button>
                <Button onPress={this.increasTapBatge.bind(this)} >Increase Badge number</Button>
                <Button onPress={this.toggleTaps.bind(this)} >toggle tabs</Button>
                <HelloWorld style={styles.helloworld} max={10} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF",
    } as React.ViewStyle,

    welcome: {
        fontSize: 20,
        textAlign: "center",
        margin: 10,
    } as React.TextStyle,

    instructions: {
        textAlign: "center",
        color: "#333333",
        marginBottom: 5,
    } as React.TextStyle,

    helloworld: {
        marginVertical: 15,
    } as React.ViewStyle,
});
