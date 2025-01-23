const publicUserToken = 'G8-9xwI2NNlV9hM6_e2QVxW2dSXuyCMQ';
const directusAPIUrl = 'https://dir.parksdev.ru';
export const getImageURL = (imageId) => `${directusAPIUrl}/assets/${imageId}?access_token=${publicUserToken}`
