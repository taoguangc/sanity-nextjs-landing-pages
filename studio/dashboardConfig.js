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
                  buildHookId: '6038b1b250b25b8e08b9ded8',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-f5bwh8ms',
                  apiId: 'cddb85a6-c4d6-49d9-932a-9cbdd2436fbb'
                },
                {
                  buildHookId: '6038b1b23ad19caf0310e5a9',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-unudd912',
                  apiId: 'a33e1b26-9391-4f19-91b6-edd0f97200db'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/taoguangc/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-unudd912.netlify.app', category: 'apps'}
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
