import axios from "axios";

// fetch the response and handle response//
export const jsonAxios = async (options) => {
  const response = await axios(options)
    .then((response) => {
      if (response.data && response.data.error) {
        return response.data.error;
      } else {
        return response;
      }
    })
    .catch((error) => {});
  return response;
};
