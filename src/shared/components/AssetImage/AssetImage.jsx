export function AssetImage(path) {
  const baseUrl = process.env.REACT_APP_API_STORAGE_URL;
  return `${baseUrl}/${path}`;
}

export default AssetImage;
