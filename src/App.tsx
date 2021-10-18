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


function App() {
  const queryClient = new QueryClient();
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <Route path="/" exact component={Home} />
        </QueryClientProvider>
      </BrowserRouter>
    </ChakraProvider>
  );
}
export default App;
