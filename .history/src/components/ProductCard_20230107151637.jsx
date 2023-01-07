import PropTypes from "prop-types";
import React from "react";

import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";



import numberWithCommas from "../utils/numberWithCommas";

const ProductCard = (props) => {
  // const dispatch = useDispatch();

  return (
    <div className="product-card">
      {/* <div>hello</div> */}

      <Link to={`/catalog/${props.slug}`}>
        <div className="product-card__image">
          {/* <img src={props.img01} alt="" /> */}
          {/* <img src={props.img02} alt="" /> */}
        </div>

        <div className="product-card__price">
          <h1 className="product-card__name">{props.name}</h1>
          <h1 className="product-card__name_total">{numberWithCommas(props.price)}đ</h1>
          
          <span className="product-card__price__old">
            Sim lộc phát
          </span>
          <span className="product-card__price__title">viettel</span>
        </div>
      </Link>
      {/* <div className="product-card__btn">
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
  // img01: PropTypes.string.isRequired,
  // img02: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  slug: PropTypes.string.isRequired,
};

export default ProductCard;
