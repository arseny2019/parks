const publicUserToken = 'hz-9nMi3viSaUx56OoYAXGYywHLHCSSY';
const directusAPIUrl = 'https://dir.parksdev.ru';
export const getImageURL = (imageId) => `${directusAPIUrl}/assets/${imageId}?access_token=${publicUserToken}`
