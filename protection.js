const password = 'enterMe';

document.querySelector('.v-btn').addEventListener('click',()=>{
  
  const text = document.querySelector('.input-box').value;
  const Password = retrunP();
  if(text === Password)
  {
    document.querySelector('.e-message').innerHTML = 'good hai';
    window.location.assign('wish.html');
  }
  else
  {
    document.querySelector('.input-box').value = '';
    document.querySelector('.e-message').innerHTML = 'nah beta nah*';
  }
});

function retrunP()
{
  const x = 'letmesee';
  return x;
}