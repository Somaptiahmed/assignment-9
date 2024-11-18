

// import { useContext, useState } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { AuthContext } from "../provider/AuthProvider";

// const Login = () => {
//   const { userLogin, googleLogin } = useContext(AuthContext); // Auth context
//   const [error, setError] = useState(null);
//   const location = useLocation();
//   const navigate = useNavigate();

//   // Handle form-based login
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const email = form.email.value;
//     const password = form.password.value;

//     try {
//       await userLogin(email, password);
//       const redirectTo = location.state?.from?.pathname || "/";
//       navigate(redirectTo, { replace: true });
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   // Handle Google login
//   const handleGoogleLogin = async () => {
//     try {
//       await googleLogin();
//       const redirectTo = location.state?.from?.pathname || "/";
//       navigate(redirectTo, { replace: true });
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   return (
//     <div className="min-h-screen flex justify-center items-center bg-gray-100">
//       <div className="card bg-white w-full max-w-md p-10 shadow-lg rounded">
//         <h2 className="text-3xl font-bold text-center mb-4">Login to Your Account</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="form-control mb-4">
//             <label className="label font-semibold text-xl">Email</label>
//             <input
//               name="email"
//               type="email"
//               placeholder="Enter your email"
//               className="input input-bordered w-full"
//               required
//             />
//           </div>
//           <div className="form-control mb-4">
//             <label className="label font-semibold text-xl">Password</label>
//             <input
//               name="password"
//               type="password"
//               placeholder="Enter your password"
//               className="input input-bordered w-full"
//               required
//             />
//           </div>
//           {error && <p className="text-red-500 text-center mb-4">{error}</p>}
//           <div className="form-control mt-4">
//             <button type="submit" className="btn btn-primary w-full">
//               Login
//             </button>
//           </div>
//         </form>
//         <div className="divider mt-6">OR</div>
//         <div className="form-control">
//           <button
//             onClick={handleGoogleLogin}
//             className="btn btn-outline w-full"
//           >
//             Continue with Google
//           </button>
//         </div>
//         <p className="text-center mt-6">
//           Don`t have an account?{" "}
//           <Link to="/auth/register" className="text-red-700 underline font-semibold">
//             Register
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;



import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const { userLogin, googleLogin } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const emailValue = form.email.value;
    const password = form.password.value;

    try {
      await userLogin(emailValue, password);
      const redirectTo = location.state?.from?.pathname || "/";
      navigate(redirectTo, { replace: true });
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await googleLogin();
      const redirectTo = location.state?.from?.pathname || "/";
      navigate(redirectTo, { replace: true });
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="card bg-white w-full max-w-md p-10 shadow-lg rounded">
        <h2 className="text-3xl font-bold text-center mb-4">Login to Your Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-control mb-4">
            <label className="label font-semibold text-xl">Email</label>
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-control mb-4">
            <label className="label font-semibold text-xl">Password</label>
            <input
              name="password"
              type="password"
              placeholder="Enter your password"
              className="input input-bordered w-full"
              required
            />
          </div>
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          <div className="form-control mt-4">
            <button type="submit" className="btn btn-primary w-full">
              Login
            </button>
          </div>
        </form>
        <p className="text-center mt-4">
          <Link
            to={`/auth/forgot-password?email=${encodeURIComponent(email)}`}
            className="text-blue-500 underline"
          >
            Forgot Password?
          </Link>
        </p>
        <div className="divider mt-6">OR</div>
        <div className="form-control">
          <button onClick={handleGoogleLogin} className="btn btn-outline w-full">
            Continue with Google
          </button>
        </div>
        <p className="text-center mt-6">
          Don`t have an account?{" "}
          <Link to="/auth/register" className="text-red-700 underline font-semibold">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
