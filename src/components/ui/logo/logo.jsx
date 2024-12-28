import "./styles.jsx"
import logo from "../../../assets/logo.svg"
import { Text, StyledLogo } from "./styles";

function Logo() {
    return (
        <StyledLogo href="/">
            <img src={logo} alt="Логотип" />
            <Text>
                Фермерские продукты
            </Text>
        </StyledLogo>
    )
}

export default Logo