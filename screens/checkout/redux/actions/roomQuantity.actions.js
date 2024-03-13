import { ADD_BOOKING_DETAILS, ADD_PRICING_DETAILS, ADD_USER_DATA, DECREASE_ROOM_COUNT, DECREASE_TRAVELLER_COUNT, INCREASE_ROOM_COUNT, INCREASE_TRAVELLER_COUNT, RESET_STORE } from "../types/roomQuantity.types"

export const increaseCount = () => {
  return {
    type: INCREASE_ROOM_COUNT,
  };
}

export const decreaseCount = () => {
  return {
    type: DECREASE_ROOM_COUNT,
  };
  
};

export const increaseTravellerCount =() => {
  return{
    type : INCREASE_TRAVELLER_COUNT,
  }
}

export const decreaseTravellerCount =() => {
  return{
    type : DECREASE_TRAVELLER_COUNT,
  }
}
export const addUser = (args) => {
  return {
    type: ADD_USER_DATA,
    payload: args
  };
};

export const addBookingDetails = (argb) => {
  return {
    type: ADD_BOOKING_DETAILS,
    payload: argb
  };
}
  export const addHotelDetails = (args) => {
  return {
    type: ADD_PRICING_DETAILS,
    payload: args
  };
}
  export const resetStore = () => {
  return {
    type: RESET_STORE,
  };
}