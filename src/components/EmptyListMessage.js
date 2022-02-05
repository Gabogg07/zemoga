
import { TouchableWithoutFeedback, StyleSheet, Text, View } from 'react-native';
import Container from '../components/Container'

const EmptyListMessage = ({OnRetry}) => {
  return (
    <Container style={styles.container}>
        <Text style={styles.errorMessageText}>Seems like there are no post left!</Text>
        <TouchableWithoutFeedback onPress={()=>OnRetry()}>
            <View style={styles.button}>
                <Text style={styles.buttonMessage}>Get new posts</Text>
            </View>
        </TouchableWithoutFeedback>
    </Container>

  );
}

const styles = StyleSheet.create({
  container: {
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

export default EmptyListMessage