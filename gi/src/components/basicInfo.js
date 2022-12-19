import React from "react";

const InfoList = (props) => {
  const { info } = props;
  return (
    <div>
      <h1>Welcome Spartans</h1>
      {info.map((item) => (
        <h2 key={item.id}>
          Codename: {item.codeName} <br />
          ID: {item.name} {item.number} <br />
          Date of Birth: {item.DOB} <br />
          Height: {item.height} <br />
        </h2>
      ))}
    </div>
  );
};

export default InfoList;
