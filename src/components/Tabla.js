import React from 'react';
import 'datatables.net';
import 'datatables.net-bs4';
import $ from 'jquery';
import 'datatables.net-responsive';

function Tabla(){


        /** CREAMOS EL DATASET */

    const dataSet = [
        ["IT Issue", "Nov 02, 2020", "60552bc48603c22c7428ebf2"],
        ["Login Issue", "Nov 02, 2020", "605be423691efb3f6c74a2fa" ]
    ]

    /** EJECUTAMOS DATATABLES */
    $( window ).on( "load", function() {
        console.log( "window loaded" );
        $('.table').DataTable({
            data: dataSet,
            columns:[

                { title: "TICKET TYPE"},
                { title: "CREATE ON"},
                { title: "PRIORITY",
                    render: function(data){
                        return `
                            <a href="#"> <svg style="color:black; background:orange; border-radius:100%; width: 35px; line-height: 35px; text-aling: center; padding: 8px"
                            aria-hidden="true" focusable="false" data-prefix="fas" 
                            data-icon="pencil-alt" class="svg-inline--fa fa-pencil-alt fa-w-16" 
                            role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" 
                            d="M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM124.1 339.9c-5.5-5.5-5.5-14.3 0-19.8l154-154c5.5-5.5 14.3-5.5 19.8 0s5.5 14.3 0 19.8l-154 154c-5.5 5.5-14.3 5.5-19.8 0zM88 424h48v36.3l-64.5 11.3-31.1-31.1L51.7 376H88v48z">
                            </path></svg> </a>

                            <a href="#"><svg style="color:white; background:#f00; border-radius:100%; width: 35px; line-height: 35px; text-aling: center; padding: 8px"
                            aria-hidden="true" focusable="false" data-prefix="fas" 
                            data-icon="trash-alt" class="svg-inline--fa fa-trash-alt fa-w-14" 
                            role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" 
                            d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z">
                            </path></svg> </a>`
                    }
                },
                {title: "ASSIGNED TO"},
                {title: "STUATUS"}
            ]
        });
    }) 

    return(
        
                    <div className="col-sm-6">
                        <h1 className="m-0 text-dark">Administradores</h1>
                    </div>
            
    )
}

export default Tabla