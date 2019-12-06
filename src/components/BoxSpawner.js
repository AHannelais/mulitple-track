import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import Filebox from "./FileContainer";
import { AddIcon } from "./styleSheet";

class BoxSpawner extends React.Component {
  state = { boxCount: 2, boxes: [0, 1] };

  renderAddButton = () => {
    if (Object.keys(this.props.tracks).length >= this.state.boxCount) {
      return (
        <div>
          <AddIcon
            onClick={() =>
              this.setState({
                boxes: this.state.boxes.concat([this.state.boxCount]),
                boxCount: this.state.boxCount + 1,
              })
            }
          >
            <i className="fas fa-plus"></i>
            Add
          </AddIcon>
        </div>
      );
    }
  };
  renderBoxes = () => {
    return (
      <>
        {this.state.boxes.map(index => {
          return <Filebox key={index} />;
        })}
      </>
    );
  };

  render() {
    return (
      <Wrapper>
        {this.renderBoxes()}
        {this.renderAddButton()}
      </Wrapper>
    );
  }
}
const mapStateToProps = state => {
  return { tracks: state.tracks };
};
export default connect(mapStateToProps)(BoxSpawner);

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  div {
    flex: 0 48%;
  }
  @media screen and (max-width: 900px) {
    flex-direction: column;
    div {
      flex: none;
    }
  }
`;
