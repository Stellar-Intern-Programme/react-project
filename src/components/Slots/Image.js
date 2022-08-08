import "./Image.css"
import image from "../../assets/game_play_icon.png"
import load from "../../assets/loading.gif"
import { useState } from "react"
export default function Image({ img }) {
    const [loading, toggleLoading] = useState(false)
    return (<>
        <div className="image">
            <div className="info"> <div className="buttons"> <p>GTA VI</p> <div className="circle" onClick={() => { toggleLoading(!loading) }}>
                {loading && <img src={load}></img>}
                {!loading && <img src={image} alt="play" ></img>}
            </div>  <div className="demo"> <p>DEMO</p> </div></div>  </div>
            <img className="gameImg" src={img} alt="game"></img>
        </div>
    </>)
}