import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import shipEngineApi from "@/services/shipping";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function ProductPage() {
  const [data, setData] = useState();
  const RateData = {
    rate_options: {
      carrier_ids: ["se-4146038"],
    },
    shipment: {
      validate_address: "no_validation",
      ship_to: {
        name: "Amanda Miller",
        phone: "555-555-5555",
        address_line1: "525 S Winchester Blvd",
        city_locality: "San Jose",
        state_province: "CA",
        postal_code: "95128",
        country_code: "US",
        address_residential_indicator: "yes",
      },
      ship_from: {
        company_name: "Example Corp.",
        name: "John Doe",
        phone: "111-111-1111",
        address_line1: "4009 Marathon Blvd",
        address_line2: "Suite 300",
        city_locality: "Austin",
        state_province: "TX",
        postal_code: "78756",
        country_code: "US",
        address_residential_indicator: "no",
      },
      packages: [
        {
          weight: {
            value: data?.weight ? parseInt(data.weight) : 1.0,
            unit: "ounce",
          },
          dimensions: {
            length: data?.length ? parseInt(data.length) : 10,
            height: data?.height ? parseInt(data.height) : 10,
            width: data?.width ? parseInt(data.width) : 10,
            unit: "inch",
          },
        },
      ],
    },
  };
  console.log(data, "data");
  const handleOnchange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="shipmentBox productPage">
        <h1 className="page-title">Product Apis form</h1>
        <div className="shipmentBox__inner">
          <h2 className="sectionTitle">Product Data</h2>
          <div className="formGroupMain">
            <div className="formGroup">
              <TextField
                id="outlined-basic"
                label="Height"
                variant="outlined"
                name="height"
                value={data?.height ? data.height : ""}
                onChange={(e) => handleOnchange(e)}
              />
            </div>
            <div className="formGroup">
              {" "}
              <TextField
                id="outlined-basic"
                label="Weight"
                variant="outlined"
                name="weight"
                value={data?.weight ? data.weight : ""}
                onChange={(e) => handleOnchange(e)}
              />
            </div>
            <div className="formGroup">
              <TextField
                id="outlined-basic"
                label="Length"
                variant="outlined"
                name="length"
                value={data?.length ? data.length : ""}
                onChange={(e) => handleOnchange(e)}
              />
            </div>
            <div className="formGroup">
              <TextField
                id="outlined-basic"
                label="Width"
                variant="outlined"
                name="width"
                value={data?.width ? data?.width : ""}
                onChange={(e) => handleOnchange(e)}
              />
            </div>
            <div className="formGroup">
              <TextField
                id="outlined-basic"
                label="Unit"
                variant="outlined"
                name="unit"
                value={data?.unit ? data?.unit : ""}
                onChange={(e) => handleOnchange(e)}
              />
            </div>
          </div>
          <div className="FooterbtnPart mb-0">
            <Button
              variant="contained"
              onClick={() => {
                shipEngineApi.RateApi(RateData);
              }}
            >
              submit
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
