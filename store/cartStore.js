import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
export const useCartStore = create(
 persist(
 (set) => ({
 cart: [],
 addToCart: (product) =>
 set((state) => ({
 cart: [...state.cart, product],
 })),
 clearCart: () => set({ cart: [] }),
 }),
 {
 name: 'cart-storage',
 storage: createJSONStorage(() => AsyncStorage),
 partialize: (state) => ({ cart: state.cart }),
 }
 )
);