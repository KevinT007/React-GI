import React, { Component } from "react";

export default class medium extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        codeName: "Kevotron",
        name: "Kevin",
        number: "007",
        DOB: "July 6",
        height: "7'",
      },
    };
  }
  render() {
    // const info = [
    //   { key: "Codename", value: this.state.person.codeName },
    //   { key: "Name", value: this.state.person.name },
    //   { key: "Number", value: this.state.person.number },
    //   { key: "Date of Birth", value: this.state.person.DOB },
    //   { key: "Height", value: this.state.person.height },
    // ];
    return (
      <div>
        {/* {info.map((item) => (
          <p key={item.key}>
            {item.key}: {item.value}
          </p>
        ))} */}

        <h1>Welcome Spartan</h1>
        <h2>Codename: {this.state.person.codeName}</h2>
        <h3>
          ID: {this.state.person.name} {this.state.person.number}
        </h3>
        <h4>Date of Birth: {this.state.person.DOB}</h4>
        <h4>Height: {this.state.person.height}</h4>
      </div>
    );
  }
}
