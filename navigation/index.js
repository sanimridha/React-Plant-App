import React from 'react';
import {Image } from 'react-native'
import  { createAppContainer, createStackNavigator } from 'react-navigation';

import Welcome from '../screens/Welcome'
import Browse from '../screens/Browse'
import Login from '../screens/Login'
import Product from '../screens/Product'
import Settings from '../screens/Settings'

import { theme} from '../constants'

const screen = createStackNavigator({
    Welcome,
    Browse,
    Login,
    Product,
    Settings,
},
     {
         defaultNavigationOptions:{
             headerStyle:{},
             headerBackImage:<Image />,
             headerBackTitle: null,
             headerLeftContainerStyle:{},
             headerRightContainerStyle:{},
         }
     });

     export default createAppContainer(screen);