import FetchRequest from '../helpers/fetchRequest';

const BASE_URL = 'https://api.spacexdata.com/v3/';
const ENDPOINTS = {
  rockets: 'rockets/',
  missions: 'missions/',
};

const getMissionsFromAPI = async () => {
  const fetchRequest = new FetchRequest({
    url: BASE_URL + ENDPOINTS.missions,
  });
  try {
    const missions = await fetchRequest.call();
    return missions;
  } catch (error) {
    throw new Error(error);
  }
};

const getRocketsFromAPI = async () => {
  const fetchRequest = new FetchRequest({
    url: BASE_URL + ENDPOINTS.rockets,
  });
  try {
    const missions = await fetchRequest.call();
    return missions;
  } catch (error) {
    throw new Error(error);
  }
};
