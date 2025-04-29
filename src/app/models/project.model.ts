export interface Material {
  name: string;
  iconUrl: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  implementDetails: string;
  duration: string;
  imageUrl: string;
  route: string | string[];
  materials?: Material[];
  gitHubUrl: string;
  liveTestUrl: string;
}
