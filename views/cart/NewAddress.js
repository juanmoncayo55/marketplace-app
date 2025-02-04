import React from 'react';
import { StyleSheet, ImageBackground, ScrollView } from 'react-native';
import { Icon, Box, View, Text, Stack,VStack,HStack, Pressable, Image, Heading, Button, FormControl, Input } from "native-base";
import Ionicons  from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const NewAddress = () => {
	return (
		<Stack style={{backgroundColor: "#F6F9FF", flex: 1}}>
			<ScrollView>
				<VStack bgColor="white" mb="3" shadow="9">
					<Box style={styles.contenido} py="2">
						<Pressable _pressed={{
							backgroundColor: 'rgba(255,255,255,.1)'
						}} flexDirection="row" justifyContent="center" alignItems="center" py="2" onPress={() => navigation.navigate("NewAddress")}>
							<Icon as={Ionicons} name="locate-sharp" size="md" color="#4EA0FF" />
							<Text color="#4EA0FF" fontFamily="SFProText" fontSize="lg" fontWeight="semibold" ml="2">Use current location</Text>
						</Pressable>
					</Box>
				</VStack>

				<VStack>
					<Box style={styles.contenido}>
						<FormControl isRequired>
		          <Stack mx="3" mb="4">
		            <FormControl.Label color="#4F4F4F" fontSize="md" mb="0">Name</FormControl.Label>
		            <Input type="text" variant="underlined" placeholder="Name" color="#000"placeholderTextColor="#4F4F4F" size="lg" focusOutlineColor="#4F4F4F"/>
		          </Stack>
		          <Stack mx="3" mb="4">
		            <FormControl.Label color="#4F4F4F" fontSize="md" mb="0">Phone</FormControl.Label>
		            <Input keyboardType="number-pad" variant="underlined" placeholder="Phone" color="#000"placeholderTextColor="#4F4F4F" size="lg" focusOutlineColor="#4F4F4F"/>
		          </Stack>
		          <Stack mx="3" mb="4">
		            <FormControl.Label color="#4F4F4F" fontSize="md" mb="0">Street Address</FormControl.Label>
		            <Input variant="underlined" placeholder="Street Address" color="#000"placeholderTextColor="#4F4F4F" size="lg" focusOutlineColor="#4F4F4F"/>
		          </Stack>
		          <Stack mx="3" mb="4">
		            <FormControl.Label color="#4F4F4F" fontSize="md" mb="0">City</FormControl.Label>
		            <Input variant="underlined" placeholder="City" color="#000"placeholderTextColor="#4F4F4F" size="lg" focusOutlineColor="#4F4F4F"/>
		          </Stack>
		          <Stack mx="3" mb="4">
		            <FormControl.Label color="#4F4F4F" fontSize="md" mb="0">State</FormControl.Label>
		            <Input variant="underlined" placeholder="State" color="#000"placeholderTextColor="#4F4F4F" size="lg" focusOutlineColor="#4F4F4F"/>
		          </Stack>
		          <Stack mx="3" mb="4">
		            <FormControl.Label color="#4F4F4F" fontSize="md" mb="0">Zipcode</FormControl.Label>
		            <Input keyboardType="number-pad" variant="underlined" placeholder="Zipcode" color="#000"placeholderTextColor="#4F4F4F" size="lg" focusOutlineColor="#4F4F4F"/>
		          </Stack>
		        </FormControl>
					</Box>
				</VStack>

				<VStack bgColor="white"  w="100%" py="3">
					<Button bgColor="#33907C" rounded="full" w="90%" mx="auto" py="3">
						<Text fontSize={22} color="#FFF" fontWeight="semibold">Save</Text>
					</Button>
				</VStack>
			</ScrollView>
		</Stack>
	)
}

const styles = StyleSheet.create({
	contenido: {
    width: "90%",
    marginHorizontal: "5%",
    paddingVertical: 10
  }
});

export default NewAddress