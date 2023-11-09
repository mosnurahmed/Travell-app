import { useParams } from "react-router-dom";
import Navbar from "../component/Navbar";
import Booking from "../component/destinationDetail/Booking";
import DetailBanner from "../component/destinationDetail/DetailBanner";
import DetailDescription from "../component/destinationDetail/DetailDescription";
import {useGetDestinationQuery} from "../feature/destination/destinationApi"
import Footer from "../component/Footer";

function DestinationDetails() {
  const { id } = useParams();
  const {data:destination, isLoading,isError,error} =useGetDestinationQuery(id)

  let content = null;

  if (isLoading) {
    content = <div>Loading...</div>;
  } else if (!isLoading && isError) {
    content = <div>{error.data}</div>;
  }  else if (!isLoading && !isError && destination?.id) {
    
    content = (
      <>
       <DetailBanner  d={destination} />
      <div className="flex gap-x-8 my-16 mx-4">
        <DetailDescription d={destination} />
        <Booking />
      </div>
      <Footer/>
      
      </>
    )
    
  }




  return (
    <div className=" lg:mx-auto lg:w-[80%] md:mx-auto   md:w-[80%] font-normal ">
      <Navbar />
      {
        content
      }
    </div>
  );
}

export default DestinationDetails;
