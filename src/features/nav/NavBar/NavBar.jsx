import React, { Component } from "react";
import { Menu, Container, Button } from "semantic-ui-react";
import { NavLink, Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { openModal } from "../../modals/modalActions";
import SignedOutMenu from "../Menus/SignedOutMenu";
import SignedInMenu from "../Menus/SignedInMenu";
import { signOut } from '../../auth/authActions'

class NavBar extends Component {
  
  signIn = () => {
    this.props.openModal("LoginModal");
  };

  register = () => {
    this.props.openModal("RegisterModal");
  };

  signOut = () => {
    this.props.signOut()
    this.props.history.push("/");
  };
  render() {
    const { auth } = this.props;
    const authenticated = auth.authenticated
    return (
      <div>
        <Menu inverted fixed="top">
          <Container>
            <Menu.Item as={Link} to="/" header>
              <img src="/assets/logo.png" alt="logo" />
              Dev-Events
            </Menu.Item>
            <Menu.Item as={NavLink} to="/events" name="Events" />
            {authenticated && (
              <Menu.Item as={NavLink} to="/people" name="People" />
            )}
            {authenticated && (
              <Menu.Item>
                <Button
                  as={Link}
                  to={`/createEvent`}
                  floated="right"
                  positive
                  inverted
                  content="Create Event"
                />
              </Menu.Item>
            )}
            {authenticated ? (
              <SignedInMenu currentUser={auth.currentUser} signOut={this.signOut} />
            ) : (
              <SignedOutMenu signIn={this.signIn} register={this.register} />
            )}
          </Container>
        </Menu>
      </div>
    );
  }
}

export default withRouter(
  connect(
    state => ({
      auth: state.auth
    }),
    {
      openModal,
      signOut
    }
  )(NavBar)
);
