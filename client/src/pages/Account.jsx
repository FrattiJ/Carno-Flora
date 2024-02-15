// Boilerplate code for Sign up

import { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import { UPDATE_USER } from "../utils/mutations";

function Account(props) {
  const [formState, setFormState] = useState({  });
  const [updateUser] = useMutation(UPDATE_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await updateUser({
        variables: {
          email: formState.email,
          pW: formState.password,
          fN: formState.firstName,
          lN: formState.lastName,
          country: formState.country,
          streetAddress: formState.streetAddress,
          city: formState.city,
          state: formState.state,
          zip: formState.zip,
          phone: formState.phone
        },
      });
      const { token, user } = mutationResponse.data.updateUser;
      console.log(mutationResponse.data.updateUser);
      Auth.login(token);
      console.log(user);
      // Saves first name to render onto the navbar
      localStorage.setItem("fN", user.fN);
      // Saves userId for cart functionality
      localStorage.setItem("userId", user._id);
    } catch (err) {
      console.error("Error while signing up:", err);
      console.error("GraphQL Error:", err.graphQLErrors);
      console.error("Network Error:", err.networkError);
      console.error("Error Message:", err.message);
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
    <div className="m-auto flex flex-col md:w-[75%]  justify-center items-center bg-[#bfc4ac] rounded-md p-2">
      <h2 className="font-bold p-8 text-2xl ">Update Account</h2>
      <div className="w-[75%] lg:w-[45%] mb-8">
      <form onSubmit={handleFormSubmit}>
        <div className="flex flex-col space-between my-2">
          <label htmlFor="firstName">First Name:</label>
          <input
            placeholder="First"
            name="firstName"
            type="firstName"
            id="firstName"
            onChange={handleChange}
            className='border-2 rounded-lg p-3 flex border-gray-300'
          />
        </div>
        <div className="flex flex-col space-between my-2">
          <label htmlFor="lastName">Last Name:</label>
          <input
            placeholder="Last"
            name="lastName"
            type="lastName"
            id="lastName"
            onChange={handleChange}
            className='border-2 rounded-lg p-3 flex border-gray-300'
          />
        </div>
        <div className="flex flex-col space-between my-2">
          <label htmlFor="email">Email:</label>
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
          <div className="flex flex-col space-between my-2">
            <label htmlFor="country">Country:</label>
            <input
              placeholder="United States of America"
              name="country"
              type="country"
              id="country"
              onChange={handleChange}
              className='border-2 rounded-lg p-3 flex border-gray-300'
            />
          </div>
          <div className="flex flex-col space-between my-2">
            <label htmlFor="streetAddress">Street Address:</label>
            <input
              placeholder="123 Main Street"
              name="streetAddress"
              type="streetAddress"
              id="streetAddress"
              onChange={handleChange}
              className='border-2 rounded-lg p-3 flex border-gray-300'
            />
          </div>
          <div className="flex flex-col space-between my-2">
            <label htmlFor="city">City:</label>
            <input
              placeholder="Orlando"
              name="city"
              type="city"
              id="city"
              onChange={handleChange}
              className='border-2 rounded-lg p-3 flex border-gray-300'
            />
          </div>
          <div className="flex flex-col space-between my-2">
            <label htmlFor="state">State:</label>
            <input
              placeholder="Florida"
              name="state"
              type="state"
              id="state"
              onChange={handleChange}
              className='border-2 rounded-lg p-3 flex border-gray-300'
            />
          </div>
          <div className="flex flex-col space-between my-2">
            <label htmlFor="zip">Zip Code:</label>
            <input
              placeholder="12345"
              name="zip"
              type="zip"
              id="zip"
              onChange={handleChange}
              className='border-2 rounded-lg p-3 flex border-gray-300'
            />
          </div>
          <div className="flex flex-col space-between my-2">
            <label htmlFor="phone">Phone:</label>
            <input
              placeholder="1234567891"
              name="phone"
              type="phone"
              id="phone"
              onChange={handleChange}
              className='border-2 rounded-lg p-3 flex border-gray-300'
            />
          </div>
        <div className="flex justify-between">
          <button type="submit" className="bg-[#588157] text-white px-4 py-2 rounded hover:bg-[#3A5A40]">Submit</button>
        </div>
      </form>
      </div>
    </div>
  );
}

export default Account;
