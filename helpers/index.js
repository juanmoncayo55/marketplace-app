import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

export const verifyAccount = async() => {
      const navigation = useNavigation();
      const userLogued = await AsyncStorage.getItem("user-logued")
      const parseUserLogued = JSON.parse(userLogued)
      console.log(parseUserLogued.id)
      if(!parseUserLogued.id) navigation.navigate("Login")
      else navigation.navigate("HomeDashboard")
}