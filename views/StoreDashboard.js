import React from 'react'
import { Image, StyleSheet, Dimensions } from 'react-native'
import { Text, View, Box, Flex, Button, VStack, HStack, Stack, Center, Pressable } from "native-base";
import {useNavigation} from "@react-navigation/native";

const { width, height } = Dimensions.get('window'); //Dimensiones del celular

const StoreDashboard = () => {

	//React Navigation
	const navigation = useNavigation();

	let existe;
	//Si no hay productos se retorna este template
	/*let existe = (
		<Flex flex="1" direciton="column" alignItems="center" justifyContent="flex-start" gap="10" pt="10">
			<Image
				source={require("../images/store-image.png")}
				style={{width: width / 1.8, height: 180, resizeMode: "contain"}}
			/>
			<Text color="#000000" fontFamily="SFProText" fontWeight="semibold" fontSize="xl" textAlign="center">You Dont Have a Store</Text>
			<Button
				bgColor="greenPrimary"
				variant="outline"
				rounded="full"
				px="16"
				py="2"
				onPress={() => navigation.navigate("CreateStore")}
			>
  			<Text color="#FFF" fontFamily="SFProText" fontWeight="semibold" fontSize="xl">Create Store</Text>
  		</Button>
		</Flex>
	);*/

	existe = (
		<Stack>
			<VStack bgColor="white" pt="5" shadow="8">
				<VStack>
					<Box flexDirection="row" justifyContent="center" alignItems="center">
  					<Center
	        		style={styles.userFirstLetter}
	        		rounded="full"
	        	>
	        		<Text color="white" fontSize="5xl" fontWeight="semibold" style={{lineHeight: 65}}>T</Text>
	        	</Center>
	        </Box>
				</VStack>
				<VStack my="3">
					<Text color="clText" fontFamily="SFProText" fontWeight="semibold" fontSize="3xl" textAlign="center">Tradly Store</Text>
				</VStack>
				<VStack mb="6">
					<Flex direction="row" gap="7" justifyContent="center">
						<Button
							borderColor="greenPrimary"
							borderWidth="1"
							variant="outline"
							rounded="full"
							px="5"
							py="1"
							onPress={() => navigation.navigate("CreateStore")}
						>
							<Text color="greenPrimary" fontFamily="SFProText" fontWeight="semibold" fontSize="md">Edit Store</Text>
						</Button>
						<Button
							bgColor="greenPrimary"
							variant="outline"
							rounded="full"
							px="5"
							py="1"
							onPress={() => navigation.navigate("CreateStore")}
						>
							<Text color="#FFF" fontFamily="SFProText" fontWeight="semibold" fontSize="md">View Store</Text>
						</Button>
					</Flex>
				</VStack>
				<Pressable borderTopColor="rgba(0,0,0,.1)" borderTopWidth="1" py="2">
					<Text color="clText" opacity=".5" textAlign="center" fontSize="xl" fontWeight="medium">Remove Store</Text>
				</Pressable>
			</VStack>

			<VStack mt="16" flexDirection="column" alignItems="center">
				<Text color="#000000" fontFamily="SFProText" fontWeight="semibold" fontSize="xl" textAlign="center">You Dont Have a Store</Text>
				<Button
					borderColor="greenPrimary"
					borderWidth="1"
					variant="outline"
					rounded="full"
					px="16"
					py="2"
					mt="9"
				>
	  			<Text color="greenPrimary" fontFamily="SFProText" fontWeight="semibold" fontSize="xl">Add Product</Text>
	  		</Button>
			</VStack>
		</Stack>
	);

	return existe;
}

const styles = StyleSheet.create({
	userFirstLetter: {
  	backgroundColor: "#33907C",
  	width: 65,
  	height: 65,
  	alignItems: "center",
  	justifyContent: "center",
  	borderWidth: 2,
  	borderColor: "#FFF",
  	borderStyle: "solid"
  }
})

export default StoreDashboard