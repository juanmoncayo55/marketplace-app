import React, { useState, useContext, useEffect } from 'react';
import { Keyboard, View, StyleSheet, ScrollView } from 'react-native';
import { Heading, Text, FormControl, Input, Box, Stack, VStack, HStack, Button, Pressable, Icon, Link, useToast, Spinner } from "native-base";
import {gql, useMutation} from '@apollo/client';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { jwtDecode } from "jwt-decode";

import { verifyAccount } from '../helpers/index.js';
import UserContext from '../context/user/userContext.js'

import globalStyles from "../styles/globalStyles";

const AUTHENTICATION_USER = gql`
	mutation authenticationUser($input: AuthInput){
	  authenticationUser(input: $input){
	    msg
			tokenLogin
	  }
	}
`;

const CREATE_USER = gql`
	mutation createUser($input: UserInput) {
		createUser(input: $input) {
			lastName
			firstName
			email
			token
			confirmado
			codeVerification
			avatar
		}
	}
`

const Login = () => {
	const [showPass, setShowPass] = useState(true);
	const [showPassRe, setShowPassRe] = useState(true);
	const [message, setMessage] = useState("");
	const [spinner, setSpinner] = useState(false);
	const [toggleRegister, setToggleRegister] = useState(false);
	const [isDisabledLoginBtn, setIsDisabledLoginBtn] = useState(false);
	const [isDisabledRegisterBtn, setIsDisabledRegisterBtn] = useState(false);

	//State del formulario de login
	const [email, setEmail] = useState("pedro@pedro.com");
	const [password, setPassword] = useState("123");

	//State del formulario de signUp
	const [name, setName] = useState("Pedro");
	const [last, setLast] = useState("Escamoso");
	const [emailRegister, setEmailRegister] = useState("pedro@pedro.com");
	const [passwordRegister, setPasswordRegister] = useState("123");
	const [passwordRegisterRe, setPasswordRegisterRe] = useState("123");

	const {setUserLogued, user, userIsLogued} = useContext(UserContext);


	//Navigation
	const navigation = useNavigation();

	//apollo Mutation
	const [authenticationUser] = useMutation(AUTHENTICATION_USER);
	const [createUser] = useMutation(CREATE_USER);

	/*useEffect(() => {
		verifyAccount()
	}, [])*/

	//Toast
	const toast = useToast();

	const handleSubmit = async () => {

		//Validar que los campos esten llenos
		if(email === "" || password === ""){
			toast.show({
				description: "Todos los Campos son Obligatorios"
			});
			return;
		}

		//verificar la longitud del password
		/*if(password.length < 6){
			setMessage("El password debe ser mayor a 6 caracteres");
			return;
		}*/

		Keyboard.dismiss();
		setIsDisabledLoginBtn(true)
		//Loguear usuario
		try {
			const {data} = await authenticationUser({
				variables: {
					input: {
						email,
						password
					}
				}
			});

			const {msg, tokenLogin} = data.authenticationUser;

			//token en AsyncStorage
			//await AsyncStorage.setItem("token", tokenLogin);

			await AsyncStorage.setItem("tokenLogin", tokenLogin);

			//decodifico el token que me envia el servidor
			const decode = jwtDecode(tokenLogin);
			//inserto el objeto con los datos personales del usuario logueado
			setUserLogued( {...decode, token: tokenLogin} )
			userIsLogued(true)
			if(msg){
				//let userL = JSON.parse(await AsyncStorage.getItem("user-logued"));
				setIsDisabledLoginBtn(false)
				//navigation.navigate("HomeDashboard")
			}

		} catch(e) {
			// statements
			console.log(e)
			toast.show({
				description: e.message
			});
			setIsDisabledLoginBtn(false)
		}
	}

	const handleRegister = async () => {

		//Validar que los campos esten llenos
		if(
			name === "" ||
			last === "" ||
			emailRegister === "" ||
			passwordRegister === "" ||
			passwordRegisterRe === ""
		){
			toast.show({
				description: "Todos los Campos son Obligatorios"
			});
			return;
		}

		//verificar la longitud del password
		/*if(password.length < 6){
			toast.show({
				description: "El password debe ser mayor a 6 caracteres"
			});
			return;
		}*/

		if(passwordRegister !== passwordRegisterRe){
			toast.show({
				description: "El password no coinciden, por favor verificar"
			});
			return;
		}

		Keyboard.dismiss();
		setIsDisabledRegisterBtn(true);

		//register user in database
		try{
		  const {data} = await createUser({
		  	variables: {
		  		input: {
			  		lastName: last,
						firstName: name,
						email: emailRegister,
						password: passwordRegister
		  		}
		  	}
		  });

		  if(!data.createUser){
		  	toast.show({
					description: "Ocurrio un error, vuelve a intentarlo mas tarde."
				});
		  	return;
		  }

		  //setToggleRegister(!toggleRegister)
		  navigation.navigate("AcountVerify", {email: emailRegister});

		  setName("");
			setLast("");
			setEmailRegister("");
			setPasswordRegister("");
			setPasswordRegisterRe("");
		} catch(error) {
		  console.log(error)
		}finally {
			setIsDisabledRegisterBtn(false);
		}
	}

	return (
		<View style={[globalStyles.contenedor, globalStyles.bg33907C]}>
			<ScrollView style={{flex: 1}}>
				<Box w="90%" mx="auto" display="flex" flexDirection="row" justifyContent="flex-start">
					<Pressable
						p="1"
						rounded="full"
						_pressed={{backgroundColor: 'emerald.700'}}
						onPress={() => toggleRegister ? setToggleRegister(false) : null}
						style={{opacity: toggleRegister ? 1 : 0}}
					>
						<Icon as={MaterialIcons} name="arrow-back" size="xl" color="white" />
					</Pressable>
				</Box>
				{/* Login */}
				{!toggleRegister && (
				<Box style={styles.contenido}>
					<VStack mb="10" mt="10">
						<Heading fontFamily="productSans" fontWeight="700" fontSize="2xl" color="white" HeadingAlign="center">Welcome to tradly</Heading>
					</VStack>

					<VStack mb="12">
						<Heading fontSize="md" color="white" fontWeight="normal" textAlign="center">Login to your account</Heading>
					</VStack>

					<FormControl>
						<Stack w="100%" space={4} maxW="350px" mx="auto">
							<VStack>
								<Input
									placeholder="Email/Mobile Number"
									color="white"
									variant="rounded"
									style={globalStyles.input}
									placeholderTextColor="white"
									size="xl"
									selectionColor={'white'}
									borderColor="white"
									borderStyle="solid"
									borderWidth="1"
									focusOutlineColor="white"
									keyboardType="email-address"
									value={email}
									onChangeText={value => setEmail(value)}
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
									value={password}
									onChangeText={value => setPassword(value)}
									selectionColor="red"
									selectionHandleColor={'white'}
								/>
							</VStack>
						</Stack>
					</FormControl>

					{ isDisabledLoginBtn ?
							(
								<VStack w="full" mt="6">
									<Spinner color="white" size="lg" />
								</VStack>
							) : (
								<Button bgColor="white" w="full" rounded="full" mt="6" onPress={() => handleSubmit()} _pressed={{backgroundColor: 'rgba(255,255,255,.3)'}}>
									<Text fontSize="xl" style={globalStyles.botonTexto}>Log in</Text>
								</Button>
							)
					}

					<Link mt="9" isUnderlined={false} _text={{
						fontSize: "lg",
						color: "white"
					}}>Forgot your password?</Link>

					<Box mt="12" display="flex" flexDirection="row">
						<Text color="white" fontSize="lg">
							Don’t have an account?{" "}
						</Text>
						<Pressable
							onPress={() => setToggleRegister(!toggleRegister)}
						>
							<Text color="white" fontSize="lg" fontWeight="bold">Sign up</Text>
						</Pressable>
					</Box>
				</Box>
				)}

				{/* SignUp */}
				{toggleRegister && (
				<Box style={styles.contenido}>
					<VStack my="10">
						<Heading fontSize="2xl" color="white" fontWeight="700" textAlign="center">Welcome to tradly</Heading>
					</VStack>

					<VStack mb="12">
						<Heading fontSize="md" color="white" fontWeight="normal" textAlign="center">Signup to your account</Heading>
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
									value={name}
									onChangeText={value => setName(value)}
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
									value={last}
									onChangeText={value => setLast(value)}
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
									value={emailRegister}
									onChangeText={value => setEmailRegister(value)}
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
									value={passwordRegister}
									onChangeText={value => setPasswordRegister(value)}
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
									secureTextEntry={showPassRe}
									InputRightElement={
										<Pressable onPress={() => setShowPassRe(!showPassRe)}>
											<Icon as={MaterialIcons} size="lg" mr="4" color="muted.200" name={showPassRe ? "visibility" : "visibility-off"} />
										</Pressable>
									}
									value={passwordRegisterRe}
									onChangeText={value => setPasswordRegisterRe(value)}
								/>
							</VStack>
						</Stack>
					</FormControl>

					{ isDisabledRegisterBtn ?
							(
								<VStack w="full" mt="9">
									<Spinner color="white" size="lg" />
								</VStack>
							) : (
								<Button style={globalStyles.boton} rounded="full" mt="9" onPress={() => handleRegister()}>
									<Text fontSize="xl" style={globalStyles.botonTexto}>Create</Text>
								</Button>
							)
					}

					<Box mt="9" display="flex" flexDirection="row" pb="20">
						<Text color="white" fontSize="lg">
							Have an account ?{" "}
						</Text>
						<Pressable
							onPress={() => setToggleRegister(!toggleRegister)}
						>
							<Text color="white" fontSize="lg" fontWeight="bold">Sign in</Text>
						</Pressable>
					</Box>
				</Box>
				)}
			</ScrollView>
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

export default Login