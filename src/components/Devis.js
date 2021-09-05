import React , { Component } from 'react';
import '../../src/stylesheets/devis.css';
import '../../src/fontawesome-free-5.15.3-web/css/fontawesome.css';
import '../../src/fontawesome-free-5.15.3-web/css/brands.css';
import '../../src/fontawesome-free-5.15.3-web/css/solid.css';

// {window.location.pathname.substr(7)}
// http://127.0.0.1:5000/
// http://managementstock.herokuapp.com/

class Devis extends Component {
    constructor(props) {

        super(props);

        this.state = {

            info_list_devis : [],
            money_info_list_devis : {},
            all_info : {},
            devisinfo : {}
        }

    }
    componentDidMount(){

        fetch("http://asyd12855.pythonanywhere.com/devis/" + window.location.pathname.substr(7),{

            method: "GET",

            headers: {

                "Content-Type": "application/json"

            }

        })

        .then(response => response.json())

        .then(data => {

            this.setState({

                info_list_devis: data.info_list_devis,
                money_info_list_devis : data.money_info_list_devis,
                devisinfo : data.devisinfo

            })

        })

        .catch(error => {

            console.error(

                "There has been a problem:",

                error

            );

        });
        fetch("http://asyd12855.pythonanywhere.com/settingsinfo",{

            method: "GET",

            headers: {

                "Content-Type": "application/json"

            }

        })

        .then(response => response.json())

        .then(data => {

            this.setState({

                all_info : data.all_info

            })

        })

        .catch(error => {

            console.error(

                "There has been a problem:",

                error

            );

        });

    }
    submit_download = (e) => {
        e.preventDefault();
        if (window.confirm("Are you sure you want to download the Devis?")) {
            fetch("http://asyd12855.pythonanywhere.com/downloaddevis/" + window.location.pathname.substr(7),{

                method: "GET",

                headers: {

                    "Content-Type": "application/json"

                }

            })

            .then(response => response.json())

            .then(data => {

                let name_of_factur = data.devis_id;
                window.open("http://asyd12855.pythonanywhere.com/senddevis/" + name_of_factur, "_blank");
                window.open("http://asyd12855.pythonanywhere.com/removedevis/" + name_of_factur, "_blank");

            })

            .catch(error => {

                console.error(

                    "There has been a problem:",

                    error

                );

            });
        }
    }
    render(){
        return (<div className="conta">
        <button onClick={this.submit_download}>Download</button>
            <div className="devis_all">
                <div className="info_company">
                    <div className="nameofcompany">
                        <p>{this.state.all_info.nom_ste_company}</p>
                        <p>{this.state.all_info.addresse_company}</p>
                        <p>{this.state.all_info.tel_company}</p>
                    </div>
                    <div className="photodate">
                        <img src={'http://asyd12855.pythonanywhere.com/companylogo/' + this.state.all_info.image_name_company} alt='' id="output" />
                        <p>{this.state.devisinfo.Date_operation_list_devis}</p>
                    </div>
                </div>
                <div className="factur_number">
                    <p>{window.location.pathname.substr(7)}</p>
                </div>
                <div className="name_of_client">
                    <p>{this.state.devisinfo.client_name}</p>
                </div>
                <div className="table_devis">
                    <table>

                        <thead>

                            <tr>

                                <th>Code</th>

                                <th>Desi</th>

                                <th>P.U</th>

                                <th>QTY</th>

                                <th>Remise</th>

                                <th>Total</th>

                            </tr>

                        </thead>

                        <tbody>

                            {

                                this.state.info_list_devis.map((val, index) => {

                                    return (

                                        <tr>
                                            <td>{val.referance_info}</td>
                                            <td>{val.description_info}</td>
                                            <td>{val.p_u_info}</td>
                                            <td>{val.qty_info}</td>
                                            <td>{val.remise_info}</td>
                                            <td>{val.total_info}</td>
                                        </tr>

                                    );

                                })

                            }

                            <tr>

                                <td colSpan='5'>Total sans TVA</td>

                                <td colSpan='1'>{this.state.money_info_list_devis.total_ht_money}</td>

                            </tr> 

                        </tbody>

                    </table>
                </div>
                <div className="signature">
                    <p>signature</p>
                </div>
            </div>
        </div>);
    }
}

export default Devis;