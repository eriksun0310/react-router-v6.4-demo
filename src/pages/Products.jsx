import React from 'react'
import { useLoaderData, useNavigation } from 'react-router-dom'

const Products = () => {
    const navigation = useNavigation()
    const products = useLoaderData()
    console.log('products  => ' , products)
    if(navigation.state === 'loading'){
        return <h1>Loading ....</h1>
    }
    
  return (
    products.products.map((product)=>(
        <div key={product.id}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <img width={100} src={product.thumbnail}/>
        </div>
    ))
  )
}

export default Products



export const dataLoader =  async()=>{
    const res = await fetch("https://dummyjson.com/products?limit=5")
    const productsData = await res.json()
    return productsData
}