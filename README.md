# Leaflet Challenge
Week 15 Assignment - HTML &amp; JavaScript

## Overview
This challenge visualizes recent earthquake data from the USGS (United States Geological Survey) using Leaflet, a popular open-source JavaScript library for interactive maps, and D3.js, a powerful JavaScript library for data visualization. The map plots earthquake data from the past day and provides visual cues about the magnitude and depth of each earthquake.


# Table of Contents

- [Leaflet Challenge](#leaflet-challenge)
  - [Overview](#overview)
- [Table of Contents](#table-of-contents)
- [Documentation](#documentation)
- [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Repository Setup:](#repository-setup)
  - [Git Bash Command Example](#git-bash-command-example)
- [Repository Structure](#repository-structure)
- [Challenge Instructions](#challenge-instructions)
- [Tile and Topographic Layer Example Code](#tile-and-topographic-layer-example-code)
- [Acknowledgements](#acknowledgements)
- [Author](#author)


# Documentation

[Documentation](https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson)


# Prerequisites

Before working on the Leaflet Challenge, ensure you complete the following requirements:

## Installation 
- Install VS Code, Python, JavaScript, and Live Server on your machine (can use Jupyter Notebook)
- Install the D3 and Leaflet libraries
- Create a new repository called 'leaflet-challenge' in GitHub with README and .gitignore file.

## Repository Setup:
  - Create a new repository called 'leaflet-challenge' in GitHub with a README file
  - Copy the SSH key in GitHub
  - In git bash create a folder named 'leaflet-challenge'
  - Navigate into the challenge directory 
  - Clone SSH key in directory
    - Create a folder called "Leaflet-Part-1"
    - Import all of the necessary files into the part 1 directory
  - Git add, commit, and push changes into the repository

## Git Bash Command Example
Navigate into a working directory. 
```
mkdir 'leaflet-challenge
git clone (add you ssh key)
cd 'leaflet-challenge'
mkdir 'Leaflet-Part-1'
git add .
git commit -m "Pushing challenge work"
git push 
```


# Repository Structure
- leaflet-challenge
    - .git
    - Images
    - Leaflet-Part-1
        - static
            - css
            - js
                - logic.js
        - index
    - gitignore
    - README.md


# Challenge Instructions

Ensure you have downloaded the starter code and files to start the challenge.

Part 1: Create the Earthquake Visualization

Complete the following setps:

1. Get your dataset from the USGS GeoJSON Feed page and select the 'All Earthquakes from the Past 7 Days' dataset.
   
2. Use the URL of this JSON to import and visualize the data.
   
3. Use Leaflet to create a map that plots all the earthquakes based on their longitude and latitude.
   
4. Create markers that reflect the magnitude of the earthquakes by their size and debth of the earthquakes by color.
   
5. Create popups that provide additional information about the earthquakes.
   
6. Create a legend that will provide context for the map data. 


# Tile and Topographic Layer Example Code

```VS Code
# Add a tile and topo layer to the map

let streetMap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(myMap);

    let topoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });
```


# Acknowledgements

I want to mention the following individuals and resources for their assistance and support throughout this assignment: 
- Xpert Learning Assistant and ChatGPT


# Author

For any questions or feedback, please contact:
- Name: Gursimran Kaur (Simran)
- Email: kaursimran081999@gmail.com