import { createDirectus, rest } from '@directus/sdk';

const directus = createDirectus('https://admin.parkirussia.ru/').with(rest(
    {
        onRequest: (options) => ({ ...options, cache: 'no-store' }),
    }
));

export default directus;
