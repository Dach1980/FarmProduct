import { Title, TitleSize } from "../../ui/title/title"
import "./style.css"

function About() {
    return (
        <section className="about">
            <div className="about__wrapper">
                <Title size={TitleSize.BIG}>Магазин фермерских продуктов с доставкой</Title>
                <p className="about__text">
                    Все продукты изготавливаются под заказ. Фермеры начинают готовить
                    продукты за день до отправки заказа клиентам. Именно поэтому мы
                    принимаем заказы заранее и доставляем продукты максимально свежими.
                </p>
                {/* <p className="about__work-time">Рабочее время с 8:00 до 23:00</p>
                <p className="about__address">
                    Санкт-Петербург, набережная реки Карповки, дом 5, литера П
                </p> */}
            </div>
        </section>
    )
}

export default About