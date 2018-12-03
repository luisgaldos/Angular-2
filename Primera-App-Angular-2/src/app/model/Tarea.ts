export class Tarea {

    private _id: number;
    
    private _titulo: string;
    
    private _terminado: boolean;

    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
    public get titulo(): string {
        return this._titulo;
    }
    public set titulo(value: string) {
        this._titulo = value;
    }

    public get terminado(): boolean {
        return this._terminado;
    }
    public set terminado(value: boolean) {
        this._terminado = value;
    }

    constructor() {
        this._id = -1;
        this._titulo = "Todavía no lo sé";
        this._terminado = false;
    }
}
