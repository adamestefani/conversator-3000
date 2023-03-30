@echo off

for /f "tokens=1*" %%a in ("%*") do (
    set par1=%%a
    set par2=%%b
)
set "par1=%par1:^=^^%"
set "par1=%par1:&=^&%"
set "par1=%par1:|=^|%"
set "par1=%par1:<=^<%"
set "par1=%par1:>=^>%"
set "par1=%par1:?=^?%"
set "par1=%par1:"=%"
echo Escaped par1: %par1%

set "par2=%par2:^=^^%"
set "par2=%par2:&=^&%"
set "par2=%par2:|=^|%"
set "par2=%par2:<=^<%"
set "par2=%par2:>=^>%"
set "par2=%par2:?=^?%"
set "par2=%par2:"=%"
echo Escaped par2: %par2%

echo %par1% > curl-output.txt
curl http://localhost:3080/send-message-openai --header "Content-Type: application/json" --data "{\"username\": \"%par1%\", \"inputMessage\": \"%par2%\"}" >> curl-output.txt
