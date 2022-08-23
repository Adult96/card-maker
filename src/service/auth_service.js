import firebase from './firebase';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from 'firebase/auth';

class AuthService {
  constructor() {
    this.googleProvider = new GoogleAuthProvider();
    this.githubProvider = new GithubAuthProvider();
    this.getAuth = getAuth();
  }

  login(provider) {
    const authProvider = this.getProvider(provider);
    return signInWithPopup(this.getAuth, authProvider);
  }

  getProvider(providerName) {
    switch (providerName) {
      case 'google':
        return this.googleProvider;
      case 'github':
        return this.githubProvider;
      default:
        throw new Error(`not supported provider${providerName}`);
    }
  }
}

export default AuthService;
