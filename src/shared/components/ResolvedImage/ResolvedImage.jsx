import React from 'react';
import getImageUrl from '../../utils/imageUrl';

export default function ResolvedImage({ path, alt = '', className = '', style = {}, placeholder = null, ...rest }) {
  const src = getImageUrl(path) || placeholder || `https://via.placeholder.com/120x120?text=${encodeURIComponent(alt || 'Image')}`;
  return <img src={src} alt={alt} className={className} style={style} {...rest} />;
}
