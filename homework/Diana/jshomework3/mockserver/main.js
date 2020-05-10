let apiCall = async (api) => {
    const apiRoot = 'https://59a2300d-6624-4b66-a4cf-9d3b9d0dc305.mock.pstmn.io';
    const request = `${apiRoot}${api}`;
    console.log(request);
    let response = await fetch(request);
    let json = await response.json();
    return json;
  }

  let allCars = apiCall('/cars');
  console.log(allCars);
  let blackCars = apiCall('/cars?color=black');
  let vin = apiCall('/cars?vin=036')
  console.log(blackCars);
  console.log(vin);
 //console.log(cars);