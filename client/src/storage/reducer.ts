import { Action } from "redux";
import { initialState } from "./initialState";

interface PayloadAction extends Action {
  payload?: any;
}
export function reducer(state = initialState, action: PayloadAction) {
  switch (action.type) {
    case "OPEN_MODAL": {
      return {
        ...state,
        isModalOpen: true,
      };
    }
    case "CLOSE_MODAL": {
      return {
        ...state,
        isModalOpen: false,
      };
    }
    case "ADD_RECIPE": {
      return {
        ...state,
        recipes: [action.payload, ...state.recipes],
        isModalOpen: false,
      };
    }
    case "ADD_RECIPES": {
      return {
        ...state,
        recipes: [...action.payload, ...state.recipes],
      };
    }
    case "UPDATE_RECIPE": {
      return {
        ...state,
        recipes: action.payload,
      };
    }
  }
  return state;
}
