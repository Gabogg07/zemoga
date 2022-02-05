import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import Container from '../components/Container'

const HomeScreen = ({navigation}) => {
  return (
    <Container style={styles.container}>

      <View style={styles.segment}>
        <StatusBar style="auto" />
        <Text style={styles.text}>Zemoga React Native Challenge</Text>
        <Text style={styles.text}>By Gabriel Gutierrez</Text>
        <Text style={styles.text}>Github: Gabogg07</Text>

        <TouchableWithoutFeedback onPress={()=>navigation.navigate('PostList')}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>START</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </Container>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#ebebeb',
    alignItems: 'center',
    justifyContent: 'center',
  },
  segment:{
    backgroundColor:'white',
    alignItems: 'center',
    justifyContent: 'center',
    width:'90%',
    height:'95%',
    borderRadius:15,
  },
  text:{
    fontSize:20
  },
  buttonText:{
    fontSize:20,
    color:'white',
  },
  button: {
    marginVertical:15,
    padding:10,
    width:'90%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
    borderRadius:5
  }
});

export default HomeScreen