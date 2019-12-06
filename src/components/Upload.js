import React from "react";
import { UploadIcon } from "./styleSheet";

class Upload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fileUrl: URL,
      fileName: null,
    };
    this.fileInput = React.createRef();
  }

  openFileDialog = () => {
    this.fileInput.current.click();
  };
  sendData = () => {
    this.props.parentCallback(this.state.fileUrl, this.state.fileName);
  };
  handleChange = e => {
    this.setState(
      {
        fileUrl: URL.createObjectURL(e.target.files[0]),
        fileName: e.target.files[0].name,
      },
      this.sendData
    );
  };
  render() {
    return (
      <div>
        <input
          style={{ display: "none" }}
          ref={this.fileInput}
          type="file"
          onChange={this.handleChange}
          accept="audio/mp3"
        />
        <UploadIcon onClick={() => this.openFileDialog()}>
          <i className="fas fa-upload" />
        </UploadIcon>
      </div>
    );
  }
}

export default Upload;
