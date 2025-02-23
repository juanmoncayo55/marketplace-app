import React, {useReducer} from "react";

import MenuContext from "./menuContext";
import MenuReducer from "./menuReducer";
import {
  TYPE_EDIT_PROFILE,
  TYPE_LANGUAGE_CURRENCY,
  TYPE_FEEDBACK,
  TYPE_REFERFRIEND,
  TYPE_TERMSCONDITIONS,
  HIDE_MENU_DASH
} from "../../types";

const MenuState = props => {
  const initialState = {
    screenEditProfile: false,
    screenLanguageCurrency: false,
    screenFeedback: false,
    screenReferFriend: false,
    screenTermsConditions: false,
    hideBottomMenu: false //referencia para esconder menu
  }

  const [state, dispatch] = useReducer(MenuReducer, initialState);

  const isVisibleEditProfile = (value) => {
    dispatch({
      type: TYPE_EDIT_PROFILE,
      payload: value
    })
  }

  const isVisibleLanguageCurrency = (value) => {
    dispatch({
      type: TYPE_LANGUAGE_CURRENCY,
      payload: value
    })
  }
  const isVisibleFeedback = (value) => {
    dispatch({
      type: TYPE_FEEDBACK,
      payload: value
    })
  }
  const isVisibleReferFriend = (value) => {
    dispatch({
      type: TYPE_REFERFRIEND,
      payload: value
    })
  }
  const isVisibleTermsConditions = (value) => {
    dispatch({
      type: TYPE_TERMSCONDITIONS,
      payload: value
    })
  }

  /*Metodo para esconder menu de abajo*/
  const bottomMenu = () => {
    dispatch({
      type: HIDE_MENU_DASH
    })
  }

  return (
    <MenuContext.Provider
      value={{
        screenEditProfile: state.screenEditProfile,
        screenLanguageCurrency: state.screenLanguageCurrency,
        screenFeedback: state.screenFeedback,
        screenReferFriend: state.screenReferFriend,
        screenTermsConditions: state.screenTermsConditions,
        hideBottomMenu: state.hideBottomMenu,
        isVisibleEditProfile,
        isVisibleLanguageCurrency,
        isVisibleFeedback,
        isVisibleReferFriend,
        isVisibleTermsConditions,
        bottomMenu
      }}
    >
      {props.children}
    </MenuContext.Provider>
  )
}

export default MenuState;