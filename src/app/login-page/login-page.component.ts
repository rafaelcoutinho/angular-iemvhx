import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { AuthServiceService } from "../auth-service.service";

@Component({
  selector: "app-login-page",
  templateUrl: "./login-page.component.html",
  styleUrls: ["./login-page.component.css"]
})
export class LoginPageComponent implements OnInit {
  loginForm;
  resp:any;
  constructor(
    private formBuilder: FormBuilder,
    private service: AuthServiceService
  ) {
    this.loginForm = this.formBuilder.group({
      email: "admin@conprees.org",
      password: ""
    });
  }

  ngOnInit() {}
  
  onSubmit(loginData) {
  console.log(loginData)
    // Process checkout data here
    this.service
      .authenticate(loginData.email, loginData.password)
        .subscribe((data => this.resp = {  }));

    this.loginForm.reset();

    console.warn("login", loginData);
  }
}
