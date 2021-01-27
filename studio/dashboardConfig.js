export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '6011a3fa1872b45abf38a313',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-yp29ehxw',
                  apiId: '1631cfe6-1e86-433c-bcbd-d67126b9f011'
                },
                {
                  buildHookId: '6011a3fa57c0b6c1c8d01c9b',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-zqzf4goj',
                  apiId: 'c644767a-f1dc-4362-96af-9f0165d76efb'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/deesonrohan/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-zqzf4goj.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
