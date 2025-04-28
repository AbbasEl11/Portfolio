import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ScrollService } from '../../../models/scroll.service';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  sliderValue = 0;

  constructor(private translate: TranslateService, private scrollService: ScrollService) {
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

  scrollTo(sectionId: string) {
    this.scrollService.scrollTo(sectionId);
  }


  onSliderInput(event: Event): void {
    const inputEl = event.target as HTMLInputElement;
    this.sliderValue = parseInt(inputEl.value, 10);
  }

  onSliderChange(event: Event): void {
    const inputEl = event.target as HTMLInputElement;
    const val = parseInt(inputEl.value, 10);

    if (val < 50) {
      this.sliderValue = 0;
      this.translate.use('en');
    } else {
      this.sliderValue = 100;
      this.translate.use('de');
    }
  }

  onButtonClick(lang: 'en' | 'de'): void {
    if (lang === 'en') {
      this.sliderValue = 0;
      this.translate.use('en');
    } else {
      this.sliderValue = 100;
      this.translate.use('de');
    }
  }

  get enColor(): string {
    const t = Math.min(1, this.sliderValue / 50);
    return this.interpolateColor('#f87a55', '#ffffff', t);
  }

  get deColor(): string {
    const t = Math.max(0, (this.sliderValue - 50) / 50);
    return this.interpolateColor('#ffffff', '#f87a55', t);
  }

  private interpolateColor(startHex: string, endHex: string, t: number): string {
    const clampedT = Math.max(0, Math.min(1, t));
    const startRGB = this.hexToRgb(startHex);
    const endRGB = this.hexToRgb(endHex);

    if (!startRGB || !endRGB) {
      return startHex;
    }

    const r = Math.round(startRGB.r + (endRGB.r - startRGB.r) * clampedT);
    const g = Math.round(startRGB.g + (endRGB.g - startRGB.g) * clampedT);
    const b = Math.round(startRGB.b + (endRGB.b - startRGB.b) * clampedT);
    return `rgb(${r}, ${g}, ${b})`;
  }

  private hexToRgb(hex: string): { r: number; g: number; b: number } | null {
    const cleanHex = hex.replace(/^#/, '');
    const normalizedHex = cleanHex.length === 3
      ? cleanHex.split('').map(c => c + c).join('')
      : cleanHex;

    const match = normalizedHex.match(/^([0-9a-f]{6})$/i);
    if (!match) return null;

    const intVal = parseInt(match[1], 16);
    return {
      r: (intVal >> 16) & 255,
      g: (intVal >> 8) & 255,
      b: intVal & 255
    };
  }
}