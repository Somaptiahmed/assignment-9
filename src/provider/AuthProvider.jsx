

// import { createContext, useEffect, useState } from "react";
// import app from "../firebase/firebase.config";
// import {
//   createUserWithEmailAndPassword,
//   getAuth,
//   onAuthStateChanged,
//   signInWithEmailAndPassword,
//   signInWithPopup,
//   signOut,
//   updateProfile,
// } from "firebase/auth";
// import { GoogleAuthProvider } from "firebase/auth";

// // Initialize Firebase Authentication
// const auth = getAuth(app);

// // Initialize Google Authentication Provider
// const googleProvider = new GoogleAuthProvider();

// // Create context
// export const AuthContext = createContext();

// // AuthProvider component
// const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // Google login function
//   const googleLogin = async () => {
//     try {
//       setLoading(true);
//       const result = await signInWithPopup(auth, googleProvider);
//       const loggedInUser = result.user;
//       setUser(loggedInUser);
//       setLoading(false);
//       return loggedInUser;
//     } catch (error) {
//       setLoading(false);
//       console.error("Google Login Error:", error.message);
//       throw error;
//     }
//   };

//   // Register new user with email, password, name, and photo
//   const createNewUser = (email, password, name, photo) => {
//     setLoading(true);
//     return createUserWithEmailAndPassword(auth, email, password)
//       .then((result) => {
//         const user = result.user;

//         // Sign in the user immediately after registration
//         return signInWithEmailAndPassword(auth, email, password)
//           .then(() => {
//             // After signing in, update the user's profile
//             return updateProfile(user, {
//               displayName: name,
//               photoURL: photo,
//             }).then(() => {
//               // Set the updated user data in the context after both sign-in and profile update
//               setUser({
//                 ...user,
//                 displayName: name,
//                 photoURL: photo,
//               });
//               setLoading(false);
//             });
//           });
//       })
//       .catch((error) => {
//         setLoading(false);
//         console.error("Error creating user:", error.message);
//         throw error;
//       });
//   };

//   // Login function with email and password
//   const userLogin = (email, password) => {
//     setLoading(true);
//     return signInWithEmailAndPassword(auth, email, password);
//   };

//   // Logout function
//   const logOut = async () => {
//     setLoading(true);
//     await signOut(auth);
//     setUser(null);
//     setLoading(false);
//   };

//   // Update user profile
//   const updateUserProfile = async (newName, newPhoto) => {
//     if (!user) return;

//     try {
//       // Update user profile with new name and photo
//       await updateProfile(auth.currentUser, {
//         displayName: newName,
//         photoURL: newPhoto,
//       });

//       // Update the context with the new user data
//       setUser({
//         ...user,
//         displayName: newName,
//         photoURL: newPhoto,
//       });
//     } catch (error) {
//       console.error("Error updating profile:", error);
//       throw error;
//     }
//   };

//   // Auth context value
//   const authInfo = {
//     user,
//     setUser,
//     createNewUser,
//     logOut,
//     userLogin,
//     googleLogin,
//     loading,
//     updateUserProfile,
//   };

//   // Listen for user state changes (login/logout)
//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//       setLoading(false); // Ensure loading is set to false once user state is initialized
//     });
//     return () => unsubscribe();
//   }, []);

//   return (
//     <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
//   );
// };

// export default AuthProvider;


// import { createContext, useEffect, useState } from "react";
// import app from "../firebase/firebase.config";
// import {
//   createUserWithEmailAndPassword,
//   getAuth,
//   onAuthStateChanged,
//   signInWithEmailAndPassword,
//   signInWithPopup,
//   signOut,
//   updateProfile,
// } from "firebase/auth";
// import { GoogleAuthProvider } from "firebase/auth";

// // Initialize Firebase Authentication
// const auth = getAuth(app);

// // Initialize Google Authentication Provider
// const googleProvider = new GoogleAuthProvider();

// // Create context
// export const AuthContext = createContext();

// // AuthProvider component
// const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // Google login function
//   const googleLogin = async () => {
//     try {
//       setLoading(true);
//       const result = await signInWithPopup(auth, googleProvider);
//       const loggedInUser = result.user;
//       setUser(loggedInUser);
//       setLoading(false);
//       return loggedInUser;
//     } catch (error) {
//       setLoading(false);
//       console.error("Google Login Error:", error.message);
//       throw error;
//     }
//   };

//   // Register new user with email, password, name, and photo
//   const createNewUser = (email, password, name, photo) => {
//     setLoading(true);
//     return createUserWithEmailAndPassword(auth, email, password)
//       .then((result) => {
//         const user = result.user;

//         // Sign in the user immediately after registration
//         return signInWithEmailAndPassword(auth, email, password)
//           .then(() => {
//             // After signing in, update the user's profile
//             return updateProfile(user, {
//               displayName: name,
//               photoURL: photo,
//             }).then(() => {
//               // Set the updated user data in the context after both sign-in and profile update
//               setUser({
//                 ...user,
//                 displayName: name,
//                 photoURL: photo,
//               });
//               setLoading(false);
//             });
//           });
//       })
//       .catch((error) => {
//         setLoading(false);
//         console.error("Error creating user:", error.message);
//         throw error;
//       });
//   };

//   // Login function with email and password
//   const userLogin = (email, password) => {
//     setLoading(true);
//     return signInWithEmailAndPassword(auth, email, password);
//   };

//   // Logout function
//   const logOut = async () => {
//     setLoading(true);
//     await signOut(auth);
//     setUser(null);
//     setLoading(false);
//   };

//   // Update user profile
//   const updateUserProfile = async (newName, newPhoto) => {
//     if (!user) return;

//     try {
//       // Update user profile with new name and photo
//       await updateProfile(auth.currentUser, {
//         displayName: newName,
//         photoURL: newPhoto,
//       });

//       // Reload the user to get updated profile information
//       await auth.currentUser.reload();

//       // Update the context with the new user data
//       setUser({
//         ...user,
//         displayName: newName,
//         photoURL: newPhoto,
//       });
//     } catch (error) {
//       console.error("Error updating profile:", error);
//       throw error;
//     }
//   };

//   // Auth context value
//   const authInfo = {
//     user,
//     setUser,
//     createNewUser,
//     logOut,
//     userLogin,
//     googleLogin,
//     loading,
//     updateUserProfile,  // Provide updateUserProfile in the context
//   };

//   // Listen for user state changes (login/logout)
//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//       setLoading(false); // Ensure loading is set to false once user state is initialized
//     });
//     return () => unsubscribe();
//   }, []);

//   return (
//     <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
//   );
// };

// export default AuthProvider;


import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();
const auth = getAuth(app);

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // console.log(loading, user);

  const createNewUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const userLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  const updateUserProfile = (updatedData) => {
    return updateProfile(auth.currentUser, updatedData);
  };

  const authInfo = {
    user,
    setUser,
    createNewUser,
    logOut,
    userLogin,
    loading,
    updateUserProfile,
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;