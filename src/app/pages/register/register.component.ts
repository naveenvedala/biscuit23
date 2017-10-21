import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

declare var $: any;

@Component({
    moduleId: module.id,
    selector: 'register-cmp',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
    test: Date = new Date();
    register: FormGroup;

    constructor(private fB: FormBuilder) { }

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
            username: [null, [Validators.required]],
            email: [null, [Validators.required, Validators.email]],
            phone: [null, [Validators.required, Validators.pattern(/[0-9]/), Validators.minLength(10), Validators.maxLength(10)]],
            password: [null, Validators.required]
        });
    };

    signup(event) {
        let data = this.register.value;
        console.log(data)
    }
}
