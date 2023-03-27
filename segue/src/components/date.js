import React from "react";


const dayjs=require('dayjs');

function Date() {
    return(<div><h1>{dayjs().format('DD/MM/YYYY')}</h1></div>);
}

export default Date;