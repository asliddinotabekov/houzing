const { REACT_APP_BASE_URL } = process.env;

export const useRequest = () => {
  const request = async ({
    me,
    url,
    method = "GET",
    body,
    token,
    headers = {},
  }) => {
    if (token)
      headers.Authorization = `Bearer ${localStorage.getItem("token")}`;

    const options = {
      method,
      headers: { ...headers, "Content-Type": "application/json" },
      body: JSON.stringify(body),
    };

    return fetch(
      `${
        me ? "http://127.0.0.1:8081/api" : "http://127.0.0.1:8081/api/v1"
      }${url}`,
      options
    ).then((res) => res.json());
  };

  return request;
};

export default useRequest;