import React from "react";
import styled from "styled-components";


function Head(){

return (
    <Titulo>Cabecera</Titulo>
    )
}

export default Head;

const Titulo = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:2em;
    width:90vw;
    height:50px;
    background-color:gray;
`