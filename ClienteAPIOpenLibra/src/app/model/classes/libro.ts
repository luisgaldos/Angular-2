import { Idioma } from './idioma';
import { Autor } from './autor';
import { Editorial } from './editorial';
export class Libro {

  private _id: number;
  public get id(): number {
    return this._id;
  }
  public set id(value: number) {
    this._id = value;
  }

  private _titulo: string;
  public get titulo(): string {
    return this._titulo;
  }
  public set titulo(value: string) {
    this._titulo = value;
  }

  private _isbn: string;
  public get isbn(): string {
    return this._isbn;
  }
  public set isbn(value: string) {
    this._isbn = value;
  }

  private _sinopsis: string;
  public get sinopsis(): string {
    return this._sinopsis;
  }
  public set sinopsis(value: string) {
    this._sinopsis = value;
  }

  private _numPaginas: number;
  public get numPaginas(): number {
    return this._numPaginas;
  }
  public set numPaginas(value: number) {
    this._numPaginas = value;
  }

  private _img: string;
  public get img(): string {
    return this._img;
  }
  public set img(value: string) {
    this._img = value;
  }

  private _autor: Autor;
  public get autor(): Autor {
    return this._autor;
  }
  public set autor(value: Autor) {
    this._autor = value;
  }

  private _editorial: Editorial;
  public get editorial(): Editorial {
    return this._editorial;
  }
  public set editorial(value: Editorial) {
    this._editorial = value;
  }

  private _idioma: Idioma;
  public get idioma(): Idioma {
    return this._idioma;
  }
  public set idioma(value: Idioma) {
    this._idioma = value;
  }

  
}
