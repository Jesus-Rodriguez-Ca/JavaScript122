import { Component } from "react";

import Navbar from "react-bootstrap/Navbar";

class Header extends Component {
  render = () => {
    return (
      <>
        <Navbar bg="dark">
          <Navbar.Brand >
              <a href="/" style={{color: 'white'}}>Video Game Portal</a>
          </Navbar.Brand>
        </Navbar>
      </>
    );
  };
}
export default Header;
