import axios from "axios";
import HttpDataListener from "./HttpDataListener";

export const BASE_URL = "https://fakestoreapi.com";

export const get = async (
  route: string,
  httpDataListener: HttpDataListener
) => {
  try {
    const response = await axios.get(BASE_URL + route, {
      headers: authHeader(),
    });
    httpDataListener.onSuccess(response.data);
  } catch (err) {
    if (axios.isAxiosError(err)) {
      try {
        if (err!.response!.status === 401) {
          // logout();
        } else {
          httpDataListener.onFailure(getError(err));
        }
      } catch {
        httpDataListener.onFailure("An error occurred, please try again");
      }
    } else {
      httpDataListener.onFailure("An error occurred, please try again");
    }
  }
};

const authHeader = () => {
  //   const curUser = getUserToken();
  const curUser: any = "";
  const header = {
    "Content-Type": "application/json",
    Authorization: `${curUser?.token_type} ${curUser?.access_token}`,
    API_SHARED_KEY: "x",
  };
  return header;
};
const getError = (error: any) => {
  try {
    return error.response.data.Error;
  } catch {
    return "An error occurred, please try again";
  }
};
