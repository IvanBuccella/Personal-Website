import React from "react";
import { NavLink } from "react-router-dom";

class HeaderMenuItems extends React.Component<
  {
    openMenu: any;
  },
  {}
> {
  render() {
    return (
      <>
        <div className="menu-item">
          <NavLink className="link" to="/about-me/" activeClassName="active">
            About Me
          </NavLink>
        </div>
        <div className="menu-item">
          <NavLink className="link" to="/projects/" activeClassName="active">
            Projects
          </NavLink>
        </div>
      </>
    );
  }
}
export default HeaderMenuItems;
