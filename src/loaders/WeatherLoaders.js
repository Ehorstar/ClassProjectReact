import axios from "axios";

export const getWeather = async ({ request }) => {
  const apiKey = "a4ed9ec3dbf8ab00d343f33d13e975be";
  const url = new URL(request.url);
  const city = url.searchParams.get("q") || "Chervonohryhorivka";

  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=ua`
    );
    return response.data;
  } catch (error) {
    if (error.response?.status === 404) {
      return null; 
    }
    throw error; 
  }
};
