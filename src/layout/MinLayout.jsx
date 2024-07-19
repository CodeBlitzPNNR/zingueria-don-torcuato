import Navbar2 from "../components/Navbar2"
import Footer from "../components/Footer"
import WpWidget from "../components/WpWidget"

const MainLayout = ({ children }) => {
  return (
    <main className="min-h-screen flex flex-col justify-between">      
          <Navbar2 />          

            { children }
          
          <WpWidget/>         
          <Footer /> 
    </main>
  )
}

export default MainLayout;

