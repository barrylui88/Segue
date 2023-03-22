import React from "react";
//import './date.css';

const dayjs = require('dayjs')
//import dayjs from 'dayjs' // ES 2015
const date = dayjs().get('date')
const month = dayjs().get('month')
const year = dayjs().get('year');

function Date () {
    return (<h1>{date}/{month}/{year}</h1>)
}

export default Date;