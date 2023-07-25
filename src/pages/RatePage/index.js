import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import shipEngineApi from "@/services/shipping";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RatePage() {
  const [shipTo, setShipTo] = useState();
  const [shipFrom, setShipFrom] = useState();
  const RateData = {
    label_layout: "4x6",
    shipment: shipTo,
    ship_from: shipFrom,
    confirmation: "none",
    insurance_provider: "none",
    rate_options: {
      carrier_ids: ["se-4146038"],
    },
    packages: [
      {
        weight: {
          value: 1.0,
          unit: "ounce",
        },
      },
    ],
  };

  const handleOnchange = (e) => {
    setShipTo({ ...shipTo, [e.target.name]: e.target.value });
  };
  const handleFormOnchange = (e) => {
    setShipFrom({ ...shipFrom, [e.target.name]: e.target.value });
  };

  return (
    <>
      <h1 className="page-title">Shipping Apis form</h1>
      <div className="shipmentBox">
        <div className="shipmentBox__inner">
          <h2 className="sectionTitle">Ship To</h2>
          <div className="formGroupMain">
            <div className="formGroup">
              <TextField
                id="outlined-basic"
                label="Name"
                variant="outlined"
                name="name"
                value={shipTo?.name ? shipTo.name : ""}
                onChange={(e) => handleOnchange(e)}
              />
            </div>
            <div className="formGroup">
              <TextField
                id="outlined-basic"
                label="Phone"
                variant="outlined"
                name="phone"
                value={shipTo?.phone ? shipTo.phone : ""}
                onChange={(e) => handleOnchange(e)}
              />
            </div>
            <div className="formGroup">
              <TextField
                id="outlined-basic"
                label="Address_line1"
                variant="outlined"
                name="address_line1"
                value={shipTo?.address_line1 ? shipTo.address_line1 : ""}
                onChange={(e) => handleOnchange(e)}
              />
            </div>
            <div className="formGroup">
              <TextField
                id="outlined-basic"
                label="City_Locality"
                variant="outlined"
                name="city_locality"
                value={shipTo?.city_locality ? shipTo.city_locality : ""}
                onChange={(e) => handleOnchange(e)}
              />
            </div>
            <div className="formGroup">
              <TextField
                id="outlined-basic"
                label="State_Province"
                variant="outlined"
                name="state_province"
                value={shipTo?.state_province ? shipTo.state_province : ""}
                onChange={(e) => handleOnchange(e)}
              />
            </div>
            <div className="formGroup">
              <TextField
                id="outlined-basic"
                label="Postal_Code"
                variant="outlined"
                name="postal_code"
                value={shipTo?.postal_code ? shipTo.postal_code : ""}
                onChange={(e) => handleOnchange(e)}
              />
            </div>
            <div className="formGroup">
              <TextField
                id="outlined-basic"
                label="Country_Code"
                variant="outlined"
                name="country_code"
                value={shipTo?.country_code ? shipTo.country_code : ""}
                onChange={(e) => handleOnchange(e)}
              />
            </div>
            <div className="formGroup">
              <TextField
                id="outlined-basic"
                label="Address_Residential_indicator"
                variant="outlined"
                name="address_residential_indicator"
                value={
                  shipTo?.address_residential_indicator
                    ? shipTo.address_residential_indicator
                    : ""
                }
                onChange={(e) => handleOnchange(e)}
              />
            </div>
          </div>
        </div>
        <div className="shipmentBox__inner">
          <h2 className="sectionTitle">Ship From</h2>
          <div className="formGroupMain">
            <div className="formGroup">
              <TextField
                id="outlined-basic"
                label="Company_name"
                variant="outlined"
                name="company_name"
                value={shipFrom?.company_name ? shipFrom.company_name : ""}
                onChange={(e) => handleFormOnchange(e)}
              />
            </div>
            <div className="formGroup">
              <TextField
                id="outlined-basic"
                label="Name"
                variant="outlined"
                name="name"
                value={shipFrom?.name ? shipFrom.name : ""}
                onChange={(e) => handleFormOnchange(e)}
              />
            </div>
            <div className="formGroup">
              <TextField
                id="outlined-basic"
                label="Phone"
                variant="outlined"
                name="phone"
                value={shipFrom?.phone ? shipFrom.phone : ""}
                onChange={(e) => handleFormOnchange(e)}
              />
            </div>
            <div className="formGroup">
              <TextField
                id="outlined-basic"
                label="Address_line1"
                variant="outlined"
                name="address_line1"
                value={shipFrom?.address_line1 ? shipFrom.address_line1 : ""}
                onChange={(e) => handleFormOnchange(e)}
              />
            </div>
            <div className="formGroup">
              <TextField
                id="outlined-basic"
                label="Address_line2"
                variant="outlined"
                name="address_line2"
                value={shipFrom?.address_line2 ? shipFrom.address_line2 : ""}
                onChange={(e) => handleFormOnchange(e)}
              />
            </div>
            <div className="formGroup">
              <TextField
                id="outlined-basic"
                label="City_locality"
                variant="outlined"
                name="city_locality"
                value={shipFrom?.city_locality ? shipFrom.city_locality : ""}
                onChange={(e) => handleFormOnchange(e)}
              />
            </div>
            <div className="formGroup">
              <TextField
                id="outlined-basic"
                label="State_Province"
                variant="outlined"
                name="state_province"
                value={shipFrom?.state_province ? shipFrom.state_province : ""}
                onChange={(e) => handleFormOnchange(e)}
              />
            </div>
            <div className="formGroup">
              <TextField
                id="outlined-basic"
                label="Postal_code"
                variant="outlined"
                name="postal_code"
                value={shipFrom?.postal_code ? shipFrom.postal_code : ""}
                onChange={(e) => handleFormOnchange(e)}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="FooterbtnPart">
        <Button
          className="themeBtn"
          variant="contained"
          onClick={() => {
            shipEngineApi.RateApi(RateData);
          }}
        >
          submit
        </Button>
      </div>
    </>
  );
}
