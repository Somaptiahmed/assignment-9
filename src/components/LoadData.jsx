import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LoadData = () => {
    const [treks, setTreks] = useState([]);

    useEffect(() => {
        // Fetch the data from the local JSON file
        fetch("/public/Mountain_Treks..json")
    .then((response) => {
        console.log("Response status:", response.status);
        console.log("Response headers:", response.headers);
        return response.text(); // Temporarily use `.text()` to inspect the response
    })
    .then((data) => {
        console.log("Raw response data:", data);
        setTreks(JSON.parse(data)); // Manually parse the JSON
    })
    .catch((error) => console.error("Error loading data:", error));

    }, []);
    

    return (
        <div className="my-11">
            <h1 className="text-3xl font-bold text-center text-blue-800 mb-5">
                Mountain Treks
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                {treks.map((trek) => (
                    <div key={trek.ID} className="border rounded-lg shadow-md p-5 bg-white">
                        <h2 className="text-xl font-bold text-blue-700">
                            {trek.AdventureTitle}
                        </h2>
                        <img
                            src={trek.Image}
                            alt={trek.AdventureTitle}
                            className="w-full h-48 object-cover rounded-md mb-4"
                        />
                        <div className="text-sm text-gray-500 mt-1">
                            <strong>Eco-Friendly Features:</strong>
                            <ul className="list-disc ml-5 mb-3">
                                {trek.EcoFriendlyFeatures.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                        </div>
                        <Link to={`/eco/${trek.ID}`} className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 ">
                            Explore Now
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LoadData;


