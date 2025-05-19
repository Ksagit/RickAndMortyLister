import {createContext, useState, useEffect, useContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Character} from '../../schemas';

const FAVORITES_STORAGE_KEY = 'favoritedCharacters';

interface FavoritesContextProps {
  favoritedCharacters: Character[];
  addFavorite: (character: Character) => Promise<void>;
  removeFavorite: (characterId: number) => Promise<void>;
  isFavorited: (characterId: number) => boolean;
}

const FavoritesContext = createContext<FavoritesContextProps | undefined>(
  undefined,
);

export const FavoritesProvider: React.FC<{children: React.ReactNode}> = ({
  children,
}) => {
  const [favoritedCharacters, setFavoritedCharacters] = useState<Character[]>(
    [],
  );
  const [loading, setLoading] = useState(true);

  // Load favorites from AsyncStorage on app start
  useEffect(() => {
    const loadFavorites = async () => {
      try {
        const storedFavorites = await AsyncStorage.getItem(
          FAVORITES_STORAGE_KEY,
        );
        if (storedFavorites !== null) {
          setFavoritedCharacters(JSON.parse(storedFavorites));
        }
      } catch (error) {
        console.error('Error loading favorites:', error);
      } finally {
        setLoading(false);
      }
    };
    loadFavorites();
  }, []);

  // Save favorites to AsyncStorage whenever the state changes
  useEffect(() => {
    if (!loading) {
      AsyncStorage.setItem(
        FAVORITES_STORAGE_KEY,
        JSON.stringify(favoritedCharacters),
      );
    }
  }, [favoritedCharacters, loading]);

  const addFavorite = async (character: Character) => {
    const isAlreadyFavorited = favoritedCharacters.some(
      fav => fav.id === character.id,
    );
    if (!isAlreadyFavorited) {
      setFavoritedCharacters([...favoritedCharacters, character]);
    }
  };

  const removeFavorite = async (characterId: number) => {
    setFavoritedCharacters(
      favoritedCharacters.filter(fav => fav.id !== characterId),
    );
  };

  const isFavorited = (characterId: number): boolean => {
    return favoritedCharacters.some(fav => fav.id === characterId);
  };

  return (
    <FavoritesContext.Provider
      value={{favoritedCharacters, addFavorite, removeFavorite, isFavorited}}>
      {!loading ? children : null}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};
