import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'embryo-LanguageDropDown',
  templateUrl: './LanguageDropDown.component.html',
  styleUrls: ['./LanguageDropDown.component.scss']
})
export class LanguageDropDownComponent implements OnInit {

   @Input() selectedValue : any;
   @Output() selectedLanguage : EventEmitter<any> = new EventEmitter();

   currentLang = 'ar';

   langArray = [
      {
         name: "عربي",
         value:"ar"
      },
      {
         name:"English",
         value:"en"
      }
   ]

   constructor(public translate: TranslateService) { }

   ngOnInit() {
   }

   selectionChange(data) {
      debugger;
      if(data && data.value){
         this.selectedLanguage.emit(data.value);
         this.translate.use(data.value)
      }
   }
}
