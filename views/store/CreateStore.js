import React from 'react'
import { Image, StyleSheet, ScrollView, Dimensions } from 'react-native'
import { Text, View, Box, Flex, Button, FormControl, Input, Stack } from "native-base";

const { width, height } = Dimensions.get('window'); //Dimensiones del celular

const CreateStore = () => {
	return (
		<ScrollView style={{height: "100%", backgroundColor: '#F6F9FF'}}>
			<Flex flex="1" direciton="column" alignItems="center" justifyContent="flex-start" gap="3" pt="5">
				<Image
					source={require("../../images/store-image.png")}
					style={{width: width / 1.8, height: 180, resizeMode: "contain"}}
				/>
				<Text color="#000000" fontFamily="SFProText" fontWeight="normal" fontSize="lg" textAlign="center">This information is used to set up{"\n"}your shop</Text>

				<Box flex="1" bgColor="white" w="full">
					<View style={styles.contenido}>
						<FormControl isRequired>
							<Stack mx="3" mb="4">
		            <FormControl.Label color="#4F4F4F" fontFamily="productSan" fontSize="md" mb="0">Store Name</FormControl.Label>
		            <Input type="text" variant="underlined" placeholder="Store Name" color="#000"placeholderTextColor="#4F4F4F" size="lg" focusOutlineColor="#4F4F4F"/>
		          </Stack>
		          <Stack mx="3" mb="4">
		            <FormControl.Label color="#4F4F4F" fontFamily="productSan" fontSize="md" mb="0">Store Web Address</FormControl.Label>
		            <Input type="text" variant="underlined" placeholder="Store Web Address" color="#000"placeholderTextColor="#4F4F4F" size="lg" focusOutlineColor="#4F4F4F"/>
		          </Stack>
		          <Stack mx="3" mb="4">
		            <FormControl.Label color="#4F4F4F" fontFamily="productSan" fontSize="md" mb="0">Store Description</FormControl.Label>
		            <Input type="text" variant="underlined" placeholder="Store Description" color="#000"placeholderTextColor="#4F4F4F" size="lg" focusOutlineColor="#4F4F4F"/>
		          </Stack>
		          <Stack mx="3" mb="4">
		            <FormControl.Label color="#4F4F4F" fontFamily="productSan" fontSize="md" mb="0">Store Type</FormControl.Label>
		            <Input type="text" variant="underlined" placeholder="Store Type" color="#000"placeholderTextColor="#4F4F4F" size="lg" focusOutlineColor="#4F4F4F"/>
		          </Stack>
		          <Stack mx="3" mb="4">
		            <FormControl.Label color="#4F4F4F" fontFamily="productSan" fontSize="md" mb="0">Address</FormControl.Label>
		            <Input type="text" variant="underlined" placeholder="Address" color="#000"placeholderTextColor="#4F4F4F" size="lg" focusOutlineColor="#4F4F4F"/>
		          </Stack>
		          <Stack mx="3" mb="4">
		            <FormControl.Label color="#4F4F4F" fontFamily="productSan" fontSize="md" mb="0">City</FormControl.Label>
		            <Input type="text" variant="underlined" placeholder="City" color="#000"placeholderTextColor="#4F4F4F" size="lg" focusOutlineColor="#4F4F4F"/>
		          </Stack>
		          <Stack mx="3" mb="4">
		            <FormControl.Label color="#4F4F4F" fontFamily="productSan" fontSize="md" mb="0">State</FormControl.Label>
		            <Input type="text" variant="underlined" placeholder="State" color="#000"placeholderTextColor="#4F4F4F" size="lg" focusOutlineColor="#4F4F4F"/>
		          </Stack>
		          <Stack mx="3" mb="4">
		            <FormControl.Label color="#4F4F4F" fontFamily="productSan" fontSize="md" mb="0">Country</FormControl.Label>
		            <Input type="text" variant="underlined" placeholder="Country" color="#000"placeholderTextColor="#4F4F4F" size="lg" focusOutlineColor="#4F4F4F"/>
		          </Stack>
		          <Stack mx="3" mb="4">
		            <FormControl.Label color="#4F4F4F" fontFamily="productSan" fontSize="md" mb="0">Courier Name</FormControl.Label>
		            <Input type="text" variant="underlined" placeholder="Courier Name" color="#000"placeholderTextColor="#4F4F4F" size="lg" focusOutlineColor="#4F4F4F"/>
		          </Stack>
		          <Stack mx="3" mb="4">
		            <FormControl.Label color="#4F4F4F" fontFamily="productSan" fontSize="md" mb="0">Tagline</FormControl.Label>
		            <Input type="text" variant="underlined" placeholder="Tagline" color="#000"placeholderTextColor="#4F4F4F" size="lg" focusOutlineColor="#4F4F4F"/>
		          </Stack>
						</FormControl>

						<Stack bgColor="white"  w="100%" py="3">
							<Button bgColor="#33907C" rounded="full" w="90%" mx="auto" py="3">
								<Text fontSize={22} color="#FFF" fontWeight="semibold">Create</Text>
							</Button>
						</Stack>
					</View>
				</Box>
			</Flex>
		</ScrollView>
	)
}
/*
	Falta agregar el react-native-chip-view a esta vista, ya esta instalado el modulo
	npm install react-native-chip-view --save
*/
const styles = StyleSheet.create({
	contenido: {
    width: "90%",
    marginHorizontal: "5%",
    paddingVertical: 10
  }
})

export default CreateStore