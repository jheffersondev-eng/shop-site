import { FaStar, FaShoppingCart } from 'react-icons/fa';
import '../styles/ProductCard.css';

export default function ProductCard({ product = {} }) {
  const {
    id = 1,
    name = 'Produto de Exemplo',
    price = 99.90,
    originalPrice = 149.90,
    discount = 33,
    rating = 4.5,
    reviews = 125,
    image = 'https://via.placeholder.com/250x250?text=Produto',
    badge = 'OFERTA',
  } = product;

  const handleAddToCart = () => {
    console.log('Adicionado ao carrinho:', product);
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <FaStar
          key={i}
          size={12}
          color={i < Math.floor(rating) ? '#ffc107' : '#ddd'}
        />
      );
    }
    return stars;
  };

  return (
    <div className="product-card premium-product-card">
      <div className="product-image-wrapper premium-image-wrapper">
        <img src={image} alt={name} className="product-image premium-image" />

        {badge && <div className="product-badge premium-badge">{badge}</div>}

        {discount > 0 && (
          <div className="product-discount premium-discount">
            <span>{discount}%</span>
            <span>OFF</span>
          </div>
        )}

        <button className="product-add-to-cart premium-add-to-cart" onClick={handleAddToCart}>
          <FaShoppingCart size={18} />
          <span>Adicionar</span>
        </button>
      </div>

      <div className="product-info premium-info">
        <h3 className="product-name premium-name">{name}</h3>

        <div className="product-rating premium-rating">
          <div className="stars">{renderStars(rating)}</div>
          <span className="rating-text">
            {rating} ({reviews})
          </span>
        </div>

        <div className="product-prices premium-prices">
          {originalPrice > price && (
            <span className="original-price premium-original-price">
              R$ {originalPrice.toFixed(2)}
            </span>
          )}
          <span className="current-price premium-current-price">R$ {price.toFixed(2)}</span>
        </div>

        <div className="product-shipping premium-shipping">
          <span>📦 Frete Grátis</span>
        </div>
      </div>
    </div>
  );
}
