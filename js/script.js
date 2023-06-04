// Copyright (c) 2023 Dominic M. All rights reserved
//
// Created by: Dominic M.
// Created on: March 2023
// This file contains the JS functions for index.html
'use strict'
/**
 * This function calculates area and perimeter of rectangle.
 */

function myInfo() {
  if (localStorage.pay) {
    document.getElementById('pay').value = localStorage.pay
  }
  if (localStorage.hours) {
    document.getElementById('hours').value = localStorage.hours
  }
  if (localStorage.pay && localStorage.hours) {
    myButtonClicked()
  }
}

function myButtonClicked () {
  // input
  const hours = parseFloat(document.getElementById('hours').value)
  const payday = parseFloat(document.getElementById('pay').value)

  localStorage.pay = payday
  localStorage.hours = hours

  // process
  const TAX_RATE = 0.18
  const pay_no_tax = hours * payday
  const tax = pay_no_tax * TAX_RATE
  const you_get = pay_no_tax - tax

  // output
  document.getElementById('your-pay').innerHTML = 'Your pay will be: $' + you_get.toFixed(2)
  document.getElementById('their-pay').innerHTML = 'The government will take: $' + tax.toFixed(2)
}
