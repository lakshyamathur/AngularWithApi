import { Component, OnInit } from '@angular/core';
import{LoginService}from'../login.service';
import{Router}from'@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
email:string;
password:string;
verify:any={};
  constructor(private loginservice:LoginService,private router:Router) { }

  ngOnInit() {
  }
  loginfunction(){
console.log("calling login........");
      this.loginservice.login(this.email,this.password)
          .subscribe(data =>{this.verify=data;
          console.log("data came from login"+data);
          if(this.verify  ==  null){
            console.log("not verified");
            window.alert("invalid email id or password... try again...!!!!");
            window.location.reload();
          }
          else{
            console.log("verified");
            this.router.navigate(['/parent-control']);
          }
        });
        }

}
