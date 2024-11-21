import { Component } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'] 
})
export class WeatherComponent {
  constructor(private builder: FormBuilder, private weatherService: WeatherService) { }

  locationsForm = this.builder.group({
    city: ['', Validators.required]
  });

  weatherData: any;
  locations: any;
  selectedLocation: any;
  errorMessage: string | undefined;
  currentCity: string | undefined;
  weatherCondition: string = '';
  usingCurrentLocation: boolean = false;

  obterLocalizacaoAtual() {
    // Limpa as regiões e ativa a flag de localização atual
    this.locations = null;
    this.usingCurrentLocation = true;

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          this.obterClimaPorLocalizacao(lat, lon);
          this.usingCurrentLocation = false; // Finaliza a localização atual
        },
        (error) => {
          this.errorMessage = 'Erro ao obter localização atual.';
          this.usingCurrentLocation = false;
        }
      );
    } else {
      this.errorMessage = 'Geolocalização não suportada pelo navegador.';
      this.usingCurrentLocation = false;
    }
  }

  obterRegioes() {
    if (this.usingCurrentLocation) {
      return; // Impede que a função obtenha regiões se a localização atual estiver ativa
    }

    const city = String(this.locationsForm.get('city')?.value);
    this.weatherService.getLatLon(city).subscribe(
      (data) => {
        this.locations = data;
        this.weatherData = null; // Esconde o clima atual quando as regiões são buscadas
        this.errorMessage = undefined; // Limpa mensagens de erro
      },
      (error) => {
        this.errorMessage = 'Não foi possível encontrar a cidade. Tente novamente.';
      }
    );
  }

  obterClima(location: any) {
    this.selectedLocation = location;
    this.currentCity = `${location.name}, ${location.state}`;
    
    this.weatherService.getWeather(location.lat, location.lon).subscribe(
      (data) => {
        this.weatherData = data;
        this.atualizarCondicaoClimatica(this.weatherData.weather[0].main);
      },
      (error) => {
        this.errorMessage = 'Erro ao obter o clima da cidade selecionada.';
      }
    );
  }

  obterClimaPorLocalizacao(lat: number, lon: number) {
    this.weatherService.getWeather(lat, lon).subscribe(data => {
      this.weatherData = data;
      this.currentCity = this.weatherData.name;
      this.atualizarCondicaoClimatica(this.weatherData.weather[0].main);
    });
  }

  atualizarCondicaoClimatica(condicao: string) {
    const normalizedCondition = condicao.toLowerCase();
    const validConditions = ['clear', 'clouds', 'rain', 'snow', 'thunderstorm'];
    this.weatherCondition = validConditions.includes(normalizedCondition) ? normalizedCondition : 'default';
  }

  getBackgroundClass() {
    switch (this.weatherCondition) {
      case 'clear':
        return 'clear';
      case 'clouds':
        return 'clouds';
      case 'rain':
        return 'rain';
      case 'snow':
        return 'snow';
      case 'thunderstorm':
        return 'thunderstorm';
        case 'mist': // Condição para névoa
          return 'mist'; // Classe CSS para névoa
      default:
        return 'default';
    }
  }
}
