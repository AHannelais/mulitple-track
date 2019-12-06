import styled from "styled-components";
export const Button = styled.button`
  margin: 5px;
  color: #00cdac !important;
  text-transform: uppercase;
  text-decoration: none;
  background: white;
  width: 50px;
  height: 50px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2), 0 6px 6px rgba(0, 0, 0, 0.2);
  border: 2px solid #00cdac !important;
  border-radius: 50%;
  transition: all 0.25s;
  font-size: 25px;
  i {
    margin: auto;
  }
  :hover {
    cursor: pointer;
    color: white !important;
    background: #00cdac;
    border-color: white !important;
  }
`;
export const LectureWrappper = styled.div`
  margin: 40px;
  font-family: "NeoGrey", Impact, Haettenschweiler, "Arial Narrow Bold",
    sans-serif;
  font-size: 2.5rem;
  i {
    margin: 5px;
  }
`;
export const UploadIcon = styled.div`
  margin-right: 15px;
  right: 0;
  position: absolute;
  bottom: 15%;
  color: #00cdac !important;
  text-transform: uppercase;
  text-decoration: none;
  background: white;
  width: 50px;
  height: 50px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2), 0 6px 6px rgba(0, 0, 0, 0.2);
  border: 2px solid #00cdac !important;
  border-radius: 50%;
  transition: all 0.25s;
  font-size: 25px;
  i {
    font-size: 2.5rem;

    margin: auto;
  }
  :hover {
    cursor: pointer;
    color: white !important;
    background: #00cdac;
    border-color: white !important;
  }
  @media screen and (max-width: 550px) {
    top: 10%;
  }
`;
export const AddIcon = styled.button`
  margin: auto;
  color: white !important;
  text-transform: uppercase;
  text-decoration: none;
  background: none;
  width: 100px;
  height: 100px;
  border: none;
  border-radius: 50%;
  transition: all 0.25s;
  font-size: 5rem;
  font-family: "Cataclysmo", Arial, Helvetica, sans-serif;
  display: flex;
  i {
    margin: auto;
  }
  :hover {
    cursor: pointer;
    color: #00cdac !important;
    background: white;
  }
  @media screen and (max-width: 550px) {
    top: 10%;
  }
`;
export const Slider = styled.input`
  bottom: 5%;
  left: 0;
  appearance: none;
  height: 15px;
  outline: none;
  width: 75%;
  opacity: 0.7;
  transition: opacity 0.2s;
  background: #00cdac;
  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 15px;
    height: 30px;
    background: white;
    cursor: pointer;
    border: 2px #02aab0 solid;
  }
  ::-moz-range-thumb {
    width: 15px;
    height: 30px;
    background: white;
    cursor: pointer;
    border: 2px #02aab0 solid;
  }
  :hover {
    opacity: 1;
  }
`;
export const AudioWrapper = styled.div`
  margin-top: 20px;
  p {
    font-family: "Cataclysmo", Arial, Helvetica, sans-serif;
    font-size: 2.5rem;
  }
`;
