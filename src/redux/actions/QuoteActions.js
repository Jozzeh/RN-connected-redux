// Uncomment this import for the QueryUrl function that handles calls to the BFFs.
import QueryUrl from '../middleware/QueryUrl';

const QuoteTypes = {
  LOADINGQUOTE: 'LOADING_QUOTE',
  SUCCESSQUOTE: 'SUCCESS_QUOTE',
  FAILEDQUOTE: 'FAILED_QUOTE',
};
export {QuoteTypes};

const QuoteActions = {
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
