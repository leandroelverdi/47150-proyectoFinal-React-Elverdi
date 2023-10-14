// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App";
import reportWebVitals from "./reportWebVitals";

//Font awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoLhFSSQj5JIecJGWw4gpG9NmA72NN8oM",
  authDomain: "e-comerse-37985.firebaseapp.com",
  projectId: "e-comerse-37985",
  storageBucket: "e-comerse-37985.appspot.com",
  messagingSenderId: "626986771887",
  appId: "1:626986771887:web:8e6abfa66287b2461abb5a"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
