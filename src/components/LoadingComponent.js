
import { StyleSheet, ActivityIndicator } from 'react-native';
import Container from '../components/Container'

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