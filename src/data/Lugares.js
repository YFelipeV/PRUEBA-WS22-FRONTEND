const URL = "http://127.0.0.1:8000/api/";

export const getLugares = async () => {
  try {
    const token = localStorage.getItem("token");

    const response = await fetch(`${URL}lugares`, {
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
export const buscarLugares = async (id) => {
  try {
    const token = localStorage.getItem("token");

    const response = await fetch(`${URL}lugares/${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const createLugares = async (formData) => {
  try {
    const token = localStorage.getItem("token");

    const response = await fetch(`${URL}lugares`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    const data = await response.json();
    console.log(response)
    if (response.status == 201) {
      alert("creado exitosamente");

    }

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteLugares = async (id) => {
  try {
    const token = localStorage.getItem("token");

    const response = await fetch(`${URL}lugares/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    if (response.status == 200) {
      alert(data.mensaje);
    } if (data.mensaje) {
      alert(data.mensaje);

    }
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
