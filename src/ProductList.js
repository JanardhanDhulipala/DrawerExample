import React from 'react';
import {View, Button} from 'react-native';

function ProductList({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        onPress={() => navigation.navigate('ProductDetails')}
        title="Go to Product Details"
      />
    </View>
  );
}

export default ProductList;
