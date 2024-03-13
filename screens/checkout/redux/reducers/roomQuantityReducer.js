import {
  ADD_BOOKING_DETAILS,
  ADD_PRICING_DETAILS,
  ADD_USER_DATA,
  DECREASE_ROOM_COUNT,
  DECREASE_TRAVELLER_COUNT,
  INCREASE_ROOM_COUNT,
  INCREASE_TRAVELLER_COUNT,
  RESET_STORE,
} from "../types/roomQuantity.types";

const INITIAL_VALUE = {
  roomCount: 1,
  fullName: "",
  email: "",
  mobileNumber: "",
  nationality: "IND",
  dateOfBirth: "",
  address: "",
  gender: "",
  checkin: "",
  checkout: "",
  initial_price: "",
  price: "",
  numberOfTravellers: 1,
};
const roomReducer = (store = INITIAL_VALUE, action) => {
  switch (action.type) {
    case INCREASE_ROOM_COUNT:
      return {
        ...store,
        roomCount: store.roomCount + 1,
        price: (store.roomCount + 1) * store.initial_price,
      };
    case DECREASE_ROOM_COUNT:
      return {
        ...store,
        roomCount: store.roomCount - 1,
        price: (store.roomCount - 1) * store.initial_price,
      };
    case INCREASE_TRAVELLER_COUNT:
      return {
        ...store,
        numberOfTravellers: store.numberOfTravellers + 1,
      };
    case DECREASE_TRAVELLER_COUNT:
      return {
        ...store,
        numberOfTravellers: store.numberOfTravellers - 1,
      };
    case ADD_USER_DATA:
      return { ...store, ...action.payload };
    case ADD_BOOKING_DETAILS:
      return { ...store, ...action.payload };
    case ADD_PRICING_DETAILS:
      return { ...store, ...action.payload };
    case RESET_STORE:
      return INITIAL_VALUE;
    default:
      return store;
  }
};
export default roomReducer;
