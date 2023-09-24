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
  apiKey: "AIzaSyAblvUCOo8gRjfet69MeQunyPhKkKA6x6I",
  authDomain: "e-comerse-cf1eb.firebaseapp.com",
  projectId: "e-comerse-cf1eb",
  storageBucket: "e-comerse-cf1eb.appspot.com",
  messagingSenderId: "180609921061",
  appId: "1:180609921061:web:a4c07bbd09eda63cfa0fcc",
};

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
