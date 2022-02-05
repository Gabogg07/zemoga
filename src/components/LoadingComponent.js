
import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { TouchableWithoutFeedback, StyleSheet, ActivityIndicator, View } from 'react-native';
import Container from '../components/Container'
import PostCard from '../components/PostCard'
import UserCard from '../components/UserCard';
import PostDetailCard from '../components/PostDetailCard'
import CommentSection from '../components/CommentSection'

const LoadingComponent = ({OnRetry}) => {

  return (
    <Container style={styles.container}>
        <ActivityIndicator size='large' color="green"/>
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
});

export default LoadingComponent