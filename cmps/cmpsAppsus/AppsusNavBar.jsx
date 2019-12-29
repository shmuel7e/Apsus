const { NavLink } = ReactRouterDOM
export default function AppsusNavBar() {
    return <nav>
        <ul className="appsus-nav-bar">
            <li><NavLink style={{ textDecoration: 'none' , color:'black' }} activeClassName="main-logo" to='/'>Appsus</NavLink></li>
            <div className="appsus-nav-bar-links">
            <li><NavLink activeClassName="active" to='/home' exact>Home</NavLink></li>
            <li><NavLink activeClassName="active" to='/booksApp'>Books</NavLink></li>
            <li><NavLink activeClassName="active" to='/noteApp'>Notes</NavLink></li>
            <li><NavLink activeClassName="active" to='/emailApp'>Emails</NavLink></li>
            </div>
        </ul>
    </nav>
}