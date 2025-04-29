// @ts-nocheck
import { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import {assets} from "../assets/asset.js"
import ProductItem from '../components/ProductItem';
import { useLocation } from 'react-router-dom';

const Collections = () => {
  const { products, search, showSearch } = useContext(ShopContext)
  const [showFilter, setShowFilter] = useState(false)
  const [filterProducts, setFilterProducts] = useState([])
  const [category, setCategory] = useState([])
  const [subCategory, setSubCategory] = useState([])
  const [sortType, setSortType] = useState("relevant")
  

  
  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory(prev => prev.filter(item => item !== e.target.value))
    } else {
      setCategory(prev => [...prev, e.target.value])
    }
  }

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory(prev => prev.filter(item => item !== e.target.value))
    } else {
      setSubCategory(prev => [...prev,e.target.value])
    }
  }
  
 

  const applyFilter = () => {
    let productsCopy = products.slice()
    if (category.length > 0) {
      productsCopy = productsCopy.filter(item => category.includes(item.category))
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory))
    }

    setFilterProducts(productsCopy)
  }

  const location = useLocation();

useEffect(() => {
  const params = new URLSearchParams(location.search);
  console.log("Query Params:");
  for (const [key, value] of params.entries()) {
    console.log(`${key}: ${value}`);
  }

  // Example usage
  const cat = params.get("category");
  const sub = params.get("subCategory");
  const sort = params.get("sort");

  // You can also log these specific values
  console.log("category =", cat);
  console.log("subCategory =", sub);
  console.log("sort =", sort);
}, [location.search]);

  useEffect(() => {
  let filtered = products.slice();

  // Category filter
  if (category.length > 0) {
    filtered = filtered.filter(item => category.includes(item.category));
  }

  // Subcategory filter
  if (subCategory.length > 0) {
    filtered = filtered.filter(item => subCategory.includes(item.subCategory));
  }

  // Search filter (add this block here 👇)
  if (showSearch && search.trim() !== "") {
    filtered = filtered.filter((item) => {
      return search.toLowerCase() === '' ? item : item.name.toLowerCase().includes(search)
    });
    setFilterProducts(filtered)
  }

  // Sorting
  switch (sortType) {
    case "low-high":
      filtered.sort((a, b) => a.price - b.price);
      break;
    case "high-low":
      filtered.sort((a, b) => b.price - a.price);
      break;
    case "bestSellers":
      filtered = filtered.filter(item => item.bestSeller);
      break;
    case "new arrivals":
      filtered.reverse(); // or sort by item.createdAt if available
      break;
    
    case "relevant":
   // retain current filter order
  break;
    default:
      break;
  }

  setFilterProducts(filtered);
}, [category, subCategory, sortType, products, search, showSearch]);
  return (
    <>
      <div className='flex flex-col sm:flex-row gap-1 sm:gap-1 pt-10 border-t'>
        {/* filter options */}
        <div className='min-w-60'>
          <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>
            Filters
            <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : '' }`} src={assets.drop} alt="" />
          </p>
          {/* category filters */}
          <div className={`border border-gray-300 pl-5 py-3 mt-5 ${showFilter ? '' : 'hidden'} sm:block`}>
            <p>CATEGORIES</p>
            <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
              <p className='flex gap-2 '>
                <input className='w-3' type="checkbox" value={'Men'} onChange={toggleCategory} /> Men
              </p>
              <p className='flex gap-2 '>
                <input className='w-3' type="checkbox" value={'Women'} onChange={toggleCategory} /> Women 
              </p>
            </div>
          </div>
          {/* sub category */}
          <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
            <p>SUB CATEGORIES</p>
            <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
              <p className='flex gap-2 '>
                <input className='w-3' type="checkbox" value={'Topwear'} onChange={toggleSubCategory} /> Topwear
              </p>
              <p className='flex gap-2 '>
                <input className='w-3' type="checkbox" value={'Bottomwear'} onChange={toggleSubCategory} /> Bottomwear
              </p>
              <p className='flex gap-2 '>
                <input className='w-3' type="checkbox" value={'Accesories'} onChange={toggleSubCategory} /> Accesories
              </p>
            </div>
          </div>
        </div>
        {/* right side */}
        <div className='flex-1'>
          <div className='flex justify-between text-base sm:text-2xl mb-4'>
            <h2 className='text-gray-400 text-4xl'>All <span className='text-gray-600'>Collections</span></h2>
            {/* product sort */}
            <select onChange={(e) => setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
              <option value="relevant">Sort by: Relevant</option>
              <option value="new arrivals">Sort by: New Arrivals</option>
              <option value="bestSellers">Sort by: Bestsellers</option>
              <option value="low-high">Sort by: Price Low to High</option>
              <option value="high-low">Sort by: Price High to Low</option>
            </select>
          </div>
          {/* map products */}
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6 '>
            {
              filterProducts.map((item, index) => (
                <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image} />
              ))
            }

          </div>

        </div>
      
    </div>
    </>
  )
}

export default Collections;