export const publicUserToken = 'aUPKKNMKZ0NZ7YRzOAVfjtc8i34G_rEK';
const directusAPIUrl = 'https://admin.parkirussia.ru';
export const getImageURL = (imageId) => `${directusAPIUrl}/assets/${imageId}?access_token=${publicUserToken}&q=100`
// export const getImageURL = async (imageId) => await directus.request(readAssetRaw(imageId, { quality: 100, access_token: publicUserToken }));
