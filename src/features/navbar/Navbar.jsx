import React, { Component } from 'react'
import { Menu, Button, Container } from 'semantic-ui-react'
import { NavLink, Link, withRouter } from 'react-router-dom';
import SignedOutMenu from './menus/SignedOutMenu';
import SignedInMenu from './menus/SignedInMenu';

class Navbar extends Component {
    state = {
        authenicated: false
    }
    handleSignIn = () => {
        this.setState({ authenicated: true });
    }
    handleSignOut = () => {
        this.setState({ authenicated: false });
        this.props.history.push('/');
    }
    render() {
        const { authenicated } = this.state
        return (
            <Menu inverted fixed="top">
                <Container>
                    <Menu.Item as={NavLink} header to="/" exact>
                        <img src="/assets/logo.png" alt="logo" />
                        Re-vents
                      </Menu.Item>
                    <Menu.Item name="Events" as={NavLink} to="/events" />
                    <Menu.Item name="People" as={NavLink} to="/people" />
                    <Menu.Item>
                        <Button as={Link} to="/create"
                            floated="right"
                            positive inverted content="Create Event" />
                    </Menu.Item>
                    {authenicated ? <SignedInMenu signOut={this.handleSignOut} /> : <SignedOutMenu signIn={this.handleSignIn} />}
                </Container>
            </Menu>
        )
    }
}
export default withRouter(Navbar);