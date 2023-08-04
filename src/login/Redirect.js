import { useNavigate } from "react-router-dom";

export function Redirect() {
  const navigate = useNavigate();
  return navigate("/newuserflow");
}

export default Redirect;
