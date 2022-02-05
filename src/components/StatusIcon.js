import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';

const StatusIcon = ({status='UNREAD'}) => {
    const statusList= {
        FAVORITE: {
            icon: 'star',
            color: '#ffe911',
            size:26
        },
        UNREAD: {
            icon: 'radio-button-on',
            color: 'dodgerblue',
            size: 26
        },
        READ: {
            icon: 'radio-button-on',
            color: 'white',
            size: 26
        }
    }
    return (
        <View style={styles.iconContainer}>
            <Ionicons name={statusList[status].icon} size={statusList[status].size} color={statusList[status].color} />
        </View>
    )
}

export default StatusIcon

const styles = StyleSheet.create({
    iconContainer: {
        marginRight: 5,
        justifyContent: 'center',
        alignItems: 'center',
        flex:1
    }
})