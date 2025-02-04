import {
  CLEAN_STATE_USER,
	USUARIO_LOGUEADO,
	VIEW_HEADER_DASH,
	HIDE_MENU_DASH
} from "../../types/";

export default (state, action) => {
	switch (action.type) {
		case USUARIO_LOGUEADO:
			return {
				...state,
				user: action.payload
			}
		case CLEAN_STATE_USER:
			return {
				...state,
				user: null
			}
		case VIEW_HEADER_DASH:
			return {
				...state,
				hide: action.payload
			}
		case HIDE_MENU_DASH:
			return {
				...state,
				hideMenuDash: action.payload
			}
		default:
			return state;
	}
}