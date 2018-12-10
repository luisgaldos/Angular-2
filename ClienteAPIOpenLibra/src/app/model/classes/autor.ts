export class Autor {

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

  private _apellido1: string;
  public get apellido1(): string {
    return this._apellido1;
  }
  public set apellido1(value: string) {
    this._apellido1 = value;
  }

  private _apellido2: string;
  public get apellido2(): string {
    return this._apellido2;
  }
  public set apellido2(value: string) {
    this._apellido2 = value;
  }

}
