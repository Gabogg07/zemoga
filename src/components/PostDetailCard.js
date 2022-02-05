import React from "react";
import { View, Text, StyleSheet} from "react-native";

const PostDetailCard = ({post}) => {
    return (
        <View style={styles.cardContainer}>
                <Text style={styles.generalTitle}>Description </Text>
                <Text style={styles.propertyTitle}>{post.title} </Text>
                <Text style={styles.propertyContent}>{post.body} </Text>
        </View>
    )
}

export default PostDetailCard

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
    propertyTitle:{
        fontSize:18,
        marginVertical:5,
        fontWeight:'bold',
    },
    propertyContent:{
        fontSize:18,
    }
})
