import api from '../api';
import { CATEGORY_PATHS, buildGetAllCategoriesParams } from './routes';

const CATEGORY_API_BASE = process.env.REACT_APP_API_URL + '/category';

export const categoryService = {
  getAllCategoriesByFilter: (
    filter = { name: '', category_id: '',  owner_id: '', page: 1, page_size: 10 },
    { token = null, apiKey = 'shop_api_123' } = {}
  ) => {
    const params = buildGetAllCategoriesParams(filter);
    const headers = { 'X-API-KEY': apiKey };
    if (token) headers.Authorization = `Bearer ${token}`;

    return api.get(CATEGORY_API_BASE + CATEGORY_PATHS.getAllCategoriesByFilter(), {
      params,
      headers,
    });
  },
};

export default categoryService;
  