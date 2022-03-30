const baseUrl = process.env.REACT_APP_API_URL;

export const fetchSummation = (endpoint, data) => {
  const url = `${baseUrl}${endpoint}`;

  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};
