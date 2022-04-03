# data-extraction-for-the-peoples-newsroom-of-TBIJ

The take-home challenge for the People’s Newsroom team at The Bureau of Investigative Journalism (TBIJ) is to combine datasets and produce at least one interesting finding! 

This may sound simple but a lot of work we do as data journalists at TBIJ is wrangling publicly available information so that it can be analysed from a public interest lens and work to make it more accessible for the public. That’s what we’re hoping to see you do in this exercise.

Part 1: handling and extracting relevant information from a large data file

Download the dataset of all schools in the UK. Under > Explore data and files > List of all supporting files > School level underlying data 2021 (csv, 10 Mb).

From that file, we would like you to build a local authority level* spreadsheet with...
the total number of schools in the local authority
the total number of schools with "SEN or resourced provisions units" (those are the ones marked with a "1" in either the “SEN_Unit” or “RP_Unit” column)
The total number of pupils (from the “Total pupils” column)
The total number of pupils with and EHC plan (from the “EHC plan” column)

*When we say ‘local authority level’, we mean that each row in the final spreadsheet should represent one local authority. The local authorities to include are the ones from the “la_name” column of the dataset.

Part 2: combining multiple datasets and standardising

Using the two data files found on this page:
“Special schools and colleges approved under section 41 in England and Wales”
“Independent special schools in England including non-maintained special schools (and excluding section 41 approved special schools and colleges)”

Add the total number of special schools in each local authority to the dataset you created in Part 1.

Note: The spelling of the local authority names won’t always match and these files also include irregular names that will need interrogating before determining their local authority. We would like these irregular cases to be handled within the code. Do document and explain how those cases are handled and why! 

Part 3: Analyse and present a finding


Have a look around in the dataset - perhaps do some basic analysis - and see what interesting things emerge from the dataset or from the process. Ultimately what you need to do now is articulate what you see as the one significant finding (in no more than 50 words). 
