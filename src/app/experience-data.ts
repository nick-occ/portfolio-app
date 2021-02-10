
import {Experience} from './experience';

export const EXPERIENCE: Experience[] = [{
  id: 1,
  name: 'University of North Carolina at Charlotte',
  location: 'Charlotte, NC',
  role: 'GIS Developer',
  startDate: 'November 2017',
  endDate: 'Present',
  desc: 'Maintain the Campus web map built in Angular and other mapping applications used to track information on campus.  Administer the Campus ArcGIS Server and Portal applications that are used to distribute web maps to view and edit data in the field.  Develop Tableau visualizations and dashboards and distribute them on Tableau Server, as well as training groups on how to use Tableau to visualize their data.',
  image: {
    imgId: 1,
    imgPath: 'assets/img/logos/uncc.png'
  }
}, {
  id: 2,
  name: 'New York City Department of Education',
  location: 'Brooklyn, NY',
  role: 'GIS Developer',
  startDate: 'April 2017',
  endDate: 'August 2017',
  desc: 'Developed and maintained spatial datasets for the New York City school system, consisting of over 1,800 schools and 1.1 million students.  Maintained an ASP.NET MVC web application and ArcGIS map services and automated GIS tasks using Python.',
  image: {
    imgId: 2,
    imgPath: 'assets/img/logos/nycdoe.png'
  }
}, {
  id: 3,
  name: 'Mott MacDonald',
  location: 'Iselin, NJ',
  role: 'GIS Specialist',
  startDate: 'June 2007',
  endDate: 'March 2017',
  desc: 'Developed Python scripts for a variety of uses such as FTP image transfer, spatial analysis, creating map books and developing geoprocessing services.  Developed an ASP.NET MVC mapping application to view and edit data, that played a pivotal role in acquiring new clients.  Architected a document management system that links documents to spatial assets in a web-based GIS application.  Administered a production GIS Server environment to host data for  approximately 25 clients.',
  image: {
    imgId: 3,
    imgPath: 'assets/img/logos/mott-mac.png'
  }
}, {
  id: 4,
  name: 'Rutgers University',
  location: 'Newark, NJ',
  role: 'Assistant Professor',
  startDate: 'January 2011',
  endDate: 'May 2011',
  desc: 'Taught a course on object oriented programming covering concepts such as classes and inheritance.  This program was part of a certification for veterans of Iraq and Afghanistan that provided them tools to start a career in the Information Technology field.',
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
  desc: 'Taught a course that was part of a GIS certificate program covering analysis techniques using ArcGIS Desktop and the Spatial, Network and 3D Analyst extensions.',
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
  desc: 'Designed maps for different County departments ranging in uses from maps used in court trials to County park maps.  I also supported various County departments with assistance using the ArcGIS software suite.',
   image: {
    imgId: 6,
    imgPath: 'assets/img/logos/union-county.jpg'
  }
}];
