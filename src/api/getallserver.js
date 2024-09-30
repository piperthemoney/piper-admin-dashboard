import axios from "./../axios";

// Generate code
const getallserver = async () => {
  try {
    const res = await axios.get("api/v1/server-manager/overview");
    return res.data;
  } catch (error) {
    return error;
  }
};

export default getallserver;
