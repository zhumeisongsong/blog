import http from 'helpers/http';
export interface Post {
  id: string;
  title: string;
  content?: string;
  thumbnail?: {
    url: string;
  };
  published_at: string;
  updated_at: string;
}

export const getPosts = () => {
  return http.post('', {
    query: `{
      posts(
        sort:"updated_at:desc"
      ){
        id
        title
        published_at
      }
    }`,
  });
};

export const getPost = (id: string) => {
  return http.post('', {
    query: `
    project(
      id:"${id}"
    ) {
      id
      title
      content
      published_at
      updated_at
    }`,
  });
};
