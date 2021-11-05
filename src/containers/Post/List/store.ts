import { createContext } from 'react';
import { PostModel } from 'models/post';

export const StoreContext = createContext<{ state: PostModel[] | null }>({
  state: null,
});
