/**
 * * Using react-context to transfer information through-out the React DOM
 */
import React, { Component } from "react";
import { storeProducts, detailProduct } from "./ProductDetails";

const ProductContext = React.createContext();
// * Including 2 components Provider and Consumer

class ProductProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      detailProduct: detailProduct,
      myCart: [],
      popUpIsOpen: false,
      popUpProduct: detailProduct,
      myCartSubTotal: 0,
      myCartTax: 0,
      myCartTotal: 0
    };
  }
  /**
   * * Call the API to display products on screen
   * * in DidMount life-cycle
   */
  componentDidMount() {
    this.setProduct();
  }
  /**
   * ! Using ES6 arrow function in order not to use bind(this) in constructor :)
   */

  /**
   * * Make sure that the data in database and on-show is diffrent
   * * by cloning the data as an API
   */
  setProduct = () => {
    let tempProducts = [];
    storeProducts.forEach(eachProduct => {
      const singleProduct = { ...eachProduct };
      tempProducts = [...tempProducts, singleProduct];
    });
    this.setState({
      products: tempProducts
    });
  };
  /**
   * * Get the product which fit the given id
   * @param {product.id} curID
   */
  getProduct = curID => {
    const curProduct = this.state.products.find(item => item.id === curID);
    return curProduct;
  };
  /**
   * * Route the main page to the detail page base on the ID given
   */
  handleDetail = curId => {
    const product = this.getProduct(curId);
    this.setState({
      detailProduct: product
    });
  };
  /**
   * * Add the current item to our own cart to shopping
   */
  addToCart = curID => {
    /**
     * * tempProducts will clone the current product list
     * * and config data before sync with the current data
     */
    let tempProducts = [...this.state.products];
    const curIndex = tempProducts.indexOf(this.getProduct(curID));
    const curProduct = tempProducts[curIndex];
    curProduct.inCart = true;
    curProduct.count++;
    const curPrice = curProduct.price;
    curProduct.total = curPrice;
    this.setState(
      {
        products: tempProducts,
        myCart: [...this.state.myCart, curProduct]
      },
      () => this.addTotalPrice()
    ); // * Use call-back function to
  }; // * set totalPrice to the Cart
  /**
   * * Open a new pop up while adding the cart
   */
  openPopUp = curID => {
    const curProduct = this.getProduct(curID);
    this.setState({
      popUpProduct: curProduct,
      popUpIsOpen: true
    });
  };
  /**
   * * Close the existed pop up before other actions
   */
  closePopUp = () => {
    this.setState({
      popUpIsOpen: false
    });
  };

  myCartIncrement = curID => {
    let tempCart = [...this.state.myCart];
    const selectedProduct = tempCart.find(item => item.id === curID);
    selectedProduct.count++;
    selectedProduct.total = selectedProduct.price * selectedProduct.count;
    this.setState(
      {
        myCart: [...tempCart]
      },
      () => this.addTotalPrice()
    );
  };

  myCartDecrement = curID => {
    console.log(`Hello from myCartDecrement ${curID}`);
  };

  myCartRemoveItem = curID => {
    let tempProducts = [...this.state.products];
    let tempCart = [...this.state.myCart];
    tempCart = tempCart.filter(item => item.id !== curID);
    const index = tempProducts.indexOf(this.getProduct(curID));
    let removedProduct = tempProducts[index];
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;
    this.setState(
      {
        myCart: [...tempCart],
        product: [...tempProducts]
      },
      () => this.addTotalPrice()
    );
  };

  myCartClearAll = () => {
    this.setState(
      {
        myCart: []
      },
      () => {
        this.setProduct(); // * Set the state to default
        this.addTotalPrice(); // * to refresh all the data
      }
    );
  };

  addTotalPrice = () => {
    let subTotal = 0;
    this.state.myCart.map(item => (subTotal += item.total)); // * Item here is data stored in ProductDetail
    const tempTax = subTotal * 0.05; //! Tax is 0.05, too much ???
    const taxFee = parseFloat(tempTax.toFixed(2));
    const totalPrice = subTotal + taxFee;
    this.setState({
      myCartSubTotal: subTotal,
      myCartTotal: totalPrice,
      myCartTax: taxFee
    });
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          /**
           * * Passing state and functions to value in order
           * * to using these from every where in the DOM
           */
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          openPopUp: this.openPopUp,
          closePopUp: this.closePopUp,
          myCartIncrement: this.myCartIncrement,
          myCartDecrement: this.myCartDecrement,
          myCartRemoveItem: this.myCartRemoveItem,
          myCartClearAll: this.myCartClearAll
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
