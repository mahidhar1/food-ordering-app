import axios from "axios";
import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Layout({ children, shopId }) {
  const [shopDetails, setShopDetails] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/shops/${shopId}`)
      .then((res) => setShopDetails(res?.data?.shop))
      .catch((error) => console.log(error));
  }, [shopId]);
  return (
    <>
      <Navbar shopDetails={shopDetails} />
      {children}
      <Footer shopDetails={shopDetails} />
    </>
  );
}

export default Layout;
