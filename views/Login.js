import React, {useState} from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import {Heading, Text, FormControl, Input, Box, Stack, VStack, HStack, Button, Pressable, Icon, Link} from "native-base";
import MaterialIcons  from "react-native-vector-icons/MaterialIcons";
import globalStyles from "../styles/globalStyles";

const Login = () => {
	const [showPass, setShowPass] = useState(true)

	return (
		<ScrollView contentContainerStyle={{height: "100%", flex: 1}}>
		<View style={[globalStyles.contenedor, globalStyles.bg33907C]}>
			<Box style={styles.contenido}>
				<VStack mb="16">
					<Heading size="2xl" color="white" fontWeight="medium" textAlign="center">Welcome to tradly</Heading>
				</VStack>

				<VStack mb="12">
					<Heading size="md" color="white" fontWeight="normal" textAlign="center">Login to your account</Heading>
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
								borderColor="white"
								borderStyle="solid"
								borderWidth="1"
								focusOutlineColor="white"
								keyboardType="email-address"
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
					</Stack>
				</FormControl>

				<Button style={globalStyles.boton} rounded="full" mt="9">
					<Text fontSize="xl" style={globalStyles.botonTexto}>Log in</Text>
				</Button>

				<Link mt="9" isUnderlined={false} _text={{
					fontSize: "lg",
					color: "white"
				}}>Forgot your password?</Link>

				<Box mt="12" display="flex" flexDirection="row">
					<Text color="white" fontSize="lg">
						Don’t have an account?{" "}
					</Text>
					<Pressable>
						<Text color="white" fontSize="lg" fontWeight="bold">Sign up</Text>
					</Pressable>
				</Box>
			</Box>
		</View>
			</ScrollView>
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