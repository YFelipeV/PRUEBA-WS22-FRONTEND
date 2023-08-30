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
