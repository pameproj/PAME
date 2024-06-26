import React, { useEffect, useState } from "react";
import BtnLog from "./BtnLog";

export default function Register() {
  const [usernameValue, setUsernameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [repeatedPasswordValue, setRepeatedPasswordValue] = useState("");
  const [warning, setWarning] = useState({warn: false, msg: ""})

  const validUsername = async () => {
    try {
      const response = await fetch(
        `api/isUsernameAvailable?username=${usernameValue}`
      );
      const data = await response.json();
      if (!response.ok) {
        console.error(data.error);
        return false;
      } else {
        return data.available;
      }
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  const validateUsername = (username) => {
    return username.length >= 5 && username.length <= 15;
  };

  const validatePassword = (password) => {
    const regex = /^(?=.*[!@#$%^&*])(?=.*[0-9]).{5,20}$/;
    return regex.test(password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!usernameValue) {
      setWarning({
        warn: true,
        msg: "User name field can not be empty",
      });
      return;
    }

    if (!validateUsername(usernameValue)) {
      setWarning({
        warn: true,
        msg: "Invalid username",
      });
      return;
    }

    const isUsernameAvailable = await validUsername();
    if (!isUsernameAvailable) {
      setWarning({
        warn: true,
        msg: "User name is not available",
      });
      return;
    }

    if (!passwordValue) {
      setWarning({warn: true, msg: "Password field can not be empty"});
      return;
    }

    if (!validatePassword(passwordValue)) {
      setWarning({warn: true, msg: "Invalid password"});
      return;
    }

    if (passwordValue !== repeatedPasswordValue) {
      setWarning({warn: true, msg: "Passwords do not coincide"});
      return;
    }

    setWarning({warn: false, msg: ""})

    e.target.submit();
  };

  return (
    <main className="h-full w-full flex flex-col items-center justify-between pb-4">
      <form
        className="w-full min-w-[300px] max-w-[500px] mx-auto flex flex-col gap-4 p-4"
        method="POST"
        action="api/register"
        onSubmit={handleSubmit}
      >
        <h1 className="text-center text-xl">Register A New Account</h1>
        <label htmlFor="username">
          <p>User Name</p>
          <input
            className="w-full bg-transparent border-2 mt-2 py-1 px-2 rounded-xl"
            type="text"
            name="username"
            placeholder="User name"
            onChange={(e) => {
              setUsernameValue(e.target.value);
            }}
          />
          <span className="text-xs opacity-80 text-yellow-400">
            Must contain between 5 and 15 characters long
          </span>
        </label>

        <label>
          <p>Password</p>
          <div className="flex gap-2">
            <input
              className="w-1/2 bg-transparent border-2 mt-2 py-1 px-2 rounded-xl"
              type="password"
              name="password"
              placeholder="Password"
              onChange={(e) => setPasswordValue(e.target.value)}
            />
            <input
              className="w-1/2 bg-transparent border-2 mt-2 py-1 px-2 rounded-xl"
              type="password"
              name="repeatpassword"
              placeholder="Repeat Password"
              onChange={(e) => setRepeatedPasswordValue(e.target.value)}
            />
          </div>
          <span className="text-xs opacity-80 text-yellow-400">
            Must contain at least one symbol, one number and be 5-20 characters
            long.
          </span>
        </label>
        {warning.warn==true&&(<p className="text-xs text-red-400">{warning.msg}</p>)}
        <button className="bg-white/20 mt-2 py-1 rounded-xl hover:shadow-md hover:shadow-white/10">
          Register
        </button>
      </form>
      <footer className="text-center mb-4">
        <p className="opacity-80 mb-2">Already have an account?</p>
        <BtnLog href="/logIn" content="Log Into Your Account" log={true} />
      </footer>
    </main>
  );
}
