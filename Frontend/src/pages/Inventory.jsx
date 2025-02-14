import React, { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";

const fakeInventory = Array.from({ length: 20 }, (_, i) => ({
  id: i.toString(),
  make: ["Toyota", "Honda", "Ford", "BMW", "Mercedes"][i % 5],
  model: ["Camry", "Civic", "Mustang", "X5", "C-Class"][i % 5],
  year: 2015 + (i % 10),
  price: (20000 + i * 1000).toLocaleString(),
  mileage: (50000 - i * 2000).toLocaleString(),
  color: ["Red", "Blue", "Black", "White", "Gray"][i % 5],
  transmission: i % 2 === 0 ? "Automatic" : "Manual",
  description: "A great car with excellent features and performance.",
  features: ["Bluetooth", "Backup Camera", "Sunroof", "Leather Seats"][i % 4],
  imageUrl: `https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
}));

const Inventory = () => {
  return (
    <HelmetProvider>
      <>
        <Helmet>
          <title>Lakes Auto Sales | Inventory</title>
        </Helmet>
        <div className="container mx-auto p-4">
          <h1 className="text-3xl font-bold text-center mb-6">Our Inventory!</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {fakeInventory.map((car) => (
              <Link to={`/car/${car.id}`} key={car.id} className="bg-slate-700 shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition">
                <img src={car.imageUrl} alt={`${car.make} ${car.model}`} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h2 className="text-xl font-semibold">{car.make} {car.model}</h2>
                  <p className="text-white">Year: {car.year}</p>
                  <p className="text-white">Price: ${car.price}</p>
                  <p className="text-white">Mileage: {car.mileage} miles</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </>
    </HelmetProvider>
  );
};

export default Inventory;
