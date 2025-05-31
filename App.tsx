import {NavigationContainer} from '@react-navigation/native';
import {MainStack} from './src/stacks/Main';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {FavoritesProvider} from './src/comoponents/providers/FavouriteContext';

function App(): React.JSX.Element {
  const queryClient = new QueryClient();

  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <FavoritesProvider>
          <MainStack />
        </FavoritesProvider>
      </QueryClientProvider>
    </NavigationContainer>
  );
}

export default App;
