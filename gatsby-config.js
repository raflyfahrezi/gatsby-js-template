module.exports = {
    siteMetadata: {
        title: 'Gatsby Template',
    },
    plugins: [
        'gatsby-plugin-styled-components',
        'gatsby-plugin-image',
        'gatsby-plugin-react-helmet-async',
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: './src/images/',
            },
            __key: 'images',
        },
        {
            resolve: 'gatsby-plugin-module-resolver',
            options: {
                root: './src',
                aliases: {
                    Images: './images',
                    Styles: './styles',
                    Module: './modules',
                    Typography: './typography',
                    Components: './components',
                },
            },
        },
    ],
}
