import PageWrapper from '../layout/page-wrapper/page-wrapper.jsx'
import features from '../../mocks/features.jsx'
import { GlobalStyle } from "./styles";

function App() {
  return (
    <>
      <GlobalStyle />
      <PageWrapper features={features}>Контент страницы</PageWrapper >
    </>
  )
}

export default App
