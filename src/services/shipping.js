import postApiData from "@/constants/postVariables";
import axios from "axios";
const baseURL =
  "https://cors-anywhere.herokuapp.com/https://api.shipengine.com/v1";

const header = {
  "API-Key": "TEST_tQknl3Qt3Mej8MCyzO/EMnIMxytqfYMExTVjS4jjiPY",
  "Content-Type": "application/json",
};

async function fetchTrackingNumber(trackingNumber) {
  try {
    const { data } = await axios.get(
      `${baseURL}/tracking?carrier_code=stamps_com&tracking_number=${trackingNumber}`,
      { headers: header }
    );
    console.log(data, "dt");
    return { data };
  } catch (e) {
    console.log(e, "eee");
    return {
      error: e,
    };
  }
}

async function carriersAPI() {
  try {
    const { data } = await axios.get(`${baseURL}/carriers `, {
      headers: header,
    });
    console.log(data, "dt");
    return { data };
  } catch (e) {
    console.log(e, "eee");
    return {
      error: e,
    };
  }
}

async function betaCarriersAPI() {
  try {
    const { data } = await axios.get(
      `https://cors-anywhere.herokuapp.com/https://api.shipengine.com/v-beta/ltl/carriers/FXFE/credential_requirements `,
      { headers: header }
    );
    console.log(data, "dt");
    return { data };
  } catch (e) {
    console.log(e, "eee");
    return {
      error: e,
    };
  }
}

async function postShipment() {
  try {
    const { data } = await axios.get(
      `${baseURL}/shipments `,
      { headers: header }
    );
    console.log(data, "dt");
    return { data };
  } catch (e) {
    console.log(e, "eee");
    return {
      error: e,
    };
  }
}

async function postLabels(labelsPostData) {
  try {
    const { data } = await axios.post(
      `${baseURL}/labels `,
      postApiData.labelsPostData,
      { headers: header }
    );
    console.log(data, "dt");
    return { data };
  } catch (e) {
    console.log(e, "eee");
    return {
      error: e,
    };
  }
}

async function carriersID() {
  try {
    const { data } = await axios.get(`${baseURL}/carriers/se-4146038`, {
      headers: header,
    });
    console.log(data, "dt");
    return { data };
  } catch (e) {
    console.log(e, "eee");
    return {
      error: e,
    };
  }
}

async function fetchByLabelId(labelId) {
  try {
    const { data } = await axios.get(`${baseURL}/labels/${labelId}/track`, {
      headers: header,
    });
    console.log(data, "dt");
    return { data };
  } catch (e) {
    console.log(e, "eee");
    return {
      error: e,
    };
  }
}

async function carriersOption() {
  try {
    const { data } = await axios.get(`${baseURL}/carriers/se-4146038/options`, {
      headers: header,
    });
    console.log(data, "dt");
    return { data };
  } catch (e) {
    console.log(e, "eee");
    return {
      error: e,
    };
  }
}

async function carriersServices() {
  try {
    const { data } = await axios.get(
      `${baseURL}/carriers/se-4146038/services`,
      { headers: header }
    );
    console.log(data, "dt");
    return { data };
  } catch (e) {
    console.log(e, "eee");
    return {
      error: e,
    };
  }
}

async function carriersPackages() {
  try {
    const { data } = await axios.get(
      `${baseURL}/carriers/se-4146038/packages`,
      { headers: header }
    );
    console.log(data, "dt");
    return { data };
  } catch (e) {
    console.log(e, "eee");
    return {
      error: e,
    };
  }
}

async function EstimateRate() {
  try {
    const { data } = await axios.post(
      `${baseURL}/rates/estimate`,
      postApiData.EstimateData,
      { headers: header }
    );
    console.log(data, "dt");
    return { data };
  } catch (e) {
    console.log(e, "eee");
    return {
      error: e,
    };
  }
}

async function RateApi(RateData) {
  try {
    const { data } = await axios.post(
      `${baseURL}/rates`,
      postApiData.RateData,
      { headers: header }
    );
    console.log(data, "dt");
    return { data };
  } catch (e) {
    console.log(e, "eee");
    return {
      error: e,
    };
  }
}

async function packagesData(packagesData) {
  try {
    const { data } = await axios.post(
      `${baseURL}/labels`,
      postApiData.packagesData,
      { headers: header }
    );
    console.log(data, "dt");
    return { data };
  } catch (e) {
    console.log(e, "eee");
    return {
      error: e,
    };
  }
}

async function getLowestShippingCost() {
  try {
    const { data } = await axios.post(
      `${baseURL}/labels`,
      postApiData.packagesData,
      { headers: header }
    );
    console.log(data, "dt");
    // return { data };
    let packages = data.packages;
    packages.sort((a, b) => a.insured_value.amount - b.insured_value.amount);


    console.log("Sorted Lowest amount packages ", packages);

    // const lowestCostRate = rates[0];
    // const lowestCostInfo = {
    //   carrier_id: lowestCostRate.carrier_id,
    //   carrier_name: lowestCostRate.carrier_name,
    //   service_code: lowestCostRate.service_code,
    //   service_name: lowestCostRate.service_name,
    //   delivery_days: lowestCostRate.delivery_days,
    //   delivery_date: lowestCostRate.delivery_date,
    // };
  } catch (error) {
    // return lowestCostInfo;
  }

}

const shipEngineApi = {
  fetchTrackingNumber,
  carriersAPI,
  betaCarriersAPI,
  postShipment,
  postLabels,
  carriersID,
  carriersOption,
  carriersServices,
  carriersPackages,
  fetchByLabelId,
  EstimateRate,
  RateApi,
  packagesData,
  getLowestShippingCost,
};
export default shipEngineApi;
