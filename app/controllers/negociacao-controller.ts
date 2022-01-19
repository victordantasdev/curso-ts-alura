import { DiasDaSemana } from '../enums/dias-da-semana.js';
import { Negociacao } from '../models/negociacao.js';
import { Negociacoes } from '../models/negociacoes.js';
import { MensagemView } from '../views/mensagem-view.js';
import { NegociacoesView } from '../views/negociacoes-view.js';

export class NegociacaoController {
  private inputData: HTMLInputElement;
  private inputQuantidade: HTMLInputElement;
  private inputValor: HTMLInputElement;
  private negociacoes = new Negociacoes();
  private negociacoesView = new NegociacoesView(".negociacoes-view", true);
  private mensagemView = new MensagemView(".mensagem-view");

  constructor() {
    this.inputData = document.querySelector('#data');
    this.inputQuantidade = document.querySelector('#quantidade');
    this.inputValor = document.querySelector('#valor');
    this.negociacoesView.update(this.negociacoes);
  }

  public adiciona(): void {
    const negociacao = Negociacao.criaDe(
      this.inputData.value,
      this.inputQuantidade.value,
      this.inputValor.value
    )

    if (!this.ehDiaUtil(negociacao.data)) {
      return this.mensagemView.update('Apenas negociações em dias úteis são aceitas!');
    }

    this.negociacoes.adiciona(negociacao);
    this.limpaForm();
    this.atualizaView();

  }

  private ehDiaUtil(data: Date): boolean {
    return data.getDay() > DiasDaSemana.DOMINGO 
        && data.getDay() < DiasDaSemana.SABADO;
  }

  private limpaForm(): void {
    this.inputData.value = '';
    this.inputQuantidade.value = '';
    this.inputValor.value = '';

    this.inputData.focus();
  }

  private atualizaView():void {
    this.negociacoesView.update(this.negociacoes);
    this.mensagemView.update('Negociação adicionada com sucesso!');
  }
}

