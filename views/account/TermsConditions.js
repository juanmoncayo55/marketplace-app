import React, {useState, useContext} from "react";
import {StyleSheet, ScrollView} from "react-native";
import { View, Text } from "native-base";
import MenuContext from "../../context/menu/menuContext";
import HeaderBottomTab from "../../components/HeaderBottomTab";

const TermsConditions = () => {
  const {isVisibleTermsConditions} = useContext(MenuContext);

  const actionRequired = () => {
    isVisibleTermsConditions(false)
  }

  return(
    <View>
      <HeaderBottomTab
        titleCenter="Terms & Conditions"
        iconSearch={false}
        heartCart={true}
        iconLeft={true}
        actionRequired={actionRequired}
      />
      <ScrollView>
        <Text>TermsConditions</Text>
      </ScrollView>
    </View>
  )
}

export default TermsConditions