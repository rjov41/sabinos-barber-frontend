import { Component, Input, SimpleChanges } from '@angular/core';
import { ValidationErrors } from '@angular/forms';
import logger from '../../utils/logger';
import { CommonModule } from '@angular/common';
export interface Messages {
  [key: string]: string;
}
@Component({
  selector: 'app-valid-messages-form',
  standalone: true,
  templateUrl: './valid-messages-form.component.html',
  styleUrl: './valid-messages-form.component.scss',
  imports: [CommonModule],
})
export class ValidMessagesFormComponent {
  @Input() errors?: ValidationErrors | null;
  @Input() messages?: Messages;

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    // logger.log('errors ', this.errors);
    // logger.log('messages ', this.messages);
  }
}
