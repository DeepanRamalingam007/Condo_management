import { keyPathFile } from "../../Configuration/keyPathFile";

const { WebDriver } = require("selenium-webdriver");
const { remote } = require("webdriverio")
const { google } = require("googleapis");
const puppeteer = require("puppeteer");

const Lastlocation = "(/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/div[3]/div[1]/div[2])";
const LNPRRecords = "(//span[normalize-space()='LNPR Records'])";
const ParkingManagement = "(//span[normalize-space()='Parking Management'])";
class Cams {
  get LastlocationC() {
    web.$(Lastlocation).waitForDisplayed({ timeout: 10000 });
    return web.$(Lastlocation);
  }
  get ParkingManagementC() {
    web.$(ParkingManagement).waitForDisplayed({ timeout: 10000 });
    return web.$(ParkingManagement);
  }
  get LNPRRecordsC() {
    web.$(LNPRRecords).waitForDisplayed({ timeout: 10000 });
    return web.$(LNPRRecords);
  }
  get inputUsername() {
    browser.$("#user_name").waitForExist({ timeout: 10000 });
    return $("#user_name");
  }
  get inputPassword() {
    browser.$("#password").waitForExist({ timeout: 10000 });
    return $("#password");
  }
  get btnSubmit() {
    browser.$("//button[@type='submit']").waitForExist({ timeout: 10000 });
    return $("//button[@type='submit']");
  }
  async readSpreadsheetmap() {
     //console.log("ksjbvdsbvksbvksbvksbvdksbvks");
     var sheetnaMes;

    
      const auth = new google.auth.GoogleAuth({
        keyFile: "C:\\VMS_V3\\Video_Request\\credentials.json",
        scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
      });
      const client = await auth.getClient();

      const sheets = google.sheets({ version: "v4", auth });

      const spreadsheetId = "10ooNE9CRRBGcjXQuATorVlDemK6v2tl6eCb4dNkiKE4";
      const response = await sheets.spreadsheets.get({
        spreadsheetId,
        fields: 'sheets.properties.title',
      });
      const sheetNames = response.data.sheets.map((sheet) => sheet.properties.title);
     sheetnaMes = sheetNames
      console.log("yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy");
      console.log(sheetnaMes);

      var cams_count,
      urls = [],
      j = 0;
      for (const sheetnaMe of sheetnaMes) {
        console.log(sheetnaMe);
        cams_count = sheetnaMe;
        urls[j] =  `https://${cams_count}.smartcondo.app/`;
        j = j + 1;
      }
      console.log("for loop finished");
      console.log(urls);
  
    
     console.log(sheetnaMes);
     console.log("dkfbd");

     return {sheetnaMes,urls};
    }
  // async readSpreadsheet(i) {
  //  // var i;
  //   console.log(i,"hewguvdbwivbdiwviwb");
  //   try {
  //     const auth = new google.auth.GoogleAuth({
  //       keyFile: "C:\\VMS_V3\\Video_Request\\credentials.json",
  //       scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
  //     });
  //     const client = await auth.getClient();

  //     const sheets = google.sheets({ version: "v4", auth });

