import React, { useState } from "react";
import { Card, Button } from "flowbite-react";
import { Plus } from "lucide-react";

const sampleListings = {
  drafted: [
    { _id: 1, make: "Honda", model: "Accord", year: "2020", price: "22500", mileage: "30,000", imageUrl: "https://via.placeholder.com/300" },
    { _id: 2, make: "Toyota", model: "Camry", year: "2019", price: "21000", mileage: "40,000", imageUrl: "https://via.placeholder.com/300" },
  ],
  active: [
    { _id: 3, make: "Ford", model: "Mustang", year: "2022", price: "35000", mileage: "10,000", imageUrl: "https://via.placeholder.com/300" },
    { _id: 4, make: "Tesla", model: "Model 3", year: "2023", price: "42500", mileage: "5,000", imageUrl: "https://via.placeholder.com/300" },
  ],
  past: [
    { _id: 5, make: "Chevrolet", model: "Malibu", year: "2018", price: "18000", mileage: "50,000", imageUrl: "https://via.placeholder.com/300" },
    { _id: 6, make: "Nissan", model: "Altima", year: "2017", price: "15500", mileage: "60,000", imageUrl: "https://via.placeholder.com/300" },
  ],
};

const AllListingsCard = () => {
  const [selectedCategory, setSelectedCategory] = useState("active");

  return (
    <div className="space-y-6">
      {/* Main Listings Card */}
      <Card>
        <div className="flex items-center w-full relative">
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              All Current Listings
            </h5>
          </div>
          <Button gradientMonochrome="info" className="ml-auto">
            <Plus className="mr-2 h-5 w-5" /> New Car
          </Button>
        </div>

        {/* Category Selection */}
        <div className="flex justify-between">
          {["drafted", "active", "past"].map((category) => (
            <div
              key={category}
              className={`flex-1 p-4 text-center cursor-pointer transition-colors ${
                selectedCategory === category
                  ? "bg-blue-900 text-white"
                  : "hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              <p className="font-normal text-gray-700 dark:text-gray-400 capitalize">
                {category} Listings
              </p>
              <p className="text-7xl font-bold text-gray-900 dark:text-white">
                {sampleListings[category].length}
              </p>
            </div>
          ))}
        </div>
      </Card>

      {/* Car Listings Below */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sampleListings[selectedCategory].map((car) => (
          <Card key={car._id} className="cursor-pointer">
            <img
              src={car.imageUrl}
              alt={`${car.make} ${car.model}`}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">
                {car.make} {car.model}
              </h2>
              <p className="text-gray-700 dark:text-gray-400">Year: {car.year}</p>
              <p className="text-gray-700 dark:text-gray-400">Price: ${car.price}</p>
              <p className="text-gray-700 dark:text-gray-400">Mileage: {car.mileage} miles</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AllListingsCard;
