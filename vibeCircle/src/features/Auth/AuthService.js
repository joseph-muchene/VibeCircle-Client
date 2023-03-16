import axios from "axios";

const API_URL = "http://localhost:8000/api/v1/user";

const registerUser = async (payload) => {

  try {
    const user = await axios.post(API_URL + "/create", payload);
    const { name, email, _id, isAdmin } = user.data;
    const userData = {
      name,
      email,
      _id,
      isAdmin,
    };

    localStorage.setItem("user", JSON.stringify(userData));

    return user.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

const SignInUser = async (payload) => {
  try {
    const response = await axios.post(
      "http://localhost:8000/api/v1/auth/login",
      payload
    );
    const { name, _id, email, token } = response.data;

    localStorage.setItem("auth", JSON.stringify({ name, _id, email, token }));
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

const getUserById = async (_id) => {
  try {
    const response = await axios.get(API_URL + "/find/" + `${_id}`);


    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

const updateUser = async (payload) => {
  const { data, id } = payload;

  const tokenFromStorage = JSON.parse(localStorage.getItem("token"));

  try {
    const config = {
      headers: {
        token: `bearer ${tokenFromStorage}`,
      },
    };
    const response = await axios.put(
      API_URL + "/update/" + id,
      { name: data.name, email: data.email, password: data.password },
      config
    );
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};
const userServiceData = {
  registerUser,
  SignInUser,
  getUserById,
  updateUser,
};

export default userServiceData;
