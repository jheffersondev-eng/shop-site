import api from '../api';
import { PRODUCT_PATHS, buildGetAllProductsParams } from './routes';

const PRODUCT_API_BASE = process.env.REACT_APP_API_URL + '/product';

export const productService = {
  getAllProductsByFilter: (
    filter = { name: '', category_id: '',  unit_id: '',  owner_id: '', page: 1, page_size: 10 },
    { token = null, apiKey = 'shop_api_123' } = {}
  ) => {
    const params = buildGetAllProductsParams(filter);
    const headers = { 'X-API-KEY': apiKey };
    if (token) headers.Authorization = `Bearer ${token}`;

    return api.get(PRODUCT_API_BASE + PRODUCT_PATHS.getAllProductsByFilter(), {
      params,
      headers,
    });
  },
};

export default productService;
