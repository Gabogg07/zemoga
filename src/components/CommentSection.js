import React from "react";
import { View, Text, StyleSheet, FlatList} from "react-native";
import CommentCard from './CommentCard'

const CommentSection = ({commentList}) => {
    
    return (
        <View style={styles.cardContainer}>
            <Text style={styles.generalTitle}>Comments</Text>
            {commentList.map((item)=>  <CommentCard comment = {item}/>)}
        </View>
    )
}

export default CommentSection

const styles = StyleSheet.create({
    cardContainer: {
        borderRadius:5,
        borderColor:'gray',
        backgroundColor:'white',
    },
    generalTitle:{
        paddingTop:15,
        paddingLeft:15,
        fontSize:22,
        fontWeight:'bold',
    },
})
