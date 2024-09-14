import React, {useState} from 'react';
import { Dimensions, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import { Icon, Box, View, Text, Stack,VStack,HStack, Pressable, Image, Heading, Button, Radio } from "native-base";
import Ionicons  from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import ViewSlider from 'react-native-view-slider'

const { width, height } = Dimensions.get('window');

/*
<ViewSlider
	renderSlides = {
	  <>
	    <View style={styles.viewBox}><Text>ONE</Text></View>
	    <View style={styles.viewBox}><Text>TWO</Text></View>
	    <View style={styles.viewBox}><Text>THREE</Text></View>
	    <View style={styles.viewBox}><Text>FOUR</Text></View>
	 </>
	}
	style={styles.slider}     //Main slider container style
	height = {200}    //Height of your slider
	slideCount = {4}    //How many views you are adding to slide
	dots = {true}     // Pagination dots visibility true for visibile 
	dotActiveColor = 'red'     //Pagination dot active color
	dotInactiveColor = 'gray'    // Pagination do inactive color
	dotsContainerStyle={styles.dotContainer}     // Container style of the pagination dots
	slideInterval = {4000}    //In Miliseconds
/>
*/

const Payment = () => {
	const [pago, setPago] = useState("");

	return (
		<Stack style={{backgroundColor: "#F6F9FF", flex: 1}}>
			<ScrollView>
				<VStack bgColor="white" mb="3">
					<Box style={styles.contenido} py="2">
						<ViewSlider
							renderSlides = {
							  <>
							    <View style={styles.viewBox}>
							    	<Pressable style={styles.pressableCard} justifyContent="center" alignItems="center" w="90%" py="10" mt="5" _pressed={{backgroundColor: "rgba(0,0,0,.1)"}}>
							    		<Icon name="add-sharp" as={Ionicons} size="5xl" color="rgba(0,0,0,.20)" />
							    		<Text fontFamily="productSans" fontWeight="400" fontSize="xl" color="rgba(0,0,0,.20)" mt="4">Add Payment Method</Text>
							    	</Pressable>
							    </View>
							    <View style={styles.viewBox}>
							    	<Pressable style={styles.pressableCard} justifyContent="center" alignItems="center" w="90%" py="10" mt="5" _pressed={{backgroundColor: "rgba(0,0,0,.1)"}}>
							    		<Icon name="add-sharp" as={Ionicons} size="5xl" color="rgba(0,0,0,.20)" />
							    		<Text fontFamily="productSans" fontWeight="400" fontSize="xl" color="rgba(0,0,0,.20)" mt="4">Add Payment Method</Text>
							    	</Pressable>
							    </View>
							    <View style={styles.viewBox}>
							    	<Pressable style={styles.pressableCard} justifyContent="center" alignItems="center" w="90%" py="10" mt="5" _pressed={{backgroundColor: "rgba(0,0,0,.1)"}}>
							    		<Icon name="add-sharp" as={Ionicons} size="5xl" color="rgba(0,0,0,.20)" />
							    		<Text fontFamily="productSans" fontWeight="400" fontSize="xl" color="rgba(0,0,0,.20)" mt="4">Add Payment Method</Text>
							    	</Pressable>
							    </View>
							    <View style={styles.viewBox}>
							    	<Pressable style={styles.pressableCard} justifyContent="center" alignItems="center" w="90%" py="10" mt="5" _pressed={{backgroundColor: "rgba(0,0,0,.1)"}}>
							    		<Icon name="add-sharp" as={Ionicons} size="5xl" color="rgba(0,0,0,.20)" />
							    		<Text fontFamily="productSans" fontWeight="400" fontSize="xl" color="rgba(0,0,0,.20)" mt="4">Add Payment Method</Text>
							    	</Pressable>
							    </View>
							 </>
							}
							style={styles.slider}     //Main slider container style
							height={230}    //Height of your slider
							slideCount = {4}    //How many views you are adding to slide
							dots = {true}     // Pagination dots visibility true for visibile 
							dotActiveColor = '#13B58C'     //Pagination dot active color
							dotInactiveColor = '#ECEBED'    // Pagination do inactive color
							dotsContainerStyle={styles.dotContainer}     // Container style of the pagination dots
							slideInterval = {4000}    //In Miliseconds
						/>
					</Box>
				</VStack>

				<VStack bgColor="white" mb="3">
					<Box py="4" w="full">
						<Stack flexDirection="row" alignItems="center">
							<Radio.Group name="formaDePago" accessibilityLabel="Forma de Pago" value={pago} onChange={nextValue => setPago(nextValue)} w="100%">
								<View style={{width: "90%", marginHorizontal: "5%"}}>
									<Radio value="one" my={1}>
						        Debit / Credit Card
						      </Radio>
								</View>
								<View borderBottomColor="#D8D8D8" borderBottomStyle="solid" borderBottomWidth="1" w="100%" my="2"></View>
								<View style={{width: "90%", marginHorizontal: "5%"}}>
						      <Radio value="two" my={1}>
						        Netbanking
						      </Radio>
					      </View>
					      <View borderBottomColor="#D8D8D8" borderBottomStyle="solid" borderBottomWidth="1" w="100%" my="2"></View>
					      <View style={{width: "90%", marginHorizontal: "5%"}}>
						      <Radio value="three" my={1}>
						        Cash on Delivery
						      </Radio>
					      </View>
					      <View borderBottomColor="#D8D8D8" borderBottomStyle="solid" borderBottomWidth="1" w="100%" my="2"></View>
					      <View style={{width: "90%", marginHorizontal: "5%"}}>
						      <Radio value="four" my={1}>
						        Wallet
						      </Radio>
					      </View>
							</Radio.Group>
						</Stack>
					</Box>
				</VStack>

				<VStack bgColor="white" mb="3">
					<Stack style={styles.contenido} py="5" flexDirection="row" justifyContent="space-between" alignItems="center">
						<HStack display="flex" flexDirection="column" mr="6">
							<Text fontSize="md" color="#4f4f4f">Deliver to Tradly Team, 75119</Text>
							<Text fontSize="sm" color="#585858">Kualalumpur, Malaysia</Text>
						</HStack>
						<HStack>
							<Button style={{backgroundColor: "#33907C"}} variant="outline" rounded="full" px={5} py={0.5}>
		      			<Text color="white" fontSize="md">Change</Text>
		      		</Button>
	      		</HStack>
					</Stack>
				</VStack>

				<VStack bgColor="white" mb="16">
					<Box style={styles.contenido} py="5">
						<Heading color="#000000" fontSize="2xl" fontWeight="semibold" mb="5">Price Details</Heading>
						<Stack space="1">
							<VStack space={3} flexDirection="row" alignItems="flex-end">
								<HStack w="80%">
									<Text fontSize="xl">Price (1 Item)</Text>
								</HStack>
								<HStack w="20%" justifyContent="flex-end">
									<Text fontSize="xl">$25</Text>
								</HStack>
							</VStack>
						</Stack>
					</Box>
				</VStack>

				<VStack bgColor="white"  w="100%" py="5">
					<Button bgColor="#33907C" rounded="full" w="90%" mx="auto" py="3" isDisabled={true}>
						<Text fontSize={22} color="#FFF" fontWeight="semibold">Checkout</Text>
					</Button>
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
  imagen: {
  	width: 110,
  	height: 110,
  },
  viewBox: {
    paddingHorizontal: 20,
    justifyContent: 'center',
    width: width,
    alignItems: 'center',
    height: 150,
	},
	pressableCard:{
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: '#ECEBED',
    borderRadius: 8
	},
	slider: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
	},
	dotContainer: {
	  backgroundColor: 'transparent',
	  position: 'absolute',
	  bottom: 10
	}
});

/*

viewBox: {
    paddingHorizontal: 20,
    justifyContent: 'center',
    width: width,
    alignItems: 'center',
    height: 150
},
slider: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
},
dotContainer: {
  backgroundColor: 'transparent',
  position: 'absolute',
  bottom: 10
}
*/

export default Payment