import { createModel } from '@rematch/core';
import { RootModel } from '.';
import { getPosts, getPost, Post } from '../api';

export type PostModel = Post & {
  thumbnail?: string;
};

const initState: {
  listData: PostModel[] | null;
  detailData: PostModel | null;
} = {
  listData: null,
  detailData: null,
};

export default createModel<RootModel>()({
  state: initState,
  reducers: {
    setState: (state, payload) => ({
      ...state,
      ...payload,
    }),
  },
  effects: (dispatch) => ({
    async getListDataAsync(payload, rootState) {
      const res = await getPosts();
      const formatedData = res.data.posts.map((item: Post) => ({
        ...item,
        thumbnail:
          (process.env.REACT_APP_API_HOST || '') + (item.thumbnail?.url || ''),
      }));

      console.log(formatedData);

      this.setState({ listData: formatedData });
    },
    async getDetailDataAsync(payload, state) {
      this.setState({ detailData: null });

      const res = await getPost(payload);
      const formatedData = {
        ...res.data.post,
        thumbnail:
          process.env.REACT_APP_API_HOST ||
          '' + res.data.post.thumbnail?.url ||
          '',
      };

      this.setState({ detailData: formatedData });
    },
  }),
});
