# Segue

![badmath](https://img.shields.io/github/issues/barrylui88/Segue) ![batmath](https://img.shields.io/github/issues-pr-closed/barrylui88/Segue) ![badmath](https://img.shields.io/github/license/barrylui88/Segue)

</br>

## Table of Contents
* [Description](#description)
* [Features](#features)
* [Installation & Deployment](#installation-and-deployment)
* [How to Use](#how-to-use)
* [License](#license)

</br>

</br>

## Description

This project presents a real-world situation in which technologies provide a better solution for world. To celebrate the World Autism Day on 2nd April this year, we built this application in hope we could assist teachers/guardians to help kids in needs to understand time management better. This application works as a timer which has 3 different stages: the beginning of the activity, 3 mins and 30 secs before the activity ends. For each stage, different illustration appears to give assign to the kids that the stage has changed and the end of the activity is coming. Teachers/guardians can enter up to 4 activities in this application so the transition between the activities will be easier.

</br>

![Application Demo](./assets/img/readme-01-application-demo.gif)

</br>
</br>

## Features

There are 3 main features in this application. The first feature is the activity form where users can enter up to 4 activities. While on the top right side, users can see the second feature, the timer with 3 aforedmentioned stages. The last feature is the illustrations of Pokemon which can be seen once the activity is started.

</br>

![Application Main Features](./assets/img/readme-02-features.JPG) 

</br>
</br>

### Timer

As mentioned before, there are 3 different stages of time: the beginning of the activity (5 mins), 3 mins and 30 secs before the activity ends. As we understand kids have different needs from one to another, we provide 4 buttons to help teachers giving more time or even moving on to the next activity quicker than planned depends on the ability of the kids in solving/finishing the activity. To build this timer, we use a npm package called [react-idle-timer](https://www.npmjs.com/package/react-idle-timer).

</br>

![Current Time](./assets/img/readme-03-morse-to-letter-demo.gif) 

</br>
</br>

### Activity Form

To help users changing from one activity to another one, we create an acitivity form where users can add up to 4 activities. In this case, we use localstorage and react hooks to store the users input in a localstorage called `inputForm`. Once the activities are saved, users can click the `start` button to start the activity.

</br>

![Current Time](./assets/img/readme-04-letter-to-morse-demo.gif) 

</br>
</br>

### Illustration using Pokemon API

As we understand that some kids find a difficulty in understanding time, we provide an illustration that changes on specific time or when the time stage changes. So kids will associate picture changes as the time and understand that the end of the activity is coming. To provide the illustration, we use [Pokemon API](https://pokeapi.co/) and call Pokemon pictures when the time stage changes. 

</br>

<img src="./assets/img/readme-05-weather-time-API.JPG" alt="current time and weather API" style="width: 630px">

</br>
</br>

### Current Date

As an additional feature, we provide the current date on the top left corner of the application so users know the current date.

</br>

<img src="./assets/img/readme-07-saved-translation.JPG" alt="saved translation buttons" style="width: 630px">

</br>

<img src="./assets/img/readme-08-local-storage.JPG" alt="local storage" style="width: 630px">

</br>
</br>

## Installation and Deployment

The application can be accessed at following links.
* [GitHub repository](https://github.com/barrylui88/Segue).
* [Deployed application](https://barrylui88.github.io/MSegue/).

To run the application locally, the installation of the packages is required. This can be done by running this command in terminal: `npm i`.

</br>
</br>

## How to Use 

* Enter the activity's name in the form and click `save` button.
* Click `start` to start the activity.
* Click the timer `5 mins` button to set the timer when you are ready to start.
* Click `skip` button to skip the current activity and move onto the next activity.
* Click `back` whenever you wish to go back to home.

</br>
</br>

## License

Licensed under the [MIT license](https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt). See LICENSE for the full details.
