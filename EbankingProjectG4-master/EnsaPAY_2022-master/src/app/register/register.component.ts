import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { TokenStorageService } from '../services/token-storage.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  isLoggedIn = false;
  form: any = {};
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService,private router:Router) { }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }

  onSubmit() {
    this.authService.login(this.form).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        //this.reloadPage();
        console.log(data);
        this.redirectUser(data);
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
        console.log("erreur : "+err);
      }
    );
  }
  
  reloadPage() {
    window.location.reload();
  }

  redirectUser(role:any){
    console.log(role);
    if(role =="ROLE_CLIENT"){
      console.log("CLIEEEENT");
      this.router.navigateByUrl('/home').then(()=>{

        window.location.reload();
      })
    }
    else if(role =="ROLE_AGENT"){
      console.log("AGEENT");
      this.router.navigateByUrl('/homeagent').then(()=>{
        window.location.reload();
      })
    }
    else if(role =="ROLE_ADMIN"){
      console.log("CLIEEEENT");
      this.router.navigateByUrl('/homeadmin').then(()=>{

        window.location.reload();
      })
    }
   
  }
}
