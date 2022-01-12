import {ResumeProject} from './resume-project';

export const RESUME_PROJECT: ResumeProject[] = [{
  id: 1,
  name: "Finding Clusters of NYPD Complaints",
  desc:
  ['Used Neo4J to load NYPD complaint data and identify clusters of complaints using Louvain community \
  detection and PageRank centrality to find the most influential locations that are central to other nearby areas \
  where similar offenses occurred.',
  'Created an interactive map that was integrated into Jupyter notebook using ipyleaflet to show where hotspots \
  of compalaint clusters are occurring.',
  'Used machine learning to perform graph link prediction to predict the locations where future offenses will occur.'],
  url:{
    name: 'Final Report',
    link: 'https://github.com/nick-occ/dsba-6520-project/blob/main/final_deliverable/DSBA-6520%20Final%20Report_Occhipinti.pdf'
  }
},{
  id: 2,
  name: "Analyzing Twitter Data for Popeye\'s Chicken Sandwich Release",
  desc:
  ['Used R with the Twitter API to collect tweets about the 2019 Popeye\'s chicken sandwich release.',
  'Developed an emoji cloud in Tableau to capture the range of emotions over time.',
  'Created dashboards showing sentiment analysis, topic modeling, and change in retweet volume over time.',
  'Performed network analysis to study the centrality of tweets about the fights that occurred at Popeyes.'
],
  url:{
    name: 'Final Report',
    link: 'https://drive.google.com/file/d/151VvRvuWwRI1W8xbpUqbtjLe8EMFNLyj/view'
  }
},{
  id: 3,
  name: "External Camera Mapping Project",
  desc:[
    'Built a secure application in our GIS Enterprise Portal that allows the Campus police department to view the \
    locations of their external cameras on Campus through a web based viewer and mobile device.',
    'Built a separate application that allowed them to edit the camera locations and attributes and attach images \
    to the camera point features.'
  ]
},
  {id: 1,
  name: 'ArcGIS Enterprise Upgrade',
  desc: [
    'Implemented a complete enterprise upgrade of the campus\' GIS technology.',
    'Upgraded the GIS Server and Portal applications, migrated maps from ArcDesktop to ArcGIS Pro and \
    configured security best practices by setting up secure services, firewall rules, reverse proxies and Shibboleth authentication.']
  }, {
  id: 2,
  name: 'Opioid Addiction Dashboard',
  desc: [
  'Developed an R Shiny application that showcased data about Opioid addiction in the United States.', 
  'Application was interactive and allowed the users to filter by different states and select a range of years.',  
  'Used a word cloud, bar charts, geospatial maps and a radar chart as part of the dashboard.',
  'This was a final project for a Visual Analytics course where my group won best project.'
],
  url: {
    name: 'Project Dashboard',
    link: 'https://nocchipi.shinyapps.io/dsba_5122_final_project/'
  }
}, {
  id: 3,
  name: 'Pedestrian Crossing Model',
  desc: ['Worked in Qatar with the Ministry of Transport to analyze a road network and assist with the development of a network model \
  and data visualization tool to find suitable locations to build pedestrian crossings.', 
  'Analysis was related to an infrastructure improvement project to accommodate the high volume of people expected for the upcoming 2022 FIFA World Cup.']
}, {
  id: 4,
  name: 'Open Source Technology Proof of Concept',
  desc: [
  'Developed a prototype web mapping application as a Proof of Concept using Open Source technology as a \
  contingency plan in the event the city\'s contract with their current  GIS vendor did not get renewed.',
  'Used GeoServer to connect to an SQL Server Spatial database to publish layers, OpenLayers to consume the \
  OGC WMS and WFS services in a web application and Turf.JS to perform analysis operations.',
  'Provided a detailed report where I published the technology, methods and findings.']
}, {
  id: 5,
  name: 'Web Map Editing Tool',
  desc: [
  'Developed a web mapping editing tool that allowed users to perform CRUD operations on spatial data stored on an enterprise Oracle geodatabase.',
  'Used for updating data for a large pipeline construction project spanning over 100 miles.',  
  'Incorporated audit tracking and role based functionality in order to control and log changes in the application.']
}, {
  id: 6,
  name: 'Pipeline Risk Model',
  desc: ['Managed the creation of a geospatial risk model for a natural gas pipeline system spanning two states \
  that determined which pipe segments in their system have the highest probability of failing.', 
  'I collaborated with subject matter experts to develop formulas to calculate the probabilities of failure.',
  'Analyzed data for the calculations, ranging from a variety of factors such as pipe segment features, soil data analysis and field survey reports.']
}];
