import React from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';
import { Icon, Box, Stack,VStack,HStack, Heading, Pressable, Flex, Button, Text } from "native-base";
import MaterialIcons  from "react-native-vector-icons/MaterialIcons";
import FontAwesome  from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import globalStyles from "../styles/globalStyles";

const HeaderDashboard = ({navigation,route,options}) => {

  //Navigation
  const nav = useNavigation();

	return (
		<View style={[globalStyles.bg33907C]}>
      <Box style={styles.contenidoHeader}>
        <Flex direction="row" justifyContent="center">
          <Box w="10%">
            <Pressable
              p="1"
              rounded="full"
              _pressed={{backgroundColor: 'emerald.700'}}
              onPress={() => nav.goBack()}
              
            >
              <Icon as={MaterialIcons} name="arrow-back" size="xl" color="white" />
            </Pressable>
          </Box>
          <Box w="90%" alignItems="center">
            <Heading color="white" size="xl">{route.params.titleCategory}</Heading>
          </Box>
        </Flex>

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
      </Box>
    </View>
	)
}

const styles = StyleSheet.create({
  contenidoHeader: {
    width: "90%",
    marginHorizontal: "5%",
    paddingVertical: 10
  }
})

export default HeaderDashboard