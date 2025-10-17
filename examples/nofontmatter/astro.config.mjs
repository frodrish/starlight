import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';



const sidebarTest = [{
            label: 'Title Test',
            items: [
                { label: 'Test: No Title And No Header', slug: 'test/notitlenoheader' },
                { label: 'Test: No Title And With Header', slug: 'test/notitlewithheader' },
                { label: 'Test: With Title', slug: 'test/withtitle' },
            ],
        }]

export default defineConfig({
    integrations: [
    starlight({
        title: 'No Fontmatter',
        sidebar: sidebarTest,
    }),
    ],

});