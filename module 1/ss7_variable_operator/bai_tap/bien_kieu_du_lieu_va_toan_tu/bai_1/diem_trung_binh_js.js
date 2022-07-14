let ip = prompt("insert physic mark")
let ic = prompt("insert chemistry mark")
let ib = prompt("insert biology mark")

let p = parseInt(ip)
let c = parseInt(ic)
let b = parseInt(ib)

let a = (p+c+b)/3

document.write("The average mark is " + a)