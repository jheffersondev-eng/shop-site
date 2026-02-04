import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../../styles/StorePage.css';
import companyService from '../../services/company/companyService';
import productService from '../../services/product/productService';
import categoryService from '../../services/category/categoryService';
import { AssetImage } from '../../shared/components/AssetImage/AssetImage';
import LoadingScreen from '../../components/LoadingScreen';

export default function StorePage() {
  const { storeId } = useParams();
  const [companyData, setCompanyData] = useState(null);
  const [productsData, setProductsData] = useState(null);
  const [categoriesData, setCategoriesData] = useState(null);
  const [activeTab, setActiveTab] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const truncateDescription = (text = '') => {
    const normalized = String(text);
    if (normalized.length <= 84) return normalized;
    return `${normalized.slice(0, 84).trimEnd()}...`;
  };

  useEffect(() => {
    let mounted = true;
    async function fetchCompany() {
      setLoading(true);
      setError(null);
      try {
        const response = await companyService.getAllCompaniesByFilter(
          { id: storeId || '', name: null, page: 1, page_size: 1 }
        );

        if (!mounted) return;
        const payload = response.data && response.data.data ? response.data.data : response.data || [];
        const companiesArray = Array.isArray(payload) ? payload : [];
        const company = companiesArray[0] || null;
        setCompanyData(company);
      } catch (err) {
        if (!mounted) return;
        setError(err);
        console.error('Erro ao buscar companies:', err);
      } finally {
        if (mounted) setLoading(false);
      }
    }

    fetchCompany();
    return () => {
      mounted = false;
    };
  }, [storeId]);

  useEffect(() => {
    let mounted = true;
    const ownerId = companyData?.owner?.id || companyData?.ownerId;
    if (!ownerId) return;
    async function fetchProducts() {
      setLoading(true);
      setError(null);
      try {
        const response = await productService.getAllProductsByFilter(
          {
            owner_id: ownerId,
            name: null,
            category_id: null,
            unit_id: null,
            page: 1,
            page_size: 50
          }
        );

        if (!mounted) return;

        const payload = response.data && response.data.data ? response.data.data : response.data || [];
        const productsArray = Array.isArray(payload) ? payload : [];
        setProductsData(productsArray);

      } catch (err) {
        if (!mounted) return;
        setError(err);
        console.error('Erro ao buscar products:', err);
      } finally {
        if (mounted) setLoading(false);
      }
    }

    fetchProducts();
  }, [companyData]);

  useEffect(() => {
    let mounted = true;
    const ownerId = companyData?.owner?.id || companyData?.ownerId;
    if (!ownerId) return;
    async function fetchCategories() {
      setLoading(true);
      setError(null);
      try {
        const response = await categoryService.getAllCategoriesByFilter(
          {
            owner_id: ownerId,
            name: null,
            category_id: null,
            page: 1,
            page_size: 6
          }
        );

        if (!mounted) return;

        const payload = response.data && response.data.data ? response.data.data : response.data || [];
        const categoriesArray = Array.isArray(payload) ? payload : [];
        setCategoriesData(categoriesArray);
        if (categoriesArray.length > 0) {
          setActiveTab(categoriesArray[0].id);
        }
      } catch (err) {
        if (!mounted) return;
        setError(err);
        console.error('Erro ao buscar categories:', err);
      } finally {
        if (mounted) setLoading(false);
      }
    }

    fetchCategories();
  }, [companyData]);

  // Filtra produtos da produtos ativos
  const filteredProducts = (productsData || []).filter(product => {
    if (!activeTab) return true;
    const productCategoryId = product.category_id || product.category?.id || product.category;
    return productCategoryId === activeTab;
  });

  if (loading) return <LoadingScreen message="Carregando loja..." />;
  if (error) return <div className="error">Erro ao carregar loja.</div>;

  return (
    <div className="store-page-editorial">
      {/* Header da loja - editorial */}
      <header className="store-header-editorial">
        <div className="store-header-content-editorial">
          <div className="store-header-logo-editorial" style={{ borderColor: companyData?.accent }}>
            <img src={AssetImage(companyData?.image)} alt={companyData?.name} className="store-logo-img-editorial" />
          </div>
          <div>
            <h1 className="store-header-title-editorial">{companyData?.name}</h1>
            <span className="store-header-category-editorial">{companyData?.category}</span>
          </div>
        </div>
        <img src={AssetImage(companyData?.imageBanner)} alt="Banner da loja" className="store-header-banner-editorial" />
      </header>

      {/* Descrição */}
      <section className="store-info-section-editorial">
        <p className="store-description-editorial">{companyData?.description}</p>
      </section>

      {/* Navegação interna - Tabs */}
      <nav className="store-tabs-nav-editorial">
        <ul className="store-tabs-list-editorial">
          {(categoriesData || []).map(category => (
            <li
              key={category.id}
              className={`store-tab-editorial${activeTab === category.id ? ' active' : ''}`}
              onClick={() => setActiveTab(category.id)}
              tabIndex={0}
              role="button"
              onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && setActiveTab(category.id)}
            >
              {category.name}
            </li>
          ))}
        </ul>
      </nav>

      {/* Grid elegante de produtos */}
      <section className="store-products-section-editorial">
        <div className="store-products-grid-editorial">
          {filteredProducts.map(product => (
            <div key={product.id} className="store-product-card-editorial fade-in">
              <div className="store-product-img-wrap-editorial">
                <img src={AssetImage(product.images?.[0]?.image)} alt={product.name} className="store-product-img-editorial" />
              </div>
              <div className="store-product-info-editorial">
                <h3 className="store-product-name-editorial">{product.name}</h3>
                <p className="store-product-description-editorial">
                  {truncateDescription(product.description)}
                </p>
                <span className="store-product-price-editorial">R$ {product.price}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
