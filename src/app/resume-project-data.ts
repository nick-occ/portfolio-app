import {ResumeProject} from './resume-project';

export const RESUME_PROJECT: ResumeProject[] = [{
  id: 1,
  name: 'ArcGIS Enterprise Upgrade',
  desc: 'Implemented a complete enterprise upgrade of my company\'s GIS technology.  This involved upgrading our GIS Server and Portal applications, migrating maps from ArcDesktop to ArcGIS Pro and configuring security best practices by setting up the firewall rules, reverse proxying and Shibboleth authentication to control the access.'
}, {
  id: 2,
  name: 'Student Visualization Project',
  desc: 'Developed an R Shiny application that showcased data about Opioid addiction in the United States.  The application was interactive and allowed the user to filter at the state and country level and by different years.  This was a final project for a Visual Analytics course where our group won best project.',
  url: 'https://nocchipi.shinyapps.io/dsba_5122_final_project/'
}, {
  id: 3,
  name: 'Pedestrian Crossing Model',
  desc: 'Worked in Qatar with the Ministry of Transport to analyze a road network and assist with the development of a network model and data visualization tool to find suitable locations to build pedestrian crossings.  Analysis was related to an infrastructure improvement project to accommodate the high volume of people expected for the upcoming 2022 FIFA World Cup.'
}, {
  id: 4,
  name: 'Open Source Technology Proof of Concept',
  desc: 'Developed a prototype web mapping application as a Proof of Concept using Open Source technology as a contingency plan in the event the city’s contract with their current  GIS vendor did not get renewed.  I used GeoServer to connect to a SQL Server Spatial database to publish layers, OpenLayers to consume the OGC WMS and WFS services in a web application and Turf.JS to perform analysis operations.  Provided a detailed report where I published the technology, methods and findings.'
}, {
  id: 5,
  name: 'Web Map Editing Tool',
  desc: 'Developed a web mapping editing tool that allowed users to perform CRUD operations on spatial data stored on an enterprise Oracle geodatabase.  This tool was used for updating data for a large pipeline construction project spanning over 100 miles.  Incorporated audit tracking and role based functionality in order to control and log changes in the application.'
}, {
  id: 6,
  name: 'Pipeline Risk Model',
  desc: 'Managed the creation of a geospatial risk model for a natural gas pipeline system spanning two states that determined which pipe segments in their system have the highest probability of failing.  I collaborated with subject matter experts to develop formulas to calculate the probabilities of failure.  Analyzed data for the calculations, ranging from a variety of factors such as pipe segment features, soil data analysis and field survey reports.'
}];
