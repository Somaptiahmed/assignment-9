import { Link, useLocation, useNavigate } from "react-router-dom";
import userIcon from "../assets/user.png";
import { useContext, useEffect } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate(); 

  useEffect(() => {
    const routeTitleMap = {
      "/": "Home - My App",
      "/update": "Update Profile - My App",
      "/profile": "My Profile - My App",
      "/auth/login": "Login - My App",
    };

    
    document.title = routeTitleMap[location.pathname] || "My App";
  }, [location]);

 
  const handleLogOut = async () => {
    try {
      await logOut(); 
      navigate("/"); 
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <div className="flex justify-between items-center">
      <div>{user && user.name}</div>
      <div className="nav space-x-5 font-semibold text-xl text-gray-700">
        <Link to="/">Home</Link>
        <Link to="update">Update Profile</Link>
        <Link to="profile">My Profile</Link>
      </div>

      <div className="login flex gap-2 items-center">
        <div>
          {user && user?.email ? (
            <div>
              <img className="w-10 rounded-full" src={user?.photoURL} alt="" />
              <p>{user.displayName}</p>
            </div>
          ) : (
            <img src={userIcon} alt="" />
          )}
        </div>
        {user && user?.email ? (
          <button onClick={handleLogOut} className="btn btn-neutral rounded-none">
            Log-Out
          </button>
        ) : (
          <Link to="/auth/login" className="btn btn-neutral rounded-none">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
