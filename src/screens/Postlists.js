import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { TouchableWithoutFeedback, Alert, FlatList, StyleSheet, Text, View} from 'react-native';
import Container from '../components/Container'
import PostCard from '../components/PostCard'
import ErrorMessage from '../components/ErrorMessage'
import LoadingComponent from '../components/LoadingComponent';
import EmptyListMessage from '../components/EmptyListMessage'
import { Ionicons } from '@expo/vector-icons';
import {sortByFavorite, changePostStatus} from '../helpers/helpers'
import {storeData, getData} from '../helpers/asyncStorageHelpers'

const PostList = ({navigation}) => {
  navigation.setOptions({
    headerRight: () => (
      <TouchableWithoutFeedback onPress={()=>{    Alert.alert(
        'Delete all posts',
        'By continuing all posts will be deleted',
        [
          {text:'Cancel', onPress: ()=>{}, style:'default'}, 
          {text:'Delete', onPress: ()=>setSortedPostsState([]), style:'destructive'}
        ]
      )}}>
        <View style={{padding:10, marginRight:10}}>
          <Ionicons name={'trash'} size={20} color={'orangered'} />
        </View>
      </TouchableWithoutFeedback>
    ),
  })

  const [posts, setPosts] = useState([])
  const [postListLoading, setPostListLoading] = useState(true)
  const [postError, setPostError] = useState(false)
  const [sortedPosts, setSortedPostsState] = useState([])

  const setSortedPosts = (newPosts) => {
    storeData('posts', newPosts)
    setSortedPostsState(newPosts)
  }

  const fetchPosts = ()=>{
    setPostListLoading(true)
    axios.get("https://jsonplaceholder.typicode.com/posts").then((data) => {
      const newPosts = data.data.slice(0,3)
      setPosts(newPosts)
      setPostError(false)
      setSortedPosts(sortByFavorite([...newPosts]))
    })
    .catch(() => {
      setPostError("Something wrong happened to get the post list");
    })
    .finally(() => {
      setPostListLoading(false)
    });
  }

  const findInitialState = async () => {
    let storedPosts = await getData('posts')
    if(storedPosts){
      console.log('STORED')
      console.log(storedPosts)
      setSortedPostsState(storedPosts)
      setPostListLoading(false)
    } else {
      fetchPosts()
    }
  }

  useEffect(()=>{
    findInitialState()
  },[])

  const onPressHandler = (post) => {
    navigation.navigate('PostDetail', { post, changeStatus: (newStatus) => setSortedPosts(sortByFavorite(changePostStatus(post.id, newStatus, sortedPosts)),)})
  }

  const onDelete = (postId) => {
    let newData = posts.filter(function(value){
      return value.id !== postId
    })
    setPosts(newData)
  }

  const onLongpressHandler = (post) => {
    Alert.alert(
      'Delete post',
      'By continuing this post will be deleted locally',
      [
        {text:'Cancel', onPress: ()=>{}, style:'default'}, 
        {text:'Delete', onPress: ()=>onDelete(post.id), style:'destructive'}
      ]
    )
  }

  if(postError){
    return <ErrorMessage OnRetry={fetchPosts}/>
  }

  if(postListLoading){
    return (
      <LoadingComponent/>
    )
  }

  if(sortedPosts.length === 0){
    return <EmptyListMessage OnRetry={fetchPosts}/>
  }

  return (
    <>
    <Container style={styles.container}>
      <FlatList
        data={sortedPosts}
        renderItem= {( {item })=>{
          return (
            <PostCard 
              onPress={()=>onPressHandler(item)}
              onLongPress={()=>onLongpressHandler(item)}
              style={styles.card}
              post = {item}
              status={item.status}
            />
          )
        } }
        refreshing={postListLoading}
        onRefresh={fetchPosts}
      />
    </Container>
    </>
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

export default PostList