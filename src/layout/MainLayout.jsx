import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Banner from "../components/Banner"
import WpWidget from "../components/WpWidget"

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

