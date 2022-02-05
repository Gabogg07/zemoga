import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Zemoga React Native Challenge</Text>
      <Text>By Gabriel Gutierrez</Text>
      <Text>Github: Gabogg07</Text>

      <TouchableWithoutFeedback onPress={()=>navigation.navigate('PostList')}>
        <View>
          <Text>START</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen