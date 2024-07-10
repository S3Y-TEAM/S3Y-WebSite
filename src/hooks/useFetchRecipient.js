import { useEffect, useState } from "react";
import { getRequest } from "../utils/services";

export let useFetchRecipient = (chat, user) => {
  let [recipient, setRecipient] = useState(null);
  const [error, setError] = useState(null);
  const role = localStorage.getItem("role") === "dev" ? "emp" : "dev";
  const recipientId = chat?.members?.find((id) => id != user?.userData?.id);

  useEffect(() => {
    const getUser = async () => {
      if (!recipientId) return null;
      const res = await getRequest(`api/v1/user/${role}/${recipientId}`);
      if (res.error) {
        console.log("error");
        return setError(res.error);
      }
      setRecipient(res.user);
    };
    getUser();
  }, [recipientId]);

  return { recipient, recipientId, error };
};
