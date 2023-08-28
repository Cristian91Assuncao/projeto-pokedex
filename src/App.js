// import Header from './Components/Header/Header';
import { ChakraProvider } from '@chakra-ui/react';
import PokemonCard from './Components/PokemonCard/PokemonCard';
import Router from './routes/Router';
import { theme } from './styles';
// import { Body, GlobalStyle } from './GlobalStyle';

function App() {


  return (
    <div className="App">
      {/* <Body>
      <GlobalStyle /> */}
      <ChakraProvider theme={theme}>
        <Router />
      </ChakraProvider>
      {/* </Body>  */}

    </div>
  );
}

export default App;
