export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5dc958d61b2a54ae39ac9f27',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-graphql-blog-studio',
                  apiId: '43a8742c-f6fb-406a-9cdd-c816daa49ed5'
                },
                {
                  buildHookId: '5dc958d62e96d36d1d22a5da',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-graphql-blog',
                  apiId: '1024ae59-1e55-421d-862b-02a17fbe2e2a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/anistark/sanity-gatsby-graphql-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-graphql-blog.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
