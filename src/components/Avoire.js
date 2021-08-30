import React , { Component } from 'react';
import '../../src/stylesheets/avoire.css';
import '../../src/fontawesome-free-5.15.3-web/css/fontawesome.css';
import '../../src/fontawesome-free-5.15.3-web/css/brands.css';
import '../../src/fontawesome-free-5.15.3-web/css/solid.css';

// {window.location.pathname.substr(8)}
// http://127.0.0.1:5000/
// http://managementstock.herokuapp.com/

class Avoire extends Component {
    constructor(props) {

        super(props);

        this.state = {

            info_list_avoire : [],
            money_info_list_avoire : {},
            all_info : {},
            avoireinfo : {}
        }

    }
    componentDidMount(){

        fetch("https://managementstock.herokuapp.com/avoire/" + window.location.pathname.substr(8),{

            method: "GET",

            headers: {

                "Content-Type": "application/json"

            }

        })

        .then(response => response.json())

        .then(data => {

            this.setState({

                info_list_avoire: data.info_list_avoire,
                money_info_list_avoire : data.money_info_list_avoire,
                avoireinfo : data.avoireinfo

            })

        })

        .catch(error => {

            console.error(

                "There has been a problem:",

                error

            );

        });
        fetch("https://managementstock.herokuapp.com/settingsinfo",{

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
        if (window.confirm("Are you sure you want to download the Avoire?")) {
            fetch("https://managementstock.herokuapp.com/downloadavoire/" + window.location.pathname.substr(8),{

                method: "GET",

                headers: {

                    "Content-Type": "application/json"

                }

            })

            .then(response => response.json())

            .then(data => {

                let name_of_factur = data.avoire_id;
                window.open("https://managementstock.herokuapp.com/sendavoire/" + name_of_factur, "_blank");
                window.open("https://managementstock.herokuapp.com/removeavoire/" + name_of_factur, "_blank");

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
        return (<div className="contaier">
        <button onClick={this.submit_download}>Download</button>
            <div className="avoire_all">
                <div className="info_company">
                    <div className="nameofcompany">
                        <p>{this.state.all_info.nom_ste_company}</p>
                        <p>{this.state.all_info.patente_company}</p>
                        <div className="parainfo">
                            <p>{this.state.all_info.if_company}</p>
                            <p>{this.state.all_info.r_c_company}</p>
                        </div>
                        <p>{this.state.all_info.cnss_company}</p>
                        <p>{this.state.all_info.ice_company}</p>
                    </div>
                    <div className="photodate">
                        <img src={'https://managementstock.herokuapp.com/companylogo/' + this.state.all_info.image_name_company} alt='' id="output" />
                        <p>{this.state.avoireinfo.Date_operation_list_avoire}</p>
                    </div>
                </div>
                <div className="factur_number">
                    <p>{window.location.pathname.substr(8)}</p>
                    <p>{this.state.avoireinfo.iceclient}</p>
                </div>
                <div className="name_of_client">
                    <p>{this.state.avoireinfo.client_name}</p>
                </div>
                <div className="table_avoire">
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

                                this.state.info_list_avoire.map((val, index) => {

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

                                <td colSpan='5'>Total HT</td>

                                <td colSpan='1'>{this.state.money_info_list_avoire.total_ht_money}</td>

                            </tr>

                            <tr>
                                <td colSpan='5'>Total Remise</td>
                                <td colSpan='1'>{this.state.money_info_list_avoire.total_remise_money}</td>
                            </tr>

                            <tr>
                                <td colSpan='5'>TVA 20%</td>
                                <td colSpan='1'>{this.state.money_info_list_avoire.tva_money_info}</td>
                            </tr>

                            <tr>
                                <td colSpan='5'>Total TTC</td>
                                <td colSpan='1'>{this.state.money_info_list_avoire.total_ttc_money}</td>
                            </tr>

                        </tbody>

                    </table>
                </div>
                <div className="signature">
                    <p>signature</p>
                </div>
                <hr />
                <div className="addresse">
                    <p>{this.state.all_info.addresse_company}</p>
                    <p>{this.state.all_info.tel_company}</p>
                </div>
            </div>
        </div>);
    }
}

export default Avoire;