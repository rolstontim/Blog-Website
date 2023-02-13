import "./topbar.css"
import {Link} from "react-router-dom"
import { useContext } from "react"
import { Context } from "../../context/Context"

export default function TopBar() {
    const {user, dispatch} = useContext(Context);
    const PF = "http://localhost:4000/images/"


    const handleLogout = () => {
        dispatch({type: "LOGOUT"});
    };

    return (
        <div className="top">
            <div className="topLeft">
                <a href="https://www.instagram.com/camping_shenanigans/" onClick={{color: "green"}}><i className=" instagramIcon fa-brands fa-instagram"></i></a>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link className="link" to="/">HOME</Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/write">WRITE</Link>
                    </li>
                    <li className="topListItem" onClick={handleLogout}>
                        <Link className="link" to="/">{user && "LOGOUT"}</Link>
                    </li>
                </ul>
            </div>
            <div className="topRight">
                {
                    user ? (
                        <Link to="/settings">
                            <img className="topImage" src={PF + user.profilePic} alt="" />        
                        </Link>
                    )   :   (
                        <ul className="topList">
                            <li className="topListItem">
                                <Link className="link" to="/login">LOGIN</Link>
                            </li>
                            <li className="topListItem">
                                <Link className="link" to="/register">REGISTER</Link>
                            </li>
                        </ul>
                    )}
            </div>
        </div>
    )
}