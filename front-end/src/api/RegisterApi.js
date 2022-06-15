import { jsonAxios } from "./JsonFetch";

//login
export const getUser = async (MobileNo) => {
  try {
    const url = `/api/user?MobileNo=${MobileNo}`;
    const response = await jsonAxios({
      url: url,
      method: "get",
    });
    return response;
  } catch (err) {
    throw err;
  }
};

//register
export const saveUser = async (data) => {
  try {
    const url = `/api/user/add`;
    const response = await jsonAxios({
      url: url,
      method: "post",
      data: data,
    });
    return response;
  } catch (err) {
    throw err;
  }
};

//save participant
export const saveParticipants = async (data) => {
  try {
    const url = `/api/participants/add`;
    const response = await jsonAxios({
      url: url,
      method: "post",
      data: data,
    });
    return response;
  } catch (err) {
    throw err;
  }
};

//save sports
export const saveSports = async (data) => {
  try {
    const url = `/api/sports/add`;
    const response = await jsonAxios({
      url: url,
      method: "post",
      data: data,
    });
    return response;
  } catch (err) {
    throw err;
  }
};

//save particpant list
export const saveParticipantsList = async (data) => {
  try {
    const url = `/api/sports/add`;
    const response = await jsonAxios({
      url: url,
      method: "post",
      data: data,
    });
    return response;
  } catch (err) {
    throw err;
  }
};

//save venue
export const saveVenue = async (data) => {
  try {
    const url = `/api/sports/add`;
    const response = await jsonAxios({
      url: url,
      method: "post",
      data: data,
    });
    return response;
  } catch (err) {
    throw err;
  }
};
