import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();

  const login = async (email, password, role) => {
    try {
      setError(null);
      setIsLoading(true);

      let res = await fetch(
        "https://s3-y-api-s3y-service.vercel.app/api/v1/signin/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json", role: role },
          body: JSON.stringify({ email, password }),
        }
      );
      const data = await res.json();
      console.log("data", data);
      if (res.ok) {
        const authorizationHeader = res.headers.get("authorization");
        const token = authorizationHeader
          ? authorizationHeader.split(" ")[1]
          : null;

        const userObject = {
          token: token,
          userData: data.data,
        };
        localStorage.setItem("user", JSON.stringify(userObject));

        dispatch({
          type: "LOGIN",
          payload: JSON.stringify(userObject),
        });
        navigate("/LoginSuccess");
      }
      if (!res.ok) {
        console.log("error", data.message);
        setError(data.message);
      }
    } catch (e) {
      console.log(e);
      setError(e);
    } finally {
      setIsLoading(false);
    }
  };
  return { error, isLoading, login };
};

export default useLogin;
