import React, {useContext, useEffect} from 'react'
import { StyleSheet, ScrollView } from 'react-native';
import { View, Box, Center, Stack, VStack, HStack, Text, Heading, Link, Pressable, Image } from "native-base";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import UserContext from '../context/user/userContext.js'
import { verifyAccount } from '../helpers/index.js';
import client from "../config/apollo.js"


const ProfileDashboard = () => {	
	const navigation = useNavigation();

	useEffect(() => {
		verifyAccount()
	}, [])

	const {user, cleanUserState} = useContext(UserContext);

	const { email, firstName, lastName, avatar } = user;

	const logoutUser = async () => {
		await AsyncStorage.removeItem("user-logued");
		navigation.navigate("Login");
		client.clearStore();
		cleanUserState();
		console.log("Ya Salio Wey!!!")
	}

	const navigationProfile = [
		{
			"name": "Edit Profile",
			"component": "EditProfile"
		},
		{
			"name": "Lenguage & Currency",
			"component": ""
		},
		{
			"name": "FeedBack",
			"component": ""
		},
		{
			"name": "Refer a Friend",
			"component": ""
		},
		{
			"name": "Terms & Conditions",
			"component": ""
		},
		{
			"name": "Logout",
			"action": logoutUser
		}
	]

	return (
		<View>
			<ScrollView>
				<VStack bgColor="greenPrimary" pb="16">
					<Box style={styles.contenido} flexDirection="row" justifyContent="flex-start" alignItems="center" gap="4">
						<Center
							style={styles.userFirstLetter}
							rounded="full"
						>
							{
								user.avatar ?
									<Image source={{ uri: avatar }} alt="Imagen perfil" w={"full"} h={"full"} rounded={"full"} />
								: <Text color="white" fontFamily="productSans" fontWeight="bold" fontSize="6xl" style={{lineHeight: 85}}>{firstName.slice(0,1)}</Text>
							}
							<View style={styles.circleAbsol} rounded="full" />
						</Center>
						<Box flexDirection="column" justifyContent="center">
							<Heading fontFamily="SFProText" fontWeight="semibold" fontSize="lg" color="white">{firstName} {lastName}</Heading>
							<Text fontFamily="SFProText" fontWeight="normal" fontSize="sm" color="rgba(255,255,255,.8)">+1 9998887776</Text>
							<Text fontFamily="SFProText" fontWeight="normal" fontSize="sm" color="rgba(255,255,255,.8)">{email}</Text>
						</Box>
					</Box>
				</VStack>
				<VStack
					style={[styles.contenido, { transform: [{ translateY: -40 }] }]}
					bgColor="white" rounded="2xl"
				>
					<Box p="4" py="2">
						{
							navigationProfile.map((item, index) => {
								return (
									<Pressable
										key={index}
										borderBottomColor="grayCl"
										borderBottomWidth={index == 5 ? "0" : "1"}
										
										isUnderlined={false}
										py="2"
										pl={"1"}
										onPress={() => item.component ? navigation.navigate(item.component) : logoutUser()}
										_pressed={{backgroundColor: "rgba(0,0,0,.01)", borderBottomColor: "#33907C"}}
									>
										<Text style={{ color: index == 5 ? "#33907C" : "#4f4f4f" , fontFamily: "SFProText", fontWeight: "normal" }} fontSize="md">{item.name}</Text>
									</Pressable>
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