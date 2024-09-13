import React, {useState} from 'react';
import { StyleSheet, ImageBackground, ScrollView } from 'react-native';
import { Icon, Box, View, Text, Stack,VStack,HStack, Pressable, Image, Heading, Button } from "native-base";
import Ionicons  from "react-native-vector-icons/Ionicons";

const Cart = () => {

	return (
		<>
			<Stack style={{backgroundColor: "#F6F9FF", flex: 1}}>
				<ScrollView>
					<VStack bgColor="white" mb="3">
						<Box style={styles.contenido} py="2">
							<Pressable _pressed={{
								backgroundColor: 'rgba(0,0,0,.1)'
							}} flexDirection="row" justifyContent="center" alignItems="center" rounded="full" py="2">
								<Icon as={Ionicons} name="add-outline" size="md" color="#4F4F4F" />
								<Text color="#4F4F4F" fontSize="lg" fontWeight="normal" ml="2">Add New Address</Text>
							</Pressable>
						</Box>
					</VStack>

					<VStack bgColor="white">
						<Box style={styles.contenido} pt="6" pb="3">
							<Stack flexDirection="row" justifyContent="center" alignItems="center" >
								<HStack w="40%">
									<Image
										source={require("../../images/jean-cocacola2.png")}
										alt="Ijmagen de jean"
										style={styles.imagen}
									/>
								</HStack>
								<HStack w="60%" flexDirection="column">
									<Text color="#4F4F4F" fontSize="xl" fontWeight="medium">Coca Cola</Text>
									<View flexDirection="row" gap={4} alignItems="flex-end" mt="1">
										<Text color="#33907C" fontSize="2xl" fontWeight="extrabold">$25</Text>
										<Box flexDirection="row" gap={1}>
											<Text color="#4F4F4F" fontSize="xl" fontWeight="normal" strikeThrough>50%</Text>
											<Text color="#4F4F4F" fontSize="xl" fontWeight="normal">50% off</Text>
										</Box>
									</View>
									<View flexDirection="row" alignItems="flex-end" mt="1">
										<Text color="#4F4F4F" fontSize="lg" fontWeight="normal">Qty: </Text>
										<Pressable flexDirection="row" alignItems="center" gap={1}>
											<Text color="#4F4F4F" fontSize="lg" fontWeight="normal">1</Text>
											<Icon as={Ionicons} name="caret-down-sharp" size="sm" color="#4F4F4F" />
										</Pressable>
									</View>
								</HStack>
							</Stack>
						</Box>
					</VStack>
					<Box borderTopColor="rgba(0,0,0,.1)" borderTopStyle="solid" borderTopWidth={1} py={1} bgColor="white" mb="8">
						<Pressable _pressed={{
							backgroundColor: 'rgba(0,0,0,.1)'
						}} flexDirection="row" justifyContent="center" alignItems="center" rounded="full" py="2">
							<Text color="#4F4F4F" fontSize="xl" fontWeight="normal" ml="2">Remove</Text>
						</Pressable>
					</Box>

					<VStack bgColor="white" mb="16">
						<Box style={styles.contenido} py="5">
							<Heading color="#000000" fontSize="2xl" fontWeight="semibold" mb="5">Price Details</Heading>
							<Stack space="1">
								<VStack space={3} flexDirection="row" alignItems="flex-end">
									<HStack w="80%">
										<Text fontSize="xl">Price Item</Text>
									</HStack>
									<HStack w="20%" justifyContent="flex-end">
										<Text fontSize="xl">$25</Text>
									</HStack>
								</VStack>
								<VStack space={3} flexDirection="row" alignItems="flex-end">
									<HStack w="80%">
										<Text fontSize="xl">Delivery Free</Text>
									</HStack>
									<HStack w="20%" justifyContent="flex-end">
										<Text fontSize="xl">Info</Text>
									</HStack>
								</VStack>
							</Stack>
						</Box>

						<Box borderTopColor="rgba(0,0,0,.1)" borderTopStyle="solid" borderTopWidth={1} py={1} bgColor="white">
							<View style={styles.contenido}>
								<VStack space={3} flexDirection="row" alignItems="flex-end">
									<HStack w="80%">
										<Heading color="#000000" fontSize="2xl" fontWeight="semibold" mb="5">Total Amount</Heading>
									</HStack>
									<HStack w="20%" justifyContent="flex-end">
										<Heading color="#000000" fontSize="2xl" fontWeight="semibold" mb="5">$25</Heading>
									</HStack>
								</VStack>
							</View>
						</Box>
					</VStack>

					<VStack bgColor="white"  w="100%" py="5">
						<Button bgColor="#33907C" rounded="full" w="90%" mx="auto" py="3" isDisabled={true}>
							<Text fontSize={22} color="#FFF" fontWeight="semibold">Continue to Payment</Text>
						</Button>
					</VStack>
				</ScrollView>
			</Stack>
		</>
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
  }
})

export default Cart