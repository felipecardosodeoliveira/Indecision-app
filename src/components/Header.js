import React from 'react';

const Header = ({ title, subtitle }) => (
    <header>
        <h1>{title}</h1>
        {subtitle && <h2>{subtitle}</h2>}
    </header>
)

Header.defaultProps = {
    title: 'Indecision'
};


export default Header;