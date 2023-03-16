import axios from "axios";

const API_URL = "http://localhost:8000/api/v1/post";
const tokenFromStorage = JSON.parse(localStorage.getItem("token"));

const getPosts = async () => {
  try {
    const response = await axios.get(API_URL + "/find/all");

    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

const createPost = async (payload) => {
  const config = {
    headers: {
      token: `bearer ${tokenFromStorage}`,
    },
  };
  try {
    const response = await axios.post(API_URL + "/create", payload, config);

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const getPostById = async (id) => {
  try {
    const response = await axios.get(API_URL + "/read/" + id);

    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

const deletePost = async (id) => {
  const config = {
    headers: {
      token: `bearer ${tokenFromStorage}`,
    },
  };
  try {
    const response = await axios.get(API_URL + "/delete/" + id, config);

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const updatePost = async (payload) => {
  try {
    const config = {
      headers: {
        token: `bearer ${tokenFromStorage}`,
      },
    };
    const response = await axios.get(
      API_URL + "/update/" + payload.id,
      payload.data,
      config
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const likePost = async (payload) => {
  const tokenFromStorage = JSON.parse(localStorage.getItem("token"));
  try {
    const config = {
      headers: {
        token: `bearer ${tokenFromStorage}`,
      },
    };
    const response = await axios.put(
      API_URL + "/like/" + payload.postId,
      undefined,
      config
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default {
  getPosts,
  getPostById,
  deletePost,
  updatePost,
  createPost,
  likePost,
};
