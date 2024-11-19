

// import { Link, useNavigate } from "react-router-dom";
// import { AuthContext } from "../provider/AuthProvider";
// import { useContext, useState } from "react";



// const Register = () => {
//   const { createNewUser, setUser, updateUserProfile } = useContext(AuthContext);
//   const navigate = useNavigate();
//   const [error, setError] = useState({});
//   const [password, setPassword] = useState("");

//   const validatePassword = (password) => {
    
//         if (password.length < 6) {
//           return 'Password must be at least 6 characters long.';
//         }
//         if (!/[A-Z]/.test(password)) {
//           return 'Password must include at least one uppercase letter.';
//         }
//         if (!/[a-z]/.test(password)) {
//           return 'Password must include at least one lowercase letter.';
//         }
//         return '';
//       };
     
//       const handlePasswordChange = (e) => {
       
//         const newPassword = e.target.value;
//         setPassword(newPassword);
//         const errorMessage = validatePassword(newPassword);
//         setError(errorMessage);
//       };
     
      
     
      
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     //get form data
//     const form = new FormData(e.target);
//     const name = form.get("name");
//     if (name.length < 5) {
//       setError({ ...error, name: "name should be more then 5 character" });
//     }
   
//     const email = form.get("email");
//     const photo = form.get("photo");
//     const password = form.get("password");
  
//     createNewUser(email, password)
//       .then((result) => {
//         const user = result.user;
//         setUser(user);
//         updateUserProfile({ displayName: name, photoURL: photo })
//           .then(() => {
//             alert("Registration successful!");
//             navigate("/");
//           })
//           .catch((err) => {
//             console.log(err);
//           });
//       })
//       .catch((err) => {
//         console.log(err);
//         // ..
//       });
//   };

//   // Handle Google login
//   const handleGoogleLogin = async () => {
//     try {
//       await googleLogin();
//       const redirectTo = location.state?.from?.pathname || '/';
//       navigate(redirectTo, { replace: true });
//     } catch (err) {
//       setError(err.message);
//     }
//   };
//   return (
//     <div className="min-h-screen flex justify-center items-center">
//       <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
//         <h2 className="text-2xl font-semibold text-center">
//           Register your account
//         </h2>
//         <form onSubmit={handleSubmit} className="card-body">
//           <div className="form-control">
//             <label className="label">
//               <span className="label-text">Name</span>
//             </label>
//             <input
//               name="name"
//               type="text"
//               placeholder="name"
//               className="input input-bordered"
//               required
//             />
//           </div>
//           {error.name && (
//             <label className="label text-sx text-red-500">{error.name}</label>
//           )}

//           <div className="form-control">
//             <label className="label">
//               <span className="label-text">Photo URL</span>
//             </label>
//             <input
//               type="text"
//               name="photo"
//               placeholder="photo-url"
//               className="input input-bordered"
//               required
//             />
//           </div>
//           {/* email input  */}
//           <div className="form-control">
//             <label className="label">
//               <span className="label-text">Email</span>
//             </label>
//             <input
//               name="email"
//               type="email"
//               placeholder="email"
//               className="input input-bordered"
//               required
//             />
//           </div>

//           <div className="form-control">
//             <label className="label">
//               <span className="label-text">Password</span>
//             </label>
//             <input
//               name="password"
//               type="password"
//               placeholder="password"
//               className="input input-bordered"
//               onChange={handlePasswordChange}
//               required
//             />
            
//           </div>
//           {error.register && <label className="label">{error.register}</label>}


//           <div className="form-control mt-6">
//             <button className="btn btn-neutral rounded-none">Register</button>
//           </div>
//           <div className="divider mt-6">OR</div>
//           <div className="form-control">
//             <button onClick={handleGoogleLogin} className="btn btn-outline w-full">
//               Continue with Google
//             </button>
//           </div>
        
//         </form>
//         <p className="text-center font-semibold">
//           Already Have An Account ?{" "}
//           <Link className="text-red-500" to="/auth/login">
//             Login
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Register;


import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { useContext, useState } from "react";

