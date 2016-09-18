import { View, StyleSheet } from 'react-native';
import React, { Component, PropTypes } from 'react';

import { ListItem } from '../react-native-material-ui';

import routes from '../routes';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
const propTypes = {
    navigator: PropTypes.object.isRequired,
};

class ActionButtonSpec extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ListItem
                    divider
                    centerElement="With toolbar transition"
                    onPress={() => this.props.navigator.push(routes.actionButtonToolbar)}
                />
                <ListItem
                    divider
                    centerElement="With speed dial transition"
                    onPress={() => this.props.navigator.push(routes.actionButtonSpeedDial)}
                />
            </View>
        );
    }
}

ActionButtonSpec.propTypes = propTypes;

export default ActionButtonSpec;
