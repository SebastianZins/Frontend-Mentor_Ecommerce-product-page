import './style.css';

import menuIcon from 'images/icon-menu.svg';
import cartIcon from 'images/icon-cart.svg';
import logoImage from 'images/logo.svg';
import avatarImage from 'images/image-avatar.png';

function NavbarLayout() {
    return (
        <header>
            <div className='left-align'>
                <img className='menu' src={menuIcon} alt='Menu Icon'></img>
                <img
                    className='logo'
                    src={logoImage}
                    alt='Company Logo "sneakers"'
                ></img>
            </div>
            <div className='right-align'>
                <img className='cart' src={cartIcon} alt='Shopping Cart'></img>
                <img className='avatar' src={avatarImage} alt='Profile'></img>
            </div>
        </header>
    );
}

export default NavbarLayout;
