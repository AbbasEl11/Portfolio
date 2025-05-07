import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  Component,
  OnInit,
  OnDestroy,
  Inject,
  Renderer2,
  PLATFORM_ID
} from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ScrollService } from '../../services/scroll.service';
import { Router, NavigationEnd } from '@angular/router';
import { filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  sliderValue = 0;
  public menuOpen = false;
  isDetailRoute = false;
  private subs!: Subscription;
  private isBrowser: boolean;

  constructor(
    private translate: TranslateService,
    private scrollService: ScrollService,
    private renderer: Renderer2,
    private router: Router,
    @Inject(PLATFORM_ID) platformId: any
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
    this.translate.setDefaultLang('en');
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      const lang = localStorage.getItem('lang') || 'en';
      this.translate.use(lang);
      this.sliderValue = lang === 'de' ? 100 : 0;
    } else {
      this.translate.use('en');
      this.sliderValue = 0;
    }

    this.subs = this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe((e: NavigationEnd) => {
        this.isDetailRoute = e.urlAfterRedirects.startsWith('/projects/');
      });
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  public toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
    if (this.menuOpen) {
      this.renderer.setStyle(document.body, 'overflow', 'hidden');
    } else {
      this.renderer.removeStyle(document.body, 'overflow');
    }
  }

  onSliderInput(event: Event): void {
    const inputEl = event.target as HTMLInputElement;
    this.sliderValue = parseInt(inputEl.value, 10);
  }

  onSliderChange(event: Event): void {
    const val = parseInt((event.target as HTMLInputElement).value, 10);

    if (val < 50) {
      this.sliderValue = 0;
      this.translate.use('en');
      if (this.isBrowser) {
        localStorage.setItem('lang', 'en');
      }
    } else {
      this.sliderValue = 100;
      this.translate.use('de');
      if (this.isBrowser) {
        localStorage.setItem('lang', 'de');
      }
    }
  }

  onButtonClick(lang: 'en' | 'de'): void {
    if (lang === 'en') {
      this.sliderValue = 0;
      this.translate.use('en');
      if (this.isBrowser) {
        localStorage.setItem('lang', 'en');
      }
    } else {
      this.sliderValue = 100;
      this.translate.use('de');
      if (this.isBrowser) {
        localStorage.setItem('lang', 'de');
      }
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

  private interpolateColor(
    startHex: string,
    endHex: string,
    t: number
  ): string {
    const clampedT = Math.max(0, Math.min(1, t));
    const startRGB = this.hexToRgb(startHex);
    const endRGB = this.hexToRgb(endHex);

    if (!startRGB || !endRGB) {
      return startHex;
    }

    const r = Math.round(
      startRGB.r + (endRGB.r - startRGB.r) * clampedT
    );
    const g = Math.round(
      startRGB.g + (endRGB.g - startRGB.g) * clampedT
    );
    const b = Math.round(
      startRGB.b + (endRGB.b - startRGB.b) * clampedT
    );
    return `rgb(${r}, ${g}, ${b})`;
  }

  private hexToRgb(
    hex: string
  ): { r: number; g: number; b: number } | null {
    const cleanHex = hex.replace(/^#/, '');
    const normalizedHex =
      cleanHex.length === 3
        ? cleanHex
            .split('')
            .map(c => c + c)
            .join('')
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

  goToSection(fragment: string) {
    this.router
      .navigate(['/'], {
        fragment,
        onSameUrlNavigation: 'reload'
      })
      .then(() => {
        const el = document.getElementById(fragment);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      })
      .catch(err => {
        console.error('Navigation fehlgeschlagen:', err);
      });

    if (this.menuOpen && window.innerWidth <= 1025) {
      this.toggleMenu();
    }
  }
}
