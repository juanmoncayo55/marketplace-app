import React from 'react';
import {StatusBar} from 'react-native';
import {NativeBaseProvider, extendTheme} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

//React Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

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
import StoreProfile from './views/store/StoreProfile';
import HomeDashboard from './views/HomeDashboard';
import BrowserDashboard from './views/BrowserDashboard';
import StoreDashboard from './views/StoreDashboard';
import OrderDashboard from './views/OrderDashboard';
import ProfileDashboard from './views/ProfileDashboard';

import HeaderBottomTab from './components/HeaderBottomTab';

const StackN = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

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
    },
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
  },
  fonts: {
    helvetica: 'Helvetica',
    productSans: 'ProductSans',
    SFProText: 'SFProText',
  },
});

const App = () => {
  return (
    <>
      <NativeBaseProvider theme={theme}>
        <StatusBar barStyle="light-content" backgroundColor="#33907C" />
        <NavigationContainer>
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
              name="Dashboard"
              component={DashboardTabs}
              options={{
                title: 'Dashboard',
                headerShown: false,
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
                headerShown: true,
                header: ({navigation, route, options}) => (
                  <HeaderBottomTab
                    title="My Store"
                    iconSearch={false}
                    heartCart={true}
                    iconLeft={false}
                    closeRight={true}
                  />
                ),
              }}
            />
            <StackN.Screen
              name="AddProduct"
              component={AddProduct}
              options={{
                headerShown: true,
                header: ({navigation, route, options}) => (
                  <HeaderBottomTab
                    titleCenter="Add Product"
                    iconSearch={false}
                    heartCart={true}
                    iconLeft={true}
                  />
                ),
              }}
            />
          </StackN.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </>
  );
};

function DashboardTabs() {
  return (
    <Tab.Navigator
      //screenOptions={{ headerShown: false }}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          size = 23;
          if (route.name === 'HomeDashboard') {
            iconName = 'home-sharp';
          } else if (route.name === 'BrowserDashboard') {
            iconName = 'search-sharp';
          } else if (route.name === 'StoreDashboard') {
            iconName = 'storefront-sharp';
          } else if (route.name === 'OrderDashboard') {
            iconName = 'reorder-four-sharp';
          } else if (route.name === 'ProfileDashboard') {
            iconName = 'person-sharp';
          }

          // You can return any component that you like here!
          return (
            <Ionicons name={iconName} size={size} fontSize="xl" color={color} />
          );
        },
        headerShown: false,
        tabBarActiveTintColor: '#33907C',
        tabBarInactiveTintColor: 'rgba(79,79,79,.6)',
        tabBarLabelStyle: {
          fontSize: 12,
        },
      })}
      initialRouteName="HomeDashboard"
      sceneContainerStyle={{backgroundColor: '#F6F9FF'}}>
      <Tab.Screen
        name="HomeDashboard"
        component={HomeDashboard}
        options={{
          tabBarLabel: 'Home',
          headerShown: true,
          header: ({navigation, route, options}) => (
            <HeaderBottomTab title="Groceries" bottomSearch={true} />
          ),
        }}
      />
      <Tab.Screen
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
      <Tab.Screen
        name="StoreDashboard"
        component={StoreDashboard}
        options={{
          tabBarLabel: 'Store',
          headerShown: true,
          header: ({navigation, route, options}) => (
            <HeaderBottomTab title="My Store" />
          ),
        }}
      />
      <Tab.Screen
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
      <Tab.Screen
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
      <Tab.Screen
        name="StoreProfile"
        component={StoreProfile}
        options={{
          headerShown: true,
          tabBarStyle: {display: 'none'},
          tabBarButton: () => null, // Con este oculto la vista en el tabBottom
          tabBarVisible: false, // Con este oculto la vista en el tabBottom
          header: ({navigation, route, options}) => (
            <HeaderBottomTab
              title="Tradly Store"
              iconSearch={true}
              heartCart={true}
              iconLeft={true}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default App;
