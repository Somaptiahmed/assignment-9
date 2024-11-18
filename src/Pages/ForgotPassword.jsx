// import React, { useEffect, useState } from "react";
// import { useNavigate, useSearchParams } from "react-router-dom";

// const ForgotPassword = () => {
//   const [email, setEmail] = useState("");
//   const navigate = useNavigate();
//   const [searchParams] = useSearchParams();

//   useEffect(() => {
//     const emailFromParams = searchParams.get("email");
//     if (emailFromParams) {
//       setEmail(decodeURIComponent(emailFromParams));
//     }
//   }, [searchParams]);

//   const handleReset = (e) => {
//     e.preventDefault();
//     // Simulate redirecting the user to Gmail
//     window.location.href = "https://mail.google.com";
//   };

//   return (
//     <div className="min-h-screen flex justify-center items-center bg-gray-100">
//       <div className="card bg-white w-full max-w-md p-10 shadow-lg rounded">
//         <h2 className="text-3xl font-bold text-center mb-4">Reset Password</h2>
//         <form onSubmit={handleReset}>
//           <div className="form-control mb-4">
//             <label className="label font-semibold text-xl">Email</label>
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="input input-bordered w-full"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-control mt-4">
//             <button type="submit" className="btn btn-primary w-full">
//               Reset Password
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ForgotPassword;

import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const emailFromParams = searchParams.get("email");
    if (emailFromParams) {
      setEmail(decodeURIComponent(emailFromParams));
    }
  }, [searchParams]);

  const handleReset = (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (newPassword.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    // Simulate a successful reset and redirect to Gmail
    setMessage("Password successfully reset! Redirecting to Gmail...");
    setError("");
    setTimeout(() => {
      window.location.href = "https://mail.google.com";
    }, 2000); // Redirect after 2 seconds
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="card bg-white w-full max-w-md p-10 shadow-lg rounded">
        <h2 className="text-3xl font-bold text-center mb-4">Reset Password</h2>
        {message && <p className="text-green-500 text-center mb-4">{message}</p>}
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleReset}>
          <div className="form-control mb-4">
            <label className="label font-semibold text-xl">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-control mb-4">
            <label className="label font-semibold text-xl">New Password</label>
            <input
              type="password"
              placeholder="Enter your new password"
              className="input input-bordered w-full"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-control mb-4">
            <label className="label font-semibold text-xl">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm your new password"
              className="input input-bordered w-full"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-control mt-4">
            <button type="submit" className="btn btn-primary w-full">
              Reset Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
