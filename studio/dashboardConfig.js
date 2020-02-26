export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e56aba0f80fcb3843765200',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-zr2zv1kv',
                  apiId: '93696e43-e071-47b0-b039-672449947b27'
                },
                {
                  buildHookId: '5e56aba15d5d0120c5a371ab',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-u1hb4d9s',
                  apiId: '7e4783cc-7827-4ceb-b7c7-cdfd9b4359d3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/KerstinPeschelle/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-u1hb4d9s.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
