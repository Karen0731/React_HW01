import React from "react";
import "./Square.css";

/*class Square extends React.Component {
  render() {
    return (
      <button
        className="square"
        onClick={() => {
          //console.log("click");
          //this.setState({ value: "X" });
          this.props.onClick();
        }}
      >
        {this.props.value}
      </button>
    );
  }
}*/

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

export default Square;
