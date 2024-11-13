import React from "react";
import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import { LogoMain, SearchIcon, ShoppingBagIcon } from "../../../assets/index";

export const Header = () => {
  return (
    <MainHeaderContainer>
      <SecondBlockContainer>
        <StyledNavLink to="/home">Home</StyledNavLink>
        <StyledNavLink to="/about">About</StyledNavLink>
        <StyledNavLink to="/menu">Menu</StyledNavLink>
        <StyledNavLink to="/reservation">Reservation</StyledNavLink>
      </SecondBlockContainer>
      <Link to="/">
        <img src={LogoMain} alt="Logo" />{" "}
      </Link>
      <SecondBlockContainer>
        <StyledNavLink to="/pages">Pages</StyledNavLink>
        <StyledNavLink to="/shop">Shop</StyledNavLink>
        <StyledNavLink to="/contact">Contact</StyledNavLink>
        <img src={SearchIcon} alt="Search Icon" />{" "}
        <img src={ShoppingBagIcon} alt="Shopping Bag Icon" />{" "}
      </SecondBlockContainer>
    </MainHeaderContainer>
  );
};

const MainHeaderContainer = styled.div`
  width: 100%;
  height: 125px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: black;
`;

const StyledNavLink = styled(NavLink)`
  font-family: Inter;
  font-size: 18px;
  font-weight: 400;
  line-height: 21.78px;
  text-align: left;
  color: aliceblue;
  text-decoration: none;
  transition: color 0.2s ease;

  &.active {
    color: #c99e71;
  }
`;

const SecondBlockContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 19%;
  cursor: pointer;
`;
