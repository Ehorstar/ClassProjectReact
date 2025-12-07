import { ShoppingCartOutlined } from "@ant-design/icons";
import React, { useContext } from "react";
import BasketContext from "../contexts/BasketContext";
import { useNavigate } from "react-router";
import "./Button.css";

const BasketButton = () => {
  const { basketCount } = useContext(BasketContext);
  const navigate = useNavigate();
  return (
    <div>
      <button className="btn-icon" onClick={() => navigate("/basket")}>
        <ShoppingCartOutlined />-{basketCount}
      </button>
    </div>
  );
};

export default BasketButton;
