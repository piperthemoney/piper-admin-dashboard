import axios from "./../axios";
import { toast } from "sonner";

// Generate code
const createbatch = async (data) => {
  const toastId = toast.loading("Creatng Batch...");
  try {
    const res = await axios.post("api/v1/server-manager", data);
    toast.success("Create Batch successfully", {
      id: toastId,
      autoClose: 500, // Auto-close the toast after 5 seconds
    });
    return res.data;
  } catch (error) {
    toast.error(`${error.response.data.message}`, {
      id: toastId,
      autoClose: 500, // Auto-close the toast after 5 seconds
    });
  }
};

export default createbatch;
