import React from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';
import { NativeBaseProvider, extendTheme, Icon, Box, Text, Stack,VStack,HStack, Heading, Pressable, Input, Flex, Button } from "native-base";
import Ionicons  from "react-native-vector-icons/Ionicons";
import FontAwesome  from "react-native-vector-icons/FontAwesome";
import MaterialIcons  from "react-native-vector-icons/MaterialIcons";

//React Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//Vistas
import Login from "./views/Login";
import SignUp from "./views/SignUp";
import AcountVerify from "./views/AcountVerify";
import CategoryProduct from "./views/CategoryProduct";
import Product from "./views/Product";
import Wishlist from "./views/Wishlist";
import Cart from "./views/cart/Cart";
import NewAddress from "./views/cart/NewAddress";
import Payment from "./views/cart/Payment";
import HomeDashboard from "./views/HomeDashboard";
import BrowserDashboard from "./views/BrowserDashboard";
import StoreDashboard from "./views/StoreDashboard";
import OrderDashboard from "./views/OrderDashboard";
import ProfileDashboard from "./views/ProfileDashboard";

import HeaderDashboard from "./components/HeaderDashboard";

//Styles
import globalStyles from "./styles/globalStyles";

const StackN = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const theme = extendTheme({
  colors: {
    amber: {
      400: '#13B58C'
    },
  },
  fontConfig: {
    Helvetica: {
      400: {
        normal: "Helvetica"
      }
    },
    ProductSans: {
      400: {
        normal: "ProductSans-Regular"
      },
      700: {
        normal: "ProductSans-Bold"
      }
    },
    SFProText: {
      400: {
        normal: "SFProText-Regular"
      },
      600: {
        normal: "SFProText-Semibold"
      }
    }
  },
  fonts: {
    helvetica: "Helvetica",
    productSans: "ProductSans",
    SFProText: "SFProText"
  }

});
/*fonts: {
  heading: "Roboto",
  body: "Roboto",
  mono: "Roboto",
}*/

