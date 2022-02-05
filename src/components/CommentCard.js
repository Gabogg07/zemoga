import React from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback} from "react-native";
import StatusIcon from "../components/StatusIcon"
import { Ionicons } from '@expo/vector-icons';

const CommentCard = ({comment}) => {
    return (
        <View style={styles.cardContainer}>
            <View style={styles.userDataContainer}>
                <Text style={styles.segmentTitle}>{comment.name}</Text>
            </View>
            <View>
                <Text style={styles.body}>{comment.body}</Text>
            </View>
            <View style={styles.divider}/>
        </View>
    )
}

export default CommentCard

const styles = StyleSheet.create({
    cardContainer: {
        borderRadius:5,
        borderColor:'gray',
        backgroundColor:'white',
        padding:15,
        paddingBottom:0
    },
    body:{
        fontSize:16,
    },
    userData:{
        fontSize: 12
    },
    segmentTitle:{
        fontSize: 18,
        fontWeight:'bold',
    },
    userDataContainer:{
        marginVertical:5
    },
    divider:{
        alignSelf:'center',
        width:'90%',
        borderBottomColor:'lightgrey',
        borderBottomWidth:1,
        marginTop:20
    }
})
