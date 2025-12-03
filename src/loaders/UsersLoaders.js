import axios from "axios";

export const getUsers = async () => {
  const responce = await axios.get("https://api.github.com/users");
  return responce.data;
};
