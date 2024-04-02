import { Component } from '@angular/core';
import { Code } from '@domain/code';

@Component({
    selector: 'invalid-doc',
    template: `
        <app-docsectiontext>
            <p>Invalid state style is added using the <i>ng-invalid</i> and <i>ng-dirty</i> class to indicate a failed validation.</p>
        </app-docsectiontext>
        <div class="card flex justify-content-center">
            <p-password [(ngModel)]="value" class="ng-invalid ng-dirty"></p-password>
        </div>
        <app-code [code]="code" selector="password-invalid-demo"></app-code>
    `
})
export class InvalidDoc {
    value!: string;

    code: Code = {
        basic: `<p-password [(ngModel)]="value" class="ng-invalid ng-dirty"></p-password>`,

        html: `
<div class="card flex justify-content-center">
    <p-password [(ngModel)]="value" class="ng-invalid ng-dirty"></p-password>
</div>`,

        typescript: `
import { Component } from '@angular/core';

@Component({
    selector: 'password-invalid-demo',
    templateUrl: './password-invalid-demo.html'
})
export class PasswordInvalidDemo {
    value!: string;
}`
    };
}
