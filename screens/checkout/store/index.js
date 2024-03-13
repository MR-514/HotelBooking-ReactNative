import {legacy_createStore} from "redux";
import roomReducer from "../redux/reducers/roomQuantityReducer";

const dataStore = legacy_createStore( roomReducer);
// dataStore.subscribe(()=>{
  
//   console.log(dataStore.getState());
// })

export default dataStore;