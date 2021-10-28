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
import { Properties } from './pages/Properties';
import { Admin } from './pages/Admin';
import { Login } from './pages/Login';
import { AuthContextProvider } from './contexts/AuthContext';
import { SeeImmobile } from './pages/CurrentImmobile';

function App() {
  const queryClient = new QueryClient();
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <AuthContextProvider>
          <QueryClientProvider client={queryClient}>
            <Route path="/" exact component={Home} />
            <Route path="/imoveis" component={Properties} />
            <Route path="/admin" component={Admin} />
            <Route path="/login" component={Login} />
            <Route path="/verimovel/:id" component={SeeImmobile} />
          </QueryClientProvider>
        </AuthContextProvider>
      </BrowserRouter>
    </ChakraProvider>
  );
}
export default App;
