import { useState, useEffect, useCallback } from 'react';

/**
 * Custom Hook: useFetch
 * Hook para fazer requisições HTTP de forma simples
 *
 * @param {string|function} url - URL ou função que retorna URL
 * @param {object} options - Opções (method, headers, body, etc)
 * @returns {object} { data, loading, error, refetch }
 */
export const useFetch = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const finalUrl = typeof url === 'function' ? url() : url;
      const response = await fetch(finalUrl, {
        headers: { 'Content-Type': 'application/json' },
        ...options,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err.message || 'Erro ao buscar dados');
    } finally {
      setLoading(false);
    }
  }, [url, options]);

  useEffect(() => {
    if (url) {
      fetchData();
    }
  }, [url, fetchData]);

  return { data, loading, error, refetch: fetchData };
};
