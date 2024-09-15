import React from 'react'
import { StyleSheet, ImageBackground, ScrollView } from 'react-native';
import { Icon, Box, View, Text, Stack,VStack,HStack, Pressable, Image, Heading, Button, FormControl, Input } from "native-base";
import LinearGradient from "react-native-linear-gradient";

const AddCard = () => {
	return (
		<Stack style={{backgroundColor: "#F6F9FF", flex: 1}}>
			<ScrollView>
				<VStack mb="6">
					<Box style={styles.contenido} py="2">
						<ImageBackground
							source={require('../../images/background-card.png')}
							style={{
								height: 230,
								width: '100%',
								flex: 1,
								position: "relative",
								zIndex: 5
							}}>
								<LinearGradient
									colors={['#414345', '#232526']}
									start={{x: 0, y: 0.5}}
									end={{x: 1, y: 0.5}}
									style={{
										position: "absolute",
										top: 0,
										bottom: 0,
										left:0,
										right:0,
										zIndex: -3,
										borderRadius: 20,
									}}
									imageStyle={{
										resizeMode: "cover",
										alignSelf: "flex-end"
									}}
								/>
						    <Stack style={{width: "100%", height: 230}} p="5" flexDirection="column" justifyContent="space-between" alignItems="center">
						    	<VStack flexDirection="row" justifyContent="space-between">
						    		<HStack flexDirection="column" w="75%">
								    	<Text fontFamily="helvetica" fontWeight="normal" color="#B7B7B7" fontSize="lg">Holder name</Text>
								    	<Text fontFamily="helvetica" fontWeight="normal" color="#FFF" fontSize="xl">Tradly Team</Text>
							    	</HStack>
							    	<HStack w="25%" flexDirection="row" justifyContent="flex-end">
							    		<Image source={require("../../images/MasterCard-light.png")} alt="Imagen de MasterCard" />
							    	</HStack>
						    	</VStack>

						    	<VStack flexDirection="column" w="100%">
						    		<Text fontFamily="helvetica" fontWeight="normal" color="#B7B7B7" fontSize="lg" mb="0">Card Number</Text>
						    		<Text fontFamily="helvetica" fontWeight="normal" color="#FFF" fontSize="3xl" mt="0">5501 22** **** 4487</Text>
						    	</VStack>

						    	<VStack flexDirection="row" alignItems="center" justifyContent="space-between">
						    		<HStack flexDirection="column" w="75%">
								    	<Text fontFamily="helvetica" fontWeight="normal" color="#B7B7B7" fontSize="md">Exp. Date</Text>
								    	<Text fontFamily="helvetica" fontWeight="normal" color="#FFF" fontSize="sm">16/19</Text>
							    	</HStack>
							    	<HStack w="25%" justifyContent="flex-end">
							    		<View flexDirection="column">
								    		<Text fontFamily="helvetica" fontWeight="normal" color="#B7B7B7" fontSize="md" textAlign="center">CVC</Text>
									    	<Text fontFamily="helvetica" fontWeight="normal" color="#FFF" fontSize="sm" textAlign="center">111</Text>
								    	</View>
							    	</HStack>
						    	</VStack>
						    </Stack>
						</ImageBackground>
					</Box>
				</VStack>

				<VStack bgColor="white" py="5">
					<Box style={styles.contenido}>
						<FormControl isRequired>
		          <VStack mx="3" mb="4">
		            <FormControl.Label color="#4F4F4F" fontSize="md" mb="0">Card Number</FormControl.Label>
		            <Input type="text" variant="underlined" placeholder="Card Number" color="#000"placeholderTextColor="#4F4F4F" size="md" focusOutlineColor="#4F4F4F"/>
		          </VStack>
		          <VStack mx="3" mb="4">
		            <FormControl.Label color="#4F4F4F" fontSize="md" mb="0">Name</FormControl.Label>
		            <Input type="text" variant="underlined" placeholder="Name" color="#000"placeholderTextColor="#4F4F4F" size="md" focusOutlineColor="#4F4F4F"/>
		          </VStack>
		          <VStack flexDirection="row" justifyContent="center" mx="2">
		          	<Box w="45%" mr="6">
		          		<FormControl.Label color="#4F4F4F" fontSize="md" mb="0">Expires Dates</FormControl.Label>
		            	<Input type="text" variant="underlined" placeholder="Expires Dates" color="#000"placeholderTextColor="#4F4F4F" fontSize="md" focusOutlineColor="#4F4F4F"/>
		          	</Box>
		          	<Box w="45%">
		          		<FormControl.Label color="#4F4F4F" fontSize="md" mb="0">CVC</FormControl.Label>
		            	<Input type="text" variant="underlined" placeholder="CVC" color="#000"placeholderTextColor="#4F4F4F" fontSize="md" focusOutlineColor="#4F4F4F"/>
		          	</Box>
		          </VStack>

		         </FormControl>
	         </Box>

	         <VStack bgColor="white"  w="100%" py="5" mt="16">
						<Button bgColor="#33907C" rounded="full" w="90%" mx="auto" py="3">
							<Text fontSize={22} color="#FFF" fontWeight="semibold">Add Credit Card</Text>
						</Button>
					</VStack>
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
});

export default AddCard