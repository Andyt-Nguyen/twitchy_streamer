import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn, signOut } from '../actions'

const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn }
}

export default connect(mapStateToProps, { signIn, signOut}) (class GoogleAuth extends Component {
    state = { isSignedIn: null }

    componentDidMount() {
        window.gapi.load("client:auth2", () => {
            window.gapi.client.init({
                clientId: "604402025412-dcac2m2h9hmulh6pbl6ghi6aotidf49c.apps.googleusercontent.com",
                scope: "email"
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance()
                this.onAuthChange(this.auth.isSignedIn.get())
                this.auth.isSignedIn.listen(this.onAuthChange)
            })
        })
    }

    onAuthChange = (isSignedIn) => {
        if(isSignedIn) {
            return this.props.signIn(this.auth.currentUser.get().getId())
        } {
            return this.props.signOut()
        }
    }

    onSignInClick = () => {
        this.auth.signIn()
    }

    onSignOutClick = () => {
        this.auth.signOut()
    }

    renderAuthBtn() {
        if(this.props.isSignedIn === null) {
            return <div>Loading</div>
        } else if(this.props.isSignedIn) {
            return ( 
                <button onClick={this.onSignOutClick} className={"ui red google button"}>
                    <i className={"google icon"}/>
                    Sign Out
                </button>)
        } else {
            return ( 
                <button onClick={this.onSignInClick} className={"ui red google button"}>
                    <i className={"google icon"}/>
                    Sign In with Google
                </button>)
        }
    }


    render() {
        return (
            <div>
                { this.renderAuthBtn() }
            </div>
        )
    }
})