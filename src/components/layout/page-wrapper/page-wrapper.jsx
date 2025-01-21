import Header from "../header/header"
import Footer from "../footer/footer"
// import MainPage from "../../pages/main-page/main-page"
import { Main } from "./styles";
import Order from "../../pages/order/order";

// Обёртка для контента страниц
function PageWrapper({products}) {
    return (
    <>
        <Header />
        <Main>
            {/* <MainPage features = {features} /> */}
            <Order products={products}/>
        </Main>
        <Footer />
    </>
    );
}

export default PageWrapper
