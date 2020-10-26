import React,{useState, useEffect} from 'react';
import axios from 'axios';
import '../config';
import MenuItem from './MenuItem';
import '../styles/style.scss';

function Menu() {

    const [productList, setProductList] = useState({});

    useEffect(() =>{
        fetchItems();
    },[])

    const fetchItems = async => {
        axios.get(`${global.config.server.link}/product`)
        .then(res =>{
            setProductList(res.data.pagingData)
        })
    }

    return (
        <div className="menu">
            <div className="menu__left">
                {/* {productList.map(item =>(
                    <MenuItem key={item.id} name={item.name} description={item.description} img={item.img} price={item.price} />
                ))} */}
                <MenuItem/>
                <MenuItem/>
                <MenuItem/>
                <MenuItem/>
            </div>
            <div className="menu__right"></div>
        </div>
    )
}

export default Menu
