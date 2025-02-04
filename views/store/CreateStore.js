import React, {useState, useContext, useEffect, useRef} from 'react'
import { Image, StyleSheet, Dimensions, BackHandler, TouchableWithoutFeedback } from 'react-native'
import { Text, View, Box, Flex, Button, FormControl, Stack, Toast, ScrollView, useToast, Spinner } from "native-base";
import { useNavigation } from '@react-navigation/native';
import {gql, useMutation, useQuery} from '@apollo/client';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {RNChipView} from 'react-native-chip-view';
import UserContext from "../../context/user/userContext.js";
import InputFloat from '../../components/InputFloat.js';
import HeaderBottomTab from '../../components/HeaderBottomTab.js';

const { width, height } = Dimensions.get('window'); //Dimensiones del celular

const CREATE_STORE = gql`
	mutation createStore($input: StoreInput){
	  createStore(input: $input){
	    name
			urlweb
			description
			type
			address
			city
			state
			country
			courierName
			tagline{
				name
			}
			user
	  }
	}
`;

const GET_STORE = gql`
	query {
	  getStore{
	    name
	    urlweb
	    description
	    type
	    address
	    city
	    state
	    country
	    courierName
	    tagline{
	      name
	    }
	    user
	  }
	}
`;

const CreateStore = () => {

	const dropdownRef = useRef(null); 
	//State del formulario
	const [name, setName] = useState("Albeiro Tienda");
	const [webAdress, setWebAdress] = useState("www.latiendadealbeiro.com");
	const [storeDescription, setStoreDescription] = useState("Tienda de barrio para toda la familia");
	const [storeType, setStoreType] = useState("Comida, dulces");
	const [address, setAddress] = useState("Cll 36 - 56");
	const [city, setCity] = useState("Popayan");
	const [state, setState] = useState("Cauca");
	const [country, setCountry] = useState("Colombia");
	const [courierName, setCourierName] = useState("asdasda");
	const [tagline, setTagline] = useState("aaaa");

	const [message, setMessage] = useState("");
	const [tagsCategories, setTagsCategories] = useState([]);

	const [showDropdown, setShowDropdown] = useState(false);
	const [dataExample, setDataExample] = useState([]);
	const [token, setToken] = useState("");
	const [sendStore, setSendStore] = useState(false);

	AsyncStorage.getItem("tokenLogin")
		.then(token => {
			setToken(token)
		})
		.catch(err => {
			console.log(err)
		})

	//context
	const {setHideMenuDash} = useContext(UserContext);

	//mutation
	const [createStore] = useMutation(CREATE_STORE, {
		update(cache, {data: {createStore}}){
			const { getStore } = cache.readQuery({ query: GET_STORE });
			//console.log("createStore:. ", createStore)
			cache.writeQuery({
				query: GET_STORE,
				data: { getStore: createStore}
			})
		}
	})

	useEffect(() => {
		setHideMenuDash(true);

		BackHandler.addEventListener("hardwareBackPress", handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener("hardwareBackPress", handleBackButtonClick);
      setHideMenuDash(false);
    };
	}, []);


	useEffect(() => {
    if (showDropdown) {
      // Ajustar la posición del dropdown (puedes personalizar esto)
      dropdownRef.current.measure((fx, fy, width, height, px, py) => {
        // ... (lógica para posicionar el dropdown correctamente)
      });
    }
  }, [showDropdown]);

  //navigation
	const navigation = useNavigation();	
	//Toast
	const toast = useToast();

	const handleBackButtonClick = () => {
		setHideMenuDash(false);
	}

	const handleSubmit = async () => {
		setSendStore(true);
		if(
			name == "" ||
			webAdress == "" ||
			storeDescription == "" ||
			storeType == "" ||
			address == "" ||
			city == "" ||
			state == "" ||
			country == "" ||
			courierName == ""
		){
			//setMessage("Todos los campos son Obligatorios.");
			toast.show({
	      description: "Todos los campos son Obligatorios."
	    })
			return;
		}
		
		const tags  = tagsCategories.map(tag => ({name: tag}) );
		console.log(tags)

		try{
		  const {data} = await createStore({
		  	variables: {
					input: {
						name:name,
						urlweb:webAdress,
						description:storeDescription,
						type:storeType,
						address:address,
						city:city,
						state:state,
						country:country,
						courierName:courierName,
						tagline: tags
					}
		  	},
		  	context: {
		  		Headers: {
		  			"authorization": token
		  		}
		  	}
			});
			console.log(data);

			//si todo va bien nos devolvemos a el inicio
			navigation.navigate("StoreDashboard");
			setHideMenuDash(false);
		} catch(error) {
		  console.log("Error al crear el store: ", error);
		}	finally {
			setSendStore(false);
		}

		console.log(
			"name: ", name,
			"webAdress: ", webAdress,
			"storeDescription: ", storeDescription,
			"storeType: ", storeType,
			"address: ", address,
			"city: ", city,
			"state: ", state,
			"country: ", country,
			"courierName: ", courierName,
			"tagline: ", tags, 
		)
	}

	const assignTagInArr = (item) => {
		console.log("item: ", item)
		setTagsCategories([{name: item}, ...tagsCategories]);
		//setShowDropdown(false)
	}

	const removeTag = (item) => {
		const result = tagsCategories.filter(tag => tag !== item);
		setTagsCategories(result)
	}

	//Mostrar mensaje Toast
	const handleMessage = () => {
		Toast.show({
			description: message
		});
		setMessage(null);
	}

	return (
		<>
		<HeaderBottomTab
      title="My Store"
      iconSearch={false}
      heartCart={true}
      iconLeft={false}
      closeRight={true}
    />
		<ScrollView style={{height: "100%", backgroundColor: '#F6F9FF'}}>
			<Flex flex="1" direciton="column" alignItems="center" justifyContent="flex-start" gap="3" pt="5">
				<Image
					source={require("../../images/store-image.png")}
					style={{resizeMode: "contain"}}
					alt="Image to Store welcome"
				/>
				<Text color="#000000" fontFamily="SFProText" fontWeight="normal" fontSize="md" textAlign="center" mt="4">This information is used to set up{"\n"}your shop</Text>

				<Box flex="1" bgColor="white" w="full">
					<View style={styles.contenido}>
						<FormControl isRequired>
							<InputFloat
								label="Store Name"
								value={name}
								changeValue={setName}
							/>
							<InputFloat
								label="Store Web Address"
								value={webAdress}
								changeValue={setWebAdress}
							/>
							<InputFloat
								label="Store Description"
								value={storeDescription}
								changeValue={setStoreDescription}
							/>
							<InputFloat
								label="Store Type"
								value={storeType}
								changeValue={setStoreType}
							/>
							<InputFloat
								label="Address"
								value={address}
								changeValue={setAddress}
							/>
							<InputFloat
								label="City"
								value={city}
								changeValue={setCity}
							/>
							<InputFloat
								label="State"
								value={state}
								changeValue={setState}
							/>
							<InputFloat
								label="Country"
								value={country}
								changeValue={setCountry}
							/>
							<InputFloat
								label="Courier Name"
								value={courierName}
								changeValue={setCourierName}
							/>
						</FormControl>
						<FormControl>
							{
								tagsCategories.length > 0 ?

								<ScrollView
									horizontal
									contentContainerStyle={{
										flexDirection: "row",
										justifyContent: "flex-start",
										marginTop: 10,
										columnGap: 8
									}}
									showsHorizontalScrollIndicator={false}
								>
									{
										tagsCategories.map((item, key) => (
											<RNChipView
												key={key}
												title={item}
												avatar={false}
												titleStyle={{fontWeight: "normal", fontSize: 15}}
												cancelableStyle={{backgroundColor: "transparent"}}
												cancelable={true}
												height={30}
												onPress={() => removeTag(item)}
											/>
										))
									}
								</ScrollView>
								: null
							}
							<Stack position={"relative"}>
								<InputFloat
									label="Tagline"
									value={tagline}
									changeValue={setTagline}
									ChipInput={true}
									tagsCategories={tagsCategories}
									setTagsCategories={setTagsCategories}
									dataFilter={[]}
									setShowDropdown={setShowDropdown}
									setDataExample={setDataExample}
								/>
							</Stack>
							<Stack bgColor="white"  w="100%" py="3" mt="8">
								<Button bgColor="#33907C" rounded="full" w="90%" mx="auto" py="2" onPress={sendStore ? null : () => handleSubmit()}>
									{
										sendStore ?
											<Spinner color={"white"} size={"lg"} />
										: <Text fontSize={"lg"} color="#FFF" fontFamily={"Monserrat"} fontWeight="medium">Create</Text>
									}
								</Button>
							</Stack>					
						</FormControl>
					</View>
				</Box>
			</Flex>

			{message && handleMessage()}
		</ScrollView>
		</>
	)
}
/*
	Falta agregar el react-native-chip-view a esta vista, ya esta instalado el modulo
	npm install react-native-chip-view --save
*/
const styles = StyleSheet.create({
	contenido: {
    width: "90%",
    marginHorizontal: "5%",
    paddingVertical: 10
  }
})

export default CreateStore