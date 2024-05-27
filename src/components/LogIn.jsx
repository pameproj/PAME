import React from "react";

export default function LogIn() {
  return (
    <main class="h-full w-full flex flex-col items-center justify-between pb-4">
      <form
        class="w-full min-w-[300px] max-w-[500px] mx-auto flex flex-col gap-4 p-4"
        method="POST"
        action="api/login"
      >
        <h1 class="text-center text-xl">Log Into Your Account</h1>
        <label for="username">
          <p>User Name</p>
          <input
            class="w-full bg-transparent border-2 mt-2 py-1 px-2 rounded-xl"
            type="text"
            name="username"
            placeholder="User name"
          />
        </label>
        <label for="password">
          <p>Password</p>
          <input
            class="w-full bg-transparent border-2 mt-2 py-1 px-2 rounded-xl"
            type="password"
            name="password"
            placeholder="Password"
          />
        </label>
        <button class="bg-white/20 mt-2 py-1 rounded-xl hover:shadow-md hover:shadow-white/10">
          Log In
        </button>
      </form>
      <footer class="text-center mb-4">
        <p class="opacity-80">Don't have an account yet?</p>
        <a class="text-lg py-1 border-b-[1px] animate-pulse" href="/register">
          Register a new <span class="font-semibold">P A M E</span> account
        </a>
      </footer>
    </main>
  );
}
