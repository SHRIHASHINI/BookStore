import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";

import Home from './BookStore';
import CartPage from './CartDesign';
import AboutPage from "./Aboutus";
function Nav()
{
 return (
     <div>
         <Router>
             <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/cartpage" element={<CartPage></CartPage>}></Route>
                <Route path="/aboutpage" element={<AboutPage></AboutPage>}></Route>
             </Routes>
         </Router>
     </div>
 )
}
export default Nav