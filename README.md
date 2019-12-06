# mulitple-track
A web application that takes multiple audio tracks to play them together

Here is a live demo of the application : https://multiple-tracks.netlify.com/

## How to run the app

- Install Node.js in your desktop  : [Node.js](https://nodejs.org/en/)
- Download or Clone the repository : [Download ZIP file](https://github.com/AHannelais/mulitple-tracks/archive/master.zip)
- Extract to your desired location and open your text editor in the right folder
- run ``npm install`` to install the dependencies
- run ``npm start  `` to start the application, a new window should open in your browser or you can access with URL http://localhost:3000/

## What does it features

- You can upload ( only mp3 ) files
- If every container has a file uploaded, you can add more containers to plays more tracks
- Play / Pause button
- Stop button to pause and reset the tracks, automatic whenever a new file is uploaded
- Shows the total duration if a track is uploaded
- An error message is shown whenever a new file duration doesn't match previous ones, the file won't be played
- Volume slider for each individual file
- Mute / Unmute button for each file

## How it's done

The two main components of the React App, the lecture bar and the file containers, comunicates via a Redux store to know the state of play/pause/stop or the list of uploaded files. 
File Container gets files informations from Upload component and track duration from Audio Component and checks if the duration matches precedent files before adding it to the Redux track list

## How to improve it

- Allow to remove file containers
- Improve the validation of compatibility of each uploaded files
- Add a system that tracks the current time of the track ( with minimal ressources needed )
