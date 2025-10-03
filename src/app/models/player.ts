export interface IPlayer {
    name: string;
    score: number;
    turn: boolean;
}

export class Player implements IPlayer {
    private _name: string;
    private _score: number;
    private _turn: boolean;

    constructor(name: string, score: number = 0, turn: boolean = false) {
        this._name = name.trim();
        this._score = score;
        this._turn = turn
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value.trim();
    }

    get score(): number {
        return this._score;
    }

    set score(value: number) {
        this._score = value;
    }

    
    get turn(): boolean {
        return this._turn;
    }

    set turn(value: boolean) {
        this._turn = value;
    }
}