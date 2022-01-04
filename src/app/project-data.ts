import { ICON_REGISTRY_PROVIDER_FACTORY } from '@angular/material/icon';
import {Project} from './project';

export const PROJECT: Project[] = [{
  id: 1,
  name: 'Opioid Visualization',
  caption: 'Studying Opioid Addiction in the United States.',
  images: [{
    imgId: 1,
    imgPath: 'assets/img/projects/opioid/prescriber-rates.PNG',
    caption: 'Opioid Prescriber Rates'
  }, {
    imgId: 12,
    imgPath: 'assets/img/projects/opioid/analysis.png',
    caption: 'Opioid Deaths Analysis'
  }, {
    imgId: 13,
    imgPath: 'assets/img/projects/opioid/opioid-deaths.PNG',
    caption: 'Deaths By Opioid'
  }, {
    imgId: 14,
    imgPath: 'assets/img/projects/opioid/opioid-drug-data.PNG',
    caption: 'Opioid Drug Data'
  }],
  desc:
    'For the project we wanted to explore data related to opioids, in an effort to better understand and get more insight into ' +
    'the opioid epidemic.  Our domain problem is one for a researcher wanting to explore the connection between prescriber rates of ' +
    'opioid prescriptions and opioid related deaths both in the country as a whole and drilling down to the state level.  The first ' +
    'part we wanted to look at was data on prescribers.  This data would allow the researcher to see the distribution of opioids across ' +
    'the US and also find the most commonly prescribed opioids.  The second part of the data involved finding information about deaths ' +
    'that occur from opioid overdoses in the United States.  This would also allow the researcher to drill down to the state level.  ' +
    'Another level of detail that we felt would be an important task for the researcher is to categorize these deaths into different ' +
    'types of groups such as race and age.  This would add another level of detail and help identify groups that are suffering from ' +
    'opioid addiction, which would then allow researchers to provide information and where attention needs to be focused the most to ' +
    'combat the opioid epidemic.',
  skills: ['R', 'Shiny'],
  featured: true,
  links: [{
    name: 'Opioid Dashboard',
    url: 'https://nocchipi.shinyapps.io/dsba_5122_final_project/',
    icon: 'link'
  }, {
    name: 'Github',
    url: 'https://github.com/nick-occ/dsba_5122_final_project',
    icon: 'code'
  }, {
    name: 'Presentation',
    url: 'assets/files/projects/opioid/opioid-presentation.pptx',
    icon: 'slideshow'
  }]
}, {
  id: 2,
  name: 'NYC Airports Visualization',
  caption: 'Studying NYC Airports in 2013.',
  images: [{
    imgId: 2,
    imgPath: 'assets/img/projects/nyc-airports/DestinationAnalysis.png',
    caption: 'Destination Analysis'
  }, {
    imgId: 9,
    imgPath: 'assets/img/projects/nyc-airports/AirlineAnalysis.png',
    caption: 'Airline Analysis'
  }, {
    imgId: 10,
    imgPath: 'assets/img/projects/nyc-airports/NYCAirportsAnalysis.png',
    caption: 'NYC Airports Analysis'
  }, {
    imgId: 11,
    imgPath: 'assets/img/projects/nyc-airports/PlaneAnalysis.png',
    caption: 'Plane Analysis'
  }],
  desc:
    'This project aimed to examine NYC airport data from 2013 to better understand what factors contribute to airport delays.  ' +
    'To view the performance of the airport we wanted to show the percentage of how many delayed flights each airport had, ' +
    'to give an indication on how each airport is performing and if there are certain hours of the day that contribute to more delays.' +
    '<br><br>' +
    'We also showed the relationship between the delays and the destination airport to see if there is a pattern of delays in ' +
    'certain destinations or certain areas of the country. We also included a marker (indicated by the star) of the top 30 ' +
    'busiest airports in 2013 to see if there is any correlation. It is worth noting that EWR, JFK and LGA are also part of the ' +
    '2013 busiest airports.' +
    '<br><br>' +
    'Next we examined the airplanes in the dataset to see if there was a relationship between certain variables associated with the ' +
    'plane and the flight delays. We chose to examine the year the plane was built, manufacturer and number of seats. We thought the ' +
    'number of seats would be a good indicator to also allow us to get the general size of the airplane.  We compared the top 5 ' +
    'manufacturers by total flights and delayed flights by plane year to see if any patterns can be formed.' +
    '<br><br>' +
    'We showed if certain airline carriers were contributing to a high number of delays by creating a heat map that shows the number ' +
    'of delays each airline had throughout the year.  We also showed the top 5 carriers with delays and took a closer look at the ' +
    'manufacturers they are using in their fleet to see if the carriers have any similarities in manufacturers that are causing delays.',
  skills: ['R', 'Shiny', 'flexdashboard'],
  featured: true,
  links: [{
    name: 'Airports Dashboard',
    url: 'https://nocchipi.shinyapps.io/design_contest_dashboard/?_ga=2.114496260.245395863.1613009679-571832064.1613009679',
    icon: 'link',
  }, {
    name: 'Presentation',
    url: 'assets/files/projects/nyc-airports/nyc-airports-slides.pptx',
    icon: 'slideshow'
  }]
}, {
  id: 3,
  name: 'Hurricane Katrina GIS Analysis',
  caption: 'Temporal Landscape Change After Hurricane Katrina.',
  images: [{
    imgId: 3,
    imgPath: 'assets/img/projects/katrina/katrina-poster.jpg',
    caption: 'Hurricane Katrina Project Poster'
  }, {
    imgId: 5,
    imgPath: 'assets/img/projects/katrina/classification-change.jpg',
    caption: 'Open Water Classification Change'
  }, {
    imgId: 6,
    imgPath: 'assets/img/projects/katrina/pre-katrina-classification.jpg',
    caption: 'Pre Katrina Classification'
  }, {
    imgId: 7,
    imgPath: 'assets/img/projects/katrina/post-katrina-classification.jpg',
    caption: 'Post Katrina Classification'
  }, {
    imgId: 8,
    imgPath: 'assets/img/projects/katrina/land-classification-model.jpg',
    caption: 'Land Classification ModelBuilder Model'
  }
  ],
  desc: 'The purpose of this project was to conduct a temporal study that would show how remote sensing technology could be used to assess the impact of Hurricane Katrina and detect growth/rebuilding trends after the hurricane.  To prove my hypothesis, I developed three objectives.  The first objective was to perform spatial analysis on pre and post Katrina land classification datasets to show how much developed land was reclassified in 2006.  The second objective was to perform the same spatial analysis where areas that were classified as “Unconsolidated Shore” (beaches, bars, flats) in 2005, were classified differently in 2006.  This would indicate the amount of shoreline erosion as a result of Hurricane Katrina.  Lastly, my third objective was to identify growth trends in the population and redevelopment after hurricane Katrina through a combination of visual interpretation and analysis tools.  By accomplishing these three objectives I would be able to calculate areas with high flood concentration, areas of beach erosion and show patterns of rebuilding and growth after Katrina.',
  skills: ['GIS', 'Remote Sensing', 'ModelBuilder'],
  featured: true,
  links: [{
    url: 'assets/files/projects/katrina/katrina-paper.docx',
    name: 'Project Paper',
    icon: 'subject'
  }, {
    url: 'assets/files/projects/katrina/katrina-poster.ppt',
    name: 'Project Powerpoint',
    icon: 'slideshow'
  }]
}, {
  id: 4,
  name: 'UNC Charlotte Campus Map',
  caption: 'UNC Charlotte Campus Map Project',
  images: [{
    imgId: 29,
    imgPath: 'assets/img/projects/campus-map/charlotte-map.png',
    caption: 'UNC Charlotte Campus Web Map'
  },{
    imgId: 30,
    imgPath: 'assets/img/projects/campus-map/charlotte-directions.png',
    caption: 'Google Maps Directions'
  },{
    imgId: 31,
    imgPath: 'assets/img/projects/campus-map/uncc-printable-map.png',
    caption: 'Printable Map Design'
  }],
  desc: 'Maintain the campus web map used by students, employees and visitors to navigate and find buildings, departments or services on campus.'+
  '  Some layers are linked to APIs to receive real time information such as the location of buses and showing when the next bus will arrive or how many scooter are in a dock.  '+
  'The map is first created in ArcGIS Pro where the data is stored in an enterprise geodatabase in Oracle. \
  The map is published out to a map service hosted in ArcGIS Server and the service is then called in the Angular application.  Popular keywords for buildings, restaurants and services are cached in NGINX for a faster response time when searching the map.  Printable maps are also designed in ArcGIS Pro \
  and used by different departments such as parking maps for Parking and Transportation Services.',
  url: 'https://maps.charlotte.edu',
  skills: ['Angular','NGINX','ArcGIS Server', 'ArcGIS Pro'],
  featured: false,
  links: [{
    name: 'Web Map',
    url: 'https://maps.charlotte.edu',
    icon: 'link',
  },{
    name: 'PDF Map',
    url: 'https://facilities.charlotte.edu/sites/facilities.charlotte.edu/files/media/Maps/Uncc_Campus_Map.pdf',
    icon: 'subject',
  }]
}, {
  id: 5,
  name: 'NYC Complaint Network Analysis',
  caption: 'Network Analysis of Complaints from 2019 to 2021.',
  images: [{
    imgId: 15,
    imgPath: 'assets/img/projects/nyc-complaints/nyc-clusters.png',
    caption: 'Map shows clusters of grand larceny complaints using Louvain community detection.'
  },{
    imgId: 16,
    imgPath: 'assets/img/projects/nyc-complaints/nyc-complaints-data-model.png',
    caption: 'Data model design for network analysis project.'
  },{
    imgId: 17,
    imgPath: 'assets/img/projects/nyc-complaints/link-prediction.png',
    caption: 'Code and results of link prediction machine learning.'
  },{
    imgId: 23,
    imgPath: 'assets/img/projects/nyc-complaints/precinct-complaints-over-time.png',
    caption: 'Comparison of the change in amount of complaints over time for precincts in NYC.'
  }],
  desc: 'This project analyzed data published by NYC Open Data, which contains historic complaint data. '+
  'For the purposes of the analysis the data was filtered by more recent dates, ranging between 2019 and 2021.  It only focused on more serious types of offenses, that being felonies. '+
  'The complaints occurred in 77 precincts within the 5 boroughs of New York City. The complaints in the dataset represent 65 categories that are more general classifications '+
  'of offenses that can further be broken down into 369 more specific classifications.'+
  'I used this data to develop a tool to identify patterns of complaints happening in different areas of NYC and show the patterns geographically on a map.'+
  'The tool is flexible enough to analyze different offenses over the course of different periods of time.  Since New York City has such a large population of people and a large area for police to patrol, '+
  'it is important to spot trends of offenses to better allocate police resources.  Time, location and the type of offense are critical variables as they answer the questions, when, where and what is happening in NYC.  Having these tools will give them an advantage in knowing where new patterns of offenses are emerging and come up with a plan of action to reduce the numbers.'+
  '<br><br>' +
  'The main goal of the NYPD is to use the tools and analysis results to make better decisions and develop actionable items to help reduce crime in a timely manner. Some examples of improvements that this project could lead to is knowing where to increase the police presence in different areas, better communication between NYPD and communities about emerging crime patterns and identifying where to allocate funds towards technology such as adding more security cameras.'+
  '<br><br>' +
  'An additional use case the NYPD is interested in studying is how crime has changed during the COVID-19 pandemic. This was also one of the factors for the chosen date range of the data being from 2019 to 2021. This represents three different periods: pre-pandemic (2019), pandemic (2020) and vaccine/return to normal period (2021). The objective is that by analyzing these time periods, conclusions can be derived about if certain types of offenses are higher or lower than normal which could be a result of different factors during the pandemic such as restaurants\public places being closed, reduction of tourists and people being quarantined in their homes.',
  links:  [{
    name: 'Github',
    url: 'https://github.com/nick-occ/dsba-6520-project',
    icon: 'code'
  },{
    name: 'Report',
    url: 'https://docs.google.com/document/d/1A4qNnQvHEfwIKEsIFu0bxs8qGj-TlSW2nE3T5uT0fOY/edit?usp=sharing',
    icon: 'subject'
  }],
  skills: ['Neo4J', 'Python', 'ArcGIS'],
  featured: false
}, {
  id: 6,
  name: 'Analyzing Twitter Data from Popeyes',
  caption: 'Tweets about the Popeyes chicken sandwich craze.',
  images: [{
    imgId: 18,
    imgPath: 'assets/img/projects/popeyes-twitter/emoji-cloud.png',
    caption: 'Emoji cloud showing the range of emotions when the sandwich started running out.'
  },{
    imgId: 19,
    imgPath: 'assets/img/projects/popeyes-twitter/hashtag-analysis.png',
    caption: 'Analyzing hashtags over time shows high retweet engagement when the sandwich is rereleased.'
  },{
    imgId: 20,
    imgPath: 'assets/img/projects/popeyes-twitter/sentiment-analysis.png',
    caption: 'Sentiment analysis over time.'
  },{
    imgId: 21,
    imgPath: 'assets/img/projects/popeyes-twitter/popeyes_mentions.png',
    caption: 'Comparison of direct mentions of Popeyes vs undirected mentions over time.'
  },{
    imgId: 22,
    imgPath: 'assets/img/projects/popeyes-twitter/network-analysis.png',
    caption: 'Network analysis of the centrality of tweets about fights at Popeyes.'
  }],
  desc: 'This project analyzed Twitter data around the release of the Popeyes Chicken Sandwich craze.  There was a range of emotion with the release of the sandwich, from joy about getting the sandwich, anger when they sold out and fear when there was fighting'+
  'The data was collected from the Twitter Academic Research API and visualization were created in Tableau.  Different analysis techniques were used such as sentiment analysis, topic modeling and word and emoji clouds to show the change in emotion over time.'+
  'Analysis of hashtags and direct mentions and regression analysis of retweets to see how engage people were with the campaign during different times and network analysis to show the degree centrality about people tweeting about the fights at Popeyes.'
  ,
  links:  [{
    name: 'Report',
    url: 'assets/files/projects/popeyes-twitter/Popeyes Chicken Sandwich Report.pdf',
    icon: 'subject'
  },{
    name: 'Presentation',
    url: 'https://docs.google.com/presentation/d/1zUZe09z3U_vcPhgML4XNUeYvtHJvXtY_9F9Wuhi-GrQ/edit?usp=sharing',
    icon: 'slideshow'
  }],
  skills: ['R','Python','Tableau'],
  featured: false
},{
  id: 7,
  name: 'UNC Charlotte Data Sciene Internship',
  caption: 'Using machine learning on work request data.',
  images: [{
    imgId: 24,
    imgPath: 'assets/img/projects/internship/survival-analysis.png',
    caption: 'Survival probability of equipment over time.'
  },{
    imgId: 25,
    imgPath: 'assets/img/projects/internship/text-analysis-classification-results.png',
    caption: 'Classification of problem types accuracy results.'
  },{
    imgId: 26,
    imgPath: 'assets/img/projects/internship/text-analysis-classification-examples.png',
    caption: 'Problem type classication results.'
  },{
    imgId: 27,
    imgPath: 'assets/img/projects/internship/work-request-predictions.png',
    caption: 'Predicting work request cost and time to complete.'
  },{
    imgId: 28,
    imgPath: 'assets/img/projects/internship/space-management-dashboard.png',
    caption: 'Space Management dashboard.'
  }],
  desc: "The internship is an opportunity to work with Facilities Management (FM) \
  at the University of North Carolina at Charlotte, analyzing data from their work \
  management system.  Machine learning can be applied to different areas of their \
  business in order to improve operations.  Some examples are predicting the cost \
  and hours for a work request and how that could improve the scheduling of work, \
  budgeting and providing better estimates to customers.  Using natural language \
  processing (NLP) to analyze the work request descriptions can improve how work requests \
  are categorized into problem types and the speed at which they are routed to the \
  appropriate shops to do the work.  A big part of the work Facilities Management \
  does involves installing, repairing and maintaining the equipment across campus.  \
  Analysis can be done to study the lifespan of equipment and see if there are any patterns \
  of when equipment will break down.  This can help avoid outages and highlight where \
  additional preventive maintenance scheduling needs to be implemented."+
  '<br><br>' +
  'The internship allowed me to apply different tools learned in the Data Science \
  and Business Analytics program to different areas of Facilities Management operations \
  and also get more experience working with real world data.  The work management system \
  generates a large volume of data where important insights can be lost if no one is there \
  to analyze the data and turn it into knowledge.  This can then help FM make more informed \
  data driven decisions going forward.',
  links:  [{
    name: 'Report',
    url: 'https://github.com/nick-occ/dsba-6520-project',
    icon: 'subject'
  },{
    name: 'Presentation',
    url: 'https://docs.google.com/presentation/d/1GHtUcEAT_oI27WDZd10-nKUjYifM7aslUo03oynh3Os/edit?usp=sharing',
    icon: 'slideshow'
  }],
  skills: ['Python', 'XGBoost', 'Word2Vec','Deep Learning', 'Tableau'],
  featured: false
}];
