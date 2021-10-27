import React, { createContext } from 'react';
import { Post } from 'api/index';

export type PostListProps = Post[] | null;

export const StoreContext = createContext<PostListProps>(null);
