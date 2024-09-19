import React from 'react'
import { StyleSheet, ScrollView, Dimensions } from 'react-native';
import { View, Box, Heading, Text, Badge, Stack, HStack, VStack, Button, AspectRatio, Image } from "native-base";

const OrderDashboard = () => {
	const { width, height } = Dimensions.get("window");
	return (
		<View bgColor="bgViews" style={styles.flex}>
			<ScrollView style={styles.flex}>
				<Box style={styles.contenido} flexDirection="row" alignItems="center" gap="3" my="4">
					<Heading fontSize="2xl" color="titleBold" fontFamily="productSans" fontWeight="bold">Transactions</Heading>
					<Badge colorScheme="success" background="rgba(51,144,124,.1)" rounded="lg" _text={{fontSize: 16, color: "greenPrimary", fontWeight: "bold", fontFamily: "productSans"}} px="2" py="1">January 2020</Badge>
				</Box>
				{
					[1,2,3,4,5,6,7,8,9].map(item => (

						<View key={item} bgColor="white" py="3" mb="3">
							<Stack style={styles.contenido} flexDirection="row" align="center" flexWrap="wrap" maxW={width}>
								<HStack mr="2" flex=".7">
									<AspectRatio w="full">
										<Image source={require("../images/jean-cocacola2.png")} alt="Jean" height={20} width={20} resizeMode="cover" rounded="lg" />
									</AspectRatio>
								</HStack>
								<HStack flexDirection="column" alignSelf="center" flex="1">
									<Text fontSize="md" color="titleBold" fontFamily="SFProText" fontWeight="semibold" isTruncated={true} maxW="110px" w="100%">Coca ColaColaColaColaColaCola</Text>
									<View flexDirection="row" gap={2} alignItems="center">
										<Text color="#33907C" fontSize="lg" fontWeight="extrabold">$25</Text>
										<Box flexDirection="row" gap={1}>
											<Text color="clText" fontSize="md" fontWeight="normal">50% off</Text>
										</Box>
									</View>
								</HStack>
								<HStack flexDirection="row" alignSelf="center" flex="1" justifyContent="flex-end" >
									<Button
										borderColor="greenPrimary"
										borderWidth="1"
										variant="outline"
										rounded="full"
										px="2"
										py="1"
										alignSelf="flex-end"
									>
										<Text color="greenPrimary" fontFamily="SFProText" fontWeight="semibold" fontSize="sm" w="full">Confirmed Pay</Text>
									</Button>
								</HStack>
							</Stack>
						</View>
					))
				}
			</ScrollView>
		</View>
	)
}

const styles = StyleSheet.create({
	flex: {flex:1},
	contenido: {
    width: "95%",
    marginHorizontal: "2.5%"
  }
})


export default OrderDashboard