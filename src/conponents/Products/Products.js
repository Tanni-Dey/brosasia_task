import React, { useEffect, useState } from 'react';
import './Products.css'
import Product from './Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);

    let searchText = '';
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [searchText])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => {
                const pages = Math.ceil(products.length / 10);
                setPageCount(pages);
            })
    }, [products])

    const handleSearch = (e) => {
        e.preventDefault()
        searchText = e.target.search.value;
        const searchPrducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
        setProducts(searchPrducts);
        console.log(products);
    }

    return (
        <div>
            <form className='search_form' onSubmit={handleSearch} action="">
                <input className='search_input' type="text" name="search" placeholder='Search By Name' id="" />
                <input className='search_input' type="submit" value="Search" />
            </form>
            <div className='all_products'>
                {
                    products.slice(page * 10, (page * 10) + 10).map(product => <Product key={product.id} product={product} />)
                }
            </div>
            <div className='pagination'>
                {
                    [...Array(pageCount).keys()].map(number => <button className={page === number ? 'selectedNum' : ''} key={number} onClick={() => setPage(number)}>{number + 1}</button>)
                }
            </div>
        </div>
    );
};

export default Products;