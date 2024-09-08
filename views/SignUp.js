import React, {useState} from 'react';
import { View, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import {Heading, Text, FormControl, Input, Box, Stack, VStack, HStack, Button, Pressable, Icon, Link} from "native-base";
import MaterialIcons  from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import globalStyles from "../styles/globalStyles";

const SignUp = () => {
	const [showPass, setShowPass] = useState(true);

	//Navigation
	const navigation = useNavigation();
	return (
		<SafeAreaView style={[globalStyles.contenedor, globalStyles.bg33907C]}>
			<ScrollView style={{height: "100%"}}>
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
					<VStack my="16">
						<Heading size="2xl" color="white" fontWeight="medium" textAlign="center">Welcome to tradly</Heading>
					</VStack>

					<VStack mb="12">
						<Heading size="md" color="white" fontWeight="normal" textAlign="center">Signup to your account</Heading>
					</VStack>

					<FormControl>
						<Stack w="100%" space={4} maxW="350px" mx="auto">
							<VStack>
								<Input
									placeholder="FirstName"
									color="white"
									variant="rounded"
									style={globalStyles.input}
									placeholderTextColor="white"
									size="xl"
									borderColor="white"
									borderStyle="solid"
									borderWidth="1"
									focusOutlineColor="white"
								/>
							</VStack>
							<VStack>
								<Input
									placeholder="LastName"
									color="white"
									variant="rounded"
									style={globalStyles.input}
									placeholderTextColor="white"
									size="xl"
									borderColor="white"
									borderStyle="solid"
									borderWidth="1"
									focusOutlineColor="white"
								/>
							</VStack>
							<VStack>
								<Input
									placeholder="Email/Mobile Number"
									color="white"
									variant="rounded"
									style={globalStyles.input}
									placeholderTextColor="white"
									size="xl"
									borderColor="white"
									borderStyle="solid"
									borderWidth="1"
									focusOutlineColor="white"
								/>
							</VStack>
							<VStack>
								<Input
									placeholder="Password"
									color="white"
									variant="rounded"
									style={globalStyles.input}
									placeholderTextColor="white"
									size="xl"
									borderColor="white"
									borderStyle="solid"
									borderWidth="1"
									focusOutlineColor="white"
									secureTextEntry={showPass}
									InputRightElement={
										<Pressable onPress={() => setShowPass(!showPass)}>
											<Icon as={MaterialIcons} size="lg" mr="4" color="muted.200" name={showPass ? "visibility" : "visibility-off"} />
										</Pressable>
									}
								/>
							</VStack>

							<VStack>
								<Input
									placeholder="Re-Enter Password"
									color="white"
									variant="rounded"
									style={globalStyles.input}
									placeholderTextColor="white"
									size="xl"
									borderColor="white"
									borderStyle="solid"
									borderWidth="1"
									focusOutlineColor="white"
									secureTextEntry={showPass}
									InputRightElement={
										<Pressable onPress={() => setShowPass(!showPass)}>
											<Icon as={MaterialIcons} size="lg" mr="4" color="muted.200" name={showPass ? "visibility" : "visibility-off"} />
										</Pressable>
									}
								/>
							</VStack>
						</Stack>
					</FormControl>

					<Button style={globalStyles.boton} rounded="full" mt="9" onPress={() => navigation.navigate("AcountVerify")}>
						<Text fontSize="xl" style={globalStyles.botonTexto}>Create</Text>
					</Button>

					<Box mt="9" display="flex" flexDirection="row" pb="20">
						<Text color="white" fontSize="lg">
							Have an account ?{" "}
						</Text>
						<Pressable
							onPress={() => navigation.navigate("Login")}
						>
							<Text color="white" fontSize="lg" fontWeight="bold">Sign in</Text>
						</Pressable>
					</Box>
				</Box>
			</ScrollView>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	contenido: {
		justifyContent: 'center',
		alignItems: "center",
		width: "85%",
		marginHorizontal: '7.5%'
	}
})

export default SignUp