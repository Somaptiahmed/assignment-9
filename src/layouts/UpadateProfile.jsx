

// import React, { useContext, useState } from 'react';
// import { AuthContext } from '../provider/AuthProvider';
// import { useNavigate } from 'react-router-dom';
// import Navbar from '../components/Navbar';

// const UpdateProfile = () => {
//   const { user, updateUserProfile } = useContext(AuthContext);
//   const [newName, setNewName] = useState(user?.displayName || '');
//   const [newPhoto, setNewPhoto] = useState(user?.photoURL || '');
//   const navigate = useNavigate();
  

//   // Handle saving changes
//   const handleSave = async () => {
//     try {
//       // Update the profile using context method
//       await updateUserProfile(newName, newPhoto);
//       // Redirect to the profile page after successful update
//       navigate('/my-profile');
//     } catch (error) {
//       console.error('Error updating profile:', error);
//     }
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     handleSave();
//   };

//   // If the user is not logged in, redirect to login
//   if (!user) {
//     navigate('/login');
//     return null;
//   }

//   return (
//     <div className="min-h-screen mt-20 mx-auto">
//       <Navbar />
//       <div className="flex justify-center items-center">
//         <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
//           <h2 className="text-3xl font-bold text-center pt-9">Update Your Profile</h2>
//           <form onSubmit={handleSubmit} className="card-body">
//             <div className="form-control">
//               <label className="label">Name</label>
//               <input
//                 type="text"
//                 value={newName}
//                 onChange={(e) => setNewName(e.target.value)}
//                 className="input input-bordered"
//                 required
//               />
//             </div>

//             <div className="form-control mt-4">
//               <label className="label">Photo URL</label>
//               <input
//                 type="text"
//                 value={newPhoto}
//                 onChange={(e) => setNewPhoto(e.target.value)}
//                 className="input input-bordered"
//               />
//             </div>

//             <div className="form-control mt-6">
//               <button type="submit" className="btn btn-primary w-full">
//                 Save Changes
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UpdateProfile;


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
    // Redirect to login if user is not available
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  // Handle saving changes
  const handleSave = async () => {
    try {
      await updateUserProfile(newName, newPhoto); // Update the user's profile
      navigate('/profile'); // Redirect to "My Profile" after success
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  // Handle form submission
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
