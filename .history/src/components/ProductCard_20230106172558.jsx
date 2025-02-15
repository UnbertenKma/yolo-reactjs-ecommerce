import React from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";

import { set } from "../redux/product-modal/productModalSlice";

import Button from "./Button";

import numberWithCommas from "../utils/numberWithCommas";

const ProductCard = (props) => {
  const dispatch = useDispatch();

  return (
    <div className="product-card">
      <div>hello</div>


      {/* {/* <Link to={`/catalog/${props.slug}`}>
        <div className="product-card__image">
                    <img src={props.img01} alt="" />
                    <img src={props.img02} alt="" />
                </div>
        <div className="product-card__price">
          <h1 className="product-card__name">{props.name}</h1>
          {numberWithCommas(props.price)}đ
          <span className="product-card__price__old">
            <span>KM: 50p nội mạng </span>
          </span>
          <span className="product-card__price__title">Viettel</span>
        </div>
      </Link> */}
      {/* <div className="product-card__btn"> */}
        <Button
          size="sm"
          icon="bx bx-cart"
          animate={true}
          onClick={() => dispatch(set(props.slug))}
        >
          chọn mua
        </Button>
      </div> */}
    </div>
  );
};

ProductCard.propTypes = {
  img01: PropTypes.string.isRequired,
  img02: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  slug: PropTypes.string.isRequired,
};

export default ProductCard;
