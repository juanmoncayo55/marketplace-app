import { 
  TYPE_EDIT_PROFILE,
  TYPE_LANGUAGE_CURRENCY,
  TYPE_FEEDBACK,
  TYPE_REFERFRIEND,
  TYPE_TERMSCONDITIONS,
  HIDE_MENU_DASH
} from "../../types";

export default (state, action) => {
  switch(action.type) {
    case TYPE_EDIT_PROFILE:
      return {
        ...state,
        screenEditProfile: action.payload
      }
    case TYPE_LANGUAGE_CURRENCY:
      return {
        ...state,
        screenLanguageCurrency: action.payload
      }
    case TYPE_FEEDBACK:
      return {
        ...state,
        screenFeedback: action.payload
      }
    case TYPE_REFERFRIEND:
      return {
        ...state,
        screenReferFriend: action.payload
      }
    case TYPE_TERMSCONDITIONS:
      return {
        ...state,
        screenTermsConditions: action.payload
      }
    case HIDE_MENU_DASH:
      return {
        ...state,
        hideBottomMenu: !state.hideBottomMenu
      }
  }
}