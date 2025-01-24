import { useLocation } from "react-router-dom";
import { AppRoute } from "../../../const"
import { Li, Ul } from "../../styled";
import Button from "../../ui/button/button"
import { StyledButton } from "./styles";

const links = [
    {
        to: AppRoute.MAIN,
        item: <StyledButton link={AppRoute.MAIN}>Главная</StyledButton>
    },
    { to: AppRoute.ORDER, item: <Button link={AppRoute.ORDER}>Купить</Button> }
];

// навигация
function Nav() {
    const pageUrl = useLocation().pathname;

    return (
        <nav>
            <Ul>
                {links
                    .filter((link) => link.to !== pageUrl)
                    .map((link) => (
                        <Li key={link.to}>{link.item}</Li>
                    ))}
            </Ul>
        </nav>
    );
}

export default Nav;
