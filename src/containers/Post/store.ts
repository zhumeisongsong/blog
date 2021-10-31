import { createContext } from 'react';
import { Post } from 'api/';

export type PostListProps = Post[] | null;

export const StoreContext = createContext<PostListProps>(null);
