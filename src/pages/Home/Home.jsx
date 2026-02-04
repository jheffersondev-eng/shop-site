
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/Home.css';
import { AssetImage } from '../../shared/components/AssetImage/AssetImage';
import companyService from '../../services/company/companyService';
import LoadingScreen from '../../components/LoadingScreen';

export default function Home() {
  const navigate = useNavigate();

  // Mock de produtos em promoção
  const promoProducts = [
    { id: 1, name: 'Tênis UrbanX', price: 299, oldPrice: 399, image: 'https://via.placeholder.com/120x120?text=Promo1', discount: 25 },
    { id: 2, name: 'Luminária CasaViva', price: 149, oldPrice: 199, image: 'https://via.placeholder.com/120x120?text=Promo2', discount: 20 },
    { id: 3, name: 'Kit Skincare Lumière', price: 89, oldPrice: 129, image: 'https://via.placeholder.com/120x120?text=Promo3', discount: 31 },
  ];
  // Mock de produtos mais avaliados
  const topRatedProducts = [
    { id: 4, name: 'Camisa Aurora', price: 189, rating: 4.9, image: 'https://via.placeholder.com/120x120?text=Top1', reviews: 120 },
    { id: 5, name: 'Fone FitPrime', price: 499, rating: 4.8, image: 'https://via.placeholder.com/120x120?text=Top2', reviews: 98 },
    { id: 6, name: 'Óleo Essencial Lumière', price: 59, rating: 4.7, image: 'https://via.placeholder.com/120x120?text=Top3', reviews: 87 },
  ];

  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCompanies() {
      setLoading(true);
      setError(null);
      try {
        const response = await companyService.getAllCompaniesByFilter(
          { id: '', name: null, page: 1, page_size: 6 }
        );
        
        const payload = response.data && response.data.data ? response.data.data : response.data || [];
        const companiesArray = Array.isArray(payload) ? payload : [];
        setCompanies(companiesArray);

      } catch (err) {
        setError(err);
        console.error('Erro ao buscar companies:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchCompanies();
  }, []);

  if (loading) return <LoadingScreen message="Carregando loja..." />;
  if (error) return <div className="error">Erro ao carregar loja.</div>;

  return (
    <div className="home premium-home">
      {/* Hero minimalista */}
      <section className="store-hero">
        <div className="store-hero-content">
          <h1 className="store-hero-title">Descubra marcas.<br />Explore universos.</h1>
          <p className="store-hero-sub">Marketplace de marcas independentes. Menos elementos. Mais impacto.</p>
        </div>
        <div className="store-hero-grid">
          <div className="store-grid">
            {companies.map((company) => (
              <div
                key={company.id}
                className="store-card-premium fade-in"
                onClick={() => navigate(`/store/${company.id}`)}
                tabIndex={0}
                role="button"
                onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && navigate(`/store/${company.id}`)}
              >
                <div className="store-card-logo-premium" style={{ borderColor: company.primaryColor}}>
                  <img src={AssetImage(company.image)} alt={company.fantasyName} className="store-logo-img-premium" />
                </div>
                <div className="store-card-content-premium">
                  <h2 className="store-name-premium">{company.fantasyName}</h2>
                  <span className="store-category-premium">{company.slogan}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Área de produtos em promoção */}
      <section className="promo-products-section">
        <div className="section-header">
          <h2 className="section-title">Ofertas Especiais</h2>
          <span className="section-sub">Produtos selecionados com descontos exclusivos</span>
        </div>
        <div className="promo-products-list">
          {promoProducts.map(product => (
            <div key={product.id} className="promo-product-card fade-in">
              <div className="promo-product-img-wrap">
                <img src={product.image} alt={product.name} className="promo-product-img" />
                <span className="promo-badge">-{product.discount}%</span>
              </div>
              <div className="promo-product-info">
                <h3 className="promo-product-name">{product.name}</h3>
                <div className="promo-product-prices">
                  <span className="promo-product-price">R$ {product.price}</span>
                  <span className="promo-product-oldprice">R$ {product.oldPrice}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Área de produtos mais avaliados */}
      <section className="toprated-products-section">
        <div className="section-header">
          <h2 className="section-title">Mais bem avaliados</h2>
          <span className="section-sub">Produtos favoritos dos clientes</span>
        </div>
        <div className="toprated-products-list">
          {topRatedProducts.map(product => (
            <div key={product.id} className="toprated-product-card fade-in">
              <div className="toprated-product-img-wrap">
                <img src={product.image} alt={product.name} className="toprated-product-img" />
              </div>
              <div className="toprated-product-info">
                <h3 className="toprated-product-name">{product.name}</h3>
                <div className="toprated-product-rating">
                  <span className="star">★</span> {product.rating} <span className="reviews">({product.reviews})</span>
                </div>
                <span className="toprated-product-price">R$ {product.price}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
