import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RickService } from 'src/app/core/services/rick.service';
import { Character } from 'src/app/interfaces/ICharacter';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {

  public character: any = {};


  constructor(private activatedRoute: ActivatedRoute,
    private rickService: RickService) {

    this.activatedRoute.params.subscribe(params => {
      console.log(params)
      this.rickService.getCharacterById(params['id']).subscribe((detail) => {
        this.character = detail;

     }

      );
      console.log(this.character)
    })
  }

 ngOnInit() {

}
}


