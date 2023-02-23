import { useState, useEffect } from "react";

const useApi = () => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  const request = async (url, method, body = null) => {
    try {
      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(body),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const responseData = await response.json();
      setData(responseData);
    } catch (error) {
      setError(error.message);
    }
  };

  const get = async (url) => {
    await request(url, "GET");
  };

  const post = async (url, body) => {
    if (!token) {
      logout();
      return;
    }
    await request(url, "POST", body);
  };

  const put = async (url, body) => {
    if (!token) {
      logout();
      return;
    }
    await request(url, "PUT", body);
  };

  const del = async (url) => {
    if (!token) {
      logout();
      return;
    }
    await request(url, "DELETE");
  };

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    } else {
      logout();
    }
  }, []);

  return {
    data,
    error,
    get,
    post,
    put,
    del,
    setToken,
    logout,
  };
};

export default useApi;
