import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
    const navigate = useNavigate(); // Hook to navigate to different routes

    const goHome = () => {
        navigate("/"); // Navigate to the home page
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold text-red-500">404 - Not Found</h1>
            <p className="text-xl text-gray-700 mt-4">Oops! The page you are looking for does not exist.</p>
            <button
                onClick={goHome}
                className="mt-6 px-6 py-2 bg-blue-500 text-white text-lg rounded hover:bg-blue-600"
            >
                Go Back to Home
            </button>
        </div>
    );
};

export default ErrorPage;
