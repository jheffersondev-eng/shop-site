// Construtores de rota para o recurso `company`.
// Mantemos aqui apenas a construção de paths e nomes de endpoint.

export const COMPANY_PATHS = {
  // Path relativo (a base pode ser diferente para este serviço)
  getAllCompaniesByFilter: () => '/get-all-companies-by-filter',
};

export function buildGetAllCompaniesParams(
    { 
        id = '', 
        name = '', 
        page = 1, 
        page_size = 10 
    } = {}) {
  return {
    id,
    name,
    page,
    page_size,
  };
}
