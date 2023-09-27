function myFunction()
{
    var x = document.getElementsByClassName('menu')[0];
    if (x.style.display === "none") 
    {
        x.style.display = "block";
      } 
      else 
      {
        x.style.display = "none";
      }

}


const scrollBtn = document.querySelector('.scroll-top');

window.addEventListener('scroll', function()
{
  if(document.body.scrollTop>100 || document.documentElement.scrollTop > 100)
  {
    scrollBtn.style.display = "block";
  }
  else
  {
    scrollBtn.style.display = "none";
  }
})



scrollBtn.addEventListener('click', ()=>
{
  document.documentElement.scrollTop = 0;
}
)