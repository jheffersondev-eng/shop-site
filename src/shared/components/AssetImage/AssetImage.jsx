export function AssetImage(path) {
  return `${process.env.REACT_APP_API_STORAGE_URL}/${path}`;
}

export default AssetImage;
