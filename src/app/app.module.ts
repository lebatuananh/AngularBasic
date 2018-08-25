import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { PipeComponent } from "./pipe/pipe.component";
import { ExponentialStrengthPipe } from "./exponential-strength.pipe";

@NgModule({
  declarations: [AppComponent, PipeComponent, ExponentialStrengthPipe],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
