import { FunctionComponent, createContext, useEffect, useState } from 'react'

interface ALLfunctionContext {
  scrolled: boolean
}

export const AllFunctionContext = createContext<ALLfunctionContext>({
  scrolled: false
})

interface AllFunctionContextProviderProps {
  children: string | React.ReactNode
}

const AllFunctionContextProvider: FunctionComponent<
  AllFunctionContextProviderProps
> = ({ children }) => {
  // FUNÇAO DE SOMBRA AO ROLAR A PAGINA PARA BAIXO!
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <AllFunctionContext.Provider value={{ scrolled }}>
        {children}
      </AllFunctionContext.Provider>
    </>
  )
}

export default AllFunctionContextProvider
