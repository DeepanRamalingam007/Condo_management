// import { keyPathFile } from "../../Configuration/keyPathFile";

const { WebDriver } = require("selenium-webdriver");
const { remote } = require("webdriverio");
const { google } = require("googleapis");
const puppeteer = require("puppeteer");

const ReportsBtn = "(//p[normalize-space()='Report'])";
const CreateIncd = "(//button[normalize-space()='Create'])";
const IncdDate = "((//input[@id=':ro:'])[1])";
const EmailField = "(//input[@id=':r0:'])";
const PasswordField = "(//input[@id='auth-login-v2-password'])" ;
const LoginBtn = "(//button[@type='submit'])";
const MonthField = "(//div[@class='MuiPickersCalendarHeader-label css-1v994a0'])"; //div[@id=':r2p:-grid-label']
const rightarrowFromCalender = "(//button[@title='Next month']//*[name()='svg'])";
const leftarrowFromCalender = "(//button[@title='Previous month']//*[name()='svg'])";
const DateValues = "(//div[@role='rowgroup'])";
const rowd = "(//div[@class='MuiDayCalendar-weekContainer css-mvmu1r'])";
const celld = "(//div[@class='MuiButtonBase-root MuiPickersDay-root MuiPickersDay-dayWithMargin css-1a13sfm'])";
const TimePicker = "(//div[@class='MuiClock-squareMask css-1umqo6f'])";
class FMS {
  get ReportsBtnC() {
    web.$(ReportsBtn).waitForDisplayed({ timeout: 10000 });
    return web.$(ReportsBtn);
  }
  get TimePickerC() {
    web.$(TimePicker).waitForDisplayed({ timeout: 10000 });
    return web.$(TimePicker);
  }
  get celldC() {
    web.$(celld).waitForDisplayed({ timeout: 10000 });
    return web.$(celld);
  }
  get rowdC() {
    web.$(rowd).waitForDisplayed({ timeout: 10000 });
    return web.$(rowd);
  }
  get DateValuesC() {
    web.$(DateValues).waitForDisplayed({ timeout: 10000 });
    return web.$(DateValues);
  }
  get rightarrowFromCalenderC() {
    web.$(rightarrowFromCalender).waitForDisplayed({ timeout: 10000 });
    return web.$(rightarrowFromCalender);
  }
  get leftarrowFromCalenderC() {
    web.$(leftarrowFromCalender).waitForDisplayed({ timeout: 10000 });
    return web.$(leftarrowFromCalender);
  }
  get MonthFieldC() {
    web.$(MonthField).waitForDisplayed({ timeout: 10000 });
    return web.$(MonthField);
  }
  get CreateIncdC() {
    web.$(CreateIncd).waitForDisplayed({ timeout: 10000 });
    return web.$(CreateIncd);
  }
  get IncdDateC() {
    web.$(IncdDate).waitForDisplayed({ timeout: 10000 });
    return web.$(IncdDate);
  }
  get EmailFieldC() {
    web.$(EmailField).waitForDisplayed({ timeout: 10000 });
    return web.$(EmailField);
  }
  get PasswordFieldC() {
    web.$(PasswordField).waitForDisplayed({ timeout: 10000 });
    return web.$(PasswordField);
  }
  get LoginBtnC() {
    web.$(LoginBtn).waitForDisplayed({ timeout: 10000 });
    return web.$(LoginBtn);
  }
  async readSpreadsheet() {
    try {
      const auth = new google.auth.GoogleAuth({
        keyFile: "C:\\VMS_V3\\Video_Request\\credentials.json",
        scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
      });
      const client = await auth.getClient();

      const sheets = google.sheets({ version: "v4", auth });

      const spreadsheetId = "1JZf6xE5PXiJUInwk0CdJim8UTwI0lXcNvekftsGn3Wc";
      const range = "FMSui!A1:B7";
      const response = await sheets.spreadsheets.values.get({
        spreadsheetId,
        range,
      });
      const rows = response.data.values;
      const Month = rows[1][1];
      const Date = rows[2][1];
      console.log(Month, Date);
      return { Month, Date };
    } catch (err) {
      console.error("Error reading spreadsheet:", err);
    }
  }
  async clickFunction(w, q, u, r, z, f, n) {
    if (u < 0) {
      r = 1;
      u = q - w;
    }
    for (let k = u; k > 0; k--) {
      if (r === 1) {
        await this.rightarrowFromCalenderC.click();
        await web.pause(1000);
      }
      if (r !== 1) {
        await this.leftarrowFromCalenderC.click();
        await web.pause(1000);
      }
      // if (r === 1 && p == 1) {
      //   await this.rightarrowToCalenderC.click();
      //   await web.pause(1000);
      // }
      // if (r !== 1 && p == 1) {
      //   await this.leftarrowToCalenderC.click();
      //   await web.pause(1000);
      // }
    }
  }
  async dateSelect({Date}) {
    var stop;
    //await this.presentfromdateC.click(); // select 
    console.log("rgbieqewbfi34524",Date);
    const calendar = await this.DateValuesC; // Replace 'table-selector' with the selector for the table element
    const rows = await calendar.$$("div"); // Get all rows in the table
    //const rty = await rows.getText();
   // console.log("dateSelect before first loop", rty);

    for (const row of rows) {
      const cells = await row.$$("button"); // Get all cells in the row
      console.log("insode ")
      for (const cell of cells) {
        const value = await cell.getText(); // Get the text value of the cell
        console.log("cells , value", value);
        if (value === Date) {
          await cell.click(); // Click the cell
         stop = true;
          console.log("dateSelect  first break loop",Date);
          break;
        }
      }
      if (stop) {
        console.log("dateSelect  second break loop", stop);

        break;
      }
    }
    console.log("dateSelect ended", stop);
    //await web.pause(8000);
  }
  async monthfall(monthu) {
    console.log("Tkdsklkdnvlsnlsn");
    //const data = this.validateVmsVisit()
    let x = monthu;
    console.log(x);
    let n;
    if (x === "January") {
      n = 1;
    }
    if (x === "February") {
      n = 2;
    }
    if (x === "March") {
      n = 3;
    }
    if (x === "April") {
      n = 4;
    }
    if (x === "May") {
      n = 5;
    }
    if (x === "June") {
      n = 6;
    }
    if (x === "July") {
      n = 7;
    }
    if (x === "August") {
      n = 8;
    }
    if (x === "September") {
      n = 9;
    }
    if (x === "October") {
      n = 10;
    }
    if (x === "November") {
      n = 11;
    }
    if (x === "December") {
      n = 12;
    }
    console.log(n);
    //await this.searchCalBtnC.click();
    return { n, x };
  }
  async calenders({Month,Date,GMonth,Hr,Min}) {
    console.log("calendar entered clickFunction");
    let n,
      r = 2;
    const z = await this.monthfall(Month);
    const w = z.n;
    console.log(w);
    // const x= await this.GMonth;
    var f = await this.monthfall(GMonth);
    var q = f.n;
    var u = w - q;
    await this.clickFunction(w, q, u, r, z, f, n);
    await this.dateSelect({Date});
    await this.timeSelect({Hr,Min});
  }
  async timeSelect({Hr,Min})
  {
    var stop;
    //await this.presentfromdateC.click(); // select 
    console.log("rgbieqewbfi34525",Hr,Min);
    const time = await this.TimePickerC; // Replace 'table-selector' with the selector for the table element
    const rowws = await time.$$("div"); // Get all rows in the table
    //const rty = await rows.getText();
   // console.log("dateSelect before first loop", rty);

    for (const roww of rowws) {
      const cells = await roww.$$("span"); // Get all cells in the row
      console.log("insode ")
      for (const cell of cells) {
        const value = await cell.getText(); // Get the text value of the cell
        console.log("cells , value", value);
        if (value === Hr) {
          await cell.click(); // Click the cell
         stop = true;
          console.log("dateSelect  first break loop",Date);
          break;
        }
      }
      if (stop) {
        console.log("dateSelect  second break loop", stop);

        break;
      }
    }
    console.log("dateSelect ended", stop);
    //await web.pause(8000);
  }
  // async readOnly()
  // {
  //   console.log('In read only mode');
  //   try {
  //     const readOnlyInputSelector = "((//input[@id=':ro:'])[1])"; // Replace with the actual selector

