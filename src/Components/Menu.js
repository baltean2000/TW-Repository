import { Link } from 'react-router-dom';

function Menu() {
  return (
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/form">Form Page</Link></li>
        <li><Link to="/login">Login Page</Link></li>
        <li><Link to="/content">Content Page</Link></li>
      </ul>
    </div>
  );
}

export default Menu;
