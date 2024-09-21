import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { Box, Stack, VStack, HStack, Heading, Pressable, View, Input, Icon, Flex, Button } from "native-base";
import {useNavigation} from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import globalStyles from "../styles/globalStyles.js";

const HeaderBottomTab = (props) => {
	const { title, bottomSearch, tagsSearch, titleCenter, iconSearch, heartCart, iconLeft, closeRight } = props;

	//React Navigation
	const navigation = useNavigation()

	return (
		<View style={[globalStyles.bg33907C]}>
      <Box style={styles.contenidoHeader}>
        <Stack>
          <VStack flexDirection="row" justifyContent="space-between" alignItems="center">
          	{ iconLeft && (
							<HStack>
	          		<Pressable
			            p="1"
			            rounded="full"
			            _pressed={{ backgroundColor: 'emerald.700' }}
			            onPress={() => navigation.goBack()}
			          >
			            <Icon as={Ionicons} name="arrow-back-outline" size="xl" color="white" />
			          </Pressable>
	          	</HStack>
          	) }
          	{titleCenter && (
							<Box w="90%" alignItems="center">
		            <Heading color="white" size="lg">{titleCenter}</Heading>
		          </Box>
          	)}
            {titleCenter == null && (
            	<HStack>
                <Heading color="white" size="lg">{title}</Heading>
              </HStack>
            )}
            {closeRight && (
							<HStack w="10%">
							  <Pressable
							    p="1"
							    rounded="full"
							    _pressed={{ backgroundColor: 'emerald.700' }}
							    onPress={() => navigation.goBack()}
							  >
							    <Icon as={Ionicons} name="close-sharp" size="xl" color="white" />
							  </Pressable>
							</HStack>
	          )}
            { !heartCart && (
	            <HStack space={3}>
	              <Pressable>
	                <Ionicons name="heart" size={26} color="white" />
	              </Pressable>
	              <Pressable onPress={() => navigation.navigate("Cart")}>
	                <Ionicons name="cart-sharp" size={26} color="white" />
	              </Pressable>
	            </HStack>
            )}
            { iconSearch && (
							<HStack>
                <Pressable p="1"
                  rounded="full"
                  _pressed={{ backgroundColor: 'emerald.700' }}>
                  <Icon as={Ionicons} size="lg" color="white" name="search" />
                </Pressable>
              </HStack>
          	) }
          </VStack>
          {bottomSearch && (
          	<VStack mt="3" mb="2">
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
          )}
          {tagsSearch && (
						<VStack>
						  <Flex direction="row" justifyContent="space-between" mt="3" space="2" mb="2">
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
          )}
        </Stack>
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

export default HeaderBottomTab