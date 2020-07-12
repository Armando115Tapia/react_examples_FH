import React, { memo } from 'react';

export const Small = memo(({ value }) => {
  console.log('Call myself again');
  return <small>{value}</small>;
});
