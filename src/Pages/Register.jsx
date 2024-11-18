

import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { updateProfile } from 'firebase/auth'; // Import the updateProfile function

const Register = () => {
  const { createNewUser, setUser, googleLogin } = useContext(AuthContext);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const validatePassword = (password) => {
    if (password.length < 6) {
      return 'Password must be at least 6 characters long.';
    }
    if (!/[A-Z]/.test(password)) {
      return 'Password must include at least one uppercase letter.';
    }
    if (!/[a-z]/.test(password)) {
      return 'Password must include at least one lowercase letter.';
    }
    return '';
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    const errorMessage = validatePassword(newPassword);
    setError(errorMessage);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get('name');
    const email = form.get('email');
    const photo = form.get('photo');
    const password = form.get('password');
    console.log({ name, email, photo, password });

    try {
      // Create the user
      const result = await createNewUser(email, password);
      const user = result.user;

      // Update the user's profile with display name and photo URL
      await updateProfile(user, {
        displayName: name,
        photoURL: photo,
      });

      // Reload the user data after profile update
      await user.reload();

      // Update user in context
      setUser(user);
      alert('Registration successful!');
      navigate('/'); // Redirect to the homepage or desired page

    } catch (error) {
      // Handle registration or profile update errors
      console.error('Error during registration:', error);
      setError('Registration failed. Please check your credentials or try again.');
    }
  };

  // Handle Google login
  const handleGoogleLogin = async () => {
    try {
      await googleLogin();
      const redirectTo = location.state?.from?.pathname || '/';
      navigate(redirectTo, { replace: true });
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
        <h2 className="text-3xl font-bold text-center pt-9">Register Your Account</h2>
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl font-semibold">Your Name</span>
            </label>
            <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl font-semibold">Email</span>
            </label>
            <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl font-semibold">Photo URL</span>
            </label>
            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl font-semibold">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className={`input input-bordered ${error ? 'border-red-500' : ''}`}
              value={password}
              onChange={handlePasswordChange}
              required
            />
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          </div>

          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary" disabled={!!error}>
              Register
            </button>
          </div>

          <div className="divider mt-6">OR</div>

          <div className="form-control">
            <button onClick={handleGoogleLogin} className="btn btn-outline w-full">
              Continue with Google
            </button>
          </div>
        </form>

        <p className="text-center font-semibold">
          Already have an account?{' '}
          <Link to="/auth/login" className="text-red-700 font-semibold underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;








