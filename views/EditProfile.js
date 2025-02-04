import React, { useState, useContext, useEffect } from "react";
import {ScrollView, StyleSheet, BackHandler} from "react-native";
import {View, Text, VStack, Box, Center, Heading, FormControl, Stack, Input, Button, Toast, Image, Actionsheet, Pressable, useDisclose, Icon, Spinner} from "native-base";
import { gql, useMutation } from "@apollo/client";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { RNCamera } from "react-native-camera";
import FilePickerManager from 'react-native-file-picker';
import RNFS from 'react-native-fs';

import globalStyles from "../styles/globalStyles";
import UserContext from "../context/user/userContext";

const UPDATE_USER_INFORMATION = gql`
  mutation updateUserInformation($input: UserEditInput, $email: String){
    updateUserInformation(input: $input, email: $email){
      msg
      user {
        firstName
        lastName
      }
    }
  }
`;
const UPLOAD_IMAGE = gql`
  mutation uploadAvatarUser($email: String, $image: Upload!) {
    uploadAvatarUser(email: $email, image: $image) {
      message
    }
  }
`;
const GET_USER = gql`
  mutation getUser($email: String) {
    getUser(email: $email) {
      lastName
      firstName
      email
      token
      confirmado
      codeVerification
      avatar
    }
  }
`;

