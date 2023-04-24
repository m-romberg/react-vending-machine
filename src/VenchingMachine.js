import { Link } from 'react-router-dom';
/**
 * VendingMachine:
 * shows a page with a list of snacks that you can get from the vending machine.
 *
 * props:
 * -
 * state:
 * -
 */

function VendingMachine () {

    return (
        <div>
            <p><Link to="/doritos">Doritos</Link></p>
            <p><Link to="/coca-cola">Coca-cola</Link></p>
            <p><Link to="/sour-patch-kids">Sour Patch Kids</Link></p>
        </div>
    )
}

export default VendingMachine;