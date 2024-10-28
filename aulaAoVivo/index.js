// const buttons = document.querySelectorAll('.btn');
// const texts = document.querySelectorAll('.text');


// buttons.forEach((button)=>{
//     button.addEventListener('click', ()=>{
//         buttons.forEach((button)=>{ button.classList.remove('active')})
        
//         texts.forEach((text)=>{ 
//             if(button.value === 1){
//                 if(text.value === 1) text.style.display = 'block';
//                 else text.style.display = 'none';
//             } else if(button.value === 2){
//                 if(text.value === 2) text.style.display = 'block';
//                 else text.style.display = 'none';
//             } else if(button.value === 3){
//                 if(text.value === 3) text.style.display = 'block';
//                 else text.style.display = 'none';
//             }
//         })
//         button.classList.add('active')
//     })
// });
const buttons = document.querySelectorAll('.btn');
    const texts = document.querySelectorAll('.text');

    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        // Remove a classe 'active' de todos os botões
        buttons.forEach((button) => { button.classList.remove('active') });

        // Verifica o valor do botão clicado
        const buttonValue = button.getAttribute('data-value');
        
        // Exibe o texto correspondente e esconde os outros
        texts.forEach((text) => {
          const textValue = text.getAttribute('data-value');
          if (textValue === buttonValue) {
            text.style.display = 'block';
          } else {
            text.style.display = 'none';
          }
        });

        // Adiciona a classe 'active' ao botão clicado
        button.classList.add('active');
      });
    });