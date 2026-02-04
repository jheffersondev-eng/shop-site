/**
 * Shared Constants - API
 */

export const API_ENDPOINTS = {
  // Products
  PRODUCTS: '/products',
  PRODUCT_BY_ID: (id) => `/products/${id}`,
  PRODUCTS_BY_CATEGORY: (categoryId) => `/categories/${categoryId}/products`,
  SEARCH_PRODUCTS: '/products/search',

  // Categories
  CATEGORIES: '/categories',
  CATEGORY_BY_ID: (id) => `/categories/${id}`,

  // Cart
  CART: '/cart',
  CART_ITEMS: '/cart/items',

  // Orders
  ORDERS: '/orders',
  ORDER_BY_ID: (id) => `/orders/${id}`,

  // Auth
  LOGIN: '/auth/login',
  REGISTER: '/auth/register',
  LOGOUT: '/auth/logout',
  REFRESH_TOKEN: '/auth/refresh',

  // User
  USER_PROFILE: '/user/profile',
  USER_ADDRESSES: '/user/addresses',
  USER_ORDERS: '/user/orders',
};

export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_ERROR: 500,
};

export const API_MESSAGES = {
  ERROR_GENERIC: 'Ocorreu um erro ao processar a solicitação',
  ERROR_NETWORK: 'Erro de conexão. Verifique sua internet',
  ERROR_TIMEOUT: 'A solicitação expirou',
  ERROR_UNAUTHORIZED: 'Você precisa fazer login',
  SUCCESS_GENERIC: 'Operação realizada com sucesso',
};
