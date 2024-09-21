import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { error } from "console";

function App() {
  const [hello, setHEllo] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8080/hello")
      .then((response) => setHEllo(response.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <h1>백엔드에서 가져온 데이터 입니다 : "{hello}"</h1>
    </div>
  );
}

export default App;
