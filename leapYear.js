var year = prompt("Enter a  year that you want to check it is Leap Year or Not : ");

if(year % 4 === 0 && year % 100 === 0)
{
    console.log("Leap year.");
}
else if(year % 400 === 0)
{
    console.log("Leap year.");
}
else
{
    console.log("Not Leap year.");
}