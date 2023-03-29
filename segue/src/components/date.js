import React from "react";


const date = require('date-and-time');

const now = new Date();
const today = date.format(now, 'DD/MM/YYYY');

function DateModule () {
    return (<h2>{today}</h2>)
}

export default DateModule;