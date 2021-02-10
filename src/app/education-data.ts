import {Education} from './education';

export const EDUCATION: Education[] = [{
  id: 1,
  university: 'University of North Carolina at Charlotte',
  location: 'Charlotte, NC',
  degree: 'Masters\'s Degree',
  major: 'Data Science and Business Analytics',
  startDate: 'September 2020',
  endDate: 'December 2021 (Expected)',
  image: {
    imgId: 1,
    imgPath: 'assets/img/logos/uncc.png'
  }
}, {
  id: 2,
  university: 'University of North Carolina at Charlotte',
  location: 'Charlotte, NC',
  degree: 'Graduate Certificate',
  major: 'Data Science and Business Analytics',
  startDate: 'January 2019',
  endDate: 'December 2019',
  gpa: 4.0,
  image: {
    imgId: 1,
    imgPath: 'assets/img/logos/uncc.png'
  }
}, {
  id: 3,
  university: 'Oregon State University',
  location: 'Corvallis, OR',
  degree: 'Graduate Certificate',
  major: 'Geographic Information Science',
  startDate: 'January 2012',
  endDate: 'May 2014',
  gpa: 3.93,
  image: {
    imgId: 2,
    imgPath: 'assets/img/logos/osu.png'
  }
}, {
  id: 4,
  university: 'Kean University',
  location: 'Union, NJ',
  degree: 'Bachelor of Science',
  major: 'Computer Science',
  startDate: 'September 2001',
  endDate: 'May 2004',
  image: {
    imgId: 3,
    imgPath: 'assets/img/logos/kean.png'
  }
}];
