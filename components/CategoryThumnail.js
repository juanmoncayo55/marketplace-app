import {StyleSheet, ImageBackground} from "react-native";
import { Pressable, Text, Image } from 'native-base'
import {useNavigation} from "@react-navigation/native";

const CategoryThumnail = ({content, index}) => {
	const navigation = useNavigation()

	return (
		<Pressable key={index} onPress={() => navigation.navigate("CategoryProduct", {title: content.text, products: content.data})}>
			<ImageBackground
					source={content.image}
					style={styles.imagen}
			>
				<Text style={styles.textImage}>{content.text}</Text>
			</ImageBackground>
		</Pressable>
	)
}

const styles = StyleSheet.create({
  imagen: {
  	width: 88.5,
  	height: 88.5,
  	resizeMode: 'cover',
  	justifyContent: "center",
  	alignItems: "center"
  },
  textImage: {
  	color: "#FFF",
  	fontSize: 15,
  	fontWeight: "medium",
  }
})

export default CategoryThumnail