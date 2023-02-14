# crime_report_api

This biggest problem and delay that occurs
While reporting crimes and emergency situations is the human factor.
Currently when one dials 100 they are connected to an operator which then dissects their concern and connects them to relevant authorities for them to again repeat their entire statement.

Live Audio is serial in nature and hence slow when communicating. If one could just report an assault with a pic and a text or an audio piece rather than calling and explaining where exactly they are and if they fall within their jurisdiction. And repeat yourselves multiple times over in the process. Currently GPS tech allows us to zero down to less than 50m in precision so this information should not be a hassle to the reporter it will be collected by the frontend and automatically sent to the nearest center.

In this System we maintain a database of the various emergency response authorities with their respective type and geolocation and the severity they can respond to. We also will setup a server(small listener service) on each endpoint(example: Police Station) that'll allow us to push requests that are queued for verification.

This will allow for decentralisation of the task of verification of integrity of an report.

A report compulsorily consists of a location. It also may or may not contain a text description, an Audio description or a photographic context. This allows for a report to become more clear and helps the operator in the police station judge the severity of the situation. This'll them to label the reports on the basis of severity. This will also help filter out spam.

The server on receiving a report would ping the Response center(nearest to the reported location) with all the information and data.
And revert back to the reporter with the details(contact and other) of the station that currently is verifying their request.


In the current state this system allows for registraion of Response teams(eg. police) only through an endpoint which has a key(ADMIN_SECRET) as a cookie.
If the front end of the application is made to be native and the request cookie is compiled into the source code. It would help us ensure the integrity of our Responders database.

## Registration of response teams
![Screenshot from 2023-02-14 15-20-40](https://user-images.githubusercontent.com/90756795/218700476-32b4d5fa-6e1b-4957-9481-19609f92af2a.png)

## Report
As for posting a Report one does not need any kind of key.
![Screenshot from 2023-02-14 15-18-34](https://user-images.githubusercontent.com/90756795/218699829-d012dcdf-4af7-456a-a023-de7f21077f5e.png)

## Integrity Checking and Categorization
But for verification and categorization by the operator on site; the API requires another kind of key(VERIFIERS_SECRET).
![Screenshot from 2023-02-14 15-23-30](https://user-images.githubusercontent.com/90756795/218700864-c0580df8-5205-4b24-bcff-108128fcbbd5.png)


The next phase of development will include the endpoint listening service.

## Technologies Used:
- Nodejs(Server application)
- Express(Routing and request handling)
- MongoDB(Store, retrieve and manipulate data)
