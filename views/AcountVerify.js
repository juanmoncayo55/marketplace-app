import React, {useState} from 'react';
import { View, StyleSheet, ScrollView, StatusBar } from 'react-native';
import {Heading, Text, FormControl, Input, Box, Stack, VStack, Button, Pressable, Icon} from "native-base";
import MaterialIcons  from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import globalStyles from "../styles/globalStyles";

const AcountVerify = () => {
	const [verifyNumber, setVerifyNumber] = useState(false);

	//Navigation
	const navigation = useNavigation();

	return (
		<View style={[globalStyles.contenedor, globalStyles.bg33907C]}>
      <StatusBar barStyle="light-content" backgroundColor="#33907C" />
      <Box w="90%" mx="auto" mt="9" display="flex" flexDirection="row" justifyContent="flex-start">
				<Pressable
					p="1"
					rounded="full"
					_pressed={{backgroundColor: 'emerald.700'}}
					onPress={() => navigation.goBack()}
				>
					<Icon as={MaterialIcons} name="arrow-back" size="xl" color="white" />
				</Pressable>
			</Box>
			<Box style={styles.contenido}>
				{
					verifyNumber ? (
						<>
							<VStack mb="8">
								<Heading size="2xl" color="white" fontWeight="normal" textAlign="center">Phone Verification</Heading>
							</VStack>

							<VStack mb="12">
								<Heading size="md" color="white" fontWeight="normal" textAlign="center">Enter your OTP code here</Heading>
							</VStack>
							<Text mt="9" fontSize="lg" color="white">Didn’t you received any code?</Text>
							<Text mt="1" fontSize="lg" color="white">Resent new code</Text>

							<Button style={globalStyles.boton} rounded="full" mt="4" onPress={() => setVerifyNumber(!verifyNumber)}>
								<Text fontSize="xl" style={globalStyles.botonTexto}>Verify</Text>
							</Button>
						</>
					) : (
						<>
							<VStack mb="8">
								<Heading size="2xl" color="white" fontWeight="normal" textAlign="center">Verify your phone number</Heading>
							</VStack>

							<VStack mb="12">
								<Heading size="md" color="white" fontWeight="normal" textAlign="center">We have sent you an SMS with a code to enter number</Heading>
							</VStack>

							<VStack w="100%" maxW="350px" mx="auto">
								<Input
									placeholder="Place Insert your Phone"
									color="white"
									variant="rounded"
									style={globalStyles.input}
									placeholderTextColor="white"
									size="xl"
									borderColor="white"
									borderStyle="solid"
									borderWidth="1"
									focusOutlineColor="white"
									fontWeight="bold"
									keyboardType="number-pad"
									InputLeftElement={
										<Pressable display="flex" flexDirection="row" alignItems="center" justifyContent="center" pl="3">
											<Text fontWeight="bold" color="white" fontSize="lg">+91</Text>
											<Icon as={MaterialIcons} size="xl" color="white" name="arrow-drop-down" />
										</Pressable>
									}
								/>
							</VStack>

							<Text mt="9" fontSize="lg" color="white">Or login with Social network</Text>

							<Button style={globalStyles.boton} rounded="full" mt="4" onPress={() => setVerifyNumber(!verifyNumber)}>
								<Text fontSize="xl" style={globalStyles.botonTexto}>Next</Text>
							</Button>
						</>
					)
				}
			</Box>
		</View>
	)
}

const styles = StyleSheet.create({
	contenido: {
		flex: 1,
		justifyContent: 'center',
		alignItems: "center",
		width: "85%",
		marginHorizontal: '7.5%'
	}
})

export default AcountVerify