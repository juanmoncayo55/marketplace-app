import React, {useEffect, useContext, useState} from 'react';
import { View, StyleSheet, ImageBackground, FlatList, Keyboard } from 'react-native';
import { Box, Text, Heading, ScrollView, Stack, Button, HStack, VStack, Flex, Pressable, AspectRatio, Center, Image, Input, Icon} from "native-base";
import {useNavigation} from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import data from "../data.js";
import { GET_STORES, GET_ALL_PRODUCTS } from '../gql/queries.js';
import { useQuery } from '@apollo/client';
import { verifyAccount } from '../helpers/index.js';
import globalStyles from "../styles/globalStyles";
import CardProduct from "../components/CardProduct";
import ButtonComponent from "../components/ButtonComponent";
import CardFront from "../components/CardFront";
import CategoryThumnail from "../components/CategoryThumnail";
import Login from './Login.js';
import UserContext from '../context/user/userContext.js';
import HeaderBottomTab from '../components/HeaderBottomTab.js';

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

const HomeDashboard = () => {
	//state
	//const [isKeyboardVisible, setKeyboardVisible] = useState(false);
	const [firstScroll, setFirstScroll] = useState(false);

	//React Navigation
	const navigation = useNavigation();

	const {user, setHideMenuDash, isLoguedUser} = useContext(UserContext);

	const { loading: storesLoading, data: storesData, error: storesError } = useQuery(GET_STORES);
	const { loading: allProductsLoad, data: allProductsData, error: allProductsError } = useQuery(GET_ALL_PRODUCTS);

	useEffect(() => {
		verifyAccount()
	}, [])
	/*useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true); // or some other action
        setHideMenuDash(true)
        console.log("Se desplego")
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false); // or some other action
        setHideMenuDash(false)
        console.log("Se escondio");
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);*/

  const handleScroll = (e) => {
  	if(!firstScroll){
  		console.log("Primer scroll");
  		setFirstScroll(true)
  	}
  }

  console.log(isLoguedUser);

  if (storesLoading || allProductsLoad ) return (<View style={{flex: 1}}><Image source={require("../assets/Splash.png")} alt={"imagen splash"} style={{flex: 1}} /></View>)
  if(isLoguedUser){
  	
	  if (storesError || allProductsError) {
	  	console.log("storeError: ", storesError, " allProductsError: ", allProductsError)
	  	return (<View><Text>Error al cargar datos</Text></View>);
	  }
	  //console.log(allProductsData.getAllProducts)
  }
	return isLoguedUser !== false ? (
		<View>
			<HeaderBottomTab title="Groceries" bottomSearch={false} />
			<ScrollView showsVerticalScrollIndicator={false} onScroll={handleScroll}>
				<View style={[globalStyles.bg33907C]}>
	      	<Box style={styles.contenidoHeader}>
						<VStack mt="2" mb="1">
		          <Input
		            placeholder="Search Product"
		            color="#4F4F4F"
		            variant="rounded"
		            style={globalStyles.input}
		            placeholderTextColor="rgba(79,79,79,.5)"
		            size="lg"
		            bgColor="white"
		            InputLeftElement={
		              <Icon as={Ionicons} size="lg" ml="3" color="#33907C" name="search" />
		            }
		          />
		        </VStack>
	        </Box>
        </View>
				<ScrollView
	        horizontal
	        contentContainerStyle={{padding: 12, display: "flex", columnGap: 15}}
	        showsHorizontalScrollIndicator={false}
	      >
	      	{[1,2,3,4,5].map((item, index) => <CardFront item={item} key={index} /> )}
	      </ScrollView>

	      <View>
		      <VStack>
		      	<Flex direction="row" wrap="wrap" gap="0.5">
		      		{
		      			dataThumnailCard.map((item, index) => (
			      			<CategoryThumnail content={item} key={index} />
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
	  			contentContainerStyle={{display: "flex", columnGap: 10, paddingHorizontal: "3%"}}
	  			mb="9"
	  			showsHorizontalScrollIndicator={false}
	  		>
	      	{
	      		allProductsData.getAllProducts.length && allProductsData.getAllProducts.map((item, index) => (
	      			<CardProduct item={item} key={index}/>
	      		))
	      	}
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
	      	{
	      		[1,2,3,4,5,6].map((item, index) => (
	      			<CardProduct item={item} key={index}/>
	      		))
	      	}
	  		</ScrollView>

	  		<View style={[styles.contenido, {marginHorizontal: 0,width: "100%", marginBottom: 35}]}>
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
		      		storesData.getStores.length && storesData.getStores.map((item, index) => (
								<Box key={index} flex={1} rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1">
										<Box w="100%">
											<AspectRatio w="100%" ratio={16 / 10}>
												<Image source={require("../images/citycover.jpg")} resizeMode="stretch" resizeMethod='scale' alt="image" width={"full"} height={120}/>
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
											<Heading size="md" mt="2" mb="2" color="#4A4A4A" fontWeight="normal" textAlign="center">
												{item.name}
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
	) : <Login />
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
  },
  contenidoHeader: {
    width: "90%",
    marginHorizontal: "5%",
    paddingBottom: 10
  }
})

export default HomeDashboard