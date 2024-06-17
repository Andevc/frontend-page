import React from "react";

const AuthLayout = ({title, children}) => {
    return(
        <>
        <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>{title}</title>
        </head>
        <body className="bg-gray-900  ">

            {children}
        </body>
        </html>
        </>
        
    );
}

export default AuthLayout;