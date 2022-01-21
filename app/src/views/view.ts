import { logarTempoDeExecucao } from "../decorators/logar-tempo-de-execucao.js";

export abstract class View<T> {
  // -> private   <- apenas as classes tem acesso aos elementos!
  // -> protected <- apenas as filhas da classe podem acessar!
  protected elemento: HTMLElement;
  private escapar = false;

  constructor(selector: string, escapar?: boolean) {
    const elemento = document.querySelector(selector);

    if (elemento) {
      this.elemento = elemento as HTMLElement;
    } else {
      throw Error(`Seletor ${selector} não existe no DOM. Verifique!`);
    }
    
    if (escapar) {
      this.escapar = escapar;
    }
  }

  @logarTempoDeExecucao()
  public update(model: T): void {
    let template = this.template(model);
    
    if (this.escapar) {
      template = template
        .replace(/<script>[\s\S]*?<\/script>/, '');
    }

    this.elemento.innerHTML = template;
  }

  protected abstract template(model: T): string;
}
