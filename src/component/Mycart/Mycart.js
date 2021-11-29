import React from 'react';
import './Mycart.css';
import { faMinus,faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 

const Mycart=()=>{
    const plus=<FontAwesomeIcon icon={faPlus}/>
    const Minus=<FontAwesomeIcon icon={faMinus}/>
    return(
        <div className='container mt-5'>
            <h3>My Cart <span>(1 Items)</span></h3>
            <p style={{color:'#292f48'}}>Ordered From</p>
            <p className='cart-p'>Well Food- Gulsan-2</p>

            <table class="table table-bordered">
  <thead>
    <tr>
      <td scope="colspan-3">Baklava (Large)<p>No Toppings</p></td>
      <td className='money' scope="col">Tk. 1000 {Minus} 2 {plus} Tk. 2000</td>
    </tr>
  </thead>
  <tbody>
    <tr>
    <td scope="colspan-3">Food Price<p>VAT</p><p>Delivery Fee</p></td>
      <td scope="col">Tk. 1904.76 <p>Tk. 95</p><p>Tk. 19</p> </td>
    </tr>
    <tr>
      <th scope="row">Total</th>
      <td>Tk. 2019</td>
      
    </tr>
   
  </tbody>
</table>
        </div>
    )
}
export default Mycart;