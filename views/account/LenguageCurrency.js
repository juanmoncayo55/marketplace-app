import React, {useState, useContext} from "react";
import {StyleSheet, ScrollView} from "react-native";
import { View, Text } from "native-base";
import MenuContext from "../../context/menu/menuContext";
import HeaderBottomTab from "../../components/HeaderBottomTab";

const LenguageCurrency = () => {

  const {isVisibleLanguageCurrency} = useContext(MenuContext);

  const actionRequired = () => {
    isVisibleLanguageCurrency(false)
  }

  return(
    <View>
      <HeaderBottomTab
        titleCenter="Language & Currency"
        iconSearch={false}
        heartCart={true}
        iconLeft={true}
        actionRequired={actionRequired}
      />
      <ScrollView>
        <Text>LenguageCurrency</Text>
      </ScrollView>
    </View>
  )
}

export default LenguageCurrency