// Created by: Dominic M.
// Created on: March 2023
//
// This program finds how much money you take home and how much the government gets.
package main

import "fmt"

func main() {
	var hour float64
	var pays float64
	var yourPay float64
	var youGet float64
	var taxes float64
	var taxRate float64 = 0.18

	// input
	fmt.Println("This program finds how much money you take home and how much the government gets.")
	fmt.Println()
	fmt.Print("How many hours do you work: ")
	fmt.Scanln(&hour)
	fmt.Println()
	fmt.Print("What is your pay: ")
	fmt.Scanln(&pays)

	// process
	yourPay = hour * pays
	taxes = yourPay * taxRate
	youGet = yourPay - taxes

	// output
	fmt.Println()
	youGetFormatted := fmt.Sprintf("%.2f", youGet)
	taxesFormatted := fmt.Sprintf("%.2f", taxes)
	fmt.Println("Your pay will be: $", youGetFormatted)
	fmt.Println("The government will get: $", taxesFormatted)

	fmt.Println("\nDone.")
}
