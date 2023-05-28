import { faCartShopping, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box } from "@mui/material";

const ShoppingCartIcon = ({ onClick, amount, displayAmount }: any) => {
  return (
    <Box className="cart-shopping_header" onClick={onClick}>
      <FontAwesomeIcon id="cart-shopping-iconn" icon={faCartShopping}></FontAwesomeIcon>
    </Box>
  );
};
export default ShoppingCartIcon;
