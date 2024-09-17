import React, {useState, useEffect} from 'react'
import { StyleSheet, ScrollView, LogBox } from 'react-native'
import {View, Text, Stack, HStack, VStack, FormControl, Input, TextArea, Box, Icon, Button, Pressable, Image, Flex} from "native-base";
import Ionicons  from "react-native-vector-icons/Ionicons";
import { RNChipView } from "react-native-chip-view";

const AddProduct = () => {

	const [productName, setProductName] = useState("");

	useEffect(() => {
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
	}, [])

	return (
		<View bgColor="bgViews" style={{flex: 1}}>
			<ScrollView>
				<View style={styles.contenido} my="5">
					<ScrollView horizontal showsHorizontalScrollIndicator={false}>
						<Box flexDirection="row" gap="2" mt="2" mr="3">
							<Pressable style={styles.btnAddImageDashed} alignItems="center" px="2" py="3">
								<Icon name="add-sharp" as={Ionicons} size="4xl" fontWeight="bold" color="rgba(0,0,0,.2)" />
								<Text fontSize="xl" color="rgba(0,0,0,.4)">Add Photos</Text>
								<Text fontSize="md" color="rgba(0,0,0,.3)">1600 x 1200 for hi res</Text>
							</Pressable>
							<View position="relative">
								<Image
									alt="Brocolli"
									source={require("../../images/brocoli.png")}
									rounded="lg"
								/>
								<View position="absolute" right="-5" top="-5" bgColor="#212121" rounded="full" w="7" h="7" justifyContent="center" alignItems="center">
									<Icon size="lg" color="white" as={Ionicons} name="close" />
								</View>
							</View>
						</Box>
					</ScrollView>
				</View>
				<View bgColor="white">
					<Box style={styles.contenido}>
						<FormControl isRequired>
		          <Stack mx="3" mb="4">
		            <FormControl.Label color="#4F4F4F" fontSize="md" mb="0">Product Name</FormControl.Label>
		            <Input type="text" variant="underlined" placeholder="Product Name" color="#000"placeholderTextColor="#4F4F4F" size="lg" focusOutlineColor="#4F4F4F"/>
		          </Stack>
		          <Stack mx="3" mb="4">
		            <FormControl.Label color="#4F4F4F" fontSize="md" mb="0">Category Product</FormControl.Label>
		            <Input type="text" variant="underlined" placeholder="Category Product" color="#000"placeholderTextColor="#4F4F4F" size="lg" focusOutlineColor="#4F4F4F"/>
		          </Stack>
		          <Stack mx="3" mb="4" flexDirection="row" justifyContent="space-between">
		          	<HStack w="47%" flexDirection="column" mr="3">
			            <FormControl.Label color="#4F4F4F" fontSize="md" mb="0">Price</FormControl.Label>
			            <Input type="text" variant="underlined" placeholder="Price" color="#000"placeholderTextColor="#4F4F4F" size="lg" focusOutlineColor="#4F4F4F" w="100%"/>
		          	</HStack>
		          	<HStack w="47%" flexDirection="column">
			            <FormControl.Label color="#4F4F4F" fontSize="md" mb="0">Offer Price</FormControl.Label>
			            <Input type="text" variant="underlined" placeholder="Offer Price" color="#000"placeholderTextColor="#4F4F4F" size="lg" focusOutlineColor="#4F4F4F" w="100%"/>
		          	</HStack>
		          </Stack>
		          <Stack mx="3" mb="4">
		            <FormControl.Label color="#4F4F4F" fontSize="md" mb="0">Location Details</FormControl.Label>
		            <Input
		            	type="text"
		            	variant="underlined"
		            	placeholder="Location Details"
		            	color="#000"
		            	placeholderTextColor="#4F4F4F"
		            	size="lg"
		            	focusOutlineColor="#4F4F4F"
		            	InputRightElement={
										<Icon as={Ionicons} size="lg" mr="4" color="muted.300" name="map-outline" />
									}
		            />
		          </Stack>
		          <Stack mx="3" mb="4">
		          	<FormControl.Label color="#4F4F4F" fontSize="md" mb="0">Product Description</FormControl.Label>
		          	<TextArea h={20} placeholder="Product Description" w="100%" />
		          </Stack>
		          <Stack mx="3" mb="4">
		            <FormControl.Label color="#4F4F4F" fontSize="md" mb="0">Condition</FormControl.Label>
		            <Input type="text" variant="underlined" placeholder="Condition" color="#000"placeholderTextColor="#4F4F4F" size="lg" focusOutlineColor="#4F4F4F"/>
		          </Stack>
		          <Stack mx="3" mb="4">
		            <FormControl.Label color="#4F4F4F" fontSize="md" mb="0">Price Type</FormControl.Label>
		            <Input type="text" variant="underlined" placeholder="Price Type" color="#000"placeholderTextColor="#4F4F4F" size="lg" focusOutlineColor="#4F4F4F"/>
		          </Stack>
							<Stack mx="3" mb="4">
								<FormControl.Label color="#4F4F4F" fontSize="md" mb="0">Additional Details</FormControl.Label>
								<Box flexDirection="row" gap="2" flexWrap="wrap">
									{["Groceries", "Fruit", "Vegetales", "Eggs"].map((category, index) => (
											<RNChipView
												key={index}
												title={category}
												avatar={false}
												cancelable={<Icon fontSize="lg" color="black" as={Ionicons} name="close" />}
												width="50"
											/>
									))}
								</Box>
							</Stack>
		        </FormControl>
						<Box mt="16">
							<Button bgColor="#33907C" rounded="full" w="90%" mx="auto" py="2">
								<Text fontSize={22} color="#FFF" fontWeight="semibold">Add Product</Text>
							</Button>
						</Box>
		      </Box>
	      </View>
			</ScrollView>
		</View>
	)
}

const styles = StyleSheet.create({
	contenido: {
    width: "90%",
    marginHorizontal: "5%",
    paddingVertical: 10
  },
  btnAddImageDashed: {
  	borderRadius: 12,
  	borderColor: "#CCC",
  	borderWidth: 2,
  	borderStyle: "dashed"
  }
});

export default AddProduct