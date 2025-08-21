const linkMarcado = document.querySelector('#mark');
const MsgNoLink = document.querySelector('#msg_alert');


function alerta() {
    MsgNoLink.style.display = 'block';
    setTimeout(() => {
        MsgNoLink.style.display = 'none';
    }, 2000)
}

const msgGov = function () {
    const msgGov = document.querySelector("#gov");
    let PararTempo;
    const btnGov = document.getElementById("gov").addEventListener("click", () => {
        navigator.clipboard.writeText(msgGov.textContent);
        Messagem();
    });

    function Messagem() {
        function MessagemCopiadaOn() {
            const time = setTimeout(() => {
                MsgNoLink.style.display = "block"
                MsgNoLink.innerHTML = "Mensagem Copiada com sucesso!"
            }, 100);
        }
        function MessagemCopiadaOff() {
            const timeOff = setTimeout(() => {
                MsgNoLink.style.display = "none"
            }, 3000);
        }
        MessagemCopiadaOn();
        MessagemCopiadaOff();
    }
}

linkMarcado.addEventListener('click', alerta);

//Função sendo chamada para ser executada.
msgGov();