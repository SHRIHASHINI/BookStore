// import React, { Fragment } from "react";
import * as React from 'react';
import './Aboutus.css';
import Aboutimg from '../assets/images/aboutimg.png';
import { lightGreen } from '@mui/material/colors';
import Aboutbk1 from '../assets/images/aboutbk1.jpg';
import Aboutbk2 from '../assets/images/aboutbk2.jpg';
import Aboutbk3 from '../assets/images/aboutbk3.jpg';
import Analysisimg from '../assets/images/analysis.png';
import Historyimg from '../assets/images/historyimg.jpg';
import Reward1 from '../assets/images/reward1.webp';
import Reward2 from '../assets/images/reward2.webp';
import Reward3 from '../assets/images/reward3.png';
import Accordion, { AccordionSlots } from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Fade from '@mui/material/Fade';


function AboutPage() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpansion = () => {
      setExpanded((prevExpanded) => !prevExpanded);
    };
  
    return (
        <div className='Main-About'>
            <span style={{ fontSize: 15, textAlign: "center", display: "block", backgroundColor: "lightgreen", height: 25 }}>Every Purchase Supports Local Bookstores. A Better Way to Buy Books Online.</span>
            <span style={{ textAlign: "center", display: "block", height: 30, margin: 10 }}>More than $31 million raised for local bookstores!</span>

            <h3 style={{ fontSize: 25, textAlign: "center" }}>“Thanks to Bookshop, there is no reason to buy books on Amazon anymore.”</h3>
            <div className='About-flexcontent' >
                <div id='width-content'>
                    <div className='about-img'>
                        <img src={Aboutimg} />
                    </div>
                    <div className='flexcontent-justify'>
                        <h3><i>Bookish.org works to connect readers with independent booksellers all over the world.</i></h3>
                        <p>‍We believe local bookstores are essential community hubs that foster culture, curiosity, and a love of reading, and we're committed to helping them thrive.<b>Every purchase on the site financially supports independent bookstores.</b> Our platform gives independent bookstores tools to compete online and financial support to help them maintain their presence in local communities.</p>
                    </div>
                </div>
            </div>

            <div style={{ height: 100, backgroundColor: "lightGreen" }} className='About-flexcontent'>
                <p>Since 2020, we've raised more than </p><h1 >$31 million</h1> <p>for independent bookstores.</p>
            </div>


            <div>
                <h1 style={{ textAlign: "center", fontSize: 35, margin: 20 }}>How it works</h1>
                <h2 style={{ textAlign: "center" }}>(and how your purchases help bookstores)</h2>
                <div className='About-flexcontent1' >
                    <div id='width-content'>
                        <div className='aboutcontent'>
                            <img src={Aboutbk1} id='about-img'></img>
                            <h2>Pick A Store</h2>
                            <p style={{ textAlign: "center", fontSize: 15 }}>Visit our find a local bookstore page and<b> select the bookstore you'd like to support.</b> If you don't choose a store, you'll contribute to our profit sharing pool that helps all our stores.</p>
                        </div>
                        <div className='aboutcontent'>
                            <img src={Aboutbk2} id='about-img'></img>
                            <h2>Buy a Book</h2>
                            <p style={{ textAlign: "center", fontSize: 15 }}>Your order will be <b>filled directly by our distributor,</b> and the full profit from your purchase will be sent to bookstore you selected.</p>
                        </div>
                        <div className='aboutcontent'>
                            <img src={Aboutbk3} id='about-img'></img>
                            <h2>Check the Mail</h2>
                            <p style={{ textAlign: "center", fontSize: 15 }}>You'll receive a confirmation and tracking number when your order is placed, and our <b>in-house customer service team</b> will be standing by if you have issues or returns.</p>
                        </div>
                        <div className='aboutcontent'>
                            <img src='https://cdn.prod.website-files.com/6267f35934aa8b1795cf1a9f/62f53a0ab5f1511d391ec6ad_bouncing.gif' id='about-img'></img>
                            <h2>Help Bookstores</h2>
                            <p style={{ textAlign: "center", fontSize: 15 }}><b>We donate profits directly</b> to bookstores—both the funds from direct purchases and our profit pool that's split between our 2,000+ stores.</p>
                        </div>
                    </div>
                </div>
            </div>



            <div className='About-flexcontent' style={{ backgroundColor: "lightgreen" }} >
                <div id='width-content1'>
                    <div className='aboutcontent'>
                        <p>“This funding came at the most perfect time when I prayed I would have rent for next month and payroll and purchases. Your team will never, ever, know how much booksellers like me appreciate your business.”</p>
                        <h3>VaLinda Miller</h3>
                        <h4>Turning Page Bookshop</h4>
                        <p>Goose Creek, SC</p>
                    </div>
                    <div className='aboutcontent'>
                        <p>“These funds mean more than money. It means community to me. And for that, I will be forever grateful.”</p>
                        <h3>Fawn Fernandes</h3>
                        <h4>Curious Capybara Bookshop</h4>
                        <p>Hendersonville, TN</p>
                    </div>
                    <div className='aboutcontent'>
                        <p>“Bookshop has absolutely transformed our business, and I am just so continually grateful for your service and, ultimately, support. Thank you so much for your vision and your commitment to us indies.”</p>
                        <h3>Lexi Walter Wright</h3>
                        <h4>High Five Books</h4>
                        <p>Northampton, MA</p>
                    </div>
                </div>
            </div>


            <h1 style={{ textAlign: "center" }}>Our Mission</h1>
            <h2 style={{ textAlign: "center" }}>‍(and where our profits go)</h2>

            <div className='About-flexcontent'>

                <div id='width-content2'>
                    <div className='analysisimg'>
                        <img src={Analysisimg}></img>
                    </div>
                    <div>
                        <p>Our mission is simple: To help local, independent bookstores thrive in the age of ecommerce.<br /><br />Certified as a B Corp, Bookish.org puts this mission and the public good above financial interests, giving over 80% of our profit margin to independent bookstores. In 2022, B-Labs announced we were "best for the world": in the top 5% of all B-Corps.<br /><br />It is written in our governance documents that we will never sell the company to Amazon or any major U.S. retailer.<br></br>As a Climate Neutral company, we are committed to operating sustainably.</p>
                    </div>
                </div>
            </div>


            <div className='About-flexcontent' style={{ backgroundColor: "lightgreen" }} >
                <div id='width-content1'>
                    <div className='rewardimg'>
                        <img src={Reward1} />
                    </div>
                    <div className='rewardimg'>
                        <img src={Reward2} />
                    </div>
                    <div className='rewardimg'>
                        <img src={Reward3} />

                    </div>
                </div>
            </div>


            <div className='flexcenter'>
                <div className='aligncenter'>
                    <h1>Our History</h1>
                    <div className='analysisimg1'>
                        <img src={Historyimg} />
                    </div>
                    <p>Bookish.org began as an idea to help support bookstores and their communities as more and more people are buying their books online. We saw an opportunity to create an alternative to Amazon for socially-conscious online shoppers. Amazon sells over 60% of all books in the US and is growing. That shift threatens the future of bookstores and will hurt readers, authors, and publishers who rely on a diverse, healthy ecosystem for books. We had a better idea — give readers the convenience of online shopping while supporting independent bookstores at the same time.<br /><br />We launched in January of 2020, with just 88 bookstore partners and a team of four passionate book people.<br /><br />As the COVID-19 pandemic surged, our growing platform helped our community of independent booksellers survive shutdowns. That spring, traffic to Bookish.org hit 1 million users in a single day. By the end of 2020 we had grown to over 1,000 bookstores and distributed over ten million dollars in profits. Bookish.org has since expanded internationally, launching in the UK and Spain.<br /><br />78% of our customers said they regularly bought books from Amazon before they made the switch.</p>
                </div>
            </div>
            <div className='flexcenter'>
                <div className='aligncenter'>
                    <h1>F.A.Q</h1>
                    <Accordion
                        style={{width:"100%" , margin:"10px", border:".2px solid lightgreen", boxShadow:".5px 1px 1.5px lightgreen"}}
                        expanded={expanded}
                        onChange={handleExpansion}
                        slots={{ transition: Fade as AccordionSlots['transition'] }}
                        slotProps={{ transition: { timeout: 400 } }}
                        sx={{
                            '& .MuiAccordion-region': { height: expanded ? 'auto' : 0 },
                            '& .MuiAccordionDetails-root': { display: expanded ? 'block' : 'none' },
                        }}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                          
                        >
                            <Typography style={{fontFamily:"Raleway"}}>What do I do if I have received a damaged, incorrect, or otherwise defective order?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography style={{fontFamily:"Raleway"}}>
                                If you have received damaged, defective, or incorrectly shipped merchandise please contact customer service <a href='#'>here</a>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion
                        style={{width:"100%", margin:"10px" , border:".2px solid lightgreen", boxShadow:".5px 1px 1.5px lightgreen"}}
                        >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2-content"
                            id="panel2-header"
                          
                        >
                            <Typography style={{fontFamily:"Raleway"}}>Will the Book Shop sell audibooks or ebooks?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography style={{fontFamily:"Raleway"}}>
                                We sell audiobooks via an affiliate partnership with Libro.fm. You can see the links on the product page of titles that are carried by them. We are working on an indie-friendly ebook solution.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion
                        style={{width:"100%", margin:"10px", border:".2px solid lightgreen", boxShadow:".5px 1px 1.5px lightgreen"}}
                        >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2-content"
                            id="panel2-header"
                        >
                            <Typography style={{fontFamily:"Raleway"}}>How does Bookish.org promote local bookstore?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography style={{fontFamily:"Raleway"}}>
                                —Every receipt informs customers about the bookstores near them.
                                —If a Bookshop.org customer opts in, their local bookstore will be given their email address
                                —Affiliate stores can create recommendation lists (staff picks, etc) on Bookshop.org, boosting their visibility and earning a commission on every sale generated from the list.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion
                        style={{width:"100%", margin:"10px", border:".2px solid lightgreen", boxShadow:".5px 1px 1.5px lightgreen"}}
                        >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2-content"
                            id="panel2-header"
                        >
                            <Typography style={{fontFamily:"Raleway"}}>Does Bookish.org allow for in-store pickup?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography style={{fontFamily:"Raleway"}}>
                                Bookish.org does not allow for in-store pickup yet, but we hope to in the not too distant future.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion
                        style={{width:"100%", margin:"10px", border:".2px solid lightgreen", boxShadow:".5px 1px 1.5px lightgreen"}}
                        >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2-content"
                            id="panel2-header"
                        >
                            <Typography style={{fontFamily:"Raleway"}}>How do I list our sotre's on Bookish.org?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography style={{fontFamily:"Raleway"}}>
                                Any books in Ingram's inventory are automatically listed on Bookshop.org.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion
                        style={{width:"100%", margin:"10px", border:".2px solid lightgreen", boxShadow:".5px 1px 1.5px lightgreen"}}
                        >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2-content"
                            id="panel2-header"
                        >
                            <Typography style={{fontFamily:"Raleway"}}>How does Bookish.org target online customers?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography style={{fontFamily:"Raleway"}}>
                                Bookshop.org is designed to generate affiliate revenue. Our network of publishers, authors, bookstagrammers, celebrity book clubs, and other media sites reaches socially-conscious online consumers who are not yet buying their books online through an independent bookstore.Bookshop.org's interface and purchase process is designed to be as convenient, streamlined, and user-friendly as possible, for an alternative that is just as easy as our competitors.78% of our customers previously were Amazon customers, according to our customer survey.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion
                        style={{width:"100%", margin:"10px", border:".2px solid lightgreen", boxShadow:".5px 1px 1.5px lightgreen"}}
                        >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2-content"
                            id="panel2-header"
                        >
                            <Typography style={{fontFamily:"Raleway"}}>How do I report a problem with the website or my order?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography style={{fontFamily:"Raleway"}}>
                                <a href='#'>Contact Us</a>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </div>
        </div>
    )
}
export default AboutPage