const Register = () => {
  const { createNewUser, setUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [password, setPassword] = useState("");

  // Password validation logic
  const validatePassword = (password) => {
    const newErrors = {};

    if (password.length < 6) {
      newErrors.passwordLength = "• Password must be at least 6 characters long.";
    }
    if (!/[A-Z]/.test(password)) {
      newErrors.uppercase = "• Password must include at least one uppercase letter.";
    }
    if (!/[a-z]/.test(password)) {
      newErrors.lowercase = "• Password must include at least one lowercase letter.";
    }

    return newErrors;
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    // Validate password and update errors
    const validationErrors = validatePassword(newPassword);
    setErrors((prevErrors) => ({ ...prevErrors, ...validationErrors }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const name = form.get("name");
    const email = form.get("email");
    const photo = form.get("photo");
    const password = form.get("password");

    // Validate name
    if (name.length < 5) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: "• Name should be more than 5 characters.",
      }));
      return;
    }

    try {
      const result = await createNewUser(email, password);
      const user = result.user;
      setUser(user);

      // Update user profile
      await updateUserProfile({ displayName: name, photoURL: photo });
      alert("Registration successful!");
      navigate("/");
    } catch (err) {
      console.error(err);
      setErrors((prevErrors) => ({
        ...prevErrors,
        register: "• Registration failed. Please try again.",
      }));
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
        <h2 className="text-2xl font-semibold text-center">
          Register your account
        </h2>
        <form onSubmit={handleSubmit} className="card-body">
          {/* Name Input */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="Name"
              className="input input-bordered"
              required
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </div>

          {/* Photo URL Input */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Photo URL"
              className="input input-bordered"
              required
            />
          </div>

          {/* Email Input */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="input input-bordered"
              required
            />
          </div>

          {/* Password Input */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="Password"
              className="input input-bordered"
              value={password}
              onChange={handlePasswordChange}
              required
            />
            {/* Password Errors */}
            {Object.values(errors)
              .filter((err) => err.startsWith("• Password"))
              .map((err, index) => (
                <p key={index} className="text-red-500 text-sm">
                  {err}
                </p>
              ))}
          </div>

          {/* Submit Button */}
          <div className="form-control mt-6">
            <button className="btn btn-neutral rounded-none">Register</button>
          </div>
        </form>

        {/* Google Login */}
        <div className="divider mt-6">OR</div>
        <div className="form-control">
          <button className="btn btn-outline w-full">Continue with Google</button>
        </div>

        {/* Login Link */}
        <p className="text-center font-semibold mt-4">
          Already Have An Account?{" "}
          <Link className="text-red-500" to="/auth/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;



// import { Link, useNavigate } from "react-router-dom";
// import { AuthContext } from "../provider/AuthProvider";
// import { useContext, useState } from "react";



// const Register = () => {
//   const { createNewUser, setUser, updateUserProfile } = useContext(AuthContext);
//   const navigate = useNavigate();
//   const [error, setError] = useState({});

//   const validatePassword = (password) => {
//         if (password.length < 6) {
//           return 'Password must be at least 6 characters long.';
//         }
//         if (!/[A-Z]/.test(password)) {
//           return 'Password must include at least one uppercase letter.';
//         }
//         if (!/[a-z]/.test(password)) {
//           return 'Password must include at least one lowercase letter.';
//         }
//         return '';
//       };

      
//       const handlePasswordChange = (e) => {
//         const newPassword = e.target.value;
//         setPassword(newPassword);
//         const errorMessage = validatePassword(newPassword);
//         setError(errorMessage);
//       };
      
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     //get form data
//     const form = new FormData(e.target);
//     const name = form.get("name");
//     if (name.length < 5) {
//       setError({ ...error, name: "name should be more then 5 character" });
//     }
//     const email = form.get("email");
//     const photo = form.get("photo");
//     const password = form.get("password");
  
//     createNewUser(email, password)
//       .then((result) => {
//         const user = result.user;
//         setUser(user);
//         updateUserProfile({ displayName: name, photoURL: photo })
//           .then(() => {
//             alert("Registration successful!");
//             navigate("/");
//           })
//           .catch((err) => {
//             console.log(err);
//           });
//       })
//       .catch((err) => {
//         console.log(err);
//         // ..
//       });
//   };

//   // Handle Google login
//   const handleGoogleLogin = async () => {
//     try {
//       await googleLogin();
//       const redirectTo = location.state?.from?.pathname || '/';
//       navigate(redirectTo, { replace: true });
//     } catch (err) {
//       setError(err.message);
//     }
//   };
//   return (
//     <div className="min-h-screen flex justify-center items-center">
//       <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
//         <h2 className="text-2xl font-semibold text-center">
//           Register your account
//         </h2>
//         <form onSubmit={handleSubmit} className="card-body">
//           <div className="form-control">
//             <label className="label">
//               <span className="label-text">Name</span>
//             </label>
//             <input
//               name="name"
//               type="text"
//               placeholder="name"
//               className="input input-bordered"
//               required
//             />
//           </div>
//           {error.name && (
//             <label className="label text-sx text-red-500">{error.name}</label>
//           )}

//           <div className="form-control">
//             <label className="label">
//               <span className="label-text">Photo URL</span>
//             </label>
//             <input
//               type="text"
//               name="photo"
//               placeholder="photo-url"
//               className="input input-bordered"
//               required
//             />
//           </div>
//           {/* email input  */}
//           <div className="form-control">
//             <label className="label">
//               <span className="label-text">Email</span>
//             </label>
//             <input
//               name="email"
//               type="email"
//               placeholder="email"
//               className="input input-bordered"
//               required
//             />
//           </div>

//           <div className="form-control">
//             <label className="label">
//               <span className="label-text">Password</span>
//             </label>
//             <input
//               name="password"
//               type="password"
//               placeholder="password"
//               className="input input-bordered"
//               onChange={handlePasswordChange}
//               required
//             />
            
//           </div>
//           {error.register && <label className="label">{error.register}</label>}


//           <div className="form-control mt-6">
//             <button className="btn btn-neutral rounded-none">Register</button>
//           </div>
//           <div className="divider mt-6">OR</div>
//           <div className="form-control">
//             <button onClick={handleGoogleLogin} className="btn btn-outline w-full">
//               Continue with Google
//             </button>
//           </div>
        
//         </form>
//         <p className="text-center font-semibold">
//           Already Have An Account ?{" "}
//           <Link className="text-red-500" to="/auth/login">
//             Login
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Register;


