
import {Experience} from './experience';

export const EXPERIENCE: Experience[] = [{
  id: 1,
  name: 'University of North Carolina at Charlotte',
  location: 'Charlotte, NC',
  role: 'GIS Developer',
  startDate: 'November 2017',
  endDate: 'Present',
  desc: [
  'Administer ArcGIS Server, Portal and NGINX servers hosting mapping applications to support Facilities Management operations.',
  'Maintain the Campus’ web map application used by students, staff and visitors to find buildings and services on campus.',
  'Develop geospatial solutions to help groups solve different problems such as creating a utility network to \
  support better data management and setting up maps and database schemas for field data collection of assets.',
  'Create interactive Tableau dashboards to highlight work request performance metrics for FM.'
  ],
  image: {
    imgId: 1,
    imgPath: 'assets/img/logos/uncc.png'
  }
}, {
  id: 2,
  name: 'University of North Carolina at Charlotte',
  location: 'Charlotte, NC',
  role: 'Data Science Intern',
  startDate: 'August 2021',
  endDate: 'December 2021',
  desc: [
    'As part of my Masters of Data Science program I had an internship with the campus\' Facilities Management department where I used machine learning to solve different problems.',
    'XGBoost regression models to predict the time and cost for a work request to be completed.',
    'Word2Vec and Deep Learning models to classify the type of problem from work request descriptions.',
    'Analyzing the survival probability of different equipment categories over time.'
  ],
  image: {
    imgId: 1,
    imgPath: 'assets/img/logos/uncc.png'
  }
}, {
  id: 3,
  name: 'New York City Department of Education',
  location: 'Brooklyn, NY',
  role: 'GIS Developer',
  startDate: 'April 2017',
  endDate: 'August 2017',
  desc: [
    'Created and maintained spatial datasets for the New York City school system which consisted of data for over \
    1,800 schools and 1.1 million students.',
    'Maintained an ASP.NET mapping application and the related ArcGIS map services, and automated GIS tasks \
    using Python.',
    'Developed a prototype web mapping application as a Proof of Concept using only Open Source technology.'
  ],
  image: {
    imgId: 2,
    imgPath: 'assets/img/logos/nycdoe.png'
  }
}, {
  id: 4,
  name: 'Mott MacDonald',
  location: 'Iselin, NJ',
  role: 'GIS Specialist',
  startDate: 'June 2007',
  endDate: 'March 2017',
  desc: [
    'Developed Python scripts for a variety of uses such as FTP image transfer, spatial analysis, creating map books \
    and developing geoprocessing services.',
    'Developed an ASP.NET mapping application to view and edit data which played a pivotal role in acquiring new clients.',
    'Architected a document management system that linked documents to spatial assets in a web-based GIS application.',
    'Administered a production GIS Server environment to host data for approximately 25 clients.'
  ],
  image: {
    imgId: 3,
    imgPath: 'assets/img/logos/mott-mac.png'
  }
}, {
  id: 5,
  name: 'Rutgers University',
  location: 'Newark, NJ',
  role: 'Assistant Professor',
  startDate: 'January 2011',
  endDate: 'May 2011',
  desc: [
    'Taught a course on object-oriented programming covering concepts such as classes and inheritance.', 
    'This program was part of a certification for veterans of Iraq and Afghanistan that provided them tools to start a \
    career in the Information Technology field.'
  ],
  image: {
    imgId: 4,
    imgPath: 'assets/img/logos/rutgers.jpg'
  }
}, {
  id: 5,
  name: 'Essex County College',
  location: 'Newark, NJ',
  role: 'Assistant Professor',
  startDate: 'February 2009',
  endDate: 'May 2009',
  desc: ['Taught a course that was part of a GIS certificate program covering analysis techniques using ArcGIS Desktop and the Spatial, Network and 3D Analyst extensions.'],
  image: {
    imgId: 5,
    imgPath: 'assets/img/logos/essex-county-college.jpg'
  }
}, {
  id: 6,
  name: 'Union County NJ - Bureau of GIS',
  location: 'Elizabeth, NJ',
  role: 'GIS Technician',
  startDate: 'August 2005',
  endDate: 'June 2007',
  desc: [
    'Designed maps for different County departments ranging in uses from maps used in court trials to County park maps.', 
    'I also supported various County departments with assistance using the ArcGIS software suite.'
  ],
   image: {
    imgId: 6,
    imgPath: 'assets/img/logos/union-county.jpg'
  }
}];
