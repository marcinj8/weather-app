import React from 'react';

import {
  StyledAsyncView,
  StyledSpinner,
  StyledErrorMessage,
} from './asyncView.scss';

const AsyncView = ({ loading, error, errorMessage }) => {
  return (
    <StyledAsyncView>
      {loading && <StyledSpinner />}
      {error && <StyledErrorMessage>{errorMessage}</StyledErrorMessage>}
    </StyledAsyncView>
  );
};

export default AsyncView;