const DashboardTabs = () => {
  return (
    <Tab.Navigator
      //screenOptions={{ headerShown: false }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          size=23;
          if (route.name === 'HomeDashboard') {
            iconName = "home-sharp"
          } else if (route.name === 'BrowserDashboard') {
            iconName = "search-sharp"
          } else if (route.name === 'StoreDashboard') {
            iconName = "storefront-sharp"
          } else if (route.name === 'OrderDashboard') {
            iconName = "reorder-four-sharp"
          } else if (route.name === 'ProfileDashboard') {
            iconName = "person-sharp"
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} fontSize="xl" color={color} />;
        },
        headerShown: false,
        tabBarActiveTintColor: '#33907C',
        tabBarInactiveTintColor: '#4a4a4a',
        tabBarLabelStyle: {
          fontSize: 12,
        }
      })}
      sceneContainerStyle={{backgroundColor: "#F6F9FF"}}
    >
      <Tab.Screen name="HomeDashboard" component={HomeDashboard}
        options={{
          tabBarLabel: "Home",
          headerShown: true,
          header: ({ navigation, route, options }) => {
            return (
              <View style={[globalStyles.bg33907C]}>
                <Box style={styles.contenidoHeader}>
                  <Stack>
                    <VStack flexDirection="row" justifyContent="space-between" alignItems="center">
                      <HStack>
                        <Heading color="white" size="xl">Groceries</Heading>
                      </HStack>
                      <HStack space={3}>
                        <Pressable>
                          <Ionicons name="heart" size={26} color="white" />
                        </Pressable>
                        <Pressable onPress={() => navigation.navigate("Cart")}>
                          <Ionicons name="cart-sharp" size={26} color="white" />
                        </Pressable>
                      </HStack>
                    </VStack>
                    <VStack mt="4" mb="2">
                      <Input
                        placeholder="Search Product"
                        color="#4F4F4F"
                        variant="rounded"
                        style={globalStyles.input}
                        placeholderTextColor="#4F4F4F"
                        size="lg"
                        bgColor="white"
                        InputLeftElement={
                          <Icon as={Ionicons} size="lg" ml="3" color="#33907C" name="search" />
                        }
                      />
                    </VStack>
                  </Stack>
                </Box>
              </View>
            )
          }
        }}
      />
      <Tab.Screen name="BrowserDashboard" component={BrowserDashboard}
        options={{
          tabBarLabel: "Browse",
          headerShown: true,
          header: ({ navigation, route, options }) => (
            <View style={[globalStyles.bg33907C]}>
              <Box style={styles.contenidoHeader}>
                <Stack>
                  <VStack flexDirection="row" justifyContent="space-between" alignItems="center">
                    <HStack>
                      <Heading color="white" size="xl">Browse</Heading>
                    </HStack>
                    <HStack space={3}>
                      <Pressable>
                        <Ionicons name="heart" size={26} color="white" />
                      </Pressable>
                      <Pressable onPress={() => navigation.navigate("Cart")}>
                        <Ionicons name="cart-sharp" size={26} color="white" />
                      </Pressable>
                    </HStack>
                  </VStack>
                  <VStack mt="4">
                    <Input
                      placeholder="Search Product"
                      color="#4F4F4F"
                      variant="rounded"
                      style={globalStyles.input}
                      placeholderTextColor="#4F4F4F"
                      size="lg"
                      bgColor="white"
                      InputLeftElement={
                        <Icon as={Ionicons} size="lg" ml="3" color="#33907C" name="search" />
                      }
                    />
                  </VStack>
                  <VStack>
                    <Flex direction="row" justifyContent="space-between" mt="6" space="2" mb="2">
                      <Button variant="outline" rounded="full" py="1" px="2.5" _text={{
                        color: "white",
                        fontSize: "md"
                      }} leftIcon={<Icon size="sm" as={FontAwesome} name="sort-amount-desc" color="white" />}>            
                        Sort by
                      </Button>
                      <Button variant="outline" rounded="full" py="1" px="2.5" _text={{
                        color: "white",
                        fontSize: "md"
                      }} leftIcon={<Icon size="sm" as={FontAwesome} name="map-marker" color="white" />}>
                        Location
                      </Button>
                      <Button variant="outline" rounded="full" py="1" px="2.5" _text={{
                        color: "white",
                        fontSize: "md"
                      }} leftIcon={<Icon size="sm" as={FontAwesome} name="th-list" color="white" />}>
                        Category
                      </Button>
                    </Flex>
                  </VStack>
                </Stack>
              </Box>
            </View>
          )
        }}
      />
      <Tab.Screen name="StoreDashboard" component={StoreDashboard}
        options={{
          tabBarLabel: "Store"
        }}
      />
      <Tab.Screen name="OrderDashboard" component={OrderDashboard}
        options={{
          tabBarLabel: "Order History"
        }}
      />
      <Tab.Screen name="ProfileDashboard" component={ProfileDashboard}
        options={{
          tabBarLabel: "Profile"
        }}
      />
    </Tab.Navigator>
  )
}

