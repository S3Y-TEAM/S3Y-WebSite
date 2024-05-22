export const postRequest = async (url, body) => {
  const role = localStorage.getItem("role");
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${
        JSON.parse(localStorage.getItem("user"))?.token
      }`,
      role: role,
    },
    body,
  });
  const data = await res.json();

  if (!res.ok) {
    return { error: data.message };
  }
  return data.data;
};

export const getRequest = async (url) => {
  const role = localStorage.getItem("role");

  const res = await fetch(url, {
    //mode: "no-cors",
    headers: {
      Authorization: `Bearer ${
        JSON.parse(localStorage.getItem("user"))?.token
      }`,
      role: role,
    },
  });
  const data = await res.json();
  if (!res.ok) {
    return { error: data.message };
  }
  return data.data;
};
