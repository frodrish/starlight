import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';



const sidebarTest = [{
	label: 'Title Test',
	items: [
		{ label: 'Test: Index', slug: 'test' },
		{ label: 'Test: Empty', slug: 'test/empty' },
		{ label: 'Test: No Title And No Header', slug: 'test/notitlenoheader' },
		{ label: 'Test: No Title And With Header', slug: 'test/notitlewithheader' },
		{ label: 'Test: With Title And No Header', slug: 'test/withtitlenoheader' },
		{ label: 'Test: With Title And With Header', slug: 'test/withtitlewithheader' },
	],
}]

export default defineConfig({
    integrations: [
    starlight({
        title: 'No Fontmatter',
        //sidebar: sidebarTest,
    }),
    ],

});