import "./header.css"

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">Campin</span>
                <span className="headerTitleLg">Shenanigans</span>
                <img
                className="headerImg"
                src={require("../../img/homeImg.jpg")}
                alt=""
                />
            </div>
        </div>
    )
}