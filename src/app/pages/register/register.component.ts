import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { CommonService } from '../../common/rest.service';

declare var $: any;

@Component({
    moduleId: module.id,
    selector: 'register-cmp',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css'],
    providers: [CommonService]
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

    constructor(private fB: FormBuilder, private commonSvc: CommonService) { }

    checkFullPageBackgroundImage() {
        var $page = $('.full-page');
        var image_src = $page.data('image');

        if (image_src !== undefined) {
            var image_container = '<div class="full-page-background" style="background-image: url(' + image_src + ') "/>'
            $page.append(image_container);
        }
    };

    ngOnInit() {
        this.checkFullPageBackgroundImage();

        setTimeout(function() {
            // after 1000 ms we add the class animated to the login/register card
            $('.card').removeClass('card-hidden');
        }, 700)

        this.register = this.fB.group({
            username: [null, [Validators.required, Validators.nullValidator]],
            email: [null, [Validators.required, Validators.email]],
            phone: [null, [Validators.required, Validators.pattern(/[1-9]{1}[0-9]{9}/)]],
            password: [null, [Validators.required, Validators.pattern(/[a-zA-Z0-9]{6}/)]]
        });
    }

    signup(event) {
        let data = this.register.value;
        console.log(data)
        this.commonSvc.registerUser(data).subscribe(data => {
            console.log(data);
        });
        this.register.reset();
        this.uName = null;
        this.eName = null;
        this.empty = null;
        this.uMail = null;
        this.eMail = null;
        this.uPhone = null;
        this.ePhone = null;
    }

    unique(e) {
        var query: Object;
        let data = this.register.value;
        if (e == 'username') {
            if (data.username == null || data.username == "") {
                this.uName = false;
                this.empty = false;
                return;
            }
            if (data.username.trim() == "") {
                this.empty = true;
                return;
            }
            query = { username: data.username }
            this.commonSvc.unique(query).subscribe(result => {
                if (result.data == null) {
                    this.uName = true;
                    this.eName = false;
                    this.empty = false;
                } else {
                    this.uName = false;
                    this.eName = true;
                }
            })
        } else if (e == 'email') {
            if (data.email == null || data.email == "") {
                this.uName = false;
                return;
            }
            query = { email: data.email }
            this.commonSvc.unique(query).subscribe(result => {
                if (result.data == null) {
                    this.uMail = true;
                    this.eMail = false;
                } else {
                    this.uMail = false;
                    this.eMail = true;
                }
            })
        } else if (e == 'phone') {
            if (data.phone == null) {
                return;
            }
            query = { phone: data.phone }
            this.commonSvc.unique(query).subscribe(result => {
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
