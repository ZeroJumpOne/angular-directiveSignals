import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-frm-products',
  templateUrl: './frm-products.component.html',
  styleUrl: './frm-products.component.css'
})
export class FrmProductsComponent {

   private fb = inject( FormBuilder ); /* otro forma de inyectar modulos */

   public color: string = '';

   public frmProduct: FormGroup = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(6), Validators.email]],
   })

   // constructor(private fb: FormBuilder) {}

   public changeColor(): void {
      const color = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));

      this.color = color;
   }

}
