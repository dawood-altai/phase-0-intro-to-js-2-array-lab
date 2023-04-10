const cats =["Milo", "Otis", "Garfield"]


const x= beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  });
  function destructivelyAppendCat(name) 
  {
    cats.push(name);
  }
  
  console.log(cats)


function destructivelyPrependCat(name)
{
  cats.unshift(name);
  return cats;
}

destructivelyPrependCat("Bob");
console.log(cats);

function destructivelyRemoveLastCat(name)
{
    cats.pop(name)
    return cats
}
destructivelyRemoveLastCat("Garfield")

function destructivelyRemoveFirstCat(name)
{
    cats.shift(name)
    return cats
}
destructivelyRemoveFirstCat("Milo")


function appendCat(name) 
{
  return cats.concat(name);
}

 appendCat("Bob");


function prependCat(name)
 {
  return [name, ...cats];
 }
 prependCat("Bob");

 function removeLastCat()
  {
    return cats.slice(0, -1);
  }
  
  removeLastCat();
 
 function removeFirstCat(name)
 {
    return cats.slice(0,2)
 } 
 removeFirstCat()

 
function removeFirstCat()
 {
    return cats.slice(1);
 }
  
  removeFirstCat();