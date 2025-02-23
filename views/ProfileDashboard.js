import React, {useContext, useEffect, useState} from 'react'
import { StyleSheet, ScrollView, Dimensions } from 'react-native';
import { View, Box, Center, Stack, VStack, HStack, Text, Heading, Link, Pressable, Image } from "native-base";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import UserContext from '../context/user/userContext.js';
import MenuContext from '../context/menu/menuContext.js';
import { verifyAccount } from '../helpers/index.js';
import client from "../config/apollo.js"
import EditProfile from './EditProfile.js';
import HeaderBottomTab from '../components/HeaderBottomTab.js';
import LenguageCurrency from './account/LenguageCurrency.js';
import Feedback from './account/Feedback.js';
import ReferFriend from './account/ReferFriend.js';
import TermsConditions from './account/TermsConditions.js';

const {width, height} = Dimensions.get("screen")

const ProfileDashboard = () => {	

	const [screenCurrent, setScreenCurrent] = useState(null);

	const navigation = useNavigation();

	const {user, cleanUserState, userIsLogued} = useContext(UserContext);
	const {
		screenEditProfile, 
		isVisibleEditProfile, 
		screenLanguageCurrency, 
		isVisibleLanguageCurrency, 
		screenFeedback, 
		isVisibleFeedback, 
		screenReferFriend, 
		isVisibleReferFriend, 
		screenTermsConditions, 
		isVisibleTermsConditions,
		bottomMenu
	} = useContext(MenuContext);

	useEffect(() => {
		verifyAccount()
	}, [])

	useEffect(() => {
		if(screenEditProfile || screenLanguageCurrency || screenFeedback || screenReferFriend || screenTermsConditions){
			console.log("Se esconde el menu bottom")
      bottomMenu();
		}
  }, [screenEditProfile,screenLanguageCurrency,screenFeedback,screenReferFriend,screenTermsConditions]);


	const { email, firstName, lastName, avatar } = user;

	const logoutUser = async () => {
		userIsLogued(false)
		client.clearStore();
		cleanUserState();
		navigation.navigate("HomeDashboard");
		await AsyncStorage.removeItem("user-logued");
		console.log("Ya Salio Wey!!!")
	}

	/*const changeTemplateProfile = () => {
		let Template = null;
		switch(screenCurrent){
			case null:
				Template = null;
				break;
			case "EditProfile": {
				Template = <EditProfile setScreenCurrent={setScreenCurrent} />;
				break;
			}
			default: break;
		}

		return Template;
	}*/

	const navigationProfile = [
		{
			"name": "Edit Profile",
			"component": () => isVisibleEditProfile(true)
		},
		{
			"name": "Lenguage & Currency",
			"component": () => isVisibleLanguageCurrency(true)
		},
		{
			"name": "FeedBack",
			"component": () => isVisibleFeedback(true)
		},
		{
			"name": "Refer a Friend",
			"component": () => isVisibleReferFriend(true)
		},
		{
			"name": "Terms & Conditions",
			"component": () => isVisibleTermsConditions(true)
		},
		{
			"name": "Logout",
			"component": null
		}
	]

	/*const actionRequired = () => {
		setScreenCurrent(null)
	}*/

	/*<View flex={1}>
		{!screenCurrent ? 
			<>
				<HeaderBottomTab
					title="Profile"
					actionRequired={actionRequired}
				/>
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
											onPress={index == 5 ? () => logoutUser() : item.component}
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
			</>
		: changeTemplateProfile()}
		</View>*/
	return (
		<View flex={1}>
			{ !screenEditProfile && !screenLanguageCurrency && !screenFeedback && !screenReferFriend && !screenTermsConditions ?
				<>
					<HeaderBottomTab
						title="Profile"
					/>
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
												onPress={index == 5 ? () => logoutUser() : item.component}
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
				</>
				: null
			}
			{ screenEditProfile ? <EditProfile /> : null }
			{ screenLanguageCurrency ? <LenguageCurrency /> : null }
			{ screenFeedback ? <Feedback /> : null }
			{ screenReferFriend ? <ReferFriend /> : null }
			{ screenTermsConditions ? <TermsConditions /> : null }
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