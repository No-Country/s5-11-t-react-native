import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import FoodMenu from './src/screens/FoodMenu/FoodMenu';
import Home from './src/screens/Home/Home';
import { Image, Text } from 'react-native';
import HomeLogo from './assets/Navigation/Home.png';
import ShopLogo from './assets/Navigation/Shop.png';
import ShoppingCart from './src/screens/ShoppingCart/ShoppingCart';
import ItemDetailContainer from './src/components/FoodMenu/ItemDetailContainer/ItemDetailContainer';
import Tables from './src/components/Tables/Tables';
import StatusScreen from './src/screens/Status/Status';



// screens

const Tab = createBottomTabNavigator();

const screenOptions = () => ({
  tabBarStyle: {
    backgroundColor: '#22191C',
    height: 60,
  },
  tabBarLabel: () => {
    return null;
  },
  headerShown: false,
});

function MyTabs() {
  return (
    <Tab.Navigator initialRouteName="FoodMenu" {...{ screenOptions }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? <Image source={HomeLogo} /> : <Image source={HomeLogo} />,
        }}
        name="FoodMenu"
        component={FoodMenu}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? <Image source={ShopLogo} /> : <Image source={ShopLogo} />,
        }}
        name="ShoppingCart"
        component={ShoppingCart}
      />
    </Tab.Navigator>
  );
}

const Menu = createDrawerNavigator();

function HamburguerMenu() {
  return (
    <Menu.Navigator initialRouteName="FoodMenu">
      <Menu.Screen name="Home" component={Home} />
    </Menu.Navigator>
  );
}

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="MyTabs" component={MyTabs} />
        <Stack.Screen name="ItemDetail" component={ItemDetailContainer} />
        <Stack.Screen name="Tables" component={Tables} />
        <Stack.Screen name="StatusTables" component={StatusScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  
  );
}
