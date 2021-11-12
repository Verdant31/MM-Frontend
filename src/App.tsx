//React Router
import { Route, BrowserRouter } from 'react-router-dom';

//React-query
import { QueryClient, QueryClientProvider } from 'react-query';

//Chakra
import { ChakraProvider } from "@chakra-ui/react"

//Styles
import { theme } from './styles/theme';


//Components
import { Home } from './pages/Home';
import { Immobiles } from './pages/Immobiles';
import { SeeImmobile } from './pages/CurrentImmobile';
import { HeaderProvider } from './contexts/HeaderContext';

function App() {
  const queryClient = new QueryClient();
  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <HeaderProvider>
          <QueryClientProvider client={queryClient}>
            <Route path="/" exact component={Home} />
            <Route path="/imoveis" component={Immobiles} />
            <Route path="/verimovel/:id" component={SeeImmobile} />
          </QueryClientProvider>
        </HeaderProvider>
      </ChakraProvider>
    </BrowserRouter>

  );
}
export default App;
