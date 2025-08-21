//Selecionando os elementos
const horas = document.querySelector('#hr');
const minutos = document.querySelector('#min');
const segundos = document.querySelector('#sec');


const clock = function () {
    let dt = new Date();
    let hr = dt.getHours();
    let min = dt.getMinutes();

    // Formata para 2 dígitos
    hr = hr < 10 ? '0' + hr : hr;
    min = min < 10 ? '0' + min : min;

    horas.textContent = hr;
    minutos.textContent = min;
}

const data = function () {
    let dt = new Date();
    const month = [
        'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
        'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];

    let dataCalendario = document.querySelector('.data');
    let dateDay = dt.getDate(); // Dia do mês
    let dateMonth = dt.getMonth();
    let dateFull = dt.getFullYear();

    dataCalendario.innerHTML = `Dia ${dateDay} de ${month[dateMonth]} de ${dateFull}`;
}


//Funções sendo executadas...
clock();
data();



