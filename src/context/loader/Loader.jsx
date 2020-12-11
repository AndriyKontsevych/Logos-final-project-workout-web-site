import loading from "../../images/loading.gif";
import "./style.scss"

export const Loader = () => {
    return (
        <div className="loader">
            <img src={loading} alt="gif"/>
        </div>

    )
}