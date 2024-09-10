import React from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';
import { NativeBaseProvider, Icon, Box, Text, Stack,VStack,HStack, Heading, Pressable, Input } from "native-base";
import Ionicons  from "react-native-vector-icons/Ionicons";

//React Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//Vistas
import Login from "./views/Login";
import SignUp from "./views/SignUp";
import AcountVerify from "./views/AcountVerify";
import CategoryProduct from "./views/CategoryProduct";
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
        tabBarInactiveTintColor: '#4F4F4F',
        tabBarLabelStyle: {
          fontSize: 12,
        }
      })}
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
                        <Pressable>
                          <Ionicons name="cart-sharp" size={26} color="white" />
                        </Pressable>
                      </HStack>
                    </VStack>
                    <VStack mt="7" mb="2">
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
          tabBarLabel: "Browse"
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
      <NativeBaseProvider>
        <StatusBar barStyle="light-content" backgroundColor="#33907C" />
        <NavigationContainer>
          <StackN.Navigator initialRouteName="Login">
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