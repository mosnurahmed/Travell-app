
import { useAuth0 } from "@auth0/auth0-react";
import { userEmail } from "./userEmail";


function ProtectedRoute({ children }) {
  const { loginWithRedirect} = useAuth0();


  const  user= userEmail();



  return user ? children : loginWithRedirect();

}

export default ProtectedRoute;
