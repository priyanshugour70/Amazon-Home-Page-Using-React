import React from "react";
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

function Header() {
    return (
        <div className="header">
            <img
                className="header__logo"
                src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" // ./assets/amazon-logo.png
                alt="amazon-logo"
            />
            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon" />
            </div>
            <div className="header__nav">
                <div className="header__option">
                    <span className="header_optionLineOne">Hello Guest</span>
                    <span className="header_optionLineTwo">Sign In</span>
                </div>
                <div className="header__option">
                    <span className="header_optionLineOne">Returns</span>
                    <span className="header_optionLineTwo">& Orders</span>
                </div>
                <div className="header__option">
                    <span className="header_optionLineOne">Your</span>
                    <span className="header_optionLineTwo">Prime</span>
                </div>
                <div className="header__optionBasket">
                    <ShoppingBasketIcon />
                    <span className="header__optionLineTwo header__basketCount">0</span>
                </div>
            </div>
        </div>
    );
}

export default Header;
