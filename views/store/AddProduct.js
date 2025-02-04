import React, {useState, useEffect} from 'react'
import { StyleSheet, ScrollView, LogBox } from 'react-native'
import {View, Text, Stack, VStack, FormControl, Box, Icon, Button, Pressable, Image, Actionsheet, useDisclose, Spinner, useToast, Select} from "native-base";
import {useMutation, useQuery, gql} from "@apollo/client";
import Ionicons  from "react-native-vector-icons/Ionicons";
import { RNChipView } from "react-native-chip-view";
import { RNCamera } from "react-native-camera";
import RNFS from 'react-native-fs';
import FilePickerManager from 'react-native-file-picker';
//import MapView, {Marker} from 'react-native-maps';
//import Geolocation from '@react-native-community/geolocation';
import HeaderBottomTab from '../../components/HeaderBottomTab';
import InputFloat from '../../components/InputFloat';

const GET_CATEGORIES = gql`
	query getCategories{
	  getCategories{
	  	id
	    name
	  }
	}
`;

const CREATE_PRODUCT = gql`
	mutation createProduct($input: ProductInput, $files: [Upload!]){
	  createProduct(input: $input, files: $files)
	}
`;

const GET_PRODUCTS = gql`
	query getProducts($store: ID!){
	  getProducts(store: $store){
	    id
			title
			precie
			discount
			follow
			description
			condition
			priceType
			category
			location
			aditionalDetail{
	      detail
	    }
			imageGallery{
	      url
	    }
			store
	  }
	}
`

const UPDATE_PRODUCT = gql`
	mutation updateProduct($input: ProductInput, $files: [Upload!], $existsImage: [String]){
		updateProduct(input: $input, files: $files, existsImage: $existsImage){
			id
			title
			precie
			discount
			follow
			description
			condition
			priceType
			category
			location
			aditionalDetail{
	      detail
	    }
			imageGallery{
	      url
	    }
			store
		}
	}
`;

