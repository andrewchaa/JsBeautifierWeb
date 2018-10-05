import { Component } from '@angular/core';
import { AppService } from './app.service';
import clipboard from 'clipboard-polyfill';
import beautify from 'js-beautify';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService]
})

export class AppComponent {

  private _appService;
  constructor(appService: AppService) {
    this._appService = appService;
  }

  title = 'app';
  jsonString = 'Paste your JSON here';
  pasteJson(): void {
    console.log('t');
    clipboard.readText().then(
      txt => this.jsonString = beautify(txt, { indent_size: 4, space_in_empty_paren: true })
    );
  }
}
