import React, { useState } from "react";
import Loader from "react-loader-spinner";

class SiteLoader extends React.Component<{}, { activeClass: string }> {
  constructor(props) {
    super(props); this.state = { activeClass: "active" };
  }

  componentDidMount() {
    this.setState({ activeClass: "" });
  }

  render() {
    return (
      <div className={"site-loader " + this.state.activeClass}>
        <Loader
          visible={true}
          type="Puff"
          color="#007ced"
          height={100}
          width={100}
          timeout={0}
        />
      </div>
    );
  }
}
export default SiteLoader;
