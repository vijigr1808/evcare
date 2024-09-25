import { CognitoUserPool, CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';
import { poolData } from '../aws-config';

const userPool = new CognitoUserPool(poolData);

export const authenticateUser = (Username, Password) => {
  return new Promise((resolve, reject) => {
    const authenticationDetails = new AuthenticationDetails({ Username, Password });
    const userData = { Username, Pool: userPool };
    const cognitoUser = new CognitoUser(userData);

    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: (result) => {
        console.log('Login success:', result);
        resolve(result);
      },
      onFailure: (err) => {
        reject(err);
      },
    });
  });
};