import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import MobileMenu from "./HeaderMobileMenu";
import MenuItems from "./HeaderMenuItems";

class Header extends React.Component<
  {},
  { openMobileMenu: boolean; showBars: boolean; showTimes: boolean }
> {
  constructor(props) {
    super(props);
    this.state = { openMobileMenu: false, showBars: true, showTimes: false };
    this.openMenu = this.openMenu.bind(this);
  }
  openMenu() {
    this.setState({
      openMobileMenu: !this.state.openMobileMenu,
      showBars: !this.state.showBars,
      showTimes: !this.state.showTimes,
    });
  }
  render() {
    return (
      <>
        <header className="header">
          <Link className="logo" to="/">
            <div className="circle">IB</div>
            <div className="text">
              <b>Ivan</b>&nbsp;Buccella
            </div>
          </Link>
          <div className="menu">
            <MenuItems openMenu={this.openMenu} />
          </div>
          <div className="menu-toggle" onClick={this.openMenu}>
            <FontAwesomeIcon
              icon={faBars}
              size="lg"
              className={!this.state.showBars ? "hidden" : ""}
            />
            <FontAwesomeIcon
              icon={faTimes}
              size="lg"
              className={!this.state.showTimes ? "hidden" : ""}
            />
          </div>
        </header>
        <MobileMenu
          openMenu={this.openMenu}
          openMobileMenu={this.state.openMobileMenu}
        />
      </>
    );
  }
}
export default Header;
