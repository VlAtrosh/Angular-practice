import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div style="padding: 20px; font-family: sans-serif;">
      <h1>Прогноз погоды (Angular + ASP.NET Core)</h1>
      <table border="1" cellPadding="10" style="border-collapse: collapse; margin-top: 20px;">
        <thead style="background: #f0f0f0;">
          <tr>
            <th>Дата</th>
            <th>Температура (°C)</th>
            <th>Описание</th>
            <th>Температура (°F)</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let item of weather">
            <td>{{ item.date }}</td>
            <td>{{ item.temperatureC }}</td>
            <td>{{ item.summary }}</td>
            <td>{{ item.temperatureF }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  `
})
export class App {
  weather: any[] = [];

  constructor(private cdr: ChangeDetectorRef) {
    fetch('/api/weatherforecast')
      .then(r => r.json())
      .then(data => {
        this.weather = data;
        this.cdr.detectChanges(); // Заставляем Angular обновить экран
      });
  }
}