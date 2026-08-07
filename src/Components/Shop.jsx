import React, { useEffect, useState } from 'react'
import Container from './Container'
import { IoIosArrowForward } from 'react-icons/io'
import Card from './Card'
import BreadCrump from './BreadCrump'
import Paginate from './Paginate'

const Shop = () => {
    const [Product, setProduct] = useState([])

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then((data) => {
                const products = Array.isArray(data?.products) ? data.products : []
                setProduct(products)
            })
            .catch(() => setProduct([]))
    }, [])

    return (
        <div className='py-20'>
            <Container>
                <BreadCrump/>
               
                <div className='flex justify-between items-center'>
                    <h2 className='font-bold text-[20px] mt-12.5'>Shop by Category</h2>
                    <div className='flex gap-4 items-center '>
                        <h3>Show :</h3>
                        <div>
                    <select name="" id="" className='border-[#D9D9D9] border px-10 py-1'>
                        <option value="6">6</option>
                        <option value="9">9</option>
                        <option value="12">12</option>
                    </select>

                        </div>

                    </div>

                </div>
                <div className='flex justify-between'>
                <div className="w-[20%]   pr-4">
                    <ul className="pt-10 space-y-4">
                        <li className="flex items-center gap-12.75">Woman’s Fashion<IoIosArrowForward /></li>
                        <li className="flex items-center gap-18.5">Men’s Fashion<IoIosArrowForward /></li>
                        <li>Electronics</li>
                        <li>Home & Lifestyle</li>
                        <li>Medicine</li>
                        <li>Sports & Outdoor</li>
                        <li>Health & Beauty</li>
                        <li>Groceries</li>
                    </ul>
                </div>
                <div className='w-[80%]'>
                    <div className='flex flex-wrap justify-between gap-y-10'>
                        {Product.map((item) => (
                            <Card
                                key={item.id}
                                imgConsle={item.thumbnail}
                                percentage={item.discountPercentage}
                                title={item.title}
                                price={item.price}
                                disprice={(item.price - (item.price * (item.discountPercentage / 100))).toFixed(2) }
                                review={item.reviews?.length || 0}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>

                </div>
                <Paginate/>
            </Container>
        </div>
    )
}

export default Shop
