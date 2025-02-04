import React, {useState, useEffect, useRef, useContext} from 'react';
import { View, StyleSheet, ScrollView, Alert } from 'react-native';
import {Heading, Text, FormControl, Input, Box, Stack, VStack, Button, Pressable, Icon, Toast, Spinner} from "native-base";
import {gql, useLazyQuery, useMutation, useQuery} from '@apollo/client';
import MaterialIcons  from "react-native-vector-icons/MaterialIcons";
import { PrivateValueStore, useNavigation } from "@react-navigation/native";
import CountDown from 'react-native-countdown-component';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import { jwtDecode } from 'jwt-decode';
import UserContext from '../context/user/userContext';
import globalStyles from "../styles/globalStyles";

const CELL_COUNT = 6;

const GET_USER_VERIFICATION = gql`
	query getUserVerification($email: String) {
	  getUserVerification(email: $email) {
	    lastName
			firstName
			email
			token
			confirmado
			codeVerification
	  }
	}
`;

const UPDATE_USER_VALIDATION = gql`
	mutation updateUserValidation($email: String, $input: UserValidationInput){
		updateUserValidation(email: $email, input: $input){
			msg
			tokenLogin
		}
	}
`;

const SEND_CODE_VERIFICATION = gql`
	mutation sendCodeVerification($email: String){
	  sendCodeVerification(email: $email){
			msg
			tokenCode
			code
		}
	}
`;

const isTokenExpired = (token) => {
	console.log("isTokenExpired: ", token)
  if (!token) return true;
  try {
    const decodedToken = jwtDecode(token);
    const currentTime = Date.now() / 1000;
    return decodedToken.exp < currentTime;
  } catch (error) {
    console.error('Error decoding token:', error);
    return true;
  }
};

