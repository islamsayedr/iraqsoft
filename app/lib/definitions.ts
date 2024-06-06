
export type Update = {
  id: string;
  title: string;
  des: string;
  createdAt: Date;
  cover: string;
  video: string;
  userId: string;
};

export type UpdateResponse = Update[] | { error: string };
