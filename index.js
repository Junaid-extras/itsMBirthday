let key = 'Dear, Maria';
let funKey1 = 'Dear, Bear';
let funKey2 = 'Dear, Stress Bhai';

let status = 1;
document.querySelector('.l2').addEventListener('click', ()=>{
  document.querySelector('.l2').innerHTML='';
  if(status === 1)
  {
    document.querySelector('.l2').innerHTML = funKey1;
    status = 2;
  }
  else if(status === 2)
  {
    document.querySelector('.l2').innerHTML = funKey2;
    status = 3;
  }
  else if(status === 3)
  {
    document.querySelector('.l2').innerHTML = key;
    status = 1;
  }
});