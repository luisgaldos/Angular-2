export class Categoria {

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

  private _descripcion: string;
  public get descripcion(): string {
    return this._descripcion;
  }
  public set descripcion(value: string) {
    this._descripcion = value;
  }
}
