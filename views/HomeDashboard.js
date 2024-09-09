import React from 'react';
import { View, StyleSheet, ImageBackground, Image, FlatList } from 'react-native';
import { Box, Text, Heading, ScrollView, Stack, Button, HStack, VStack, Flex, Pressable, AspectRatio, Center} from "native-base";
import globalStyles from "../styles/globalStyles";
import CardProduct from "../components/CardProduct";

const HomeDashboard = () => {
	return (
		<View>
			<ScrollView>
				<ScrollView
	        horizontal
	        contentContainerStyle={{padding: 12, display: "flex", columnGap: 15}}
	      >
	      	{[1,2,3,4,5].map(item => (
		      	<Box key={item} height="180" width="320" backgroundColor='#000000' color="black" rounded="xl" p="5" justifyContent="center" alignItems="flex-start">
		      		<Text textTransform="uppercase" color="white" fontSize="lg">Ready to deliver to{"\n"}your home</Text>
		      		<Button mt="5" style={{width: "fit-content", backgroundColor: "black"}} variant="outline" rounded="full" px={5} py={1}>
		      			<Text textTransform="uppercase" color="white" fontSize="md" fontWeight="bold">Start Shopping</Text>
		      		</Button>
		      	</Box>
	      	))}
	      </ScrollView>

	      <View>
		      <VStack>
		      	<Flex direction="row" wrap="wrap" gap="0.5">
		      		<Pressable>
		      			<ImageBackground
		      				source={require("../images/beverages.png")}
		      				style={styles.imagen}
		      			>
		      				<Text style={styles.textImage}>Beverages</Text>
		      			</ImageBackground>
		      		</Pressable>
		      		<Pressable>
		      			<ImageBackground
		      				source={require("../images/egg.png")}
		      				style={styles.imagen}
		      			>
		      			<Text style={styles.textImage}>Egg</Text>
		      		</ImageBackground>
		      		</Pressable>
		      		<Pressable>
		      			<ImageBackground
		      				source={require("../images/Frozen.png")}
		      				style={styles.imagen}
		      			>
		      			<Text style={styles.textImage}>Frozen</Text>
		      		</ImageBackground>
		      		</Pressable>
		      		<Pressable>
		      			<ImageBackground
		      				source={require("../images/Fruit.png")}
		      				style={styles.imagen}
		      			>
		      			<Text style={styles.textImage}>Fruit</Text>
		      		</ImageBackground>
		      		</Pressable>
		      		<Pressable>
		      			<ImageBackground
		      				source={require("../images/homecare.png")}
		      				style={styles.imagen}
		      			>
		      			<Text style={styles.textImage}>Homecare</Text>
		      		</ImageBackground>
		      		</Pressable>
		      		<Pressable>
		      			<ImageBackground
		      				source={require("../images/petcare.png")}
		      				style={styles.imagen}
		      			>
		      			<Text style={styles.textImage}>Petcare</Text>
		      		</ImageBackground>
		      		</Pressable>
		      		<Pressable>
		      			<ImageBackground
		      				source={require("../images/vegetables.png")}
		      				style={styles.imagen}
		      			>
		      			<Text style={styles.textImage}>Vegetables</Text>
		      		</ImageBackground>
		      		</Pressable>
		      		<Pressable>
		      			<ImageBackground
		      				source={require("../images/homecare.png")}
		      				style={styles.imagen}
		      			>
		      			<Text style={styles.textImage}>Homecare</Text>
		      		</ImageBackground>
		      		</Pressable>
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
	      				<Button style={{backgroundColor: "#33907C"}} variant="outline" rounded="full" px={7} py={0.5}>
			      			<Text color="white" fontSize="md">See all</Text>
			      		</Button>
	      			</HStack>
	      		</VStack>
	      	</Stack>
	      </View>
	      <ScrollView
	  			horizontal
	  			contentContainerStyle={{display: "flex", columnGap: 10, paddingHorizontal: "3%", paddingRight: 120}}
	  			mb="9"
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
	      				<Button style={{backgroundColor: "#33907C"}} variant="outline" rounded="full" px={7} py={0.5}>
			      			<Text color="white" fontSize="md">See all</Text>
			      		</Button>
	      			</HStack>
	      		</VStack>
	      	</Stack>
	      </View>
	  		<ScrollView
	  			horizontal
	  			contentContainerStyle={{display: "flex", columnGap: 10, paddingHorizontal: "3%", paddingRight: 120}}
	  			mb="9"
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
	      				<Button style={{backgroundColor: "#FFF"}} variant="outline" rounded="full" px={7} py={0.5}>
			      			<Text color="#33907C" fontSize="md">View all</Text>
			      		</Button>
	      			</HStack>
	      		</VStack>
	      	</Stack>
	      	<View style={{position: "relative", top: -100, marginBottom: -80}}>
		      <ScrollView
		  			horizontal
		  			contentContainerStyle={{display: "flex", columnGap: 10,paddingRight: 280, paddingHorizontal: "3%"}}
		  		>
		      	{
		      		[1,2,3,4].map(item => (
		      			<Box maxW="55%" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1">
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
						        	<Button style={{backgroundColor: "#33907C"}} variant="outline" rounded="full" px={7} py={0.5}>
						      			<Text color="#FFF" fontSize="md">Follow</Text>
						      		</Button>
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