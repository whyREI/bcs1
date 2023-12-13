import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  @Input() themeIconName!: string;

  @Output() themeMode = new EventEmitter();
  themeToggleMode() {
    this.themeMode.emit();
  }

  @Input() langName!: string;

  @Output() langMode = new EventEmitter();
  langToggleMode() {
    this.langMode.emit();
  }
}
