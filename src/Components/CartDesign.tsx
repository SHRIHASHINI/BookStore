import {useState } from 'react';
import Addicon from '../assets/images/addicon.png';
import Product from './Moviepacket.json';
import './CartDesign.css';
import Rightarrow from '../assets/images/rightarrow.png';
import Shoppingbag from '../assets/images/shoppingbag.png';
import Searchicon from '../assets/images/searchicon.png';
import { Update } from '@mui/icons-material';
import { green } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// import { CategoryRounded } from '@mui/icons-material';
interface Shippingcart
{
    ItemSerial:number,
    ItemName:string,
    ItemQuantity:number,
    ItemPrice:number
}
interface searchvalue
{
    Name:string
}

function CartDesign() {
    const [Products, setProducts] = useState(Product)
    const [ShippingCart, setShippingCart]=useState<Shippingcart>(
        {
            ItemSerial:0,
            ItemName:"",
            ItemQuantity:0,
            ItemPrice:0
        }
    )
    const [SearchValue, setSearchValue]=useState<searchvalue>({
        Name:""
    })
    const [count, setCount] = useState(0);


    const handleSearchdata=(element:any)=>
        {
            const {name, value}=element.target;
            setSearchValue({
                ...SearchValue,
                [name]:value
            })
        }

    const filterItems = (items: any) => {
        const updateItem = Product.filter((e: any) => {
            return e.categories === items
        })
        setProducts(updateItem)
    }

    const filterBooks = (items:any)=>
    {
        const updateItem = Product.filter((e:any)=>
        {
            return e.bookformat === items
        })
        setProducts(updateItem)
    }


    const filterAuthor = (AuthorItems: any) => {
        const updateItem = Product.filter((e: any) => {
            return e.author === AuthorItems
        })
        setProducts(updateItem)
    }

    const handlecart= (items: any)=>
        {
            console.log(items)
            const {Rate, title}=items;
            setCount(count+1)
            // console.log(ShippingCart.ItemPrice=items)
           setShippingCart({
            ItemSerial:ShippingCart.ItemSerial+1,
            ItemName:title,
            ItemQuantity:ShippingCart.ItemQuantity+1,
            ItemPrice:Rate
           })
        }

    const filtertitle=(data:any)=>
        {
                const UpdateValue = Product.filter((e:any)=>
                {
                    return e.title.toLowerCase() === data.toLowerCase()
                })
                setProducts(UpdateValue)
        }    
        const Navigation= useNavigate()
        const handleNavigation=()=>
            {
                Navigation('/')
            }
    return (
        <div className='main-cart'>
            <div className='navigation'>
                <div onClick={handleNavigation} ><p>Home</p></div>
                <div className='image'><img src={Rightarrow} /></div>
                <div><p>Cart</p></div>
                <div className='navigator-bag'>
                    <div className='search-nav'>
                        <input
                            type='text'
                            name='Name'
                            placeholder='Search an item'
                            value={SearchValue.Name}
                            onChange={handleSearchdata}/>
                        <img src={Searchicon} id='searchicon' onMouseDown={()=>filtertitle(SearchValue.Name)}/>
                    </div>
                    <img src={Shoppingbag} />
                    <div className='count'>{count}</div>
                </div>
            </div>
            <div className='cart-container'>
                <div className='sidebar'>
                    <div>
                        <div><h3>Categories</h3></div>
                        <div>
                            <ul>
                                <li onClick={() => filterItems("Arts & Photography")}>
                                    <p>Arts and Photography</p>
                                </li>
                                <li onClick={() => filterItems("Biographies & Memoirs")}>
                                    <p>Biographies & Memoirs</p>
                                </li>
                                <li onClick={() => filterItems("Christianity and bible")}>
                                    <p>Christian Books & Bibles</p>
                                </li>
                                <li onClick={() => filterItems("Cookbook")}>
                                    <p>Food & Drink</p>
                                </li>
                                <li onClick={() => filterItems("History")}>
                                    <p>History</p>
                                </li>
                                <li onClick={() => filterItems("Romance")}>
                                    <p>Romance</p>
                                </li>
                                <li onClick={() => filterItems("Mystery")}>
                                    <p>Mystery</p>
                                </li>
                                <li onClick={() => filterItems("Fiction")}>
                                    <p>Literature & Fiction</p>
                                </li>
                                <li onClick={() => filterItems("thriller")}>
                                    <p>Thriller & Suspense</p>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <div><h3>Author</h3></div>
                        <div>
                            <ul>
                                <li onClick={() => filterAuthor("Paulo Coelho")}><p>Paulo Coelho</p></li>
                                <li onClick={() => filterAuthor("Alex Michaelides")}><p>Alex Michaelides</p></li>
                                <li onClick={() => filterAuthor("Ali Hazelwood")}><p>Ali Hazelwood</p></li>
                                <li onClick={() => filterAuthor("Lauren Asher")}><p>Lauren Asher</p></li>
                                <li onClick={() => filterAuthor("Runyx")}><p>Runyx</p></li>
                                <li onClick={() => filterAuthor("Andre Aciman")}><p>Andre Aciman</p></li>
                                <li onClick={() => filterAuthor("Carley Fortune")}><p>Carley Fortune</p></li>
                                <li onClick={() => filterAuthor("Sanjana Desai")}><p>Sanjana Desai</p></li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div><h3>Format</h3></div>
                        <div>
                            <ul>
                                <li onClick={()=>filterBooks("handcover")}><p>Handcover</p></li>
                                <li onClick={()=>filterBooks("Kindle")}><p>Kindle</p></li>
                                <li onClick={()=>filterBooks("Paperback")}><p>PaperBook</p></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="cart-products">
                    {Products.map((element: any) => {
                        const { title, image, name, bookformat, discount, rating, Rate, id } = element
                        return <div className="card" key={id} >
                            <div className="discount">{discount}%</div>
                            {element.bestselling && <div className='selling'>Best Selling</div> }
                            <div className="content">
                                <div className="image-content">
                                    <img src={image}></img>
                                </div>
                                <div className="card-content">
                                    <div className='bookformat'>
                                        <i>{bookformat}</i>
                                        <span>{rating}★</span>
                                    </div>
                                    <div className="title">
                                        <span >{title}{name}</span>
                                    </div>
                                    <div className="price">
                                    <p style={{fontSize:".9rem", fontWeight:"bold"}}>₹{Rate*discount/100}</p>
                                    <p style={{textDecoration:"line-Through", color:"gray", marginLeft:"10px", fontSize:".8rem"}}> ₹ {Rate}  </p>
                                   
                                    <p style={{color:"green", fontSize:".7rem", marginLeft:"5px"}}>{discount}% off</p>
                                    </div>
                                    <div className="card-button">
                                        <img src={Addicon} onClick={()=>handlecart({Rate,title})} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>
            {/* <div className='Shopping-cart'>
                    <h3 style={{color:"green", fontSize:25}}>Shopping Card Page</h3>
                    <h5 style={{color:"red", fontSize:20, textAlign:"center"}}>Your Basket</h5>
                    <hr></hr>
                    <div className='table-container'>
                        <table>
                            <thead>
                                <th> S.No </th>
                                <th> Products Details </th>
                                <th> Quantity </th>
                                <th> Price</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{ShippingCart.ItemSerial}</td>
                                    <td>{ShippingCart.ItemName}</td>
                                    <td> {ShippingCart.ItemQuantity}</td>
                                    <td>{ShippingCart.ItemPrice}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div> */}


                    <div>
                        {/* {ShippingCart.map((e:any)=>
                        {
                            const {ItemName,ItemPrice,ItemSerial,ItemQuantity}=e
                            return(
                                <div>
                                       <table>
                                        <tr>
                                            <td>{ShippingCart.ItemSerial} </td>
                                        </tr>
                                       </table>
                                </div>
                            )
                        })} */}
                    </div>
                {/* </div> */}
        </div>
    )
}
export default CartDesign