import React, {useState, useEffect, useContext} from 'react'
import { StyleSheet, Dimensions, ScrollView, Animated } from 'react-native'
import { Text, View, Box, Flex, Button, VStack, HStack, Stack, Center, Pressable, Input, Icon, AspectRatio, Image, Heading, AlertDialog, PresenceTransition, Skeleton, useToast } from "native-base";
import {useNavigation} from "@react-navigation/native";
import {useQuery, useMutation} from "@apollo/client"
import AsyncStorage from "@react-native-async-storage/async-storage";
import Ionicons  from "react-native-vector-icons/Ionicons";
import globalStyles from "../styles/globalStyles.js";
import HeaderBottomTab from '../components/HeaderBottomTab.js';
import UserContext from '../context/user/userContext.js';
import AddProduct from './store/AddProduct.js';
import { 
	GET_STORE,
	GET_PRODUCTS
} from '../gql/queries.js';
import { 
	REMOVE_STORE,
	REMOVE_PRODUCT
} from '../gql/mutation.js';

const { width, height } = Dimensions.get('window'); //Dimensiones del celular

const StoreDashboard = () => {

	//Primero se delcara los useRef y useState
	const cancelRef = React.useRef(null);
  const [showScreenAddProduct, setShowScreenAddProduct] = useState(false);
  const [alertRemoveStore, setAlertRemoveStore] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [animacionView] = useState(new Animated.Value(-500));
  
  //Segundo: se delcara useContext y useNavigation
  const {setHideMenuDash, user} = useContext(UserContext);
  const navigation = useNavigation();
  const toast = useToast();

  //Tercero: se delcara useQuery y useMutation
  // Queries
  const { loading: storeLoading, data: storeData, error: storeError } = useQuery(GET_STORE, {
    context: {
      headers: {
        "authorization": user.token
      }
    }
  });


  const { loading: productsLoading, data: productsData, error: productsError } = useQuery(GET_PRODUCTS, {
    skip: !storeData?.getStore,
    variables: {
      store: storeData?.getStore?.id
    }
  });


  // Mutation
  const [removeStore] = useMutation(REMOVE_STORE, {
    update(cache) {
      cache.writeQuery({
        query: GET_STORE,
        context: {
          headers: {
            "authorization": user.token
          }
        },
        data: {
          getStore: null
        }
      });
    }
  });

  const [removeProduct] = useMutation(REMOVE_PRODUCT,{
  	update(cache, { data: {removeProduct} }, context){
			const {getProducts} = cache.readQuery({ 
				query: GET_PRODUCTS,
				skip: !storeData?.getStore,
				variables: {
					store: storeData?.getStore?.id
				}
			});
			cache.writeQuery({
				query: GET_PRODUCTS,
				skip: !storeData?.getStore,
				variables: {
					store: storeData?.getStore?.id
				},
				data: {getProducts: getProducts.filter(product => product.id !== context.variables.id)}
			});

			//console.log("getProducts después al eliminar:", cache.readQuery({ query: GET_PRODUCTS, variables: { store: storeData?.getStore?.id } })); // <-- Debug
		}
  });

  //Cuarto: se delcara los metodos
  const handleRemoveStore = async () => {
    await removeStore();
    onCloseAlertRemoveState();
  };

  const onCloseAlertRemoveState = () => setAlertRemoveStore(false);
  const handleShowScreenAddProduct = (_option = null, product = null) => {
  	if(_option){
  		console.log("Entro por forma de editar");
  		setShowScreenAddProduct(true);
  		setCurrentProduct(product);
  		//console.log(product)
  	}else{
  		setShowScreenAddProduct(true)
  		setCurrentProduct(null)
  	}
  }
  const handleHideScreenAddPorduct = () => setShowScreenAddProduct(false);

  const handleRemoveProduct = async (id) => {
  	try{
	  	const data = await removeProduct({
	  		variables: {
	  			id: id
	  		}
	  	});

	  	toast.show({
	  		"description": "Producto eliminado correctamente."
	  	});

	  	console.log("DAta elminar producto: ", data);
  	} catch(error) {
  	  console.log("Error al eliminar el producto: ", error);
  	}

  }

  //Quinto: se delcaran loading o errores de los useQueries
  /*if (storeLoading || productsLoading) return (
  	<VStack bgColor="white" pt="5" shadow="8" w="full">
			<VStack>
				<Box flexDirection="row" justifyContent="center" alignItems="center">
					<Center>
						<Skeleton borderWidth={1} borderColor="coolGray.200" endColor="warmGray.50" size="55" rounded="full"/>
        	</Center>
        </Box>
			</VStack>
			<VStack my="3" alignItems={"center"}>
				<Skeleton.Text lines={1} alignItems="center" px="8" w="1/2" />
			</VStack>
			<VStack mb="6">
				<Flex direction="row" gap="7" justifyContent="center">
					<Skeleton w="1/3" h="8" rounded="20" />
					<Skeleton w="1/3" h="8" rounded="20" />
				</Flex>
			</VStack>
			<Skeleton alignItems="center" w="full" />
		</VStack>
  );*/
  if (storeLoading || productsLoading) return (<View><Text>Cargando...</Text></View>)
  if (storeError || productsError) {
  	console.log("storeError: ", storeError, " productsError: ", productsError)
  	return (<View><Text>Error al cargar datos</Text></View>);
  }

  const RenderView = () => {
  	if(!storeData.getStore){
  		return(
  			<Flex flex="1" direciton="column" alignItems="center" justifyContent="flex-start" gap="10" pt="10" bgColor="#F6F9FF">
					<Image
						source={require("../images/store-image.png")}
						style={{resizeMode: "contain"}}
						alt="Image"
					/>
					<Text color="#000000" fontFamily="SFProText" fontWeight="semibold" fontSize="lg" textAlign="center">You Dont Have a Store</Text>
					<Button
		        bgColor="greenPrimary"
		        variant="outline"
		        rounded="full"
		        px="16"
		        py="2"
		        onPress={() => navigation.navigate("CreateStore")}
		      >
		        <Text color="#FFF" fontFamily="SFProText" fontWeight="semibold" fontSize="lg">Create Store</Text>
		      </Button>
				</Flex>
  		)
  	}else{
  		return(
	  		<Stack bgColor="#F6F9FF" h="full" flex={1}>
					<VStack bgColor="white" pt="5" shadow="8" w="full">
						<VStack>
							<Box flexDirection="row" justifyContent="center" alignItems="center">
		  					<Center
			        		style={styles.userFirstLetter}
			        		rounded="full"
			        	>
			        		<Text color="white" fontSize="4xl" fontWeight="semibold" style={{lineHeight: 40}}>{storeData.getStore.name.slice(0,1)}</Text>
			        	</Center>
			        </Box>
						</VStack>
						<VStack my="3">
							<Text color="clText" fontFamily="Monserrat" fontWeight="bold" fontSize="2xl" textAlign="center">{storeData.getStore.name}</Text>
						</VStack>
						<VStack mb="6">
							<Flex direction="row" gap="7" justifyContent="center">
								<Button
									borderColor="greenPrimary"
									borderWidth="1"
									variant="outline"
									rounded="full"
									px="5"
									py="1"
									onPress={() => navigation.navigate("CreateStore")}
								>
									<Text color="greenPrimary" fontFamily="SFProText" fontWeight="semibold" fontSize="sm">Edit Store</Text>
								</Button>
								<Button
									bgColor="greenPrimary"
									variant="outline"
									rounded="full"
									px="5"
									py="1"
									onPress={() => navigation.navigate("CreateStore")}
								>
									<Text color="#FFF" fontFamily="SFProText" fontWeight="semibold" fontSize="sm">View Store</Text>
								</Button>
							</Flex>
						</VStack>
						<Pressable
							borderTopColor="rgba(0,0,0,.1)"
							borderTopWidth="1"
							py="2"
							onPress={() => setAlertRemoveStore(true)}
						>
							{({isPressed}) => {
								return <Text color={isPressed ? "greenPrimary" :"clText"} opacity={isPressed ? "1" : ".5"} textAlign="center" fontSize="lg" fontFamily="Monserrat" fontWeight="semibold">Remove Store</Text>
							}}
						</Pressable>
					</VStack>
					{
						productsData.getProducts.length > 0 ? (
							<View style={styles.contenido}>
								<VStack mt="4" mb="2">
								  <Input
								    placeholder="Search Product"
								    color="#4F4F4F"
								    variant="rounded"
								    style={globalStyles.input}
								    placeholderTextColor="rgba(79,79,79,.6)"
								    borderWidth="0"
								    size="lg"
								    bgColor="white"
								    InputLeftElement={
								      <Icon as={Ionicons} size="lg" ml="3" color="#13B58C" name="search" />
								    }
								  />
								</VStack>

								<Heading color="#4F4F4F" fontSize={25} my="3">Products</Heading>

								<VStack direction="row" flexWrap="wrap" justifyContent="space-between" space="2">
									{productsData.getProducts.map((item, index) => (
										<Box key={index} maxW={"47.5%"} rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" mb="2">
										  <Box position="relative">
										    <AspectRatio w="100%" ratio={16 / 12}>
										      <Image source={{uri: item.imageGallery[0].url}} alt="image" height={300} width={300} />
										    </AspectRatio>
										    <View flexDirection={"row"} alignItems={"center"} justifyContent={"space-between"} w="full" zIndex={40} position="absolute" top="0" bottom="0" px="6">
											    <Pressable rounded="full" p="2" bgColor="rgba(255,255,255,.4)" _pressed={{opacity:50}} onPress={() => handleShowScreenAddProduct("edit", item)}>
										    		<Icon as={Ionicons} size="lg" color="#FFFFFF" name="pencil"/>
											    </Pressable>
											    <Pressable rounded="full" p="2" bgColor="rgba(255,255,255,.4)" _pressed={{opacity:50}} onPress={() => handleRemoveProduct(item.id)}>
										    		<Icon as={Ionicons} size="lg" color="#FFFFFF" name="trash"/>
											    </Pressable>
										    </View>
									     	<View position="absolute" w="full" h="full" bgColor="rgba(0,0,0,.4)" />
										  </Box>
										  <Stack p="2" space={3} bgColor="white">
										    <Stack space={2}>
										      <Heading fontSize={17} color="#4A4A4A" fontWeight="normal">
										        {item.title}
										      </Heading>
										    </Stack>
										    <HStack alignItems="center" space={4} justifyContent="space-between">
										      <HStack alignItems="center" justifyItems={"center"}>
										      	<Box
										      		style={styles.userDefaultAvatar}
										      		rounded="full"
										      	>
										      		<Text color="white" fontSize="xl" style={{lineHeight: 25}}>T</Text>
										      	</Box>
										        <Text color="gray.500" fontWeight="600" fontSize={15} ml="1">
										          Tradly
										        </Text>
										      </HStack>
										      <HStack>
										      	<Text color="#33907C" fontSize={17} fontWeight="bold">${String(item.precie).slice(0,2)}</Text>
										      </HStack>
										    </HStack>
										  </Stack>
										</Box>
									))}
									<Pressable maxW="47%" w="100%" rounded="lg" overflow="hidden" borderColor="coolGray.300" borderWidth="2" mb="2" py="10" borderStyle="dashed" justifyContent="center" alignItems="center" onPress={handleShowScreenAddProduct}>
										<Icon as={Ionicons} name="add-outline" size="5xl" color="coolGray.300" />
										<Text color="coolGray.400" fontSize="xl">Add Product</Text>
									</Pressable>
								</VStack>
							</View>
						) : (
							<VStack mt="16" flexDirection="column" alignItems="center">
								<Text color="black" fontFamily="Monserrat" fontWeight="medium" fontSize="lg" textAlign="center">You Dont Have a Store</Text>
								<Button
									borderColor="greenPrimary"
									borderWidth="1"
									variant="outline"
									rounded="full"
									px="12"
									py="1"
									mt="8"
									onPress={handleShowScreenAddProduct}
								>
					  			<Text color="greenPrimary" fontFamily="Monserrat" fontWeight="medium" fontSize="lg">Add Product</Text>
					  		</Button>
							</VStack>
						)
					}
				</Stack>
  		)
  	}
  }

	return (
		<View flex={1} bgColor="#F6F9FF">
			<HeaderBottomTab title="My Store" />
			<ScrollView>
				{/*storeData.getStore !== null ? existe : noExiste*/}
				{RenderView()}
				<AlertDialog leastDestructiveRef={cancelRef} isOpen={alertRemoveStore} onClose={onCloseAlertRemoveState}>
	        <AlertDialog.Content>
	          <AlertDialog.CloseButton />
	          <AlertDialog.Header>Remove Store</AlertDialog.Header>
	          <AlertDialog.Body>
	            ¿Are you secure remove this store, if you are secure remove these store, you will not be able to restore this store again?
	          </AlertDialog.Body>
	          <AlertDialog.Footer>
	            <Button.Group space={2}>
	              <Button variant="unstyled" colorScheme="coolGray" onPress={onCloseAlertRemoveState} ref={cancelRef}>
	                Cancel
	              </Button>
	              <Button colorScheme="danger" onPress={handleRemoveStore}>
	                Delete
	              </Button>
	            </Button.Group>
	          </AlertDialog.Footer>
	        </AlertDialog.Content>
	      </AlertDialog>
			</ScrollView>
				<PresenceTransition
					visible={showScreenAddProduct}
					flex={1}
					w={"full"}
					h={"full"}
					bgColor={"white"}
					position={"absolute"}
					zIndex={10}
					bottom={0}
					top={0}
					initial={{
			      opacity: 0
			    }} animate={{
			      opacity: 1,
			      transition: {
			        duration: 100
			      }
			    }}
				>
				<AddProduct
					showScreenAddProduct={showScreenAddProduct}
					setHideMenuDash={setHideMenuDash}
					handleHideScreenAddPorduct={handleHideScreenAddPorduct}
					store={storeData.getStore}
					currentProduct={currentProduct}
				/>
				</PresenceTransition>
		</View>
	);
}

const styles = StyleSheet.create({
	contenido: {
    width: "95%",
    marginHorizontal: "2.5%",
    paddingVertical: 10
  },
	userFirstLetter: {
  	backgroundColor: "#33907C",
  	width: 55,
  	height: 55,
  	alignItems: "center",
  	justifyContent: "center",
  	borderWidth: 2,
  	borderColor: "#FFF",
  	borderStyle: "solid"
  },
  userDefaultAvatar: {
  	backgroundColor: "#33907C",
  	width: 25,
  	height: 25,
  	alignItems: "center",
  	justifyContent: "center"
  }
})

export default StoreDashboard