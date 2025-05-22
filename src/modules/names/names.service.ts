import { Injectable } from '@nestjs/common';

@Injectable()
export class NamesService {

    private _names: string[];

    constructor() {
        this._names = [];
    }

    createName(name: string){
        const nameExists = this._names.find((n) => n.toLocaleLowerCase().trim() === name.toLocaleLowerCase().trim());
        if(!nameExists){
            this._names.push(name);
            return true;
        }
        return false;
    }

    getNames(start: string){
        if(!start){ 
            return this._names;
        }
        return this._names.filter((name) => name.toLocaleLowerCase().trim().startsWith(start.toLocaleLowerCase().trim()));
    }

    updateName(name: string, newName: string){
        const indexNameExists = this._names.findIndex((n) => n.toLocaleLowerCase().trim() === name.toLocaleLowerCase().trim());
        const indexNewnNameExists = this._names.findIndex((n) => n.toLocaleLowerCase().trim() === newName.toLocaleLowerCase().trim());

        if (indexNameExists != -1 && indexNewnNameExists == -1) {
            this._names[indexNameExists] = newName;
            return true;
        }
        return false;
    }

    deleteName(name: string){
        const indexNameExists = this._names.findIndex((n) => n.toLocaleLowerCase().trim() === name.toLocaleLowerCase().trim());
        if (indexNameExists != -1) {
            this._names.splice(indexNameExists, 1);
            return true;
        }
        return false;
    }

    clearNames(){
        this._names = [];
        return true;
    }
}
