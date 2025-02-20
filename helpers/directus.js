export const publicUserToken = 'my5h8azgLjxN36-gCDBVXGN_lIF3SjYi';
const directusAPIUrl = 'https://directus.parks.arsdev.space';
export const getImageURL = (imageId) => `${directusAPIUrl}/assets/${imageId}?access_token=${publicUserToken}`
