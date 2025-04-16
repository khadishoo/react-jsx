import React, { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import FlightContext from '../../components/week30day4/FlightContext';

export default function FlightList() {
    const { flights, setFlights } = useContext(FlightContext);
    const [loading, setLoading] = useState(true);
  
    const mockFlights = [
      {
        id: 1,
        from: "Almaty",
        to: "Astana",
        price: 25000,
        time: "10:00",
        airline: "Air Astana",
        seats: 100
      },
      {
        id: 2,
        from: "Almaty",
        to: "Shimkent",
        price: 20000,
        time: "12:30",
        airline: "SCAT",
        seats: 60
      },
      {
        id: 3,
        from: "Astana",
        to: "Taraz",
        price: 30000,
        time: "03:20",
        airline: "Scat",
        seats: 70
      }
    ];
  
    useEffect(() => {
      setTimeout(() => {
        setFlights(mockFlights);
        setLoading(false);
      }, 1000);
    }, [setFlights]);
  
    if (loading) return <div>Жүктелуде...</div>;

  return (
    <div>
      <h2>Available Flights</h2>
      <div>
        {flights.map(flight => (
            <div key={flight.id} style={{ border: '1px solid gray', margin: '10px', padding: '10px' }}>
            <h2>{flight.from} to {flight.to}</h2>
            <p>Әуекомпания: {flight.airline}</p>
            <p>Бағасы: {flight.price}₸</p>
            <p>Уақыты: {flight.time}</p>
            <Link to={`/booking/${flight.id}`}>Брондау</Link>
            </div>
        ))}
      </div>
    </div>
  );
}
