export const postRequest = async (url, body) => {
  const role = localStorage.getItem("role");
  const ut = JSON.parse(localStorage.getItem("user"))?.token;
  console.log("body", body, "token", ut);
  const res = await fetch(`https://s3-y-api-s3y-service.vercel.app/${url}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${ut}`,
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
  };

  if (!(body instanceof FormData)) {
    headers["Content-Type"] = "application/json";
    body = JSON.stringify(body);
  }

  const res = await fetch(`https://s3-y-api-s3y-service.vercel.app/${url}`, {
    method: "POST",
    headers: headers,
    body: body,
  });
  const data = await res.json();

  if (!res.ok) {
    console.log(data.message);
    return { error: data.message };
  }
  return data.data;
};

export const getRequest = async (url) => {
  const role = localStorage.getItem("role");

  const res = await fetch(`https://s3-y-api-s3y-service.vercel.app/${url}`, {
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
