import axios from "./../axios";

// Generate code
const getmonitor = async () => {
  try {
    const res = await axios.get("api/v1/monitor");
    return res.data;
  } catch (error) {
    return error;
  }
};

export default getmonitor;
