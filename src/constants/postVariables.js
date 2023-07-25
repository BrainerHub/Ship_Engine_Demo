 const rateShipping = {
    "carrier_ids": [
      "se-123890"
    ],
    "from_country_code": "US",
    "from_postal_code": "78756",
    "to_country_code": "US",
    "to_postal_code": "95128",
    "to_city_locality": "San Jose",
    "to_state_province": "CA",
    "weight": {
      "value": 1.0,
      "unit": "ounce"
    },
    "dimensions": {
      "unit": "inch",
      "length": 5.0,
      "width": 5.0,
      "height": 5.0
    },
    "confirmation": "none",
    "address_residential_indicator": "no"
  }
  
  // const shipMent = {
  //   "shipments": [
  //     {
  //       "validate_address": "no_validation",
  //       "service_code": "usps_priority_mail",
  //       "external_shipment_id": "1daa0c22-0519-46d0-8653-9f3dc62e7d2c",
  //       "ship_to": {
  //         "name": "Amanda Miller",
  //         "phone": "555-555-5555",
  //         "address_line1": "525 S Winchester Blvd",
  //         "city_locality": "San Jose",
  //         "state_province": "CA",
  //         "postal_code": "95128",
  //         "country_code": "US",
  //         "address_residential_indicator": "yes"
  //       },
  //       "ship_from": {
  //         "company_name": "Example Corp.",
  //         "name": "John Doe",
  //         "phone": "111-111-1111",
  //         "address_line1": "4009 Marathon Blvd",
  //         "address_line2": "Suite 300",
  //         "city_locality": "Austin",
  //         "state_province": "TX",
  //         "postal_code": "78756",
  //         "country_code": "US",
  //         "address_residential_indicator": "no"
  //       },
  //       "confirmation": "none",
  //       "advanced_options": {},
  //       "insurance_provider": "none",
  //       "tags": [],
  //       "packages": [
  //         {
  //           "weight": {
  //             "value": 1.0,
  //             "unit": "ounce"
  //           }
  //         }
  //       ]
  //     }
  //   ]
  // };

  const labelsPostData = {
    "label_layout": "4x6",
    "shipment": {
      "service_code": "usps_priority_mail",
      "ship_to": {
        "name": "jennyyyy",
        "phone": "555-555-5555",
        "address_line1": "525 S Winchester Blvd",
        "city_locality": "San Jose",
        "state_province": "CA",
        "postal_code": "95128",
        "country_code": "US",
        "address_residential_indicator": "yes"
      },
      "ship_from": {
        "company_name": "Example Corp.",
        "name": "John Doe",
        "phone": "111-111-1111",
        "address_line1": "4009 Marathon Blvd",
        "address_line2": "Suite 300",
        "city_locality": "Austin",
        "state_province": "TX",
        "postal_code": "78756",
        "country_code": "US",
        "address_residential_indicator": "no"
      },
      "confirmation": "none",
      "insurance_provider": "none",
      "packages": [
        {
          "weight": {
            "value": 1.0,
            "unit": "ounce"
          }
        }
      ]
    }
  };

  const EstimateData = {
      "carrier_ids": [
        "se-4146038"
      ],
      "from_country_code": "US",
      "from_postal_code": "78756",
      "to_country_code": "US",
      "to_postal_code": "95128",
      "to_city_locality": "San Jose",
      "to_state_province": "CA",
      "weight": {
        "value": 1.0,
        "unit": "ounce"
      },
      "dimensions": {
        "unit": "inch",
        "length": 5.0,
        "width": 5.0,
        "height": 5.0
      },
      "confirmation": "none",
      "address_residential_indicator": "no"
    
  };

  const RateData ={
    "rate_options": {
      "carrier_ids": [
        "se-4146038"
      ]
    },
    "shipment": {
      "validate_address": "no_validation",
      "ship_to": {
        "name": "Amanda Miller",
        "phone": "555-555-5555",
        "address_line1": "525 S Winchester Blvd",
        "city_locality": "San Jose",
        "state_province": "CA",
        "postal_code": "95128",
        "country_code": "US",
        "address_residential_indicator": "yes"
      },
      "ship_from": {
        "company_name": "Example Corp.",
        "name": "John Doe",
        "phone": "111-111-1111",
        "address_line1": "4009 Marathon Blvd",
        "address_line2": "Suite 300",
        "city_locality": "Austin",
        "state_province": "TX",
        "postal_code": "78756",
        "country_code": "US",
        "address_residential_indicator": "no"
      },
      "packages": [
        {
          "weight": {
            "value": 1.0,
            "unit": "ounce"
          },
          "dimensions": {
            "length": 10,
            "height": 10,
            "width": 10,
            "unit": "inch"
          }
        }
        
      ]
    }
  }

  const packagesData =  {
    "shipment": {
      "service_code": "fedex_express_saver",
      "ship_to": {
        "name": "Amanda Miller",
        "phone": "555-555-5555",
        "address_line1": "525 S Winchester Blvd",
        "city_locality": "San Jose",
        "state_province": "CA",
        "postal_code": "95128",
        "country_code": "US",
        "address_residential_indicator": "yes"
      },
      "ship_from": {
        "company_name": "Example Corp.",
        "name": "John Doe",
        "phone": "111-111-1111",
        "address_line1": "4009 Marathon Blvd",
        "address_line2": "Suite 300",
        "city_locality": "Austin",
        "state_province": "TX",
        "postal_code": "78756",
        "country_code": "US",
        "address_residential_indicator": "no"
      },
      "insurance_provider": "carrier",
      "packages": [
        {
          "weight": {
            "value": 10.0,
            "unit": "ounce"
          },
          "insured_value": {
            "amount": 80.00,
            "currency": "USD"
          },
          "dimensions": {
            "length": 10,
            "height": 10,
            "width": 10,
            "unit": "inch"
          }
        },
        {
          "weight": {
            "value": 20.0,
            "unit": "ounce"
          },
          "insured_value": {
            "amount": 150.00,
            "currency": "USD"
          },
          "dimensions": {
            "length": 15,
            "height": 15,
            "width": 15,
            "unit": "inch"
          }
        },
        {
          "weight": {
            "value": 21.0,
            "unit": "ounce"
          },
          "insured_value": {
            "amount": 100.00,
            "currency": "USD"
          },
          "dimensions": {
            "length": 21,
            "height": 21,
            "width": 21,
            "unit": "inch"
          }
        }
      ]
    }
  }


  const postApiData ={
    rateShipping,
    // shipMent,
    labelsPostData,
    EstimateData,
    RateData,
    packagesData,
  }
  export default postApiData