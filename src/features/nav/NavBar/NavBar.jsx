import React, { Component } from "react";
import { Menu, Container, Button } from "semantic-ui-react";
import { NavLink, Link, withRouter } from "react-router-dom";
import SignedOutMenu from "../Menus/SignedOutMenu";
import SignedInMenu from "../Menus/SignedInMenu";

class NavBar extends Component {
  state = {
    authenticated: false
  };
  signIn = () => {
    this.setState({
      authenticated: true
    });
  };
  signOut = () => {
    this.setState({
      authenticated: false
    });
    this.props.history.push('/')
  };
  render() {
    const { authenticated } = this.state;
    return (
      <div>
        <Menu inverted fixed="top">
          <Container>
            <Menu.Item as={Link} to="/" header>
              <img src="/assets/logo.png" alt="logo" />
              Dev-Events
            </Menu.Item>
            <Menu.Item as={NavLink} to="/events" name="Events" />
            {authenticated && <Menu.Item as={NavLink} to="/people" name="People" />}
            {authenticated &&
              <Menu.Item>
                <Button floated="right" positive inverted content="Create Event" />
              </Menu.Item>
            }
            {authenticated ? <SignedInMenu signOut={this.signOut}/> : <SignedOutMenu signIn={this.signIn} />}
          </Container>
        </Menu>
      </div>
    );
  }
}

export default withRouter(NavBar);
