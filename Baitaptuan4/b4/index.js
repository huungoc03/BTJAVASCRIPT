function Sum(){
   const a = document.getElementById('a').value
   const b = document.getElementById('b').value
   const sum = Number(a) + Number(b)
   document.getElementById('result').innerHTML = sum
}
function Sub(){
   const a = document.getElementById('a').value
   const b = document.getElementById('b').value
   const sub = Number(a) - Number(b)
   document.getElementById('result').innerHTML = sub
}
function Mul(){
   const a = document.getElementById('a').value
   const b = document.getElementById('b').value
   const mul = Number(a) * Number(b)
   document.getElementById('result').innerHTML = mul
}
function Div(){
   const a = document.getElementById('a').value
   const b = document.getElementById('b').value
   const div = Number(a) / Number(b)
   document.getElementById('result').innerHTML = div
}
document.getElementById('sum').onclick = Sum
document.getElementById('sub').onclick = Sub
document.getElementById('mul').onclick = Mul
document.getElementById('div').onclick = Div