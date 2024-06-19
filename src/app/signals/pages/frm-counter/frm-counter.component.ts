import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-frm-counter',
  templateUrl: './frm-counter.component.html',
  styleUrl: './frm-counter.component.css'
})
export class FrmCounterComponent {

   public counter = signal(10);
   public squareCounter = computed( () => this.counter() * this.counter() )

   increaseBy( valor: number ): void {
      // this.counter.set( this.counter() + valor );
      this.counter.update( current => current + valor );
   }

}
