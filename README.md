live demo: https://legal-one-challenge.herokuapp.com/

<h1>The challenge:</h1>
A call center makes tons of calls daily through call center agents and these calls are dumped in JSON files. We need you to handle this large amount of data, and present it in a nice way for the supervisors.

The issue with the data is the structure, it is spread across multiple files. We need your mind to solve this issue and present the data in a useful way.


<h1>Important notes:</h1>
app should run with no errors nor hiccups.
the data in json-data folder should not be changed!.
representing the data using charts is a plus.
unit testing of the code is a plus.



<br>
<h3>Personal notes:</h1>

To avoid JSON data being displayed in front end, the front end routes need to be changed. This was done using an api (CallLog.js in the client folder). Therefore if the routes on the front end match the backedn routes Heroku will display the JSON data instead of the page content.
