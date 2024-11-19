import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appOnlyEmailCharacters]',
})
export class OnlyEmailCharactersDirective {
  // Patrón Regex para caracteres válidos en correos electrónicos
  regexStr = '^[a-zA-Z0-9._+-@]*$';

  constructor(private el: ElementRef) {}

  @HostListener('keydown', ['$event']) onKeyDown(event: KeyboardEvent) {
    // Permitir teclas especiales como Backspace, Tab, Delete, Enter, etc.
    // const allowedKeys = [
    //   'Backspace',
    //   'Tab',
    //   'ArrowLeft',
    //   'ArrowRight',
    //   'Delete',
    //   'Enter',
    // ];
    // if (allowedKeys.includes(event.key)) {
    //   return true;
    // }

    // Validar con el patrón
    const isValid = new RegExp(this.regexStr).test(event.key);
    if (!isValid) {
      event.preventDefault(); // Bloquear caracteres no válidos
    }
    return isValid;
  }
}
