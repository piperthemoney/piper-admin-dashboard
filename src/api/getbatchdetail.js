import axios from "./../axios";

// Generate code
const getbatchdetail = async (id) => {
  try {
    const res = await axios.get(`api/v1/server-manager/${id}`);
    return res.data;
  } catch (error) {
    return error;
  }
};

export default getbatchdetail;
