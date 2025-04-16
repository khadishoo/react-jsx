import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import FlightContext from '../../components/week30day4/FlightContext';

export default function FlightBooking() {
  const { flightId } = useParams();
  const { flights, bookings, setBookings } = useContext(FlightContext);
  const [flight, setFlight] = useState(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({ passengerName: '', selectedDate: '' });
  const navigate = useNavigate();

  useEffect(() => {
    const selectedFlight = flights.find(f => f.id === parseInt(flightId));
    if (selectedFlight) {
      setFlight(selectedFlight);
      setLoading(false);
    }
  }, [flights, flightId]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBooking = (e) => {
    e.preventDefault();

    if (!formData.passengerName || !formData.selectedDate) {
      alert('Бронь естерді толтырыңыз!');
      return;
    }

    const bookingData = {
      flightId: flight.id,
      ...formData,
      bookingDate: new Date().toISOString(),
    };

    setBookings([...bookings, bookingData]);
    alert('Брондау сәтті жасалды!');
    navigate('/');
  };

  if (loading) return <div>Loading flight details...</div>;

  return (
    <div>
      <h2>Booking Flight: {flight.from} → {flight.to}</h2>
      <form onSubmit={handleBooking}>
        <label>Name and Surname</label>
        <input
          type="text"
          name="passengerName"
          placeholder="Аты-жөні"
          value={formData.passengerName}
          onChange={handleChange}
        />
        <label>day</label>
        <input
          type="date"
          name="selectedDate"
          value={formData.selectedDate}
          onChange={handleChange}
        />
        <button type="submit">Брондау</button>
      </form>
    </div>
  );
}
