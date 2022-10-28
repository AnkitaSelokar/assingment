import React from "react"
import Icon from '@mui/material/Icon';
import LanguageIcon from '@mui/icons-material/Language';

export default function Navbar() {
    return (
        <nav>
            <img src={require("../images/airbnb.png")} alt="" />
            <svg data-testid="LanguageIcon"></svg>

        </nav>
    )
}