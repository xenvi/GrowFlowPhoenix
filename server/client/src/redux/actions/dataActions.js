import {
    LOADING_DATA,
    SET_EMPLOYEES,
    CREATE_EMPLOYEE,
    LOADING_UI
  } from "../types";
import axios from "axios";
  
// get all employees
export const getEmployees = () => async (dispatch) => {
    dispatch({ type: LOADING_DATA });
    try {
        const res = await axios.get("/employee");
        dispatch({
            type: SET_EMPLOYEES,
            payload: res.data,
        });
    }
    catch (e) {
        dispatch({
            type: SET_EMPLOYEES,
            payload: [],
        });
    }
};

// create an employee
export const createEmployee = (newEmployee) => async (dispatch) => {
    dispatch({ type: LOADING_UI });
    try {
        const res = await axios.post("/employee", newEmployee);
        dispatch({
          type: CREATE_EMPLOYEE,
          payload: res.data,
        });
      }
    catch (e) {
        console.log(e);
    };
};