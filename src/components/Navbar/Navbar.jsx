import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <ul  className="navbar-list-container">
                <li>
                    <Link>
                        Story
                    </Link>
                </li>
                <li>
                    <Link>
                        Shop
                    </Link>
                </li>
                <li>
                    <Link>
                        Info
                    </Link>                  
                </li>
                <li>
                    <Link>
                        Contact
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;