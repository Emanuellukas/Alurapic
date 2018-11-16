import { NgModule } from "@angular/core";

//Meus Imports
import { PhotoComponent } from "./photo/photo.component";
import { HttpClientModule } from "@angular/common/http";
import { PhotoListComponent } from './photo-list/photo-list.component';
import { CommonModule } from "@angular/common";
import { PhotoFormComponent } from './photo-form/photo-form.component';

@NgModule({
    declarations: [ 
        PhotoComponent,
         PhotoListComponent,
         PhotoFormComponent
    ],
    imports: [
        CommonModule, //Módulo que possui as diretivas específicas do Angular (*ngFor, *ngIf, etc)
        HttpClientModule
     ]
})

export class PhotosModule {

}