import { Injectable } from '@angular/core';

declare var $: any;

@Injectable()


export class CommonService {

    constructor() {
    }

    showNotification(from, align, color, msg) {
        const type = ['', 'info', 'success', 'warning', 'danger', 'rose', 'primary'];
        const c = type.indexOf(color);
        $.notify({
            icon: 'notifications',
            message: msg
        }, {
                type: type[c],
                timer: 500,
                placement: {
                    from: from,
                    align: align
                }
            });
    }

    // Local Storage
    lsWrite(key, value) {
        if (value) {
            value = JSON.stringify(value);
        }
        localStorage.setItem(key, value);
    }

    lsRead(key) {
        const value = localStorage.getItem(key);
        if (value && value !== 'undefined' && value !== 'null') {
            return JSON.parse(value);
        }
        return null;
    }
}
