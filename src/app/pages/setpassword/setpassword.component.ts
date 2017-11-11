import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RestService } from '../../common/rest.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CommonService } from '../../common/common.service';

declare var $: any;

@Component({
    moduleId: module.id,
    // tslint:disable-next-line:component-selector
    selector: 'setpassword-cmp',
    templateUrl: './setpassword.component.html',
    styleUrls: ['./setpassword.component.css'],
    providers: [RestService, CommonService]
})

export class SetpasswordComponent implements OnInit {
    test: Date = new Date();
    shhh: FormGroup;
    cp: boolean;
    ep: boolean;
    token: string;

    // tslint:disable-next-line:max-line-length
    constructor(private fB: FormBuilder, private restSrc: RestService, private router: Router, private route: ActivatedRoute, private commonSvc: CommonService) { }

        ngOnInit() {
            setTimeout(function() {
                // after 1000 ms we add the class animated to the login/register card
                $('.card').removeClass('card-hidden');
            }, 700)
            this.token = this.route.snapshot.queryParams['t'];
            this.shhh = this.fB.group({
                pass: [null, [Validators.required, Validators.pattern(/[a-zA-Z0-9]{6}/)]],
                confirm: [null, [Validators.required]]
            });
        };

        check() {
            const dat = this.shhh.value;
            if (dat.pass === dat.confirm) {
                this.cp = true;
                this.ep = false;
            } else {
                this.ep = true;
                this.cp = false;
            }
        }

        setP(event) {
            const val = this.shhh.value;
            val.token = this.token;
            console.log(val);
            this.restSrc.setPassword(val).subscribe(result => {
                if (result.status === 0) {
                     this.commonSvc.showNotification('top', 'right', 'danger', result.data );
                     return this.router.navigate(['/auth/forgot']);
                }
                this.commonSvc.showNotification('top', 'right', 'success', result.data);
                return this.router.navigate(['/auth/login']);
            })
        }
}
