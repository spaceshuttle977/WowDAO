import React from 'react';



const Head = () => {
    return (
        <html lang="en">
            <meta charset="utf-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
            <meta name={metadata.description}/>
            <meta name={metadata.author}/>
            <title>{metadata.title}</title>           
        </html>
    )
}

export default Head

