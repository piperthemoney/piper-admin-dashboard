import axios from "./../axios";

// Generate code
const getmarchentsDetail = async (id) => {
  try {
    const res = await axios.get(`api/v1/regular-users/${id}`);
    return res.data;
  } catch (error) {
    return error;
  }
};

export default getmarchentsDetail;
