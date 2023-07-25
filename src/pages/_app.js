import "@/styles/globals.css";
import { useRouter } from "next/router";
import { useState } from "react";
import { Button } from "@mui/material";
import "../styles/styles.scss";
import togglerIcon from "../../public/assets/images/threeLine-icon.svg";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [tab, setTab] = useState("APIs");
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="MainPart">
        <div className={open ? "sideBar show": "sideBar"}>
          <Button className="closeBtn" onClick={()=> setOpen(false)}>X</Button>
          <div className="sideBar__inner">
            <Button
              className={`themeBtn ${tab === "APIs" && "activeTab"}`}
              variant="contained"
              onClick={() => {
                setTab("APIs");
                router.push("/");
              }}
            >
              All Apis page
            </Button>
            <Button
              className={`themeBtn ${tab === "Rate" && "activeTab"}`}
              variant="contained"
              onClick={() => {
                setTab("APIs");
                router.push("/RatePage");
              }}
            >
              Rate Apis form
            </Button>
            <Button
              className={`themeBtn ${tab === "Shipping" && "activeTab"}`}
              variant="contained"
              onClick={() => {
                setTab("APIs");
                router.push("/ShippingPage");
              }}
            >
              Shipping Apis form
            </Button>
            <Button
              className={`themeBtn ${tab === "Product" && "activeTab"}`}
              variant="contained"
              onClick={() => {
                setTab("APIs");
                router.push("/productPage");
              }}
            >
              Product Apis form
            </Button>
          </div>
        </div>
        <div className="MainBody">
          <Button className="togglBtn" onClick={()=> setOpen(true)}>
            <img src={togglerIcon.src} alt="img" />
          </Button>
          <Component {...pageProps} />
        </div>
      </div>
    </>
  );
}
