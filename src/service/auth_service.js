import { auth, GithubProvider, GoogleProvider } from "./firebase";

class AuthService {
  async login(siteName) {
    const provider = getProvider(siteName);
    const result = await auth.signInWithPopup(provider)
    const id = result.user.uid;
    return id;
  }

  logout() {
    auth.signOut();
  }

  detectAuthStateChange(callback) {
    auth.onAuthStateChanged(callback);
  }
}

function getProvider(siteName) {
  switch (siteName) {
    case "Google":
      return GoogleProvider;
    case "Github":
      return GithubProvider;
    default:
      throw new Error("unknown provider 😢");
  }
}

export default AuthService;