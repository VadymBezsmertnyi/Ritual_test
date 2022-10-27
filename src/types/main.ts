export type TPageTemplates = {
  id: number;
  header: string;
  body: string;
  createdAt: string;
  updatedAt: string;
};

export interface IInitialState {
  pages: TPageTemplates[];
  templates: TPageTemplates[];
  select: TPageTemplates | null;
}
