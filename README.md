# 🔖 data-extraction-for-the-peoples-newsroom-of-TBIJ 📚

# ✨ The bureau of Investigative Journalist 👩‍💼🎤📖

📊 The take-home challenge for the People’s Newsroom team at The Bureau of Investigative Journalism (TBIJ) is to combine datasets and produce at least one interesting finding! 📉

This may sound simple but a lot of work we do as data journalists at TBIJ is wrangling publicly available information so that it can be analysed from a public interest lens and work to make it more accessible for the public. That’s what we’re hoping to see you do in this exercise.

# 💠 Part 1: handling and extracting relevant information from a large data file 📉

Download the dataset of all schools in the UK. Under > Explore data and files > List of all supporting files > School level underlying data 2021 (csv, 10 Mb).

#### From that file, we would like you to build a local authority level* spreadsheet with...
- the total number of schools in the local authority
- the total number of schools with "SEN or resourced provisions units" (those are the ones marked with a "1" in either the “SEN_Unit” or “RP_Unit” column)
- The total number of pupils (from the “Total pupils” column)
- The total number of pupils with and EHC plan (from the “EHC plan” column)

###### *When we say ‘local authority level’, we mean that each row in the final spreadsheet should represent one local authority. The local authorities to include are the ones from the “la_name” column of the dataset.

### 🧑‍💻 Screenshot of terminal from example of some extracted data:

<img width="274" alt="Screenshot 2022-04-04 at 00 50 47" src="https://user-images.githubusercontent.com/45575016/161454422-9a4a4566-ef35-4d3d-9ed3-d2427ec60dbd.png">

# 💠 Part 2: combining multiple datasets and standardising

#### Using the two data files found on this page:
 - “Special schools and colleges approved under section 41 in England and Wales”
 - “Independent special schools in England including non-maintained special schools (and excluding section 41 approved special schools and colleges)”

- [ ] Add the total number of special schools in each local authority to the dataset you created in Part 1.

###### Note: The spelling of the local authority names won’t always match and these files also include irregular names that will need interrogating before determining their local authority. We would like these irregular cases to be handled within the code. Do document and explain how those cases are handled and why! 

#### 🧑‍🎓 screenshot from terminal view on extracted data from files of “Special schools and colleges approved under section 41 in England and Wales”

<img width="418" alt="Screenshot 2022-04-05 at 14 13 25" src="https://user-images.githubusercontent.com/45575016/161762864-e9e06ccb-cf72-4405-801f-5cf15affcb5a.png">

### 🏫 Screenshot on data file and extracted parts that seemed necessary to analyse:

<img width="527" alt="Screenshot 2022-04-05 at 15 28 52" src="https://user-images.githubusercontent.com/45575016/161777722-ee54132f-7881-411a-9f97-d984d0eb44d8.png">


# 💠 Part 3: Analyse and present a finding


###### Have a look around in the dataset - perhaps do some basic analysis - and see what interesting things emerge from the dataset or from the process. Ultimately what you need to do now is articulate what you see as the one significant finding (in no more than 50 words). 

# My Official Analysis and Finding from the Data

## What intrigued me the most from when I gathered my findings of the dataset was the initial amount of schools that run SEN Units, these are in place for a specific purpose to help to students with special needs. 

## The SEN_UNIT included information that if a school contained these facilities in the certain local areas in the country.
