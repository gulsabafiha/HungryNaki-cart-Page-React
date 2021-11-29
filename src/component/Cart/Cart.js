import React from 'react';
import Additional from '../Additional/Additional';
import Comment from '../Comment/Comment';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Mycart from '../Mycart/Mycart';
import Payment from '../Payment/Payment';

const Cart=()=>{
    return(
        <div >
            <Header></Header>
            <Mycart></Mycart>
            <Additional></Additional>
            <Payment></Payment>
            <Comment></Comment>
            <Footer></Footer>
        </div>
    )
}
export default Cart;