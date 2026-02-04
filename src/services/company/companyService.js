import api from '../api';
import { COMPANY_PATHS, buildGetAllCompaniesParams } from './routes';

const COMPANY_API_BASE = process.env.REACT_APP_API_URL + '/company';
const API_KEY = process.env.REACT_APP_API_KEY;

export const companyService = {
  getAllCompaniesByFilter: (
    filter = { id: '', name: '', page: 1, page_size: 10 },
    { token = null, apiKey = API_KEY } = {}
  ) => {
    const params = buildGetAllCompaniesParams(filter);
    const headers = { 'X-API-KEY': apiKey };
    if (token) headers.Authorization = `Bearer ${token}`;

    return api.get(COMPANY_API_BASE + COMPANY_PATHS.getAllCompaniesByFilter(), {
      params,
      headers,
    });
  },
};

export default companyService;
