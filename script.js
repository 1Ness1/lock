document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(`[data-form]`);
  const name = form.querySelector(`[data-name]`);
  const phone = form.querySelector(`[data-phone]`);
  
  const TOKEN = `6339443961:AAFBh-XLXr_GIwLvwa2ob3UIkk28z4xSmvY`;
  const CHAT_ID = `-4170847942`;

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const request = new XMLHttpRequest();
    const message = 
    `Name: *${name.value}*
    \
     Number: *${phone.value}*`
    const URL = `https://api.telegram.org/bot${TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${message}&parse_mode=markdown`;

    console.log(URL)
    request.open("GET", URL, true);
    request.send();
  })
})