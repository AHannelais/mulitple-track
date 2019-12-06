import React from "react";
import { connect } from "react-redux";
import { Button, Slider } from "./styleSheet";
import styled from "styled-components";

class Audio extends React.Component {
  state = {
    duration: null,
    volume: 100,
    savedVolume: 100,
  };
  onChangeSlider = e => {
    this.setState(
      { volume: e.target.value, savedVolume: e.target.value },
      () => (this.audio.volume = this.state.volume / 100)
    );
  };
  handlePlay() {
    if (this.props.play === "play" && this.audio && this.props.valid) {
      this.audio.play();
    }
  }

  handlePause() {
    if (this.props.play === "pause" && this.audio) {
      this.audio.pause();
    }
  }
  handleStop() {
    if (this.props.play === "stop" && this.audio) {
      this.audio.currentTime = 0;
      this.audio.pause();
    }
  }
  sendData = () => {
    this.props.parentCallback(this.state.duration);
  };
  onMuteButton = () => {
    if (this.state.volume > 0) {
      return (
        <Button
          onClick={() =>
            this.setState(
              { savedVolume: this.state.volume, volume: 0 },
              () => (this.audio.volume = this.state.volume / 100)
            )
          }
        >
          <i className="fas fa-volume-mute"></i>
        </Button>
      );
    } else
      return (
        <Button
          onClick={() =>
            this.setState(
              {
                volume:
                  this.state.savedVolume < 1 ? 100 : this.state.savedVolume,
              },
              () => (this.audio.volume = this.state.volume / 100)
            )
          }
        >
          <i className="fas fa-volume-up"></i>
        </Button>
      );
  };

  componentDidMount() {
    this.audio.onloadedmetadata = () => {
      this.setState(
        { duration: this.audio.duration, volume: this.audio.volume * 100 },
        this.sendData
      );
    };
  }

  render() {
    return (
      <Wrapper>
        {this.handlePlay()}
        {this.handleStop()}
        {this.handlePause()}
        <audio
          ref={audio => {
            this.audio = audio;
          }}
          src={this.props.src}
        />
        <p> {this.state.volume}%</p>
        {this.onMuteButton()}
        <Slider
          onChange={this.onChangeSlider}
          defaultValue="100"
          type="range"
          name="points"
          min="0"
          max="100"
        />
      </Wrapper>
    );
  }
}
const mapStateToProps = state => {
  return { play: state.play.play };
};
export default connect(mapStateToProps)(Audio);

export const Wrapper = styled.div`
  margin-top: 20px;
  p {
    font-family: "Cataclysmo", Arial, Helvetica, sans-serif;
    font-size: 2.5rem;
  }
`;
