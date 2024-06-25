import './BookStore.css';
import MenuBar from '../assets/images/menuicon.png';
import Logoicon from '../assets/images/logo.png';
import Searchicon from '../assets/images/searchicon.png';
import Homeimg from '../assets/images/contentpage.png'
import Rightarrow from '../assets/images/rightarrow.png';
import Image1 from '../assets/images/nonficimg.jpg';
import Image2 from '../assets/images/fanimg.jpeg';
import Image3 from '../assets/images/faryimg.jpeg';
import Image4 from '../assets/images/mysimg.jpg';
import Image5 from '../assets/images/philimg.jpeg';
import Bestimg1 from '../assets/images/bestimg1.webp';
import Bestimg2 from '../assets/images/bestimg2.avif';
import Bestimg3 from '../assets/images/bestimg3.avif';
import Bestimg4 from '../assets/images/bestimg4.avif';
import Bestimg5 from '../assets/images/bestimg5.avif';
import Instaimg from '../assets/images/insta.png';
import Facebookimg from '../assets/images/facebook.png';
import Youtubeimg from '../assets/images/youtube.png';
import Pinterestimg from '../assets/images/pinterest.png';
import Twitterimg from '../assets/images/twitter.png';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useNavigate } from 'react-router-dom';

import Slider from "react-slick";
import './Slider.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AuthorImg1 from '../assets/images/authorimg1.jpg';
import AuthorImg2 from '../assets/images/authorimg2.jpg';
import AuthorImg3 from '../assets/images/authorimg3.jpg';
import AuthorImg4 from '../assets/images/authorimg4.jpg';
import AuthorImg5 from '../assets/images/authorimg5.jpg';
import AuthorImg6 from '../assets/images/authorimg6.jpg';
import AuthorImg7 from '../assets/images/authorimg7.jpg';
import AuthorImg8 from '../assets/images/authorimg8.jpg';
import Phoneicon from '../assets/images/phoneicon.png';
import Gmailicon from '../assets/images/gmailicon.png';

