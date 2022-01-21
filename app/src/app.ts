import { NegociacaoController } from "./controllers/negociacao-controller.js";
import { NegociacoesView } from './views/negociacoes-view.js';

const controller = new NegociacaoController;
const form = document.querySelector('.form');

if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    controller.adiciona();
  });
} else {
  throw Error('Não foi possível iniciar a aplicação. Verifique se o form existe!'); 
}

// const negociacoesView = new NegociacoesView();
// const template = negociacoesView.template();
// console.log(template);
