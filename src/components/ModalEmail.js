import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";

const ModalEmail = () => {
  const { resetPassword } = useContext(AuthContext);
  const [email, setEmail] = useState(null);
  const handleEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };
  const handleReset = () => {
    resetPassword(email)
      .then(() => {
        alert("Reset password email sent your email successfully");
      })
      .catch((err) => {
        alert(err.message);
        console.log(err);
      });
  };
  return (
    <div>
      <input type="checkbox" id="email-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Enter your email address</h3>
          <input
            onBlur={handleEmail}
            type="email"
            placeholder="Email address"
            className="input input-bordered w-full max-w-xs py-4 my-4"
          />
          <div className="modal-action">
            <label htmlFor="email-modal" className="btn" onClick={handleReset}>
              Submit
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalEmail;