const EditProfile = () => {

  //context user
  const {user, setUserLogued, hideHeaderDash} = useContext(UserContext);

  //mutation
  const [updateUserInformation] = useMutation(UPDATE_USER_INFORMATION);
  const [uploadAvatarUser] = useMutation(UPLOAD_IMAGE);
  const [getUser] = useMutation(GET_USER);

  //State for EditProfile
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [pausePreview, setPausePreview] = useState(false);
  const [fotoShow, setFotoShow] = useState(false);
  const [isOpenSheet, setIsOpenSheet] = useState(false);
  const [changeData, setChangedData] = useState(false);
  const [loadedPicture, setLoadedPicture] = useState(false);

  useEffect( () => {
    const getUserFn = async() =>{
      if(changeData){
        const {data} = await getUser({ variables: { email: user.email } })
        console.log("data desde useEffect: ", data)
        setUserLogued(data.getUser)
        setChangedData(false)
      }
    }

    getUserFn()
  }, [changeData])

  const handleBackButtonClick = () => {
    setPausePreview(true)
    setFotoShow(true)
    hideHeaderDash(false)
  }

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener("hardwareBackPress", handleBackButtonClick);
    };
  }, []);

  const handleSubmit = async () => {
    console.log("Envia envia")

    if(
      !firstName ||
      !lastName ||
      !email
    ){
      setMessage("Todos los campos son obligatorios");
      return;
    }

    Keyboard.dismiss();

    try{
      const {data} = await updateUserInformation({
        variables: {
          email,
          input: {
            firstName,
            lastName
          }
        }
      });

      console.log(data);
    } catch(error) {
      console.log("Error de edicion de usuario: ", error);
    }

  }

  const takePicture = async (camera) => {
    setLoadedPicture(true)
    const options = {
      quality: 0.5,
      base64: true,
      width: 800, // Set desired width
      height: 800, // Set desired height
      fixOrientation: true,
    };
    const data = await camera.takePictureAsync(options);
    //  eslint-disable-next-line
    const source = data.uri;
    if (source) {
      await camera.pausePreview();
      uploadAvatarUser({
        variables: {
          email: user.email,
          image: data
        }
      })
        .then(async (result) => {
          const {data} = result;
          //setUserLogued(data.uploadAvatarUser.user)
          if(data.uploadAvatarUser.message){
            console.log("adata await.. ", data.uploadAvatarUser.message)
            setChangedData(true)
            setLoadedPicture(false)
          }

          setPausePreview(true)
          setFotoShow(false)
          hideHeaderDash(false)
        })
        .catch(error => {
          console.error('Error uploading image:', error);
          setLoadedPicture(false)
        });
      //console.log("picture source", source);
    }
  };
    
  const resumePicture = async (camera) => {
    await camera.resumePreview()
    setPausePreview(false)
    setFotoShow(false)
    hideHeaderDash(true)
  }

  const tomarFoto = () => {
    hideHeaderDash(true)
    onClose()
    setFotoShow(true)
  }

  //Mostrar mensaje Toast
  const handleMessage = () => {
    Toast.show({
      description: message
    });
    setMessage(null);
  }

  const takeImageInDevice = async () => {
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
        //console.log("APP base64: ", base64Img)
        console.log("Subio: ", response)

        if(base64Img){
          await uploadAvatarUser({
            variables: {
              email: user.email,
              image: {
                ...response,
                base64: base64Img
              }
            }
          })
            .then(async (result) => {
              const {data} = result;
              //setUserLogued(data.uploadAvatarUser.user)
              if(data.uploadAvatarUser.message){
                setLoadedPicture(false)
                setChangedData(true)
                console.log("adata await.. ", data.uploadAvatarUser.message)
                onClose();
              }
            })
            .catch(error => {
              setLoadedPicture(false)
              console.error('Error uploading image:', error);
            });
        }
      }
      else {
        onClose();
        setLoadedPicture(false)
        setMessage("Formato no permitido, los formatos permitidos son: jpg, png");
      }
    });
  }

  const {isOpen, onOpen, onClose} = useDisclose()

  return(
    <>
      <View style={{backgroundColor: "#FFF", flex: 1}}>
        <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
          <VStack bgColor="#F6F9FF" py="3">
            <Box style={styles.contenido} justifyContent="flex-start" alignItems="center" gap="4" px={"3"}>
              <Pressable onPress={onOpen}>
                <Center
                  style={styles.userFirstLetter}
                  rounded="full"
                >
                  
                  {
                    user.avatar ?
                      <Image source={{ uri: user.avatar }} alt="Imagen perfil" w={"full"} h={"full"} rounded={"full"} />
                    : <Text color="#33907C" fontFamily="productSans" fontWeight="bold" fontSize="6xl" style={{lineHeight: 75}}>J</Text>
                  }

                  <View style={styles.circleAbsol} rounded="full" />
                </Center>
              </Pressable>
              <Box flexDirection="column" justifyContent="center">
                <Heading fontFamily="SFProText" fontWeight="semibold" fontSize="lg" color="black" textAlign="center">{user.firstName ? `${user.firstName} ${user.lastName}` : "John Doe"}</Heading>
                <Text fontFamily="SFProText" fontWeight="normal" fontSize="sm" color="rgba(0,0,0,.8)" textAlign="center">{user.email ? user.email : "johndoe@email.com"}</Text>
              </Box>
            </Box>
          </VStack>
          <View style={globalStyles.contenido} px={"3"}>
            <FormControl isRequired>
              <Stack mx="3" mb="2">
                <FormControl.Label color="#4F4F4F" fontFamily="productSan" fontSize="md" mb="0">First Name</FormControl.Label>
                <Input
                  type="text"
                  variant="underlined"
                  placeholder="John"
                  color="#000"
                  placeholderTextColor="#4F4F4F"
                  size="lg"
                  focusOutlineColor="#4F4F4F"
                  value={user.firstName}
                  onChangeText={text => setFirstName(text)}
                />
              </Stack>
              <Stack mx="3" mb="2">
                <FormControl.Label color="#4F4F4F" fontFamily="productSan" fontSize="md" mb="0">Last Name</FormControl.Label>
                <Input
                  type="text"
                  variant="underlined"
                  placeholder="Doe"
                  color="#000"
                  placeholderTextColor="#4F4F4F"
                  size="lg"
                  focusOutlineColor="#4F4F4F"
                  value={user.lastName}
                  onChangeText={text => setLastName(text)}
                />
              </Stack>
              <Stack mx="3" mb="2">
                <FormControl.Label color="#4F4F4F" fontFamily="productSan" fontSize="md" mb="0">Email</FormControl.Label>
                <Input
                  type="text"
                  variant="underlined"
                  placeholder="johndoe@gmail.com"
                  color="#000"
                  placeholderTextColor="#4F4F4F"
                  size="lg"
                  focusOutlineColor="#4F4F4F"
                  value={user.email}
                  onChangeText={text => setEmail(text)}
                />
              </Stack>
              <Stack mx="3" mb="2">
                <FormControl.Label color="#4F4F4F" fontFamily="productSan" fontSize="md" mb="0">New Password</FormControl.Label>
                <Input
                  type="text"
                  variant="underlined"
                  placeholder="*******"
                  color="#000"
                  placeholderTextColor="#4F4F4F"
                  size="lg"
                  focusOutlineColor="#4F4F4F"
                  secureTextEntry={true}
                  value={password}
                  onChangeText={text => setPassword(text)}
                />
              </Stack>
            </FormControl>

            <Stack bgColor="white"  w="100%" py="3" my={"5"}>
              <Button bgColor="#33907C" rounded="full" w="95%" mx="auto" py="2" onPress={() => handleSubmit()}>
                <Text fontSize={20} color="#FFF" fontWeight="semibold">Create</Text>
              </Button>
            </Stack>
          </View>
        </ScrollView>
        {message && handleMessage()}
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
              {
                ({ camera, status }) => {
                  if(status !== "READY") return <Text>Cargandooo...</Text>;
                  return (
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
                }
              }
            </RNCamera>
          : null          
        }
        <Actionsheet isOpen={isOpen} onClose={onClose} size="full">
          <Actionsheet.Content>
            {
              loadedPicture ? <Spinner size={"xl"} color="greenPrimary" />
              :
              <>
                <Actionsheet.Item startIcon={<Icon as={<Ionicons name="camera" />} size={"lg"} color="muted.400" mr={3} />} onPress={() => tomarFoto()}>
                  Camera
                </Actionsheet.Item>
                <Actionsheet.Item startIcon={<Icon as={<Ionicons name="image" />} size={"lg"} color="muted.400" mr={3} />} onPress={() => takeImageInDevice()}>
                  Files
                </Actionsheet.Item>
              </>
            }
          </Actionsheet.Content>
        </Actionsheet>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  contenido: {
    width: "90%",
    marginHorizontal: "5%"
  },
  userFirstLetter: {
    borderColor: "#33907C",
    width: 80,
    height: 80,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 3,
    borderStyle: "solid",
    position: "relative"
  },
  circleAbsol: {
    width: 20,
    height: 20,
    backgroundColor: "#33907C",
    position: "absolute",
    bottom: 10,
    right: -5
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
  }
})

export default EditProfile