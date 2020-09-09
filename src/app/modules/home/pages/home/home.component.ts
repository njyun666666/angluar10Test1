import { LanguageService } from './../../../../shared/modules/language/services/language.service';
import { HomeService } from './../../services/home.service';
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { FormBuilder, Validators } from '@angular/forms';

import * as XLSX from 'xlsx';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  isSubmit = false;

  form = this.formBuilder.group({
    account: [null, [Validators.required]],
    password: [null, Validators.required],
    file: [null]
  });

  data = [
    { Name: 'Bill Clinton', Index: 42000, Date: '2020-09-08T10:11:12' },
    { Name: 'GeorgeW Bush', Index: 43000, Date: '2020-09-08T10:11:12' },
    { Name: 'Barack Obama', Index: 44000, Date: '2020-09-08T10:11:12' },
    { Name: 'Donald Trump', Index: 45000, Date: '2020-09-08T10:11:12' },
    { Name: '姓名姓名姓名', Index: 45000, Date: '2020-09-08T10:11:12' }
  ];




  constructor(private homeService: HomeService,
              private cookieService: CookieService,
              private formBuilder: FormBuilder,
              public languageService: LanguageService
  ) { }

  ngOnInit() {



    this.cookieService.set('token', 'HelloWorld', 30); // 30 day
    // this.cookieService.delete('token');
    // this.cookieService.deleteAll();
    // this.cookieService.get('token');


    // this.form.setValue({ account: 'admin', password: 'adminPassword' });
    this.form.patchValue({ account: 'admin', password: 'adminPassword' });

    // get formBuilder value
    // this.form.value

  }


  getTest() {
    this.homeService.getTest(this.form.value).subscribe(result => {
      const code = result.code;
      const message = result.message;
      const viewModelList = result.viewModelList;



    });



  }



  postTest() {
    this.homeService.postTest().subscribe(result => {

      console.log(result);

      // const code = result.code;
      // const message = result.message;
      // const viewModelList = result.viewModelList;



    });



  }



  onSubmit() {
    console.log('onSubmit>>>>>>>>>>>>>>>>>>>>>>');

    // let account = this.form.get('account').value;

    // console.log(this.form.get('account').value);
    console.log(this.form);
    console.log(this.form.value);

    console.log(this.form.get('file'));
    // console.log();

    const formData: FormData = new FormData();
    formData.append('account', this.form.get('account').value);
    formData.append('password', this.form.get('password').value);



    const fileList = this.form.get('file').value;

    for (const file of fileList) {
      // console.log(file);
      formData.append('file', file);
    }



    // formData.append('file', this.form.get('file').value);
    // formData.append('file', document.getElementById('file')[0]);




    this.homeService.submit(formData).subscribe(result => {
      const code = result.code;
      const message = result.message;
      const viewModelList = result.viewModelList;


      console.log('onSubmit<<<<<<<<<<<<<<<<<<');

    });



  }

  onFileSelect(event) {

    if (event.target.files.length > 0) {

      this.form.get(event.target.name).setValue(event.target.files);

    } else {
      this.form.get(event.target.name).setValue(null);
    }


  }


  // onFileSelect(event) {
  //   if (event.target.files.length > 0) {

  //     let fileList: Array<any>;
  //     const file = event.target.files[0];
  //     this.form.get(event.target.name).setValue(file);
  //   }
  // }



  getLangServiceLang() {
    console.log(this.languageService.defaultLang);
  }


  export() {
    /* generate worksheet */
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.data);


    // const ws: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(this.data);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, 'SheetJS.xlsx');
  }



  table_to_sheet() {
    const table = document.getElementById('demo-table');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(table);



    ws.A1 = { font: { sz: 20 } };


    ws.A1.v = '姓名';
    console.log(ws.A2.v);
    console.log(ws.B2.v);

    ws.B2.z = '#,##0';

    // ws.B2.s =
    // {
    //   fill: {
    //     fgColor: { rgb: 'FFFFAA' }
    //   }
    // };


    // ws.B3.s =
    // {
    //   fgColor: { rgb: 'FFFFAA' }
    // };

    // const ws: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(this.data);




    const cells = Object.keys(ws);
    console.log(cells);

    cells.forEach(x => {
      console.log(x);

      if (x.match('^B[0-9]+$') && x !== 'B1') {
        ws[x].z = '#,##0';
      }

      if (x.match('^C[0-9]+$') && x !== 'C1') {
        ws[x].z = 'yyyy/MM/d HH:mm:ss';
      }

    });

    const wscols = [
      { wch: 10 },
      { wch: 10 },
      { wch: 20 }
    ];

    ws['!cols'] = wscols;
    console.log(ws['!cols']);






    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, 'SheetJS.xlsx', { cellStyles: true });
  }

  // const ExcelJS = require('exceljs');



  // exceljs() {

  //   // const workbook = new Excel.Workbook();
  // }


}
