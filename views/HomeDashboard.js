import React from 'react';
import { View, Image, StyleSheet, ImageBackground } from 'react-native';
import { Box, Text, ScrollView, Stack, Button, VStack, Flex, Pressable } from "native-base";
import globalStyles from "../styles/globalStyles";

const HomeDashboard = () => {
	return (
		<View>
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
		</View>
	)
}

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
  }
})

export default HomeDashboard