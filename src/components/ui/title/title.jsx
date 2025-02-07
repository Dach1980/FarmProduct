import "./style.css"

const TitleSize = {
    BIG: "big",
    MEDIUM: "medium",
    SMALL: "small",
    EXTRA_SMALL: "extra_small"
};

function Title({ children, size }) {
    return <h1 className={`title${size ? ` title_${size}` : ""}`}>{children}</h1>
}

export { TitleSize, Title }