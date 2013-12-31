import axios from "axios";

const fetcher = async (opts) => {
  try {
    const response = await axios({ ...opts });
    return response.data;
  } catch (error) {
    console.error("API Error:", error?.message);
    throw error;
  }
};
export default fetcher;
