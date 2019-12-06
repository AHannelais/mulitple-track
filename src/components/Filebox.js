import React from "react";
import Upload from "./Upload";
import Audio from "./Audio";
import { addTrack, stopTrack } from "../actions";
import { connect } from "react-redux";
import _ from "lodash";
import styled from "styled-components";
class Filebox extends React.Component {
  state = { fileUrl: "", fileName: "", duration: null, valid: null };
  callbackUpload = (fileUrl, fileName) => {
    this.setState({ fileUrl, fileName });
  };
  callbackAudio = duration => {
    this.setState({ duration });
  };
  addToTrackList = () => {
    if (
      this.state.fileUrl &&
      this.state.duration &&
      !_.has(this.props.tracks, this.state.fileUrl)
    ) {
      this.props.stopTrack();
      if (
        this.props.tracks[Object.keys(this.props.tracks)[0]] &&
        this.props.tracks[Object.keys(this.props.tracks)[0]].duration !==
          this.state.duration
      ) {
        this.setState({ valid: false });
      } else {
        this.setState({ valid: true });
      }
      this.props.addTrack(this.state.fileUrl, this.state.duration);
    }
  };
  renderInvalid = () => {
    if (this.state.valid === false) {
      return (
        <div style={{ color: "red", overflow: "hidden" }}>
          this file has not the right duration
        </div>
      );
    }
  };
  componentDidUpdate = () => {
    this.addToTrackList();
  };
  render() {
    return (
      <Wrapper>
        <Upload
          onPlay={this.props.onPlay}
          parentCallback={this.callbackUpload}
        />
        <Audio
          src={this.state.fileUrl}
          onPlay={this.props.onPlay}
          parentCallback={this.callbackAudio}
          valid={this.state.valid}
        />
        <p>{this.state.fileName.substring(0, 47)}</p>
        {this.renderInvalid()}
      </Wrapper>
    );
  }
}
const mapStateToProps = state => {
  return { tracks: state.tracks };
};
export default connect(mapStateToProps, { addTrack, stopTrack })(Filebox);

const Wrapper = styled.div`
  position: relative;
  height: 300px;
  margin: 1%;
  border-radius: 25px;
  background-color: white;
  p {
    color: black;
  }
  @media screen and (max-width: 900px) {
    height: 250px;
    width: 90%;
    margin: auto;
    margin-top: 20px;
  }
  @media screen and (max-width: 550px) {
    min-height: 100px;
  }
`;
