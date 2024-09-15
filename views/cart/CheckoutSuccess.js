import React from 'react';
import { StyleSheet, ImageBackground, ScrollView } from 'react-native';
import { Icon, Box, View, Text, Stack,VStack,HStack, Pressable, Image, Heading, Button } from "native-base";
import Ionicons  from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const CheckoutSuccess = () => {
	return (
		<Stack style={{backgroundColor: "#F6F9FF", flex: 1}}>
			<ScrollView>
				<VStack my="9" alignItems="center">
					<Image source={require("../../images/Done.png")} alt="Done" />
					<Text fontFamily="productSans" fontWeight="bold" fontSize="3xl" color="#4f4f4f" mt="2">Thanks for Order</Text>
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

					<VStack bgColor="white" mt="5">
						<Box style={styles.contenido} py="5">
							<Heading color="#000000" fontSize="2xl" fontWeight="semibold" mb="2">Track Order</Heading>
							<Heading color="#606a7b" fontSize="xl" fontWeight="normal">Order ID - 123455</Heading>
							<Text borderTopColor='#33907C' borderTopWidth="3" mt="3" w={90}></Text>
							<VStack flexDirection="row">
								<HStack w="10%" mr="5" flexDirection="row" justifyContent="flex-end" alignItems="center">
									<Text h={16} borderRightColor='#606a7b' borderRightWidth="3"></Text>
								</HStack>
								<HStack w="85%" flexDirection="column">
									<VStack flexDirection="row" mb="9">
										<HStack w="65%" flexDirection="column" mr="3">
											<Text fontFamily="SFProText" color="#212121" fontSize="lg" fontWeight="semibold">Order Placed</Text>
											<Text fontFamily="SFProText" color="#606A7B" fontSize="sm">Order#123455 from Fashion Point</Text>
										</HStack>
										<HStack w="30%" flexDirection="column">
											<Text fontFamily="SFProText" color="#606A7B" fontSize="sm">05/08/2019</Text>
											<Text fontFamily="SFProText" color="#606A7B" fontSize="sm">11:10 AM</Text>
										</HStack>
									</VStack>
									<VStack flexDirection="row" mb="9">
										<HStack w="65%" flexDirection="column" mr="3">
											<Text fontFamily="SFProText" color="#212121" fontSize="lg" fontWeight="semibold">Order Placed</Text>
											<Text fontFamily="SFProText" color="#606A7B" fontSize="sm">Order#123455 from Fashion Point</Text>
										</HStack>
										<HStack w="30%" flexDirection="column">
											<Text fontFamily="SFProText" color="#606A7B" fontSize="sm">05/08/2019</Text>
											<Text fontFamily="SFProText" color="#606A7B" fontSize="sm">11:10 AM</Text>
										</HStack>
									</VStack>
									<VStack flexDirection="row" mb="9">
										<HStack w="65%" flexDirection="column" mr="3">
											<Text fontFamily="SFProText" color="#212121" fontSize="lg" fontWeight="semibold">Order Placed</Text>
											<Text fontFamily="SFProText" color="#606A7B" fontSize="sm">Order#123455 from Fashion Point</Text>
										</HStack>
										<HStack w="30%" flexDirection="column">
											<Text fontFamily="SFProText" color="#606A7B" fontSize="sm">05/08/2019</Text>
											<Text fontFamily="SFProText" color="#606A7B" fontSize="sm">11:10 AM</Text>
										</HStack>
									</VStack>
									<VStack flexDirection="row">
										<HStack w="65%" flexDirection="column" mr="3">
											<Text fontFamily="SFProText" color="#212121" fontSize="lg" fontWeight="semibold">Order Placed</Text>
											<Text fontFamily="SFProText" color="#606A7B" fontSize="sm">Order#123455 from Fashion Point</Text>
										</HStack>
										<HStack w="30%" flexDirection="column">
											<Text fontFamily="SFProText" color="#606A7B" fontSize="sm">05/08/2019</Text>
											<Text fontFamily="SFProText" color="#606A7B" fontSize="sm">11:10 AM</Text>
										</HStack>
									</VStack>
								</HStack>
							</VStack>
						</Box>
					</VStack>

					<VStack bgColor="white" mt="5">
						<View borderBottomColor="#EBECEF" borderBottomWidth="2">
							<View style={styles.contenido}>
								<Heading color="#212121" fontSize="2xl" fontWeight="semibold">Additional Details</Heading>
							</View>
						</View>

						<Box style={styles.contenido} py="3">
							<Stack space={3}>
								<VStack flexDirection="column">
									<HStack mb="2">
										<Text color="#4F4F4F" fontSize="lg" fontWeight="semibold">Tradly team</Text>
									</HStack>
									<HStack flexDirection="column">
										<Text color="#606A7B" fontSize="lg" mb="2">Flat Number 512, Eden Garden, Rewari</Text>
										<Text color="#606A7B" fontSize="lg">Mobile: 9876543210</Text>
									</HStack>
								</VStack>
							</Stack>
						</Box>
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
  }
});

export default CheckoutSuccess