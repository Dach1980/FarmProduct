import "./styles.jsx"
import logo from "../../../assets/logo.svg"
import { Text, StyledLogo, StyledLogoMainPage } from "./styles";
import { AppRoute } from "../../../const.jsx";
import { useLocation } from "react-router-dom";

// Логотип сайта с названием
function Logo() {
    const { pathname } = useLocation();

    return pathname === AppRoute.MAIN ? (
        <StyledLogoMainPage>
            <img src={logo} alt="Логотип" />
            <Text>
                Фермерские продукты
            </Text>
        </StyledLogoMainPage >
    ) : (
        <StyledLogo to={AppRoute.MAIN}>
            <img src={logo} alt="Логотип" />
            <Text>
                Фермерские продукты
            </Text>
        </StyledLogo>
    )
}

export default Logo