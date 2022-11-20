import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { HeaderpageComponent } from "./headerpage/headerpage.component";

@NgModule({
    imports: [IonicModule.forRoot()],
    declarations:[HeaderpageComponent],
    exports:[HeaderpageComponent],
})

export class ComponentsModule{

}