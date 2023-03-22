import axios from "axios";

const API_URL = "http://localhost:8000/api/v1";
const tokenFromStorage = JSON.parse(localStorage.getItem("token"));

const getArticles = async (page) => {
  try {
    const response = await axios.get(
      API_URL + "/articles" + "?" + "page=" + `${page}`
    );

    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

const createArticle = async (payload) => {
  const config = {
    headers: {
      token: `bearer ${tokenFromStorage}`,
    },
  };
  try {
    const response = await axios.post(
      API_URL + "/article/create",
      { content: payload },
      config
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const getArticleById = async (id) => {
  try {
    const response = await axios.get(API_URL + "/article/" + id);

    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

const deleteArticle = async (id) => {
  const config = {
    headers: {
      token: `bearer ${tokenFromStorage}`,
    },
  };
  try {
    const response = await axios.delete(
      API_URL + "/article/remove/" + id,
      config
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const updateArticle = async (payload) => {
  try {
    const config = {
      headers: {
        token: `bearer ${tokenFromStorage}`,
      },
    };
    const response = await axios.put(
      API_URL + "/article/update/" + payload.id,
      payload.data,
      config
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const likeArticle = async (payload) => {
  const tokenFromStorage = JSON.parse(localStorage.getItem("token"));
  try {
    const config = {
      headers: {
        token: `bearer ${tokenFromStorage}`,
      },
    };
    const response = await axios.put(
      API_URL + "/like/" + payload.ArticleId,
      undefined,
      config
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const createComment = async ({ ArticleId, text }) => {
  try {
    const config = {
      headers: {
        token: `bearer ${tokenFromStorage}`,
      },
    };
    const response = await axios.put(
      API_URL + "/comment/" + ArticleId,
      { text: text },
      config
    );

    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

export default {
  getArticles,
  getArticleById,
  deleteArticle,
  updateArticle,
  createArticle,
  likeArticle,
  createComment,
};
