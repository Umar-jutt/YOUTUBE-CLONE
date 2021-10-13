import firebase from "../../firebase";
import auth from "../../firebase";

export const login = () => async (dispatch) => {
  try {
    const provider = new firebase.auth.GoogleAuthprovider();

    const res = await auth.signInWithPopup(provider);
    console.log(res);
  } catch (error) {}
};
