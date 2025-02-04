import React, {useReducer} from "react";

import UserContext from './userContext.js';
import UserReducer from './userReducer.js';

import {
    CLEAN_STATE_USER,
	USUARIO_LOGUEADO,
	VIEW_HEADER_DASH,
	HIDE_MENU_DASH
} from "../../types/";
import AsyncStorage from "@react-native-async-storage/async-storage";

async function localFunctionUser(){
	const infoUserLogued = JSON.parse(await AsyncStorage.getItem("user-logued"))
	return infoUserLogued
}

const UserState = props => {

	const initialState = {
		user: null,
		hide: false,
		hideMenuDash: false
	}


	const [state, dispatch] = useReducer(UserReducer, initialState);

	const setUserLogued = async user => {
		//await AsyncStorage.setItem("user-logued", JSON.stringify(user))
		try{
			await AsyncStorage.setItem("user-logued", JSON.stringify(user))
			const storeUser = await AsyncStorage.getItem("user-logued");
			const jsonStore = JSON.parse(storeUser);

			dispatch({
				type: USUARIO_LOGUEADO,
				payload: jsonStore
			})
			console.log("localFunctionUser", jsonStore)
			console.log("state.user: ", state.user)
		} catch(error) {
		  console.log(error)
		}
	}

	const cleanUserState = () => {
		dispatch({
			type: CLEAN_STATE_USER
		})
	}

	const hideHeaderDash = (value) => {
		dispatch({
			type: VIEW_HEADER_DASH,
			payload: value
		})
	}

	const setHideMenuDash = (value) => {
		dispatch({
			type: HIDE_MENU_DASH,
			payload: value
		})
	}

	return (
		<UserContext.Provider
			value={{
				user: state.user,
				hide: state.hide,
				hideMenuDash: state.hideMenuDash,
				setUserLogued,
				cleanUserState,
				hideHeaderDash,
				setHideMenuDash
			}}
		>
			{props.children}
		</UserContext.Provider>
	)
}

export default UserState;