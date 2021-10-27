import http from 'helpers/http';
export interface Post {
  id: string;
  title: string;
  content: string;
  thumbnail?: {
    url: string;
  };
}

export const getPosts = () => {
  return http.post('', {
    query: `{
        posts(
          sort:"updated_at:desc"
        ){
          id
          title
          content
        }
      }`,
  });
};
