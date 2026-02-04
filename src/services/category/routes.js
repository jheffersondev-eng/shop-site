// Construtores de rota para o recurso `category`.
// Mantemos aqui apenas a construção de paths e nomes de endpoint.

export const CATEGORY_PATHS = {
  // Path relativo (a base pode ser diferente para este serviço)
  getAllCategoriesByFilter: () => '/get-all-categories-by-filter',
};

export function buildGetAllCategoriesParams(
  {
    name,
    owner_id,
    category_id,
    page,
    page_size,
  } = {}) {
  return {
    name: name ?? null,
    owner_id: owner_id ?? null,
    category_id: category_id ?? null,
    page: page ?? 1,
    page_size: page_size ?? 10,
  };
}
