import { createDirectus, rest } from '@directus/sdk';

const directus = createDirectus('https://directus.parks.arsdev.space/').with(rest(
    {
        onRequest: (options) => ({ ...options, cache: 'no-store' }),
    }
));

export default directus;
