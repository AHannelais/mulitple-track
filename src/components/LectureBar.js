import React from "react";
import { connect } from "react-redux";
import { Button } from "./styleSheet";
import { playTrack, pauseTrack, stopTrack } from "../actions";
import styled from "styled-components";

class LectureBar extends React.Component {
  state = { play: "stop" };

  onClickPlay = () => {
    if (Object.keys(this.props.tracks).length > 0) {
      this.setState({ play: "play" });
      this.props.playTrack();
    }
  };
  onClickPause = () => {
    this.setState({ play: "pause" });
    this.props.pauseTrack();
  };
  onClickStop = () => {
    this.setState({ play: "stop" });
    this.props.stopTrack();
  };
  timeToMin = num => {
    let min = Math.floor(num / 60);

    return `${min}:${Math.floor(num - min * 60)}`;
  };
  renderDuration = () => {
    return this.props.tracks[Object.keys(this.props.tracks)[0]]
      ? this.timeToMin(
          this.props.tracks[Object.keys(this.props.tracks)[0]].duration
        )
      : " ";
  };
  renderPlayPause = () => {
    if (this.props.play === "play") {
      return (
        <Button onClick={this.onClickPause}>
          <i className="fas fa-pause"></i>
        </Button>
      );
    } else {
      return (
        <Button onClick={this.onClickPlay}>
          <i className="fas fa-play"></i>
        </Button>
      );
    }
  };
  render() {
    return (
      <Wrapper>
        <i
          style={{ color: "#000000", fontSize: "5rem" }}
          className="fas fa-compact-disc"
        ></i>
        Multiple Tracks
        <br />
        {this.renderPlayPause()}
        <Button onClick={this.onClickStop}>
          <i className="fas fa-stop"></i>
        </Button>
        <p
          style={{
            fontFamily: "Cataclysmo",
            height: "30px",
            fontSize: "2.5rem",
          }}
        >
          {this.renderDuration()}
        </p>
      </Wrapper>
    );
  }
}
const mapStateToProps = state => {
  return { play: state.play.play, tracks: state.tracks };
};
export default connect(mapStateToProps, { playTrack, pauseTrack, stopTrack })(
  LectureBar
);
const Wrapper = styled.div`
  margin: 40px;
  font-family: "NeoGrey", Impact, Haettenschweiler, "Arial Narrow Bold",
    sans-serif;
  font-size: 2.5rem;
  i {
    margin: 5px;
  }
`;
