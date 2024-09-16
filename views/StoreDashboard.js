import React from 'react'
import { Image, StyleSheet, Dimensions } from 'react-native'
import { Text, View, Box, Flex, Button } from "native-base";
import {useNavigation} from "@react-navigation/native";

const { width, height } = Dimensions.get('window'); //Dimensiones del celular

const StoreDashboard = () => {

	//React Navigation
	const navigation = useNavigation();

	return (
		<Flex flex="1" direciton="column" alignItems="center" justifyContent="flex-start" gap="10" pt="10">
			<Image
				source={require("../images/store-image.png")}
				style={{width: width / 1.8, height: 180, resizeMode: "contain"}}
			/>
			<Text color="#000000" fontFamily="SFProText" fontWeight="semibold" fontSize="2xl" textAlign="center">You Dont Have a Store</Text>
			<Button
				bgColor="greenPrimary"
				variant="outline"
				rounded="full"
				px="16"
				py="2"
				onPress={() => navigation.navigate("CreateStore")}
			>
  			<Text color="#FFF" fontFamily="SFProText" fontWeight="semibold" fontSize="2xl">Create Store</Text>
  		</Button>
		</Flex>
	)
}

const styles = StyleSheet.create({
	
})

export default StoreDashboard