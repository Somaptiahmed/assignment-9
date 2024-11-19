


import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const UpdateProfile = () => {
  const { user, updateUserProfile } = useContext(AuthContext);
  const [newName, setNewName] = useState(user?.displayName || '');
  const [newPhoto, setNewPhoto] = useState(user?.photoURL || '');
  const navigate = useNavigate();

  
  useEffect(() => {
    if (!user) {
      navigate('/auth/login');
    }
  }, [user, navigate]);

 
  const handleSave = async () => {
    try {
      await updateUserProfile({ displayName: newName, photoURL: newPhoto }); 
      navigate('/profile'); 
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSave();
  };

  return (
    <div className="min-h-screen w-11/12 mt-20 mx-auto">
      <Navbar />
      <div className="flex justify-center items-center">
        <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
          <h2 className="text-3xl font-bold text-center pt-9">Update Your Profile</h2>
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">Name</label>
              <input
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-4">
              <label className="label">Photo URL</label>
              <input
                type="text"
                value={newPhoto}
                onChange={(e) => setNewPhoto(e.target.value)}
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary w-full">
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
