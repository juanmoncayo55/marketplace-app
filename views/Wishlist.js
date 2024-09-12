import React from 'react'
import { View, StyleSheet, ScrollView, Image } from 'react-native'
import { Box, Text, Heading, Stack, VStack, HStack, AspectRatio} from "native-base";
import {useNavigation} from "@react-navigation/native";
import data from "../browseData";
import globalStyles from "../styles/globalStyles";

const Wishlist = () => {
	return (
		<ScrollView style={globalStyles.contenido}>
			<VStack direction="row" flexWrap="wrap" justifyContent="center" space="2">
				{
					data.data.map((item, key) => (
						<Box key={key} maxW="47%" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" mb="2">
						  <Box>
						    <AspectRatio w="100%" ratio={16 / 13}>
						      <Image source={item.image} alt="image" height={300} width={300} />
						    </AspectRatio>
						  </Box>
						  <Stack p="3" space={3} bgColor="white">
						    <Stack space={2}>
						      <Heading fontSize={17} ml="-1" color="#4A4A4A" fontWeight="normal">
						        {item.name}
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
					))
				}
			</VStack>
		</ScrollView>
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


export default Wishlist