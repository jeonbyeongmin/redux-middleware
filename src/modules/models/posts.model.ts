import { AxiosError } from "axios";

export interface PostData {
  id: number;
  title: string;
  body: string;
}

export interface PostsState {
  loading: boolean;
  data: PostData[] | null;
  error: AxiosError | null;
}
