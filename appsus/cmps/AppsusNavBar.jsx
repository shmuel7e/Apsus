const { NavLink } = ReactRouterDOM
import eventBusService from '../../services/eventBusService.js'

export default class AppsusNavBar extends React.Component {
    state = {
        isNavVisible:false
      };

      componentDidMount = () => {
        eventBusService.on('screenClicked',()=>{
            this.setState(prevState => ({ isNavVisible: !prevState.isNavVisible }));
        });
    }

      toggleBox = () => {
        this.setState(prevState => ({ isNavVisible: !prevState.isNavVisible }));
        eventBusService.emit('modalToggled');
      };

      render() {
    return (<nav>
     
        <div className="appsus-nav-bar">
            <div><NavLink activeClassName="active" to='/' exact><img className='main-logo' src="img/logo.png" alt="logo" /></NavLink></div>
            <button id="menu-btn" className="menu-btn" onClick={this.toggleBox}><i className="fas fa-bars"></i></button>
            
            <div className={this.state.isNavVisible ? 'links-container main-menu menu-open' : 'links-container main-menu'}>  
                
                <div onClick={this.toggleBox} className='link-container'><NavLink activeClassName="active" to='/' exact>Home</NavLink></div>
                <div onClick={this.toggleBox} className='link-container'><NavLink activeClassName="active" to='/booksApp'>Books</NavLink></div>
                <div onClick={this.toggleBox} className='link-container'><NavLink activeClassName="active" to='/noteApp'>Notes</NavLink></div>
                <div onClick={this.toggleBox} className='link-container'><NavLink activeClassName="active" to='/emailApp'>Emails</NavLink></div>
            </div>
        </div>
    </nav>)
      }
}