function BookStore() {
    const navigate = useNavigate()

    var settings = {
        dots: true,
        infinite: false,
        speed: 400,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    initialSlide: 3
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };





    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const handleNavigate = () => {
        navigate('/')
    }
    const handleNavigateCart = () => {
        navigate('/cartpage')
    }
    const handleNavigateabout = ()=>
        {
            navigate('/aboutpage')
        }
    return (
        <div className='body'>
            <div className='top-container'>
                <div className='nav'>
                    <div className='headerbar'>
                        <div className='menuicon'>
                            <img src={MenuBar} />
                        </div>
                        <div className='logo'>
                            <img src={Logoicon} />
                        </div>
                        Bookish
                    </div>
                    <div className='nav-content'>
                        <p onMouseDown={handleNavigate} className='pointer'>Home</p>
                        <p onMouseDown={handleNavigateCart} className='pointer'>Categories</p>
                        <p onMouseDown={handleNavigateabout} className='pointer'>Store</p>
                    </div>
                    <div className='top-right-bar'>
                        <div className='searchbar'>
                            <input type='text' />
                            <div className='search'>
                                <img src={Searchicon} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bottom-container'>
                <div className='bottom-content'>
                    <h4 style={{ color: "lightgray" }}>The Bookish Editors</h4>
                    <h1 style={{ fontSize: 60, color: "black", fontWeight: 400 }}>Featured books of the Autumn Sales</h1>
                    <button>See More</button>
                </div>
                <div className='bottom-content'>
                    <img src={Homeimg} />
                </div>
            </div>
            <div className='Categories-content'>
                <div>
                    <h1>Feature Categories</h1>
                </div>
                <div className='feature-link'>
                    <p onMouseDown={handleNavigateCart} className='pointer'>All Categories</p>
                    <img src={Rightarrow} />
                </div>
            </div>
            <div className='Categories'>
                <div className='slide'>
                    <div className='slide-image'>
                        <img src={Image1} />
                        <button>History</button>
                    </div>
                    <div className="slide-image">
                        <img src={Image2} />
                        <button>Fiction</button>
                    </div>
                    <div className="slide-image">
                        <img src={Image3} />
                        <button>Fairy</button>
                    </div>
                    <div className="slide-image">
                        <img src={Image4} />
                        <button>Mystery</button>
                    </div>
                    <div className="slide-image">
                        <img src={Image5} />
                        <button>Philosophy</button>
                    </div>
                </div>
            </div>

            <div className='bestseller-content'>
                <div>
                    <h1>Best Seller</h1>
                </div>
                <div className='bestseller-link'>
                    <a href='#'>View All</a>
                    <img src={Rightarrow} />
                </div>
            </div>
            <Carousel responsive={responsive} className='best-seller'>
                <div><img src={Bestimg1} /></div>
                <div><img src={Bestimg2} /></div>
                <div><img src={Bestimg3} /></div>
                <div><img src={Bestimg4} /></div>
                <div><img src={Bestimg5} /></div>
            </Carousel>

            <div className='Author-Categories'>
                <div className= 'bestseller-content'>
                    <h1>Author Categories</h1>
                </div>
                <div className="slider-container">
                    <Slider {...settings} >
                        <div className="authors-card">
                            <div className="author-Image">
                                <div className="author-img">
                                    <img src={AuthorImg1} />
                                </div>
                            </div>
                            <div className="author-content">
                                <h3>A G Riddle</h3>
                                <p>Published Books 2</p>
                            </div>
                        </div>
                        <div className="authors-card">
                            <div className="author-Image">
                                <div className="author-img">
                                    <img src={AuthorImg2} />
                                </div>
                            </div>
                            <div className="author-content">
                                <h3>Andre Aciman</h3>
                                <p>Published Books 1</p>
                            </div>
                        </div>
                        <div className="authors-card">
                            <div className="author-Image">
                                <div className="author-img">
                                    <img src={AuthorImg3} />
                                </div>
                            </div>
                            <div className="author-content">
                                <h3>Anna Banks</h3>
                                <p>Published Books 4</p>
                            </div>
                        </div>
                        <div className="authors-card">
                            <div className="author-Image">
                                <div className="author-img">
                                    <img src={AuthorImg4} />
                                </div>
                            </div>
                            <div className="author-content">
                                <h3>Anna Burns</h3>
                                <p>Published Books 2</p>
                            </div>
                        </div>
                        <div className="authors-card">
                            <div className="author-Image">
                                <div className="author-img">
                                    <img src={AuthorImg5} />
                                </div>
                            </div>
                            <div className="author-content">
                                <h3>Ashlee Vance</h3>
                                <p>Published Books 1</p>
                            </div>
                        </div>
                        <div className="authors-card">
                            <div className="author-Image">
                                <div className="author-img">
                                    <img src={AuthorImg6} />
                                </div>
                            </div>
                            <div className="author-content">
                                <h3>Barbara O'Neal</h3>
                                <p>Published Books 5</p>
                            </div>
                        </div>
                        <div className="authors-card">
                            <div className="author-Image">
                                <div className="author-img">
                                    <img src={AuthorImg7} />
                                </div>
                            </div>
                            <div className="author-content">
                                <h3>Blake Crouch</h3>
                                <p>Published Books 3</p>
                            </div>
                        </div>
                        <div className="authors-card">
                            <div className="author-Image">
                                <div className="author-img">
                                    <img src={AuthorImg8} />
                                </div>
                            </div>
                            <div className="author-content">
                                <h3>Boo Walker</h3>
                                <p>Published Books 2</p>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>


            <div className="footer">
                <div className='top-footer'>
                    <div className='footer-content'>
                        <div className="foot-lists">
                            <div>
                            <span>Apt. 558 43870 Karma Tunnel,<br></br>
                                North Roymouth, <br></br>
                                PA 84523-9404</span>
                            </div>
                            <div className='footer-img'>
                                <img src={Gmailicon} /><span>salesbookish</span>
                            </div>
                            <div className='footer-img'>
                                <img src={Phoneicon} />
                                <span>+1 (822) 081-7018</span>
                            </div>
                            <div>
                            <ul className='social-icons' >
                                <li><img src={Instaimg} /></li>
                                <li><img src={Facebookimg} /></li>
                                <li><img src={Twitterimg} /></li>
                                <li><img src={Youtubeimg} /></li>
                                <li><img src={Pinterestimg} /></li>
                            </ul>
                            </div>
                        </div>
                    </div>
                    <div className='footer-container'>
                        <div className="footer-div1">
                            <h3>Explore</h3>
                            <ul className='foot-list'>
                                <li>About us</li>
                                <li>Sitemap</li>
                                <li>Bookmarks</li>
                                <li>Sign in/Join</li>
                            </ul>
                        </div>
                        <div className="foooter-div2">
                            <h3>Service</h3>
                            <ul className='foot-list'>
                                <li>Help Center</li>
                                <li>Returns</li>
                                <li>Accessibility</li>
                                <li>Contact Us</li>
                            </ul>
                        </div>
                        <div className="footer-div3">
                            <h3>Policy</h3>
                            <ul className='foot-list'>
                                <li>Return</li>
                                <li>Terms Of Use</li>
                                <li>Security</li>
                                <li>Privacy</li>
                            </ul>
                        </div>
                        <div className="footer-div4">
                            <h3>Categories</h3>
                            <ul className='foot-list'>
                                <li>Drama</li>
                                <li>Horror</li>
                                <li>Food</li>
                                <li>Romance</li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* <hr/> */}
                <div className='booter-footer'>
                    <span>©2020 Bookish. All rights reserved</span>
                </div>
            </div>







        </div>

    )
}

export default BookStore