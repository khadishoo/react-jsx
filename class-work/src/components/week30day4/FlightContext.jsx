import React, { createContext, useState } from 'react';

const FlightContext = createContext();

export const FlightProvider = ({ children }) => {
  const [flights, setFlights] = useState([]);
  const [bookings, setBookings] = useState([]);

  return (
    <FlightContext.Provider value={{ 
        flights, setFlights, 
        bookings, setBookings 
    }}>
      {children}
    </FlightContext.Provider>
  );
};

export default FlightContext;

