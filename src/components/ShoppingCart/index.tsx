import { faCartShopping, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box } from "@mui/material";

const ShoppingCartIcon = ({ onClick, amount, displayAmount }: any) => {
  return (
    <Box className="cart-shopping_header" onClick={onClick}>
      <FontAwesomeIcon style={{marginLeft: "20px"}} id="cart-shopping-iconn" icon={faCartShopping}></FontAwesomeIcon>
      <div className="cart-amount" style={{ display: displayAmount }}>
        <p>{amount}</p>
      </div>
    </Box>
  );
};
export default ShoppingCartIcon;
