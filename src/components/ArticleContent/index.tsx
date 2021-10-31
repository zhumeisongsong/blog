import { useMemo, useContext } from 'react';
import { Typography } from 'antd';
import ReactMarkdown from 'react-markdown';

import { StoreContext } from 'containers/Post/Detail/store';

const { Title } = Typography;

const ArticleContent = () => {
  const { state } = useContext(StoreContext);

  return useMemo(
    () => (
      <Typography>
        <Title>{state?.title}</Title>
        {state?.content && <ReactMarkdown>{state.content}</ReactMarkdown>}
      </Typography>
    ),
    [state]
  );
};

export default ArticleContent;
