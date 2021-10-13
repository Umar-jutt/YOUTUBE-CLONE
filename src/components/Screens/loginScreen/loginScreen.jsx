import React from "react";
import "./_loginScreen.scss";
import { useDispatch } from "react-redux";
import { login } from "../../../redux/actions/authaction";

const LoginScreen = () => {
  const dispatch = useDispatch();
  const handleLogin = () => {
    dispatch(login());
  };

  return (
    <div className="login">
      <div className="login__container">
        <img src="http://pngimg.com/uploads/youtube/youtube_PNG2.png" alt="" />
        <button onClick={handleLogin}>login with google</button>
        <p>This project is made using youtube-clone Api</p>
      </div>
    </div>
  );
};
export default LoginScreen;
