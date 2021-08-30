import React , { Component } from 'react';
import '../../src/stylesheets/bl.css';
import '../../src/fontawesome-free-5.15.3-web/css/fontawesome.css';
import '../../src/fontawesome-free-5.15.3-web/css/brands.css';
import '../../src/fontawesome-free-5.15.3-web/css/solid.css';

// {window.location.pathname.substr(4)}
// http://127.0.0.1:5000/
// http://managementstock.herokuapp.com/

class Bl extends Component {
    constructor(props) {

        super(props);

        this.state = {

            info_list_bl : [],
            money_info_list_bl : {},
            all_info : {},
            blinfo : {}
        }

    }
    componentDidMount(){

        fetch("https://managementstock.herokuapp.com/bl/" + window.location.pathname.substr(4),{

            method: "GET",

            headers: {

                "Content-Type": "application/json"

            }

        })

        .then(response => response.json())

        .then(data => {

            this.setState({

                info_list_bl: data.info_list_bl,
                money_info_list_bl : data.money_info_list_bl,
                blinfo : data.blinfo

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
        if (window.confirm("Are you sure you want to download the B.L. ?")) {
            fetch("https://managementstock.herokuapp.com/downloadbl/" + window.location.pathname.substr(4),{

                method: "GET",

                headers: {

                    "Content-Type": "application/json"

                }

            })

            .then(response => response.json())

            .then(data => {

                let name_of_factur = data.bl_id;
                window.open("https://managementstock.herokuapp.com/sendbl/" + name_of_factur, "_blank");
                window.open("https://managementstock.herokuapp.com/removebl/" + name_of_factur, "_blank");

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
        return (<div className="contai">
        <button onClick={this.submit_download}>Download</button>
            <div className="bl_all">
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
                        <p>{this.state.blinfo.Date_operation_list_bl}</p>
                    </div>
                </div>
                <div className="factur_number">
                    <p>{window.location.pathname.substr(4)}</p>
                </div>
                <div className="name_of_client">
                    <p>{this.state.blinfo.client_name}</p>
                </div>
                <div className="table_bl">
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

                                this.state.info_list_bl.map((val, index) => {

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

                                <td colSpan='1'>{this.state.money_info_list_bl.total_remise_money}</td>

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

export default Bl;
