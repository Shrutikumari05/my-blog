import React, { useState } from "react";

const Registerpage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function register(e) {
    e.preventDefault();
    const response = await fetch("http://localhost:4000/register", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-type": "application/json" },
    });
    if(response.ok===false){
      alert("registration failed");
    }
    else{
      alert("registration sucessful");
    }
  }

  return (
    <div>
      <form className="register" onSubmit={register}>
        <h1>Register</h1>
        <input
          type="text"
          placeholder="email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Register here</button>
      </form>
    </div>
  );
};

export default Registerpage;

// import React, { useState } from "react";

// const RegisterPage = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   async function register(e) {
//     e.preventDefault();
//     try {
//       const response = await fetch("http://localhost:4000/register", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ username, password }),
//       });
//       if (response.ok) {
//         console.log("Registration successful");
//         // Add any additional logic you need after successful registration
//       } else {
//         console.error("Registration failed:", response.statusText);
//         // Handle registration failure
//       }
//     } catch (error) {
//       console.error("Error during registration:", error.message);
//       // Handle network or other errors
//     }
//   }

//   return (
//     <div>
//       <form className="register" onSubmit={register}>
//         <h1>Register</h1>
//         <input
//           type="text"
//           placeholder="email"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button type="submit">Register here</button>
//       </form>
//     </div>
//   );
// };

// export default RegisterPage;
