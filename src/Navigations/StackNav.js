import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ProductList from '../ProductList';
import ProductDetails from '../ProductDetails';
import Home from '../Home';

const stack = createStackNavigator();

function StackNav() {
  return (
    <stack.Navigator>
      <stack.Screen name="Home" component={Home} />
      <stack.Screen name="Products" component={ProductList} />
      <stack.Screen name="ProductDetails" component={ProductDetails} />
    </stack.Navigator>
  );
}

export default StackNav;
