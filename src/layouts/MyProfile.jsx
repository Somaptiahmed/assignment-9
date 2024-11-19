


import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import Navbar from '../components/Navbar';

const MyProfile = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleUpdateProfile = () => {
    navigate('/update');
  };

  if (!user) {
    return <h2 className="text-center mt-20">Please log in to view your profile.</h2>;
  }

  return (
    <div className="min-h-screen w-11/12 mx-auto mt-20">
      <Navbar />
      <div className="card bg-base-100 w-full max-w-lg mx-auto mt-10 p-10">
        <h2 className="text-3xl font-bold text-center">
          Welcome, {user.displayName || 'User'}!
        </h2>
        <div className="text-center mt-6">
          <img
            src={user.photoURL || 'https://via.placeholder.com/150'}
            alt="User Photo"
            className="w-32 h-32 rounded-full mx-auto"
          />
          <p className="mt-4 text-xl font-semibold">
            Name: {user.displayName || 'No name set'}
          </p>
          <p className="mt-2 text-xl">Email: {user.email}</p>
        </div>
        <div className="form-control mt-6">
          <button
            onClick={handleUpdateProfile}
            className="btn btn-primary w-full"
          >
            Update Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
