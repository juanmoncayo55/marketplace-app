import React from 'react'
import { Text, Button } from "native-base";

const ButtonComponent = ({children, largeBtn, smallWhite}) => {
  return (
		<>
			{
				largeBtn && (
					<Button bgColor="#33907C" rounded="full" mt="9" py="2" _pressed={{backgroundColor: "rgba(51,144,124, .8)"}}>
						<Text fontFamily="SFProText" fontSize="xl" color="#FFF" fontWeight="semibold">{children}</Text>
					</Button>
				)
			}

			{
				largeBtn == null && (
					<Button bgColor={smallWhite ? "#FFF" : "#33907C"} variant="outline" rounded="full" px={7} py={0.5} _pressed={{
							backgroundColor: 
								smallWhite ? 
								"rgba(255,255,255, .8)" 
								:
								"rgba(51,144,124, .8)"
							}}>
      			<Text fontFamily="SFProText" fontWeight="normal" color={smallWhite ? "#33907C" : "#FFF"} fontSize="md">{children}</Text>
      		</Button>
				)
			}
		</>
	)
}

export default ButtonComponent