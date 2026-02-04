import { create } from 'zustand';

export const useCartStore = create((set, get) => ({
  items: [],
  total: 0,

  // Adicionar item ao carrinho
  addItem: (product) =>
    set((state) => {
      const existingItem = state.items.find((item) => item.id === product.id);

      if (existingItem) {
        // Se produto já existe, aumentar quantidade
        return {
          items: state.items.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
          total: state.total + product.price,
        };
      }

      // Novo produto
      return {
        items: [...state.items, { ...product, quantity: 1 }],
        total: state.total + product.price,
      };
    }),

  // Remover item do carrinho
  removeItem: (productId) =>
    set((state) => {
      const item = state.items.find((item) => item.id === productId);
      return {
        items: state.items.filter((item) => item.id !== productId),
        total: state.total - (item?.price || 0) * (item?.quantity || 1),
      };
    }),

  // Atualizar quantidade
  updateQuantity: (productId, quantity) =>
    set((state) => {
      if (quantity <= 0) {
        return get().removeItem(productId);
      }

      const item = state.items.find((item) => item.id === productId);
      const oldTotal = item?.price || 0;
      const newTotal = (item?.price || 0) * quantity;

      return {
        items: state.items.map((item) =>
          item.id === productId ? { ...item, quantity } : item
        ),
        total: state.total - oldTotal + newTotal,
      };
    }),

  // Limpar carrinho
  clear: () => set({ items: [], total: 0 }),

  // Obter quantidade total de itens
  getItemCount: () => {
    const state = get();
    return state.items.reduce((count, item) => count + item.quantity, 0);
  },
}));
