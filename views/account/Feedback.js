import React, {useState, useContext} from "react";
import {StyleSheet, ScrollView} from "react-native";
import { View, Text } from "native-base";
import MenuContext from "../../context/menu/menuContext";
import HeaderBottomTab from "../../components/HeaderBottomTab";

const Feedback = () => {

  const {isVisibleFeedback} = useContext(MenuContext);

  const actionRequired = () => {
    isVisibleFeedback(false)
  }

  return(
    <View>
      <HeaderBottomTab
        titleCenter="Feedback"
        iconSearch={false}
        heartCart={true}
        iconLeft={true}
        actionRequired={actionRequired}
      />
      <ScrollView>
        <Text>Feedback</Text>
      </ScrollView>
    </View>
  )
}

export default Feedback