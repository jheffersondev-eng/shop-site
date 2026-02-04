// Helper para construir URLs públicas de imagens a partir do path vindo do banco.
// Local dev default mapeia para a pasta servida pelo XAMPP: C:\\xampp\\htdocs\\www\\shop\\public\\storage
export function getImageUrl(imagePath, { base } = {}) {
  const COMPANY_IMAGE_BASE = base || process.env.REACT_APP_COMPANY_IMAGE_BASE || 'http://localhost/shop/public/storage';
  if (!imagePath) return null;
  if (imagePath.startsWith('http')) return imagePath;
  const cleanBase = COMPANY_IMAGE_BASE.replace(/\/$/, '');
  const cleanPath = imagePath.replace(/^\//, '');
  return `${cleanBase}/${cleanPath}`;
}

export default getImageUrl;
