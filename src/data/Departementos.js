const URL = "http://127.0.0.1:8000/api/";

export const getDepartamento = async () => {
  try {
    const token = localStorage.getItem("token");

    const response = await fetch(`${URL}departamento`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const createDepratamento = async (departamento) => {
  try {
    const token = localStorage.getItem("token");

    const response = await fetch(`${URL}departamento`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({departamento}),
    });

    const data = await response.json();
    alert(data.mensaje);

    console.log(data);
    if (response.status == 200) {
      location.reload();
    }
  } catch (error) {
    console.log(error);
  }
};
