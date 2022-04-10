import { combineReducers } from "redux";

const user = (state = null) => state;

//state is the piece of the pie from state.js that represents the cars
//action is the object from the function
const cars = (state = [], action) => {
  switch (action.type) {
    //I want to add a new car to the array of cars
    case "ADD_CAR":
      // return state.push(action.payload) ****BAD because it modifies the exisiting state
      return [...state, action.payload]; //returns a new array

    case "REMOVE_CAR":
      const newState = [...state]; //create new array so we dont modify the global state
      newState.splice(action.payload, 1);
      return newState;
    default:
      return state; //returning the array as it is
  }
};

export default combineReducers({ user, cars });