const AddProduct = ({
	showScreenAddProduct,
	setHideMenuDash,
	handleHideScreenAddPorduct,
	store,
	currentProduct
}) => {

	const [productName, setProductName] = useState("asdasdasd");
	const [productCategory, setProductCategory] = useState("asdasdasd");
	const [productPrice, setProductPrice] = useState("23423");
	const [productOfferPrice, setProductOfferPrice] = useState("23424");
	const [productLocationDeta, setProductLocationDeta] = useState("sdfsdfsdf");
	const [productProductDescription, setProductProductDescription] = useState("sdfsdfsdf");
	const [productCondition, setProductCondition] = useState("sdfsdfsdf");
	const [productPriceType, setProductPriceType] = useState("sdfsdfsdfsdfsdfsdf");
	const [productAdditional, setProductAdditional] = useState("");
	const [tagsCategories, setTagsCategories] = useState([]);
	const [resourcesImages, setResourcesImages] = useState([]);
	const [rscImgFront, setRscImgFront] = useState([]);
	const [showDropdown, setShowDropdown] = useState(false);
	const [loadedPicture, setLoadedPicture] = useState(false);
	const [fotoShow, setFotoShow] = useState(false);

	//console.log("currentProduct: ", currentProduct.imageGallery)

	useEffect(() => {
		if(currentProduct !== null){
			const newImages = currentProduct.imageGallery.map(item => ({ uri: item.url }));
    	setRscImgFront(newImages);
		}

		return () => setRscImgFront([])
	}, [currentProduct])

	//state for location
	/*
	const [position, setPosition] = useState({
    latitude: 10,
    longitude: 10,
    latitudeDelta: 0.001,
    longitudeDelta: 0.001,
  });

  useEffect(() => {
	  Geolocation.getCurrentPosition((pos) => {
	    const crd = pos.coords;
	    setPosition({
	      latitude: crd.latitude,
	      longitude: crd.longitude,
	      latitudeDelta: 0.0421,
	      longitudeDelta: 0.0421,
	    });
	    getInformationLocation();
	  },(err) => {
	    console.log(err);
	  });
	}, []);

	const getInformationLocation = async () => {
		try{
			const response = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${position.latitude},${position.longitude}&key=963ecbde850e401981eef343ee00a72b`)
			const data = await response.json();

			console.log(data)
		} catch(error) {
		  console.error("Error in query maps data: ", error.message)
		}
	}*/

	//mutation create product
	const [createProduct] = useMutation(CREATE_PRODUCT, {
		update(cache, { data: {createProduct} }){
			const {getProducts} = cache.readQuery({ 
				query: GET_PRODUCTS,
				variables: {
					store: store.id
				}
			});
			cache.writeQuery({
				query: GET_PRODUCTS,
				data: { getProducts: getProducts.concat([createProduct]) }
			})
		}
	});
	//query get categories
	const {loading, data, error} = useQuery(GET_CATEGORIES);

	if(!loading && !error){
		//console.log(data);
	}

	//Toast
	const toast = useToast();

	const resumePicture = async (camera) => {
    await camera.resumePreview()
    setFotoShow(false)
  }
  const takePicture = async (camera) => {
  	setLoadedPicture(true);
  	const options = {
      quality: 0.5,
      base64: true,
      width: 800, // Set desired width
      height: 800, // Set desired height
      fixOrientation: true,
    };
    const data = await camera.takePictureAsync(options);
    const source = data.uri;

    if (source) {
      await camera.pausePreview();

      setRscImgFront([data, ...rscImgFront]);
      //setResourcesImages([{base64: data.base64}, ...resourcesImages]);
      setResourcesImages([{uri: data.base64}, ...resourcesImages]);

      setLoadedPicture(false)
      setFotoShow(false)
    }
  }

	//Abrimos y ejecutamos el driver de la camara y el lector de archivos
	const tomarFoto = () => {
		onClose();
		setFotoShow(true);
	}
	const takeImageInDevice = () => {
		setLoadedPicture(true)
    FilePickerManager.showFilePicker({
      multiple: false,
      allowedFileTypes: ['image/jpeg', 'image/png']
    }, async (response) => {
    	if (response.didCancel) {
        console.log('User cancelled file picker');
      }
      else if (response.error) {
        console.log('FilePickerManager Error: ', response.error);
      }
      if(response.type === "image/jpg" || response.type === "image/png" || response.type === "image/*" || response.type === "image/jpeg"){
        const base64Img = await RNFS.readFile(response.uri, 'base64');

        onClose();
        setLoadedPicture(false);

        setRscImgFront([response, ...rscImgFront]);
        //setResourcesImages([{base64: base64Img}, ...resourcesImages]);
        setResourcesImages([{uri: base64Img}, ...resourcesImages]);
      }
      else {
        onClose();
        setLoadedPicture(false)
        toast.show({
        	description: "Formato no permitido, los formatos permitidos son: jpg, png"
        });
      }
    })
	}

	//method for add product
	const handleAddProduct = async () => {
		if(
			!productName ||
			!productCategory ||
			!productPrice ||
			!productOfferPrice ||
			!productLocationDeta ||
			!productProductDescription ||
			!productCondition ||
			!productPriceType ||
			!productAdditional
		){
			toast.show({
				description: "Todos los campos son requeridos."
			});
			return;
		}

		console.log("SE preciono handleAddProduct")
		/*if(tagsCategories.length <= 0){
			toast.show({
				description: "Por lo menos agrega un detalle adicional."
			});
			return;
		}*/

		try{
			const data = await createProduct({
				variables:{
					input:{
						title: productName,
						precie: parseInt(productPrice),
						discount:parseInt(productOfferPrice),
						follow: 10,
						description:productProductDescription,
						condition: productCondition,
						priceType: productPriceType,
						category: productCategory,
						location:productLocationDeta,
						aditionalDetail:tagsCategories,
						store: store.id
					},
					files:{
						resourcesImages
					}
				}
			});

			console.log(data)

			
			
			handleHideScreenAddPorduct()
		} catch(error) {
		  console.error("Error al agregar el producto: ", error);
		}
	}

	const handleUpdateProduct = async () => {
		console.log(
			productName,
			parseInt(productPrice),
			parseInt(productOfferPrice),
			10,
			productProductDescription,
			productCondition,
			productPriceType,
			productCategory,
			productLocationDeta,
			tagsCategories,
			store.id
 		)
 		console.log(currentProduct.imageGallery)
	}

	const actionRequired = () => {
		setRscImgFront([])
	}

	const {isOpen, onOpen, onClose} = useDisclose()

	return (
		<View bgColor="bgViews" style={{flex: 1}}>
			<HeaderBottomTab
        titleCenter="Add Product"
        iconSearch={false}
        heartCart={true}
        iconLeft={true}
        handleHideScreenAddPorduct={handleHideScreenAddPorduct}
        actionRequired={actionRequired}
      />
			<ScrollView>
				<View style={styles.contenido} my="1">
					<ScrollView horizontal showsHorizontalScrollIndicator={false}>
						<Box flexDirection="row" gap="3" mt="2" mr="3" alignItems={"center"}>
							<Pressable onPress={onOpen}>
								{({isPressed}) => {
									return <Box style={[
										styles.btnAddImageDashed,
										{ transform: [{scale: isPressed ?0.90 : 1}] },
										{borderColor: isPressed ? "#33907C" : "#CCC"}
									]} alignItems="center" p="2" w={150}
									h={130} justifyContent={"center"}>
										<Icon name="add-sharp" as={Ionicons} size="3xl" fontWeight="bold" color="rgba(0,0,0,.3)" />
										<Text fontSize="md" fontFamily={"Monserrat"} fontWeight={"medium"} color={isPressed ? "greenPrimary" : "rgba(0,0,0,.4)"}>Add Photos</Text>
										<Text fontSize="xs" fontFamily={"Monserrat"} fontWeight={"semibold"} color={isPressed ? "greenPrimary" : "rgba(0,0,0,.3)"}>1600 x 1200 for hi res</Text>
									</Box>
								}}
							</Pressable>
							{
								rscImgFront.length > 0 ? rscImgFront.map((item, index) => (
									<View key={index} position="relative">
										<Image
											alt="Brocolli"
											source={{uri: item.uri}}
											rounded="lg"
											w={150}
											h={130}
										/>
										<View position="absolute" right="-5" top="-5" bgColor="#212121" rounded="full" w="7" h="7" justifyContent="center" alignItems="center">
											<Icon size="lg" color="white" as={Ionicons} name="close" />
										</View>
									</View>
								)) : null
							}
							{/*<View position="relative">
								<Image
									alt="Brocolli"
									source={require("../../images/brocoli.png")}
									rounded="lg"
									w={150}
									h={130}
								/>
								<View position="absolute" right="-5" top="-5" bgColor="#212121" rounded="full" w="7" h="7" justifyContent="center" alignItems="center">
									<Icon size="lg" color="white" as={Ionicons} name="close" />
								</View>
							</View>*/}
						</Box>
					</ScrollView>
					<Text fontSize="md" fontFamily={"Monserrat"} fontWeight={"normal"} color="rgba(0,0,0,.4)" mt={"3"}>Max. 4 photos per product</Text>
				</View>
				<View bgColor="white">
					<Box style={styles.contenido}>
						<FormControl isRequired>
	          	<InputFloat
								label="Product Name"
								value={productName}
								changeValue={setProductName}
							/>
							<VStack flexDirection="row" justifyContent={"space-between"}>
								<View w={"50%"}>
									<InputFloat
										label="Product Price"
										value={productPrice}
										changeValue={setProductPrice}
										iconLeft={true}
									/>
								</View>
								<View w={"50%"}>
									<InputFloat
										label="Offer Price"
										value={productOfferPrice}
										changeValue={setProductOfferPrice}
										iconLeft={true}
									/>
								</View>
							</VStack>
							<InputFloat
								label="Location Details"
								value={productLocationDeta}
								changeValue={setProductLocationDeta}
							/>
							<InputFloat
								label="Product Details"
								value={productProductDescription}
								changeValue={setProductProductDescription}
								textarea={true}
							/>
							<InputFloat
								label="Product Condition"
								value={productCondition}
								changeValue={setProductCondition}
							/>
							<InputFloat
								label="Price Type"
								value={productPriceType}
								changeValue={setProductPriceType}
							/>
							<Stack mx="3" mt="4">
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
													title={item.detail}
													avatar={false}
													titleStyle={{fontWeight: "normal", fontSize: 15}}
													cancelableStyle={{backgroundColor: "transparent"}}
													cancelable={true}
													height={30}
												/>
											))
										}
									</ScrollView>
									: null
								}
							</Stack>
							<Stack position={"relative"}>
								<InputFloat
									label="Additional Details"
									value={productAdditional}
									changeValue={setProductAdditional}
									ChipInput={true}
									tagsCategories={tagsCategories}
									setTagsCategories={setTagsCategories}
									dataFilter={[]}
								/>
							</Stack>
		        </FormControl>
		        {
		        	(!loading && !error) && (
				        <FormControl isReadOnly>
				        	<View mx={"3"} mt={"4"}>
					        	<Select selectedValue={productCategory} minWidth="200" accessibilityLabel="Choose Category" placeholder="Choose Category" onValueChange={item => setProductCategory(item)} variant={"underlined"} style={{fontSize: 14, color: "#4F4F4F"}} _selectedItem={{
								        bg: "greenPrimary",
								        color: "white"
								      }}>
									      {
									      	data.getCategories.map((item, index) => (
														<Select.Item key={index} label={item.name} value={item.id} />
									      	))
									      }
										</Select>
									</View>
				        </FormControl>
		        	)
		        }
		        {/*<Stack h={200} w="full">
		        	<MapView
					      style={styles.map}
					      initialRegion={position}
					      showsUserLocation={true}
					      showsMyLocationButton={true}
					      followsUserLocation={true}
					      showsCompass={true}
					      scrollEnabled={true}
					      zoomEnabled={true}
					      pitchEnabled={true}
					      rotateEnabled={true}>
					       <Marker
					       title='Yor are here'
					       description='This is a description'
					       coordinate={position}/>
					    </MapView>
		        </Stack>*/}
						<Box my="8">
							<Button bgColor="#33907C" rounded="full" w="90%" mx="auto" py="2" onPress={currentProduct !== null ? handleUpdateProduct : handleAddProduct} _pressed={{opacity: 50}}>
								<Text fontSize={22} color="#FFF" fontWeight="semibold">{currentProduct !== null ? "Edit Product" : "Add Product"}</Text>
							</Button>
						</Box>
		      </Box>
	      </View>
			</ScrollView>

			{
				fotoShow ?
				<RNCamera
					style={styles.preview}
          type={RNCamera.Constants.Type.front}
          flashMode={RNCamera.Constants.FlashMode.off}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
				>
					{({ camera, status }) => {
						if(status !== "READY") return <Text>Cargando...</Text>;
						return(
							<>
								<View style={{flex: 1, flexDirection: 'column', justifyContent: 'space-between', margin: 10, alignItems: "flex-end"}}>
                  <Button rounded={"full"} w={"10"} h={"10"} bgColor={"greenPrimary"} borderColor={"white"} borderWidth={2} alignItems={"center"} justifyContent={"center"} onPress={() => resumePicture(camera) }_pressed={{opacity: 40}}>
                    <Icon as={<Ionicons name="close" />} size={"lg"} color="white"/>
                  </Button>
                  <View style={styles.previewBottom}>
                    <Button rounded={"full"} w={"16"} h={"16"} bgColor={"greenPrimary"} borderColor={"white"} borderWidth={2} alignItems={"center"} justifyContent={"center"} onPress={() => takePicture(camera)} _pressed={{opacity: 40}}>
                      <Icon as={<Ionicons name="camera" />} size={"xl"} color="white"/>
                    </Button>
                  </View>
                </View>
                {
                  loadedPicture &&
                  <View flex={1} width="100%" height="100%" bgColor={"rgba(0,0,0,.5)"} justifyContent={"center"} alignItems={"center"} position={"absolute"} top={0} bottom={0} left={0}>
                    <Spinner size={"xl"} color="rgba(255,255,255,0.8)" />
                  </View>
                }
							</>
						)
					}}
				</RNCamera>
				: null
			}

			<Actionsheet isOpen={isOpen} onClose={onClose} size="full">
        <Actionsheet.Content>
          <Actionsheet.Item startIcon={<Icon as={<Ionicons name="camera" />} size={"lg"} color="muted.400" mr={3} />} onPress={() => tomarFoto()}>
            Camera
          </Actionsheet.Item>
          <Actionsheet.Item startIcon={<Icon as={<Ionicons name="image" />} size={"lg"} color="muted.400" mr={3} />} onPress={() => takeImageInDevice()}>
            Files
          </Actionsheet.Item>
        </Actionsheet.Content>
      </Actionsheet>
		</View>
	)
}

const styles = StyleSheet.create({
	contenido: {
    width: "90%",
    marginHorizontal: "5%",
    paddingVertical: 10
  },
  btnAddImageDashed: {
  	borderRadius: 12,
  	borderColor: "#CCC",
  	borderWidth: 2,
  	borderStyle: "dashed"
  },
  preview: {
    flex: 1,
    height: "100%",
    position: "absolute",
    top: 0,
    width: "100%",
    justifyContent: "space-between"
  },
  previewBottom: {
    justifyContent: 'center',
    alignItems: 'center',
    width: "100%"
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    width: "100%",
    height: 200
  }
});

export default AddProduct