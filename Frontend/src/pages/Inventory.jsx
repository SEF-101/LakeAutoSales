import React, { useState, useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import CarDetails from "./CarDetails";

const Inventory = () => {
  const [selectedCar, setSelectedCar] = useState(null);
  const [inventory, setInventory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleCarClick = (car) => {
    setSelectedCar(car);
  };

  const handleCloseModal = () => {
    setSelectedCar(null);
  };

  useEffect(() => {
    const fetchInventory = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/vehicles/all");
        if (!response.ok) {
          throw new Error(`Error fetching inventory: ${response.statusText}`);
        }
        const data = await response.json();
        setInventory(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchInventory();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <HelmetProvider>
      <>
        <Helmet>
          <title>Lakes Auto Sales | Inventory</title>
        </Helmet>
        <div className="container mx-auto p-4">
          <h1 className="text-3xl font-bold text-center mb-6">Our Inventory!</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {inventory.map((car) => (
              <div
                key={car._id}
                onClick={() => handleCarClick(car)}
                className="bg-slate-700 shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition cursor-pointer"
              >
                <img src={car.imageUrl} alt={`${car.make} ${car.model}`} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h2 className="text-xl font-semibold">{car.make} {car.model}</h2>
                  <p className="text-white">Year: {car.year}</p>
                  <p className="text-white">Price: ${car.price}</p>
                  <p className="text-white">Mileage: {car.mileage} miles</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {selectedCar && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-black p-6 rounded-lg shadow-lg max-w-screen w-full relative">
              <button onClick={handleCloseModal} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
                &times;
              </button>
              <CarDetails car={selectedCar} />
            </div>
          </div>
        )}
      </>
    </HelmetProvider>
  );
};

export default Inventory;