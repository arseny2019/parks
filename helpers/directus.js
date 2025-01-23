const publicUserToken = 'amjU1ZjQOSHpFmdjBBWbeCvDQbt1UpUr';
const directusAPIUrl = 'https://dir.parksdev.ru';
export const getImageURL = (imageId) => `${directusAPIUrl}/assets/${imageId}?access_token=${publicUserToken}`
