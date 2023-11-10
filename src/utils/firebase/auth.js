import { getAuth, signInWithPopup, GoogleAuthProvider, signOut,onAuthStateChanged } from "firebase/auth";
import app from "./firebase";

const auth = getAuth(app);

export const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();

  return signInWithPopup(auth, provider);
};

export const logout = () => signOut(auth);

// 로그인 상태 변경 리스너 추가
export const addAuthStateChangedListener = (callback) => {
  onAuthStateChanged(auth, callback);
};

export default auth;


