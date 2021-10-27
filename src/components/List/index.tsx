import React, { useMemo, useContext } from 'react';
import { StoreContext } from 'containers/PostList/store';

const List = () => {
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

export default List;
