
export class Fruta {

    private _id: number;
    private _nombre: string;
    private _precio: number;
    private _calorias: number;
    private _colores: string[];
    private _oferta: boolean;
    private _descuento: number;
    private _imagen: string;

    private _cantidad: number;

    constructor() {
        this._nombre = 'Melocotón';
        this._imagen = "https://banner2.kisspng.com/20180202/xiw/kisspng-cider-apricot-peach-flavor-fruit-apricot-png-transparent-image-5a74831ec1eeb9.5222270315175851827944.jpg";
        this._precio = 1.20;
        this._calorias = 100;
        this._colores = ['#FFFF00', '#FF0000'];
        this._oferta = true;
        this._descuento = 10;
        this._cantidad = 0;
    }

    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
    
    public get nombre(): string {
        return this._nombre;
    }
    public set nombre(value: string) {
        this._nombre = value;
    }

    public get precio(): number {
        return this._precio;
    }
    public set precio(value: number) {
        this._precio = value;
    }

    public get calorias(): number {
        return this._calorias;
    }
    public set calorias(value: number) {
        this._calorias = value;
    }

    public get colores(): string[] {
        return this._colores;
    }
    public set colores(value: string[]) {
        this._colores = value;
    }

    public get oferta(): boolean {
        return this._oferta;
    }
    public set oferta(value: boolean) {
        this._oferta = value;
    }

    public get descuento(): number {
        return this._descuento;
    }
    public set descuento(value: number) {
        this._descuento = value;
    }

    public get imagen(): string {
        return this._imagen;
    }
    public set imagen(value: string) {
        this._imagen = value;
    }

    public get cantidad(): number {
        return this._cantidad;
    }
    public set cantidad(value: number) {
        this._cantidad = value;
    }
   

}
