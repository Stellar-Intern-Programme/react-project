import "./scroll.css"
import poza from "../../assets/search.icon.svg"

export function Categories() {
    return (
        <div className="contentBar">
            <img src={poza} alt="search" />
            <p>ACTIUNE</p>
            <p>AVENTURA</p>
            <p>SHOOTERE</p>
            <p>CURSE</p>
            <p>SIMULATOARE</p>
            <p>SPORTUI</p>
            <p>TOATE JOCURIE</p>
            <p>REALITATE VIRTUALA</p>
            <p>REALITATE AUGMENTATA</p>
        </div>
    )
}
