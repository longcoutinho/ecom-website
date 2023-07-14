import axios from "../utils/axios";

export const request = (body: any) => {
  const data = body ? JSON.stringify(body) : undefined;
  const config = {
    method: "POST",
    url: `/api`,
    data: data,
    headers: {
      "Content-Type": "application/json",
    },
  };
  return axios(config);
};
