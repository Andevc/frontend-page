import React from "react";

const DashboardLayout = ({title, children}) => {
    return(
        <>
        <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>{title}</title>
        </head>
        <body>
            {children}
        </body>
        </html>
        </>
        
    );
}

export default DashboardLayout;