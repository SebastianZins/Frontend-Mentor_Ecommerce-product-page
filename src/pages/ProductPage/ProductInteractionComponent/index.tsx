import { useDispatch, useSelector } from 'react-redux';

import { RootState } from 'store/store';
import { decrement, increment } from 'store/counter/counter-slice';

import './style.css';

import icon_plus from 'assets/icon-plus.svg';
import icon_minus from 'assets/icon-minus.svg';
import icon_cart from 'assets/icon-cart.svg';

function ProductInteractionComponent() {
    // define states
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();

    // define handlers
    const handleIncreaseNumSelected = () => {
        //setNumSelected((ns) => ns + 1);
        dispatch(increment());
    };
    const handleDecreaseNumSelected = () => {
        if (count >= 1) {
            dispatch(decrement());
        }
    };

    return (
        <section className='interaction'>
            <div className='amount-picker'>
                <div onClick={handleDecreaseNumSelected}>
                    <img
                        src={icon_minus}
                        alt='minus icon'
                        className={'sub' + (count === 0 ? ' hide' : '')}
                    />
                </div>

                <div>{count}</div>
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
