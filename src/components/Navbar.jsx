import React, { useContext } from 'react';
import { NavLink } from 'react-router';
import { CartContext } from '../context/CartContext';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { styled } from '@mui/material/styles';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));



export const Navbar = () => {
    const { productLis} = useContext(CartContext);


    return (
        <>
            <nav className="navbar navbar-light bg-light" style={{
                position: 'fixed',
                top: 0,
                width: '100%',
                zIndex: 1000
            }}>
                <div>
                    <NavLink to="/" className="navbar-brand" style={{ marginRight: '20px' }} href="#">
                        <img src="../../assets/LogoTiendaB.png" width="40px" height="auto" className="d-inline-block align-top" alt="" />
                        Bra Store
                    </NavLink>
                    <NavLink to="/miscompras" className="navbar-brand" href="#">
                        Mis compras     
                    </NavLink>
                    <NavLink to="/contactanos" className="navbar-brand" href="#">
                        Contactanos
                    </NavLink>
                </div>
                <NavLink to="/carrito" className="navbar-brand">
                    <IconButton aria-label="cart">
                        <StyledBadge badgeContent={productLis.length} color="secondary">
                            <ShoppingCartIcon />
                        </StyledBadge>
                    </IconButton>
                </NavLink>
            </nav>
            <br />
            <br />
        </>
    )
}
