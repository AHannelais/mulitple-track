import React from "react";
import BoxSpawner from "./BoxSpawner";
import LectureBar from "./LectureBar";

class App extends React.Component {
  render() {
    return (
      <div>
        <LectureBar />
        <BoxSpawner />
      </div>
    );
  }
}

export default App;
