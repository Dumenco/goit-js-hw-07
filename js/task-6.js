const input = document.querySelector('#validation-input');

input.addEventListener('change', () => {
    if (input.value.length === Number(input.getAttribute('data-length'))) {
        input.classList.add('valid');
        input.classList.remove('invalid');
        return
    };
      
        input.classList.add('invalid');
        input.classList.remove('valid');  
   
})