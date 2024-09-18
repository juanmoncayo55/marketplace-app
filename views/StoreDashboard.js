import React from 'react'
import { StyleSheet, Dimensions, ScrollView } from 'react-native'
import { Text, View, Box, Flex, Button, VStack, HStack, Stack, Center, Pressable, Input, Icon, AspectRatio, Image, Heading } from "native-base";
import {useNavigation} from "@react-navigation/native";
import Ionicons  from "react-native-vector-icons/Ionicons";
import globalStyles from "../styles/globalStyles.js";

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
			{
				false ? (
					<View style={styles.contenido}>
						<VStack mt="4" mb="2">
						  <Input
						    placeholder="Search Product"
						    color="#4F4F4F"
						    variant="rounded"
						    style={globalStyles.input}
						    placeholderTextColor="rgba(79,79,79,.6)"
						    borderWidth="0"
						    size="lg"
						    bgColor="white"
						    InputLeftElement={
						      <Icon as={Ionicons} size="lg" ml="3" color="#13B58C" name="search" />
						    }
						  />
						</VStack>

						<Heading color="#4F4F4F" fontSize={25} my="3">Products</Heading>

						<VStack direction="row" flexWrap="wrap" justifyContent="center" space="2">
							<Box maxW="47%" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" mb="2">
							  <Box>
							    <AspectRatio w="100%" ratio={16 / 13}>
							      <Image source={require("../images/brocoli.png")} alt="image" height={300} width={300} />
							    </AspectRatio>
							  </Box>
							  <Stack p="3" space={3} bgColor="white">
							    <Stack space={2}>
							      <Heading fontSize={17} ml="-1" color="#4A4A4A" fontWeight="normal">
							        Brocoli
							      </Heading>
							    </Stack>
							    <HStack alignItems="center" space={4} justifyContent="space-between">
							      <HStack alignItems="center">
							      	<Box
							      		style={styles.userDefaultAvatar}
							      		rounded="full"
							      	>
							      		<Text color="white" fontSize="xl" style={{lineHeight: 25}}>T</Text>
							      	</Box>
							        <Text color="#4F4F4F" fontWeight="400" fontSize={17} ml="2">
							          Tradly
							        </Text>
							      </HStack>
							      <HStack>
							      	<Text color="#33907C" fontSize={17} fontWeight="bold">$15</Text>
							      </HStack>
							    </HStack>
							  </Stack>
							</Box>
							<Pressable maxW="47%" w="100%" rounded="lg" overflow="hidden" borderColor="coolGray.300" borderWidth="2" mb="2" borderStyle="dashed" justifyContent="center" alignItems="center">
								<Icon as={Ionicons} name="add-outline" size="5xl" color="coolGray.300" />
								<Text color="coolGray.400" fontSize="xl">Add Product</Text>
							</Pressable>
						</VStack>
					</View>
				) : (
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
							onPress={() => navigation.navigate("AddProduct")}
						>
			  			<Text color="greenPrimary" fontFamily="SFProText" fontWeight="semibold" fontSize="xl">Add Product</Text>
			  		</Button>
					</VStack>
				)
			}
		</Stack>
	);

	return existe;
}

const styles = StyleSheet.create({
	contenido: {
    width: "90%",
    marginHorizontal: "5%",
    paddingVertical: 10
  },
	userFirstLetter: {
  	backgroundColor: "#33907C",
  	width: 65,
  	height: 65,
  	alignItems: "center",
  	justifyContent: "center",
  	borderWidth: 2,
  	borderColor: "#FFF",
  	borderStyle: "solid"
  },
  userDefaultAvatar: {
  	backgroundColor: "#33907C",
  	width: 25,
  	height: 25,
  	alignItems: "center",
  	justifyContent: "center"
  }
})

export default StoreDashboard