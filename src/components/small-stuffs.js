import React from 'react';


const topIndex_sheet = {
    fontSize: ".5em",
    color: "rgba(255,255,255,.5)",
    textTransform: "uppercase",
    fontWeight: "100"
}

const BetaTitle = () => {
    return (
        <sup style={topIndex_sheet}>&nbsp;(&nbsp;beta&nbsp;)&nbsp;</sup>
    )
}
const AlphaTitle = () => {
    return (
        <sup style={topIndex_sheet}>&nbsp;(&nbsp;alpha&nbsp;)&nbsp;</sup>
    )
}
const PreReleaseTitle = () => {
    return (
        <sup style={topIndex_sheet}>&nbsp;(&nbsp;pre-release&nbsp;)&nbsp;</sup>
    )
}
const CloseTitle = () => {
    return (
        <sup style={topIndex_sheet}>&nbsp;(&nbsp;closed&nbsp;)&nbsp;</sup>
    )
}
export { BetaTitle, AlphaTitle, PreReleaseTitle, CloseTitle };
