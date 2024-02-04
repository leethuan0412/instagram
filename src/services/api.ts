import AsyncStorage from '@react-native-async-storage/async-storage';
import apisauce from 'apisauce';
import Config from 'react-native-config';

function create() {
  const api = apisauce.create({
    baseURL: Config.SERVER_PATH,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    timeout: 10000,
  });

  api.addRequestTransform(async () => {
    const accessToken =
      (await AsyncStorage.getItem('access_token')) || 'non-member';

    if (accessToken === 'non-member') {
      api.deleteHeader('Authorization');
    }
  });

  function setAuthorizationToken(token: string | undefined) {
    if (token) {
      api.setHeader('Authorization', `Bearer ${token}`);
    } else {
      api.deleteHeader('Authorization');
    }
  }

  return {
    setAuthorizationToken,
  };
}

const Api = create();

export default Api;
