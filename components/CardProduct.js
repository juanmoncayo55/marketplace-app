import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Box, Text, Heading, Stack, HStack, AspectRatio, Image, Pressable} from "native-base";
import {useNavigation} from "@react-navigation/native";

const CardProduct = ({item}) => {
	//React Navigation
	const navigation = useNavigation();

	return (
		<Box flex={1} rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1">
			<Pressable
				onPress={() => navigation.navigate("Product", {product: item})}
			>
		    <Box>
		    	{
		    		!item.imageGallery ?
		       		<Image source={require("../images/citycover.jpg")} resizeMode="stretch" resizeMethod='scale' alt="image" width={"full"} height={120} />
		       	:
		       		<Image source={{uri: item.imageGallery[0].url}} resizeMode="stretch" resizeMethod='scale' alt="image" width={"full"} height={120} />
		    	}
		    </Box>
		    <Stack p="3" space={3} bgColor="white">
		      <Stack space={2}>
			      <Heading fontSize={17} color="#4A4A4A" fontWeight="normal">
			        {item.title}
			      </Heading>
			    </Stack>
		      <HStack alignItems="center" space={4} justifyContent="space-between">
			      <HStack alignItems="center" justifyItems={"center"}>
			      	<Box
			      		style={styles.userDefaultAvatar}
			      		rounded="full"
			      	>
			      		<Text color="white" fontSize="xl" style={{lineHeight: 25}}>T</Text>
			      	</Box>
			        <Text color="gray.500" fontWeight="600" fontSize={15} ml="1">
			          Tradly
			        </Text>
			      </HStack>
			      <HStack>
			      	<Text color="#33907C" fontSize={17} fontWeight="bold">${String(item.precie).slice(0,2)}</Text>
			      </HStack>
			    </HStack>
		    </Stack>
	  	</Pressable>
		 </Box>
	)
}

const styles = StyleSheet.create({
  userFirstLetter: {
  	backgroundColor: "#33907C",
  	width: 25,
  	height: 25,
  	alignItems: "center",
  	justifyContent: "center"
  },
  userDefaultAvatar: {
  	backgroundColor: "#33907C",
  	width: 25,
  	height: 25,
  	alignItems: "center",
  	justifyContent: "center"
  }
})

export default CardProduct