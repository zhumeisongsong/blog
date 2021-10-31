import { useMemo, useContext } from 'react';
import { StoreContext } from 'containers/Post/store';

const GridList = () => {
  const data = useContext(StoreContext);

  return useMemo(
    () => (
      <div>
        {data &&
          data.length > 0 &&
          data.map((item) => <div key={item.id}>{item.title}</div>)}
      </div>
    ),
    [data]
  );
};

export default GridList;
