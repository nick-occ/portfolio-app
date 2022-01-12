export interface ResumeProject {
  id: number;
  name: string;
  desc: string[];
  url?: {
    name: string;
    link: string
  };
}
