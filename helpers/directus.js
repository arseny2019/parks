export const publicUserToken = 'my5h8azgLjxN36-gCDBVXGN_lIF3SjYi';
const directusAPIUrl = 'https://admin.parkirussia.ru';
export const getImageURL = (imageId) => `${directusAPIUrl}/assets/${imageId}?access_token=${publicUserToken}&q=100`
// export const getImageURL = async (imageId) => await directus.request(readAssetRaw(imageId, { quality: 100, access_token: publicUserToken }));
