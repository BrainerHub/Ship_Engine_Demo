import styles from "@/styles/Home.module.css";
import { useState } from "react";
import AllAPi from "../pages/AllApi"


// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [multipleApi, setMultipleApi] = useState("shippingApi");
  const [tab, setTab] = useState("APIs");
  return (
    <>
    <AllAPi/>
    </>
  );
}
