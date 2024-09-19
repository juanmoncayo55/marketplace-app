import React from 'react'
import { StyleSheet, ScrollView } from 'react-native';
import { View, Box, Center, Stack, VStack, HStack, Text, Heading, Link } from "native-base";

const ProfileDashboard = () => {
	return (
		<View>
			<ScrollView>
				<VStack bgColor="greenPrimary" pb="16">
					<Box style={styles.contenido} flexDirection="row" justifyContent="flex-start" alignItems="center" gap="4">
						<Center
							style={styles.userFirstLetter}
							rounded="full"
						>
							<Text color="white" fontFamily="productSans" fontWeight="bold" fontSize="6xl" style={{lineHeight: 85}}>T</Text>
							<View style={styles.circleAbsol} rounded="full" />
						</Center>
						<Box flexDirection="column" justifyContent="center">
							<Heading fontFamily="SFProText" fontWeight="semibold" fontSize="lg" color="white">Tradly Team</Heading>
							<Text fontFamily="SFProText" fontWeight="normal" fontSize="sm" color="rgba(255,255,255,.8)">+1 9998887776</Text>
							<Text fontFamily="SFProText" fontWeight="normal" fontSize="sm" color="rgba(255,255,255,.8)">info@tradly.co</Text>
						</Box>
					</Box>
				</VStack>
				<VStack
					style={[styles.contenido, { transform: [{ translateY: -40 }] }]}
					bgColor="white" rounded="2xl"
				>
					<Box p="4" py="2">
						{
							["Edit Profile", "Lenguage & Currency", "FeedBack", "Refer a Friend", "Terms & Conditions", "Logout"].map((item, index) => {
								console.log(index);
								return (
									<Link
										ket={index}
										borderBottomColor="grayCl"
										borderBottomWidth={index == 5 ? "0" : "1"}
										_text={{ color: index == 5 ? "#33907C" : "#4f4f4f" , fontSize: "md", fontFamily: "SFProText", fontWeight: "normal" }}
										isUnderlined={false}
										py="2"
									>{item}</Link>
								)
							})
						}
					</Box>
				</VStack>
			</ScrollView>
		</View>
	)
}

const styles = StyleSheet.create({
	contenido: {
    width: "90%",
    marginHorizontal: "5%"
  },
	userFirstLetter: {
  	backgroundColor: "#33907C",
  	width: 80,
  	height: 80,
  	alignItems: "center",
  	justifyContent: "center",
  	borderWidth: 1,
  	borderColor: "#FFF",
  	borderStyle: "solid",
		position: "relative"
  },
	circleAbsol: {
		width: 20,
		height: 20,
		backgroundColor: "#FFF",
		position: "absolute",
		bottom: 10,
		right: -5
	}
})

export default ProfileDashboard