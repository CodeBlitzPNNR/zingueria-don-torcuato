import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import WpWidget from "../components/WpWidget"
import Banner from "../components/Banner"

const MainLayout = ({ children }) => {
  return (
    <main className="min-h-screen flex flex-col justify-between">
      <Banner /> 
          <Navbar />
          

            { children }
          
          <WpWidget/>         
          <Footer /> 
    </main>
  )
}

export default MainLayout;

