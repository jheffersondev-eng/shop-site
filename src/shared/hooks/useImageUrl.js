import { useMemo } from 'react';
import getImageUrl from '../utils/imageUrl';

export default function useImageUrl(imagePath, options = {}) {
  // memoiza o resultado para evitar recomputes desnecessários
  return useMemo(() => getImageUrl(imagePath, options), [imagePath, options.base]);
}
