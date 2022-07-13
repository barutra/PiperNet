const Btn = document.getElementById('btn')
const cartModal = document.querySelector('.message-null')
const cartModale = document.querySelector('.message-error')
const CloseMessage = document.getElementById('ClsMes')
const Close_Message = document.getElementById('ClsMess')

Btn.onclick=()=> {
  
    if (document.contact.log_name.value === 'Admin' && document.contact.pass_name.value === 'qazwsx') {
       location.href='PiperNet.html';//your web-site
       /* alert("Здравствуйте!"); */
      } else if ((document.contact.log_name.value && document.contact.pass_name.value) == "" || (document.contact.log_name.value && document.contact.pass_name.value) == null) {
        const cart = localStorage.getItem('message-null') ?
        JSON.parse(localStorage.getItem('message-null')) : []
        cartModal.style.display = 'flex'
      
      /*alert("Не все поля заполнены");*/
      } else {
        const cart = localStorage.getItem('message-error') ?
        JSON.parse(localStorage.getItem('message-error')) : []
        cartModale.style.display = 'flex'
        /*alert("Неверный логин или пароль");*/
      } 
}

CloseMessage.onclick=()=>{
  cartModal.style.display = ''
}

Close_Message.onclick=()=>{
  cartModale.style.display = ''
}
console.dir(Btn);

/*const cart = () => {
  const cartBtn = document.getElementById('message')
  const cartModal = document.querySelector('.message')
  const cartCloseBtn = cartModal.querySelector('.message-close')
  const cartTotal = cartModal.querySelector('.message-total > span')
  const cartSendBtn = cartModal.querySelector('.message-confirm')
  const goodsWrapper = document.querySelector('.goods')
  const cartWrapper = document.querySelector('.message-wrapper')

const openCart = () => {
  const cart = localStorage.getItem('message') ?
      JSON.parse(localStorage.getItem('message')) : []

  cartModal.style.display = 'flex'

  renderCart(cart)
}

const closeCart = () => {
  cartModal.style.display = ''
}

btn.addEventListener('click', openCart)
btn.addEventListener('click', closeCart)
}*/