import React, { createContext, useContext, useReducer, useEffect } from 'react';

const FavoritesContext = createContext();

const favoritesReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_FAVORITES':
      if (state.items.find(item => item.id === action.payload.id)) {
        return state;
      }
      return {
        ...state,
        items: [...state.items, action.payload]
      };

    case 'REMOVE_FROM_FAVORITES':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      };

    case 'CLEAR_FAVORITES':
      return {
        ...state,
        items: []
      };

    default:
      return state;
  }
};

const initialState = {
  items: []
};

export const FavoritesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(favoritesReducer, initialState);

  useEffect(() => {
    const savedFavorites = localStorage.getItem('voskerich-favorites');
    if (savedFavorites) {
      const favoritesData = JSON.parse(savedFavorites);
      favoritesData.items.forEach(item => {
        dispatch({ type: 'ADD_TO_FAVORITES', payload: item });
      });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('voskerich-favorites', JSON.stringify(state));
  }, [state]);

  const addToFavorites = (product) => {
    dispatch({ type: 'ADD_TO_FAVORITES', payload: product });
  };

  const removeFromFavorites = (productId) => {
    dispatch({ type: 'REMOVE_FROM_FAVORITES', payload: productId });
  };

  const clearFavorites = () => {
    dispatch({ type: 'CLEAR_FAVORITES' });
  };

  const isFavorite = (productId) => {
    return state.items.some(item => item.id === productId);
  };

  return (
    <FavoritesContext.Provider value={{
      ...state,
      addToFavorites,
      removeFromFavorites,
      clearFavorites,
      isFavorite
    }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};