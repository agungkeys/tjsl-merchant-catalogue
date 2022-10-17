const ENDPOINTS = {
  // A

  // B
  BANNERS: '/banners',
  BLOGS: '/blogs',
  // C
  CART_ORDER: '/orders',
  CART_ORDER_DETAIL: (prefix) => `/orders/${prefix}`,
  CART_VALIDATION: '/cart-validation',
  CATEGORIES: '/categories',
  CONFIG: '/config',
  // CASE: (id) => `/cases/${id}`,
  // CASES: '/cases',
  // CASE_BENEFITS: (id) => `/cases/${id}/benefits`,
  // CASE_CALCULATION: (id) => ` /cases/${id}/calculate`,
  // CASE_DAILY_BILLING: (id, billID) => `/cases/${id}/daily-billings/${billID}`,
  // D
  DISTANCE: '/distance',
  // M
  MERCHANT: (slug) => `/merchant/${slug}`,
  MERCHANTS: '/merchants',
  // O
  ORDER_HEALTH: '/place-health',
  // P
  PAYMENTS: '/payments',
  PRODUCTS: '/products',
  PRODUCTS_MERCHANT_LANDING: '/product-list-merchant-landing',
  PRODUCT: '/products',
  PRODUCT_RECOMENDATIONS: '/product-recomendations',
  // R
  RESPONDER: '/responder',
  // S
  SEARCH: '/restaurants/search',
};

export default ENDPOINTS;
