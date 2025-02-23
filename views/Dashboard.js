import React, {useState, useContext, useEffect} from "react";
import { Heading, Text, Box,
HStack,
Pressable,
Center,
Icon } from "native-base";
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as RootNavigation from '../helpers/RootNavigation.js';
import UserContext from "../context/user/userContext.js";
import MenuContext from "../context/menu/menuContext.js";

const Dashboard = () => {
  const [selected, setSelected] = useState(0);

  const {user, hide, hideMenuDash, isLoguedUser} = useContext(UserContext);
  const {hideBottomMenu} = useContext(MenuContext);

  useEffect(() => {
    if(user){
      console.log(user)
    }else{
      console.log("no existe")
    }
  }, [user])

  useEffect(() => {
    () => setSelected(0);
  }, [])

  return !isLoguedUser || hide || hideMenuDash || hideBottomMenu ? null : (
    <Box bg="white" width="100%" alignSelf="center" justifySelf="end">
      
      <HStack bg="white" alignItems="center" safeAreaBottom shadow={6}>
        <Pressable cursor="pointer" py="3" flex={1} onPress={() => {
          setSelected(0);
          RootNavigation.navigate("HomeDashboard")
        }}>
          <Center>
            <Icon as={Ionicons} size="md" color={selected === 0 ? "#33907C" : "rgba(79,79,79,.6)"} name={"home-sharp"} />
            <Text color={selected === 0 ? "#33907C" : "rgba(79,79,79,.6)"} fontSize="12">
              Home
            </Text>
          </Center>
        </Pressable>
        <Pressable cursor="pointer" py="2" flex={1} onPress={() => {
          setSelected(1)
          RootNavigation.navigate("BrowserDashboard")
        }}>
          <Center>
            <Icon as={Ionicons} size="md" color={selected === 1 ? "#33907C" : "rgba(79,79,79,.6)"} name={"search-sharp"} />
            <Text color={selected === 1 ? "#33907C" : "rgba(79,79,79,.6)"} fontSize="12">
              Search
            </Text>
          </Center>
        </Pressable>
        <Pressable cursor="pointer" py="2" flex={1} onPress={() => {
          setSelected(2)
          RootNavigation.navigate("StoreDashboard")
        }}>
          <Center>
            <Icon as={Ionicons} size="md" color={selected === 2 ? "#33907C" : "rgba(79,79,79,.6)"} name={"storefront-sharp"} />
            <Text color={selected === 2 ? "#33907C" : "rgba(79,79,79,.6)"} fontSize="12">
              Cart
            </Text>
          </Center>
        </Pressable>
        <Pressable cursor="pointer" py="2" flex={1} onPress={() => {
          setSelected(3)
          RootNavigation.navigate("OrderDashboard")
        }}>
          <Center>
            <Icon as={Ionicons} size="md" color={selected === 3 ? "#33907C" : "rgba(79,79,79,.6)"} name={"reorder-four-sharp"} />
            <Text color={selected === 3 ? "#33907C" : "rgba(79,79,79,.6)"} fontSize="12">
              Order History
            </Text>
          </Center>
        </Pressable>
        <Pressable cursor="pointer" py="2" flex={1} onPress={() => {
          setSelected(4)
          RootNavigation.navigate("ProfileDashboard")
        }}>
          <Center>
            <Icon as={Ionicons} size="md" color={selected === 4 ? "#33907C" : "rgba(79,79,79,.6)"} name={"person-sharp"} />
            <Text color={selected === 4 ? "#33907C" : "rgba(79,79,79,.6)"} fontSize="12">
              Account
            </Text>
          </Center>
        </Pressable>
      </HStack>
    </Box>
  )
}

export default Dashboard