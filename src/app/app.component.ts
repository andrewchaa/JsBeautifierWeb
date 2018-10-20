import { Component } from '@angular/core';
import { AppService } from './app.service';
import clipboard from 'clipboard-polyfill';
import beautify from 'js-beautify';
import hljs from 'highlight.js';

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

  jsonString = '';
  jsonHtml = '';
  pasteJson(): void {
    console.log('t');
    clipboard.readText().then(
      txt => {
        const beautified = beautify(txt, { indent_size: 2, space_in_empty_paren: true });
        const highlighted = hljs.highlight('javascript', beautified, true).value;
        console.log(hljs.highlight('javascript', txt, true));
        this.jsonHtml = '\n' + highlighted;
    });
  }
}