const App = () => {
  return (
    <>
      <NativeBaseProvider theme={theme}>
        <StatusBar barStyle="light-content" backgroundColor="#33907C" />
        <NavigationContainer>
          <StackN.Navigator
            initialRouteName="Login"
            sceneContainerStyle={{backgroundColor: "#F6F9FF"}}
          >
            <StackN.Screen
              name="Login"
              component={Login}
              options={{
                title: "Iniciar Sesión",
                headerShown: false
              }}
            />
            <StackN.Screen
              name="SignUp"
              component={SignUp}
              options={{
                title: "Registrarme",
                headerShown: false
              }}
            />
            <StackN.Screen
              name="AcountVerify"
              component={AcountVerify}
              options={{
                title: "Verificar Cuenta",
                headerShown: false
              }}
            />
            <StackN.Screen
              name="Dashboard"
              component={DashboardTabs}
              options={{
                title: "Dashboard",
                headerShown: false
              }}
            />
            <StackN.Screen
              name="CategoryProduct"
              component={CategoryProduct}
              options={{
                title: "Categoria del Producto",
                headerShown: true,
                header: ({ navigation, route, options }) => (
                  <HeaderDashboard
                    navigation={navigation}
                    route={route}
                    options={options}
                  />
                )
              }}
            />
            <StackN.Screen
              name="Product"
              component={Product}
              options={{
                title: "Producto",
                headerShown: false,
                /*header: ({ navigation, route, options }) => (
                  <HeaderDashboard
                    navigation={navigation}
                    route={route}
                    options={options}
                  />
                )*/
              }}
            />
            <StackN.Screen
              name="Wishlist"
              component={Wishlist}
              options={{
                title: "Wishlist",
                headerShown: true,
                header: ({ navigation, route, options }) => (
                  <View style={[globalStyles.bg33907C]}>
                    <Box style={styles.contenidoHeader}>
                      <Flex direction="row" justifyContent="center" alignItems="center">
                        <Box w="10%">
                          <Pressable
                            p="1"
                            rounded="full"
                            _pressed={{backgroundColor: 'emerald.700'}}
                            onPress={() => navigation.goBack()}
                          >
                            <Icon as={MaterialIcons} name="arrow-back" size="xl" color="white" />
                          </Pressable>
                        </Box>
                        <Box w="90%" alignItems="center">
                          <Heading color="white" size="lg">Wishlist</Heading>
                        </Box>
                      </Flex>
                    </Box>
                  </View>
                )
              }}
            />
            <StackN.Screen
              name="Cart"
              component={Cart}
              options={{
                title: "Cart",
                headerShown: true,
                header: ({ navigation, route, options }) => (
                  <View style={[globalStyles.bg33907C]}>
                    <Box style={styles.contenidoHeader}>
                      <Flex direction="row" justifyContent="center" alignItems="center">
                        <Box w="10%">
                          <Pressable
                            p="1"
                            rounded="full"
                            _pressed={{backgroundColor: 'emerald.700'}}
                            onPress={() => navigation.goBack()}
                          >
                            <Icon as={MaterialIcons} name="arrow-back" size="xl" color="white" />
                          </Pressable>
                        </Box>
                        <Box w="90%" alignItems="center">
                          <Heading color="white" size="lg">My Cart</Heading>
                        </Box>
                      </Flex>
                    </Box>
                  </View>
                )
              }}
            />
            <StackN.Screen
              name="NewAddress"
              component={NewAddress}
              options={{
                title: "NewAddress",
                headerShown: true,
                header: ({ navigation, route, options }) => (
                  <View style={[globalStyles.bg33907C]}>
                    <Box style={styles.contenidoHeader}>
                      <Flex direction="row" justifyContent="center" alignItems="center">
                        <Box w="10%">
                          <Pressable
                            p="1"
                            rounded="full"
                            _pressed={{backgroundColor: 'emerald.700'}}
                            onPress={() => navigation.goBack()}
                          >
                            <Icon as={MaterialIcons} name="arrow-back" size="xl" color="white" />
                          </Pressable>
                        </Box>
                        <Box w="90%" alignItems="center">
                          <Heading color="white" size="lg">Add a New address</Heading>
                        </Box>
                      </Flex>
                    </Box>
                  </View>
                )
              }}
            />
            <StackN.Screen
              name="Payment"
              component={Payment}
              options={{
                title: "Payment",
                headerShown: true,
                header: ({ navigation, route, options }) => (
                  <View style={[globalStyles.bg33907C]}>
                    <Box style={styles.contenidoHeader}>
                      <Flex direction="row" justifyContent="center" alignItems="center">
                        <Box w="10%">
                          <Pressable
                            p="1"
                            rounded="full"
                            _pressed={{backgroundColor: 'emerald.700'}}
                            onPress={() => navigation.goBack()}
                          >
                            <Icon as={MaterialIcons} name="arrow-back" size="xl" color="white" />
                          </Pressable>
                        </Box>
                        <Box w="90%" alignItems="center">
                          <Heading color="white" size="lg">Payment Option</Heading>
                        </Box>
                      </Flex>
                    </Box>
                  </View>
                )
              }}
            />
          </StackN.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </>
  )
}

const styles = StyleSheet.create({
  contenedorHeader: {

  },
  contenidoHeader: {
    width: "90%",
    marginHorizontal: "5%",
    paddingVertical: 10
  }
})

export default App