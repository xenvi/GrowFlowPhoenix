import {
    LOADING_DATA,
    SET_EMPLOYEES,
    CREATE_EMPLOYEE
  } from "../types";
  
  const initialState = {
    employees: [],
    loading: false
  };
  
export default function (state = initialState, action) {
    switch (action.type) {
        case LOADING_DATA:
            return {
            ...state,
            loading: true,
            };
        case SET_EMPLOYEES:
            return {
                ...state,
                employees: action.payload,
                loading: false,
            };
        case CREATE_EMPLOYEE:
            return {
                ...state,
                employees: [...state.employees, action.payload],
                loading: false,
            };
        default:
            return state;
    }
}
  