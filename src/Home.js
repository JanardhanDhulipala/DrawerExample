import React from 'react';
import {View, Button} from 'react-native';

function Home({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        onPress={() => navigation.navigate('Products')}
        title="Go to ProductList"
      />
    </View>
  );
}

export default Home;
