export interface VideoAttributes {
  createdAt: string;
  description?: string;
  isPublic: boolean;
  poster?: string;
  slug: string;
  title: string;
  updatedAt: string;
  url: string;
}

export interface VideoObject {
  id: string;
  attributes: VideoAttributes;
}
