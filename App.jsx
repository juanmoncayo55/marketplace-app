import React from 'react';
import {StatusBar} from 'react-native';
import {NativeBaseProvider, extendTheme} from 'native-base';

//React Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//Vistas
import Login from './views/Login';
import SignUp from './views/SignUp';
import AcountVerify from './views/AcountVerify';
import CategoryProduct from './views/CategoryProduct';
import Product from './views/Product';
import Wishlist from './views/Wishlist';
import Cart from './views/cart/Cart';
import NewAddress from './views/cart/NewAddress';
import Payment from './views/cart/Payment';
import AddCard from './views/cart/AddCard';
import CheckoutSuccess from './views/cart/CheckoutSuccess';
import CreateStore from './views/store/CreateStore';
import AddProduct from './views/store/AddProduct';
import Dashboard from './views/Dashboard';
import StoreProfile from './views/store/StoreProfile';
import HomeDashboard from './views/HomeDashboard';
import BrowserDashboard from './views/BrowserDashboard';
import StoreDashboard from './views/StoreDashboard';
import OrderDashboard from './views/OrderDashboard';
import ProfileDashboard from './views/ProfileDashboard';
import EditProfile from './views/EditProfile';

import HeaderBottomTab from './components/HeaderBottomTab';

import UserState from "./context/user/userState";
import { navigationRef } from './helpers/RootNavigation';

const StackN = createNativeStackNavigator();

const theme = extendTheme({
  colors: {
    gradientCard: 'linear-gradient(#F90, #212121)',
    bgViews: '#F6F9FF',
    greenPrimary: '#33907C',
    clText: '#4f4f4f',
    titleBold: '#212121',
    grayCl: '#D8D8D8',
    amber: {
      400: '#13B58C',
    }
  },
  fontConfig: {
    Helvetica: {
      400: {
        normal: 'Helvetica',
      },
    },
    ProductSans: {
      400: {
        normal: 'ProductSans-Regular',
      },
      700: {
        normal: 'ProductSans-Bold',
      },
    },
    SFProText: {
      400: {
        normal: 'SFProText-Regular',
      },
      600: {
        normal: 'SFProText-Semibold',
      },
    },
    Monserrat: {
      700:{
        normal: "Montserrat-Bold"
      },
      600:{
        normal: "Montserrat-Medium"
      },
      500:{
        normal: "Montserrat-SemiBold"
      },
      400:{
        normal: "Montserrat-Regular"
      },
      300:{
        normal: "Montserrat-Light"
      }
    }
  },
  fonts: {
    helvetica: 'Helvetica',
    productSans: 'ProductSans',
    SFProText: 'SFProText',
    Monserrat: 'Monserrat'
  },
});

