const fetchAPI = async () => {
  const FETCH = await fetch('https://economia.awesomeapi.com.br/json/all');
  const DATA = await FETCH.json();
  delete DATA.USDT;
  return DATA;
};

export default fetchAPI;
