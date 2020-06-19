import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { map, switchMap } from 'rxjs/operators';
import { UserService } from './user.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {
  private isAdmin : boolean;


  constructor(private auth : AuthService, private userService : UserService, private router : Router) { }

  canActivate() : Observable<boolean> {
    return this.auth.appUser$
    .pipe(map(appUser => {
      if(appUser.isAdmin) return true;
      this.router.navigate(['/']);
      return false;
    }));
  }
}
