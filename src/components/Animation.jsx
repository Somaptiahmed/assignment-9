

// import React from 'react';
// import "./Animation.css"
// import { Link } from 'react-router-dom';
// const Animation = () => {
//   return (
//     <div className="text-center mt-20 py-10">
//       <h2 className="text-green-700 text-3xl font-bold pt-10">
//         Do you love adventures?
//       </h2>
//       <p className="text-gray-600 text-2xl font-semibold">
//         Come and join us on an unforgettable journey!
//       </p>

//       {/* Animation Container */}
//       <div className="animation-mountain">
//         {/* Mountain */}
//         <div className="mountain">
//           <div className="mountain-top"></div>
//         </div>

//         {/* Trekker */}
//         <div className="trekker"></div>
//       </div>
//       <Link to="/auth/facebook"  className='btn w-24 h-11 bg-green-800 text-white'>JOIN US</Link>
//     </div>
//   );
// };

// export default Animation;


import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithPopup, FacebookAuthProvider } from 'firebase/auth';
import './Animation.css';

const Animation = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  const facebookProvider = new FacebookAuthProvider();

  // Function to handle Facebook login
  const handleFacebookLogin = async () => {
    try {
      const result = await signInWithPopup(auth, facebookProvider);
      const user = result.user;

      console.log('Logged in user:', user); // You can use this to log the user data

      // Redirect after successful login
      navigate('/'); // Redirect to home page or any other page after successful login
    } catch (error) {
      console.error('Error during Facebook login:', error);
      alert('Login failed. Please try again.');
    }
  };

  return (
    <div className="text-center mt-20 py-10">
      <h2 className="text-green-700 text-3xl font-bold pt-10">
        Do you love adventures?
      </h2>
      <p className="text-gray-600 text-2xl font-semibold">
        Come and join us on an unforgettable journey!
      </p>

      {/* Animation Container */}
      <div className="animation-mountain">
        {/* Mountain */}
        <div className="mountain">
          <div className="mountain-top"></div>
        </div>

        {/* Trekker */}
        <div className="trekker"></div>
      </div>

      {/* Facebook Login Button */}
      <button onClick={handleFacebookLogin} className="btn w-24 h-11 bg-green-800 text-white">
        JOIN US
      </button>
    </div>
  );
};

export default Animation;