  //     // Use JavaScript to remove the 'readonly' attribute
  //     await web.execute((selector) => {
  //       const readOnlyInput = document.querySelector(selector);
  //       if (readOnlyInput) {
  //         readOnlyInput.removeAttribute('readonly');
  //       }
  //     }, readOnlyInputSelector);
  
  //     // Now, you can interact with the editable input field
  //     await web.setValue(readOnlyInputSelector, '10/11/2023 03:10 AM'); // Replace with the desired new value
  
  //     // Optionally, perform other actions or assertions
  //     // ...
  
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // }
 async Ui() {
  const data = await this.readSpreadsheet();
  const GMonth = data.Month;
  const Date = data.Date;
  const Hr = data.Hr;
  const Min = data.Min;
  console.log("Date: ", Date , "Month: ",GMonth);
  await web.url("https://iess-vms.web.app/");
  await this.EmailFieldC.setValue("deepan.r@katomaran.tech");
  await this.PasswordFieldC.setValue("6380276117");
  await this.LoginBtnC.click();
  await web.pause(1000);
  await this.ReportsBtnC.click();
  await web.pause(1000);
  await this.CreateIncdC.click();
  await web.pause(1000);
  await this.IncdDateC.click();
  await web.pause(1000);
  const MonthText = await this.MonthFieldC.getText();
  var [Month,year]= MonthText.split(" ");
  console.log("Month :",Month);
  await this.calenders({Month,Date,GMonth,Hr,Min});
  
  //await this.readOnly();
  await web.pause(8000);

 }
 }
export default new FMS();


