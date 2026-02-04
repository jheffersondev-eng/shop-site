import getImageUrl from '../../utils/imageUrl';

export function AssetImage(path) {
  return `http://localhost:8000/storage/${path}`;
}

export default AssetImage;
