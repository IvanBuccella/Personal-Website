import React from "react";
import MenuItems from "./HeaderMenuItems";

class HeaderMobileMenu extends React.Component<
  {
    openMobileMenu: boolean;
    openMenu: any;
  },
  {}
> {
  componentWillReceiveProps(nextProps) {
    if (nextProps.openMobileMenu !== this.props.openMobileMenu) {
      if (nextProps.openMobileMenu) {
        document.body.classList.add("block-scroll");
      } else {
        document.body.classList.remove("block-scroll");
      }
    }
  }
  render() {
    return (
      <div
        className={"mobile-menu " + (this.props.openMobileMenu ? "open" : "")}
        id="mobile-menu"
      >
        <div className="menu" onClick={this.props.openMenu}>
          <MenuItems openMenu={this.props.openMenu} />
        </div>
      </div>
    );
  }
}
export default HeaderMobileMenu;
