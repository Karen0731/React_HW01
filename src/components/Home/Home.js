import React from "react";
import Game from "../Game/Game";
import Menu from "../Menu/Menu";

class Home extends React.Component {
  render() {
    return (
      <>
        <Menu />
        <div style={{ paddingTop: "5%" }}>
          <Game />
        </div>
      </>
    );
  }
}

export default Home;
