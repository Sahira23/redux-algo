import React, { PureComponent } from "react";
import "../styles.css";
import { removeGoodFromCart } from "../redux/actions";
import { connect } from "react-redux";

class CartItem extends PureComponent {
  render() {
    const { title, price, id, removeGoodFromCart } = this.props;
    return (
      <div className="cart-item">
        <p className="cart-item__title">{title}</p>
        <p className="cart-item__price">{price}.00$</p>
        <button
          className="cart-item__remove"
          onClick={() => removeGoodFromCart(id)}
        >
          X
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  removeGoodFromCart: (id) => {
    dispatch(removeGoodFromCart(id));
  },
});

const mapStateToProps = (state) => ({
  goodId: state.goodId,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);
