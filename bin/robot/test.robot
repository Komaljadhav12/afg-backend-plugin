*** Settings ***

#Section to import libraries and other dependent modules
Library         Selenium2Library
Library         String
Library         Dialogs
Library         DateTime
Library         BuiltIn
Library         Collections
Library         OperatingSystem
Library         RequestsLibrary
#Resource        ${EXECDIR}/Res/res.robot
#Variables       ${EXECDIR}/VariableFiles/var.py
Resource        ../Res/res.robot
Variables       ../VariableFiles/var.py

Test Timeout        10 minutes

*** Test Cases ***

Test 001: Login to server
    [Documentation]  Verify Login to Particular URL
    [Tags]  URL
    Login To Google

Test 002: close the browser
    [Documentation]  Verify Login to Particular URL
    [Tags]  Web
    Close The Browser