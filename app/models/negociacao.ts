export class Negociacao {
  constructor(
    private _data: Date,
    public readonly quantidade: number,
    public readonly valor: number
  ) {}

  get data(): Date {
    // programação defensiva
    const data = new Date(this._data.getTime());
    return data;
  }

  get volume(): number {
    return this.quantidade * this.valor;
  }

  public static criaDe(dataStr: string, quantidadeStr: string, valorStr: string): Negociacao {
    const data = new Date(dataStr.replace('-', ','));
    const quantidade = parseInt(quantidadeStr);
    const valor = parseFloat(valorStr);

    return new Negociacao(data, quantidade, valor);
  }
}
