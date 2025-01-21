import PageWrapper from '../layout/page-wrapper/page-wrapper.jsx'
import features from '../../mocks/features.jsx'
import { GlobalStyle } from "./styles";
import products from '../../mocks/products.js';

function App() {
  return (
    <>
      <GlobalStyle />
      <PageWrapper features={features} products={products} />
    </>
  )
}

export default App
