import React from "react";
import { View, Text, StyleSheet} from "react-native";

const UserCard = ({user}) => {

    const propertyRow = (title, content) => (
        <View style={styles.propertyRow}>
            <Text style={styles.propertyTitle}>{title} </Text>
            <Text style={styles.propertyContent}>{content}</Text>
        </View>
    )
    return (
        <View style={styles.cardContainer}>
                <Text style={styles.generalTitle}>User </Text>
                {propertyRow('Name', user.name)}
                {propertyRow('Email', user.email)}
                {propertyRow('Phone', user.phone)}
                {propertyRow('Website', user.website)}
        </View>
    )
}

export default UserCard

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: 'white',
        borderRadius:5,
        borderColor:'gray',
        padding:15,
        marginVertical:10
    },
    generalTitle:{
        fontSize:22,
        marginBottom:10,
        fontWeight:'bold',
    },
    propertyRow:{
        marginVertical:5,
        flexDirection:'row'
    },
    propertyTitle:{
        fontSize:18,
        color:'grey'
    },
    propertyContent:{
        fontSize:18,
    }
})
