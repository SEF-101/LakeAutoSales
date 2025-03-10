import React from "react";
import { Card, Button } from "flowbite-react";
import { Plus } from "lucide-react";

const AllListingsCard = () => {
  return (
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

      <div className="flex justify-between">
        <div className="flex-1 p-4 text-center cursor-pointer">
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Drafted Listings
          </p>
          <p className="text-7xl font-bold text-gray-900 dark:text-white">10</p>
        </div>
        <div className="w-px bg-gray-600"></div>
        <div className="flex-1 p-4 text-center cursor-pointer">
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Active Listings
          </p>
          <p className="text-7xl font-bold text-gray-900 dark:text-white">20</p>
        </div>
        <div className="w-px bg-gray-600"></div>
        <div className="flex-1 p-4 text-center cursor-pointer">
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Past Listings
          </p>
          <p className="text-7xl font-bold text-gray-900 dark:text-white">5</p>
        </div>
      </div>
    </Card>
  );
};

export default AllListingsCard;
