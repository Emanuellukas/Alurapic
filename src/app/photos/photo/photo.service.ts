import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

const URL = 'http://localhost:8000/api/';

@Injectable({providedIn: 'root'}) //Dizendo que PhotoService é injetável nos components e dizendo que os dados criados estarão na raíz
export class PhotoService {
    constructor(private http: HttpClient){//Ao tornar http privado, ele automaticamente se torna uma propriedade acessível em toda a classe
    }

    listFromUser(userName: string){
        return this.http.get<any[]>(URL + '/' + userName + '/photos');
    }

    getVeiculos(){
        return this.http.get<Object[]>(URL + 'veiculo/');
    }
}