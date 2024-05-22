import { useAuthContext } from "./useAuthContext";

function useLogout() {
  const { dispatch } = useAuthContext();
  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("role");
    dispatch({ type: "LOGOUT" });
  };
  return { logout };
}

export default useLogout;
