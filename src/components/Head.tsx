import favico from  './../assets/favicon/favicon.ico'
import favicoApple from  './../assets/favicon/apple-touch-icon.png'
import favivo32 from './../assets/favicon/favicon-32x32.png'
import favivo16 from './../assets/favicon/favicon-16x16.png'
import manifiest from './../assets/favicon/site.webmanifest'

function Head() {
    return (
        <head>
            <meta charSet="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>

            <title>Esteban García | Desarrollador Full Stack | PHP, Laravel, Magento, Java, Node.js</title>
            <meta name="description"
                  content="Portafolio profesional de Esteban García. Desarrollador Full Stack especializado en PHP, Laravel 8/9, Magento 1/2, Java, Node.js, CodeIgniter y administración Linux."/>
            <meta name="keywords"
                  content="desarrollador full stack, PHP, Laravel, Magento, Java, Node.js, CodeIgniter, Linux, backend, Esteban García"/>
            <meta name="author" content="Esteban García"/>

            <link rel="icon" href={favico}/>
            <link rel="apple-touch-icon" sizes="180x180" href={favicoApple}/>
            <link rel="icon" type="image/png" sizes="32x32" href={favivo32}/>
            <link rel="icon" type="image/png" sizes="16x16" href={favivo16}/>
            <link rel="manifest" href={manifiest}/>

            <link rel="canonical" href="https://esteban.etertec.co/"/>

        </head>
    )
}

export default Head;