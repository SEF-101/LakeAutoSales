import React, { useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const Inventory = () => {
  const [inventory, setInventory] = useState([]);

  const getInventory = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "carInventory"));
      const inventoryData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setInventory(inventoryData);
    } catch (error) {
      console.error("Error fetching inventory: ", error);
    }
  };

  useEffect(() => {
    getInventory();
  }, []);

  return (
    <HelmetProvider>
      <>
        <Helmet>
          <title>Lakes Auto Sales | Inventory</title>
        </Helmet>
        <div>
          <div>
            {inventory.length > 0 ? (
              inventory.map((item) => (
                <div key={item.id}>
                  <h2>{item.make} {item.model}</h2>
                  <p>Year: {item.year}</p>
                  <p>Price: ${item.price}</p>
                  <p>Mileage: {item.mileage} miles</p>
                  <p>Color: {item.color}</p>
                  <p>Transmission: {item.transmission}</p>
                  <p>Description: {item.description}</p>
                  <p>Features: {item.features?.join(", ")}</p>
                  <div>
                    {item.imageUrls?.length > 0 ? (
                      item.imageUrls.map((image, index) => (
                        <img key={index} src={image.url} alt={image.description || "Car Image"} />
                      ))
                    ) : (
                      <p>No images available</p>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <p>Loading inventory...</p>
            )}
          </div>
        </div>
      </>
    </HelmetProvider>
  );
};

export default Inventory;
