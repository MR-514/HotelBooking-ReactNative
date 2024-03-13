import { createContext, useContext, useState } from 'react';

const HotelContext = createContext();

export const HotelProvider = ({ children }) => {
  const [hotelTypesCheckedItems, setHotelTypesCheckedItems] = useState({
    All: false,
    Hotel: false,
    Apartment: false,
    Resort: false,
    Villa: false,
  });
  
  const [doubleRangeSliderState, setDoubleRangeSliderState] = useState([0, 10000]);
  const [selectedRating, setSelectedRatingState] = useState(null); 
  const [selectedAmenities, setSelectedAmenitiesState] = useState({
    'All': false,
    'Air conditioning': false,
    'Business Services': false,
    'Non-smoking rooms': false,
    'Ironing service': false,
    '24-hour front desk': false,
    'Caretaker': false,
    'Concierge service': false,
    'Laundry': false,
    'Family rooms': false,
    '24-hour security': false,
    'Balcony': false,
    'Free Wifi': false,
    'Bar': false,
  });

  const value = {
    hotelTypesCheckedItems,
    setHotelTypesCheckedItems,
    doubleRangeSliderState,
    setDoubleRangeSliderState,
    selectedRating,
    setSelectedRatingState, 
    selectedAmenities,
    setSelectedAmenitiesState
  };

  return <HotelContext.Provider value={value}>{children}</HotelContext.Provider>;
};

export const useHotelContext = () => {
  return useContext(HotelContext);
};
