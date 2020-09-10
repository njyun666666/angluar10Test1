import { LanguageService } from './../../../../shared/modules/language/services/language.service';
import { HomeService } from './../../services/home.service';
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { FormBuilder, Validators } from '@angular/forms';

import * as XLSX from 'xlsx';
import * as Excel from 'exceljs';
import { saveAs } from 'file-saver';


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
    { Name: 'GeorgeW Bush', Index: 43000, Date: '2020-09-08T11:11:12' },
    { Name: 'Barack Obama', Index: 44000, Date: '2020-09-08T12:11:12' },
    { Name: 'Donald Trump', Index: 45000, Date: '2020-09-08T13:11:12' },
    { Name: '姓名姓名姓名', Index: 45000, Date: '2020-09-08T14:11:12' }
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



  exceljs() {

    const workbook = new Excel.Workbook();
    workbook.creator = 'Me';
    workbook.lastModifiedBy = 'Her';
    workbook.created = new Date(1985, 8, 30);
    workbook.modified = new Date();
    workbook.lastPrinted = new Date(2016, 9, 27);
    // 将工作簿日期设置为 1904 年日期系统
    workbook.properties.date1904 = true;




    const fontStyle = {
      name: 'Times New Roman',
      family: 4,
      size: 16,
      color: { argb: 'FFFF0000' },
      underline: true,
      bold: true
    };





    // 创建带有红色标签颜色的工作表
    const worksheet = workbook.addWorksheet('Sheet1', { properties: { tabColor: { argb: 'FFC0000' } } });
    const worksheet2 = workbook.addWorksheet('Sheet2', { properties: { tabColor: { argb: '00FFFF00' } } });


    worksheet.columns = [
      { header: 'Name', key: 'Name', width: 32, style: { font: fontStyle } },
      { header: 'Index', key: 'Index', width: 10 },
      { header: 'Date', key: 'Date', width: 20, style: { numFmt: 'yyyy/MM/d HH:mm:ss' } }
    ];



    // worksheet.getCell('B1').fill = {
    //   type: 'pattern',
    //   pattern: 'solid',
    //   fgColor: { argb: 'FFFFFF00' },
    //   bgColor: { argb: '00FFFF00' }
    // };


    // 通过键，字母和基于1的列号访问单个列
    const nameCol = worksheet.getColumn('A');
    const indexCol = worksheet.getColumn(2);
    const dateCol = worksheet.getColumn('Date');

    indexCol.numFmt = '#,##0.00;[Red]\-#,##0.00';



    const row1 = worksheet.getRow(1);
    row1.fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: 'FFFFFF00' },
      bgColor: { argb: '00FFFF00' }
    };


    row1.border = {
      top: { style: 'thin' },
      left: { style: 'thin' },
      bottom: { style: 'thin' },
      right: { style: 'thin' }
    };



    // worksheet.addRow({ Name: 'John Doe', Index: 10000, Date: new Date(1970, 1, 1) });

    worksheet.addRows(this.data);








    const C3 = worksheet.getCell('C3');

    // 修改/添加单个单元格
    C3.value = new Date(2020, 1, 1);
    // C3.style.fill='';





    worksheet.mergeCells('A6:B6');
    const A6 = worksheet.getCell('A6');
    A6.value = 'merge A6:B6';
    A6.border = {
      top: { style: 'thin' },
      left: { style: 'thin' },
      bottom: { style: 'thin' },
      right: { style: 'thin' }
    };


    worksheet.mergeCells('C6:C7');
    const C6 = worksheet.getCell('C6');
    C6.value = 'merge C6:C7';
    C6.border = {
      top: { style: 'thin' },
      left: { style: 'thin' },
      bottom: { style: 'thin' },
      right: { style: 'thin' }
    };






    // export to file
    workbook.xlsx.writeBuffer().then((buffer) => {
      const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
      const fileExtension = '.xlsx';
      const blob = new Blob([buffer], { type: fileType });
      saveAs(blob, 'exceljs' + fileExtension);
    });

  }


}
