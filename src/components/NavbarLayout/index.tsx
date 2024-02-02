import './style.css';

import menuIcon from 'assets/icon-menu.svg';
import cartIcon from 'assets/icon-cart.svg';
import logoImage from 'assets/logo.svg';
import avatarImage from 'assets/image-avatar.png';

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
