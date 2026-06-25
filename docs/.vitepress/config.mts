import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'en-US',
  title: 'Mastering Claude',
  description:
    'A practical handbook to master Claude for real work: models, prompting, coworking, workflows, skills, and integrations.',
  lastUpdated: true,
  cleanUrls: true,

  head: [
    ['meta', { name: 'theme-color', content: '#d97757' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'Mastering Claude' }],
    [
      'meta',
      {
        property: 'og:description',
        content: 'Learn to use Claude to supercharge your everyday work.',
      },
    ],
  ],

  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'Mastering Claude',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Get Started', link: '/getting-started/meet-claude' },
      { text: 'Prompting', link: '/prompting/fundamentals' },
      { text: 'Workflows', link: '/workflows/' },
      {
        text: 'Resources',
        items: [
          { text: 'Official Claude Docs', link: 'https://docs.claude.com' },
          { text: 'claude.ai', link: 'https://claude.ai' },
          { text: 'Anthropic', link: 'https://www.anthropic.com' },
        ],
      },
    ],

    sidebar: [
      {
        text: 'Introduction',
        collapsed: false,
        items: [
          { text: 'Welcome', link: '/' },
          { text: 'How to use this handbook', link: '/introduction/how-to-use' },
        ],
      },
      {
        text: 'Getting Started',
        collapsed: false,
        items: [
          { text: 'Meet Claude', link: '/getting-started/meet-claude' },
          { text: 'Where to use Claude', link: '/getting-started/interfaces' },
          { text: 'Your first conversation', link: '/getting-started/first-conversation' },
          { text: 'Plans, limits & access', link: '/getting-started/plans' },
        ],
      },
      {
        text: 'Models',
        collapsed: false,
        items: [
          { text: 'The Claude model family', link: '/models/family' },
          { text: 'Choosing the right model', link: '/models/choosing' },
          { text: 'Thinking & effort', link: '/models/thinking' },
        ],
      },
      {
        text: 'Prompting',
        collapsed: false,
        items: [
          { text: 'Prompting fundamentals', link: '/prompting/fundamentals' },
          { text: 'Anatomy of a great prompt', link: '/prompting/anatomy' },
          { text: 'Core techniques', link: '/prompting/techniques' },
          { text: 'Iterating & refining', link: '/prompting/iterating' },
          { text: 'Common pitfalls', link: '/prompting/pitfalls' },
          { text: 'Prompt templates', link: '/prompting/templates' },
        ],
      },
      {
        text: 'Coworking with Claude',
        collapsed: false,
        items: [
          { text: 'Overview', link: '/coworking/' },
          { text: 'Projects', link: '/coworking/projects' },
          { text: 'Artifacts', link: '/coworking/artifacts' },
          { text: 'Files & long context', link: '/coworking/files' },
          { text: 'Memory', link: '/coworking/memory' },
        ],
      },
      {
        text: 'Workflows for Work',
        collapsed: false,
        items: [
          { text: 'Overview', link: '/workflows/' },
          { text: 'Writing & communication', link: '/workflows/writing' },
          { text: 'Documents & reports', link: '/workflows/documents' },
          { text: 'Data & spreadsheets', link: '/workflows/data' },
          { text: 'Research & analysis', link: '/workflows/research' },
          { text: 'Meetings & notes', link: '/workflows/meetings' },
          { text: 'Build a repeatable workflow', link: '/workflows/repeatable' },
        ],
      },
      {
        text: 'Skills',
        collapsed: false,
        items: [
          { text: 'What are Agent Skills', link: '/skills/overview' },
          { text: 'Using built-in skills', link: '/skills/built-in' },
          { text: 'Creating your own skill', link: '/skills/creating' },
        ],
      },
      {
        text: 'Connecting Tools',
        collapsed: false,
        items: [
          { text: 'MCP & connectors', link: '/integrations/mcp' },
          { text: 'Claude Code', link: '/integrations/claude-code' },
          { text: 'Agents & computer use', link: '/integrations/agents' },
        ],
      },
      {
        text: 'Best Practices',
        collapsed: false,
        items: [
          { text: 'Effective habits', link: '/best-practices/habits' },
          { text: 'Privacy & data', link: '/best-practices/privacy' },
          { text: 'Limitations & trust', link: '/best-practices/limitations' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com' },
    ],

    search: {
      provider: 'local',
    },

    editLink: {
      pattern: 'https://github.com/your-org/claude-mastery-docs/edit/main/docs/:path',
      text: 'Suggest an edit to this page',
    },

    footer: {
      message:
        'Educational material about Claude. Not affiliated with Anthropic. Always verify against official docs.',
      copyright: 'Crafted for people who want to do their best work with Claude.',
    },

    outline: { level: [2, 3], label: 'On this page' },
    docFooter: { prev: 'Previous', next: 'Next' },
  },
})
