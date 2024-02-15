import { useState } from "react";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import { LOGIN } from "../utils/mutations";
import Auth from "../utils/auth";

function Login(props) {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, pW: formState.password },
      });
      const { token, user } = mutationResponse.data.login;
      Auth.login(token);
      localStorage.setItem("fN", user.fN);
      localStorage.setItem("userId", user._id);
      console.log(user._id);
    } catch (err) {
      console.error("Error while signing up:", err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="m-auto flex flex-col md:w-[75%] h-[700px] justify-center items-center bg-[#bfc4ac] rounded-md p-2">

      <h2 className="font-bold p-8 text-2xl ">Login</h2>
      <form onSubmit={handleFormSubmit} className="w-[75%] lg:w-[45$%]">
        <div className="flex flex-col space-between my-2">
          <label htmlFor="email">Email address:</label>
          <input
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
            className='border-2 rounded-lg p-3 flex border-gray-300'
          />
        </div>
        <div className="flex flex-col space-between my-2">
          <label htmlFor="pwd">Password:</label>
          <input
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
            className='border-2 rounded-lg p-3 flex border-gray-300'
          />
        </div>
        {error && (
          <div>
            <p className="error-text">The provided credentials are incorrect</p>
          </div>
        )}
        <div className="flex justify-between">
        <Link to="/signup" className="italic">← Go to Signup</Link>
          <button type="submit" className="bg-[#588157] text-white px-4 py-2 rounded hover:bg-[#3A5A40]">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
