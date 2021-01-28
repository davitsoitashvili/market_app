import { getProductsOrders } from "../store/actions/productsOrderActions";

const BASE_URL = "http://localhost:1337";

export const getProductsOrderAsync = () => {
  return (dispatch) => {

    return fetch(`${BASE_URL}/products-orders/`)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error();
        }
      })
      .then((data) => {
        dispatch(getProductsOrders(data));
      })
      .catch((error) => {
        alert("There is some fetch error, try again!");
      });
  };
};