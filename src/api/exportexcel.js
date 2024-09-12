import axios from "axios";

const getexcel = async (id) => {
  try {
    const res = await axios.get(`api/v1/regular-users/export/${id}`, {
      responseType: "blob",
    });
    return res.data;
  } catch (error) {
    return error;
  }
};

export default getexcel;
