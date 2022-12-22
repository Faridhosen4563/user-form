import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";

const MangePassword = () => {
  const { mangePassword } = useContext(AuthContext);
  const [password, setPassword] = useState(null);
  const handlePassword = (e) => {
    const pass = e.target.value;
    setPassword(pass);
  };
  const changePassword = () => {
    mangePassword(password)
      .then(() => {
        alert("Your password has been changed");
      })
      .catch((err) => {
        alert(err.message);
        console.log(err);
      });
  };
  return (
    <div>
      <input type="checkbox" id="mange-password" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Change your password</h3>
          <input
            onBlur={handlePassword}
            type="text"
            placeholder="New password"
            className="input input-bordered w-full max-w-xs py-4 my-4"
          />
          <div className="modal-action">
            <label
              htmlFor="mange-password"
              className="btn"
              onClick={changePassword}
            >
              Change Password
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MangePassword;
