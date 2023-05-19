import { Link, NavLink } from 'react-router-dom';



function Menu() {
  return (
    <div style={{ marginBottom: '20px',background: "linear-gradient(to bottom, Transparente 0%,Transparente 50%,red 50%,red 100%)" }}>
      <ul style={{ display: 'flex', listStyle: 'none', padding: 0 }}>
        <li style={{ marginRight: '10px' }}><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
        <li style={{ marginRight: '10px' }}><NavLink to="/form" activeClassName="active">Form Page</NavLink></li>
        <li style={{ marginRight: '10px' }}><NavLink to="/login" activeClassName="active">Login Page</NavLink></li>
        <li style={{ marginRight: '10px' }}><NavLink to="/content" activeClassName="active">Content Page</NavLink></li>
      </ul>
    </div>
  );
}

export default Menu;