  //     const spreadsheetId = "1JZf6xE5PXiJUInwk0CdJim8UTwI0lXcNvekftsGn3Wc";
  //     //console.log("Duva123Duva");
  //     if (i==0)
  //     {
  //       console.log("Waterview cameras");
  //     const range = "BMSread!B11:B17";
  //     const response = await sheets.spreadsheets.values.get({
  //       spreadsheetId,
  //       range,
  //     });
  //     const rows = response.data.values;
  //     var cams_count,
  //       row,
  //       count = [],
  //       j = 0;
  //     for (row of rows) {
  //       cams_count = row;
  //       count[j] = cams_count;
  //       j = j + 1;
  //     }
  //   }
  //   if (i==1)
  //     {
  //       console.log("MBR cameras");
  //     const range = "BMSread!B18:B25";
  //     const response = await sheets.spreadsheets.values.get({
  //       spreadsheetId,
  //       range,
  //     });
  //     const rows = response.data.values;
  //     var cams_count,
  //       row,
  //       count = [],
  //       j = 0;
  //     for (row of rows) {
  //       cams_count = row;
  //       count[j] = cams_count;
  //       j = j + 1;
  //     }
  //   }
  //   if (i==2)
  //     {
  //       console.log("Casa cameras");
  //     const range = "BMSread!B26:B31";
  //     const response = await sheets.spreadsheets.values.get({
  //       spreadsheetId,
  //       range,
  //     });
  //     const rows = response.data.values;
  //         //console.log(rows);
  //     var cams_count,
  //       row,
  //       count = [],
  //       j = 0;
  //     for (row of rows) {
  //       cams_count = row;
  //       count[j] = cams_count;
  //       j = j + 1;
  //     }
  //   }
  //   } catch (err) {
  //     console.error("Error reading spreadsheet:", err);
  //   }
  //   count = count.flat();
  //   console.log('Array inside spreadsheet "Count" array');
  //   console.log(count);
  //   console.log("Count array finished");
  //   return count;
  // }
  async unique(counts, count) {
    console.log("1fjdvn");
    var g=1
    console.log("Inside Unique");
    var unique1 = count.filter((o) => counts.indexOf(o) === -1);
    var unique2 = counts.filter((o) => count.indexOf(o) === -1);
    var unique = unique1.concat(unique2);
    var uniques = unique.flat();
    //console.log(uniques);
    console.log(uniques, "This is the unique value maruhtu");
    for (const unique of uniques) {
      //var g;
      console.log(unique, "This is the inside unique value");
      const { google } = require("googleapis");
      const sheets = google.sheets("v4");
      const auth = await google.auth.getClient({
        scopes: ["https://www.googleapis.com/auth/spreadsheets"],
        // add the path to your service account credentials JSON file
        keyFile: "C:\\VMS_V3\\Video_Request\\credentials.json",
      });
      const spreadsheetId = "1JZf6xE5PXiJUInwk0CdJim8UTwI0lXcNvekftsGn3Wc";
      const range = "Unique!A1:A35";
      const values = [[g,unique]];
       g=g+1;
      const result = await sheets.spreadsheets.values.append({
        auth,
        spreadsheetId,
        range,
        valueInputOption: "USER_ENTERED",
        resource: {
          values,
        },
      });
      console.log("Unique finished");
    }
    return unique;
  }
  async append(h, value, value1) {
    var h,
      value,
      value1,
      counts = [];
    const { google } = require("googleapis");
    const sheets = google.sheets("v4");
    const auth = await google.auth.getClient({
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
      // add the path to your service account credentials JSON file
      keyFile: "C:\\VMS_V3\\Video_Request\\credentials.json",
    });

    const spreadsheetId = "1JZf6xE5PXiJUInwk0CdJim8UTwI0lXcNvekftsGn3Wc";
    const range = "LastLocation!A1:E35";
    const values = [[h, value1, value]];
    const result = await sheets.spreadsheets.values.append({
      auth,
      spreadsheetId,
      range,
      valueInputOption: "USER_ENTERED",
      resource: {
        values,
      },
    });

    console.log('array inside append fn "counts"');
    console.log(counts);
    console.log("array inside append is finished");
    return counts;
  }
  async dateTime(sheetnaMe) {
    // const data = await this.Camhealth();
    // var sheetnaMe = data.sheetnaMe
    const now = new Date(); // create a new Date object with the current date and time
    const options = {
      timeZone: "Asia/Singapore",
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    };
    const singaporeDateTime = now.toLocaleString("en-SG", options); // get the current date and time as a string in Singapore timezone
    console.log(` ${singaporeDateTime}.`);
    console.log(singaporeDateTime);
    const { google } = require("googleapis");
    const sheets = google.sheets("v4");
    const auth = await google.auth.getClient({
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
      // add the path to your service account credentials JSON file
      keyFile: "C:\\VMS_V3\\Video_Request\\credentials.json",
    });
   const spreadsheetId = "1JZf6xE5PXiJUInwk0CdJim8UTwI0lXcNvekftsGn3Wc";
    const range = "LastLocation!A1:E35";
    const values = [[sheetnaMe,singaporeDateTime]];
    const result = await sheets.spreadsheets.values.append({
      auth,
      spreadsheetId,
      range,
      valueInputOption: "USER_ENTERED",
      resource: {
        values,
      },
    });
    // const spreadsheeId = "1JZf6xE5PXiJUInwk0CdJim8UTwI0lXcNvekftsGn3Wc";
    // const range = "LastLocation!A1:E35";

    // const values = [[singaporeDateTime]];
    // const result = await sheets.spreadsheets.values.append({
    //   auth,
    //   spreadsheeId,
    //   range,
    //   valueInputOption: "USER_ENTERED",
    //   resource: {
    //     values,
    //   },
    // });
  }
  async dateTimeb(sheetnaMe) {
    const now = new Date(); // create a new Date object with the current date and time
    const options = {
      timeZone: "Asia/Singapore",
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    };
    const singaporeDateTime = now.toLocaleString("en-SG", options); // get the current date and time as a string in Singapore timezone
    console.log(` ${singaporeDateTime}.`);
    console.log(singaporeDateTime);
    const { google } = require("googleapis");
    const sheets = google.sheets("v4");
    const auth = await google.auth.getClient({
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
      // add the path to your service account credentials JSON file
      keyFile: "C:\\VMS_V3\\Video_Request\\credentials.json",
    });

    const spreadsheetId = "1JZf6xE5PXiJUInwk0CdJim8UTwI0lXcNvekftsGn3Wc";
    const range = "Unique!A1:E35";
    const values = [[sheetnaMe,singaporeDateTime]];
    const result = await sheets.spreadsheets.values.append({
      auth,
      spreadsheetId,
      range,
      valueInputOption: "USER_ENTERED",
      resource: {
        values,
      },
    });
  }
  async sheetnames(){
    const data = await this.readSpreadsheetmap();
    var sheetnaMe;
    const sheetnaMes = data.sheetnaMes
    console.log(sheetnaMes);
    console.log("adfsghu765rwegrhty");
    for (sheetnaMe of sheetnaMes) {
      //await web.newWindow(urls[i], { tab: true });
      console.log(sheetnaMe);
      console.log("inside sheetnaMess");
        const auth = new google.auth.GoogleAuth({
          keyFile: "C:\\VMS_V3\\Video_Request\\credentials.json",
          scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
        });
        const client = await auth.getClient();
        const sheets = google.sheets({ version: "v4", auth });
        const spreadsheetId = "10ooNE9CRRBGcjXQuATorVlDemK6v2tl6eCb4dNkiKE4";
        const range = `${sheetnaMe}!B1:B11`;
        const respons = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range,
    });
    const nums = respons.data.values;
        //console.log(rows);
    var cams_count,
      num,
      count = [],
      j = 0;
    for (num of nums) {
      console.log(num);
      cams_count = num;
      count[j] = cams_count;
      j = j + 1;
    }
    count = count.flat();
    console.log('Array inside spreadsheet "Count" array');
    console.log(count);
    console.log("Count array finished");
    }
    console.log(count);
    return {count,sheetnaMe};
  }
