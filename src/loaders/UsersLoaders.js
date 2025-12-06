import axios from "axios";

export const getUsers = async () => {
  const response = await axios.get("https://api.github.com/users");
  return response.data;
};

export const getUser = async ({ params }) => {
  const response = await axios.get(
    "https://api.github.com/users/" + params.login
  );
  return response.data;
};
