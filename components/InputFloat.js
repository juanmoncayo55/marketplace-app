import React, {useState} from "react";
import {Animated} from "react-native";
import {Stack,View,FormControl,Input, TextArea} from "native-base";
import MaterialIcons from "react-native-vector-icons/MaterialIcons"

const InputFloat = ({label, value, changeValue, ChipInput, tagsCategories, setTagsCategories, dataFilter, setShowDropdown, setDataExample, textarea, iconLeft}) => {

  const [animacionInput] = useState(new Animated.Value(23));

  const focusInput = () => {
    Animated.spring(animacionInput, {
      toValue: 0, // Valor al que llega
      duration: 500, // tiempo que tarda en llegar
      useNativeDriver: true
    }).start()
    if(ChipInput){
      //setDataExample(dataFilter)
      //setShowDropdown(true)
    }
  }
  const focusInputOut = () => {
    Animated.spring(animacionInput, {
      toValue: 23, // Valor al que llega
      duration: 100, // tiempo que tarda en llegar
      useNativeDriver: true
    }).start()
    if(ChipInput){
      //setShowDropdown(false)
    }
  }

  const handleEnterPress = () => {
    console.log('El usuario presionó Enter. El texto ingresado es:');
    setTagsCategories([{detail: value}, ...tagsCategories])
    changeValue("");
    console.log(tagsCategories)
  };

  const fnChangeValue = (val) => {
    const regex = new RegExp(val, 'gi'); // 'g' para global, 'i' para case-insensitive
    const result = dataFilter.filter(item => regex.test(item));
    console.log(result);
    //setDataExample(result)
    changeValue(val);
  }

  const animacionStyle = {
    transform : [
      {translateY: animacionInput}
    ]
  }

  return(
    <Stack mx="3" mb="0">
      <View style={{position: "relative"}}>
        <Animated.View style={value.length > 0 ? {
    transform : [
      {translateY: 0}
    ]
  } : animacionStyle}>
          <FormControl.Label color="#4F4F4F" fontFamily="productSan" fontSize="md" mb="0" ml={iconLeft ? "4" : null}>{label}</FormControl.Label>
        </Animated.View>
        {
          textarea ?
          (
            <TextArea
              h={20}
              w={"full"}
              py="0"
              mb="2"
              variant={"underlined"}
              color="#000"
              size="lg"
              focusOutlineColor="#4F4F4F"
              value={value}
              onChangeText={changeValue}
              onFocus={focusInput}
              onBlur={value.length > 0 ? null : focusInputOut}
            />
          )
          : (
            <Input
              type="text"
              variant="underlined"
              color="#000"
              size="lg"
              focusOutlineColor="#4F4F4F"
              py="0"
              mb="2"
              w={"full"}
              value={value}
              onChangeText={changeValue}
              textAlign={iconLeft ? "center" : "left"}
              onFocus={focusInput}
              onBlur={value.length > 0 ? null : focusInputOut}
              onSubmitEditing={ChipInput ? handleEnterPress : null}
              InputLeftElement={iconLeft ? <MaterialIcons name="attach-money" size={17} color="#888" /> : null}
            />
          )
        }
      </View>
    </Stack>
  )
}

export default InputFloat