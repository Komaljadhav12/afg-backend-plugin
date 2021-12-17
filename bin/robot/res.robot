*** Settings ***
#Section to import libraries and other dependent modules
Library         Selenium2Library
Library         String
Library         Dialogs
Library         DateTime
Library         BuiltIn
Library         OperatingSystem
Library         Collections
Library         RequestsLibrary
#Variables       ${EXECDIR}/Variable Files/var.yaml
#Resource		${EXECDIR}/Res/res.robot
Resource        ../Res/res.robot
Variables       ../VariableFiles/var.py



*** Keywords ***

Login To Google
    open browser  ${URL}  ${BROWSER_TYPE}
    go to  ${URL}
    sleep  2.0
    Maximize Browser Window
    Reload Page
    wait until element is enabled  ${SEARCH_TEXTBOX}  20.0  error=Couldn't Reach the CLM Site

Close The Browser
    close browser