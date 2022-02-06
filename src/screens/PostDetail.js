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




  const [ postComments, setPostComments ] = useState([])
  const [ postCommentsLoading, setPostCommentsLoading ] = useState(true)
  const [ postCommentsError, setPostCommentsError ] = useState(false)

  const [ userData, setUserData ] = useState({})
  const [ userDataLoading, setUserDataLoading ] = useState(true)
  const [ userDataError, setUserDataError ] = useState(false)
  



  const fetchPostComments= (postId)=>{
    setPostCommentsLoading(true)
    axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`).then((data) => {
      setPostComments(data.data)
      setPostCommentsError(false)
    })
    .catch(() => {
      setPostCommentsError("Something wrong happened to get the post list");
    })
    .finally(() => {
      setPostCommentsLoading(false)
    });
  }

  const fetchUserData = (userId) => {
    setUserDataLoading(true)
    axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`).then((data) => {
      setUserData(data.data)
      setUserDataError(false)
    })
    .catch(() => {
      ("Something wrong happened to get the post list");
    })
    .finally(() => {
      setUserDataLoading(false)
    });
  }

  const init = () => {
    fetchPostComments(post.id)
    fetchUserData(post.userId)
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