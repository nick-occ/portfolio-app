import {Project} from './project';

export const PROJECT: Project[] = [{
  id: 1,
  name: 'Opioid Visualization',
  caption: 'Studying Opioid Addiction in the United States.',
  images: [{
    imgId: 1,
    imgPath: 'assets/img/projects/opioid/PrescriberRates.PNG',
    caption: 'Opioid project'
  }],
  desc: 'Opioid Student Project',
  skills: [],
  featured: true
}, {
  id: 2,
  name: 'NYC Airports Visualization',
  caption: 'Studying NYC Airports in 2013.',
  images: [{
    imgId: 2,
    imgPath: 'assets/img/projects/nyc-airports/DestinationAnalysis.png',
    caption: 'NYC Airports project'
  }],
  desc: 'NYC Airports Student Project',
  skills: [],
  featured: true
}, {
  id: 3,
  name: 'Hurricane Katrina GIS Analysis',
  caption: 'Temporal Study of Landscape Change After Hurricane Katrina.',
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
    imgId: 4,
    imgPath: 'assets/img/projects/campus-map/campus-map.png',
    caption: 'UNC Charlotte Campus Map'
  }],
  desc: 'Maintain and update UNC Charlotte Campus Map',
  url: 'https://maps.uncc.edu',
  skills: [],
  featured: false
}];
