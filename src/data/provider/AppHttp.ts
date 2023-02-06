import axios from "axios";
import HttpDataListener from "./HttpDataListener";

export const BASE_URL = "https://";

export const get = async (
  route: string,
  page: number,
  httpDataListener: HttpDataListener
) => {
  try {
    //  let paramsData = Object.entries(data);
    //  paramsData.map((dataKey) => {
    //    formData.append(dataKey[0], `${dataKey[1]}`);
    //  });
    const response = await axios.get(BASE_URL + route, {
      // headers: authHeader(),
    });
    httpDataListener.onSuccess(response);
  } catch (err) {
    if (axios.isAxiosError(err)) {
      try {
        if (err!.response!.status === 401) {
          // logout;
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
  const header = {
    "Content-Type": "application/json",
    "x-api-key":
      "live_4nkxyMWdpFit49dc3MVAu6RdYsKmeSwTgbTBumk2yYmATz22iRG2m4dQ0GvePBMf",
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
