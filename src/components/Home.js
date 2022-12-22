import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import MangePassword from "./MangePassword";

const Home = () => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <div className="text-center">Loading...</div>;
  }
  return (
    <div className="px-24">
      <h1>This is home</h1>
      {user && (
        <label htmlFor="mange-password" className="btn my-6">
          Change Password
        </label>
      )}
      <MangePassword></MangePassword>
    </div>
  );
};

export default Home;
