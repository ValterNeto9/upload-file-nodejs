const express = require( 'express' )
  , app = express()
  , bodyParser = require( 'body-parser' )
  , multiparty = require( 'connect-multiparty' )
  
  app.use( bodyParser.urlencoded( { extended: true } ) )
  app.use( bodyParser.json() )

  const port = process.env.PORT || 8080
  const router = express.Router()
  
  app.get('/', ( req, res ) => {
    res.sendfile('index.html')
  }) 

  app.use( '/api', router )

  router.route( '/upload' )
  .post( multiparty(), require( './controllers/upload' ) )
   
  app.listen( port )
    
  console.log( `Acesse a API: POST - http://localhost:${ port }/api/upload` )
  console.log( `Acesse pelo browser: http://localhost:${ port }` )