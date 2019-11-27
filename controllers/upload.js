const fs = require('fs')
  
module.exports = ( req, res ) => {
    const { path: temporario , name } = req.files.file
    const novo = `./uploads/ ${ name }`

    fs.rename( temporario, novo, ( err ) => {
        if( err ) res.status( 500 ).json( { error: err } )
        res.json( { message: "enviado com sucesso.", file: novo } )
    })
}