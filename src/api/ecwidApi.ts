import axios from 'axios';
import { API_CONFIG } from '../config/apiConfig';

//Пока не знаю как достать данные, условно такой формат
export const getProducts = async () => {
  const response = await axios.get(
    `${API_CONFIG.BASE_URL}/${API_CONFIG.STORE_ID}/products`,
    {
      params: { token: API_CONFIG.TOKEN },
    }
  );
  return response.data.items;
};
