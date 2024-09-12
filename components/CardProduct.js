import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Box, Text, Heading, Stack, HStack, AspectRatio, Image, Pressable} from "native-base";
import {useNavigation} from "@react-navigation/native";

const CardProduct = () => {
	//React Navigation
	const navigation = useNavigation();


	return (
		<Box maxW="48%" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1">
			<Pressable
				onPress={() => navigation.navigate("Product")}
			>
		    <Box>
		      <AspectRatio w="100%" ratio={16 / 13}>
		        <Image source={{
		        uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"
		      }} alt="image" />
		      </AspectRatio>
		    </Box>
		    <Stack p="3" space={3} bgColor="white">
		      <Stack space={2}>
		        <Heading size="md" ml="-1" color="#4A4A4A" fontWeight="normal">
		          Fish
		        </Heading>
		      </Stack>
		      <HStack alignItems="center" space={4} justifyContent="space-between">
		        <HStack alignItems="center">
		        	<Box
		        		style={styles.userFirstLetter}
		        		rounded="full"
		        	>
		        		<Text color="white" fontSize="xl" style={{lineHeight: 25}}>T</Text>
		        	</Box>
		          <Text color="#4F4F4F" fontWeight="400" fontSize="md" ml="3">
		            Tradly
		          </Text>
		        </HStack>
		        <HStack>
		        	<Text color="#33907C" fontSize="lg" fontWeight="bold">$15</Text>
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
  }
})

export default CardProduct