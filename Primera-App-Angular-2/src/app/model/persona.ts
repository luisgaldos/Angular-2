import { Genero } from './genero.enum';

export class Persona {
    
    private _nombre: string;
    private _apellidos: string[];
    private _sexo: Genero;
    private _email: string;
    private _edad: number;

    public get nombre(): string {
        return this._nombre;
    }
    public set nombre(value: string) {
        this._nombre = value;
    }
    
    public get apellidos(): string[] {
        return this._apellidos;
    }
    public set apellidos(value: string[]) {
        this._apellidos = value;
    }
    
    public get sexo(): Genero {
        return this._sexo;
    }
    public set sexo(value: Genero) {
        this._sexo = value;
    }
    
    public get email(): string {
        return this._email;
    }
    public set email(value: string) {
        this._email = value;
    }
   
    public get edad(): number {
        return this._edad;
    }
    public set edad(value: number) {
        this._edad = value;
    }

    constructor() {
        this._nombre = "Anónimo";
        this._apellidos = [];
        this._edad = 16;
        this._email = "";
        this._sexo = Genero.I;
    }
}
