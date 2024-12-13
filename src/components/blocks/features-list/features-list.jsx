import { Title } from "../../ui/title/title.jsx"
import Button from "../../ui/button/button.jsx"
import FeatureCard from "../../ui/feature-card/feature-card.jsx";
import "./style.css"

// список преимуществ
function FeaturesList({ features }) {
    return features && features.length ? (
        <section className="features">
            <Title>Почему фермерские продукты лучше?</Title>
            <ul className="features__list">
                {features.map((feature) => (
                    <li className="features__item" key={feature.id}>
                        <FeatureCard {...feature}/>
                    </li>
                ))}
            </ul>
            <Button minWidth={353}>Купить</Button>
        </section>
    ) : null;
}

export default FeaturesList