import Navbar from "../component/Navbar";
import Banner from "../component/banner/Banner";
import Search from "../component/Search";
import Destinations from "../component/Destinations";
import Footer from "../component/Footer";

function Home() {
  return (
    <>
      <div className=" lg:mx-auto lg:w-[80%] md:mx-auto   md:w-[80%] font-normal ">
        <Navbar />
        <Banner />
        <Search />
        <Destinations />
        <Footer />
      </div>
    </>
  );
}

export default Home;
