import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Cart from '../Cart';
import Stores from '../Stores';
import StackNav from '../Navigations/StackNav';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Drawer = createDrawerNavigator();

function DrawerNav() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        options={({navigation, props}) => ({
          headerLeft: (props) => {
            <TouchableOpacity>
              <Text>Open</Text>
            </TouchableOpacity>;
          },
        })}>
        <Drawer.Screen name="Home" component={StackNav} />
        <Drawer.Screen name="Cart" component={Cart} />
        <Drawer.Screen name="Stores" component={Stores} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default DrawerNav;
