import React, {useEffect} from 'react';
import { View, StyleSheet, ImageBackground, Image, FlatList } from 'react-native';
import { Box, Text, Heading, ScrollView, Stack, Button, HStack, VStack, Flex, Pressable, AspectRatio, Center} from "native-base";
import data from "../data.js";
import {useNavigation} from "@react-navigation/native";
import globalStyles from "../styles/globalStyles";
import CardProduct from "../components/CardProduct";
import ButtonComponent from "../components/ButtonComponent";
import CardFront from "../components/CardFront";
import CategoryThumnail from "../components/CategoryThumnail";

const HomeDashboard = () => {
	//React Navigation
	const navigation = useNavigation();

	const dataThumnailCard = [
		{text: "Beverages", image: require("../images/beverages.png"), data: data.data.beverages},
		{text: "Egg", image: require("../images/egg.png"), data: data.data.egg},
		{text: "Frozen Veg", image: require("../images/Frozen.png"), data: data.data.frozen},
		{text: "Fruit", image: require("../images/Fruit.png"), data: data.data.fruit},
		{text: "Home Care", image: require("../images/homecare.png"), data: data.data.homeCare},
		{text: "Pet Care", image: require("../images/petcare.png"), data: data.data.petCare},
		{text: "Vegetables", image: require("../images/vegetables.png"), data: data.data.vegetables},
		{text: "Home Care", image: require("../images/homecare.png"), data: data.data.homeCare}
	]

	return (
		<View>
			<ScrollView showsVerticalScrollIndicator={false}>
				<ScrollView
	        horizontal
	        contentContainerStyle={{padding: 12, display: "flex", columnGap: 15}}
	        showsHorizontalScrollIndicator={false}
	      >
	      	{[1,2,3,4,5].map(item => <CardFront item={item} /> )}
	      </ScrollView>

	      <View>
		      <VStack>
		      	<Flex direction="row" wrap="wrap" gap="0.5">
		      		{
		      			dataThumnailCard.map((item, index) => (
			      			<CategoryThumnail content={item} index={index} />
			      		))
		      		}
		      	</Flex>
		      </VStack>
	      </View>
	      <View style={styles.contenido}>
	      	<Stack my="3">
	      		<VStack display="flex" flexDirection="row" justifyContent="space-between" alignItems="center">
	      			<HStack>
	      				<Heading color="#4F4F4F" fontSize={22}>New Product</Heading>
	      			</HStack>
	      			<HStack>	      				
		      			<ButtonComponent>
									See all
								</ButtonComponent>
	      			</HStack>
	      		</VStack>
	      	</Stack>
	      </View>
	      <ScrollView
	  			horizontal
	  			contentContainerStyle={{display: "flex", columnGap: 10, paddingHorizontal: "3%", paddingRight: 120}}
	  			mb="9"
	  			showsHorizontalScrollIndicator={false}
	  		>
	      	<CardProduct />
	      	<CardProduct />
	      	<CardProduct />
	      	<CardProduct />
	      	<CardProduct />
	      	<CardProduct />
	  		</ScrollView>


	    	<View style={styles.contenido}>
	      	<Stack my="3">
	      		<VStack display="flex" flexDirection="row" justifyContent="space-between" alignItems="center">
	      			<HStack>
	      				<Heading color="#4F4F4F" fontSize={22}>Product Popular</Heading>
	      			</HStack>
	      			<HStack>
	      				<ButtonComponent>
									See all
								</ButtonComponent>
	      			</HStack>
	      		</VStack>
	      	</Stack>
	      </View>
	  		<ScrollView
	  			horizontal
	  			contentContainerStyle={{display: "flex", columnGap: 10, paddingHorizontal: "3%", paddingRight: 120}}
	  			mb="9"
	  			showsHorizontalScrollIndicator={false}
	  		>
	      	<CardProduct />
	      	<CardProduct />
	      	<CardProduct />
	      	<CardProduct />
	      	<CardProduct />
	      	<CardProduct />
	  		</ScrollView>

	  		<View style={[styles.contenido, {marginHorizontal: 0,width: "100%"}]}>
	      	<Stack py="5" style={{paddingHorizontal: "5%", width: "100%", height: 170, backgroundColor: "#33907C"}}>
	      		<VStack display="flex" flexDirection="row" justifyContent="space-between" alignItems="center">
	      			<HStack>
	      				<Heading color="#FFF" fontSize={22}>Store to follow</Heading>
	      			</HStack>
	      			<HStack>
			      		<ButtonComponent smallWhite={true}>
									View all
								</ButtonComponent>
	      			</HStack>
	      		</VStack>
	      	</Stack>
	      	<View style={{position: "relative", top: -100, marginBottom: -80}}>
		      <ScrollView
		  			horizontal
		  			showsHorizontalScrollIndicator={false}
		  			contentContainerStyle={{display: "flex", columnGap: 10,paddingRight: 280, paddingHorizontal: "3%"}}
		  		>
		      	{
		      		[1,2,3,4].map(item => (
								<Box key={item} maxW="55%" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1">
										<Box>
											<AspectRatio w="100%" ratio={16 / 10}>
												<Image source={{
													uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"
												}} alt="image" />
											</AspectRatio>
										</Box>
										<Stack p="3" space={3} bgColor="white">
											<Box flexDirection="row" justifyContent="center" alignItems="center">
												<Center
													style={styles.userFirstLetter}
													rounded="full"
													position="absolute"
													top="-45"
												>
													<Text color="white" fontSize="5xl" fontWeight="semibold" style={{lineHeight: 65}}>T</Text>
												</Center>
											</Box>
											<Heading size="md" mt="3" mb="4" color="#4A4A4A" fontWeight="normal" textAlign="center">
												Tridly Store
											</Heading>
											<Box flexDirection="row" justifyContent="center">
												<ButtonComponent>
													Follow
												</ButtonComponent>
											</Box>
										</Stack>
									</Box>
		      		))
		      	}
		  		</ScrollView>
		  		</View>
	      </View>

      </ScrollView>
		</View>
	)
}
//, transform: [{translateY: 100}]
const styles = StyleSheet.create({
	contenido: {
    width: "90%",
    marginHorizontal: "5%",
    paddingVertical: 10
  },
  imagen: {
  	width: 88.5,
  	height: 88.5,
  	resizeMode: 'cover',
  	justifyContent: "center",
  	alignItems: "center"
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
  }
})

export default HomeDashboard