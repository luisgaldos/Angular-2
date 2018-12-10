export class Idioma {

  private _id: number;
  public get id(): number {
    return this._id;
  }
  public set id(value: number) {
    this._id = value;
  }

  private _nombre: string;
  public get nombre(): string {
    return this._nombre;
  }
  public set nombre(value: string) {
    this._nombre = value;
  }

  private _codigo: string;
  public get codigo(): string {
    return this._codigo;
  }
  public set codigo(value: string) {
    this._codigo = value;
  }
}
