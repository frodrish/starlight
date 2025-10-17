import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

const docs = defineCollection({
    loader: glob({ pattern: '**/*.(md|mdx)', base: './src/content/docs' }),
    schema: null,
})

const docs2 =  defineCollection({
    loader: docsLoader(),
    schema: (context) =>
        z.preprocess(
            (frontmatter) => ({ title: '', ...frontmatter }),
            docsSchema()(context)
        ),
})

export const collections = {
 docs
};
