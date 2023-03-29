import React from "react";
import styled from "styled-components";

import Cliente from "./Cliente";

function Body(){
    return (
        <>
        <Boton>+</Boton>
        <Cliente />
        </>
    )
}

export default Body;

const Boton = styled.button`
    margin-top:20px;
    background-color:green;
`