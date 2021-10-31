import { createContext } from 'react';
import { Post } from 'api/';

export const StoreContext = createContext<{ state: Post | null }>({
  state: null,
});
