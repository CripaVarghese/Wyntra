import { createContext, ReactNode, useContext, useState } from "react";

type ShoppingCartProviderProps = {
  children: ReactNode;
};

type ShoppingCartContext = {
  getItemCartQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  cartItems: CartItem[] | undefined;
  cartProdCount: number;

  getItemBagQuantity: (id: number) => number;
  increaseItemBagQuantity: (id: number) => void;
  removeFromBag: (id: number) => void;
  bagItems: BagItem[] | undefined;
  bagProdCount: number;
};

type CartItem = {
  id: number;
  quantity: number;
};
type BagItem = {
  id: number;
  quantity: number;
};

export const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [bagItems, setBagItems] = useState<BagItem[]>([]);

  function getItemCartQuantity(id: number) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }

  function increaseCartQuantity(id: number) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function removeFromCart(id: number) {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  }

  const cartProdCount = cartItems.reduce(
    (quantity, item) => quantity + item.quantity,
    0
  );

  function getItemBagQuantity(id: number) {
    return bagItems.find((item) => item.id === id)?.quantity || 0;
  }

  function increaseItemBagQuantity(id: number) {
    setBagItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function removeFromBag(id: number) {
    setBagItems((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  }

  const bagProdCount = bagItems.reduce(
    (quantity, item) => quantity + item.quantity,
    0
  );

  const contextValue = {
    getItemCartQuantity,
    increaseCartQuantity,
    removeFromCart,
    cartItems,
    cartProdCount,

    getItemBagQuantity,
    increaseItemBagQuantity,
    removeFromBag,
    bagItems,
    bagProdCount,
  };
  return (
    <ShoppingCartContext.Provider value={contextValue}>
      {children}
    </ShoppingCartContext.Provider>
  );
}

export default ShoppingCartProvider;
