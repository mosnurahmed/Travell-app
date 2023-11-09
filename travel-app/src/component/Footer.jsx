function Footer() {
  return (
    <div className="flex justify-between mx-3 bg-[#171C2A] text-white px-4  py-4">
      <div className="">
        <h2 className="text-xl font-bold my-4">Contact</h2>
        <ul>
          <li className="pr-4">
            <i className="fa-solid  fa-location-dot"></i>veniam, quis nostrud exercitation
          </li>
          <li>
            <i className="fa-solid fa-phone"></i>
            +92 51 8893644
          </li>
          <li>
            <i className="fa-solid fa-envelope"></i>veniam, quis nostrud exercitation ullamco laboris
          </li>
        </ul>
      </div>
      <div className="">
        <h2 className="text-xl font-bold my-4">More Information</h2>
        <p>Contact Us</p>
        <p>About us Us</p>
      </div>
      <div className="">
        <h2 className="text-xl font-bold my-4">Join Us</h2>
        <div className="socialIcon">
          <ul className=" flex gap-x-2">
            <li>
              <i className="fa-brands fa-facebook"></i>
            </li>
            <li>
              <i className="fa-brands fa-instagram"></i>
            </li>
            <li>
              <i className="fa-brands fa-linkedin-in"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
