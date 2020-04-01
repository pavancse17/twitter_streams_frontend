const prod = {
  API_URL: "https://myapp.herokuapp.com",
};

const dev = {
  API_URL: "http://localhost:1337",
};

export const config = process.env.NODE_ENV === "development" ? dev : prod;
