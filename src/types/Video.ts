export interface VideoObject {
  id: string;
  attributes: {
    createdAt: string;
    description?: string;
    isPublic: boolean;
    poster?: string;
    slug: string;
    title: string;
    updatedAt: string;
    url: string;
  };
}
