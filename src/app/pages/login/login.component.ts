import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RestService } from '../../common/rest.service';
import { CommonService } from '../../common/common.service'
import { Router } from '@angular/router';


declare var $: any;

@Component({
    moduleId: module.id,
    selector: 'login-cmp',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    providers: [RestService, CommonService]
})

export class LoginComponent implements OnInit {
    test: Date = new Date();
    login: FormGroup;

    constructor(private fB: FormBuilder, private restSrc: RestService, private commonSvc: CommonService, private router: Router) { }

    ngOnInit() {
        setTimeout(function() {
            // after 1000 ms we add the class animated to the login/register card
            $('.card').removeClass('card-hidden');
        }, 700)

        this.login = this.fB.group({
            user: [null, [Validators.required]],
            password: [null, Validators.required],
        });
    }

    signin(event) {
        const data = this.login.value;
        this.restSrc.signin(data).subscribe(result => {
            if (result.status === 0) {
                return this.commonSvc.showNotification('top', 'right', 'danger', 'Invalid Credentials');
            }
            this.commonSvc.lsWrite('user', result.data.data);
            this.commonSvc.lsWrite('auth', result.data.auth);
            this.router.navigate(['/dashboard']);
        });
    }
}
