import React, { useState, useEffect } from "react";
import NewCarModal from "./NewCarModal";
import { Card, Button } from "flowbite-react";
import { Plus } from "lucide-react";

const API_URL = "http://localhost:5000/api/vehicles/state"; // Base API endpoint

const AllListingsCard = () => {
  const [selectedCategory, setSelectedCategory] = useState("active");
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [listingCounts, setListingCounts] = useState({
    drafted: 0,
    active: 0,
    past: 0,
  });

  const refreshListings = () => {
    console.log("Refreshing listings after adding a new car...");
  };

  // Fetch vehicles for the selected category
  const fetchListings = async (category) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${API_URL}/${category}`);
      if (!response.ok) throw new Error("Failed to fetch vehicles.");

      const data = await response.json();
      setListings(data);
    } catch (err) {
      setError(err.message);
      setListings([]);
    } finally {
      setLoading(false);
    }
  };

  // Fetch total counts for all categories once
  const fetchCounts = async () => {
    try {
      const categories = ["drafted", "active", "past"];
      const counts = {};

      for (const category of categories) {
        const response = await fetch(`${API_URL}/${category}`);
        if (!response.ok) throw new Error(`Failed to fetch ${category} count`);

        const data = await response.json();
        counts[category] = data.length;
      }

      setListingCounts(counts);
    } catch (error) {
      console.error("Error fetching counts:", error);
    }
  };

  // Fetch listings when category changes
  useEffect(() => {
    fetchListings(selectedCategory);
  }, [selectedCategory]);

  // Fetch counts only once when the component loads
  useEffect(() => {
    fetchCounts();
  }, []);

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
          <Button gradientMonochrome="info" className="ml-auto" onClick={() => setIsModalOpen(true)}>
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
                  ? "bg-blue-800 text-white"
                  : "hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              <p className="font-normal text-gray-700 dark:text-gray-400 capitalize">
                {category} Listings
              </p>
              <p className="text-7xl font-bold text-gray-900 dark:text-white">
                {listingCounts[category]} {/* Number stays fixed */}
              </p>
            </div>
          ))}
        </div>
      </Card>

      {/* Loading State */}
      {loading && <p className="text-center text-lg font-semibold">Loading vehicles...</p>}

      {/* Error State */}
      {error && <p className="text-center text-red-500">{error}</p>}

      {/* Car Listings Below */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {listings.length > 0 ? (
          listings.map((car) => (
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
          ))
        ) : (
          !loading && <p className="text-center text-lg">No listings found.</p>
        )}
      </div>
      <NewCarModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onCarAdded={refreshListings} />
    </div>
  );
};

export default AllListingsCard;
