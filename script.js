let sentence = ''

function randomTime()
{
   return Math.round(Math.random()*7)
}
const print = async(item) =>
{
   let para = document.getElementById('para')
   sentence += item 
   sentence+='<br>'
   para.innerHTML = sentence

   return new Promise((resolve,reject)=>
   {
      setInterval(()=>{
         resolve()
      },1000*randomTime())
   })
}

setInterval(()=>
{
   let par = document.getElementById('para')
   par.innerHTML = par.innerHTML + '.'
   if(par.innerHTML.endsWith('....'))
   {
      par.innerHTML = par.innerHTML.slice(0,par.innerHTML.length-3)
   }
},700)

const additm = async() =>{
   await print('Initializing Hacking');
   await print('Reading your files')
   await print('Password files Detected')
   await print('Sending all passwords and personal files to server')
   await print('cleaning up')
   await print('Happy April Fool By Naman Bhawsar')
}

additm()