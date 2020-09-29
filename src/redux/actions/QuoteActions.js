// Uncomment this import for the QueryUrl function that handles calls to the BFFs.
import QueryUrl from '../middleware/QueryUrl';

const QuoteTypes = {
  RESETQUOTE: 'RESET_QUOTE',
  LOADINGQUOTE: 'LOADING_QUOTE',
  SUCCESSQUOTE: 'SUCCESS_QUOTE',
  FAILEDQUOTE: 'FAILED_QUOTE',
};
export {QuoteTypes};

const QuoteActions = {
  resetQuote: () => {
    return (dispatch) => {
      return dispatch({
        type: QuoteTypes.RESETQUOTE,
      });
    };
  },
  getRandomQuote: (token = '') => {
    return QueryUrl(
      'https://api.chucknorris.io/jokes/random',
      'GET',
      {},
      QuoteTypes.LOADINGQUOTE,
      QuoteTypes.SUCCESSQUOTE,
      QuoteTypes.FAILEDQUOTE,
    );
  },
};

export default QuoteActions;
