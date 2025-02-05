const publicUserToken = 'PZwaTv9GE6A8yoz4qJzkPDyWd3xd20s9';
const directusAPIUrl = 'https://dir.parksdev.ru';
export const getImageURL = (imageId) => `${directusAPIUrl}/assets/${imageId}?access_token=${publicUserToken}`
