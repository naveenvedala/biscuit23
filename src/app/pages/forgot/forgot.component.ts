import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RestService } from '../../common/rest.service';
import { CommonService } from '../../common/common.service';
import { Router } from '@angular/router';

declare var $: any;

@Component({
    moduleId: module.id,
    // tslint:disable-next-line:component-selector
    selector: 'forgot-cmp',
    templateUrl: './forgot.component.html',
    styleUrls: ['./forgot.component.css'],
    providers: [RestService, CommonService]
})



export class ForgotComponent implements OnInit {
    test: Date = new Date();
    forgot: FormGroup;
    uf: boolean;
    ef: boolean;
    btn = true;

    constructor(private fB: FormBuilder, private restSrc: RestService, private router: Router, private commonSrc: CommonService, ) { }

    ngOnInit() {
        setTimeout(function() {
            // after 1000 ms we add the class animated to the login/register card
            $('.card').removeClass('card-hidden');
        }, 700)

        this.forgot = this.fB.group({
            email: [null, [Validators.required, Validators.email]]
        });
    }

    check() {
        const mail: any = this.forgot.value;
        this.restSrc.unique({email: mail.email}).subscribe(result => {
            if (result.data == null) {
                console.log(result.data);
                this.uf = false;
                this.ef = true;
            } else {
                this.ef = false;
                this.uf = true;
                this.btn = false;
            }
        })
    }

    generateMail() {
        console.log('Im Working');
        this.restSrc.forgotPassword({email: this.forgot.value.email}).subscribe(result => {
            if (result.status === 1) {
                this.commonSrc.showNotification('top', 'left', 'success', 'Reset password link has been sent to your Mail ID');
                this.forgot.reset();
                this.router.navigateByUrl('/auth/login');
            } else {
                // tslint:disable-next-line:max-line-length
                this.commonSrc.showNotification('top', 'left', 'danger', 'Due to technical reasons Reset Link has not been sent to Mail ID');
            }
        })
    }


}
