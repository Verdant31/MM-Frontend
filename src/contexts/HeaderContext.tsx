import { useDisclosure, UseDisclosureReturn } from '@chakra-ui/hooks';
import { createContext, ReactNode, useContext } from 'react';

interface HeaderProviderProps {
 children: ReactNode;
}

type HeaderContextData = UseDisclosureReturn;

const HeaderContext = createContext({} as HeaderContextData);

export function HeaderProvider({ children }: HeaderProviderProps) {
 const disclousure = useDisclosure();
 return (
  <HeaderContext.Provider value={disclousure}>
   {children}
  </HeaderContext.Provider>
 )
}

export const useHeader = () => useContext(HeaderContext);
