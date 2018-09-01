module.exports = {
    title: 'Smash Resources',
    description: 'Shared Resources for all TOing and community affairs',
    serviceWorker: true,
    head: [
        ['link', { rel: 'icon', href: '/hero.png' }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
        ['meta', { name: 'theme-color', content: '#1986FF' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
        ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
    ],
    ga: 'UA-11825324-2', // 'UA-124245419-1',
    themeConfig: {
        nav: [
            { text: 'TOing', link: '/TOing/' },
            { text: 'Guides', link: '/Guides/' },
            { text: 'Resources', link: '/Resources/' }
        ],
        sidebar: [
			{
				title: 'Tournament Organizing',
				children: [
					'/TOing/',
					'/TOing/tourney',
					'/TOing/planning',
					'/TOing/weeklies',
					'/TOing/payouts',
					'/TOing/ruleset',
				]
			},
			{
				title: 'Guides',
				children: [
					'/Guides/',
				]
			},
			'/Resources/',
			'/'
		],
        lastUpdated: 'Last Updated',
        
    }
}