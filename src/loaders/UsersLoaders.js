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

export const getSearchUsers = async ({request}) => {
  const url = new URL(request.url);
  const s = url.searchParams.get("q");
  const page = url.searchParams.get("page") || 1;

  const response = await axios.get(`https://api.github.com/search/users?q=${s}+in:login&page=${page}`);
  return response.data;
};
