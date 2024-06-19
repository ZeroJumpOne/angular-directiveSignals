import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Directive({
   selector: '[customLabel]'
})
export class CustomLabelDirective implements OnInit {

   private htmlElement?: ElementRef<HTMLElement>;
   private _color: string = 'green';
   private _errors?: ValidationErrors | null | undefined;

   // @Input()
   // public color: string = '';
   @Input()
   set color( valor: string) {
      // console.log({ valor });
      this._color = valor;
      this.setStyle();
   }

   @Input()
   set errors( valor: ValidationErrors | null | undefined ) {
      // console.log( valor );
      this._errors = valor;
      this.setErrorMessage();
   }

   constructor(private el: ElementRef<HTMLElement>) {
      // console.log('constructor de la directiva');
      // console.log(el);

      this.htmlElement = el;

      // this.htmlElement.nativeElement.innerHTML = 'Hola Mundo';
   }

   ngOnInit(): void {
      // console.log('Directiva - NgOnInit');
      this.setStyle();
   }

   setStyle(): void {
      if (!this.htmlElement ) return;
      this.htmlElement.nativeElement.style.color = this._color;
      return;
   }

   setErrorMessage(): void {
      if (!this.htmlElement ) return;
      if ( !this._errors) {
         this.htmlElement.nativeElement.innerText = 'No hay errores';
         return;
      }

      const errors = Object.keys( this._errors );
      console.log(errors);


      if (errors.includes('required')) {
         this.htmlElement.nativeElement.innerText = 'Este campo es requerido';
         return;
      }

      if (errors.includes('minlength')) {
         const min     = this._errors['minlength']['requiredLength'];
         const current = this._errors['minlength']['actualLength'];
         this.htmlElement.nativeElement.innerText = `Minimo requerido ${ min }, Faltan ${ min - current}`;
         return;
      }

      if (errors.includes('email')) {
         this.htmlElement.nativeElement.innerText = `Formato de correo incorrecto`;
         return;
      }

   }

}
