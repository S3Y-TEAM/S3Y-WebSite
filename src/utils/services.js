export const postRequest = async (url, body) => {
  const role = localStorage.getItem("role");
  const ut = JSON.parse(localStorage.getItem("user"))?.token;
  console.log("body", body, "token", ut);
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

export const postRequestWithFiles = async (url, body) => {
  const role = localStorage.getItem("role");
  const ut = JSON.parse(localStorage.getItem("user"))?.token;

  let headers = {
    Authorization: `Bearer ${ut}`,
    role: role,
    //"Content-Type": "multipart/form-data",
  };

  // Only set Content-Type header if the body is not FormData
  if (!(body instanceof FormData)) {
    headers["Content-Type"] = "application/json";
    body = JSON.stringify(body);
  }

  const res = await fetch(url, {
    method: "POST",
    headers: headers,
    body: body,
  });
  // const res = await fetch(url, {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "multipart/form-data",
  //     Authorization: `Bearer ${
  //       JSON.parse(localStorage.getItem("user"))?.token
  //     }`,
  //     role: role,
  //   },
  //   body,
  // });
  const data = await res.json();
  //console.log("data", data, data.data);

  if (!res.ok) {
    console.log(data.message);
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
