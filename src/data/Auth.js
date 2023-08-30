import { json } from "react-router-dom";

const URL = "http://127.0.0.1:8000/api/";

export const getLugares = async () => {
  try {
    const response = await fetch(`${URL}lugares`);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const authUser = async (data2, navigate) => {
  try {
    const response = await fetch(`${URL}login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data2),
    });

    const data = await response.json();
    console.log(data);
    if (data.api_token) {
      localStorage.setItem("token", data.api_token);
      navigate("/dashboard");
    }

    return data;
  } catch (error) {
    console.log(error);
  }
};
export const registrarUser = async (data2, navigate) => {
  try {
    const response = await fetch(`${URL}registro`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data2),
    });

    const data = await response.json();
    console.log(data);
    if (data.api_token) {
      localStorage.setItem("token", data.api_token);
      navigate("/dashboard");
    }

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const cerrarSesion = async (navigate) => {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(`${URL}logout`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
   

    const data = await response.json();
    console.log(data);
    if (response.status) {
      localStorage.removeItem("token");
      navigate("/");
    }

    return data;
  } catch (error) {
    console.log(error);
  }
};
