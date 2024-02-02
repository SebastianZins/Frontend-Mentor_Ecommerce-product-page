import { useState } from 'react';

import icon_plus from 'images/icon-plus.svg';
import icon_minus from 'images/icon-minus.svg';
import icon_cart from 'images/icon-cart.svg';

import './style.css';

function ProductInteractionComponent() {
    // define states
    const [numSelected, setNumSelected] = useState(0);
    const [hideSubIcon, setHideSubIcon] = useState(true);
    //const [hideAddIcon, setHideAddIcon] = useState(false);

    // define handlers
    const handleIncreaseNumSelected = () => {
        setNumSelected((ns) => ns + 1);
        setHideSubIcon(false);
    };
    const handleDecreaseNumSelected = () => {
        if (numSelected >= 1) {
            if (numSelected === 1) {
                setHideSubIcon(true);
            }
            setNumSelected((ns) => ns - 1);
        } else {
            setHideSubIcon(true);
        }
    };

    return (
        <section className='interaction'>
            <div className='amount-picker'>
                <div onClick={handleDecreaseNumSelected}>
                    <img
                        src={icon_minus}
                        alt='minus icon'
                        className={'sub' + (hideSubIcon ? ' hide' : '')}
                    />
                </div>

                <div>{numSelected}</div>
                <div onClick={handleIncreaseNumSelected}>
                    <img src={icon_plus} alt='plus icon' className='add' />
                </div>
            </div>
            <div className='submit-btn'>
                <div className='btn-content'>
                    <img src={icon_cart} alt='shopping cart icon' />
                    <span>Add to cart</span>
                </div>
            </div>
        </section>
    );
}

export default ProductInteractionComponent;
