import axios from "./../axios";

// Generate code
const generateCode = async (data) => {
  try {
    const res = await axios.post("api/v1/regular-users", data);
    return res.data;
  } catch (error) {
    return error;
  }
};

export default generateCode;
