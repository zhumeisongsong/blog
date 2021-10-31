import { useMemo } from 'react';
import { Post } from 'api/';

const ArticleContent = ({ data }: { data: Post }) => {
  return useMemo(() => <div>detail</div>, []);
};

export default ArticleContent;
