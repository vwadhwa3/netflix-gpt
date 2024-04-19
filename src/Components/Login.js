import { useRef, useState } from "react";
import Header from "./Header";
import { BG_URL } from "../Utils/constants";
import {checkValidData} from "../Utils/vaildate"

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage,setErrorMessage] =useState(null)
  //const [password,setPassword] =useState("")
  const email = useRef(null);
  const password= useRef(null);
  const name = useRef(null);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  const handdleButtonClick= () =>{   
    const message = checkValidData(email.current.value,password.current.value)
    setErrorMessage(message)
  }

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src={BG_URL}
          alt="logo"
        />
      </div>
      <form onSubmit={(e)=>{e.preventDefault()}} className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}
        <input  ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <input ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <p className="p-red-500 font-bold ">{setErrorMessage}</p>
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg"  onClick={handdleButtonClick}>
          {isSignInForm ? "Sign In" : "Sign Up"}         
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now."}
        </p>
      </form>
    </div>
  );
};
export default Login;