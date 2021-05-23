import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return ( 
    <div>
      <Navbar />
      <div className="overflow">
        { children }
        <Footer />
      </div>
    </div>
   )
}
 
export default Layout;