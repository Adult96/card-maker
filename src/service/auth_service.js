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
    this.firebaseApp = getAuth();
  }

  async logIn(provider) {
    const authProvider = this.getProvider(provider);
    return signInWithPopup(this.firebaseApp, authProvider);
  }

  logOut() {
    return this.firebaseApp.signOut();
  }

  onAuthChange(onUserChanged) {
    this.firebaseApp.onAuthStateChanged((user) => {
      onUserChanged(user);
    });
  }

  getProvider(providerName) {
    switch (providerName) {
      case 'Google':
        return this.googleProvider;
      case 'Github':
        return this.githubProvider;
      default:
        throw new Error(`not supported provider${providerName}`);
    }
  }
}

export default AuthService;
