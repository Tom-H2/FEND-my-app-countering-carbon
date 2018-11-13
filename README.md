# Countering Carbon Neighborhood React App

### Overview and Acknowledgements
The Countering Carbon App represents the final project for the Udacity Grow With Google Front End Nano Degree. The requirements and rubric can be found [here](https://review.udacity.com/#!/rubrics/1351/view)

Countering Carbon is a Single Page Application was written using React, React libraries, Google Maps, and FourSquareAPI. The code centers the map on down town Port Angles, WA and the markers represent bars in town. This query, and the radius of the initial API call are hardcoded in the App.js file on lines 118 to 121.

Countering Carbon is mostly the work of Thomas Harris, as partial fullfillment of the FEND requirements. This app could not have been completed without the help and support of countless people and countless resources. A more complete list can be found in the Colaborations section below but I wanted to acknowledge here the help of Susan Pommer who has been my Study Buddy over the past months and who has been invaluable in helping complete this project.


### Instructions to open Countering Carbon
The project repo can be accessed at [GitHub](https://github.com/Tom-H2/FEND-my-app-countering-carbon.git)

- From the GitHub repo page clone/download repo and select download
- That action puts a copy of the repo in the computer's download folder
- Move that zipped folder from download to a C:// folder and unzipped (extract all)
- In a terminal window navigate to the file location of unzipped folder
- Entered "npm install react"
- After that is complete, entered "npm start"
- A new browser window opens program running at location [localhost:3000](http://localhost:3000)

### Service Worker
- ServiceWorker, included in the index.js file is used in production build only.
To optimize Countering Carbon:
  1. Run: `npm run build`
  2. Deploy: `npm run deploy` to deploy to the address specified  
- `npm run serve`
- Local host 5000

### Use of Countering Carbon

- To find information about any of the venues marked on the map click the marker and that will open an infowindow.
- To open the side bar click on the hamburger button. This will display the venues in list form. - By clicking the venue name the infowindow will appear at the marker.
- The sidebar has an input box that allows for filtering the venues.

### Resources Used
-- Google Maps https://console.cloud.google.com/home/dashboard?project=counteringcarbon

-- FourSquare https://developer.foursquare.com/docs/api/venues/search

-- Navigation Bar and Side Drawer https://www.youtube.com/watch?v=l6nmysZKHFU

-- Input Box https://www.youtube.com/watch?v=VIqVW9XiWnk

-- Forrest [FEND] Walk Through https://www.youtube.com/watch?v=lDVaZY0aG2w&index=6&list=PL4rQq4MQP1crXuPtruu_eijgOUUXhcUCP

-- Doug Brown Walk Through https://www.youtube.com/watch?v=NVAVLCJwAAo&feature=youtu.be

-- Animation of markers https://www.youtube.com/watch?v=kadSBAsjDXI

-- Aria Roles https://www.w3.org/TR/role-attribute/

-- Error Handling for Async in Google Maps https://discussions.udacity.com/t/handling-google-maps-in-async-and-fallback/34282

-- Tabindex https://developers.google.com/web/fundamentals/accessibility/focus/using-tabindex

-- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)


## Collaborations
- Countering Carbon is open to any collaborations.

- Susan Pommer, another FEND student, gave me technical and emotional support for finishing this App. Without her help during the past few weeks this would not have been finished.

- Jack Waknitz volunteered his time to help me finish the formatting of this project and to serve as an extra check on the rubric.

- Clallam Co-Working in Sequim, WA donated desk space to me as I worked on this project.

### Future Project Ideas

The initial vision of this App was a way to choose the carbon output of various means of transportation. The map could track the different ways to get from point A to point B. Then a carbon calculator would calculate how much carbon is emitted by each option. For example it would calculate the difference between taking the bus or driving a personal car.

## Supported Browsers

By default, the generated project supports all modern browsers.
