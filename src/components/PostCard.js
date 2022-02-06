import React, { useEffect } from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback} from "react-native";
import StatusIcon from "../components/StatusIcon"
import { Ionicons } from '@expo/vector-icons';

const PostCard = ({post, status, onPress, onLongPress, style}) => {
    useEffect(()=>{
    }, [status])
    return (
        <TouchableWithoutFeedback onPress={()=>onPress()} onLongPress={()=> onLongPress()}>
            <View style={[styles.cardContainer, style]}>
                <View>
                    <StatusIcon status={status}/>
                </View>
                <View style={{flex:1}}>
                    <Text style={styles.title}>{post.title}</Text>
                    <Text style={styles.body}>{post.body}</Text>
                </View>
                <View >
                    <Ionicons name="chevron-forward-outline" size={30} color="gray" />
                </View>
            </View>
        </TouchableWithoutFeedback>

    )
}

export default PostCard

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: 'white',
        paddingVertical:10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius:5,
        borderColor:'gray',
        padding: 10,
    },
    title:{
        fontWeight:'bold', 
        fontSize:16,
        marginBottom:3
    },
    body:{
        fontSize: 16
    }
})
