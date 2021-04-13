import React from 'react';
import 'datatables.net';
import 'datatables.net-bs4';
import $ from 'jquery';
import 'datatables.net-responsive';

function TicketStatus(){

    /** CREAMOS EL DATASET */

    const dataSet = [
        ["IT Issue", "Nov 02, 2020", "", "Ashley Steve", " In progress"],
        ["Login Issue", "Nov 02, 2020","", "Ashley Steve", "Not assigned" ]
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
                        <a><svg style="color:black; background:orange;
                        border-radius:100%; width:35px; line-height: 35px; padding: 8px;
                        aria-hidden="true" focusable="false" data-prefix="fas" data-icon="exclamation-circle" class="svg-inline--fa fa-exclamation-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"></path></svg></a>
                        
                        <a><svg  style="color:black; background:orange;
                        border-radius:100%; width:35px; line-height: 35px; padding: 8px;
                        aria-hidden="true" focusable="false" data-prefix="far" data-icon="eye" class="svg-inline--fa fa-eye fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M288 144a110.94 110.94 0 0 0-31.24 5 55.4 55.4 0 0 1 7.24 27 56 56 0 0 1-56 56 55.4 55.4 0 0 1-27-7.24A111.71 111.71 0 1 0 288 144zm284.52 97.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400c-98.65 0-189.09-55-237.93-144C98.91 167 189.34 112 288 112s189.09 55 237.93 144C477.1 345 386.66 400 288 400z"></path></svg></a>
                        ` }
                    },
                    {title: "ASSIGNED TO"},
                    {title: "STUATUS"}
                ]
            });
        }) 

    return(
    <div className="content-wrapper">
         <div className="container-fluid">
            <div className="row mb-2">
                <div className="col-sm-6">
                    <h3 className="m-0">Ticket status</h3>
                </div>
                <div className="col-sm-6"> 
                    <ol className="breadcrumb float-sm-right">
                        <li className="breadcrumb-item"><a href="#">FAQS</a></li>
                        <li className="breadcrumb-item active">Help & suppots</li>
                    </ol>
                </div>
            </div>
        </div>

        <section className="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-3 col-6">
                    <div class="small-box bg-info">
                        <div class="inner">
                            <h3><center>1</center></h3>
                            <p><center>Open Tickets</center></p>
                        </div>
                    </div>
                </div>

                <div class="col-lg-3 col-6">
                    <div class="small-box bg-info">
                        <div class="inner">
                            <h3><center style={{color: "green"}}>8</center></h3>
                            <p><center>Resolved</center></p>
                        </div> 
                    </div>
                </div>

                <div class="col-lg-3 col-6">
                    <div class="small-box bg-info">
                        <button type="button" className="btn btn-block btn-secondary btn-lg">Create Ticket</button>
                    </div>
                </div>
            </div>
            
        </div>
        </section>

        <div>
            <div className="card-body">My tickets
                <table className="table table-striped table-bordered dt-responsive" style={{"width":"100"}}>

                </table>
            </div>
        </div>
    </div>
    );
}

export default TicketStatus