let car=[
  {'vin':'1HGCM82633A004352', 'mark':'bmw', year:'1997',color:'black',text:'vtari entarkvac e'},
  {'vin':'1HGCM82633A004352', 'mark':'mercedes', year:'2000',color:'green',text:'uni ansarq sharjich'},
  {'vin':'1HGCM82633A004352', 'mark':'bmw', year:'2006',color:'yellow',text:'anvadoxery merk en'},
  {'vin':'1HGCM82633A004352', 'mark':'bmw', year:'2009',color:'red',text:'jrhxexi entarkvac'},
  {'vin':'1HGCM82633A004352', 'mark':'toyota', year:'2011',color:'blue',text:'idealakan vichakum e'},
 ];

  function setcar(car) {
    let carparent=document.getElementById('carparent');
    for (let i = 0; i < car.length; i++) {
      let parentinnerhtml=
      "<div class='car'>"+
        "<div class='config'>"+car[i]['vin']+"</div>"+
        "<div class='config'>"+car[i]['mark']+"</div>"+
        "<div class='config'>"+car[i]['year']+"</div>"+
        "<div class='config'>"+car[i]['color']+"</div>"+
        "<div class='config'>"+car[i]['text']+"</div>"+
        "<div class='config'><input type='submit' value='change text' onclick='openmod("+i+")'></div>"+
      "</div>";
    carparent.innerHTML+=parentinnerhtml;    
    }    
  }
  setcar(car);
  function openmod(i){
    console.log(car[i]);
    let mod=document.getElementById('mod');
    mod.style.display='block';
    document.getElementById('butmod').onclick=function(){
      let[vin,mark,year,color,text]=fetchInputValue();
      car[i].vin=vin;
      car[i].mark=mark;
      car[i].year=year;
      car[i].color=color;
      car[i].text=text;
      let arr=fetchInputValue();
      console.log(car[i]);
      let rowArr=([...document.querySelectorAll(".car")][i].children);
      [...rowArr].forEach((element,index) => {
        if(index<arr.length) element.innerHTML=arr[index];
      });      
      mod.style.display='none';
    }
  }
function fetchInputValue() {
  let vin=document.getElementById('vin').value.trim();
  let mark=document.getElementById('mark').value.trim();
  let year=document.getElementById('year').value.trim();
  let color=document.getElementById('color').value.trim();
  let text=document.getElementById('story').value.trim();
  return [vin,mark,year,color,text];
}

let addCar=document.getElementById('addcar');
addCar.onclick=function () {
  let newob={};
  let vin1=document.getElementById('vin1').value.trim();
  let mark1=document.getElementById('mark1').value.trim();
  let year1=document.getElementById('year1').value.trim();
  let color1=document.getElementById('color1').value.trim();
  let text1=document.getElementById('story1').value.trim();
  if (vin1!='' && mark1!='' && year1!='' && color1!='' && text1!='') {
    newob.vin=vin1;
    newob.mark=mark1;
    newob.year=year1;
    newob.color=color1;
    newob.text=text1;
    car.push(newob);
    creatNewCar();
  }
}

function creatNewCar() {
  let endelement=car.length-1;
  let carparent=document.getElementById('carparent');
    let parentinnerhtml=
    "<div class='car'>"+
      "<div class='config'>"+car[car.length-1]['vin']+"</div>"+
      "<div class='config'>"+car[car.length-1]['mark']+"</div>"+
      "<div class='config'>"+car[car.length-1]['year']+"</div>"+
      "<div class='config'>"+car[car.length-1]['color']+"</div>"+
      "<div class='config'>"+car[car.length-1]['text']+"</div>"+
      "<div class='config'><input type='submit' value='change text' onclick='openmod("+endelement+")'></div>"+
    "</div>";
  carparent.innerHTML+=parentinnerhtml; 
}

function searchinCar(params) {
  let rezultdiv=document.getElementById('rezult');
  let searchinput=document.getElementById('search');
  let select=document.getElementById('config');
  let configforrezult=select.value;
  rezultdiv.innerHTML='';
  if (searchinput.value!='') {
    for (let i = 0; i < car.length; i++) {
      if (car[i][configforrezult].toLowerCase().includes(searchinput.value.toLowerCase())==true) {
        let rezult=
          "<div class='car'>"+
            "<div class='config'>"+car[i]['vin']+"</div>"+
            "<div class='config'>"+car[i]['mark']+"</div>"+
            "<div class='config'>"+car[i]['year']+"</div>"+
            "<div class='config'>"+car[i]['color']+"</div>"+
            "<div class='config'>"+car[i]['text']+"</div>"+
            "<div class='config'><input type='submit' value='change text' onclick='openmod("+i+")'></div>"+
          "</div>";
          rezultdiv.innerHTML+=rezult;
      } else continue;
    }
  }
}