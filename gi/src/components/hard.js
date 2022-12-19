import React from "react";
import InfoList from "./basicInfo";

const App = () => {
  const info = [
    {
      id: 1,
      codeName: "Kevotron",
      name: "Kevin",
      number: "007",
      DOB: "Redacted",
      height: "7'",
    },
    {
      id: 2,
      codeName: "Master Chief",
      name: "John",
      number: "117",
      DOB: "Redacted",
      height: "7'2\"",
    },
    {
      id: 3,
      codeName: "Cyber",
      name: "Liam",
      number: "136",
      DOB: "Redacted",
      height: "7'",
    },
  ];

  return (
    <div>
      <InfoList info={info} />
    </div>
  );
};

export default App;