const App = () => {
  return (
    <>
      <NativeBaseProvider theme={theme}>
        <StatusBar barStyle="light-content" backgroundColor="#33907C" />
        <UserState>
          <NavigationContainer ref={navigationRef}>
            <StackN.Navigator
              initialRouteName="Login"
              sceneContainerStyle={{backgroundColor: '#F6F9FF'}}>
              <StackN.Screen
                name="Login"
                component={Login}
                options={{
                  title: 'Iniciar Sesión',
                  headerShown: false,
                }}
              />
              <StackN.Screen
                name="SignUp"
                component={SignUp}
                options={{
                  title: 'Registrarme',
                  headerShown: false,
                }}
              />
              <StackN.Screen
                name="AcountVerify"
                component={AcountVerify}
                options={{
                  title: 'Verificar Cuenta',
                  headerShown: false,
                }}
              />
              <StackN.Screen
                name="HomeDashboard"
                component={HomeDashboard}
                options={{
                  title: 'Categoria del Producto',
                  tabBarLabel: 'Home',
                  headerShown: true,
                  header: ({navigation, route, options}) => (
                    <HeaderBottomTab title="Groceries" bottomSearch={true} />
                  )
                }}
              />
              <StackN.Screen
                name="BrowserDashboard"
                component={BrowserDashboard}
                options={{
                  tabBarLabel: 'Browse',
                  headerShown: true,
                  header: ({navigation, route, options}) => (
                    <HeaderBottomTab
                      title="Browse"
                      bottomSearch={true}
                      tagsSearch={true}
                    />
                  ),
                }}
              />
              <StackN.Screen
                name="StoreDashboard"
                component={StoreDashboard}
                options={{
                  tabBarLabel: 'Store',
                  headerShown: false
                }}
              />
              <StackN.Screen
                name="OrderDashboard"
                component={OrderDashboard}
                options={{
                  tabBarLabel: 'Order History',
                  headerShown: true,
                  header: ({navigation, route, options}) => (
                    <HeaderBottomTab title="Order History" />
                  ),
                }}
              />
              <StackN.Screen
                name="ProfileDashboard"
                component={ProfileDashboard}
                options={{
                  tabBarLabel: 'Profile',
                  headerShown: true,
                  header: ({navigation, route, options}) => (
                    <HeaderBottomTab title="Profile" />
                  ),
                }}
              />
              <StackN.Screen
                name="CategoryProduct"
                component={CategoryProduct}
                options={{
                  title: 'Categoria del Producto',
                  headerShown: true,
                  header: ({navigation, route, options}) => (
                    <HeaderBottomTab
                      titleCenter="Tradly Store"
                      iconSearch={false}
                      heartCart={true}
                      tagsSearch={true}
                      iconLeft={true}
                    />
                  ),
                }}
              />
              <StackN.Screen
                name="Product"
                component={Product}
                options={{
                  title: 'Producto',
                  headerShown: false,
                }}
              />
              <StackN.Screen
                name="Wishlist"
                component={Wishlist}
                options={{
                  title: 'Wishlist',
                  headerShown: true,
                  header: ({navigation, route, options}) => (
                    <HeaderBottomTab
                      titleCenter="Tradly Store"
                      iconSearch={false}
                      heartCart={true}
                      tagsSearch={true}
                      iconLeft={true}
                    />
                  ),
                }}
              />
              <StackN.Screen
                name="Cart"
                component={Cart}
                options={{
                  title: 'Cart',
                  headerShown: true,
                  header: ({navigation, route, options}) => (
                    <HeaderBottomTab
                      titleCenter="My Cart"
                      iconSearch={false}
                      heartCart={true}
                      iconLeft={true}
                    />
                  ),
                }}
              />
              <StackN.Screen
                name="NewAddress"
                component={NewAddress}
                options={{
                  title: 'NewAddress',
                  headerShown: true,
                  header: ({navigation, route, options}) => (
                    <HeaderBottomTab
                      titleCenter="Add a New Address"
                      iconSearch={false}
                      heartCart={true}
                      iconLeft={true}
                    />
                  ),
                }}
              />
              <StackN.Screen
                name="Payment"
                component={Payment}
                options={{
                  title: 'Payment',
                  headerShown: true,
                  header: ({navigation, route, options}) => (
                    <HeaderBottomTab
                      titleCenter="Payment Option"
                      iconSearch={false}
                      heartCart={true}
                      iconLeft={true}
                    />
                  ),
                }}
              />
              <StackN.Screen
                name="AddCard"
                component={AddCard}
                options={{
                  title: 'AddCard',
                  headerShown: true,
                  header: ({navigation, route, options}) => (
                    <HeaderBottomTab
                      titleCenter="Add Card"
                      iconSearch={false}
                      heartCart={true}
                      iconLeft={true}
                    />
                  ),
                }}
              />
              <StackN.Screen
                name="CheckoutSuccess"
                component={CheckoutSuccess}
                options={{
                  title: 'CheckoutSuccess',
                  headerShown: true,
                  header: ({navigation, route, options}) => (
                    <HeaderBottomTab
                      title="Order Details"
                      iconSearch={false}
                      heartCart={true}
                      iconLeft={false}
                      closeRight={true}
                    />
                  ),
                }}
              />
              <StackN.Screen
                name="CreateStore"
                component={CreateStore}
                options={{
                  title: 'CreateStore',
                  headerShown: false
                }}
              />
              <StackN.Screen
                name="AddProduct"
                component={AddProduct}
                options={{
                  headerShown: false
                }}
              />
              <StackN.Screen
                name="EditProfile"
                component={EditProfile}
                options={{
                  headerShown: true,
                  header: ({navigation, route, options}) => (
                    <HeaderBottomTab
                      titleCenter="Edit Profile"
                      iconSearch={false}
                      heartCart={true}
                      iconLeft={true}
                    />
                  ),
                }}
              />
            </StackN.Navigator>
          </NavigationContainer>
          <Dashboard />
        </UserState>
      </NativeBaseProvider>
    </>
  );
};

export default App;
