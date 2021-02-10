import {Experience} from './experience';
import {Education} from './education';
import {ResumeProject} from './resume-project';

export interface Resume {
  experience: Experience[];
  education: Education[];
  resumeProject: ResumeProject[];
}