//   async ttf(){
//     await this.Camhealth();
//   const tabs = [
//     {
      
//       url: 'https://marinabay.smartcondo.app/',
//       func: async (web) => {
//         await web.url('https://marinabay.smartcondo.app/');
//         await this.Camhealth();
//          // Do something on the first tab
//       }
//     },
//     {
//       url: 'https://casamerah.smartcondo.app/',
//       func: async (web) => {
        
//         await this.Camhealth();
//         // Do something on the second tab
//       }
//     },
//     {
//       url: 'https://waterview.smartcondo.app/',
//       func: async (web) => {
//         await web.url('https://waterview.smartcondo.app/');
//         await this.Camhealth();
//         // Do something on the third tab
//       }
//     }
//   ];
// for (const tab of tabs) {
//   await web.newWindow(tab.url, { tab: true });
// await tab.func(web);
// }
//  }


 async Camhealth(count) {

  const data = await this.readSpreadsheetmap();
   const urls = data.urls
  for (var i=0; i<urls.length; i++) {  //urls for loop 
  if (i==0)
  {
     await web.url(urls[i]);
  }
  else
  {
    await web.newWindow(urls[i], { tab: true });
  }
    const sheetnaMe = data.sheetnaMes[i]; //sheet name is getting iterated over
        const auth = new google.auth.GoogleAuth({
          keyFile: "C:\\VMS_V3\\Video_Request\\credentials.json",
          scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
        });
        const client = await auth.getClient();
        const sheets = google.sheets({ version: "v4", auth });
        const spreadsheetId = "10ooNE9CRRBGcjXQuATorVlDemK6v2tl6eCb4dNkiKE4";
        const range = `${sheetnaMe}!B1:B11`;
        const respons = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range,
    });
    const nums = respons.data.values;
    var num,
      count = [],
      j = 0;
    for (num of nums) {  //Camera list given in spread sheet is getting readed and iterated in an array "count"
      count[j] = num;
      j = j + 1;
    }
    count = count.flat();
   
    var h = 0,u = 0,r = 0,counts = [];
    await this.inputUsername.setValue("deepan.r@katomaran.tech");
    await this.inputPassword.setValue("6380276117");
    await this.btnSubmit.click();
    await web.pause(1000);
    await this.ParkingManagementC.click();
    await web.pause(1000);
    await this.LNPRRecordsC.click();
    await web.pause(8000);
    const camList = await this.LastlocationC;
    const camLists = await camList.getText();
    console.log(camLists);
    const rows = await camList.$$("div"); // Get all rows in the table
    await this.dateTime(sheetnaMe); // Singapore date and time with Condo name
    await web.pause(2000);
    console.log(rows,"rows"); //
    for (const row of rows) {    // Getting row of the last location table
      await web.pause(1000);
      const cells = await row.$$("span"); // Getting the cells of the last location table
      console.log(cells,"cells"); //
      for (const cell of cells) {
        await web.pause(1000);
        console.log(u,"value of u after for loop");
        var u;
        console.log(u,"value of u");
        if (u % 2 == 0) {
          var value1 = await cell.getText(); //Splitting Value1 as odd (i.e) numbers count from last location
          u = 1;
        } else {
          var value = await cell.getText(); //Splitting Value as even (i.e) Camera names from last location
          u = 2;
        }
        console.log(h,",", value1,",", value);
    console.log("done it for",h, "time","insided");
        if (u === 2) {
          var h = h + 1;
          counts[r] = value;
          var r = r + 1;
          await this.append(h, value, value1); //h = S.No, value1 = Number of count, value = Camera names
          console.log(h,",", value1,",", value);
    console.log("done it for",h, "time");
        }
      }
    } 
      var counts = counts.flat();   
      await this.dateTimeb(sheetnaMe); // Singapore date and time with Condo name
    await this.unique(counts, count); // Identifying the missed cams from last location given in spreadsheet
    }
   }
 }
export default new Cams();





