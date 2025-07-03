import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useAxiosPublic from "../hooks/useAxiosPublic";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();

 useEffect(() => {
  const token = localStorage.getItem("token");

  if (token) {
    axiosSecure
      .get("/user")
      .then((res) => {
        setUser(res.data.user);
      })
      .catch((err) => {
        console.error("Failed to fetch user:", err);
        localStorage.removeItem("token");
        setUser(null);
      })
      .finally(() => setLoading(false));
  } else {
    setLoading(false);
  }
}, [axiosSecure]);


  const loginUser = async (email, password) => {
    const res = await axiosPublic.post("/login", { email, password });
    localStorage.setItem("token", res.data.token);
    setUser(res.data.user);
  };

  const registerUser = async (info) => {
    const res = await axiosPublic.post("/register", info);
    localStorage.setItem("token", res.data.token);
    setUser(res.data.user);
  };

  const logoutUser = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  const authInfo = {
    user,
    registerUser,
    loginUser,
    logoutUser,
    loading,
   
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <span className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></span>
        </div>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
