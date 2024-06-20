import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { UserService } from '../../services/user-service.service';
import { User } from '../../interfaces/user-request.interface';

@Component({
  selector: 'app-frm-user-info',
  templateUrl: './frm-user-info.component.html',
  styleUrl: './frm-user-info.component.css'
})
export class FrmUserInfoComponent implements OnInit {

   private userService = inject(UserService);
   public userId = signal(1);

   public currentUser = signal<User | undefined>( undefined );
   public userWasFound = signal(true);
   public fullName = computed<string>( () => {
      if (!this.currentUser()) return 'Usuario no encontrado';
      return `${this.currentUser()?.first_name} ${this.currentUser()?.last_name}`;
   });

   ngOnInit(): void {

      this.loadUser( this.userId() );
   }

   public loadUser( id: number) {
      if (id <= 0) return;

      this.userId.set( id );
      this.currentUser.set(undefined);

      this.userService.getUserById( id )
      .subscribe({
         next: (user) => {
            this.currentUser.set( user );
            this.userWasFound.set(true);
         },
         error: () => {
            this.userWasFound.set(false);
            this.currentUser.set(undefined);
         },
      });
   }

}
