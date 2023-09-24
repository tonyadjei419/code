import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import LogInScreen from './src/screens/LogInScreen';
import Navigation from './src/navigations';




const App = () => {

  return (
    <SafeAreaView style={styles.root}>
      <Navigation />
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor:'white'
  },
 
});

export default App;


