import React from 'react';

import { AppLoading, Font } from 'expo';

import MaterialIcons from '../node_modules/@expo/vector-icons/fonts/MaterialIcons.ttf';

class AppFontLoader extends React.Component {
    state = {
        fontLoaded: false
    };

    async componentWillMount() {
        try {
            await Font.loadAsync({
                MaterialIcons
            });
            this.setState({ fontLoaded: true });
        } catch (error) {
            console.log('error loading icon fonts', error);
        }
    }
    render() {
        if (!this.state.fontLoaded) {
            return <AppLoading />;
        }
        return this.props.children;
    }
}
export { AppFontLoader };