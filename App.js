import React from 'react';
import {SafeAreaView} from 'react-native';
import Home from './src/pages/Home';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#eee'}}>
      <Home />
    </SafeAreaView>
  );
};

export default App;
