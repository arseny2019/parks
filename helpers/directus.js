export const publicUserToken = 'my5h8azgLjxN36-gCDBVXGN_lIF3SjYi';
const directusAPIUrl = 'https://dir.parksdev.ru';
export const getImageURL = (imageId) => `${directusAPIUrl}/assets/${imageId}?access_token=${publicUserToken}`
