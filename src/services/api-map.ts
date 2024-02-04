import apisauce from 'apisauce';

function create() {
  const api = apisauce.create({
    baseURL: 'https://dapi.kakao.com/v2/local/search/',
    headers: {
      Accept: 'application/json',
      Authorization: 'KakaoAK 95cc1e89c6d1ad830b38c360150312b7',
    },
  });

  function getGeocoding(text: string) {
    return api.get<any>(`keyword?query=${text}`);
  }

  return {
    getGeocoding,
  };
}

export default create();
