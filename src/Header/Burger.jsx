import React, { useState } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'


const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 32;
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => open ? '#ccc' : '#333'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }

    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`

const StyledNav = styled.nav`
    margin: 0 auto;
    max-width: 1070px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    z-index: 31;
    ul {
        display: flex;
        flex-direction: row;
        margin-bottom: 0;
    }
    ul li {
        list-style: none;
        margin-left: 18px;
        padding: 15px;
    }
    ul li:first-child {
        margin-left: 0;
    }
    ul li:hover {
        background: #2c3e50;
    }
    li a {
        color: white;
        text-decoration: none;
        font-weight: 500;
        text-transform: uppercase;
    }
    @media (max-width: 768px) {
        background-color: #0D2538;
        position: fixed;
        transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
        top: 0;
        right: 0;
        height: 100vh;
        width: 200px;
        transition: transform 0.3s ease-in-out;
        justify-content: flex-start;
        padding-bottom: 30rem;
        ul {
            flex-direction: column;
        }
        ul li {
            margin-left: 0;
            padding-right: 100%;
        }
    }

`

const Burger = () => {

  const [open, setOpen] = useState(false)

  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <StyledNav open={open}>
        <ul>
          <li><NavLink to='/about' onClick={() => setOpen(!open)}>Обо мне</NavLink></li>
          <li><NavLink to='/works' onClick={() => setOpen(!open)}>Портфолио</NavLink></li>
          <li><NavLink to='/contacts' onClick={() => setOpen(!open)}>Контакты</NavLink></li>
        </ul>
      </StyledNav>
    </>
  )
}

export default Burger