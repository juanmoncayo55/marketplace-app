import React, {useState, useEffect} from 'react';
import { StyleSheet, ImageBackground, ScrollView } from 'react-native';
import { NativeBaseProvider, Icon, Box, View, Text, Stack,VStack,HStack, Heading, Pressable, Input, Flex, Button } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { SliderBox } from "react-native-image-slider-box";
import FontAwesome  from "react-native-vector-icons/FontAwesome";
import MaterialIcons  from "react-native-vector-icons/MaterialIcons";
import globalStyles from "../styles/globalStyles";

//npm i megamaxs1234/react-native-image-slider-box 
/*
<SliderBox images={images} />
<ImageBackground
					source={require("../images/jean-cocacola.png")}
					style={styles.imagen}
				>
					<Stack style={styles.contenido} display="flex" flexDirection="row" justifyContent="space-between">
						<HStack>
							<Pressable
								p="1"
								style={styles.headerBtnIcon}
								rounded="full"
							>
								<Icon as={MaterialIcons} name="arrow-back" size="xl" color="white" />
							</Pressable>
						</HStack>
						<HStack space={3}>
							<Pressable
								style={styles.headerBtnIcon}
								rounded="full"
							>
								<Box display="flex" flexDirection="row" flexWrap="wrap">
									<FontAwesome name="share-alt" size={26} color="white" />
								</Box>
							</Pressable>
							<Pressable
								style={styles.headerBtnIcon}
								rounded="full"
							>
								<Box display="flex" flexDirection="row" flexWrap="wrap">
									<FontAwesome name="heart-o" size={26} color="white" />
								</Box>
							</Pressable>
							<Pressable
								style={styles.headerBtnIcon}
								rounded="full"
							>
								<Box display="flex" flexDirection="row" flexWrap="wrap">
									<FontAwesome name="ellipsis-v" size={26} color="white" />
								</Box>
							</Pressable>
						</HStack>
					</Stack>
				</ImageBackground>
*/
const Product = () => {
	//React Navigation
	const navigation = useNavigation();

	const images = [
    require('../images/jean-cocacola.png'),
    require('../images/orange.png'),
    require('../images/apple.png')
  ]
	return (
		<Stack style={{backgroundColor: "#F6F9FF", flex: 1}}>
			<ScrollView showsVerticalScrollIndicator={false}>
				<Box position="relative">
					<SliderBox images={images} dotColor="#33907C" />
					<View position="absolute">
						<Stack style={styles.contenido} display="flex" flexDirection="row" justifyContent="space-between">
							<HStack>
								<Pressable
									p="1"
									style={styles.headerBtnIcon}
									rounded="full"
									onPress={() => navigation.goBack()}
								>
									<Icon as={MaterialIcons} name="arrow-back" size="xl" color="white" />
								</Pressable>
							</HStack>
							<HStack space={3}>
								<Pressable
									style={styles.headerBtnIcon}
									rounded="full"
								>
									<Box display="flex" flexDirection="row" flexWrap="wrap">
										<FontAwesome name="share-alt" size={26} color="white" />
									</Box>
								</Pressable>
								<Pressable
									style={styles.headerBtnIcon}
									rounded="full"
									onPress={() => navigation.navigate("Wishlist")}
								>
									<Box display="flex" flexDirection="row" flexWrap="wrap">
										<FontAwesome name="heart-o" size={26} color="white" />
									</Box>
								</Pressable>
								<Pressable
									style={styles.headerBtnIcon}
									rounded="full"
								>
									<Box display="flex" flexDirection="row" flexWrap="wrap">
										<FontAwesome name="ellipsis-v" size={26} color="white" />
									</Box>
								</Pressable>
							</HStack>
						</Stack>
					</View>
				</Box>
				

				<VStack bgColor="white" mb="3">
					<Box style={styles.contenido} py="4">
						<Heading color="#4F4F4F" fontSize={25}>Coca Cola</Heading>
						<View flexDirection="row" gap={4} alignItems="flex-end" mt="1">
							<Text color="#33907C" fontSize="2xl" fontWeight="extrabold">$15</Text>
							<Box flexDirection="row" gap={1}>
								<Text color="#4F4F4F" fontSize="xl" fontWeight="normal" strikeThrough>50%</Text>
								<Text color="#4F4F4F" fontSize="xl" fontWeight="normal">50% off</Text>
							</Box>
						</View>
					</Box>
				</VStack>

				<VStack bgColor="white" mb="3">
					<Box style={styles.contenido} py="4" flexDirection="row" alignItems="center" justifyContent="space-between">
						<HStack display="flex" flexDirection="row" alignItems="center" space={3}>
							<Box style={styles.boxAvatarIcon} rounded="full" alignItems="center" justifyContent="center">
								<Text fontSize="3xl" color="white" fontWeight="semibold">T</Text>
							</Box>
							<Text fontSize="lg" color="#4F4F4F" lineHeight="lg">Tradly Store</Text>
						</HStack>
						<HStack>
							<Button style={{backgroundColor: "#33907C"}} variant="outline" rounded="full" px={7} py={0.5}>
		      			<Text color="white" fontSize="md">Follow</Text>
		      		</Button>
						</HStack>
					</Box>
				</VStack>

				<VStack bgColor="white" mb="3">
					<Box style={styles.contenido} py="6">
						<Text color="#4F4F4F" fontSize="md">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lobortis cras placerat diam ipsum ut. Nisi vel adipiscing massa bibendum diam. Suspendisse mattis dui maecenas duis mattis. Mattis aliquam at arcu, semper nunc, venenatis et pellentesque eu. Id tristique maecenas tristique habitasse eu elementum sed. Aliquam eget lacus, arcu, adipiscing eget feugiat in dolor sagittis. Non commodo, a justo massa porttitor sed placerat in. Orci tristique etiam tempus sed. Mi varius morbi egestas dictum tempor nisl. In</Text>

						<Button bgColor="#33907C" rounded="full" mt="9">
							<Text fontSize={22} color="#FFF" fontWeight="semibold">Add to Cart</Text>
						</Button>

						<Stack mt="8" space={3}>
							<VStack flexDirection="row">
								<HStack w="40%">
									<Text color="#4F4F4F" fontSize="md">Condition</Text>
								</HStack>
								<HStack w="60%">
									<Text color="#000000" fontSize="md">Organic</Text>
								</HStack>
							</VStack>
							<VStack flexDirection="row">
								<HStack w="40%">
									<Text color="#4F4F4F" fontSize="md">Price Type</Text>
								</HStack>
								<HStack w="60%">
									<Text color="#000000" fontSize="md">Fixed</Text>
								</HStack>
							</VStack>
							<VStack flexDirection="row">
								<HStack w="40%">
									<Text color="#4F4F4F" fontSize="md">Category</Text>
								</HStack>
								<HStack w="60%">
									<Text color="#000000" fontSize="md">Beverages</Text>
								</HStack>
							</VStack>
							<VStack flexDirection="row">
								<HStack w="40%">
									<Text color="#4F4F4F" fontSize="md">Location</Text>
								</HStack>
								<HStack w="60%" >
									<Text color="#000000" fontSize="md">Kualalumpur, Malaysia</Text>
								</HStack>
							</VStack>
						</Stack>
					</Box>
				</VStack>

				<VStack bgColor="white">
					<Box style={styles.contenido} py="6">
						<Heading color="#000000" fontSize="2xl" fontWeight="semibold">Additional Details</Heading>

						<Stack mt="5" space={3}>
							<VStack flexDirection="row">
								<HStack w="40%">
									<Text color="#4F4F4F" fontSize="md">Delivery Details</Text>
								</HStack>
								<HStack w="60%">
									<Text color="#000000" fontSize="md">Home Delivery Available, Cash On Delivery</Text>
								</HStack>
							</VStack>
						</Stack>
					</Box>
				</VStack>
			</ScrollView>
		</Stack>
	)
}

const styles = StyleSheet.create({
	contenido: {
    width: "90%",
    marginHorizontal: "5%",
    paddingVertical: 10
  },
  imagen: {
  	width: "100%",
  	height: 220,
  	resizeMode: 'cover',
  	justifyContent: "flex-start",
  	alignItems: "space-between"
  },
  textImage: {
  	color: "#FFF",
  	fontSize: 15,
  	fontWeight: "medium",
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
  headerBtnIcon: {
  	width: 38,
  	height: 38,
  	justifyContent: "center",
  	alignItems: "center",
  	flexDirection: "row",
  	backgroundColor: 'rgba(255, 255, 255, 0.6)'
  },
  boxAvatarIcon: {
  	width: 40,
  	height: 40,
  	backgroundColor: "#33907C"
  }
})

export default Product