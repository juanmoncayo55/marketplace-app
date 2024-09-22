import {Box, Text, Button} from "native-base";

const CardFront = ({item}) => {
	return (
		<Box key={item} height="180" width="320" backgroundColor='#000000' color="black" rounded="xl" p="5" justifyContent="center" alignItems="flex-start">
			<Text textTransform="uppercase" color="white" fontSize="lg">Ready to deliver to{"\n"}your home</Text>
			<Button mt="5" style={{width: "fit-content", backgroundColor: "black"}} variant="outline" rounded="full" px={5} py={1}>
				<Text textTransform="uppercase" color="white" fontSize="md" fontWeight="bold">Start Shopping</Text>
			</Button>
		</Box>
	)
}

export default CardFront