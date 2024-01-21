import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data_character: any[] = [];
  data_info_character: any;
  data_info_location: any;
  data_info_episode: any;

  
  constructor(private apiService: ApiService) {}

  //Función para que cuando se inicie el servidor traiga las funciones
  ngOnInit(): void {
    this.llenarDataCharacters();
    this.llenarInfoCharacter();
    this.llenarInfoLocation();
    this.llenarInfoEpisode();
  }

  //Función para llenar los datos de personajes
  llenarDataCharacters(){
    this.apiService.getData().subscribe( data => {
      this.data_character = this.shuffleArray(data.results).slice(0, 6);
      console.log(this.data_character);
    });
  }

  //Función para llenar los datos de la info de los personajes
  llenarInfoCharacter() {
    this.apiService.getData().subscribe(data => {
      this.data_info_character = data.info;
      console.log(this.data_info_character);
    });
  }

  //Función para llenar los datos de la info de la ubicación
  llenarInfoLocation() {
    this.apiService.getLocation().subscribe(data => {
      this.data_info_location = data.info;
      console.log(this.data_info_location);
    });
  }

  //Función para llenar los datos de la info de la ubicación
  llenarInfoEpisode() {
    this.apiService.getEpisode().subscribe(data => {
      this.data_info_episode = data.info;
      console.log(this.data_info_location);
    });
  }
  
  // Función para reorganizar aleatoriamente los personajes
  private shuffleArray(array: any[]): any[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

}
