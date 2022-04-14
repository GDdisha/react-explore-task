import React, { useState } from "react";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Cart from "./Cart.js";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: 0,
    top: 0,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
    background: 0,
  },
}));

function CustomizedBadges({ count, cartItems }) {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      <IconButton
        aria-label="cart"
        onClick={() => {
          setOpenModal(true);
        }}
      >
        <StyledBadge badgeContent={count} color="secondary">
          <ShoppingCartIcon style={{ color: "#fff" }} />
        </StyledBadge>
      </IconButton>
      {openModal && (
        <Cart closeCart={() => setOpenModal(false)} cartItems={cartItems} />
      )}
    </div>
  );
}
export default CustomizedBadges;
