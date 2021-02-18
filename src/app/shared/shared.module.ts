import { NgModule } from '@angular/core';

import { CapitalizePipe } from './capitalize.pipe';

import { CollapseModule } from 'ngx-bootstrap/collapse';


@NgModule({
    imports: [ CollapseModule.forRoot() ],
    declarations: [ CapitalizePipe ],
    exports: [ CapitalizePipe ],
})
export class SharedModule {

}
