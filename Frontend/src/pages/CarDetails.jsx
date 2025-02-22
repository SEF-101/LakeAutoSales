import React from 'react';

const CarDetails = ({ car }) => {
  if (!car) {
    return <div>No car details found</div>;
  }

  // prevent array error
  const features = Array.isArray(car.features) ? car.features : [];

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-6">{car.make} {car.model}</h1>
      <div className="flex flex-col md:flex-row">
        <img src={car.imageUrl} alt={`${car.make} ${car.model}`} className="w-full md:w-1/2 h-auto object-cover" />
        <div className="p-4">
          <p className="text-lg">Year: {car.year}</p>
          <p className="text-lg">Price: ${car.price}</p>
          <p className="text-lg">Mileage: {car.mileage} miles</p>
          <p className="text-lg">Color: {car.color}</p>
          <p className="text-lg">Transmission: {car.transmission}</p>
          <p className="text-lg">Description: {car.description}</p>
          <p className="text-lg">Features: {features.join(', ')}</p>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;