//**************** JavaScript will go here **********************//

// manually downloading the csv file. So download as spreadsheet and then save as csv.

//************** Most importantly I will need to the csv file will need to be kept within a folder next to my js file ************/
// file system module.
// looking into fs node.js.
// i'll be dealing with a file path, so the path module is needed.
// then using file module and path, this will bring in the data.
// once I have used both then I should be able to console log to see it all in string form.
// then I can iterate through and extract the chosen data as I see fit.
// because the data will be csv it'll be comma seperated values.
// in the function I will be able to split the lines - by splitting on the split("/n");
// I'll also be able to split the individual cells in each row by split(",")
// the individual values in each spreadsheet cell will be seperated by "|" the pipe seperated values.
// so I sub out the space for a comma or a pipe.
// in order to split the string and extract the values I need.

// Or I have determined that I could create a regex wich will extract parts of data needed.

// Once I npm init I can then create:
// example - const fs = require("fs")
// and example - const path = require("path")
// these will be displayed at the top of my JavaScript file.

//**************** Importing the dependencies *******************/

// because I already have node.js I can use thies line of code instantly.
// requiring the the Node.js fs modules
// const fs = require('fs');
// console.log(fs)

// // picking up the file path.
// // The Path module provides a way of working with directories and file paths.
// const path = require('path');
// //console.log(path)
// let filename = path.parse('/sen_school_level_underlying_data.csv');
// //console.log(filename);


// //*********************** regex version of the function *************************//

// // const csvParse = (filename) => {
    
// //     console.log(filename)

// //     this.rows = [];

// //     let fieldRegEx = new RegExp('(?:\s*"((?:""|[^"])*)"\s*|\s*((?:""|[^",\r\n])*(?:""|[^"\s,\r\n]))?\s*)(,|[\r\n]+|$)', "g"); 
// //     console.log(fieldRegEx);
// //     let row = [];
// //     console.log(row);
// //     let currMatch = null;
    

// //     while (currMatch = fieldRegEx.exec(this.filename))
// //     {
// //         row.push([currMatch[1], currMatch[2]].join('')); // concatenate with potential nulls

// //         if (currMatch[3] != ',')
// //         {
// //             this.rows.push(row);
// //             row = [];
// //         }

// //         if (currMatch[3].length == 0)
// //             break;
// //     }
// //     console.log(currMatch)
// //     return currMatch;
// // }

// // csvParse(filename);

// //******************* function to extract and add into an object *****************//

// // 1. the total number of schools in the local authority.
// // 2. the total number of schools with "SEN or resourced provisions units" (those are the ones marked with a "1" in either the “SEN_Unit” or “RP_Unit” column)
// // 3. The total number of pupils (from the “Total pupils” column).
// // 4. The total number of pupils with and EHC plan (from the “EHC plan” column).

// const csvToObjs = (fs) => {
    
//     // let lines = filename.split(/\r\n|\n/);
//     //filename = document.location + '';
//     //console.log(filename);


//     const result = typeof fs === 'string' ? fs.split('/n') : '';
//     console.log(result); 


//     // let lines = filename.split('/n');
//     // console.log(lines);
//     let piping = result.split('|')
//     //console.log(piping);
//     // console.log(typeof document.location);
//     let [headings, ...entries] = piping;
//     //console.log([headings, ...entries])
//     headings = headings.split(',');
//     let objs = [];
//     entries.map(entry => {
//         obj = entry.split(',');
//         objs.push(Object.fromEntries(headings.map((head, i) => [head, obj[i]])));
//     })
//     return objs;
// }

// csvToObjs(fs)

// module.exports = csvToObjs


// // module.exports = csvParse

// // local authority levels

//**************************** OFFICIAL CODE BEING USED FOR EXTRACTING DATA ****************************//

// Import dependencies
const fs = require("fs");
const csv = require("csvtojson");
const { Parser } = require("json2csv");

(async () => {

    // Load the la data of schools
    const schoolsInUK = await csv().fromFile("sen_school_level_underlying_data.csv");
    // Show the schools in uk.
    //console.log(schoolsInUK);

    let iss = await csv().fromFile("Approved_S41_Full_List__updated_22_03_22.csv");
    //console.log(iss)

    let indSpec = await csv().fromFile("IndSpec_not_s41.csv");
    console.log(indSpec)

    // Saved the data that is needed
    const schoolsInCsv = new Parser({ fields: ["la_name", "SEN_Unit", "RP_Unit", "Total pupils", "EHC plan"] }).parse(schoolsInUK);
    fs.writeFileSync("sen_school_level_underlying_data.csv", schoolsInCsv);
    //console.log(schoolsInCsv)

     const issSchools = new Parser({ fields: ["field2", "field3", "field5", "field6"] }).parse(iss);
      fs.writeFileSync("Approved_S41_Full_List__updated_22_03_22.csv", issSchools);
    //console.log(issSchools)

    //Independent special schools in England including non-maintained special schools (and excluding section 41 approved special schools and colleges)
    const indSpecSchools = new Parser({fields: ["GIAS reference", "Local Authority", "School Name", "Section41 Approval"]}).parse(indSpec);
    fs.writeFileSync("IndSpec_not_s41.csv", indSpecSchools);

    // Promise.all([
    //     schoolsInCsv.csv("sen_school_level_underlying_data.csv"),
    //     schoolsInCsv.csv("Approved_S41_Full_List__updated_22_03_22.csv"),
    //     schoolsInCsv.csv("IndSpec_not_s41.csv")
    // ]).then(function(allData) {
    //     console.log(schoolsInCsv.merge(allData));
    // });


})();





// // stage two will be: 

// /*
// Part 2: combining multiple datasets and standardising
// Using the two data files found on this page:
// “Special schools and colleges approved under section 41 in England and Wales”
// “Independent special schools in England including non-maintained special schools (and excluding section 41 approved special schools and colleges)”
// */








// // for this second stage I am thinking of using:

// // **************** Filter Higher Order Function ********************** //








// ***************** Stage Three *********************** //

/*
Part 3: Analyse and present a finding


Have a look around in the dataset - perhaps do some basic analysis - and see what interesting things emerge from the dataset or from the process. Ultimately what you need to do now is articulate what you see as the one significant finding (in no more than 50 words). 

*/









