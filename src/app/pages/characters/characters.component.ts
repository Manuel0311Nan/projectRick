import { Component, OnInit } from '@angular/core';
import { RickService } from 'src/app/core/services/rick.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  public rickList: any;
  public charactersArray: any[] = [];
  public currentPage = 1;
  public totalPages = 42;

  constructor(private rickService: RickService,
  private router: Router)
  {
    this.charactersArray = [];
   }

  ngOnInit(): void {
    this.getCharacters();

  }
 showDetail(id: number) {
    this.router.navigate(['/characters', id])
 }

  private getCharacters(): void{
    this.rickService.getAboutCharacter(this.currentPage)
    .subscribe((data: any) => {
      this.rickList = data;
      this.charactersArray = Object.values(this.rickList.results);
     console.log(data)
   });
  }
  public nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.getCharacters()
    }
  }
  public previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.getCharacters()
    }
  }

}
