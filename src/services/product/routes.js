// Construtores de rota para o recurso `product`.
// Mantemos aqui apenas a construção de paths e nomes de endpoint.

export const PRODUCT_PATHS = {
  // Path relativo (a base pode ser diferente para este serviço)
  getAllProductsByFilter: () => '/get-all-products-by-filter',
};

export function buildGetAllProductsParams(
  {
    name,
    category_id,
    unit_id,
    owner_id,
    page,
    page_size,
  } = {}) {
  return {
    name: name ?? null,
    category_id: category_id ?? null,
    unit_id: unit_id ?? null,
    owner_id: owner_id ?? null,
    page: page ?? 1,
    page_size: page_size ?? 10,
  };
}
