import React, {useState, useContext} from "react";
import {StyleSheet, ScrollView} from "react-native";
import { View, Text } from "native-base";
import MenuContext from "../../context/menu/menuContext";
import HeaderBottomTab from "../../components/HeaderBottomTab";

const ReferFriend = () => {

  const {isVisibleReferFriend} = useContext(MenuContext);

  const actionRequired = () => {
    isVisibleReferFriend(false)
  }

  return(
    <View>
      <HeaderBottomTab
        titleCenter="Refer a Friend"
        iconSearch={false}
        heartCart={true}
        iconLeft={true}
        actionRequired={actionRequired}
      />
      <ScrollView>
        <Text>ReferFriend</Text>
      </ScrollView>
    </View>
  )
}

export default ReferFriend