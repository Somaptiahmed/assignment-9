// import React from 'react';

// const Animation = () => {
//     return (
//         <div className='text-center my-20'>
//             <h2 className='text-green-700 text-3xl font-bold'>Do you love adventures?</h2>
//             <p className='text-gray-600 text-2xl font-semibold'>Come and join us on an unforgettable journey!</p>

//         </div>
//     );
// };

// export default Animation;


import React from 'react';
import "./Animation.css"
const Animation = () => {
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
    </div>
  );
};

export default Animation;
