import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut 
} from "firebase/auth";
import app from "../firebase.js";

// Inicializa a autenticação usando a configuração do Firebase
const auth = getAuth(app);

// Função para CADASTRAR novo usuário
export const registerUser = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(`User registered with UID: ${user.uid.substring(0, 6)}***************`);
      return user;
    })
    .catch((error) => {
      console.error(`code: ${error.code}, Message: ${error.message}`);
      throw error;
    });
};

// Função para FAZER LOGIN do usuário
export const loginUser = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(`User logged in with UID: ${user.uid.substring(0, 6)}***************`);
      return user;
    })
    .catch((error) => {
      console.error(`code: ${error.code}, Message: ${error.message}`);
      throw error;
    });
};

// Função para DESLOGAR
export const logoutUser = () => {
  return signOut(auth);
};