const AcountVerify = ({route}) => {
	const [verifyNumber, setVerifyNumber] = useState(false);
	const [runCount, setRunCount] = useState(false);
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [keyCount, setKeyCount] = useState(0);
	const [disabledBtnSendEmail, setDisabledBtnSendEmail] = useState(false)
	const [codeVerification, setCodeVerification] = useState({});
	const verificationEmail = useRef(null);

	const [timeLeft, setTimeLeft] = useState(60); // Tiempo inicial
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning && timeLeft > 0) {
    	setRunCount(true);
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsRunning(false); // Detener el contador cuando llega a 0
      setRunCount(false);
    }
    return () => clearInterval(timer); // Limpiar el intervalo al desmontar
  }, [isRunning, timeLeft]);

	const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const {email: emailParams} = route.params;

  //context
  const {setUserLogued} = useContext(UserContext);

	//Navigation
	const navigation = useNavigation();

	const mockCode = '123456'; // Código de prueba para verificar.

	//graphql query
  /*const {data, loading, error} = useQuery(GET_USER_VERIFICATION, {
		variables: {
			email
		}
	})*/

	const [getget, { loading, error, data: myData }] = useLazyQuery(GET_USER_VERIFICATION);

	//const [getDog, { loading, error, data }] = useLazyQuery(GET_DOG_PHOTO);

	//graphql mutation
	const [updateUserValidation] = useMutation(UPDATE_USER_VALIDATION);
	const [sendCodeVerification] = useMutation(SEND_CODE_VERIFICATION);

	const validationUser = async (email) => {
		const {data} = await updateUserValidation({
				variables: {
  				email,
  				input: {
    				codeVerification: null,
    				token: null,
    				confirmado: true
  				}
				}
		})

		return data;
	}

  // Validar el código ingresado
  const handleVerification = async () => {
  	/*const {data} = await getget({ variables: { email: emailParams } })
  	console.log("handleVerification data: ", data)
  	console.log("myData: ", myData)
  	const {email, codeVerification} = data.getUserVerification;*/

  	if (value.length === CELL_COUNT) {
      if (value === codeVerification.code) {
        Alert.alert(
        	'¡Éxito!',
        	'El código ingresado es correcto.',
        	[
        		{
			      	text: 'Ok',
			      	onPress: async () => {
			      		setRunCount(false);
			      		try{
				      		const expiredCodeToken = isTokenExpired(codeVerification.tokenCode);
				      		if(expiredCodeToken){
			      				setVerifyNumber(true)
			      				setEmail(emailParams)
			      				console.log("Ya expiro el codigo")
			      			}else{
					      		if(codeVerification.msg){
											const getVerification = await validationUser(email)
											console.log(getVerification)
											console.log("getVerification.updateUserValidation ", getVerification.updateUserValidation);
											const {msg, tokenLogin} = getVerification.updateUserValidation
											if(msg){
					      				const decode = jwtDecode(tokenLogin);
						      			setUserLogued(decode)
						      			console.log("Desde el boton Ok: ", decode)
						      			navigation.navigate("HomeDashboard")
											}


					      		}
			      			}
			      			/*const getVerification = await validationUser(email)

			      			console.log(getVerification)

				      		console.log("getVerification.updateUserValidation ", getVerification.updateUserValidation);

				      		const {msg, tokenLogin, tokenCode} = getVerification.updateUserValidation

				      		console.log("tokenCode: ", tokenCode )
				      		console.log("tokenLogin: ", tokenLogin )

				      		const decodeTokenCode = jwtDecode(tokenCode);
				      		console.log("decodeTokenCode: ", isTokenExpired(decodeTokenCode))

			      			if(expiredCodeToken){
			      				setVerifyNumber(true)
			      				setEmail(emailParams)
			      				console.log("Ya expiro el codigo")
			      				handleSendEmail()
			      			}else{
					      		if(msg){
					      			const decode = jwtDecode(tokenLogin);


					      			setUserLogued(decode)
					      			console.log("Desde el boton Ok: ", decode)
					      			navigation.navigate("HomeDashboard")
					      		}
			      			}*/

			      		} catch(error) {
			      		  console.log("Error en la verificacion del codigo: ", error)
			      		}
			      	}
			      }
        	]
        );

        setValue("")
      } else {
      	console.log(value, " ", codeVerification);
        Alert.alert('Error', 'El código ingresado es incorrecto.');
    		setValue("")
      }
    }
  }

  useEffect( () => {
  	if(verificationEmail.current){
	  	Alert.alert(
		  	'Validando correo',
		  	`¿Es este tu correo: ${emailParams}?`,
		  	[
		      {
		        text: 'No, no es mi correo',
		        style: 'cancel',
		      },
		      {
		      	text: 'Si, es correcto',
		      	onPress: () => {
		      		console.log('OK Pressed')
		      		setEmail(emailParams)
		      		setRunCount(true);
		      	}
		      },
		    ]
		  )
  	}
  }, [] );

  const handleSendEmail = async () => {
  	//setVerifyNumber(!verifyNumber)
  	setDisabledBtnSendEmail(true)
  	try{
	  	if(email !== ""){
		  	const {data} = await sendCodeVerification({
		  		variables: { email }
		  	});


		  	if(data.sendCodeVerification){
		  		setVerifyNumber(true)
		  		console.log("handleSendEmail: ", data)
					setCodeVerification(data.sendCodeVerification)
					setTimeLeft(60); // Reiniciar el tiempo a 60 segundos
    			setIsRunning(true);
		  	}
	  	}
  	} catch(error) {
  		setMessage(error.message);
  	  console.log(error)
  	} finally {
  		setDisabledBtnSendEmail(false)
  	}
  }

  //Mostrar mensaje Toast
	const handleMessage = () => {
		Toast.show({
			description: message
		});
		setMessage(null);
	}

	return (
		<View style={[globalStyles.contenedor, globalStyles.bg33907C]}>
			<ScrollView style={{flex: 1}} contentContainerStyle={{justifyContent: "center", alignItems: "center", minHeight: "100%", marginBottom: 8}}>
	      <Box w="90%" mx="auto" display="flex" flexDirection="row" justifyContent="flex-start">
					<Pressable
						p="1"
						rounded="full"
						_pressed={{backgroundColor: 'emerald.700'}}
						onPress={() => null}
					>
						<Icon as={MaterialIcons} name="arrow-back" size="xl" color="white" />
					</Pressable>
				</Box>
				<Box style={styles.contenido} mt={8}>
					{
						verifyNumber ? (
							<>
								<VStack mb="8">
									<Heading fontFamily="productSans" fontWeight="700" fontSize="2xl" color="white" textAlign="center">Phone Verification</Heading>
								</VStack>

								<VStack mb="4">
									<Heading fontSize="md" color="white" fontWeight="normal" textAlign="center">Enter your OTP code here</Heading>
								</VStack>

								<CodeField
					        ref={ref}
					        {...props}
					        value={value}
					        onChangeText={(value) => setValue(value)}
					        cellCount={CELL_COUNT}
					        rootStyle={styles.codeFieldRoot}
					        keyboardType="number-pad"
					        textContentType="oneTimeCode"
					        renderCell={({ index, symbol, isFocused }) => (
					          <Text
					            key={index}
					            style={[styles.cell, isFocused && styles.focusCell]}
					            onLayout={getCellOnLayoutHandler(index)}>
					            {symbol || (isFocused ? <Cursor /> : null)}
					          </Text>
					        )}
					      />
					      <Box mt={"4"}>
					      	{/* Aqui el contador */}
									
					      	<Text mt="9" fontFamily="productSans" fontSize="lg" color="white" fontWeight="normal" textAlign="center">{timeLeft} Segundos</Text>
					      </Box>

								<Text mt="9" fontFamily="productSans" fontSize="md" color="white" fontWeight="normal" textAlign="center">Didn’t you received any code?</Text>
								<Text mt="1" fontFamily="productSans" fontSize="md" color="white" fontWeight="normal" textAlign="center" onPress={runCount==false ? () => {
										handleSendEmail()
			      				setRunCount(true);
			      				setTimeLeft(60); // Reiniciar el tiempo a 60 segundos
    								setIsRunning(true); // Iniciar el contador
			      			} : null}>Resent new code</Text>

								<Button style={globalStyles.boton} rounded="full" mt="6" onPress={() => handleVerification()} disabled={!runCount} _disabled={{opacity: "80", backgroundColor: "red.500"}}>
									<Text fontSize="lg" style={globalStyles.botonTexto}>Verify</Text>
								</Button>
							</>
						) : (
							<>
								<VStack mb="8">
									<Heading fontFamily="productSans" fontWeight="700" fontSize="2xl" color="white" HeadingAlign="center">Verify your email address</Heading>
								</VStack>

								<VStack mb="12">
									<Heading fontSize="md" color="white" fontWeight="normal" textAlign="center">We have sent you a message in your email address with a code to enter number</Heading>
								</VStack>

								<VStack w="100%" maxW="350px" mx="auto" ref={verificationEmail}>
									<Input
										placeholder="Place Insert your Phone"
										color="white"
										variant="rounded"
										style={globalStyles.input}
										placeholderTextColor="#DDD"
										size="xl"
										borderColor="white"
										borderStyle="solid"
										borderWidth="1"
										focusOutlineColor="white"
										keyboardType="email-address"
										value={email}
										onChangeText={setEmail}
										InputLeftElement={
											<Pressable display="flex" flexDirection="row" alignItems="center" justifyContent="center" pl="3">
												<Icon as={MaterialIcons} size="xl" color="white" name="alternate-email" />
											</Pressable>
										}
									/>
								</VStack>
								<Text mt="9" fontSize="lg" color="white">Or login with Social network</Text>
								{ disabledBtnSendEmail ?
										(
											<VStack w="full" mt="9">
												<Spinner color="white" size="lg" />
											</VStack>
										) : (
											<Button style={globalStyles.boton} rounded="full" mt="6" onPress={() => handleSendEmail()}>
												<Text fontSize="lg" style={globalStyles.botonTexto}>Next</Text>
											</Button>
										)
								}
								
							</>
						)
					}
				</Box>
				{message && handleMessage()}
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
	},
	root: {flex: 1, padding: 10},
  title: {textAlign: 'center', fontSize: 30},
  codeFieldRoot: {marginTop: 6, gap: 5},
  cell: {
    width: 40,
    height: 40,
    lineHeight: 38,
    fontSize: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#F2F2F2',
    textAlign: 'center',
    color: "#FFF",
    fontFamily: "productSans"
  },
  focusCell: {
    borderColor: '#FFF',
  },
})

export default AcountVerify