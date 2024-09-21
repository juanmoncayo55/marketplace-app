import React from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import { Box, View, Stack, HStack, VStack, Center, Text, Heading, Image, Button, Icon } from "native-base";
import { RNChipView } from "react-native-chip-view";
import Ionicons from "react-native-vector-icons/Ionicons";
import CardProduct from '../../components/CardProduct';

const StoreProfile = () => {
	return (
		<>
			<ScrollView>
				<View bgColor="white" rounded="2xl">
					<Box style={styles.contenidoBox} py="6" mt="5">
						<VStack flexDirection="row" justifyContent="space-between" flexWrap="wrap">
							<HStack>
								<Box flexDirection="row" justifyContent="flex-start" alignItems="center" gap="2">
									<Center
										style={styles.userFirstLetter}
										rounded="full"
									>
										<Text color="white" fontFamily="productSans" fontWeight="bold" fontSize="4xl" style={{ lineHeight: 50 }}>T</Text>
									</Center>
									<Box flexDirection="column" justifyContent="center">
										<Heading fontFamily="SFProText" fontWeight="normal" fontSize="lg" color="clText">Tradly Team</Heading>
										<Text fontFamily="SFProText" fontWeight="normal" fontSize="sm" color="rgba(79,79,79,.5)">tradly.app</Text>
									</Box>
								</Box>
							</HStack>
							<HStack flexDirection="row" alignItems="center">
								<Button rounded="3xl" bgColor="greenPrimary" _text={{ color: "white", fontSize: "lg" }} py="1" px="5">
									Follow
								</Button>
							</HStack>
							<VStack mt="8">
								<Text fontFamily="productSans" color="rgba(79,79,79,.7)" fontSize="md" lineHeight="18">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In augue nunc vel rhoncus, sed. Neque hendrerit risus ut metus ultrices ac. Dui morbi eu amet id mauris. Eget at ut.</Text>
							</VStack>
							<VStack mt="6" flexDirection="row" flexWrap="wrap">
								{["Groceries", "Vegetales"].map((category, index) => (
									<RNChipView
										key={index}
										title={category}
										avatar={false}
										cancelable={<Icon fontSize="md" color="black" as={Ionicons} name="close" />}
										width="50"
										height={30}
										backgroundColor="#D8D8D8"
										titleStyle={{ fontSize: 16, fontWeight: "normal" }}
										containerStyle={{ marginRight: 10 }}
									/>
								))}
							</VStack>
						</VStack>
					</Box>
				</View>

				<View bgColor="white" rounded="2xl" my="5" py="4">
					<Stack style={styles.contenidoBox} flexDirection="row" justifyContent="space-between">
						<HStack alignItems="center" justifyContent="center" flexDirection="column">
							<Text fontFamily="productSans" fontWeight="normal" fontSize="md" color="clText">Total Followers</Text>
							<Text fontFamily="productSans" fontWeight="normal" fontSize="md" color="clText">0</Text>
						</HStack>
						<HStack alignItems="center" justifyContent="center" flexDirection="column">
							<Text fontFamily="productSans" fontWeight="normal" fontSize="md" color="clText">Total Products</Text>
							<Text fontFamily="productSans" fontWeight="normal" fontSize="md" color="clText">0</Text>
						</HStack>
					</Stack>
				</View>

				<ScrollView horizontal showsHorizontalScrollIndicator={false}>
					<Box flexDirection="row" gap="2" flexWrap="wrap" px="4" mb="5">
						{["All Products", "Fruit", "Vegetales", "Eggs", "Bread & Bakery", "Beverages", "Frozen veg", "Homecare", "Pet Care"].map((category, index) => (
							<RNChipView
								key={index}
								backgroundColor={index == 0 ? "#33907C" : "transparent"}
								title={category}
								avatar={false}
								cancelable={null}
								width="50"
								height={30}
								titleStyle={{ fontSize: 16, fontWeight: "normal", paddingHorizontal: 8, color: index == 0 ? "#FFFFFF" : "#4f4f4f" }}
								containerStyle={{ borderWidth: 1, borderColor: "rgba(79,79,79,.4)" }}
							/>
						))}
					</Box>

				</ScrollView>
				<Box style={styles.contenido} flexDirection="row" flexWrap="wrap" columnGap={10} justifyContent="space-between" mb="5">
					<CardProduct />
					<CardProduct />
					<CardProduct />
					<CardProduct />
					<CardProduct />
					<CardProduct />
				</Box>
			</ScrollView>
		</>
	)
}

const styles = StyleSheet.create({
	contenidoBox: {
		width: "80%",
		marginHorizontal: "10%"
	},
	contenido: {
		width: "90%",
		marginHorizontal: "5%"
	},
	userFirstLetter: {
		backgroundColor: "#33907C",
		width: 50,
		height: 50,
		alignItems: "center",
		justifyContent: "center"
	}
})

export default StoreProfile