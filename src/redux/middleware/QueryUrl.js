/* istanbul ignore file */

/*
 * url: the URL that should be called
 * queryMethod: get, post, put, delete, patch
 * queryPayload: json payload that needs to be send with the call
 * queryLoading: dispatch on loading
 * querySuccess: dispatch on success
 * queryFailed: dispatch on failure
 * authConfig: the current authConfig object
 * queryOptions: several options such as .headers
 */

export default function QueryUrl(
  url,
  queryMethod,
  queryPayload,
  queryLoading,
  querySuccess,
  queryFailed,
  queryOptions = {},
  token = '',
) {
  return async (dispatch) => {
    //dispatching onload
    dispatch({type: queryLoading, payload: queryPayload});

    return await callEndpoint(
      url,
      queryMethod,
      queryPayload,
      querySuccess,
      queryFailed,
      queryOptions,
      token,
      dispatch,
    );
  };
}

async function callEndpoint(
  url,
  queryMethod,
  queryPayload,
  querySuccess,
  queryFailed,
  queryOptions,
  token,
  dispatch,
) {
  //merging the query options
  let fetcHeaders = queryOptions;
  if (!fetcHeaders.headers) {
    fetcHeaders.headers = {};
  }
  if (!fetcHeaders.headers['Content-Type']) {
    fetcHeaders.headers['Content-Type'] = 'application/json';
  }
  if (token) {
    fetcHeaders.headers.Authorization = `Bearer ${token}`;
  }

  let fetchOptions = {
    method: queryMethod.toUpperCase(), // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    headers: fetchOptions,
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  };

  if (queryMethod === 'post') {
    fetchOptions = {
      method: queryMethod.toUpperCase(), // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      headers: fetchOptions,
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(queryPayload), // body data type must match "Content-Type" header
    };
  }

  return fetch(url, fetchOptions)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      dispatch({type: querySuccess, result: result, payload: queryPayload});
      return {
        type: querySuccess,
        result: result,
        payload: queryPayload,
      };
    })
    .catch((e) => {
      let returnPayload = {
        ...queryPayload,
        error: 'Failed to retrieve data',
      };
      dispatch({type: queryFailed, error: e, payload: returnPayload});
      return {type: queryFailed, error: e, payload: returnPayload};
    });
}
