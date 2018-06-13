var questions = {
  "apiVersion" : "0.1",

  "A0": {
    "id": "A0",
    "title": "Respondent Information (Not for publication)",
    "text": " ",
    "questions": {
      "q1": "Name",
      "q2": "Title",
      "q3": "Office",
      "q4": "Mailing Address",
      "q5": "City/State/Zip/Country",
      "q6": "Phone",
      "q7": "Fax",
      "q8": "E-mail Address",
      "q9": "Are your responses to the CDS posted for reference on your institution's Web site?",
      "q10": "If yes, please provide the URL of the corresponding Web page."
    }
  },
  "A1": {
    "id": "A1",
    "title": "Address Information",
    "text": " ",
    "questions": {
      "q1": "Name of College/University",
      "q2": "Mailing Address",
      "q3": "Mailing City/State/Zip/Country",
      "q4": "Street Address (if different)",
      "q5": "Street City/State/Zip/Country",
      "q6": "Main Phone Number",
      "q7": "WWW Home Page Address",
      "q8": "Admissions Phone Number",
      "q9": "Admissions Toll-Free Phone Number",
      "q10": "Admissions Office Mailing Address",
      "q11": "City/State/Zip/Country",
      "q12": "Admissions Fax Number",
      "q13": "Admissions E-mail Address",
      "q14": "If there is a separate URL for your school’s online application, please specify:",
      "q15": "If you have a mailing address other than the above to which applications should be sent, please provide:"
    }
  },
  "A2": {
    "id": "A2",
    "title": "Source of institutional control",
    "text": " ",
    "questions": {
      "q1": "Public",
      "q2": "Private",
      "q3": "Proprietary"
    }
  },
  "A3": {
    "id": "A3",
    "title": "Classify your undergraduate institution",
    "text": " ",
    "questions": {
      "q1": "Coeducational college",
      "q2": "Men's college",
      "q3": "Women's college"
    }
  },
  "A4": {
    "id": "A4",
    "title": "Academic year calendar",
    "text": " ",
    "questions": {
      "q1": "Semester",
      "q2": "Quarter",
      "q3": "Trimester",
      "q4": "4-1-4",
      "q5": "Continuous",
      "q6": "Differs by program (describe):",
      "q7": "Other (describe):"
    }
  },
  "A5": {
    "id": "A5",
    "title": "Degrees offered by your institution",
    "text": " ",
    "questions": {
      "q1": "Certificate",
      "q2": "Diploma",
      "q3": "Associate",
      "q4": "Transfer Associate",
      "q5": "Terminal Associate",
      "q6": "Bachelor's",
      "q7": "Postbachelor's certificate",
      "q8": "Master's",
      "q9": "Post-master's certificate",
      "q10": "Doctoral degree, research/scholarship",
      "q11": "Doctoral degree, professional practice",
      "q12": "Doctoral degree, other"
    }
  },
  "B1": {
    "id": "B1",
    "title": "Institutional Enrollment",
    "text": "Men and Women Provide numbers of students for each of the following categories as of the institution's official fall reporting date or as of October 15, 2017. Note: Report students formerly designated as “first professional” in the graduate cells.",
    "sections": {
      "undergraduate": {
        "section-text": "Undergraduate",
        "result-segments": [
          "Full-Time Men",
          "Full-Time Women",
          "Part-Time Men",
          "Part-Time Women"
        ],
        "questions" : {
          "q1": "Degree-seeking, first-time freshmen",
          "q2": "Other first-year, degree-seeking",
          "q3": "All other degree-seeking",
          "q4": "Total degree-seeking",
          "q5": "All other undergraduates enrolled in credit courses",
          "q6": "Total undergraduates"
        }
      },
      "graduate": {
        "section-text": "Graduate",
        "result-segments": [
          "Full-Time Men",
          "Full-Time Women",
          "Part-Time Men",
          "Part-Time Women"
        ],
        "questions" : {
          "q7": "Degree-seeking, first-time",
          "q8": "All other degree-seeking",
          "q9": "All other graduates enrolled in credit courses",
          "q10": "Total graduate"
        }
      },
      "totals": {
        "section-text": "Totals",
        "questions": {
          "q11": "Total all undergraduates",
          "q12": "Total all graduate",
          "q13": "Grand total all students"
        }
      }
    }
  },
    "B2": {
      "id": "B2",
      "title": "Enrollment by Racial / Ethnic Category",
      "text": "Provide numbers of undergraduate students for each of the following categories as of the institution's official fall reporting date or as of October 15, 2017. Include international students only in the category 'Nonresident aliens.' Complete the 'Total Undergraduates' column only if you cannot provide data for the first two columns. Report as your institution reports to IPEDS: persons who are Hispanic should be reported only on the Hispanic line, not under any race, and persons who are non-Hispanic multi-racial should be reported only under 'Two or more races.'",
      "result-segments": [
        "Degree-Seeking First-Time First-Year",
        "Degree-Seeking Undergraduates (include first-time first-year)",
        "Total Undergraduates (both degree- and non-degree-seeking)"
      ],
      "questions" : {
        "q1": "Nonresident aliens",
        "q2": "Hispanic or Latino",
        "q3": "Black or African American",        
        "q4": "White",
        "q5": "American Indian or Alaska native",
        "q6": "Asian",
        "q7": "Native Hawaiian or other Pacific Islander",
        "q8": "Two or more races",
        "q9": "Race and or ethnicity unknown",
        "q10": "Total",
      }
  },
  "B3": {
    "id": "B3",
    "title": "Persistence",
    "text": "Number of degrees awarded from July 1, 2016 to June 30, 2017",

    "questions" : {
      "q1": "Certificates / diplomas",
      "q2": "Associate degrees",
      "q3": "Bachelor's Degrees",
      "q4": "Postbachelor's certificates",
      "q5": "Master's degrees",
      "q6": "Post-Master's certificates",
      "q7": "Doctoral degrees - research / scholarship",
      "q8": "Doctoral degrees - professional practice",
      "q9": "Doctoral degrees - other",
    }
},
"B4": {
  "id": "B4",
  "title": "Graduation Rates - Bachelor's or Equivalent Institutions - Cohort 1",
  "text": "In the following section for bachelor’s or equivalent programs, please disaggregate the Fall 2010 and Fall 2011 cohorts (formerly CDS B4-B11) into four groups: • Students who received a Federal Pell Grant*  • Recipients of a subsidized Stafford Loan who did not receive a Pell Grant • Students who did not receive either a Pell Grant or a subsidized Stafford Loan • Total (all students, regardless of Pell Grant or subsidized loan status) *Students who received both a Federal Pell Grant and a subsidized Stafford Loan should be reported in the 'Recipients of a Federal Pell Grant' column. For each graduation rate grid below, the numbers in the first three columns for Questions A-G should sum to the cohort total in the fourth column (formerly CDS B4-B11).",
  
  "sections": {
    "cohort 1": {
      "section-text": "Cohort 1",

        "result-segments": [
          "Recipients of a Federal Pell Grant",
          "Recipients of a Subsidized Stafford Loan who did not receive a Pell Grant",
          "Students who did not receive either a Pell grant or a Subsidized Stafford Loan",
          "Total"
        ],
        "questions" : {
          "q1": "Initital cohort of first-time, full-time bachelor's (or equivalent) degree seeking undergraduate-students",
          "q2": "Of the initial cohort, how many did not persist and did not graduate for the following reasons: deceased, permanently disabled, armed forces, foreign aid service of the federal government, or official church missions; total allowable exclusions",
          "q3": "Final cohort, after adjusting for allowable exclusions",
          "q4": "How many completed the program in four years or less",
          "q5": "How many completed the program in more than four years but in five years or less",
          "q6": "How many completed the program in more than five years but in six years or less",
          "q7": "Total graduating within six years",
          "q8": "Six-year graduation rate for cohort"
        }
      },

      "section-text": "Cohort 2",

      "result-segments": [
        "Recipients of a Federal Pell Grant",
        "Recipients of a Subsidized Stafford Loan who did not receive a Pell Grant",
        "Students who did not receive either a Pell grant or a Subsidized Stafford Loan",
        "Total"
      ],
      "questions" : {
        "q9": "Initital cohort of first-time, full-time bachelor's (or equivalent) degree seeking undergraduate-students",
        "q10": "Of the initial cohort, how many did not persist and did not graduate for the following reasons: deceased, permanently disabled, armed forces, foreign aid service of the federal government, or official church missions; total allowable exclusions",
        "q11": "Final cohort, after adjusting for allowable exclusions",
        "q12": "How many completed the program in four years or less",
        "q13": "How many completed the program in more than four years but in five years or less",
        "q14": "How many completed the program in more than five years but in six years or less",
        "q15": "Total graduating within six years",
        "q16": "Six-year graduation rate for cohort"
      }
    }

  },

  
  "B22": {
    "id": "B22",
    "title": "Retention Rates",
    "text": "Report for the cohort of all full-time, first-time bachelor’s (or equivalent) degree-seeking undergraduate students who entered in Fall 2016 (or the preceding summer term). The initial cohort may be adjusted for students who departed for the following reasons: death, permanent disability, service in the armed forces, foreign aid service of the federal government or official church missions. No other adjustments to the initial cohort should be made.",

    "questions" : {
      "q1": "For the cohort of all full-time bachelor’s (or equivalent) degree-seeking undergraduate students who entered your institution as freshmen in Fall 2016 (or the preceding summer term), what percentage was enrolled at your institution as of the date your institution calculates its official enrollment in Fall 2017?"
    }
},

  "C1": {
    "id": "C1",
    "title": "Applications",
    "text": "First-time, first-year, (freshmen) students: Provide the number of degree-seeking, first-time, first-year students who applied, were admitted, and enrolled (full- or part-time) in Fall 2017. Include early decision, early action, and students who began studies during summer in this cohort. Applicants should include only those students who fulfilled the requirements for consideration for admission (i.e., who completed actionable applications) and who have been notified of one of the following actions: admission, nonadmission, placement on waiting list, or application withdrawn (by applicant or institution). Admitted applicants should include wait-listed students who were subsequently offered admission.",

    "questions" : {
      "q1": "Total first-time, first-year (freshman) men who applied",
      "q2": "Total first-time, first-year (freshman) women who applied",
      "q3": "Total first-time, first-year (freshman) men who were admitted",
      "q4": "Total first-time, first-year (freshman) women who were admitted",
      "q5": "Total full-time, first-time, first-year (freshman) men who enrolled",
      "q6": "Total part-time, first-time, first-year (freshman) men who enrolled",
      "q7": "Total full-time, first-time, first-year (freshman) women who enrolled",
      "q8": "Total part-time, first-time, first-year (freshman) women who enrolled"
    }
}

};