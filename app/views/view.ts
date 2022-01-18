export abstract class View<T> {
  // -> private   <- apenas as classes tem acesso aos elementos!
  // -> protected <- apenas as filhas da classe podem acessar!
  protected elemento: HTMLElement;

  constructor(selector: string) {
    this.elemento = document.querySelector(selector);
  }

  update(model: T): void {
    const template = this.template(model);
    this.elemento.innerHTML = template
  }

  abstract template(model: T): string;
}
