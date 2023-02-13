import "./sidebar.css"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT</span>
                <p>
                    alloo heheheehehehe
                </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Outdoor</li>
                    <li className="sidebarListItem">Food</li>
                    <li className="sidebarListItem">Camping</li>
                </ul>
            </div>
        </div>
    )
}