import PageWrapper from '../layout/page-wrapper/page-wrapper.jsx'
import features from '../../mocks/features.jsx'
import { GlobalStyle } from "./styles";
import products from '../../mocks/products.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const.jsx';
import Order from '../pages/order/order.jsx';
import MainPage from '../pages/main-page/main-page.jsx';
import ScrollToTop from '../ui/scroll-top/scroll-top.jsx';

// Корневой компонент всего приложения
function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <ScrollToTop/>
        <Routes>
          <Route path={AppRoute.MAIN} element={<PageWrapper />}> 
            <Route index element={<MainPage features={features} />}
            />
            <Route
              path={AppRoute.ORDER.replace(AppRoute.MAIN, "")}
              element={<Order products={products} />}
            />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
