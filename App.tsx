import {NavigationContainer} from '@react-navigation/native';
import {MainStack} from './src/stacks/Main';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}

export default App;
