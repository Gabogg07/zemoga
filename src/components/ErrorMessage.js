
import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { TouchableWithoutFeedback, StyleSheet, Text, View } from 'react-native';
import Container from '../components/Container'
import PostCard from '../components/PostCard'
import UserCard from '../components/UserCard';
import PostDetailCard from '../components/PostDetailCard'
import CommentSection from '../components/CommentSection'

const ErrorMessage = ({OnRetry}) => {

  return (
    <Container style={styles.container}>
        <Text style={styles.errorMessageText}>Oh no! There was an error loading your data</Text>
        <TouchableWithoutFeedback onPress={()=>OnRetry()}>
            <View style={styles.button}>
                <Text style={styles.buttonMessage}>Retry</Text>
            </View>
        </TouchableWithoutFeedback>
    </Container>

  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'white',
    alignItems: 'center',
    justifyContent: 'center',
    flex:1,
  },
  button:{
    marginVertical:10,
    borderRadius:5,
    backgroundColor:'green',
    paddingVertical:5,
    width:'50%',
  },
  errorMessageText:{
    fontSize:25,
    textAlign: 'center',
  },
  buttonMessage:{
    fontSize:20,
    color:'white',
    textAlign: 'center',

  }
});

export default ErrorMessage