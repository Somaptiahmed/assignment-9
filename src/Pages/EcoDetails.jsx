import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';


// Fetch trek data from Mountain_Treks.json
const EcoDetails = () => {
  const { id } = useParams(); // Get trek ID from URL params
  const [trekDetails, setTrekDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from Mountain_Treks.json (make sure to update the path based on where the file is stored)
    fetch('/public/Mountain_Treks..json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        // Find the trek with the matching ID
        const trek = data.find((trek) => trek.ID === id);
        if (trek) {
          setTrekDetails(trek);
        } else {
          setError('Trek not found.');
        }
      })
      .catch((error) => {
        setError('Failed to fetch trek data.');
      })
      .finally(() => {
        setLoading(false); // Set loading state to false after fetch
      });
  }, [id]); // Re-run effect when `id` changes

  // Show loading while the data is being fetched
  if (loading) {
    return <p>Loading...</p>;
  }

  // Show error message if no trek is found or there is an issue fetching data
  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
   

<div className="my-11 w-9/12 mx-auto">
      <h1 className="text-3xl font-bold text-center text-blue-800 mb-5">{trekDetails.AdventureTitle}</h1>
      <img
        src={trekDetails.Image}
        alt={trekDetails.AdventureTitle}
        className="w-full lg:h-[700px] object-cover rounded-md mb-4"
      />
      <div className=" text-lg text-gray-700 mb-4">
        <strong>Category:</strong> {trekDetails.CategoryName}
      </div>
      <div className=" text-lg text-gray-700 mb-4">
        <strong>Location:</strong> {trekDetails.Location}
      </div>
      <div className=" text-lg text-gray-700 mb-4">
        <strong>Duration:</strong> {trekDetails.Duration}
      </div>
      <div className=" text-lg text-gray-700 mb-4">
        <strong>Adventure Level:</strong> {trekDetails.AdventureLevel}
      </div>
      <div className=" -lg text-gray-700 mb-4">
        <strong>Cost:</strong> ${trekDetails.AdventureCost}
      </div>
      <div className=" text-lg text-gray-700 mb-4">
        <strong>Booking Availability:</strong> {trekDetails.BookingAvailability}
      </div>
      <div className=" text-lg text-gray-700 mb-4">
        <strong>Included Items:</strong>
        <ul className="list-disc ml-5">
          {trekDetails.IncludedItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div className=" text-lg text-gray-700 mb-4">
        <strong>Eco-Friendly Features:</strong>
        <ul className="list-disc ml-5">
          {trekDetails.EcoFriendlyFeatures.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
      <div className=" text-lg text-gray-700 mb-4">
        <strong>Max Group Size:</strong> {trekDetails.MaxGroupSize}
      </div>
      <div className=" text-lg text-gray-700 mb-4">
        <strong>Special Instructions:</strong>
        <ul className="list-disc ml-5">
          {trekDetails.SpecialInstructions.map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))}
        </ul>
      </div>
      <Link to="/auth/expert" className="text-white btn text-xl font-semibold btn-primary font-semibold">
            Talk with Expert
          </Link>
    </div>
    
  );
};

export default EcoDetails;

