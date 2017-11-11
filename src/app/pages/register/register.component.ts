import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { RestService } from '../../common/rest.service';
import { CommonService } from '../../common/common.service'
import { Router } from '@angular/router';

declare var $: any;

@Component({
    moduleId: module.id,
    // tslint:disable-next-line:component-selector
    selector: 'register-cmp',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css'],
    providers: [RestService, CommonService]
})

export class RegisterComponent implements OnInit {
    test: Date = new Date();
    register: FormGroup;
    uName: boolean;
    eName: boolean;
    empty: boolean;
    uMail: boolean;
    eMail: boolean;
    uPhone: boolean;
    ePhone: boolean;

    constructor(private fB: FormBuilder, private restSrc: RestService, private commonSvc: CommonService, private router: Router) { }


    ngOnInit() {

        setTimeout(function() {
            // after 1000 ms we add the class animated to the login/register card
            $('.card').removeClass('card-hidden');
        }, 700)

        this.register = this.fB.group({
            username: [null, [Validators.required, Validators.nullValidator]],
            email: [null, [Validators.required, Validators.email]],
            phone: [null, [Validators.required, Validators.pattern(/[1-9]{1,1}[0-9]{9}/)]],
            password: [null, [Validators.required, Validators.pattern(/[a-zA-Z0-9]{6}/)]]
        });
    }

    signup(event) {
        const data = this.register.value;
        console.log(data)
        this.restSrc.registerUser(data).subscribe(d => {
            if (d.status === 0) {
                this.commonSvc.showNotification('top', 'right', 'danger', 'User Registration Failed');
                return;
            } else {
                this.commonSvc.showNotification('top', 'right', 'success', 'User Registered Successfully');
                this.register.reset();
                this.uName = null;
                this.eName = null;
                this.empty = null;
                this.uMail = null;
                this.eMail = null;
                this.uPhone = null;
                this.ePhone = null;
                this.router.navigateByUrl('/auth/login');
            }
        });
    }

    unique(e) {
        let query: Object;
        const data = this.register.value;
        if (e === 'username') {
            if (data.username == null || data.username === '') {
                this.uName = false;
                this.empty = false;
                return;
            }
            if (data.username.trim() === '') {
                this.empty = true;
                return;
            }
            query = { username: data.username }
            this.restSrc.unique(query).subscribe(result => {
                if (result.data == null) {
                    this.uName = true;
                    this.eName = false;
                    this.empty = false;
                } else {
                    this.uName = false;
                    this.eName = true;
                }
            })
        } else if (e === 'email') {
            if (data.email == null || data.email === '') {
                this.uName = false;
                return;
            }
            query = { email: data.email }
            this.restSrc.unique(query).subscribe(result => {
                if (result.data == null) {
                    this.uMail = true;
                    this.eMail = false;
                } else {
                    this.uMail = false;
                    this.eMail = true;
                }
            })
        } else if (e === 'phone') {
            if (data.phone == null || data.phone.trim() === '' || data.phone.length !== 10) {
                return;
            }
            query = { phone: data.phone }
            this.restSrc.unique(query).subscribe(result => {
                if (result.data == null) {
                    this.uPhone = true;
                    this.ePhone = false;
                } else {
                    this.uPhone = false;
                    this.ePhone = true;
                }
            })
        }
    }
}
