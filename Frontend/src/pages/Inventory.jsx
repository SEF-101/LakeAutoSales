import React, { useState, useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Card } from "flowbite-react";
import CarDetails from "../components/CarDetailsModal";
import InventoryTitleCard from "../components/InventoryTitleCard";

const Inventory = () => {
  const [selectedCar, setSelectedCar] = useState(null);
  const [inventory, setInventory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
          <InventoryTitleCard />
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {inventory.map((car) => (
              <Card
                key={car._id}
                onClick={() => handleCarClick(car)}
                className="cursor-pointer"
              >
                <img
                  src={car.imageUrl}
                  alt={`${car.make} ${car.model}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold">
                    {car.make} {car.model}
                  </h2>
                  <p className="text-gray-700 dark:text-gray-400">
                    Year: {car.year}
                  </p>
                  <p className="text-gray-700 dark:text-gray-400">
                    Price: ${car.price}
                  </p>
                  <p className="text-gray-700 dark:text-gray-400">
                    Mileage: {car.mileage} miles
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
        {selectedCar && (
          <CarDetails car={selectedCar} isOpen={true} onClose={handleCloseModal} />
        )}
      </>
    </HelmetProvider>
  );
};

export default Inventory;