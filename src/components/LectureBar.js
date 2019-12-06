import React from "react";
import { connect } from "react-redux";
import { Button, LectureWrappper } from "./styleSheet";
import { playTrack, pauseTrack, stopTrack } from "../actions";
class LectureBar extends React.Component {
  state = { play: "stop" };
  onClickPlay = () => {
    this.setState({ play: "play" });
    this.props.playTrack();
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
  render() {
    return (
      <LectureWrappper>
        <i
          style={{ color: "#000000", fontSize: "5rem" }}
          className="fas fa-compact-disc"
        ></i>
        Multiple Tracks
        <br />
        <Button onClick={this.onClickPlay}>
          <i className="fas fa-play"></i>
        </Button>
        <Button onClick={this.onClickPause}>
          <i className="fas fa-pause"></i>
        </Button>
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
          {this.props.tracks[Object.keys(this.props.tracks)[0]]
            ? this.timeToMin(
                this.props.tracks[Object.keys(this.props.tracks)[0]].duration
              )
            : " "}
        </p>
      </LectureWrappper>
    );
  }
}
const mapStateToProps = state => {
  return { play: state.play.play, tracks: state.tracks };
};
export default connect(mapStateToProps, { playTrack, pauseTrack, stopTrack })(
  LectureBar
);
