//Not yet tied into flow. 
//Still using withAuthenticator wrapper.

import { Authenticator } from 'aws-amplify-react';
import React, { Component } from 'react'
import awsmobile from '../aws-exports';

class AuthCustom extends Component {
    render() {
        return (
            <Authenticator
                authState="signIn"
                // authData={CognitoUser | 'username'}
                onStateChange={(authState) => console.log(authState)}
                amplifyConfig={awsmobile}
            >

            </Authenticator>
        )
    }
}
export default AuthCustom;