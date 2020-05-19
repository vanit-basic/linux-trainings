let getElem = (idd) => document.getElementById(idd).value.trim();
let answer = (elem) => document.getElementById("answer").innerHTML = `Won ${elem}`;
let test = (a,b,c) => {
console.log("test");
    if(a == b && a == c )
    {
        console.log(a);
    answer(a);
    
}
}
let submitHandler = (event) => {
    event.preventDefault();
    
    test(getElem("r1d1"),getElem("r1d2"),getElem("r1d3"));
    test(getElem("r2d1"),getElem("r2d2"),getElem("r2d3"));
    test(getElem("r3d1"),getElem("r3d2"),getElem("r3d3"));
    test(getElem("r1d1"),getElem("r2d1"),getElem("r3d1"));
    test(getElem("r1d2"),getElem("r2d2"),getElem("r3d2"));
    test(getElem("r1d3"),getElem("r2d3"),getElem("r3d3"));
    test(getElem("r1d1"),getElem("r2d2"),getElem("r3d3"));
    test(getElem("r1d3"),getElem("r2d2"),getElem("r3d1"));
	if(document.getElementById("answer").innerHTML == ''){
		return document.getElementById("answer").innerHTML = "Draw!";}
}
