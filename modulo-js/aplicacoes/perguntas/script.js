const elementos = document.querySelectorAll('[type=radio]');

for (let i = 0; elementos.length; i++) {
    elementos[i].addEventListener('change', e => {
        const marcado = e.target;
        const parentElement = e.target.parentNode;
        const correta = parentElement.parentNode.querySelector('[value=correta]');

        if (marcado.value == 'correta') {
            parentElement.style.backgroundColor = 'green';

        } else if (marcado.value == 'incorreta') {
            parentElement.style.backgroundColor = 'red';

            correta.parentNode.style.backgroundColor = 'green';
        }

        const radios = parentElement.parentNode.querySelectorAll('[type=radio]');
        for (let n = 0; n < radios.length; n++) {
            radios[n].disabled = true;
            if (radios[n] != correta && radios[n] != marcado) {
                radios[n].style.backgroundColor = '#ccc';
            }
        } 
    });
}