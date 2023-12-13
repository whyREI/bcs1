import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { LangService } from '../../services/lang.service';
import { ILang } from '../../interfaces/lang';

@Component({
  selector: 'app-my-card',
  templateUrl: './my-card.component.html',
  styleUrls: ['./my-card.component.scss'],
})
export class MyCardComponent implements OnInit, OnDestroy {
  langData: ILang | null = null;
  langSubscription?: Subscription;

  @ViewChild('hardSkillsBox', { static: true })
  hardSkillsBox!: ElementRef<HTMLElement>;

  openLink(link: string | undefined): void {
    if (link) window.open(link);
  }

  showGmail(event: HTMLElement, gmailAddres: string | undefined) {
    if (gmailAddres) {
      event.style.pointerEvents = 'none';
      event.textContent = '';
      event.style.color = 'var(--color-bg)';
      let letterIndex = 0;
      setInterval(() => {
        if (letterIndex == gmailAddres.length) {
          event.style.color = 'var(--color-text)';
          return;
        }
        event.textContent += gmailAddres[letterIndex];
        letterIndex++;
      }, 50);
    }
  }

  hardSkillsAnimationInterval: any;
  startHardSkillsAnimation() {
    const hardSkillsList = this.langData!.hardSkills.split(';');
    let currentHardSkillId = 0;

    this.hardSkillsAnimationInterval = setInterval(() => {
      if (currentHardSkillId == hardSkillsList.length - 1) {
        currentHardSkillId = 0;
      }
      this.hardSkillsBox.nativeElement.textContent =
        hardSkillsList[currentHardSkillId];
      currentHardSkillId++;
    }, 250);
  }

  constructor(private langService: LangService) {}

  ngOnInit(): void {
    this.langSubscription = this.langService.lang$.subscribe((langData) => {
      this.langData = langData;
      if (this.langData) {
        clearInterval(this.hardSkillsAnimationInterval);
        this.startHardSkillsAnimation();
      }
    });
  }

  ngOnDestroy() {
    this.langSubscription?.unsubscribe();
    clearInterval(this.hardSkillsAnimationInterval);
  }
}
