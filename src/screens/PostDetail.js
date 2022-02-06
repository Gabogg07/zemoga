import axios from 'axios';
import { useEffect, useState } from 'react';
import { TouchableWithoutFeedback, StyleSheet, ScrollView, View } from 'react-native';
import Container from '../components/Container'
import UserCard from '../components/UserCard';
import PostDetailCard from '../components/PostDetailCard'
import CommentSection from '../components/CommentSection'
import ErrorMessage from '../components/ErrorMessage'
import LoadingComponent from '../components/LoadingComponent';
import { Ionicons } from '@expo/vector-icons';
import {usePostComments, useUserData} from '../api/jsonPlaceHolder/jsonPlaceHolderAPIHook'


const PostDetail = ({route, navigation}) => {
  const {post, changeStatus} = route.params

  const [ isFavorite, setIsFavorite ] = useState(post.status === 'FAVORITE')

  const handleFavoriteButton = () => {
    changeStatus(isFavorite ? 'READ' : 'FAVORITE')
    setIsFavorite(!isFavorite)
  }

  navigation.setOptions({
    headerRight: () => (
      <TouchableWithoutFeedback onPress={handleFavoriteButton}>
        <View style={{padding:10, marginRight:10}}>
          <Ionicons name={isFavorite? 'star' : 'star-outline'} size={25} color={'#ffe911'} />
        </View>
      </TouchableWithoutFeedback>
    ),
  })

  const [ queryUserData, userData, userDataLoading, userDataError] = useUserData()
  const [ queryPostComments, postComments, postCommentsLoading, postCommentsError] = usePostComments()

  const init = () => {
    queryPostComments(post.id)
    queryUserData(post.userId)
  }

  useEffect(()=>{
    init()
    changeStatus('READ')
  },[])



  if(postCommentsError || userDataError){
    return <ErrorMessage OnRetry={init}/>
  }

  if(postCommentsLoading || userDataLoading){
    return (
      <LoadingComponent/>
    )
  }


  return (
    <ScrollView>
    <Container style={styles.container}>
        <PostDetailCard post={post}/>
        <UserCard user={userData}/>
        <CommentSection commentList={postComments}/>
    </Container>
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#ebebeb'
  },
  card:{
    marginVertical:5
  }
});

export default PostDetail