import React from "react";

export default function Landing() {
  return (
    <main>
      <h1 className="title">New this Week</h1>
      <img src={require("../images/2.jpeg")} alt="" className="photo-grid" />



      <p className="byline">
        Plan a trip with help from local Hosts around the world
      </p>
    </main>
  );
}
