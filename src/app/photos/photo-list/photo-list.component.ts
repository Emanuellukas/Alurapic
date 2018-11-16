import { Component, OnInit } from '@angular/core';

//Meus imports
import { PhotoService } from '../photo/photo.service';
import { Photo } from '../photo/photo';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {
  photos: Photo[] = [];
  filter: string = 'teste';

  constructor(private photoService: PhotoService, private activatedRoute: ActivatedRoute){}//Deixar constructor apenas para injeção de dependências
  
  ngOnInit(): void{//Usar ngOnInit pra fazer todas as pré-configurações da classe, como o Constructor faria
    const userName = this.activatedRoute.snapshot.params.userName;
    this.photoService.getVeiculos().subscribe(data => {//é o mesmo que .then(function(){}) do AngularJs
      console.log(data);
      //this.photos = photos;
    });
  }

}
