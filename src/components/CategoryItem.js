import React,{useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

function CategoryItem() {
    const [item, setItem] = useState({});

    useEffect(() => {
        fetchItem();
    },[])

    const fetchItem = async => {
        setItem({
            name: "PIZZA",
            img: "https://dominos.vn/Data/Sites/1/media/default2/img/mobile/thucdon_nhom/1.png"
        })
    }

    return (
        <div className="category__item" style={{backgroundImage:`url(${item.img})`}}>
            <p id="name" name="name">{item.name}</p>
            <Link to="/menu"> <div className="btn__add"> XEM THÊM </div> </Link>
            
        </div>
    )
}

export default CategoryItem
