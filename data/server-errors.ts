export const serverErrors = {
  internalServerError: {
    status: 500,
    contentType: 'application/json',
    body: JSON.stringify({ success: false, data: { message: 'Internal Server Error', data: [] } }),
  },
  badGateway: {
    status: 502,
    contentType: 'application/json',
    body: JSON.stringify({ success: false, data: { message: 'Bad Gateway', data: [] } }),
  },
  serviceUnavailable: {
    status: 503,
    contentType: 'application/json',
    body: JSON.stringify({ success: false, data: { message: 'Service Unavailable', data: [] } }),
  },
};
