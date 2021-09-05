import React , { Component } from 'react';

import '../stylesheets/Dashbord.css';

import '../../src/fontawesome-free-5.15.3-web/css/fontawesome.css';

import '../../src/fontawesome-free-5.15.3-web/css/brands.css';

import '../../src/fontawesome-free-5.15.3-web/css/solid.css';

import usericon from  '../usericon.jpg';

import AnyChart from '../../node_modules/anychart-react/dist/anychart-react.min.js';
// https://managementstock.herokuapp.com/
// http://127.0.0.1:5000/
// http://127.0.0.1:3000/
// https://managementstock1.herokuapp.com/

class Dashbord extends Component {

    constructor(props) {

        super(props);

        this.state = {

            image : "",
            vente_add : [],
            regelmentvente : {},
            total_remise_vente : 0,
            tva_vente : 0,
            total_ht_vente : 0,
            total_ttc_vente : 0,
            avoire_list : [],
            index_of_edit_avoire : 0,
            avoire_regelement : {},
            avoire_client_id : 0,
            total_remise_avoire : 0,
            tva_avoire : 0,
            total_ht_avoire : 0,
            total_ttc_avoire : 0,
            notifi : [],
            admin : "",  
            benefic : "",
            totalvente : "",
            productsunit : "",
            generale : [],
            category : [],
            selectfourn : [],
            listcaisson : [],
            listbank : [],
            listfourn : [],
            listclient : [],
            listcredit : [],
            listinfocredit : [],
            index_of_edit_fourn : '',
            index_of_edit_client : '',
            info_for_montant_generale_name : {},
            listproduct : [],
            listinfoproduct : [],
            info_for_product : {},
            listcharge : [],
            listfactur : [],
            listdevis : [],
            listbl : [],
            listsansfactur : [],
            listavoire : [],
            index_of_edit_vente : 0,
            chart : []
        }

      }

    componentDidMount(){

        this.handleClick1();
        this.selectgenerale();
        this.selectclient();
        this.selectcategory();
        this.selectfourn();
        this.selectfactur();

        fetch("http://asyd12855.pythonanywhere.com/notifi",{

            method: "GET",

            headers: {

                "Content-Type": "application/json"

            }

        })

        .then(response => response.json())

        .then(data => {

            this.setState({

                notifi: data.notification_info

            })

            if (this.state.notifi.length > 0) {
                document.getElementById("alerticon").style.display = "flex";
            }

        })

        .catch(error => {

            console.error(

                "There has been a problem:",

                error

            );

        });

        fetch("http://asyd12855.pythonanywhere.com/admin",{

            method: "GET",

            headers: {

                "Content-Type": "application/json"

            }

        })

        .then(response => response.json())

        .then(data => {

            this.setState({
                
                admin : data.admin

            })

        })

        .catch(error => {

            console.error(

                "There has been a problem:",

                error

            );

        });

    }

    handleClick1 = () => {

        let tbodys = document.getElementById("tbodys");

        tbodys.children[0].style.backgroundColor = '#6B7A94';

        tbodys.children[1].style.backgroundColor = '#43546d';

        tbodys.children[2].style.backgroundColor = '#43546d';

        tbodys.children[3].style.backgroundColor = '#43546d';

        tbodys.children[4].style.backgroundColor = '#43546d';

        tbodys.children[5].style.backgroundColor = '#43546d';

        tbodys.children[6].style.backgroundColor = '#43546d';

        tbodys.children[7].style.backgroundColor = '#43546d';

        tbodys.children[1].children[2].children[0].classList.remove("fa-caret-left");

        tbodys.children[1].children[2].children[0].classList.add("fa-caret-right");

        tbodys.children[2].children[2].children[0].classList.remove("fa-caret-left");

        tbodys.children[2].children[2].children[0].classList.add("fa-caret-right");

        tbodys.children[3].children[2].children[0].classList.remove("fa-caret-left");

        tbodys.children[3].children[2].children[0].classList.add("fa-caret-right");

        tbodys.children[4].children[2].children[0].classList.remove("fa-caret-left");

        tbodys.children[4].children[2].children[0].classList.add("fa-caret-right");

        tbodys.children[5].children[2].children[0].classList.remove("fa-caret-left");

        tbodys.children[5].children[2].children[0].classList.add("fa-caret-right");

        tbodys.children[6].children[2].children[0].classList.remove("fa-caret-left");

        tbodys.children[6].children[2].children[0].classList.add("fa-caret-right");

        tbodys.children[7].children[2].children[0].classList.remove("fa-caret-left");

        tbodys.children[7].children[2].children[0].classList.add("fa-caret-right");

        let dashbordfull = document.getElementById("dashbordfull");

        dashbordfull.style.display = 'block';

        let list_des_ventes = document.getElementById("list_des_ventes");

        list_des_ventes.style.display = 'none';

        let point_vente1 = document.getElementById("point_vente1");

        point_vente1.style.display = 'none';

        let avoire = document.getElementById("avoire");

        avoire.style.display = 'none';

        let list_des_avoire = document.getElementById("list_des_avoire");

        list_des_avoire.style.display = 'none';

        let charge = document.getElementById("charge");

        charge.style.display = 'none';

        let add_product = document.getElementById("add_product");

        add_product.style.display = 'none';

        let list_product = document.getElementById("list_product");

        list_product.style.display = 'none';

        let add_client = document.getElementById("add_client");

        add_client.style.display = 'none';

        let list_client1 = document.getElementById("list_client");

        list_client1.style.display = 'none';

        let list_credit = document.getElementById("list_credit");

        list_credit.style.display = 'none';

        let add_fourn = document.getElementById("add_fourn");

        add_fourn.style.display = 'none';

        let list_fourn = document.getElementById("list_fourn");

        list_fourn.style.display = 'none';

        let list_factures = document.getElementById("list_factures");

        list_factures.style.display = 'none';

        let list_devis = document.getElementById("list_devis");

        list_devis.style.display = 'none';

        let list_sans_factures = document.getElementById("list_sans_factures");

        list_sans_factures.style.display = 'none';

        let list_bl = document.getElementById("list_bl");

        list_bl.style.display = 'none';

        let list_banque = document.getElementById("list_banque");

        list_banque.style.display = 'none';

        let list_caisse = document.getElementById("list_caisse");

        list_caisse.style.display = 'none';

        let settings_tab = document.getElementById("settings_tab");

        settings_tab.style.display = 'none';

        let point_vente_menu = document.getElementById("point_vente_menu");

        let produits_menu = document.getElementById("produits_menu");

        let client_menu = document.getElementById("client_menu");

        let fourn_menu = document.getElementById("fourn_menu");

        let factur_menu = document.getElementById("factur_menu");

        let comptab_menu = document.getElementById("comptab_menu");

        point_vente_menu.style.display = 'none';

        produits_menu.style.display = 'none';

        client_menu.style.display = 'none';

        fourn_menu.style.display = 'none';

        factur_menu.style.display = 'none';

        comptab_menu.style.display = 'none';

        fetch("http://asyd12855.pythonanywhere.com/moneycompany",{

            method: "GET",

            headers: {

                "Content-Type": "application/json"

            }

        })

        .then(response => response.json())

        .then(data => {

            this.setState({

                benefic: data.benefic,
                totalvente : data.total_vente,
                productsunit : data.product

            })

        })

        .catch(error => {

            console.error(

                "There has been a problem:",

                error

            );

        });

        fetch("http://asyd12855.pythonanywhere.com/chart",{

            method: "GET",

            headers: {

                "Content-Type": "application/json"

            }

        })

        .then(response => response.json())

        .then(data => {

            let dashbord = data.chart;
            let data1 = [

                ["January", dashbord[0].price],

                ["February", dashbord[1].price],

                ["March", dashbord[2].price],

                ["April", dashbord[3].price],

                ["May", dashbord[4].price],

                ["June", dashbord[5].price],

                ["July", dashbord[6].price],

                ["August", dashbord[7].price],

                ["September", dashbord[8].price],

                ["October", dashbord[9].price],

                ["November", dashbord[10].price],

                ["December", dashbord[11].price]

                ];
            this.setState({
                chart : data1
            });

        })

        .catch(error => {

            alert("You have a problem in the Chart");

        });

    }

    handleClick2 = () => {

        let tbodys = document.getElementById("tbodys");

        tbodys.children[0].style.backgroundColor = '#43546d';

        tbodys.children[1].style.backgroundColor = '#6B7A94';

        tbodys.children[2].style.backgroundColor = '#43546d';

        tbodys.children[3].style.backgroundColor = '#43546d';

        tbodys.children[4].style.backgroundColor = '#43546d';

        tbodys.children[5].style.backgroundColor = '#43546d';

        tbodys.children[6].style.backgroundColor = '#43546d';

        tbodys.children[7].style.backgroundColor = '#43546d';

        tbodys.children[1].children[2].children[0].classList.remove("fa-caret-right");

        tbodys.children[1].children[2].children[0].classList.add("fa-caret-left");

        tbodys.children[2].children[2].children[0].classList.remove("fa-caret-left");

        tbodys.children[2].children[2].children[0].classList.add("fa-caret-right");

        tbodys.children[3].children[2].children[0].classList.remove("fa-caret-left");

        tbodys.children[3].children[2].children[0].classList.add("fa-caret-right");

        tbodys.children[4].children[2].children[0].classList.remove("fa-caret-left");

        tbodys.children[4].children[2].children[0].classList.add("fa-caret-right");

        tbodys.children[5].children[2].children[0].classList.remove("fa-caret-left");

        tbodys.children[5].children[2].children[0].classList.add("fa-caret-right");

        tbodys.children[6].children[2].children[0].classList.remove("fa-caret-left");

        tbodys.children[6].children[2].children[0].classList.add("fa-caret-right");

        tbodys.children[7].children[2].children[0].classList.remove("fa-caret-left");

        tbodys.children[7].children[2].children[0].classList.add("fa-caret-right");

        let dashbordfull = document.getElementById("dashbordfull");

        dashbordfull.style.display = 'none';

        let list_des_ventes = document.getElementById("list_des_ventes");

        list_des_ventes.style.display = 'block';

        let point_vente1 = document.getElementById("point_vente1");

        point_vente1.style.display = 'none';

        let avoire = document.getElementById("avoire");

        avoire.style.display = 'none';

        let list_des_avoire = document.getElementById("list_des_avoire");

        list_des_avoire.style.display = 'none';

        let charge = document.getElementById("charge");

        charge.style.display = 'none';

        let add_product = document.getElementById("add_product");

        add_product.style.display = 'none';

        let list_product = document.getElementById("list_product");

        list_product.style.display = 'none';

        let add_client = document.getElementById("add_client");

        add_client.style.display = 'none';

        let list_client1 = document.getElementById("list_client");

        list_client1.style.display = 'none';

        let list_credit = document.getElementById("list_credit");

        list_credit.style.display = 'none';

        let add_fourn = document.getElementById("add_fourn");

        add_fourn.style.display = 'none';

        let list_fourn = document.getElementById("list_fourn");

        list_fourn.style.display = 'none';

        let list_factures = document.getElementById("list_factures");

        list_factures.style.display = 'none';

        let list_devis = document.getElementById("list_devis");

        list_devis.style.display = 'none';

        let list_sans_factures = document.getElementById("list_sans_factures");

        list_sans_factures.style.display = 'none';

        let list_bl = document.getElementById("list_bl");

        list_bl.style.display = 'none';

        let list_banque = document.getElementById("list_banque");

        list_banque.style.display = 'none';

        let list_caisse = document.getElementById("list_caisse");

        list_caisse.style.display = 'none';

        let settings_tab = document.getElementById("settings_tab");

        settings_tab.style.display = 'none';

        let point_vente_menu = document.getElementById("point_vente_menu");

        let produits_menu = document.getElementById("produits_menu");

        let client_menu = document.getElementById("client_menu");

        let fourn_menu = document.getElementById("fourn_menu");

        let factur_menu = document.getElementById("factur_menu");

        let comptab_menu = document.getElementById("comptab_menu");

        point_vente_menu.style.display = 'block';

        produits_menu.style.display = 'none';

        client_menu.style.display = 'none';

        fourn_menu.style.display = 'none';

        factur_menu.style.display = 'none';

        comptab_menu.style.display = 'none';

    }

    handleClick3 = () => {

        let tbodys = document.getElementById("tbodys");

        tbodys.children[0].style.backgroundColor = '#43546d';

        tbodys.children[1].style.backgroundColor = '#43546d';

        tbodys.children[2].style.backgroundColor = '#6B7A94';

        tbodys.children[3].style.backgroundColor = '#43546d';

        tbodys.children[4].style.backgroundColor = '#43546d';

        tbodys.children[5].style.backgroundColor = '#43546d';

        tbodys.children[6].style.backgroundColor = '#43546d';

        tbodys.children[7].style.backgroundColor = '#43546d';

        tbodys.children[2].children[2].children[0].classList.remove("fa-caret-right");

        tbodys.children[2].children[2].children[0].classList.add("fa-caret-left");

        tbodys.children[1].children[2].children[0].classList.remove("fa-caret-left");

        tbodys.children[1].children[2].children[0].classList.add("fa-caret-right");

        tbodys.children[3].children[2].children[0].classList.remove("fa-caret-left");

        tbodys.children[3].children[2].children[0].classList.add("fa-caret-right");

        tbodys.children[4].children[2].children[0].classList.remove("fa-caret-left");

        tbodys.children[4].children[2].children[0].classList.add("fa-caret-right");

        tbodys.children[5].children[2].children[0].classList.remove("fa-caret-left");

        tbodys.children[5].children[2].children[0].classList.add("fa-caret-right");

        tbodys.children[6].children[2].children[0].classList.remove("fa-caret-left");

        tbodys.children[6].children[2].children[0].classList.add("fa-caret-right");

        tbodys.children[7].children[2].children[0].classList.remove("fa-caret-left");

        tbodys.children[7].children[2].children[0].classList.add("fa-caret-right");

        let dashbordfull = document.getElementById("dashbordfull");

        dashbordfull.style.display = 'none';

        let list_des_ventes = document.getElementById("list_des_ventes");

        list_des_ventes.style.display = 'none';

        let point_vente1 = document.getElementById("point_vente1");

        point_vente1.style.display = 'none';

        let avoire = document.getElementById("avoire");

        avoire.style.display = 'none';

        let list_des_avoire = document.getElementById("list_des_avoire");

        list_des_avoire.style.display = 'none';

        let charge = document.getElementById("charge");

        charge.style.display = 'none';

        let add_product = document.getElementById("add_product");

        add_product.style.display = 'none';

        let list_product = document.getElementById("list_product");

        list_product.style.display = 'flex';

        let add_client = document.getElementById("add_client");

        add_client.style.display = 'none';

        let list_client1 = document.getElementById("list_client");

        list_client1.style.display = 'none';

        let list_credit = document.getElementById("list_credit");

        list_credit.style.display = 'none';

        let add_fourn = document.getElementById("add_fourn");

        add_fourn.style.display = 'none';

        let list_fourn = document.getElementById("list_fourn");

        list_fourn.style.display = 'none';

        let list_factures = document.getElementById("list_factures");

        list_factures.style.display = 'none';

        let list_devis = document.getElementById("list_devis");

        list_devis.style.display = 'none';

        let list_sans_factures = document.getElementById("list_sans_factures");

        list_sans_factures.style.display = 'none';

        let list_bl = document.getElementById("list_bl");

        list_bl.style.display = 'none';

        let list_banque = document.getElementById("list_banque");

        list_banque.style.display = 'none';

        let list_caisse = document.getElementById("list_caisse");

        list_caisse.style.display = 'none';

        let settings_tab = document.getElementById("settings_tab");

        settings_tab.style.display = 'none';

        let point_vente_menu = document.getElementById("point_vente_menu");

        let produits_menu = document.getElementById("produits_menu");

        let client_menu = document.getElementById("client_menu");

        let fourn_menu = document.getElementById("fourn_menu");

        let factur_menu = document.getElementById("factur_menu");

        let comptab_menu = document.getElementById("comptab_menu");

        point_vente_menu.style.display = 'none';

        produits_menu.style.display = 'block';

        client_menu.style.display = 'none';

        fourn_menu.style.display = 'none';

        factur_menu.style.display = 'none';

        comptab_menu.style.display = 'none';

    }

    handleClick4 = () => {

        let tbodys = document.getElementById("tbodys");

        tbodys.children[0].style.backgroundColor = '#43546d';

        tbodys.children[1].style.backgroundColor = '#43546d';

        tbodys.children[2].style.backgroundColor = '#43546d';

        tbodys.children[3].style.backgroundColor = '#6B7A94';

        tbodys.children[4].style.backgroundColor = '#43546d';

        tbodys.children[5].style.backgroundColor = '#43546d';

        tbodys.children[6].style.backgroundColor = '#43546d';

        tbodys.children[7].style.backgroundColor = '#43546d';

        tbodys.children[3].children[2].children[0].classList.remove("fa-caret-right");

        tbodys.children[3].children[2].children[0].classList.add("fa-caret-left");

        tbodys.children[1].children[2].children[0].classList.remove("fa-caret-left");

        tbodys.children[1].children[2].children[0].classList.add("fa-caret-right");

        tbodys.children[2].children[2].children[0].classList.remove("fa-caret-left");

        tbodys.children[2].children[2].children[0].classList.add("fa-caret-right");

        tbodys.children[4].children[2].children[0].classList.remove("fa-caret-left");

        tbodys.children[4].children[2].children[0].classList.add("fa-caret-right");

        tbodys.children[5].children[2].children[0].classList.remove("fa-caret-left");

        tbodys.children[5].children[2].children[0].classList.add("fa-caret-right");

        tbodys.children[6].children[2].children[0].classList.remove("fa-caret-left");

        tbodys.children[6].children[2].children[0].classList.add("fa-caret-right");

        tbodys.children[7].children[2].children[0].classList.remove("fa-caret-left");

        tbodys.children[7].children[2].children[0].classList.add("fa-caret-right");

        let dashbordfull = document.getElementById("dashbordfull");

        dashbordfull.style.display = 'none';

        let list_des_ventes = document.getElementById("list_des_ventes");

        list_des_ventes.style.display = 'none';

        let point_vente1 = document.getElementById("point_vente1");

        point_vente1.style.display = 'none';

        let avoire = document.getElementById("avoire");

        avoire.style.display = 'none';

        let list_des_avoire = document.getElementById("list_des_avoire");

        list_des_avoire.style.display = 'none';

        let charge = document.getElementById("charge");

        charge.style.display = 'none';

        let add_product = document.getElementById("add_product");

        add_product.style.display = 'none';

        let list_product = document.getElementById("list_product");

        list_product.style.display = 'none';

        let add_client = document.getElementById("add_client");

        add_client.style.display = 'none';

        let list_client1 = document.getElementById("list_client");

        list_client1.style.display = 'flex';

        let list_credit = document.getElementById("list_credit");

        list_credit.style.display = 'none';

        let add_fourn = document.getElementById("add_fourn");

        add_fourn.style.display = 'none';

        let list_fourn = document.getElementById("list_fourn");

        list_fourn.style.display = 'none';

        let list_factures = document.getElementById("list_factures");

        list_factures.style.display = 'none';

        let list_devis = document.getElementById("list_devis");

        list_devis.style.display = 'none';

        let list_sans_factures = document.getElementById("list_sans_factures");

        list_sans_factures.style.display = 'none';

        let list_bl = document.getElementById("list_bl");

        list_bl.style.display = 'none';

        let list_banque = document.getElementById("list_banque");

        list_banque.style.display = 'none';

        let list_caisse = document.getElementById("list_caisse");

        list_caisse.style.display = 'none';

        let settings_tab = document.getElementById("settings_tab");

        settings_tab.style.display = 'none';

        let point_vente_menu = document.getElementById("point_vente_menu");

        let produits_menu = document.getElementById("produits_menu");

        let client_menu = document.getElementById("client_menu");

        let fourn_menu = document.getElementById("fourn_menu");

        let factur_menu = document.getElementById("factur_menu");

        let comptab_menu = document.getElementById("comptab_menu");

        point_vente_menu.style.display = 'none';

        produits_menu.style.display = 'none';

        client_menu.style.display = 'block';

        fourn_menu.style.display = 'none';

        factur_menu.style.display = 'none';

        comptab_menu.style.display = 'none';

    }

    handleClick5 = () => {

        let tbodys = document.getElementById("tbodys");

        tbodys.children[0].style.backgroundColor = '#43546d';

        tbodys.children[1].style.backgroundColor = '#43546d';

        tbodys.children[2].style.backgroundColor = '#43546d';

        tbodys.children[3].style.backgroundColor = '#43546d';

        tbodys.children[4].style.backgroundColor = '#6B7A94';

        tbodys.children[5].style.backgroundColor = '#43546d';

        tbodys.children[6].style.backgroundColor = '#43546d';

        tbodys.children[7].style.backgroundColor = '#43546d';

        tbodys.children[4].children[2].children[0].classList.remove("fa-caret-right");

        tbodys.children[4].children[2].children[0].classList.add("fa-caret-left");

        tbodys.children[1].children[2].children[0].classList.remove("fa-caret-left");

        tbodys.children[1].children[2].children[0].classList.add("fa-caret-right");

        tbodys.children[2].children[2].children[0].classList.remove("fa-caret-left");

        tbodys.children[2].children[2].children[0].classList.add("fa-caret-right");

        tbodys.children[3].children[2].children[0].classList.remove("fa-caret-left");

        tbodys.children[3].children[2].children[0].classList.add("fa-caret-right");

        tbodys.children[5].children[2].children[0].classList.remove("fa-caret-left");

        tbodys.children[5].children[2].children[0].classList.add("fa-caret-right");

        tbodys.children[6].children[2].children[0].classList.remove("fa-caret-left");

        tbodys.children[6].children[2].children[0].classList.add("fa-caret-right");

        tbodys.children[7].children[2].children[0].classList.remove("fa-caret-left");

        tbodys.children[7].children[2].children[0].classList.add("fa-caret-right");

        let dashbordfull = document.getElementById("dashbordfull");

        dashbordfull.style.display = 'none';

        let list_des_ventes = document.getElementById("list_des_ventes");

        list_des_ventes.style.display = 'none';

        let point_vente1 = document.getElementById("point_vente1");

        point_vente1.style.display = 'none';

        let avoire = document.getElementById("avoire");

        avoire.style.display = 'none';

        let list_des_avoire = document.getElementById("list_des_avoire");

        list_des_avoire.style.display = 'none';

        let charge = document.getElementById("charge");

        charge.style.display = 'none';

        let add_product = document.getElementById("add_product");

        add_product.style.display = 'none';

        let list_product = document.getElementById("list_product");

        list_product.style.display = 'none';

        let add_client = document.getElementById("add_client");

        add_client.style.display = 'none';

        let list_client1 = document.getElementById("list_client");

        list_client1.style.display = 'none';

        let list_credit = document.getElementById("list_credit");

        list_credit.style.display = 'none';

        let add_fourn = document.getElementById("add_fourn");

        add_fourn.style.display = 'none';

        let list_fourn = document.getElementById("list_fourn");

        list_fourn.style.display = 'flex';

        let list_factures = document.getElementById("list_factures");

        list_factures.style.display = 'none';

        let list_devis = document.getElementById("list_devis");

        list_devis.style.display = 'none';

        let list_sans_factures = document.getElementById("list_sans_factures");

        list_sans_factures.style.display = 'none';

        let list_bl = document.getElementById("list_bl");

        list_bl.style.display = 'none';

        let list_banque = document.getElementById("list_banque");

        list_banque.style.display = 'none';

        let list_caisse = document.getElementById("list_caisse");

        list_caisse.style.display = 'none';

        let settings_tab = document.getElementById("settings_tab");

        settings_tab.style.display = 'none';

        let point_vente_menu = document.getElementById("point_vente_menu");

        let produits_menu = document.getElementById("produits_menu");

        let client_menu = document.getElementById("client_menu");

        let fourn_menu = document.getElementById("fourn_menu");

        let factur_menu = document.getElementById("factur_menu");

        let comptab_menu = document.getElementById("comptab_menu");

        point_vente_menu.style.display = 'none';

        produits_menu.style.display = 'none';

        client_menu.style.display = 'none';

        fourn_menu.style.display = 'block';

        factur_menu.style.display = 'none';

        comptab_menu.style.display = 'none';

    }

    handleClick6 = () => {

        let tbodys = document.getElementById("tbodys");

        tbodys.children[0].style.backgroundColor = '#43546d';

        tbodys.children[1].style.backgroundColor = '#43546d';

        tbodys.children[2].style.backgroundColor = '#43546d';

        tbodys.children[3].style.backgroundColor = '#43546d';

        tbodys.children[4].style.backgroundColor = '#43546d';

        tbodys.children[5].style.backgroundColor = '#6B7A94';

        tbodys.children[6].style.backgroundColor = '#43546d';

        tbodys.children[7].style.backgroundColor = '#43546d';

        tbodys.children[5].children[2].children[0].classList.remove("fa-caret-right");

        tbodys.children[5].children[2].children[0].classList.add("fa-caret-left");

        tbodys.children[1].children[2].children[0].classList.remove("fa-caret-left");

        tbodys.children[1].children[2].children[0].classList.add("fa-caret-right");

        tbodys.children[2].children[2].children[0].classList.remove("fa-caret-left");

        tbodys.children[2].children[2].children[0].classList.add("fa-caret-right");

        tbodys.children[3].children[2].children[0].classList.remove("fa-caret-left");

        tbodys.children[3].children[2].children[0].classList.add("fa-caret-right");

        tbodys.children[4].children[2].children[0].classList.remove("fa-caret-left");

        tbodys.children[4].children[2].children[0].classList.add("fa-caret-right");

        tbodys.children[6].children[2].children[0].classList.remove("fa-caret-left");

        tbodys.children[6].children[2].children[0].classList.add("fa-caret-right");

        tbodys.children[7].children[2].children[0].classList.remove("fa-caret-left");

        tbodys.children[7].children[2].children[0].classList.add("fa-caret-right");

        let dashbordfull = document.getElementById("dashbordfull");

        dashbordfull.style.display = 'none';

        let list_des_ventes = document.getElementById("list_des_ventes");

        list_des_ventes.style.display = 'none';

        let point_vente1 = document.getElementById("point_vente1");

        point_vente1.style.display = 'none';

        let avoire = document.getElementById("avoire");

        avoire.style.display = 'none';

        let list_des_avoire = document.getElementById("list_des_avoire");

        list_des_avoire.style.display = 'none';

        let charge = document.getElementById("charge");

        charge.style.display = 'none';

        let add_product = document.getElementById("add_product");

        add_product.style.display = 'none';

        let list_product = document.getElementById("list_product");

        list_product.style.display = 'none';

        let add_client = document.getElementById("add_client");

        add_client.style.display = 'none';

        let list_client1 = document.getElementById("list_client");

        list_client1.style.display = 'none';

        let list_credit = document.getElementById("list_credit");

        list_credit.style.display = 'none';

        let add_fourn = document.getElementById("add_fourn");

        add_fourn.style.display = 'none';

        let list_fourn = document.getElementById("list_fourn");

        list_fourn.style.display = 'none';

        let list_factures = document.getElementById("list_factures");

        list_factures.style.display = 'flex';

        let list_devis = document.getElementById("list_devis");

        list_devis.style.display = 'none';

        let list_sans_factures = document.getElementById("list_sans_factures");

        list_sans_factures.style.display = 'none';

        let list_bl = document.getElementById("list_bl");

        list_bl.style.display = 'none';

        let list_banque = document.getElementById("list_banque");

        list_banque.style.display = 'none';

        let list_caisse = document.getElementById("list_caisse");

        list_caisse.style.display = 'none';

        let settings_tab = document.getElementById("settings_tab");

        settings_tab.style.display = 'none';

        let point_vente_menu = document.getElementById("point_vente_menu");

        let produits_menu = document.getElementById("produits_menu");

        let client_menu = document.getElementById("client_menu");

        let fourn_menu = document.getElementById("fourn_menu");

        let factur_menu = document.getElementById("factur_menu");

        let comptab_menu = document.getElementById("comptab_menu");

        point_vente_menu.style.display = 'none';

        produits_menu.style.display = 'none';

        client_menu.style.display = 'none';

        fourn_menu.style.display = 'none';

        factur_menu.style.display = 'block';

        comptab_menu.style.display = 'none';

    }

    handleClick7 = () => {

        let tbodys = document.getElementById("tbodys");

        tbodys.children[0].style.backgroundColor = '#43546d';

        tbodys.children[1].style.backgroundColor = '#43546d';

        tbodys.children[2].style.backgroundColor = '#43546d';

        tbodys.children[3].style.backgroundColor = '#43546d';

        tbodys.children[4].style.backgroundColor = '#43546d';

        tbodys.children[5].style.backgroundColor = '#43546d';

        tbodys.children[6].style.backgroundColor = '#6B7A94';

        tbodys.children[7].style.backgroundColor = '#43546d';

        tbodys.children[6].children[2].children[0].classList.remove("fa-caret-right");

        tbodys.children[6].children[2].children[0].classList.add("fa-caret-left");

        tbodys.children[1].children[2].children[0].classList.remove("fa-caret-left");

        tbodys.children[1].children[2].children[0].classList.add("fa-caret-right");

        tbodys.children[2].children[2].children[0].classList.remove("fa-caret-left");

        tbodys.children[2].children[2].children[0].classList.add("fa-caret-right");

        tbodys.children[3].children[2].children[0].classList.remove("fa-caret-left");

        tbodys.children[3].children[2].children[0].classList.add("fa-caret-right");

        tbodys.children[4].children[2].children[0].classList.remove("fa-caret-left");

        tbodys.children[4].children[2].children[0].classList.add("fa-caret-right");

        tbodys.children[5].children[2].children[0].classList.remove("fa-caret-left");

        tbodys.children[5].children[2].children[0].classList.add("fa-caret-right");

        tbodys.children[7].children[2].children[0].classList.remove("fa-caret-left");

        tbodys.children[7].children[2].children[0].classList.add("fa-caret-right");

        let dashbordfull = document.getElementById("dashbordfull");

        dashbordfull.style.display = 'none';

        let list_des_ventes = document.getElementById("list_des_ventes");

        list_des_ventes.style.display = 'none';

        let point_vente1 = document.getElementById("point_vente1");

        point_vente1.style.display = 'none';

        let avoire = document.getElementById("avoire");

        avoire.style.display = 'none';

        let list_des_avoire = document.getElementById("list_des_avoire");

        list_des_avoire.style.display = 'none';

        let charge = document.getElementById("charge");

        charge.style.display = 'none';

        let add_product = document.getElementById("add_product");

        add_product.style.display = 'none';

        let list_product = document.getElementById("list_product");

        list_product.style.display = 'none';

        let add_client = document.getElementById("add_client");

        add_client.style.display = 'none';

        let list_client1 = document.getElementById("list_client");

        list_client1.style.display = 'none';

        let list_credit = document.getElementById("list_credit");

        list_credit.style.display = 'none';

        let add_fourn = document.getElementById("add_fourn");

        add_fourn.style.display = 'none';

        let list_fourn = document.getElementById("list_fourn");

        list_fourn.style.display = 'none';

        let list_factures = document.getElementById("list_factures");

        list_factures.style.display = 'none';

        let list_devis = document.getElementById("list_devis");

        list_devis.style.display = 'none';

        let list_sans_factures = document.getElementById("list_sans_factures");

        list_sans_factures.style.display = 'none';

        let list_bl = document.getElementById("list_bl");

        list_bl.style.display = 'none';

        let list_banque = document.getElementById("list_banque");

        list_banque.style.display = 'none';

        let list_caisse = document.getElementById("list_caisse");

        list_caisse.style.display = 'flex';

        let settings_tab = document.getElementById("settings_tab");

        settings_tab.style.display = 'none';

        let point_vente_menu = document.getElementById("point_vente_menu");

        let produits_menu = document.getElementById("produits_menu");

        let client_menu = document.getElementById("client_menu");

        let fourn_menu = document.getElementById("fourn_menu");

        let factur_menu = document.getElementById("factur_menu");

        let comptab_menu = document.getElementById("comptab_menu");

        point_vente_menu.style.display = 'none';

        produits_menu.style.display = 'none';

        client_menu.style.display = 'none';

        fourn_menu.style.display = 'none';

        factur_menu.style.display = 'none';

        comptab_menu.style.display = 'block';

    }

    handleClick8 = () => {

        fetch("http://asyd12855.pythonanywhere.com/settingsinfo",{

            method: "GET",

            headers: {

                "Content-Type": "application/json"

            }

        })

        .then(response => response.json())

        .then(data => {

            document.getElementById("nom_settings_tab_id").value = data.all_info.nom_ste_company;
            document.getElementById("patente_settings_tab_id").value = data.all_info.patente_company;
            document.getElementById("rc_settings_tab_id").value = data.all_info.r_c_company;
            document.getElementById("tel_settings_tab_id").value = data.all_info.tel_company;
            document.getElementById("if_settings_tab_id").value = data.all_info.if_company;
            document.getElementById("cnss_settings_tab_id").value = data.all_info.cnss_company;
            document.getElementById("ice_settings_tab_id").value = data.all_info.ice_company;
            document.getElementById("adrresse_field_settings_tab_id").value = data.all_info.addresse_company;
            document.getElementById("output").setAttribute('src', 'http://asyd12855.pythonanywhere.com/companylogo/'+data.all_info.image_name_company)

        })

        .catch(error => {

            console.error(

                "There has been a problem:",

                error

            );

        });

        let tbodys = document.getElementById("tbodys");

        tbodys.children[0].style.backgroundColor = '#43546d';

        tbodys.children[1].style.backgroundColor = '#43546d';

        tbodys.children[2].style.backgroundColor = '#43546d';

        tbodys.children[3].style.backgroundColor = '#43546d';

        tbodys.children[4].style.backgroundColor = '#43546d';

        tbodys.children[5].style.backgroundColor = '#43546d';

        tbodys.children[6].style.backgroundColor = '#43546d';

        tbodys.children[7].style.backgroundColor = '#6B7A94';

        tbodys.children[7].children[2].children[0].classList.remove("fa-caret-right");

        tbodys.children[7].children[2].children[0].classList.add("fa-caret-left");

        tbodys.children[1].children[2].children[0].classList.remove("fa-caret-left");

        tbodys.children[1].children[2].children[0].classList.add("fa-caret-right");

        tbodys.children[2].children[2].children[0].classList.remove("fa-caret-left");

        tbodys.children[2].children[2].children[0].classList.add("fa-caret-right");

        tbodys.children[3].children[2].children[0].classList.remove("fa-caret-left");

        tbodys.children[3].children[2].children[0].classList.add("fa-caret-right");

        tbodys.children[4].children[2].children[0].classList.remove("fa-caret-left");

        tbodys.children[4].children[2].children[0].classList.add("fa-caret-right");

        tbodys.children[5].children[2].children[0].classList.remove("fa-caret-left");

        tbodys.children[5].children[2].children[0].classList.add("fa-caret-right");

        tbodys.children[6].children[2].children[0].classList.remove("fa-caret-left");

        tbodys.children[6].children[2].children[0].classList.add("fa-caret-right");

        let dashbordfull = document.getElementById("dashbordfull");

        dashbordfull.style.display = 'none';

        let settings_tab = document.getElementById("settings_tab");

        settings_tab.style.display = 'block';

        let list_des_ventes = document.getElementById("list_des_ventes");

        list_des_ventes.style.display = 'none';

        let avoire = document.getElementById("avoire");

        avoire.style.display = 'none';

        let point_vente1 = document.getElementById("point_vente1");

        point_vente1.style.display = 'none';

        let list_des_avoire = document.getElementById("list_des_avoire");

        list_des_avoire.style.display = 'none';

        let charge = document.getElementById("charge");

        charge.style.display = 'none';

        let add_product = document.getElementById("add_product");

        add_product.style.display = 'none';

        let list_product = document.getElementById("list_product");

        list_product.style.display = 'none';

        let add_client = document.getElementById("add_client");

        add_client.style.display = 'none';

        let list_client1 = document.getElementById("list_client");

        list_client1.style.display = 'none';

        let list_credit = document.getElementById("list_credit");

        list_credit.style.display = 'none';

        let add_fourn = document.getElementById("add_fourn");

        add_fourn.style.display = 'none';

        let list_fourn = document.getElementById("list_fourn");

        list_fourn.style.display = 'none';

        let list_factures = document.getElementById("list_factures");

        list_factures.style.display = 'none';

        let list_devis = document.getElementById("list_devis");

        list_devis.style.display = 'none';

        let list_sans_factures = document.getElementById("list_sans_factures");

        list_sans_factures.style.display = 'none';

        let list_bl = document.getElementById("list_bl");

        list_bl.style.display = 'none';

        let list_banque = document.getElementById("list_banque");

        list_banque.style.display = 'none';

        let list_caisse = document.getElementById("list_caisse");

        list_caisse.style.display = 'none';

        let point_vente_menu = document.getElementById("point_vente_menu");

        let produits_menu = document.getElementById("produits_menu");

        let client_menu = document.getElementById("client_menu");

        let fourn_menu = document.getElementById("fourn_menu");

        let factur_menu = document.getElementById("factur_menu");

        let comptab_menu = document.getElementById("comptab_menu");

        point_vente_menu.style.display = 'none';

        produits_menu.style.display = 'none';

        client_menu.style.display = 'none';

        fourn_menu.style.display = 'none';

        factur_menu.style.display = 'none';

        comptab_menu.style.display = 'none';

    }

    ventesclick = () => {

        let point_vente_menu = document.getElementById("point_vente_menu");

        point_vente_menu.style.display = 'none';

        let list_des_ventes = document.getElementById("list_des_ventes");

        list_des_ventes.style.display = 'none';

        let point_vente1 = document.getElementById("point_vente1");

        point_vente1.style.display = 'block';

    }

    listventesclick = () => {

        let point_vente_menu = document.getElementById("point_vente_menu");

        point_vente_menu.style.display = 'none';

        let dashbordfull = document.getElementById("dashbordfull");

        dashbordfull.style.display = 'none';

        let list_des_ventes = document.getElementById("list_des_ventes");

        list_des_ventes.style.display = 'block';

        fetch("http://asyd12855.pythonanywhere.com/listfactur",{

            method: "GET",

            headers: {

                "Content-Type": "application/json"

            }

        })

        .then(response => response.json())

        .then(data => {

            this.setState({

                listfactur: data.listfacturarray

            })

        })

        .catch(error => {

            console.error(

                "There has been a problem:",

                error

            );

        });

        fetch("http://asyd12855.pythonanywhere.com/listsansfactur",{

            method: "GET",

            headers: {

                "Content-Type": "application/json"

            }

        })

        .then(response => response.json())

        .then(data => {

            this.setState({

                listsansfactur: data.listsansfacturarray

            })

        })

        .catch(error => {

            console.error(

                "There has been a problem:",

                error

            );

        });



    }

    avoireclick = () => {

        let point_vente_menu = document.getElementById("point_vente_menu");

        point_vente_menu.style.display = 'none';

        let list_des_ventes = document.getElementById("list_des_ventes");

        list_des_ventes.style.display = 'none';

        let avoire = document.getElementById("avoire");

        avoire.style.display = 'block';

    }

    list_des_avoire_click = () => {

        let point_vente_menu = document.getElementById("point_vente_menu");

        point_vente_menu.style.display = 'none';

        let list_des_ventes = document.getElementById("list_des_ventes");

        list_des_ventes.style.display = 'none';

        let list_des_avoire = document.getElementById("list_des_avoire");

        list_des_avoire.style.display = 'block';

        fetch("http://asyd12855.pythonanywhere.com/listavoire",{

            method: "GET",

            headers: {

                "Content-Type": "application/json"

            }

        })

        .then(response => response.json())

        .then(data => {

            this.setState({

                listavoire: data.listavoirearray

            })

        })

        .catch(error => {

            console.error(

                "There has been a problem:",

                error

            );

        });

    }

    charge_click = () => {

        let point_vente_menu = document.getElementById("point_vente_menu");

        point_vente_menu.style.display = 'none';

        let list_des_ventes = document.getElementById("list_des_ventes");

        list_des_ventes.style.display = 'none';

        let charge = document.getElementById("charge");

        charge.style.display = 'block';

        fetch("http://asyd12855.pythonanywhere.com/listcharge",{

            method: "GET",

            headers: {

                "Content-Type": "application/json"

            }

        })

        .then(response => response.json())

        .then(data => {

            this.setState({

                listcharge: data.listchargeall

            })

        })

        .catch(error => {

            console.error(

                "There has been a problem:",

                error

            );

        });

    }

    addproduct = () => {

        let produits_menu = document.getElementById("produits_menu");

        produits_menu.style.display = 'none';

        let list_product = document.getElementById("list_product");

        list_product.style.display = 'none';

        let add_product = document.getElementById("add_product");

        add_product.style.display = 'flex';

    }

    listproduct = () => {

        let produits_menu = document.getElementById("produits_menu");

        produits_menu.style.display = 'none';

        let dashbordfull = document.getElementById("dashbordfull");

        dashbordfull.style.display = 'none';

        let list_product = document.getElementById("list_product");

        list_product.style.display = 'flex';

        fetch("http://asyd12855.pythonanywhere.com/listproduct",{

            method: "GET",

            headers: {

                "Content-Type": "application/json"

            }

        })

        .then(response => response.json())

        .then(data => {

            this.setState({

                listproduct: data.listproductarray

            });
            var tableproduct = document.getElementsByClassName("tableproduct");

            for (var i = 0; i < tableproduct.length; i++) {

                tableproduct[i].style.color = "blue";

                tableproduct[i].style.textDecoration = "underline";

                tableproduct[i].style.cursor = "pointer";

            }

        })

        .catch(error => {

            console.error(

                "There has been a problem:",

                error

            );

        });

    }

    add_client = () => {

        let client_menu = document.getElementById("client_menu");

        client_menu.style.display = 'none';

        let list_client1 = document.getElementById("list_client");

        list_client1.style.display = 'none';

        let add_client = document.getElementById("add_client");

        add_client.style.display = 'block';

    }

    list_client = () => {

        let client_menu = document.getElementById("client_menu");

        client_menu.style.display = 'none';

        let dashbordfull = document.getElementById("dashbordfull");

        dashbordfull.style.display = 'none';

        let list_client1 = document.getElementById("list_client");

        list_client1.style.display = 'flex';

        fetch("http://asyd12855.pythonanywhere.com/listclient",{

            method: "GET",

            headers: {

                "Content-Type": "application/json"

            }

        })

        .then(response => response.json())

        .then(data => {

            this.setState({

                listclient: data.listclientarray

            })

        })

        .catch(error => {

            console.error(

                "There has been a problem:",

                error

            );

        });

    }

    list_credit = () => {

        let client_menu = document.getElementById("client_menu");

        client_menu.style.display = 'none';

        let list_client1 = document.getElementById("list_client");

        list_client1.style.display = 'none';

        let list_credit = document.getElementById("list_credit");

        list_credit.style.display = 'flex';

        fetch("http://asyd12855.pythonanywhere.com/listcredit",{

            method: "GET",

            headers: {

                "Content-Type": "application/json"

            }

        })

        .then(response => response.json())

        .then(data => {

            this.setState({

                listcredit: data.listcreditarray

            })

        })

        .catch(error => {

            console.error(

                "There has been a problem:",

                error

            );

        });

    }

    add_fourn = () => {

        let fourn_menu = document.getElementById("fourn_menu");

        fourn_menu.style.display = 'none';

        let list_fourn = document.getElementById("list_fourn");

        list_fourn.style.display = 'none';

        let add_fourn = document.getElementById("add_fourn");

        add_fourn.style.display = 'flex';

    }

    list_fourn = () => {

        let fourn_menu = document.getElementById("fourn_menu");

        fourn_menu.style.display = 'none';

        let dashbordfull = document.getElementById("dashbordfull");

        dashbordfull.style.display = 'none';

        let list_fourn = document.getElementById("list_fourn");

        list_fourn.style.display = 'flex';

        fetch("http://asyd12855.pythonanywhere.com/listfourn",{

            method: "GET",

            headers: {

                "Content-Type": "application/json"

            }

        })

        .then(response => response.json())

        .then(data => {

            this.setState({

                listfourn: data.listfournall

            })

        })

        .catch(error => {

            console.error(

                "There has been a problem:",

                error

            );

        });

    }

    list_facture = () => {

        let factur_menu = document.getElementById("factur_menu");

        factur_menu.style.display = 'none';

        let dashbordfull = document.getElementById("dashbordfull");

        dashbordfull.style.display = 'none';

        let list_factures = document.getElementById("list_factures");

        list_factures.style.display = 'flex';

        fetch("http://asyd12855.pythonanywhere.com/listfactur",{

            method: "GET",

            headers: {

                "Content-Type": "application/json"

            }

        })

        .then(response => response.json())

        .then(data => {

            this.setState({

                listfactur: data.listfacturarray

            })

        })

        .catch(error => {

            console.error(

                "There has been a problem:",

                error

            );

        });

    }

    list_devis = () => {

        let factur_menu = document.getElementById("factur_menu");

        factur_menu.style.display = 'none';

        let list_factures = document.getElementById("list_factures");

        list_factures.style.display = 'none';

        let list_devis = document.getElementById("list_devis");

        list_devis.style.display = 'flex';

        fetch("http://asyd12855.pythonanywhere.com/listdevis",{

            method: "GET",

            headers: {

                "Content-Type": "application/json"

            }

        })

        .then(response => response.json())

        .then(data => {

            this.setState({

                listdevis: data.listdevisarray

            })

        })

        .catch(error => {

            console.error(

                "There has been a problem:",

                error

            );

        });

    }

    list_sans_facture = () => {

        let factur_menu = document.getElementById("factur_menu");

        factur_menu.style.display = 'none';

        let list_factures = document.getElementById("list_factures");

        list_factures.style.display = 'none';

        let list_sans_factures = document.getElementById("list_sans_factures");

        list_sans_factures.style.display = 'flex';

        fetch("http://asyd12855.pythonanywhere.com/listsansfactur",{

            method: "GET",

            headers: {

                "Content-Type": "application/json"

            }

        })

        .then(response => response.json())

        .then(data => {

            this.setState({

                listsansfactur: data.listsansfacturarray

            })

        })

        .catch(error => {

            console.error(

                "There has been a problem:",

                error

            );

        });

    }

    list_bl = () => {

        let factur_menu = document.getElementById("factur_menu");

        factur_menu.style.display = 'none';

        let list_factures = document.getElementById("list_factures");

        list_factures.style.display = 'none';

        let list_bl = document.getElementById("list_bl");

        list_bl.style.display = 'flex';

        fetch("http://asyd12855.pythonanywhere.com/listbl",{

            method: "GET",

            headers: {

                "Content-Type": "application/json"

            }

        })

        .then(response => response.json())

        .then(data => {

            this.setState({

                listbl: data.listblarray

            })

        })

        .catch(error => {

            console.error(

                "There has been a problem:",

                error

            );

        });

    }

    list_banque = () => {

        let comptab_menu = document.getElementById("comptab_menu");

        comptab_menu.style.display = 'none';

        let list_caisse = document.getElementById("list_caisse");

        list_caisse.style.display = 'none';

        let list_banque = document.getElementById("list_banque");

        list_banque.style.display = 'flex';

        fetch("http://asyd12855.pythonanywhere.com/listbank",{

            method: "GET",

            headers: {

                "Content-Type": "application/json"

            }

        })

        .then(response => response.json())

        .then(data => {

            this.setState({

                listbank: data.listbankarray

            })

        })

        .catch(error => {

            console.error(

                "There has been a problem:",

                error

            );

        });

    }

    list_caisson = () => {

        let comptab_menu = document.getElementById("comptab_menu");

        comptab_menu.style.display = 'none';

        let dashbordfull = document.getElementById("dashbordfull");

        dashbordfull.style.display = 'none';

        let list_caisse = document.getElementById("list_caisse");

        list_caisse.style.display = 'flex';

        fetch("http://asyd12855.pythonanywhere.com/listcaisson",{

            method: "GET",

            headers: {

                "Content-Type": "application/json"

            }

        })

        .then(response => response.json())

        .then(data => {

            this.setState({

                listcaisson: data.listcaissonarray

            })

        })

        .catch(error => {

            console.error(

                "There has been a problem:",

                error

            );

        });

    }

    onImageChange = (event) => {
        console.log(event);
        if (event.target.files && event.target.files[0]) {

          let reader = new FileReader();

          reader.onload = (e) => {

            this.setState({
                image: e.target.result
            });

          };

          reader.readAsDataURL(event.target.files[0]);

        }

    }

    notif = () => {

        let notif_heading = document.getElementById("notif_heading");

        notif_heading.style.display = 'block';

        document.getElementById("alerticon").style.display = "none";

    }

    user_logout = () => {

        let logout_heading = document.getElementById("logout_heading");

        logout_heading.style.display = 'flex';

    }

    close_notfi = () => {

        let notif_heading = document.getElementById("notif_heading");

        notif_heading.style.display = 'none';

    }

    close_logout = () => {

        let logout_heading = document.getElementById("logout_heading");

        logout_heading.style.display = 'none';

    }
    
    pop_up_fourn_list = (index) => {

        let pop_up = document.getElementById('pop_up_fourn_list');

        pop_up.style.display = 'block';

        window.onclick = function(event){

            if (event.target === pop_up) {

                pop_up.style.display = 'none';

                document.getElementById("normal_info_edit_fourn_rai_soc_id").value = '';
                document.getElementById("normal_info_edit_fourn_name_respon_id").value = '';
                document.getElementById("tele1_edit_fourn_id").value = '';
                document.getElementById("tele2_edit_fourn_id").value = '';
                document.getElementById("fax_edit_fourn_id").value = '';
                document.getElementById("adrresse_field_edit_fourn_id").value = '';
                document.getElementById("activite_field_edit_fourn_id").value = '';
            }

        }

        let obj_fourn_edit = this.state.listfourn[index];
        this.setState({
            index_of_edit_fourn : obj_fourn_edit.fourn_id
        });
        document.getElementById("normal_info_edit_fourn_rai_soc_id").value = obj_fourn_edit.fourn_n_societe;
        document.getElementById("normal_info_edit_fourn_name_respon_id").value = obj_fourn_edit.fourn_nom_respon;
        document.getElementById("tele1_edit_fourn_id").value = obj_fourn_edit.fourn_tele_1;
        document.getElementById("tele2_edit_fourn_id").value = obj_fourn_edit.fourn_tele_2;
        document.getElementById("fax_edit_fourn_id").value = obj_fourn_edit.fourn_fax;
        document.getElementById("adrresse_field_edit_fourn_id").value = obj_fourn_edit.fourn_adresse;
        document.getElementById("activite_field_edit_fourn_id").value = obj_fourn_edit.fourn_activite;

    }

    pop_up_add_client = () => {

        let pop_up = document.getElementById('pop_up_add_client');

        pop_up.style.display = 'block';

        window.onclick = function(event){

            if (event.target === pop_up) {

                pop_up.style.display = 'none';

            }

        }

    }

    pop_up_client_list = (ind) => {

        let pop_up = document.getElementById('pop_up_client_list');

        pop_up.style.display = 'block';

        window.onclick = function(event){

            if (event.target === pop_up) {

                pop_up.style.display = 'none';

                // document.getElementById("generale_add_client_select_id").value = '';
                for (let i of document.getElementById('generale_add_client_select_id').children) {
                    i.removeAttribute('selected');
                }
                document.getElementById("normal_info_add_client_name_add_id").value = '';
                document.getElementById("normal_info_add_client_tele_number_id").value = '';
                document.getElementById("cin_add_client_n_ice_id").value = '';
                document.getElementById("cin_add_client_cin_id").value = '';
                document.getElementById("address_add_client_adresse_id").value = '';

            }

        }

        let obj_client_edit = this.state.listclient[ind];
        this.setState({
            index_of_edit_client : obj_client_edit.client_id
        });
        for (let i of document.getElementById("generale_add_client_select_id").children) {
            if (i.textContent === obj_client_edit.generale_name) {
                i.setAttribute('selected','selected');
            }
        }
        document.getElementById("normal_info_add_client_name_add_id").value = obj_client_edit.client_name;
        document.getElementById("normal_info_add_client_tele_number_id").value = obj_client_edit.client_number;
        document.getElementById("cin_add_client_n_ice_id").value = obj_client_edit.client_n_ice;
        document.getElementById("cin_add_client_cin_id").value = obj_client_edit.client_cin;
        document.getElementById("address_add_client_adresse_id").value = obj_client_edit.client_addresse;

    }

    pop_up_credit_list_mise_jour = (index) => {

        let pop_up = document.getElementById('pop_up_credit_list_mise_jour');

        pop_up.style.display = 'block';

        window.onclick = function(event){

            if (event.target === pop_up) {

                pop_up.style.display = 'none';

            }

        }

        let obje = this.state.listcredit[index];

        this.setState({
            info_for_montant_generale_name : {'generale' : obje.generale_name, 'name' : obje.client_name, 'montant' : obje.montant, 'index_id' : obje.credit_id}
        })

    }

    pop_up_credit_list_afficher = (index) => {

        let pop_up = document.getElementById('pop_up_credit_list_afficher');

        pop_up.style.display = 'block';

        window.onclick = function(event){

            if (event.target === pop_up) {

                pop_up.style.display = 'none';

            }

        }
        let obje = this.state.listcredit[index];

        fetch("http://asyd12855.pythonanywhere.com/infolistcredit/" + obje.credit_id,{

            method: "GET",

            headers: {

                "Content-Type": "application/json"

            }

        })

        .then(response => response.json())

        .then(data => {

            this.setState({

                listinfocredit: data.listinfocredit

            })

        })

        .catch(error => {

            console.error(

                "There has been a problem:",

                error

            );

        });

        this.setState({
            info_for_montant_generale_name : {'generale' : obje.generale_name, 'name' : obje.client_name, 'montant' : obje.montant}
        })

    }

    pop_up_category_product_add = () => {

        let pop_up = document.getElementById('pop_up_category_product_add');

        pop_up.style.display = 'block';

        window.onclick = function(event){

            if (event.target === pop_up) {

                pop_up.style.display = 'none';

            }

        }

    }

    pop_up_product_list_edit = (index,id) => {

        let pop_up = document.getElementById('pop_up_product_list_edit');

        pop_up.style.display = 'block';

        window.onclick = function(event){

            if (event.target === pop_up) {

                pop_up.style.display = 'none';

            }

        }

        let obje = this.state.listproduct[index];
        document.getElementById("min_qty_alert_id").value = obje.min_qty_alert;
        document.getElementById("pu_devis_add_product_id").value = obje.product_p_devis;
        document.getElementById("prix_d_achat_add_product_id").value = obje.product_p_avhat;
        document.getElementById("prix_de_vente_add_product_id").value = obje.product_p_vente;
        this.setState({
            info_for_product : {'id' : obje.product_id, 'ref' : obje.product_ref, 'barcode' : obje.product_barcode, 'fourn' : obje.product_fourn_name, 'cate' : obje.product_cate_name, 'description' : obje.product_description, 'qtyall' : obje.product_qty, 'logo_product' : obje.logo_product}
        })

    }

    pop_up_product_list_ref = (index) => {

        let pop_up = document.getElementById('pop_up_product_list_ref');

        pop_up.style.display = 'block';

        window.onclick = function(event){

            if (event.target === pop_up) {

                pop_up.style.display = 'none';

            }

        }

        let obje = this.state.listproduct[index];

        fetch("http://asyd12855.pythonanywhere.com/infolistproduct/" + obje.product_id,{

            method: "GET",

            headers: {

                "Content-Type": "application/json"

            }

        })

        .then(response => response.json())

        .then(data => {

            this.setState({

                listinfoproduct: data.infolistproduct

            })

        })

        .catch(error => {

            console.error(

                "There has been a problem:",

                error

            );

        });

        this.setState({
            info_for_product : {'id' : obje.product_id, 'ref' : obje.product_ref, 'barcode' : obje.product_barcode, 'fourn' : obje.product_fourn_name, 'cate' : obje.product_cate_name, 'description' : obje.product_description, 'qtyall' : obje.product_qty, 'logo_product' : obje.logo_product}
        })

    }

    new_client_vente = () => {

        let pop_up = document.getElementById('new_client_vente');

        pop_up.style.display = 'block';

        window.onclick = function(event){

            if (event.target === pop_up) {

                pop_up.style.display = 'none';

            }

        }

    }

    checkbank = () => {

        let radio_btns_regelment = document.querySelector(".radio_btns_regelment");

        radio_btns_regelment.style.height = '20%';

        let price_btns_regelment = document.querySelector(".price_btns_regelment");

        price_btns_regelment.style.height = '20%';

        let checkbox_btns_regelment = document.querySelector(".checkbox_btns_regelment");

        checkbox_btns_regelment.style.height = '20%';

        let submit_btns_regelment = document.querySelector(".submit_btns_regelment");

        submit_btns_regelment.style.height = '20%';

        let checkbank_btns_regelement = document.querySelector("#checkbank_btns_regelement");

        checkbank_btns_regelement.style.display = 'flex';

        checkbank_btns_regelement.style.height = '20%';

        let espece = document.querySelector("#espece");

        espece.onclick = function(){

            let radio_btns_regelment = document.querySelector(".radio_btns_regelment");

            radio_btns_regelment.style.height = '25%';

            let price_btns_regelment = document.querySelector(".price_btns_regelment");

            price_btns_regelment.style.height = '25%';

            let checkbox_btns_regelment = document.querySelector(".checkbox_btns_regelment");

            checkbox_btns_regelment.style.height = '25%';

            let submit_btns_regelment = document.querySelector(".submit_btns_regelment");

            submit_btns_regelment.style.height = '25%';

            let checkbank_btns_regelement = document.querySelector("#checkbank_btns_regelement");

            checkbank_btns_regelement.style.display = 'none';

            checkbank_btns_regelement.style.height = '25%';

        }

        let credit = document.querySelector("#credit");

        credit.onclick = function(){

            let radio_btns_regelment = document.querySelector(".radio_btns_regelment");

            radio_btns_regelment.style.height = '25%';

            let price_btns_regelment = document.querySelector(".price_btns_regelment");

            price_btns_regelment.style.height = '25%';

            let checkbox_btns_regelment = document.querySelector(".checkbox_btns_regelment");

            checkbox_btns_regelment.style.height = '25%';

            let submit_btns_regelment = document.querySelector(".submit_btns_regelment");

            submit_btns_regelment.style.height = '25%';

            let checkbank_btns_regelement = document.querySelector("#checkbank_btns_regelement");

            checkbank_btns_regelement.style.display = 'none';

            checkbank_btns_regelement.style.height = '25%';

        }

    }

    checkbank_avoire = () => {

        let radio_btns_regelment = document.querySelector(".radio_btns_regelment1");

        radio_btns_regelment.style.height = '20%';

        let price_btns_regelment = document.querySelector(".price_btns_regelment1");

        price_btns_regelment.style.height = '20%';

        let checkbox_btns_regelment = document.querySelector(".checkbox_btns_regelment1");

        checkbox_btns_regelment.style.height = '20%';

        let submit_btns_regelment = document.querySelector(".submit_btns_regelment1");

        submit_btns_regelment.style.height = '20%';

        let checkbank_btns_regelement = document.querySelector("#checkbank_btns_regelement1");

        checkbank_btns_regelement.style.display = 'flex';

        checkbank_btns_regelement.style.height = '20%';

        let espece1 = document.querySelector("#espece1");

        espece1.onclick = function(){

            let radio_btns_regelment = document.querySelector(".radio_btns_regelment1");

            radio_btns_regelment.style.height = '25%';

            let price_btns_regelment = document.querySelector(".price_btns_regelment1");

            price_btns_regelment.style.height = '25%';

            let checkbox_btns_regelment = document.querySelector(".checkbox_btns_regelment1");

            checkbox_btns_regelment.style.height = '25%';

            let submit_btns_regelment = document.querySelector(".submit_btns_regelment1");

            submit_btns_regelment.style.height = '25%';

            let checkbank_btns_regelement = document.querySelector("#checkbank_btns_regelement1");

            checkbank_btns_regelement.style.display = 'none';

            checkbank_btns_regelement.style.height = '25%';

        }

    }

    regelment_vente = () => {

        let pop_up = document.getElementById('regelment_vente');

        pop_up.style.display = 'block';

        window.onclick = function(event){

            if (event.target === pop_up) {

                pop_up.style.display = 'none';

            }

        }

    }

    edit_vente = (index) => {

        let pop_up = document.getElementById('edit_vente');

        pop_up.style.display = 'block';

        window.onclick = function(event){

            if (event.target === pop_up) {

                pop_up.style.display = 'none';

                document.getElementById("referance_edit_vente_id").value = '';

                document.getElementById("bar_code_edit_vente_id").value = '';

                document.getElementById("qty_edit_vente_id").value = '';

                document.getElementById("remise_edit_vente_id").value = '';

            }

        }

        let obje1 = this.state.vente_add[index];

        if (isNaN(obje1.code_vente_add) === true) {

            document.getElementById("referance_edit_vente_id").value = obje1.code_vente_add;

        } else {

            document.getElementById("bar_code_edit_vente_id").value = obje1.code_vente_add;

        }

        document.getElementById("qty_edit_vente_id").value = obje1.qty_vente_add;

        document.getElementById("remise_edit_vente_id").value = obje1.remise_vente_add;
        this.setState({
            index_of_edit_vente : index
        });
        console.log(this.state.index_of_edit_vente);
        console.log(obje1);

    }

    edit_avoire = (index) => {

        let pop_up = document.getElementById('edit_avoire');

        pop_up.style.display = 'block';

        window.onclick = function(event){

            if (event.target === pop_up) {

                pop_up.style.display = 'none';

                document.getElementById("qtyid").value = '';

            }

        }
        let obje = this.state.avoire_list[index]

        document.getElementById("qtyid").value = obje.qty_vente_add;
        this.setState({
            index_of_edit_avoire : index
        })

    }

    regelment_avoire = () => {

        let pop_up = document.getElementById('regelment_avoire');

        pop_up.style.display = 'block';

        window.onclick = function(event){

            if (event.target === pop_up) {

                pop_up.style.display = 'none';

            }

        }

    }

    vente_add = () => {

        let obje = {};

        let bar_code_vente_add = document.querySelector("#bar_code_vente_add_id").value;

        let referance_vente_add = document.querySelector("#referance_vente_add_id").value;

        let qty_vente_add = document.querySelector("#qty_vente_add_id").value;

        let remise_vente_add = document.querySelector("#remise_vente_add_id").value;

        if (qty_vente_add === '') {

            alert("You should type QTY");

        } else {

            if ((bar_code_vente_add === '') && (referance_vente_add === '')) {

                alert("You should type bar code or referance");

            } else {

                if ((bar_code_vente_add !== '') && (referance_vente_add !== '')) {

                    obje.code_vente_add = bar_code_vente_add;
                    var the_code = 'barcode';

                } else {

                    if ((bar_code_vente_add !== '')) {

                        obje.code_vente_add = bar_code_vente_add;
                        the_code = 'barcode';

                    }

                    if ((referance_vente_add !== '')) {

                        obje.code_vente_add = referance_vente_add;
                        the_code = 'referance';

                    }

                }
                obje.the_code = the_code;
                obje.qty_vente_add = qty_vente_add;

                obje.remise_vente_add = remise_vente_add;

                fetch("http://asyd12855.pythonanywhere.com/ajouterproduct",{

                    method: "POST",

                    body: JSON.stringify({
                        code_ref_product : obje.code_vente_add,
                        code_or_ref_product : the_code
                    }),

                    headers: {

                        "Content-Type": "application/json"

                    }

                })

                .then(response => response.json())

                .then(data => {

                    obje.descri = data.the_product_info.descri;
                    obje.pu = data.the_product_info.pu;
                    obje.meassurement = data.the_product_info.meassurement;

                    if ((remise_vente_add === '') || (remise_vente_add === 0)) {
                        obje.total_ht = obje.pu * obje.qty_vente_add;
                        this.setState({
                            total_ht_vente : this.state.total_ht_vente + obje.total_ht,
                            total_ttc_vente : this.state.total_ttc_vente + obje.total_ht + (obje.total_ht * (20/100)),
                            tva_vente : this.state.tva_vente + (obje.total_ht * (20/100))
                        });
                    } else {
                        obje.total_ht = ((obje.pu * obje.qty_vente_add) - remise_vente_add);
                        this.setState({
                            total_ht_vente : this.state.total_ht_vente + obje.total_ht,
                            total_ttc_vente : this.state.total_ttc_vente + obje.total_ht + (obje.total_ht * (20/100)),
                            tva_vente : this.state.tva_vente + (obje.total_ht * (20/100)),
                            total_remise_vente : this.state.total_remise_vente + remise_vente_add
                        });
                    }

                    this.setState({

                        vente_add : [...this.state.vente_add, obje]

                    });

                })

                .catch(error => {

                    alert("this barcode/referance is not registed with a product");
                    console.log(error);

                });

            }
        }

    }

    remove_vente = (index) => {

        let obje = this.state.vente_add[index];
        console.log(obje);
        this.setState({
            total_ht_vente : this.state.total_ht_vente - obje.total_ht,
            total_ttc_vente : this.state.total_ttc_vente - (obje.total_ht + (obje.total_ht * (20/100))),
            tva_vente : this.state.tva_vente - (obje.total_ht * (20/100)),
            total_remise_vente : this.state.total_remise_vente - obje.remise_vente_add
        });

        this.state.vente_add.splice(index,1);

        // document.getElementById("table_remove_vente").removeChild(document.getElementById('vente_remove_element' + index))

    }

    submit_edit_vente = () => {
        let obje = this.state.vente_add[this.state.index_of_edit_vente];
        let bar_code_edit_vent = document.getElementById("bar_code_edit_vente_id").value;
        let referance_edit_vente = document.getElementById("referance_edit_vente_id").value;
        let qty_edit_vente = document.getElementById("qty_edit_vente_id").value;
        let remise_edit_vente = document.getElementById("remise_edit_vente_id").value;
        if (qty_edit_vente === '') {

            alert("You should type QTY");

        } else {

            if ((bar_code_edit_vent === '') && (referance_edit_vente === '')) {

                alert("You should type bar code or referance");

            } else {

                if ((bar_code_edit_vent !== '') && (referance_edit_vente !== '')) {

                    obje.code_vente_add = bar_code_edit_vent;
                    var thecode = 'barcode';

                } else {

                    if ((bar_code_edit_vent !== '')) {

                        obje.code_vente_add = bar_code_edit_vent;
                        thecode = 'barcode';

                    }

                    if ((referance_edit_vente !== '')) {

                        obje.code_vente_add = referance_edit_vente;
                        thecode = 'referance';

                    }

                }
                obje.the_code = thecode;
                obje.qty_vente_add = qty_edit_vente;

                fetch("http://asyd12855.pythonanywhere.com/ajouterproduct",{

                    method: "POST",

                    body: JSON.stringify({
                        code_ref_product : obje.code_vente_add,
                        code_or_ref_product : thecode
                    }),

                    headers: {

                        "Content-Type": "application/json"

                    }

                })

                .then(response => response.json())

                .then(data => {

                    obje.descri = data.the_product_info.descri;
                    obje.pu = data.the_product_info.pu;
                    obje.meassurement = data.the_product_info.meassurement;
                    
                    this.setState({
                        total_ht_vente : this.state.total_ht_vente - obje.total_ht,
                        total_ttc_vente : this.state.total_ttc_vente - (obje.total_ht + (obje.total_ht * (20/100))),
                        tva_vente : this.state.tva_vente - (obje.total_ht * (20/100)),
                        total_remise_vente : this.state.total_remise_vente - obje.remise_vente_add
                    });
                    obje.remise_vente_add = remise_edit_vente;

                    if ((remise_edit_vente === '') || (remise_edit_vente === 0)) {
                        obje.total_ht = obje.pu * obje.qty_vente_add;
                        this.setState({
                            total_ht_vente : this.state.total_ht_vente + obje.total_ht,
                            total_ttc_vente : this.state.total_ttc_vente + obje.total_ht + (obje.total_ht * (20/100)),
                            tva_vente : this.state.tva_vente + (obje.total_ht * (20/100))
                        });
                    } else {
                        obje.total_ht = ((obje.pu * obje.qty_vente_add) - remise_edit_vente);
                        this.setState({
                            total_ht_vente : this.state.total_ht_vente + obje.total_ht,
                            total_ttc_vente : this.state.total_ttc_vente + obje.total_ht + (obje.total_ht * (20/100)),
                            tva_vente : this.state.tva_vente + (obje.total_ht * (20/100)),
                            total_remise_vente : this.state.total_remise_vente + remise_edit_vente
                        });
                    }
                    let pop_up = document.getElementById('edit_vente');

                    pop_up.style.display = 'none';

                })

                .catch(error => {

                    alert("this barcode/referance is not registed with a product");
                    console.log(error);

                });

            }
        }
    }

    submit_edit_avoire = () => {
        let obje = this.state.avoire_list[this.state.index_of_edit_avoire];
        let qty_edit_avoire = document.getElementById("qtyid").value;
        if ((qty_edit_avoire === '') || (qty_edit_avoire >= obje.qty_vente_add)) {
            alert('You must type the correct QTY');
        } else {
            obje.qty_vente_add = qty_edit_avoire;
            if ((obje.remise_vente_add === '') || (obje.remise_vente_add === 0)) {
                let totalht = obje.total_ht;
                obje.total_ht = obje.pu * obje.qty_vente_add;
                this.setState({
                    total_ht_avoire : this.state.total_ht_avoire - (totalht - obje.total_ht),
                    total_ttc_avoire : this.state.total_ttc_avoire - ((totalht - obje.total_ht) + ((totalht - obje.total_ht) * (20/100))),
                    tva_avoire : this.state.tva_avoire - ((totalht - obje.total_ht) * (20/100))
                });
            } else {
                let totalht = obje.total_ht;
                obje.total_ht = ((obje.pu * obje.qty_vente_add) - obje.remise_vente_add);
                this.setState({
                    total_ht_avoire : this.state.total_ht_avoire - (totalht - obje.total_ht),
                    total_ttc_avoire : this.state.total_ttc_avoire - ((totalht - obje.total_ht) + ((totalht - obje.total_ht) * (20/100))),
                    tva_avoire : this.state.tva_avoire - ((totalht - obje.total_ht) * (20/100))
                });
            }
            let pop_up = document.getElementById('edit_avoire');

            pop_up.style.display = 'none';
        }
    }

    logout = (e) => {

        e.preventDefault();
        fetch("http://asyd12855.pythonanywhere.com/logout",{

            method: "GET",

            headers: {

                "Content-Type": "application/json"

            }

        })

        .then(response => response.json())

        .then(data => {

            window.location.href = '/';

        })

        .catch(error => {

            console.error(

                "There has been a problem:",

                error

            );

        });

    }
    selectgenerale = () => {
        fetch("http://asyd12855.pythonanywhere.com/selectgenerale",{

            method: "GET",

            headers: {

                "Content-Type": "application/json"

            }

        })

        .then(response => response.json())

        .then(data => {

            this.setState({

                generale: data.select_generale

            })

        })

        .catch(error => {

            console.error(

                "There has been a problem:",

                error

            );

        });
    }
    selectcategory = () => {
        fetch("http://asyd12855.pythonanywhere.com/selectcategory",{

            method: "GET",

            headers: {

                "Content-Type": "application/json"

            }

        })

        .then(response => response.json())

        .then(data => {

            this.setState({

                category: data.select_category

            })

        })

        .catch(error => {

            console.error(

                "There has been a problem:",

                error

            );

        });
    }
    submit_settings = (e) => {
        e.preventDefault()
        let nom_settings_tab = document.getElementById("nom_settings_tab_id").value;
        let patente_settings_tab = document.getElementById("patente_settings_tab_id").value;
        let rc_settings_tab = document.getElementById("rc_settings_tab_id").value;
        let tel_settings_tab = document.getElementById("tel_settings_tab_id").value;
        let if_settings_tab = document.getElementById("if_settings_tab_id").value;
        let cnss_settings_tab = document.getElementById("cnss_settings_tab_id").value;
        let ice_settings_tab = document.getElementById("ice_settings_tab_id").value;
        let adrresse_field_settings_tab = document.getElementById("adrresse_field_settings_tab_id").value;
        var filenamecom = '';
        let file = document.getElementById("file");
        if (file.files[0]) {
            filenamecom = file.files[0].name;
            let data = new FormData();
            data.append('file', file.files[0]);
            fetch("http://asyd12855.pythonanywhere.com/image",{

                method: "POST",

                body: data

            })

            .then(response => response.json())

            .then(data => {

                console.log(data);

            })

            .catch(error => {

                console.error(

                    "There has been a problem:",

                    error

                );

            });
        }
        fetch("http://asyd12855.pythonanywhere.com/settings",{

            method: "POST",

            body: JSON.stringify({
                nom_settings_tab: nom_settings_tab,
                patente_settings_tab: patente_settings_tab,
                rc_settings_tab: rc_settings_tab,
                tel_settings_tab: tel_settings_tab,
                if_settings_tab: if_settings_tab,
                cnss_settings_tab: cnss_settings_tab,
                ice_settings_tab: ice_settings_tab,
                filename: filenamecom,
                adrresse_field_settings_tab: adrresse_field_settings_tab
            }),

            headers: {

                "Content-Type": "application/json"

            }

        })

        .then(response => response.json())

        .then(data => {

            alert("You have saved Your settings");

        })

        .catch(error => {

            console.error(

                "There has been a problem:",

                error

            );

        });        
    }
    submit_add_fourn = (e) => {
        e.preventDefault();
        let raison_social = document.getElementById("normal_info_add_fourn_rai_soc_id1").value;
        let nom_responsable = document.getElementById("normal_info_add_fourn_name_respon_id1").value;
        let tele_1 = document.getElementById("tele1_add_fourn_id1").value;
        let tele_2 = document.getElementById("tele2_add_fourn_id1").value;
        let fax = document.getElementById("fax_add_fourn_id1").value;
        let adresse = document.getElementById("adrresse_field_add_fourn_id1").value;
        let activite = document.getElementById("activite_field_add_fourn_id1").value;
        fetch("http://asyd12855.pythonanywhere.com/addfourn",{

            method: "POST",

            body: JSON.stringify({
                rai_soc_addfourn: raison_social,
                nom_respon_addfourn: nom_responsable,
                tele_1_addfourn: tele_1,
                tele_2_addfourn: tele_2,
                fax_addfourn: fax,
                addresse_addfourn: adresse,
                activite_addfourn: activite
            }),

            headers: {

                "Content-Type": "application/json"

            }

        })

        .then(response => response.json())

        .then(data => {

            if (data.found === 'yes') {
                alert('You have that fournisser in the Website');
            } else {
                alert("You have added a Fournisseur");
            }

        })

        .catch(error => {

            console.error(

                "There has been a problem:",

                error

            );

        });

    }
    addgenerale = (e) => {
        e.preventDefault();
        let new_generale = document.getElementById("input_for_generale_new_id").value;
        fetch("http://asyd12855.pythonanywhere.com/addgenerale",{

            method: "POST",

            body: JSON.stringify({
                new_generale_add: new_generale
            }),

            headers: {

                "Content-Type": "application/json"

            }

        })

        .then(response => response.json())

        .then(data => {

            alert("You have added a Generale");
            let pop_up = document.getElementById('pop_up_add_client');

            pop_up.style.display = 'none';


        })

        .catch(error => {

            console.error(

                "There has been a problem:",

                error

            );

        });

    }
    addcategory = (e) => {
        e.preventDefault();
        let new_category = document.getElementById("input_for_category_new_id").value;
        fetch("http://asyd12855.pythonanywhere.com/addcategory",{

            method: "POST",

            body: JSON.stringify({
                new_category_add: new_category
            }),

            headers: {

                "Content-Type": "application/json"

            }

        })

        .then(response => response.json())

        .then(data => {

            alert("You have added a Category");
            let pop_up = document.getElementById('pop_up_category_product_add');

            pop_up.style.display = 'none';


        })

        .catch(error => {

            console.error(

                "There has been a problem:",

                error

            );

        });
    }
    del_list_fourn = (ind) => {
        if (window.confirm('are you sure you want to delete the Fournisseur?')) {
            fetch("http://asyd12855.pythonanywhere.com/listfourn/" + ind,{

                method: "DELETE",

                headers: {

                    "Content-Type": "application/json"

                }

            })

            .then(response => response.json())

            .then(data => {

                this.list_fourn();

            })

            .catch(error => {

                console.error(

                    "There has been a problem:",

                    error

                );

            });
        }
    }
    submit_edit_fourn = (e) => {
        e.preventDefault();
        let edit_fourn1 = document.getElementById("normal_info_edit_fourn_rai_soc_id").value;
        let edit_fourn2 = document.getElementById("normal_info_edit_fourn_name_respon_id").value;
        let edit_fourn3 = document.getElementById("tele1_edit_fourn_id").value;
        let edit_fourn4 = document.getElementById("tele2_edit_fourn_id").value;
        let edit_fourn5 = document.getElementById("fax_edit_fourn_id").value;
        let edit_fourn6 = document.getElementById("adrresse_field_edit_fourn_id").value;
        let edit_fourn7 = document.getElementById("activite_field_edit_fourn_id").value;
        let index_of_edit_fourn = this.state.index_of_edit_fourn;
        fetch("http://asyd12855.pythonanywhere.com/editfourn",{

            method: "POST",

            body: JSON.stringify({
                index_of_edit_fourn : index_of_edit_fourn,
                edit_fourn1 : edit_fourn1,
                edit_fourn2 : edit_fourn2,
                edit_fourn3 : edit_fourn3,
                edit_fourn4 : edit_fourn4,
                edit_fourn5 : edit_fourn5,
                edit_fourn6 : edit_fourn6,
                edit_fourn7 : edit_fourn7
            }),

            headers: {

                "Content-Type": "application/json"

            }

        })

        .then(response => response.json())

        .then(data => {

            if (data.found === 'yes') {
                alert('You have that founisser in the website');
            } else {
                alert("You have Edited a Fournisseur");
                let pop_up = document.getElementById('pop_up_fourn_list');

                pop_up.style.display = 'none';
                this.list_fourn();
            }

        })

        .catch(error => {

            console.error(

                "There has been a problem:",

                error

            );

        });
    }
    selectfourn = () => {
        fetch("http://asyd12855.pythonanywhere.com/selectfourn",{

            method: "GET",

            headers: {

                "Content-Type": "application/json"

            }

        })

        .then(response => response.json())

        .then(data => {

            this.setState({

                selectfourn: data.select_fourn

            })

        })

        .catch(error => {

            console.error(

                "There has been a problem:",

                error

            );

        });
    }
    submit_add_client = (e) => {
        e.preventDefault();
        let generale_add_client_select = document.getElementById("generale_add_client_select_id1").value;
        let normal_info_add_client_name_add = document.getElementById("normal_info_add_client_name_add_id1").value;
        let normal_info_add_client_tele_number = document.getElementById("normal_info_add_client_tele_number_id1").value;
        let cin_add_client_n_ice = document.getElementById("cin_add_client_n_ice_id1").value;
        let cin_add_client_cin = document.getElementById("cin_add_client_cin_id1").value;
        let address_add_client_adresse = document.getElementById("address_add_client_adresse_id1").value;
        fetch("http://asyd12855.pythonanywhere.com/addclient",{

            method: "POST",

            body: JSON.stringify({
                generale_add_client: generale_add_client_select,
                name_add_client: normal_info_add_client_name_add,
                tele_number_add_client: normal_info_add_client_tele_number,
                n_ice_add_client: cin_add_client_n_ice,
                cin_add_client: cin_add_client_cin,
                adresse_add_client: address_add_client_adresse
            }),

            headers: {

                "Content-Type": "application/json"

            }

        })

        .then(response => response.json())

        .then(data => {

            if (data.found === 'yes') {
                alert('You have that Client in the website');
            } else {
                alert("You have added a Client");
            }

        })

        .catch(error => {

            console.error(

                "There has been a problem:",

                error

            );

        });
    }
    del_list_client = (ind) => {
        if (window.confirm('are you sure you want to delete the Client?')) {
            fetch("http://asyd12855.pythonanywhere.com/listclient/" + ind,{

                method: "DELETE",

                headers: {

                    "Content-Type": "application/json"

                }

            })

            .then(response => response.json())

            .then(data => {

                this.list_client();

            })

            .catch(error => {

                console.error(

                    "There has been a problem:",

                    error

                );

            });
        }
    }
    submit_edit_client = (e) => {
        e.preventDefault();
        let edit_client1 = document.getElementById("generale_add_client_select_id").value;
        let edit_client2 = document.getElementById("normal_info_add_client_name_add_id").value;
        let edit_client3 = document.getElementById("normal_info_add_client_tele_number_id").value;
        let edit_client4 = document.getElementById("cin_add_client_n_ice_id").value;
        let edit_client5 = document.getElementById("cin_add_client_cin_id").value;
        let edit_client6 = document.getElementById("address_add_client_adresse_id").value;
        let index_of_edit_client = this.state.index_of_edit_client;
        fetch("http://asyd12855.pythonanywhere.com/editclient",{

            method: "POST",

            body: JSON.stringify({
                index_of_edit_client : index_of_edit_client,
                edit_client1 : edit_client1,
                edit_client2 : edit_client2,
                edit_client3 : edit_client3,
                edit_client4 : edit_client4,
                edit_client5 : edit_client5,
                edit_client6 : edit_client6
            }),

            headers: {

                "Content-Type": "application/json"

            }

        })

        .then(response => response.json())

        .then(data => {

            if (data.found === 'yes') {
                alert('You have that Client in the website');
            } else {
                alert("You have Edited a Client");
                let pop_up = document.getElementById('pop_up_client_list');

                pop_up.style.display = 'none';
                this.list_client();
            }

        })

        .catch(error => {

            console.error(

                "There has been a problem:",

                error

            );

        });
    }
    submit_mise_jour = (e) => {
        e.preventDefault();
        let input_for_montant_id = document.getElementById("input_for_montant_id").value;
        let index_id = this.state.info_for_montant_generale_name.index_id;
        fetch("http://asyd12855.pythonanywhere.com/misejour",{

            method: "POST",

            body: JSON.stringify({
                index_of_listcredit : index_id,
                input_for_montant_id : input_for_montant_id
            }),

            headers: {

                "Content-Type" : "application/json"

            }

        })

        .then(response => response.json())

        .then(data => {

            alert("You have Added money");
            let pop_up = document.getElementById('pop_up_credit_list_mise_jour');

            pop_up.style.display = 'none';
            this.list_credit();

        })

        .catch(error => {

            console.error(

                "There has been a problem:",

                error

            );

        });
    }
    submit_add_product = (e) => {
        e.preventDefault();
        console.log(e);
        let fourn_select_add_product = document.getElementById("fourn_select_add_product_id1").value;
        let category_select_add_product = document.getElementById("category_select_add_product_id1").value;
        let bar_code_add_product = document.getElementById("bar_code_add_product_id1").value;
        let referance_add_product = document.getElementById("referance_add_product_id1").value;
        let qty_add_product = document.getElementById("qty_add_product_id1").value;
        let kg_measurement_add_product = document.getElementById("kg_measurement_add_product_id1").checked;
        let meter_measurement_add_product = document.getElementById("meter_measurement_add_product_id1").checked;
        let description_field_add_product = document.getElementById("description_field_add_product_id1").value;
        let min_qty_alert = document.getElementById("min_qty_alert_id1").value;
        var filenamelogo = '';
        let pu_devis_add_product = document.getElementById("pu_devis_add_product_id1").value;
        let prix_d_achat_add_product = document.getElementById("prix_d_achat_add_product_id1").value;
        let prix_de_vente_add_product = document.getElementById("prix_de_vente_add_product_id1").value;
        let file = document.getElementById("logo");
        if (file.files[0]) {
            filenamelogo = file.files[0].name;
            let data = new FormData();
            data.append('file', file.files[0]);
            fetch("http://asyd12855.pythonanywhere.com/logoproduct",{

                method: "POST",

                body: data

            })

            .then(response => response.json())

            .then(data => {

                console.log(data);

            })

            .catch(error => {

                console.error(

                    "There has been a problem:",

                    error

                );

            });
        }
        if ((kg_measurement_add_product === true) && (meter_measurement_add_product === true)) {
            alert("You cannot choose both Kg & m. Choose ONLY ONE or DON'T choose ANY.");
        } else {
            if ((kg_measurement_add_product === false) && (meter_measurement_add_product === false)) {
                var kg_or_m = 'unit';
            } else {
                if ((kg_measurement_add_product === true) && (meter_measurement_add_product === false)) {
                    kg_or_m = 'kg';
                } else {
                    kg_or_m = 'm';
                }
            }
            fetch("http://asyd12855.pythonanywhere.com/addproduct",{

                method: "POST",

                body: JSON.stringify({
                    fourn_select_add_product: fourn_select_add_product,
                    category_select_add_product: category_select_add_product,
                    bar_code_add_product: bar_code_add_product,
                    referance_add_product: referance_add_product,
                    qty_add_product: qty_add_product,
                    kg_or_m: kg_or_m,
                    description_field_add_product: description_field_add_product,
                    min_qty_alert : min_qty_alert,
                    pu_devis_add_product : pu_devis_add_product,
                    prix_d_achat_add_product : prix_d_achat_add_product,
                    prix_de_vente_add_product : prix_de_vente_add_product,
                    filename: filenamelogo
                }),

                headers: {

                    "Content-Type": "application/json"

                }

            })

            .then(response => response.json())

            .then(data => {

                if (data.found === 'yes') {
                    alert('You have that product in the website');
                } else {
                    alert("You have added a Product");
                }

            })

            .catch(error => {

                console.error(

                    "There has been a problem:",

                    error

                );

            });
        }
    }
    del_list_product = (ind) => {
        if (window.confirm('are you sure you want to delete the Product?')) {
            fetch("http://asyd12855.pythonanywhere.com/dellistproduct/" + ind,{

                method: "DELETE",

                headers: {

                    "Content-Type": "application/json"

                }

            })

            .then(response => response.json())

            .then(data => {

                this.listproduct();

            })

            .catch(error => {

                console.error(

                    "There has been a problem:",

                    error

                );

            });
        }
    }
    submit_add_product_info = (e) => {
        e.preventDefault();
        let qty_add_product = document.getElementById("qty_add_product_id").value;
        let min_qty_alert = document.getElementById("min_qty_alert_id").value;
        let pu_devis_add_product = document.getElementById("pu_devis_add_product_id").value;
        let prix_d_achat_add_product = document.getElementById("prix_d_achat_add_product_id").value;
        let prix_de_vente_add_product = document.getElementById("prix_de_vente_add_product_id").value;
        fetch("http://asyd12855.pythonanywhere.com/addproductstorage",{

            method: "POST",

            body: JSON.stringify({
                storage_qty: qty_add_product,
                storage_min_qty_alert: min_qty_alert,
                storage_p_devis: pu_devis_add_product,
                storage_p_achat: prix_d_achat_add_product,
                storage_p_vente: prix_de_vente_add_product,
                storage_product_id: this.state.info_for_product.id
            }),

            headers: {

                "Content-Type": "application/json"

            }

        })

        .then(response => response.json())

        .then(data => {

            alert('You have added a shipment to the storage')

            let pop_up = document.getElementById('pop_up_product_list_edit');

            pop_up.style.display = 'none';

            this.listproduct()
    

        })

        .catch(error => {

            console.error(

                "There has been a problem:",

                error

            );

        });
    }
    del_list_charge = (id) => {
        if (window.confirm('are you sure you want to delete the Charge?')) {
            fetch("http://asyd12855.pythonanywhere.com/dellistcharge/" + id,{

                method: "DELETE",

                headers: {

                    "Content-Type": "application/json"

                }

            })

            .then(response => response.json())

            .then(data => {

                this.charge_click();

            })

            .catch(error => {

                console.error(

                    "There has been a problem:",

                    error

                );

            });
        }
    }
    submit_add_charge = (e) => {
        e.preventDefault();
        let listdes_avoire_description = document.getElementById("listdes_avoire_description_id").value;
        let listdes_avoire_prix = document.getElementById("listdes_avoire_prix_id").value;
        fetch("http://asyd12855.pythonanywhere.com/addcharge",{

            method: "POST",

            body: JSON.stringify({
                descrip_charge: listdes_avoire_description,
                prix_charge: listdes_avoire_prix
            }),

            headers: {

                "Content-Type": "application/json"

            }

        })

        .then(response => response.json())

        .then(data => {

            alert("Your charge is added");
            this.charge_click();

        })

        .catch(error => {

            console.error(

                "There has been a problem:",

                error

            );

        });
    }
    del_list_factur = (id) => {
        if (window.confirm('are you sure you want to delete the Facture?')) {
            fetch("http://asyd12855.pythonanywhere.com/dellistfactur/" + id,{

                method: "DELETE",

                headers: {

                    "Content-Type": "application/json"

                }

            })

            .then(response => response.json())

            .then(data => {

                this.list_facture();

            })

            .catch(error => {

                console.error(

                    "There has been a problem:",

                    error

                );

            });
        }
    }
    del_list_devis = (id) => {
        if (window.confirm('are you sure you want to delete the Devis?')) {
            fetch("http://asyd12855.pythonanywhere.com/dellistdevis/" + id,{

                method: "DELETE",

                headers: {

                    "Content-Type": "application/json"

                }

            })

            .then(response => response.json())

            .then(data => {

                this.list_devis();

            })

            .catch(error => {

                console.error(

                    "There has been a problem:",

                    error

                );

            });
        }
    }
    del_list_sans_factur = (id) => {
        if (window.confirm('are you sure you want to delete the Sans Facture?')) {
            fetch("http://asyd12855.pythonanywhere.com/dellistsansfactur/" + id,{

                method: "DELETE",

                headers: {

                    "Content-Type": "application/json"

                }

            })

            .then(response => response.json())

            .then(data => {

                this.list_sans_facture();

            })

            .catch(error => {

                console.error(

                    "There has been a problem:",

                    error

                );

            });
        }
    }
    del_list_bl = (id) => {
        if (window.confirm('are you sure you want to delete the B.L.?')) {
            fetch("http://asyd12855.pythonanywhere.com/dellistbl/" + id,{

                method: "DELETE",

                headers: {

                    "Content-Type": "application/json"

                }

            })

            .then(response => response.json())

            .then(data => {

                this.list_bl();

            })

            .catch(error => {

                console.error(

                    "There has been a problem:",

                    error

                );

            });
        }
    }
    devis_be_factur = (id) => {
        if (window.confirm('are you sure you want to make that Devis a Facture?')) {
            fetch("http://asyd12855.pythonanywhere.com/devisbefactur",{

                method: "POST",

                body: JSON.stringify({
                    devis_id : id
                }),

                headers: {

                    "Content-Type": "application/json"

                }

            })

            .then(response => response.json())

            .then(data => {

                if (data.devisbefactur === 'You do not have a ICE') {
                    alert("You will not have a Facture Untill You type Your ICE");
                } else {
                    alert('You have made a Facture');

                    this.list_devis();
                    window.location.reload();
                }
        

            })

            .catch(error => {

                console.error(

                    "There has been a problem:",

                    error

                );

            });
        }
    }
    sans_be_factur = (id) => {
        if (window.confirm('are you sure you want to make that Sans Facture a Facture?')) {
            fetch("http://asyd12855.pythonanywhere.com/sansbefactur",{

                method: "POST",

                body: JSON.stringify({
                    sans_id : id
                }),

                headers: {

                    "Content-Type": "application/json"

                }

            })

            .then(response => response.json())

            .then(data => {

                if (data.sansbefactur === 'You do not have a ICE') {
                    alert("You will not have a Facture Untill You type Your ICE");
                } else {
                    alert('You have made a Facture');

                    this.list_sans_facture();
                    window.location.reload();
                }
        

            })

            .catch(error => {

                console.error(

                    "There has been a problem:",

                    error

                );

            });
        }
    }
    bl_be_factur = () => {
        let array_of_bl =  [];
        for (let i = 0; i < this.state.listbl.length; i++) {
            let bl = this.state.listbl[i];
            let client_id_list_bl = document.getElementsByClassName('checkboxclass' + bl.client_id_list_bl);
            for (let x = 0; x < client_id_list_bl.length; x++) {
               if ((client_id_list_bl[x].checked) === true) {
                   if ((client_id_list_bl[x].id) in array_of_bl) {
                       console.log(array_of_bl);
                   } else {
                        array_of_bl.push(client_id_list_bl[x].id);
                   }
               }
            }
        }
        if (array_of_bl.length > 0) {
            if (window.confirm('are you sure you want to make that B.L. a Facture?')) {
                console.log(array_of_bl);
                fetch("http://asyd12855.pythonanywhere.com/blbefactur",{
    
                    method: "POST",
    
                    body: JSON.stringify({
                        bl_id : array_of_bl
                    }),
    
                    headers: {
    
                        "Content-Type": "application/json"
    
                    }
    
                })
    
                .then(response => response.json())
    
                .then(data => {

                    if (data.blbefactur === 'You do not have a ICE') {
                        alert("You will not have a Facture Untill You type Your ICE");
                    } else {
                        alert('You have made a Facture');
                        array_of_bl = [];
                        window.location.reload();
                    }
    
                })
    
                .catch(error => {
    
                    console.error(
    
                        "There has been a problem:",
    
                        error
    
                    );
    
                });
            }
        } else {
            alert('You have to check one checkbox');
        }
    }
    selectfactur = () => {
        fetch("http://asyd12855.pythonanywhere.com/listfactur",{

            method: "GET",

            headers: {

                "Content-Type": "application/json"

            }

        })

        .then(response => response.json())

        .then(data => {

            this.setState({

                listfactur: data.listfacturarray

            })

        })

        .catch(error => {

            console.error(

                "There has been a problem:",

                error

            );

        });
    }
    selectclient = () => {
        fetch("http://asyd12855.pythonanywhere.com/listclient",{

            method: "GET",

            headers: {

                "Content-Type": "application/json"

            }

        })

        .then(response => response.json())

        .then(data => {

            this.setState({

                listclient: data.listclientarray

            })

        })

        .catch(error => {

            console.error(

                "There has been a problem:",

                error

            );

        });
    }
    del_list_avoire = (id) => {
        if (window.confirm('are you sure you want to delete the Avoire?')) {
            fetch("http://asyd12855.pythonanywhere.com/dellistavoire/" + id,{

                method: "DELETE",

                headers: {

                    "Content-Type": "application/json"

                }

            })

            .then(response => response.json())

            .then(data => {

                this.list_des_avoire_click();

            })

            .catch(error => {

                console.error(

                    "There has been a problem:",

                    error

                );

            });
        }
    }
    submit_add_client_vente = (e) => {
        e.preventDefault();
        let generale_add_client_select = 1;
        let normal_info_add_client_name_add = document.getElementById("normal_info_add_client_name_add_id2").value;
        let normal_info_add_client_tele_number = document.getElementById("normal_info_add_client_tele_number_id2").value;
        let cin_add_client_n_ice = document.getElementById("cin_add_client_n_ice_id2").value;
        let cin_add_client_cin = document.getElementById("cin_add_client_cin_id2").value;
        let address_add_client_adresse = document.getElementById("address_add_client_adresse_id2").value;
        fetch("http://asyd12855.pythonanywhere.com/addclient",{

            method: "POST",

            body: JSON.stringify({
                generale_add_client: generale_add_client_select,
                name_add_client: normal_info_add_client_name_add,
                tele_number_add_client: normal_info_add_client_tele_number,
                n_ice_add_client: cin_add_client_n_ice,
                cin_add_client: cin_add_client_cin,
                adresse_add_client: address_add_client_adresse
            }),

            headers: {

                "Content-Type": "application/json"

            }

        })

        .then(response => response.json())

        .then(data => {

            if (data.found === 'yes') {
                alert('You have that Client in the website');
            } else {
                alert("You have added a Client");
                let pop_up = document.getElementById('new_client_vente');
                pop_up.style.display = 'none';
            }

        })

        .catch(error => {

            console.error(

                "There has been a problem:",

                error

            );

        });
    }
    submit_search_caisson = (e) => {
        e.preventDefault();
        let client_srch_list_caisse = document.getElementById("client_srch_list_caisse_id").value;
        fetch("http://asyd12855.pythonanywhere.com/caisson/search",{

            method: "POST",

            body: JSON.stringify({
                searchTerm : client_srch_list_caisse
            }),

            headers: {

                "Content-Type": "application/json"

            }

        })

        .then(response => response.json())

        .then(data => {

            this.setState({

                listcaisson: data.search_result

            })

        })

        .catch(error => {

            console.error(

                "There has been a problem:",

                error

            );

        });
    }
    submit_search_bank = (e) => {
        e.preventDefault();
        let client_srch_list_banque = document.getElementById("client_srch_list_banque_id").value;
        fetch("http://asyd12855.pythonanywhere.com/bank/search",{

            method: "POST",

            body: JSON.stringify({
                searchTerm : client_srch_list_banque
            }),

            headers: {

                "Content-Type": "application/json"

            }

        })

        .then(response => response.json())

        .then(data => {

            this.setState({

                listbank: data.search_result

            })

        })

        .catch(error => {

            console.error(

                "There has been a problem:",

                error

            );

        });
    }
    submit_search_bl_client = (e) => {
        e.preventDefault();
        let client_srch_list_bl = document.getElementById("client_srch_list_bl_id").value;
        fetch("http://asyd12855.pythonanywhere.com/bl/search/client",{

            method: "POST",

            body: JSON.stringify({
                searchTerm : client_srch_list_bl
            }),

            headers: {

                "Content-Type": "application/json"

            }

        })

        .then(response => response.json())

        .then(data => {

            this.setState({

                listbl: data.search_result

            })

        })

        .catch(error => {

            console.error(

                "There has been a problem:",

                error

            );

        });
    }
    submit_search_bl_date = (e) => {
        e.preventDefault();
        let Date_srch_list_bl = document.getElementById("Date_srch_list_bl_id").value;
        fetch("http://asyd12855.pythonanywhere.com/bl/search/date",{

            method: "POST",

            body: JSON.stringify({
                searchTerm : Date_srch_list_bl
            }),

            headers: {

                "Content-Type": "application/json"

            }

        })

        .then(response => response.json())

        .then(data => {

            this.setState({

                listbl: data.result_client

            })

        })

        .catch(error => {

            console.error(

                "There has been a problem:",

                error

            );

        });
    }
    submit_search_sans_client = (e) => {
        e.preventDefault();
        let client_srch_list_sans_factures = document.getElementById("client_srch_list_sans_factures_id").value;
        fetch("http://asyd12855.pythonanywhere.com/sans/search/client",{

            method: "POST",

            body: JSON.stringify({
                searchTerm : client_srch_list_sans_factures
            }),

            headers: {

                "Content-Type": "application/json"

            }

        })

        .then(response => response.json())

        .then(data => {

            this.setState({

                listsansfactur: data.search_result

            })

        })

        .catch(error => {

            console.error(

                "There has been a problem:",

                error

            );

        });
    }
    submit_search_sans_date = (e) => {
        e.preventDefault();
        let Date_srch_list_sans_factures = document.getElementById("Date_srch_list_sans_factures_id").value;
        fetch("http://asyd12855.pythonanywhere.com/sans/search/date",{

            method: "POST",

            body: JSON.stringify({
                searchTerm : Date_srch_list_sans_factures
            }),

            headers: {

                "Content-Type": "application/json"

            }

        })

        .then(response => response.json())

        .then(data => {

            this.setState({

                listsansfactur: data.result_client

            })

        })

        .catch(error => {

            console.error(

                "There has been a problem:",

                error

            );

        });
    }
    submit_search_devis_client = (e) => {
        e.preventDefault();
        let client_srch_list_devis = document.getElementById("client_srch_list_devis_id").value;
        fetch("http://asyd12855.pythonanywhere.com/devis/search/client",{

            method: "POST",

            body: JSON.stringify({
                searchTerm : client_srch_list_devis
            }),

            headers: {

                "Content-Type": "application/json"

            }

        })

        .then(response => response.json())

        .then(data => {

            this.setState({

                listdevis: data.search_result

            })

        })

        .catch(error => {

            console.error(

                "There has been a problem:",

                error

            );

        });
    }
    submit_search_devis_date = (e) => {
        e.preventDefault();
        let Date_srch_list_devis = document.getElementById("Date_srch_list_devis_id").value;
        fetch("http://asyd12855.pythonanywhere.com/devis/search/date",{

            method: "POST",

            body: JSON.stringify({
                searchTerm : Date_srch_list_devis
            }),

            headers: {

                "Content-Type": "application/json"

            }

        })

        .then(response => response.json())

        .then(data => {

            this.setState({

                listdevis: data.result_client

            })

        })

        .catch(error => {

            console.error(

                "There has been a problem:",

                error

            );

        });
    }
    submit_search_factur_client = (e) => {
        e.preventDefault();
        let client_srch_list_factures = document.getElementById("client_srch_list_factures_id").value;
        fetch("http://asyd12855.pythonanywhere.com/factur/search/client",{

            method: "POST",

            body: JSON.stringify({
                searchTerm : client_srch_list_factures
            }),

            headers: {

                "Content-Type": "application/json"

            }

        })

        .then(response => response.json())

        .then(data => {

            this.setState({

                listfactur: data.search_result

            })

        })

        .catch(error => {

            console.error(

                "There has been a problem:",

                error

            );

        });
    }
    submit_search_factur_date = (e) => {
        e.preventDefault();
        let Date_srch_list_factures = document.getElementById("Date_srch_list_factures_id").value;
        fetch("http://asyd12855.pythonanywhere.com/factur/search/date",{

            method: "POST",

            body: JSON.stringify({
                searchTerm : Date_srch_list_factures
            }),

            headers: {

                "Content-Type": "application/json"

            }

        })

        .then(response => response.json())

        .then(data => {

            this.setState({

                listfactur: data.result_client

            })

        })

        .catch(error => {

            console.error(

                "There has been a problem:",

                error

            );

        });
    }
    submit_search_fourn_act = (e) => {
        e.preventDefault();
        let activite_input_search_list_fourn = document.getElementById("activite_input_search_list_fourn_id").value;
        fetch("http://asyd12855.pythonanywhere.com/fourn/activite/search",{

            method: "POST",

            body: JSON.stringify({
                searchTerm : activite_input_search_list_fourn
            }),

            headers: {

                "Content-Type": "application/json"

            }

        })

        .then(response => response.json())

        .then(data => {

            this.setState({

                listfourn: data.search_result

            })

        })

        .catch(error => {

            console.error(

                "There has been a problem:",

                error

            );

        });
    }
    submit_search_fourn_name = (e) => {
        e.preventDefault();
        let nom_input_search_list_fourn = document.getElementById("nom_input_search_list_fourn_id").value;
        fetch("http://asyd12855.pythonanywhere.com/fourn/name/search",{

            method: "POST",

            body: JSON.stringify({
                searchTerm : nom_input_search_list_fourn
            }),

            headers: {

                "Content-Type": "application/json"

            }

        })

        .then(response => response.json())

        .then(data => {

            this.setState({

                listfourn: data.search_result

            })

        })

        .catch(error => {

            console.error(

                "There has been a problem:",

                error

            );

        });
    }
    submit_search_credit_client = (e) => {
        e.preventDefault();
        let nom_input_search_list_credit = document.getElementById("nom_input_search_list_credit_id").value;
        fetch("http://asyd12855.pythonanywhere.com/credit/name/search",{

            method: "POST",

            body: JSON.stringify({
                searchTerm : nom_input_search_list_credit
            }),

            headers: {

                "Content-Type": "application/json"

            }

        })

        .then(response => response.json())

        .then(data => {

            this.setState({

                listcredit: data.search_result

            })

        })

        .catch(error => {

            console.error(

                "There has been a problem:",

                error

            );

        });
    }
    submit_search_client_ice = (e) => {
        e.preventDefault();
        let ice_input_search_list_client = document.getElementById("ice_input_search_list_client_id").value;
        fetch("http://asyd12855.pythonanywhere.com/client/ice/search",{

            method: "POST",

            body: JSON.stringify({
                searchTerm : ice_input_search_list_client
            }),

            headers: {

                "Content-Type": "application/json"

            }

        })

        .then(response => response.json())

        .then(data => {

            this.setState({

                listclient: data.search_result

            })

        })

        .catch(error => {

            console.error(

                "There has been a problem:",

                error

            );

        });
    }
    submit_search_client_name = (e) => {
        e.preventDefault();
        let name_input_search_list_client = document.getElementById("name_input_search_list_client_id").value;
        fetch("http://asyd12855.pythonanywhere.com/client/name/search",{

            method: "POST",

            body: JSON.stringify({
                searchTerm : name_input_search_list_client
            }),

            headers: {

                "Content-Type": "application/json"

            }

        })

        .then(response => response.json())

        .then(data => {

            this.setState({

                listclient: data.search_result

            })

        })

        .catch(error => {

            console.error(

                "There has been a problem:",

                error

            );

        });
    }
    submit_search_product_category = (e) => {
        e.preventDefault();
        let categorie_input_search_list_product = document.getElementById("categorie_input_search_list_product_id").value;
        fetch("http://asyd12855.pythonanywhere.com/product/category/search",{

            method: "POST",

            body: JSON.stringify({
                searchTerm : categorie_input_search_list_product
            }),

            headers: {

                "Content-Type": "application/json"

            }

        })

        .then(response => response.json())

        .then(data => {

            this.setState({

                listproduct: data.search_result

            })

        })

        .catch(error => {

            console.error(

                "There has been a problem:",

                error

            );

        });
    }
    submit_search_product_barcode = (e) => {
        e.preventDefault();
        let recherche_input_search_list_product = document.getElementById("recherche_input_search_list_product_id").value;
        fetch("http://asyd12855.pythonanywhere.com/product/barcode/search",{

            method: "POST",

            body: JSON.stringify({
                searchTerm : recherche_input_search_list_product
            }),

            headers: {

                "Content-Type": "application/json"

            }

        })

        .then(response => response.json())

        .then(data => {

            this.setState({

                listproduct: data.search_result

            })

        })

        .catch(error => {

            console.error(

                "There has been a problem:",

                error

            );

        });
    }
    submit_search_charge_date = (e) => {
        e.preventDefault();
        let from_date_srch_lst_ventes = document.getElementById("from_date_srch_lst_ventes_id3").value;
        fetch("http://asyd12855.pythonanywhere.com/charge/search/date",{

            method: "POST",

            body: JSON.stringify({
                searchTerm : from_date_srch_lst_ventes
            }),

            headers: {

                "Content-Type": "application/json"

            }

        })

        .then(response => response.json())

        .then(data => {

            this.setState({

                listcharge: data.result_charge

            })

        })

        .catch(error => {

            console.error(

                "There has been a problem:",

                error

            );

        });
    }
    submit_search_avoire_date = (e) => {
        e.preventDefault();
        let from_date_srch_lst_ventes = document.getElementById("from_date_srch_lst_ventes_id2").value;
        fetch("http://asyd12855.pythonanywhere.com/avoire/search/date",{

            method: "POST",

            body: JSON.stringify({
                searchTerm : from_date_srch_lst_ventes
            }),

            headers: {

                "Content-Type": "application/json"

            }

        })

        .then(response => response.json())

        .then(data => {

            this.setState({

                listavoire: data.result_charge

            })

        })

        .catch(error => {

            console.error(

                "There has been a problem:",

                error

            );

        });
    }
    submit_search_vente_date = (e) => {
        e.preventDefault();
        let from_date_srch_lst_ventes = document.getElementById("from_date_srch_lst_ventes_id1").value;
        fetch("http://asyd12855.pythonanywhere.com/factur/search/date",{

            method: "POST",

            body: JSON.stringify({
                searchTerm : from_date_srch_lst_ventes
            }),

            headers: {

                "Content-Type": "application/json"

            }

        })

        .then(response => response.json())

        .then(data => {

            this.setState({

                listfactur: data.result_client

            })

        })

        .catch(error => {

            console.error(

                "There has been a problem:",

                error

            );

        });
        fetch("http://asyd12855.pythonanywhere.com/sans/search/date",{

            method: "POST",

            body: JSON.stringify({
                searchTerm : from_date_srch_lst_ventes
            }),

            headers: {

                "Content-Type": "application/json"

            }

        })

        .then(response => response.json())

        .then(data => {

            this.setState({

                listsansfactur: data.result_client

            })

        })

        .catch(error => {

            console.error(

                "There has been a problem:",

                error

            );

        });
    }
    submit_search_vente_client = (e) => {
        e.preventDefault();
        let name_srch_lst_ventes = document.getElementById("name_srch_lst_ventes_id").value;
        fetch("http://asyd12855.pythonanywhere.com/factur/search/client",{

            method: "POST",

            body: JSON.stringify({
                searchTerm : name_srch_lst_ventes
            }),

            headers: {

                "Content-Type": "application/json"

            }

        })

        .then(response => response.json())

        .then(data => {

            this.setState({

                listfactur: data.search_result

            })

        })

        .catch(error => {

            console.error(

                "There has been a problem:",

                error

            );

        });
        fetch("http://asyd12855.pythonanywhere.com/sans/search/client",{

            method: "POST",

            body: JSON.stringify({
                searchTerm : name_srch_lst_ventes
            }),

            headers: {

                "Content-Type": "application/json"

            }

        })

        .then(response => response.json())

        .then(data => {

            this.setState({

                listsansfactur: data.search_result

            })

        })

        .catch(error => {

            console.error(

                "There has been a problem:",

                error

            );

        });
    }
    submit_regelment_vente = (e) => {
        e.preventDefault();
        let obj = {};
        let regelementvente = document.querySelector('input[name="regelementvente"]:checked').value;
        var checkbox_btns_regelment = document.getElementById("checkbox_btns_regelment_id1").checked;
        let pop_up = document.getElementById('regelment_vente');
        switch (regelementvente) {
            case 'espece':
                obj.type_of_paying = 'espece';
                obj.check_number = '';
                
                if (checkbox_btns_regelment === true) {
                    obj.wholeprice = Number(this.state.total_ttc_vente);
                    obj.creditprice = 0;
                    this.setState({
                        regelmentvente : obj
                    });
                    alert("You have added a regelement");
    
                    pop_up.style.display = 'none';
                } else {
                    let price_btns_regelment = document.getElementById("price_btns_regelment_id1").value;
                    if (price_btns_regelment === this.state.total_ttc_vente) {
                        obj.wholeprice = Number(price_btns_regelment);
                        obj.creditprice = 0;
                        this.setState({
                            regelmentvente : obj
                        });
                        alert("You have added a regelement");
        
                        pop_up.style.display = 'none';
                    } else {
                        alert("Your price should be like Total TTC");
                    }
                }
                break;
            case 'cheque':
                let check_btns_regelment = document.getElementById("check_btns_regelment_id1").value;
                if (check_btns_regelment === '') {
                    alert("You have to type the check number");
                } else {
                    obj.type_of_paying = 'cheque';
                    obj.check_number = Number(check_btns_regelment);
                    if (checkbox_btns_regelment === true) {
                        obj.wholeprice = Number(this.state.total_ttc_vente);
                        obj.creditprice = 0;
                        this.setState({
                            regelmentvente : obj
                        });
                        alert("You have added a regelement");
        
                        pop_up.style.display = 'none';
                    } else {
                        let price_btns_regelment = document.getElementById("price_btns_regelment_id1").value;
                        if (price_btns_regelment === this.state.total_ttc_vente) {
                            obj.wholeprice = Number(price_btns_regelment);
                            obj.creditprice = 0;
                            this.setState({
                                regelmentvente : obj
                            });
                            alert("You have added a regelement");
            
                            pop_up.style.display = 'none';
                        } else {
                            alert("Your price should be like Total TTC");
                        }
                    }
                }
                break;
            case 'credit':
                obj.type_of_paying = 'credit';
                obj.check_number = '';
                if (checkbox_btns_regelment === true) {
                    obj.creditprice = Number(this.state.total_ttc_vente);
                    obj.wholeprice = 0;
                    this.setState({
                        regelmentvente : obj
                    });
                    alert("You have added a regelement");
    
                    pop_up.style.display = 'none';
                } else {
                    let price_btns_regelment = document.getElementById("price_btns_regelment_id1").value;
                    obj.wholeprice = Number(price_btns_regelment);
                    obj.creditprice = Number(Number(this.state.total_ttc_vente) - Number(price_btns_regelment));
                    this.setState({
                        regelmentvente : obj
                    });
                    alert("You have added a regelement");
    
                    pop_up.style.display = 'none';
                }
                break;
            default:
                alert("You should choose one of the following:espece, cheque, credit");
                break;
        }
    }
    facturbtn = (e) => {
        e.preventDefault();
        let chooseclientid1 = document.getElementById("chooseclientid1").value;
        let choosedateid1 = document.getElementById("choosedateid1").value;
        if (this.state.vente_add.length === 0) {
            alert("You Must add one product");
        } else {
            if (Object.keys(this.state.regelmentvente).length === 0) {
                alert("You Must choose how to pay");
            } else {
                console.log(this.state.vente_add);
                console.log(this.state.regelmentvente);
                fetch("http://asyd12855.pythonanywhere.com/addfactur",{

                    method: "POST",

                    body: JSON.stringify({
                        client_id : chooseclientid1,
                        date : choosedateid1,
                        vente_add : this.state.vente_add,
                        regelmentvente : this.state.regelmentvente,
                        total_ht_vente : this.state.total_ht_vente,
                        total_ttc_vente : this.state.total_ttc_vente,
                        total_remise_vente : this.state.total_remise_vente,
                        tva_vente : this.state.tva_vente
                    }),

                    headers: {

                        "Content-Type": "application/json"

                    }

                })

                .then(response => response.json())

                .then(data => {
                    if (data.factur_id === '') {
                        alert("You will not have a Facture untill you type the ICE of the client");
                    } else {
                        if (data.factur_id === 'All is empty') {
                            alert("Choose the client ,Regelement and add products and press again");
                        } else {
                            alert("You have added a Facture");
                            window.open("https://managementstock1.herokuapp.com/factur/" + data.factur_id, "_blank");
                            window.location.reload();
                        }
                    }

                })

                .catch(error => {

                    alert("Choose the client ,Regelement and add products and press again");

                });
            }
        }
    }
    sansfacturbtn = (e) => {
        e.preventDefault();
        let chooseclientid1 = document.getElementById("chooseclientid1").value;
        let choosedateid1 = document.getElementById("choosedateid1").value;
        if (this.state.vente_add.length === 0) {
            alert("You Must add one product");
        } else {
            if (Object.keys(this.state.regelmentvente).length === 0) {
                alert("You Must choose how to pay");
            } else {
                fetch("http://asyd12855.pythonanywhere.com/addsansfactur",{

                    method: "POST",

                    body: JSON.stringify({
                        client_id : chooseclientid1,
                        date : choosedateid1,
                        vente_add : this.state.vente_add,
                        regelmentvente : this.state.regelmentvente,
                        total_ht_vente : this.state.total_ht_vente,
                        total_ttc_vente : this.state.total_ttc_vente,
                        total_remise_vente : this.state.total_remise_vente,
                        tva_vente : this.state.tva_vente
                    }),

                    headers: {

                        "Content-Type": "application/json"

                    }

                })

                .then(response => response.json())

                .then(data => {
                    if (data.created === 'cannot be created') {
                        alert("Choose the client ,Regelement and add products and press again");
                    } else {
                        alert("You have added a Sans Facture");
                        window.location.reload();
                    }

                })

                .catch(error => {

                    alert("Choose the client ,Regelement and add products and press again");

                });
            }
        }
    }
    devisbtn = (e) => {
        e.preventDefault();
        let chooseclientid1 = document.getElementById("chooseclientid1").value;
        let choosedateid1 = document.getElementById("choosedateid1").value;
        if (this.state.vente_add.length === 0) {
            alert("You Must add one product");
        } else {
            if (Object.keys(this.state.regelmentvente).length === 0) {
                alert("You Must choose how to pay");
            } else {
                fetch("http://asyd12855.pythonanywhere.com/adddevis",{

                    method: "POST",

                    body: JSON.stringify({
                        client_id : chooseclientid1,
                        date : choosedateid1,
                        vente_add : this.state.vente_add,
                        regelmentvente : this.state.regelmentvente,
                        total_ht_vente : this.state.total_ht_vente,
                        total_ttc_vente : this.state.total_ttc_vente,
                        total_remise_vente : this.state.total_remise_vente,
                        tva_vente : this.state.tva_vente
                    }),

                    headers: {

                        "Content-Type": "application/json"

                    }

                })

                .then(response => response.json())

                .then(data => {
                    if (data.created === 'cannot be created') {
                        alert("Choose the client ,Regelement and add products and press again");
                    } else {
                        alert("You have added a Devis");
                        window.open("https://managementstock1.herokuapp.com/devis/" + data.devis_id, "_blank");
                        window.location.reload();
                    }

                })

                .catch(error => {

                    alert("Choose the client ,Regelement and add products and press again");

                });
            }
        }
    }
    blbtn = (e) => {
        e.preventDefault();
        let chooseclientid1 = document.getElementById("chooseclientid1").value;
        let choosedateid1 = document.getElementById("choosedateid1").value;
        if (this.state.vente_add.length === 0) {
            alert("You Must add one product");
        } else {
            if (Object.keys(this.state.regelmentvente).length === 0) {
                alert("You Must choose how to pay");
            } else {
                fetch("http://asyd12855.pythonanywhere.com/addbl",{

                    method: "POST",

                    body: JSON.stringify({
                        client_id : chooseclientid1,
                        date : choosedateid1,
                        vente_add : this.state.vente_add,
                        regelmentvente : this.state.regelmentvente,
                        total_ht_vente : this.state.total_ht_vente,
                        total_ttc_vente : this.state.total_ttc_vente,
                        total_remise_vente : this.state.total_remise_vente,
                        tva_vente : this.state.tva_vente
                    }),

                    headers: {

                        "Content-Type": "application/json"

                    }

                })

                .then(response => response.json())

                .then(data => {
                    if (data.created === 'cannot be created') {
                        alert("Choose the client ,Regelement and add products and press again");
                    } else {
                        alert("You have added a B.L");
                        window.open("https://managementstock1.herokuapp.com/bl/" + data.bl_id, "_blank");
                        window.location.reload();
                    }

                })

                .catch(error => {

                    alert("Choose the client ,Regelement and add products and press again");

                });
            }
        }
    }
    selectclient_avoire = () => {
        let chooseclient = document.getElementById("chooseclientid2").value;
        fetch("http://asyd12855.pythonanywhere.com/selectclientavoire",{

            method: "POST",

            body: JSON.stringify({
                chooseclient : chooseclient
            }),

            headers: {

                "Content-Type": "application/json"

            }

        })

        .then(response => response.json())

        .then(data => {
            this.setState({
                listfactur : data.listfactur
            });
        })

        .catch(error => {

            alert("This Client does not have any Factur or there is a problem in the server");

        });
    }
    selectfactur_avoire = () => {
        let choosefactur = document.getElementById("choosefacturid").value;
        fetch("http://asyd12855.pythonanywhere.com/selectfacturavoire",{

            method: "POST",

            body: JSON.stringify({
                choosefactur : choosefactur
            }),

            headers: {

                "Content-Type": "application/json"

            }

        })

        .then(response => response.json())

        .then(data => {
            this.setState({
                avoire_list : data.avoire_list,
                total_remise_avoire : Number(data.total_remise_avoire),
                tva_avoire : Number(data.tva_avoire),
                total_ht_avoire : Number(data.total_ht_avoire),
                total_ttc_avoire : Number(data.total_ttc_avoire),
                avoire_client_id : Number(data.avoire_client_id)
            });
        })

        .catch(error => {

            alert("there is a problem in the server");

        });
    }
    remove_avoire = (index) => {
        let obje = this.state.avoire_list[index];
        console.log(obje);
        this.setState({
            total_ht_avoire : this.state.total_ht_avoire - obje.total_ht,
            total_ttc_avoire : this.state.total_ttc_avoire - (obje.total_ht + (obje.total_ht * (20/100))),
            tva_avoire : this.state.tva_avoire - (obje.total_ht * (20/100)),
            total_remise_avoire : this.state.total_remise_avoire - obje.remise_vente_add
        });

        this.state.avoire_list.splice(index,1);
    }
    submit_regelment_avoire = (e) => {
        e.preventDefault();
        let obj = {};
        let regelementavoire = document.querySelector('input[name="regelement"]:checked').value;
        var checkbox_btns_regelment = document.getElementById("checkbox_btns_regelment_id3").checked;
        let pop_up = document.getElementById('regelment_avoire');
        switch (regelementavoire) {
            case 'espece':
                obj.type_of_paying = 'espece';
                obj.check_number = '';
                
                if (checkbox_btns_regelment === true) {
                    obj.wholeprice = Number(this.state.total_ttc_avoire);
                    this.setState({
                        avoire_regelement : obj
                    });
                    alert("You have added a regelement");
    
                    pop_up.style.display = 'none';
                } else {
                    let price_btns_regelment = document.getElementById("price_btns_regelment_id_avoire").value;
                    if (price_btns_regelment === this.state.total_ttc_vente) {
                        obj.wholeprice = Number(price_btns_regelment);
                        this.setState({
                            avoire_regelement : obj
                        });
                        alert("You have added a regelement");
        
                        pop_up.style.display = 'none';
                    } else {
                        alert("Your price should be like Total TTC");
                    }
                }
                break;
            case 'cheque':
                let check_btns_regelment = document.getElementById("check_btns_regelment_id_avoire").value;
                if (check_btns_regelment === '') {
                    alert("You have to type the check number");
                } else {
                    obj.type_of_paying = 'cheque';
                    obj.check_number = Number(check_btns_regelment);
                    if (checkbox_btns_regelment === true) {
                        obj.wholeprice = Number(this.state.total_ttc_vente);
                        this.setState({
                            avoire_regelement : obj
                        });
                        alert("You have added a regelement");
        
                        pop_up.style.display = 'none';
                    } else {
                        let price_btns_regelment = document.getElementById("price_btns_regelment_id_avoire").value;
                        if (price_btns_regelment === this.state.total_ttc_vente) {
                            obj.wholeprice = Number(price_btns_regelment);
                            this.setState({
                                avoire_regelement : obj
                            });
                            alert("You have added a regelement");
            
                            pop_up.style.display = 'none';
                        } else {
                            alert("Your price should be like Total TTC");
                        }
                    }
                }
                break;
            default:
                alert("You should choose one of the following:espece, cheque, credit");
                break;
        }
        // console.log(this.state.avoire_regelement);
    }
    avoirebtn = (e) => {
        e.preventDefault();
        let choosefactur = document.getElementById("choosefacturid").value;
        let choosedateid1 = document.getElementById("choosedateid5").value;
        if (this.state.avoire_list.length === 0) {
            alert("You Must add one product");
        } else {
            if (Object.keys(this.state.avoire_regelement).length === 0) {
                alert("You Must choose how to pay");
            } else {
                console.log(this.state.avoire_list);
                console.log(this.state.avoire_regelement);
                fetch("http://asyd12855.pythonanywhere.com/addavoire",{

                    method: "POST",

                    body: JSON.stringify({
                        client_id : this.state.avoire_client_id,
                        choosefactur : choosefactur,
                        date : choosedateid1,
                        avoire_list : this.state.avoire_list,
                        avoire_regelement : this.state.avoire_regelement,
                        total_ht_avoire : this.state.total_ht_avoire,
                        total_ttc_avoire : this.state.total_ttc_avoire,
                        total_remise_avoire : this.state.total_remise_avoire,
                        tva_avoire : this.state.tva_avoire
                    }),

                    headers: {

                        "Content-Type": "application/json"

                    }

                })

                .then(response => response.json())

                .then(data => {
                    alert("You have added a Avoire");
                    window.open("https://managementstock1.herokuapp.com/avoire/" + data.avoire_id, "_blank");
                    window.location.reload();

                })

                .catch(error => {

                    alert("Choose the Facture ,Regelement and see products and press again");

                });
            }
        }
    }
    update_dashbord = () => {
        alert("You are about to Update the Dashbord");
        if (window.confirm("Are You sure that you want to Update Dashbord?")) {
            fetch("http://asyd12855.pythonanywhere.com/updatedashbord",{

                method: "GET",

                headers: {

                    "Content-Type": "application/json"

                }

            })

            .then(response => response.json())

            .then(data => {

                let dashbord = data.dashbord;
                let data1 = [

                    ["January", dashbord[0].price],

                    ["February", dashbord[1].price],

                    ["March", dashbord[2].price],

                    ["April", dashbord[3].price],

                    ["May", dashbord[4].price],

                    ["June", dashbord[5].price],

                    ["July", dashbord[6].price],

                    ["August", dashbord[7].price],

                    ["September", dashbord[8].price],

                    ["October", dashbord[9].price],

                    ["November", dashbord[10].price],

                    ["December", dashbord[11].price]

                    ];
                this.setState({
                    chart : data1
                });

            })

            .catch(error => {

                alert("You have a problem in the Chart");

            });
        }
    }
    render(){
        let today = new Date();

        let date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();

        let day2 = today.getDate();

        let month2 = today.getMonth() + 1;

        let year2 = today.getFullYear();

        if (month2 < 10) month2 = "0" + month2;

        if (day2 < 10) day2 = "0" + day2;

        let today2 = year2 + "-" + month2 + "-" + day2;

        let year1 = today.getFullYear();


        return (<div className='container'>
            <div className='menu'>

                <div className="heading">

                    <h2><span className='fas fa-atom'></span> KingStock</h2>

                </div>

                <div className="menuContent">

                    <table>

                        <tbody id='tbodys'>

                            <tr onClick={this.handleClick1}>

                                <td className='table-span'><span className='fas fa-th-large'></span></td>

                                <td><span className='span2'>Dashboard</span></td>

                                <td className='table-span1'><span className='span1'></span></td>

                            </tr>

                            <tr onClick={this.handleClick2}>

                                <td className='table-span'><span className='fas fa-money-bill-alt'></span></td>

                                <td><span className='span2'>Point Vente</span></td>

                                <td className='table-span1'><span className='span1 fas fa-caret-right'></span></td>

                            </tr>

                            <tr onClick={this.handleClick3}>

                                <td className='table-span'><span className='fas fa-lightbulb'></span></td>

                                <td><span className='span2'>Produits</span></td>

                                <td className='table-span1'><span className='span1 fas fa-caret-right'></span></td>

                            </tr>

                            <tr onClick={this.handleClick4}>

                                <td className='table-span'><span className='fas fa-user'></span></td>

                                <td><span className='span2'>Clients</span></td>

                                <td className='table-span1'><span className='span1 fas fa-caret-right'></span></td>

                            </tr>

                            <tr onClick={this.handleClick5}>

                                <td className='table-span'><span className='fas fa-user-tie'></span></td>

                                <td><span className='span2'>Fournisseur</span></td>

                                <td className='table-span1'><span className='span1 fas fa-caret-right'></span></td>

                            </tr>

                            <tr onClick={this.handleClick6}>

                                <td className='table-span'><span className='fas fa-receipt'></span></td>

                                <td><span className='span2'>Facturation</span></td>

                                <td className='table-span1'><span className='span1 fas fa-caret-right'></span></td>

                            </tr>

                            <tr onClick={this.handleClick7}>

                                <td className='table-span'><span className='fas fa-money-check-alt'></span></td>

                                <td><span className='span2'>Comptabilite</span></td>

                                <td className='table-span1'><span className='span1 fas fa-caret-right'></span></td>

                            </tr>

                            <tr onClick={this.handleClick8}>

                                <td className='table-span'><span className='fas fa-cog'></span></td>

                                <td><span className='span2'>Settings</span></td>

                                <td className='table-span1'><span className='span1 fas fa-caret-right'></span></td>

                            </tr>

                        </tbody>

                    </table>

                </div>

            </div>
            <div className='model'>
                <div className='userdash'>

                    <div className='userdashclass'>

                        <div className='notif'>

                            <div className='vl1'></div>

                            <span className='bell fas fa-bell' onClick={this.notif}></span>

                            <span id='alerticon' className='alert fas fa-exclamation'></span>

                            <div className='vl2'></div>

                        </div>

                        <div className='userinfo'>

                            <div className='user_all'>

                                <div className='user_logo'>

                                    {/* <span className='fas fa-user'></span> */}

                                    <img src={usericon} alt="user-icon" />

                                </div>

                                <div className='user_info'>

                                    <div className='user_name'>

                                        <div>{this.state.admin}</div>

                                    </div>

                                    <div className='user_date'>

                                        <div>{date}</div>

                                    </div>

                                </div>

                                <div className='user_logout' onClick={this.user_logout}>

                                    <span className='fas fa-arrow-alt-circle-down'></span>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>
                <div className='infodash' id='modal'>
                    <div id='dashbordfull'>

                        <div className='headingdash'>

                            <h1>Statistique Dernier Mois</h1>

                        </div>

                        <div className='numbersdash'>

                            <div className='benefic'>

                                <div className='numberlogo'>

                                    <span className='fas fa-dollar-sign'></span>

                                </div>

                                <div className='numbertext'>

                                    <div className='thenumber'>

                                        <div>{this.state.benefic ? this.state.benefic : 0} DH</div>

                                    </div>

                                    <div className='numbertype'>

                                        <div>Benific</div>

                                    </div>

                                </div>

                            </div>

                            <div className='totalvents benefic'>

                                <div className='numberlogo' id='numberlogo1'>

                                    <span className='fas fa-chart-bar'></span>

                                </div>

                                <div className='numbertext'>

                                    <div className='thenumber'>

                                        <div>{this.state.totalvente ? this.state.totalvente : 0} DH</div>

                                    </div>

                                    <div className='numbertype'>

                                        <div>Total Vents</div>

                                    </div>

                                </div>

                            </div>

                            <div className='productvents benefic'>

                                <div className='numberlogo' id='numberlogo2'>

                                    <span className='fas fa-bezier-curve'></span>

                                </div>

                                <div className='numbertext'>

                                    <div className='thenumber'>

                                        <div>{this.state.productsunit ? this.state.productsunit : 0 }</div>

                                    </div>

                                    <div className='numbertype'>

                                        <div>Produit Vents</div>

                                    </div>

                                </div>

                            </div>

                        </div>

                        <div className='chartheading'>

                            <div className='revenuclass'>

                                <div className='revenue'>

                                    Revenu analytic.

                                </div>

                            </div>

                            <div className='yearclass'>

                                <div className='year'>

                                    {year1}

                                </div>

                            </div>

                        </div>

                        <hr />

                        <div className='chartdash' id='container'>

                            <AnyChart

                                type="line"

                                data={this.state.chart}

                            />

                        </div>

                    </div>

                    <div id='point_vente1'>

                        <form action='' method='POST'>

                            <div className='btns_heading'>

                                <div className='btns'>

                                    <div className='facturbtn'>

                                        <input onClick={this.facturbtn} id='facturebtnid' type="submit" name="facturebtnname" value="Facturation" />

                                    </div>

                                    <div className='sansfacturbtn'>

                                        <input onClick={this.sansfacturbtn} id='sansfacturbtnid' type="submit" name="sansfacturbtnname" value="Sans Facturation" />

                                    </div>

                                    <div className='devisbtn'>

                                        <input onClick={this.devisbtn} id='devisbtnid' type="submit" name="devisbtnname" value="Devis" />

                                    </div>

                                    <div className='BLbtn'>

                                        <input onClick={this.blbtn} id='BLbtnid' type="submit" name="BLbtnname" value="Bon de Laivraison" />

                                    </div>

                                </div>

                                <div className='headingforTVA'>

                                    <div>

                                        Total TTC (TVA 20%) : {this.state.total_ttc_vente} DH

                                    </div>

                                </div>

                            </div>

                            <div className='client_regelement'>

                                <div className='chooseclient'>

                                    <select onClickCapture={this.selectclient} required name='chooseclientname' id='chooseclientid1' >

                                        <option value="">Selection Client</option>

                                        {
                                            this.state.listclient.map((val) => {

                                                return (
                                                    <option value={val.client_id}>{val.client_name}</option>

                                                );

                                            })
                                        }

                                    </select>

                                </div>

                                <div className='newclientbtn'>

                                    <div onClick={this.new_client_vente}>

                                        New Client

                                    </div>

                                </div>

                                <div className='choosedate'>

                                    <input required type="date" defaultValue={today2} name="choosedatename" id='choosedateid1' />

                                </div>

                                <div className='regelbtn'>

                                    <div onClick={this.regelment_vente}>

                                        Regelement

                                    </div>

                                </div>

                            </div>

                            <div className='product_add_info'>

                                <div className='product_add_info_div'>

                                    <div className='barcodetext'>

                                        <input type="number" name="barcodename" id="bar_code_vente_add_id" placeholder='BAR CODE' />

                                    </div>

                                    <div className='referancetext'>

                                        <input type="text" name="referancename" id="referance_vente_add_id" placeholder='Referance' />

                                    </div>

                                    <div className='qtytext'>

                                        <input type="number" required name="qtyname" id="qty_vente_add_id" placeholder='QTY' />

                                    </div>

                                    <div className='remisetext'>

                                        <input type="number" name="remisename" id="remise_vente_add_id" placeholder='Remise' />

                                    </div>

                                    <div className='addbtn'>

                                        <div onClick={this.vente_add}>

                                            Ajouter

                                        </div>

                                    </div>

                                </div>

                            </div>

                            <div className='product_list product_list_vente'>

                                <table>

                                    <thead>

                                        <tr>

                                            <th>Code</th>

                                            <th>Description</th>

                                            <th>UNIT PRICE</th>

                                            <th>QTY</th>

                                            <th>Total HT</th>

                                            <th>Delete</th>

                                        </tr>

                                    </thead>

                                    <tbody id='table_remove_vente'>

                                        {

                                            this.state.vente_add.map((val, index) => {

                                                return (

                                                    <tr id={'vente_remove_element' + index}>

                                                        <td>{val.code_vente_add}</td>

                                                        <td>{val.descri}</td>

                                                        <td>{val.pu}</td>

                                                        <td>{val.qty_vente_add} {val.meassurement}</td>

                                                        <td>{val.total_ht}</td>

                                                        <td><span onClick={()=>this.remove_vente(index)} className='fas fa-trash'></span><span onClick={()=>this.edit_vente(index)} className='fas fa-edit'></span></td>

                                                    </tr>

                                                );

                                            })

                                        }

                                        <tr>

                                            <td colSpan='4'>Total HT</td>

                                            <td colSpan='2'>{this.state.total_ht_vente} DH</td>

                                        </tr>

                                    </tbody>

                                </table>

                            </div>

                        </form>

                    </div>

                    <div id='list_des_ventes'>

                        <div className='srch_lst_ventes'>

                            <div className='srch_date_lst_ventes'>

                                <form onSubmit={this.submit_search_vente_date} method='POST'>

                                    <div className='head_srch_date_lst_ventes'>

                                        <div className='h3_srch_date_lst_ventes'>

                                            <h3>Search by Date</h3>

                                        </div>

                                        <div className='sbmt_srch_date_lst_ventes'>

                                            <button type="submit"><span className='fas fa-search'></span></button>

                                        </div>

                                    </div>

                                    <div className='inpts_srch_date_lst_ventes'>

                                        <div className='from_inpt_srch_date_lst_ventes'>

                                            <input required type="date" name="from_date_srch_lst_ventes_name" id='from_date_srch_lst_ventes_id1' />

                                        </div>

                                    </div>

                                </form>

                            </div>

                            <div className='srch_name_lst_ventes'>

                                <form onSubmit={this.submit_search_vente_client} method='POST'>

                                    <div className='head_srch_name_lst_ventes'>

                                        <div className='h3_srch_name_lst_ventes'>

                                            <h3>Search by Name</h3>

                                        </div>

                                        <div className='sbmt_srch_name_lst_ventes'>

                                            <button type="submit"><span className='fas fa-search'></span></button>

                                        </div>

                                    </div>

                                    <div className='inpts_srch_name_lst_ventes'>

                                        <div className='txtfield_srch_name_lst_ventes'>

                                            <input required type="search" name="name_srch_lst_ventes_name"  id='name_srch_lst_ventes_id' placeholder='Name' />

                                        </div>

                                    </div>

                                </form>

                            </div>

                        </div>

                        <div className='table_lst_ventes'>

                            <table>

                                <thead>

                                    <tr>

                                        <th>Date</th>

                                        <th>Nom Client</th>

                                        <th>Total HT</th>

                                        <th>etat</th>

                                    </tr>

                                </thead>

                                <tbody>

                                    {
                                        this.state.listfactur.map((val, index) => {

                                            return (
    
                                                <tr>
    
                                                    <td>{val.Date_operation_list_factur}</td>
    
                                                    <td>{val.client_name}</td>
    
                                                    <td>{val.montant_list_factur}</td>
    
                                                    <td><a href={'/factur/'+ val.id} target='_blank' rel='noreferrer' className='fas fa-eye'></a></td>
    
                                                </tr>
    
                                            );
    
                                        })
                                    }
                                    {
                                        this.state.listsansfactur.map((val, index) => {

                                            return (
    
                                                <tr>
    
                                                    <td>{val.Date_operation_list_sans_factur}</td>
    
                                                    <td>{val.client_name}</td>
    
                                                    <td>{val.montant_list_sans_factur}</td>
    
                                                    <td></td>
    
                                                </tr>
    
                                            );
    
                                        })
                                    }

                                </tbody>

                            </table>

                        </div>

                    </div>

                    <div id='avoire'>

                        <form action='' method='POST'>

                            <div className='btns_heading'>

                                <div className='btns btns_avoire'>

                                    <div className='devisbtn'>

                                        <input onClick={this.avoirebtn} id='devisbtnid' type="submit" name="devisbtnname" value="Avoire" />

                                    </div>

                                </div>

                                <div className='headingforTVA'>

                                    <div>

                                        Total TTC (TVA 20%) : {this.state.total_ttc_avoire ? -this.state.total_ttc_avoire : 0 } DH

                                    </div>

                                </div>

                            </div>

                            <div className='client_regelement'>

                                <div className='chooseclient'>

                                    <select onClickCapture={this.selectclient} onChange={this.selectclient_avoire} name='chooseclientname' id='chooseclientid2' >

                                        <option value="">Selection Client</option>

                                        {
                                            this.state.listclient.map((val) => {

                                                return (

                                                    <option value={val.client_id}>{val.client_name}</option>

                                                );

                                            })
                                        }

                                    </select>

                                </div>

                                <div className='newclientbtn newclientbtn1'>

                                    <select onChange={this.selectfactur_avoire} required name='choosefacturname' id='choosefacturid' >

                                        <option value="">Selection Factur.</option>

                                        {
                                            this.state.listfactur.map((val) => {

                                                return (

                                                    <option value={val.id}>F.Number:{val.id} {val.client_name}</option>

                                                );

                                            })
                                        }

                                    </select>

                                </div>

                                <div className='choosedate'>

                                    <input required type="date" defaultValue={today2} name="choosedatename" id='choosedateid5' />

                                </div>

                                <div className='regelbtn'>

                                    <div onClick={this.regelment_avoire}>

                                        Regelement

                                    </div>

                                </div>

                            </div>

                            <div className='product_list'>

                                <table>

                                    <thead>

                                        <tr>

                                            <th>Code</th>

                                            <th>Description</th>

                                            <th>UNIT PRICE</th>

                                            <th>QTY</th>

                                            <th>Total HT</th>

                                            <th>Delete</th>

                                        </tr>

                                    </thead>

                                    <tbody>

                                        {
                                            this.state.avoire_list.map((val, index) => {

                                                return (

                                                    <tr id={'vente_remove_element' + index}>

                                                        <td>{val.code_vente_add}</td>

                                                        <td>{val.descri}</td>

                                                        <td>{val.pu}</td>

                                                        <td>{val.qty_vente_add} {val.meassurement}</td>

                                                        <td>-{val.total_ht}</td>

                                                        <td><span onClick={()=>this.remove_avoire(index)} className='fas fa-trash'></span><span onClick={()=>this.edit_avoire(index)} className='fas fa-edit'></span></td>

                                                    </tr>

                                                );

                                            })
                                        }

                                        <tr>

                                            <td colSpan='4'>Total HT</td>

                                            <td colSpan='2'>{this.state.total_ht_avoire ? -this.state.total_ht_avoire : 0 } DH</td>

                                        </tr>

                                    </tbody>

                                </table>

                            </div>

                        </form>

                    </div>

                    <div id='list_des_avoire'>

                        <div className='srch_lst_ventes srch_lst_avoire'>

                            <div className='srch_date_lst_ventes srch_date_lst_avoire'>

                                <form onSubmit={this.submit_search_avoire_date} method='POST'>

                                    <div className='head_srch_date_lst_ventes'>

                                        <div className='h3_srch_date_lst_ventes'>

                                            <h3>Search by Date</h3>

                                        </div>

                                        <div className='sbmt_srch_date_lst_ventes'>

                                            <button type="submit"><span className='fas fa-search'></span></button>

                                        </div>

                                    </div>

                                    <div className='inpts_srch_date_lst_ventes'>

                                        <div className='from_inpt_srch_date_lst_ventes'>

                                            <input required type="date" name="from_date_srch_lst_ventes_name" id='from_date_srch_lst_ventes_id2' />

                                        </div>

                                    </div>

                                </form>

                            </div>

                        </div>

                        <div className='table_lst_avoire'>

                            <table>

                                <thead>

                                    <tr>

                                        <th>Date</th>

                                        <th>Nom Client</th>

                                        <th>Total HT</th>

                                        <th>Supprimer</th>

                                    </tr>

                                </thead>

                                <tbody>

                                    {
                                        this.state.listavoire.map((val, index) => {

                                            return (
    
                                                <tr>
    
                                                    <td>{val.Date_operation_list_avoire}</td>
    
                                                    <td>{val.client_name}</td>
    
                                                    <td>{val.montant_list_avoire}</td>
    
                                                    <td><span onClick={() => this.del_list_avoire(val.id)} className='fas fa-trash'></span><a href={'/avoire/'+ val.id} target='_blank' rel='noreferrer' className='fas fa-eye'></a></td>
    
                                                </tr>
    
                                            );
    
                                        })
                                    }

                                </tbody>

                            </table>

                        </div>

                    </div>

                    <div id='charge'>

                        <div className='srch_lst_ventes'>

                            <div className='srch_date_lst_ventes srch_date_lst_avoire'>

                                <form onSubmit={this.submit_search_charge_date} method='POST'>

                                    <div className='head_srch_date_lst_ventes'>

                                        <div className='h3_srch_date_lst_ventes'>

                                            <h3>Search by Date</h3>

                                        </div>

                                        <div className='sbmt_srch_date_lst_ventes'>

                                            <button type="submit"><span className='fas fa-search'></span></button>

                                        </div>

                                    </div>

                                    <div className='inpts_srch_date_lst_ventes'>

                                        <div className='from_inpt_srch_date_lst_ventes'>

                                            <input required type="date" name="from_date_srch_lst_ventes_name" id='from_date_srch_lst_ventes_id3' />

                                        </div>

                                    </div>

                                </form>

                            </div>

                            <div className='addavoire_listdes_avoire'>

                                <form onSubmit={this.submit_add_charge} method='POST'>

                                    <div className='listdes_avoire_description'>

                                        <input required type="text" name="listdes_avoire_description_name" id='listdes_avoire_description_id' placeholder='Designation'  />

                                    </div>

                                    <div className='listdes_avoire_prix'>

                                        <input required type="number" name="listdes_avoire_prix_name" id='listdes_avoire_prix_id' placeholder='Prix'  />

                                    </div>

                                    <div className='listdes_avoire_add'>

                                        <input type="submit" name="listdes_avoire_add_name" id='listdes_avoire_add_id' value="Ajouter" />

                                    </div>

                                </form>

                            </div>

                        </div>

                        <div className='table_lst_avoire'>

                            <table>

                                <thead>

                                    <tr>

                                        <th>Date</th>

                                        <th>Designation</th>

                                        <th>Price</th>

                                        <th>Supprimer</th>

                                    </tr>

                                </thead>

                                <tbody>

                                    {
                                        this.state.listcharge.map((val, index) => {

                                            return (
    
                                                <tr>
    
                                                    <td>{val.Date_operation_list_charge}</td>
    
                                                    <td>{val.description_list_charge}</td>
    
                                                    <td>{val.price_list_charge}</td>
    
                                                    <td><span onClick={() => this.del_list_charge(val.id)} className='fas fa-trash'></span></td>
    
                                                </tr>
    
                                            );
    
                                        })
                                    }

                                </tbody>

                            </table>

                        </div>

                    </div>

                    <div id='add_product'>

                        <form onSubmit={this.submit_add_product} method='POST'>

                            <div className='fourn_info_add_product'>

                                <div className='fourn_select_add_product'>

                                    <select onClickCapture={this.selectfourn} required name='fourn_select_add_product_name' id='fourn_select_add_product_id1' >

                                        <option value="">Fournisseur</option>

                                        {
                                            this.state.selectfourn.map((val) => {

                                                return (

                                                    <option value={val.id}>{val.name}</option>

                                                );

                                            })
                                        }

                                    </select>

                                </div>

                                <div className='category_select_add_product'>

                                    <select onClickCapture={this.selectcategory} required name='category_select_add_product_name' id='category_select_add_product_id1' >

                                        <option value="">Categorie</option>

                                        {

                                            this.state.category.map((val) => {

                                                return (

                                                    <option value={val.id}>{val.name}</option>

                                                );

                                            })

                                        }

                                    </select>

                                </div>

                                <div className='new_category_add_product'>

                                    <div onClick={this.pop_up_category_product_add}>

                                        New Categorie

                                    </div>

                                </div>

                            </div>

                            <div className='product_info_add_product'>

                                <div className='bar_code_add_product'>

                                    <input required type="text" name="bar_code_add_product_name" id='bar_code_add_product_id1'  placeholder='CODE BARE' />

                                </div>

                                <div className='referance_add_product'>

                                    <input required type="text" name="referance_add_product_name" id='referance_add_product_id1'  placeholder='Referance' />

                                </div>

                                <div className='qty_add_product'>

                                    <input required type="number" name="qty_add_product_name" id='qty_add_product_id1'  placeholder='Quantite' />

                                </div>

                                <div className='measurement_add_product'>

                                    <div className='kgcheck kg_measurement_add_product'>

                                        <input type="checkbox" name="kg_measurement_add_product_name" id='kg_measurement_add_product_id1' value="Kg" />

                                        <label htmlFor="Kg">Kg</label>

                                    </div>

                                    <div className='metercheck meter_measurement_add_product'>

                                        <input type="checkbox" name="meter_measurement_add_product_name" id='meter_measurement_add_product_id1' value="m" />

                                        <label htmlFor="meter">m</label>

                                    </div>

                                </div>

                            </div>

                            <div className='description_add_product'>

                                <div className='description_field_add_product'>

                                    <textarea name="description_field_add_product_name" id='description_field_add_product_id1' placeholder='Desiniation' ></textarea>

                                </div>

                                <div className='min_qty_alert_add_product'>
                                    <input type="number" name="" id='min_qty_alert_id1'  placeholder='Min QTY Alert' />
                                </div>

                                <div className="logo_product">
                                    <input type="file"  accept="image/*" name="image" id="logo" />
                                </div>

                            </div>

                            <div className='prices_add_product'>

                                <div className='pu_devis_add_product'>

                                    <input required type="number" name="pu_devis_add_product_name" id='pu_devis_add_product_id1' placeholder='P.U Devis'  />

                                </div>

                                <div className='prix_d_achat_add_product'>

                                    <input required type="number" name="prix_d_achat_add_product_name" id='prix_d_achat_add_product_id1' placeholder='Prix d ACHAT'  />

                                </div>

                                <div className='prix_de_vente_add_product'>

                                    <input required type="number" name="prix_de_vente_add_product_name" id='prix_de_vente_add_product_id1' placeholder='Prix de Vente'  />

                                </div>

                            </div>

                            <div className='submit_add_product'>

                                <div className='submit_button_add_product'>

                                    <input type="submit" name="submit_button_add_product_name" id='submit_button_add_product_id' value="Enregistrer" />

                                </div>

                            </div>

                        </form>

                    </div>

                    <div id='list_product'>

                        <div className='search_list_product'>

                            <div className='categorie_search_list_product'>

                                <form onSubmit={this.submit_search_product_category} method='POST'>

                                    <input required type="text" name="categorie_input_search_list_product_name" id='categorie_input_search_list_product_id' placeholder='Categorie'  />

                                    <button type="submit"><span className='fas fa-search'></span></button>

                                </form>

                            </div>

                            <div className='recherche_search_list_product'>

                                <form onSubmit={this.submit_search_product_barcode} method='POST'>

                                    <input required type="text" name="recherche_input_search_list_product_name" id='recherche_input_search_list_product_id' placeholder='Barcode'  />

                                    <button type="submit"><span className='fas fa-search'></span></button>

                                </form>

                            </div>

                        </div>

                        <div className='table_list_product'>

                            <table>

                                <thead>

                                    <tr>

                                        <th>REF</th>

                                        <th>Bar Code</th>

                                        <th>QTY</th>

                                        <th>Categorie</th>

                                        <th>Designation</th>

                                        <th>P.Devis</th>

                                        <th>P.ACHAT</th>

                                        <th>P.Vente</th>

                                        <th>Frn</th>

                                        <th>Action</th>

                                    </tr>

                                </thead>

                                <tbody>

                                    {
                                        this.state.listproduct.map((val, index) => {

                                            return (
    
                                                <tr>
    
                                                    <td><p onClick={() => this.pop_up_product_list_ref(index)} className='tableproduct'>{val.product_ref}</p></td>
    
                                                    <td>{val.product_barcode}</td>
    
                                                    <td>{val.product_qty + val.product_meassurement}</td>
                                                    
                                                    <td>{val.product_cate_name}</td>

                                                    <td>{val.product_description}</td>

                                                    <td>{val.product_p_devis}</td>

                                                    <td>{val.product_p_avhat}</td>

                                                    <td>{val.product_p_vente}</td>

                                                    <td>{val.product_fourn_name}</td>

                                                    <td><span onClick={() => this.del_list_product(val.product_id)} className='fas fa-trash'></span><span onClick={() => this.pop_up_product_list_edit(index,val.product_id)} className='fas fa-edit'></span></td>
    
                                                </tr>
    
                                            );
    
                                        })
                                    }

                                </tbody>

                            </table>

                        </div>

                    </div>

                    <div id='add_client'>

                        <form onSubmit={this.submit_add_client} method='POST'>

                            <div className='generale_add_client'>

                                <div className='generale_add_client_select'>

                                    <select onClickCapture={this.selectgenerale} required name='generale_add_client_select_name' id='generale_add_client_select_id1' >

                                        <option value="">Generale</option>

                                        {

                                            this.state.generale.map((val) => {

                                                return (

                                                    <option value={val.id}>{val.name}</option>

                                                );

                                            })

                                        }
                                    </select>

                                </div>

                                <div className='generale_add_client_add_generale'>

                                    <div onClick={this.pop_up_add_client}>

                                        Nouveau

                                    </div>

                                </div>

                            </div>

                            <div className='normal_info_add_client'>

                                <div className='normal_info_add_client_name_add'>

                                    <input required type="text" name="normal_info_add_client_name_add_name"  id='normal_info_add_client_name_add_id1' placeholder='Nom Client' />

                                </div>

                                <div className='normal_info_add_client_tele_number'>

                                    <input type="text" name="normal_info_add_client_tele_number_name"  id='normal_info_add_client_tele_number_id1' placeholder='Numero TLF' />

                                </div>

                            </div>

                            <div className='cin_add_client'>

                                <div className='cin_add_client_n_ice'>

                                    <input type="text" name="cin_add_client_n_ice_name"  id='cin_add_client_n_ice_id1' placeholder='N* ICE' />

                                </div>

                                <div className='cin_add_client_cin'>

                                    <input type="text" name="cin_add_client_cin_name"  id='cin_add_client_cin_id1' placeholder='CIN' />

                                </div>

                            </div>

                            <div className='address_add_client'>

                                <div className='address_add_client_adresse'>

                                    <input type="text" name="address_add_client_adresse_name"  id='address_add_client_adresse_id1' placeholder='Adrresse' />

                                </div>

                            </div>

                            <div className='submit_add_client'>

                                <div className='submit_add_client_submit submit_add_client_submit3'>

                                    <input type="submit" name="submit_add_client_submit_name" value="Enregistrer" id='submit_add_client_submit_id' />

                                </div>

                            </div>

                        </form>

                    </div>

                    <div id='list_client'>

                        <div className='search_list_client'>

                            <div className='ice_search_list_client'>

                                <form onSubmit={this.submit_search_client_ice} method='POST'>

                                    <input required type="text" name="ice_input_search_list_client_name" id='ice_input_search_list_client_id' placeholder='ICE'  />

                                    <button type="submit"><span className='fas fa-search'></span></button>

                                </form>

                            </div>

                            <div className='generale_search_list_client'>

                                <form onSubmit={this.submit_search_client_name} method='POST'>

                                    <input required type="text" name="generale_input_search_list_client_name" id='name_input_search_list_client_id' placeholder='Nom'  />

                                    <button type="submit"><span className='fas fa-search'></span></button>

                                </form>

                            </div>

                        </div>

                        <div className='table_list_client'>

                            <table>

                                <thead>

                                    <tr>

                                        <th>Generale</th>

                                        <th>Nom Client</th>

                                        <th>ICE</th>

                                        <th>Tele</th>

                                        <th>Adresse</th>

                                        <th>Action</th>

                                    </tr>

                                </thead>

                                <tbody>
                                    
                                    {
                                        this.state.listclient.map((val, index) => {

                                            return (
    
                                                <tr>
    
                                                    <td>{val.generale_name}</td>
    
                                                    <td>{val.client_name}</td>
    
                                                    <td>{val.client_n_ice}</td>
    
                                                    <td>{val.client_number}</td>
                                                    
                                                    <td>{val.client_addresse}</td>
    
                                                    <td><span onClick={() => this.del_list_client(val.client_id)} className='fas fa-trash'></span><span onClick={() => this.pop_up_client_list(index)} className='fas fa-edit'></span></td>
    
                                                </tr>
    
                                            );
    
                                        })
                                    }

                                </tbody>

                            </table>

                        </div>

                    </div>

                    <div id='list_credit'>

                        <div className='search_list_credit'>

                            <div className='nom_search_list_credit'>

                                <form onSubmit={this.submit_search_credit_client} method='POST'>

                                    <input required type="text" name="nom_input_search_list_credit_name" id='nom_input_search_list_credit_id' placeholder='Nom'  />

                                    <button type="submit"><span className='fas fa-search'></span></button>

                                </form>

                            </div>

                        </div>

                        <div className='table_list_credit'>

                            <table>

                                <thead>

                                    <tr>

                                        <th>Generale</th>

                                        <th>Nom Client</th>

                                        <th>Montant</th>

                                        <th>Afficher</th>

                                        <th>Mise A Jour</th>

                                    </tr>

                                </thead>

                                <tbody>

                                    {
                                        this.state.listcredit.map((val, index) => {

                                            return (
    
                                                <tr>
    
                                                    <td>{val.generale_name}</td>
    
                                                    <td>{val.client_name}</td>
    
                                                    <td>{val.montant}</td>
    
                                                    <td><span onClick={() => this.pop_up_credit_list_afficher(index)} className='fas fa-eye'></span></td>
    
                                                    <td><span onClick={() => this.pop_up_credit_list_mise_jour(index)} className='fas fa-edit'></span></td>
    
                                                </tr>
    
                                            );
    
                                        })
                                    }

                                </tbody>

                            </table>

                        </div>

                    </div>

                    <div id='add_fourn'>

                        <form onSubmit={this.submit_add_fourn} action='' method='POST'>

                            <div className='normal_info_add_fourn'>

                                <div className='normal_info_add_fourn_rai_soc'>

                                    <input required type="text" name="normal_info_add_fourn_rai_soc_name"  id='normal_info_add_fourn_rai_soc_id1' placeholder='Raison Social' />

                                </div>

                                <div className='normal_info_add_fourn_name_respon'>

                                    <input required type="text" name="normal_info_add_fourn_name_respon_name"  id='normal_info_add_fourn_name_respon_id1' placeholder='Nom Responsable' />

                                </div>

                            </div>

                            <div className='contact_add_fourn'>

                                <div className='tele1_add_fourn'>

                                    <input type="text" name="tele1_add_fourn_name" id='tele1_add_fourn_id1' placeholder='telephone 1'  />

                                </div>

                                <div className='tele2_add_fourn'>

                                    <input type="text" name="tele2_add_fourn_name" id='tele2_add_fourn_id1' placeholder='telephone 2'  />

                                </div>

                                <div className='fax_add_fourn'>

                                    <input type="text" name="fax_add_fourn_name" id='fax_add_fourn_id1' placeholder='Fax'  />

                                </div>

                            </div>

                            <div className='adrresse_add_fourn'>

                                <div className='adrresse_field_add_fourn'>

                                    <textarea name="adrresse_field_add_fourn_name" id='adrresse_field_add_fourn_id1' placeholder='Adrresse' ></textarea>

                                </div>

                            </div>

                            <div className='activite_add_fourn'>

                                <div className='activite_field_add_fourn'>

                                    <input type="text" name="activite_field_add_fourn_name"  id='activite_field_add_fourn_id1' placeholder='Activite' />

                                </div>

                            </div>

                            <div className='submit_add_fourn'>

                                <div className='submit_add_fourn_submit'>

                                    <input type="submit" name="submit_add_fourn_submit_name" value="Enregistrer" id='submit_add_fourn_submit_id' />

                                </div>

                            </div>

                        </form>

                    </div>

                    <div id='list_fourn'>

                        <div className='search_list_fourn'>

                            <div className='activite_search_list_fourn'>

                                <form onSubmit={this.submit_search_fourn_act} method='POST'>

                                    <input required type="text" name="activite_input_search_list_fourn_name" id='activite_input_search_list_fourn_id' placeholder='Activite'  />

                                    <button type="submit"><span className='fas fa-search'></span></button>

                                </form>

                            </div>

                            <div className='nom_search_list_fourn'>

                                <form onSubmit={this.submit_search_fourn_name} method='POST'>

                                    <input required type="text" name="nom_input_search_list_fourn_name" id='nom_input_search_list_fourn_id' placeholder='Nom Responsable'  />

                                    <button type="submit"><span className='fas fa-search'></span></button>

                                </form>

                            </div>

                        </div>

                        <div className='table_list_fourn'>

                            <table>

                                <thead>

                                    <tr>

                                        <th>N.societe</th>

                                        <th>Nom Responsable</th>

                                        <th>Tele 1</th>

                                        <th>Tele 2</th>

                                        <th>Fax</th>

                                        <th>Activites</th>

                                        <th>Action</th>

                                    </tr>

                                </thead>

                                <tbody>

                                {

                                    this.state.listfourn.map((val, index) => {

                                        return (

                                            <tr id={'listfourn' + val.fourn_id}>

                                                <td>{val.fourn_n_societe}</td>

                                                <td>{val.fourn_nom_respon}</td>

                                                <td>{val.fourn_tele_1}</td>

                                                <td>{val.fourn_tele_2}</td>
                                                
                                                <td>{val.fourn_fax}</td>

                                                <td>{val.fourn_activite}</td>

                                                <td><span onClick={() => this.del_list_fourn(val.fourn_id)} className='fas fa-trash'></span><span onClick={() => this.pop_up_fourn_list(index)} className='fas fa-edit'></span></td>

                                            </tr>

                                        );

                                    })

                                }

                                </tbody>

                            </table>

                        </div>

                    </div>

                    <div id='list_factures'>

                        <div className='heading_list_factures'>

                            <div className='h1_list_factures'>

                                <h1>Listes Des Factures</h1>

                            </div>

                            <div className='srch_list_factures'>

                                <div className='client_srch_list_factures'>

                                    <form onSubmit={this.submit_search_factur_client} method='POST'>

                                        <input required type="text" name="client_srch_list_factures_name" id='client_srch_list_factures_id' placeholder='Client'  />

                                        <button type="submit"><span className='fas fa-search'></span></button>

                                    </form>

                                </div>

                                <div className='Date_srch_list_factures'>

                                    <form onSubmit={this.submit_search_factur_date} method='POST'>

                                        <input required type="Date" name="Date_srch_list_factures_name" id='Date_srch_list_factures_id'  />

                                        <button type="submit"><span className='fas fa-search'></span></button>

                                    </form>

                                </div>

                            </div>

                        </div>

                        <div className='table_list_factures'>

                            <table>

                                <thead>

                                    <tr>

                                        <th>Date de Facture</th>

                                        <th>Clients</th>

                                        <th>Montant</th>

                                        <th>Action</th>

                                    </tr>

                                </thead>

                                <tbody>

                                    {
                                        this.state.listfactur.map((val, index) => {

                                            return (
    
                                                <tr>
    
                                                    <td>{val.Date_operation_list_factur}</td>
    
                                                    <td>{val.client_name}</td>
    
                                                    <td>{val.montant_list_factur}</td>
    
                                                    <td><span onClick={() => this.del_list_factur(val.id)} className='fas fa-trash'></span><a href={'/factur/'+ val.id} target='_blank' rel='noreferrer' className='fas fa-eye'></a></td>
    
                                                </tr>
    
                                            );
    
                                        })
                                    }

                                </tbody>

                            </table>

                        </div>

                    </div>

                    <div id='list_devis'>

                        <div className='heading_list_factures'>

                            <div className='h1_list_factures'>

                                <h1>Listes Des Devis</h1>

                            </div>

                            <div className='srch_list_factures'>

                                <div className='client_srch_list_factures'>

                                    <form onSubmit={this.submit_search_devis_client} method='POST'>

                                        <input required type="text" name="client_srch_list_factures_name" id='client_srch_list_devis_id' placeholder='Client'  />

                                        <button type="submit"><span className='fas fa-search'></span></button>

                                    </form>

                                </div>

                                <div className='Date_srch_list_factures'>

                                    <form onSubmit={this.submit_search_devis_date} method='POST'>

                                        <input required type="Date" name="Date_srch_list_factures_name" id='Date_srch_list_devis_id'  />

                                        <button type="submit"><span className='fas fa-search'></span></button>

                                    </form>

                                </div>

                            </div>

                        </div>

                        <div className='table_list_factures'>

                            <table>

                                <thead>

                                    <tr>

                                        <th>Date de Devis</th>

                                        <th>Clients</th>

                                        <th>Montant</th>

                                        <th>Action</th>

                                    </tr>

                                </thead>

                                <tbody>

                                    {
                                        this.state.listdevis.map((val, index) => {

                                            return (
    
                                                <tr>
    
                                                    <td>{val.Date_operation_list_devis}</td>
    
                                                    <td>{val.client_name}</td>
    
                                                    <td>{val.montant_list_devis}</td>
    
                                                    <td><span onClick={() => this.del_list_devis(val.id)} className='fas fa-trash'></span><a href={'/devis/'+ val.id} target='_blank' rel="noreferrer" className='fas fa-eye'></a><span onClick={() => this.devis_be_factur(val.id)} className='fas fa-check'></span></td>
    
                                                </tr>
    
                                            );
    
                                        })
                                    }

                                </tbody>

                            </table>

                        </div>

                    </div>

                    <div id='list_sans_factures'>

                        <div className='heading_list_factures'>

                            <div className='h1_list_factures'>

                                <h1>Listes Sans Facture</h1>

                            </div>

                            <div className='srch_list_factures'>

                                <div className='client_srch_list_factures'>

                                    <form onSubmit={this.submit_search_sans_client} method='POST'>

                                        <input required type="text" name="client_srch_list_factures_name" id='client_srch_list_sans_factures_id' placeholder='Client'  />

                                        <button type="submit"><span className='fas fa-search'></span></button>

                                    </form>

                                </div>

                                <div className='Date_srch_list_factures'>

                                    <form onSubmit={this.submit_search_sans_date} method='POST'>

                                        <input required type="Date" name="Date_srch_list_factures_name" id='Date_srch_list_sans_factures_id'  />

                                        <button type="submit"><span className='fas fa-search'></span></button>

                                    </form>

                                </div>

                            </div>

                        </div>

                        <div className='table_list_factures'>

                            <table>

                                <thead>

                                    <tr>

                                        <th>Date</th>

                                        <th>Clients</th>

                                        <th>Montant</th>

                                        <th>Action</th>

                                    </tr>

                                </thead>

                                <tbody>

                                    {
                                        this.state.listsansfactur.map((val, index) => {

                                            return (
    
                                                <tr>
    
                                                    <td>{val.Date_operation_list_sans_factur}</td>
    
                                                    <td>{val.client_name}</td>
    
                                                    <td>{val.montant_list_sans_factur}</td>
    
                                                    <td><span onClick={() => this.del_list_sans_factur(val.id)} className='fas fa-trash'></span><span onClick={() => this.sans_be_factur(val.id)} className='fas fa-check'></span></td>
    
                                                </tr>
    
                                            );
    
                                        })
                                    }

                                </tbody>

                            </table>

                        </div>

                    </div>

                    <div id='list_bl'>

                        <div className='heading_list_factures'>

                            <div className='h1_list_factures'>

                                <h1>Listes B.L</h1>
                                <span onClick={() => this.bl_be_factur()} className='fas fa-check'></span>

                            </div>

                            <div className='srch_list_factures'>

                                <div className='client_srch_list_factures'>

                                    <form onSubmit={this.submit_search_bl_client} method='POST'>

                                        <input required type="text" name="client_srch_list_factures_name" id='client_srch_list_bl_id' placeholder='Client'  />

                                        <button type="submit"><span className='fas fa-search'></span></button>

                                    </form>

                                </div>

                                <div className='Date_srch_list_factures'>

                                    <form onSubmit={this.submit_search_bl_date} method='POST'>

                                        <input required type="Date" name="Date_srch_list_factures_name" id='Date_srch_list_bl_id'  />

                                        <button type="submit"><span className='fas fa-search'></span></button>

                                    </form>

                                </div>

                            </div>

                        </div>

                        <div className='table_list_factures'>

                            <table>

                                <thead>

                                    <tr>

                                        <th>Date de B.L</th>

                                        <th>Clients</th>

                                        <th>Montant</th>

                                        <th>Action</th>

                                    </tr>

                                </thead>

                                <tbody>

                                    {
                                        this.state.listbl.map((val, index) => {

                                            return (
    
                                                <tr>
    
                                                    <td>{val.Date_operation_list_bl}</td>
    
                                                    <td>{val.client_name}</td>
    
                                                    <td>{val.montant_list_bl}</td>
    
                                                    <td><input type="checkbox" id={val.id} value={val.id} className={'checkboxclass' + val.client_id_list_bl} /><span onClick={() => this.del_list_bl(val.id)} className='fas fa-trash'></span><a href={'/bl/'+ val.id} target='_blank' rel='noreferrer' className='fas fa-eye'></a></td>
    
                                                </tr>
    
                                            );
    
                                        })
                                    }

                                </tbody>

                            </table>

                        </div>

                    </div>

                    <div id='list_banque'>

                        <div className='heading_list_banque'>

                            <div className='h1_list_banque'>

                                <h1>Releve Bancaire</h1>

                            </div>

                            <div className='srch_list_banque'>

                                <div className='client_srch_list_banque'>

                                    <form onSubmit={this.submit_search_bank} method='POST'>

                                        <input required type="text" name="client_srch_list_banque_name" id='client_srch_list_banque_id' placeholder='Client'  />

                                        <button type="submit"><span className='fas fa-search'></span></button>

                                    </form>

                                </div>

                            </div>

                        </div>

                        <div className='table_list_banque'>

                            <table>

                                <thead>

                                    <tr>

                                        <th>Date d'operation</th>

                                        <th>Clients</th>

                                        <th>numero cheque</th>

                                        <th>Montant</th>

                                    </tr>

                                </thead>

                                <tbody>
                                    
                                {

                                    this.state.listbank.map((val, index) => {

                                        return (

                                            <tr>

                                                <td>{val.Date_operation_bank}</td>

                                                <td>{val.client_name}</td>

                                                <td>{val.check_number}</td>

                                                <td>{val.montant_bank}</td>

                                            </tr>

                                        );

                                    })

                                }

                                </tbody>

                            </table>

                        </div>

                    </div>

                    <div id='list_caisse'>

                        <div className='heading_list_caisse'>

                            <div className='h1_list_caisse'>

                                <h1>Releve Caisse</h1>

                            </div>

                            <div className='srch_list_caisse'>

                                <div className='client_srch_list_caisse'>

                                    <form onSubmit={this.submit_search_caisson} method='POST'>

                                        <input required type="text" name="client_srch_list_caisse_name" id='client_srch_list_caisse_id' placeholder='Client'  />

                                        <button type="submit"><span className='fas fa-search'></span></button>

                                    </form>

                                </div>

                            </div>

                        </div>

                        <div className='table_list_caisse'>

                            <table>

                                <thead>

                                    <tr>

                                        <th>Date d'operation</th>

                                        <th>Clients</th>

                                        <th>Montant</th>

                                    </tr>

                                </thead>

                                <tbody>
                                {

                                    this.state.listcaisson.map((val, index) => {

                                        return (

                                            <tr>

                                                <td>{val.Date_operation_cash}</td>

                                                <td>{val.client_name ? val.client_name : 'Charge'}</td>

                                                <td>{val.montant_cash}</td>

                                            </tr>

                                        );

                                    })

                                }

                                </tbody>

                            </table>

                        </div>

                    </div>

                    <div id='settings_tab'>

                        <form encType='multipart/form-data' onSubmit={this.submit_settings} action='' method='POST'>

                            <div className='heading_settings_tab'>

                                <h1>Info Societe</h1>

                            </div>

                            <div className='normal_info_settings_tab'>

                                <div className='all_contact_info_settings_tab'>

                                    <div className='contact_comp_settings_tab'>

                                        <div className='first_column_settings_tab'>

                                            <input required type="text" name="nom_settings_tab_name"  id='nom_settings_tab_id' placeholder='Nom Ste' />

                                            <input type="text" name="patente_settings_tab_name"  id='patente_settings_tab_id' placeholder='Patente' />

                                            <input type="text" name="rc_settings_tab_name"  id='rc_settings_tab_id' placeholder='R.C' />

                                        </div>

                                        <div className='second_column_settings_tab'>

                                            <input type="text" name="tel_settings_tab_name"  id='tel_settings_tab_id' placeholder='TEL' />

                                            <input type="text" name="if_settings_tab_name"  id='if_settings_tab_id' placeholder='IF' />

                                            <input type="text" name="cnss_settings_tab_name"  id='cnss_settings_tab_id' placeholder='CNSS' />

                                        </div>

                                    </div>

                                    <div className='ice_settings_tab'>

                                        <input type="text" name="ice_settings_tab_name" id='ice_settings_tab_id' placeholder='ICE'  />

                                    </div>

                                </div>

                                <div className='picture_settings_tab'>

                                    <div className='picture_settings_tab_the_picture'>

                                        <img src={this.state.image} alt='' id="output" />

                                    </div>

                                    <div className='picture_settings_tab_uploading'>

                                        <input type="file"  accept="image/*" name="image" id="file"  onChange={this.onImageChange} />

                                    </div>

                                </div>

                            </div>

                            <div className='adrresse_settings_tab'>

                                <textarea name="adrresse_field_settings_tab_name" id='adrresse_field_settings_tab_id' placeholder='Adrresse' ></textarea>

                            </div>

                            <div className='submit_settings_tab'>

                                <input type="submit" name="submit_settings_tab_submit_name" value="Sauvegarde" id='submit_settings_tab_submit_id' />

                                <div onClick={this.update_dashbord}>Update Dashboard</div>

                            </div>

                        </form>

                    </div>
                </div>
            </div>
            <div id='point_vente_menu'>

                <div className='ventesdiv'>

                    <div onClick={this.ventesclick}>

                        Ventes

                    </div>

                </div>

                <hr />

                <div className='listventesdiv'>

                    <div onClick={this.listventesclick}>

                        List des Ventes

                    </div>

                </div>

                <hr />

                <div className='avoirediv'>

                    <div onClick={this.avoireclick}>

                        Avoire

                    </div>

                </div>

                <hr />

                <div className='listavoirediv'>

                    <div onClick={this.list_des_avoire_click}>

                        List des Avoire

                    </div>

                </div>

                <hr />

                <div className='chargediv'>

                    <div onClick={this.charge_click}>

                        Charge

                    </div>

                </div>

            </div>

            <div id='produits_menu'>

                <div className='addproduitsdiv'>

                    <div onClick={this.addproduct}>

                        Ajouter Produit

                    </div>

                </div>

                <hr />

                <div className='listproduitsdiv'>

                    <div onClick={this.listproduct}>

                        List Produit

                    </div>

                </div>

            </div>

            <div id='client_menu'>

                <div className='addclientdiv'>

                    <div onClick={this.add_client}>

                        Ajouter Client

                    </div>

                </div>

                <hr />

                <div className='listclientdiv'>

                    <div onClick={this.list_client}>

                        List Clients

                    </div>

                </div>

                <hr />

                <div className='listcreditdiv'>

                    <div onClick={this.list_credit}>

                        List Credit

                    </div>

                </div>

            </div>

            <div id='fourn_menu'>

                <div className='addfourndiv'>

                    <div onClick={this.add_fourn}>

                        Ajou Fournisseur

                    </div>

                </div>

                <hr />

                <div className='listfourndiv'>

                    <div onClick={this.list_fourn}>

                        List Fournisseur

                    </div>

                </div>

            </div>

            <div id='factur_menu'>

                <div className='listfacturdiv'>

                    <div onClick={this.list_facture}>

                        List Facturation

                    </div>

                </div>

                <hr />

                <div className='listdevisdiv'>

                    <div onClick={this.list_devis}>

                        List Devis

                    </div>

                </div>

                <hr />

                <div className='listsansfacturdiv'>

                    <div onClick={this.list_sans_facture}>

                        Liste sans Fact

                    </div>

                </div>

                <hr />

                <div className='listBLdiv'>

                    <div onClick={this.list_bl}>

                        Liste B.L

                    </div>

                </div>

            </div>

            <div id='comptab_menu'>

                <div className='listbanquediv'>

                    <div onClick={this.list_banque}>

                        List Banque

                    </div>

                </div>

                <hr />

                <div className='listcaissondiv'>

                    <div onClick={this.list_caisson}>

                        List Caisson

                    </div>

                </div>

            </div>

            <div id='notif_heading'>

                <div className='arrow'></div>

                <div className='heading_notif_heading'>

                    <h4>Notification</h4>

                    <span onClick={this.close_notfi}>x</span>

                </div>

                <div className='info_notif_heading'>
                    
                    {
                        
                        this.state.notifi.map((val, index) => {

                            return (

                                <div className='info1_notif_heading'>

                                    <p>{val}</p>

                                </div>

                            )

                        })

                    }

                </div>

            </div>

            <div id='logout_heading'>

                <div className='arrow arrow1'></div>

                <form onSubmit={this.logout}>

                    <span onClick={this.close_logout}>x</span>

                    <input type="submit" name="logout_heading_name" id='logout_heading_id' value="LogOut" />

                </form>

            </div>

            <div className="popup" id="pop_up_fourn_list">

                <div className='popup_content1'>

                    <form onSubmit={this.submit_edit_fourn} method='POST'>

                        <div className='normal_info_add_fourn'>

                            <div className='normal_info_add_fourn_rai_soc'>

                                <input required type="text" name="normal_info_add_fourn_rai_soc_name"  id='normal_info_edit_fourn_rai_soc_id' placeholder='Raison Social' />

                            </div>

                            <div className='normal_info_add_fourn_name_respon'>

                                <input required type="text" name="normal_info_add_fourn_name_respon_name"  id='normal_info_edit_fourn_name_respon_id' placeholder='Nom Responsable' />

                            </div>

                        </div>

                        <div className='contact_add_fourn'>

                            <div className='tele1_add_fourn'>

                                <input type="text" name="tele1_add_fourn_name" id='tele1_edit_fourn_id' placeholder='telephone 1'  />

                            </div>

                            <div className='tele2_add_fourn'>

                                <input type="text" name="tele2_add_fourn_name" id='tele2_edit_fourn_id' placeholder='telephone 2'  />

                            </div>

                            <div className='fax_add_fourn'>

                                <input type="text" name="fax_add_fourn_name" id='fax_edit_fourn_id' placeholder='Fax'  />

                            </div>

                        </div>

                        <div className='adrresse_add_fourn'>

                            <div className='adrresse_field_add_fourn'>

                                <textarea name="adrresse_field_add_fourn_name" id='adrresse_field_edit_fourn_id' placeholder='Adrresse' ></textarea>

                            </div>

                        </div>

                        <div className='activite_add_fourn'>

                            <div className='activite_field_add_fourn'>

                                <input type="text" name="activite_field_add_fourn_name"  id='activite_field_edit_fourn_id' placeholder='Activite' />

                            </div>

                        </div>

                        <div className='submit_add_fourn'>

                            <div className='submit_add_fourn_submit'>

                                <input type="submit" name="submit_add_fourn_submit_name" value="Modifier" id='submit_edit_fourn_submit_id' />

                            </div>

                        </div>

                    </form>

                </div>

            </div>

            <div className="popup" id="pop_up_add_client">

                <div className='popup_content2'>

                    <form onSubmit={this.addgenerale} method='POST'>

                        <div className='input_for_generale_new'>

                            <input required type="text" name="input_for_generale_new_name"  id='input_for_generale_new_id' placeholder='Generale' />

                        </div>

                        <div className='submit_for_generale_new'>

                            <input type="submit" name="submit_for_generale_new_name" value="Ajouter" id='submit_for_generale_new_id' />

                        </div>

                    </form>

                </div>

            </div>

            <div className="popup" id="pop_up_client_list">

                <div className='popup_content3'>

                    <form onSubmit={this.submit_edit_client} method='POST'>

                        <div className='generale_add_client'>

                            <div className='generale_add_client_select generale_add_client_select_modify'>

                                <select onClickCapture={this.selectgenerale} required name='generale_add_client_select_name' id='generale_add_client_select_id' >

                                    <option value="">Generale</option>

                                    {
                                        this.state.generale.map((val) => {

                                            return (

                                                <option value={val.id}>{val.name}</option>

                                            );

                                        })
                                    }

                                </select>

                            </div>

                        </div>

                        <div className='normal_info_add_client'>

                            <div className='normal_info_add_client_name_add'>

                                <input required type="text" name="normal_info_add_client_name_add_name"  id='normal_info_add_client_name_add_id' placeholder='Nom Client' />

                            </div>

                            <div className='normal_info_add_client_tele_number'>

                                <input type="text" name="normal_info_add_client_tele_number_name"  id='normal_info_add_client_tele_number_id' placeholder='Numero TLF' />

                            </div>

                        </div>

                        <div className='cin_add_client'>

                            <div className='cin_add_client_n_ice'>

                                <input type="text" name="cin_add_client_n_ice_name"  id='cin_add_client_n_ice_id' placeholder='N* ICE' />

                            </div>

                            <div className='cin_add_client_cin'>

                                <input type="text" name="cin_add_client_cin_name"  id='cin_add_client_cin_id' placeholder='CIN' />

                            </div>

                        </div>

                        <div className='address_add_client'>

                            <div className='address_add_client_adresse'>

                                <input type="text" name="address_add_client_adresse_name"  id='address_add_client_adresse_id' placeholder='Adrresse' />

                            </div>

                        </div>

                        <div className='submit_add_client'>

                            <div className='submit_add_client_submit'>

                                <input type="submit" name="submit_add_client_submit_name" value="Modifier" id='submit_add_client_submit_id' />

                            </div>

                        </div>

                    </form>

                </div>

            </div>

            <div className="popup" id="pop_up_credit_list_mise_jour">

                <div className='popup_content4'>

                    <form onSubmit={this.submit_mise_jour} method='POST'>

                        <div className='all_info_for_montant'>

                            <div className='info_for_montant'>

                                {this.state.info_for_montant_generale_name.generale}<br />

                                {this.state.info_for_montant_generale_name.name}

                            </div>

                            <div className='reste_for_montant'>

                                Reste : {this.state.info_for_montant_generale_name.montant ? this.state.info_for_montant_generale_name.montant : 0} DH

                            </div>

                        </div>

                        <div className='submit_for_montant'>

                            <input required type="number" name="input_for_montant_name"  id='input_for_montant_id' placeholder='Montant' />

                            <input type="submit" name="submit_for__montant_name" value="mise a jour" id='submit_for__montant_id' />

                        </div>

                    </form>

                </div>

            </div>

            <div className="popup" id="pop_up_credit_list_afficher">

                <div className='popup_content5'>

                    <form action='' method='POST'>

                        <div className='all_info_for_montant all_info_for_montant1'>

                            <div className='info_for_montant' id='info_for_montant_generale_name'>

                                {this.state.info_for_montant_generale_name.generale}<br />

                                {this.state.info_for_montant_generale_name.name}

                            </div>

                            <div className='reste_for_montant'>

                                Reste : {this.state.info_for_montant_generale_name.montant ? this.state.info_for_montant_generale_name.montant : 0} DH

                            </div>

                        </div>

                        <div className='submit_for_montant submit_for_montant1'>

                            <ul className='fa-ul'>

                                {
                                    this.state.listinfocredit.map((val, index) => {

                                        return (

                                            <li><span className="fa-li"><i className="fas fa-arrow-alt-circle-right"></i></span><p>{val.Date_operation_info_list_credit}</p><p>{val.montant_info_list_credit}</p></li>

                                        );

                                    })
                                }

                            </ul>

                        </div>

                    </form>

                </div>

            </div>

            <div className="popup" id="pop_up_category_product_add">

                <div className='popup_content6'>

                    <form onSubmit={this.addcategory} method='POST'>

                        <div className='input_for_generale_new'>

                            <input required type="text" name="input_for_category_new_name"  id='input_for_category_new_id' placeholder='Nom categorie' />

                        </div>

                        <div className='submit_for_generale_new'>

                            <input type="submit" name="submit_for_category_new_name" value="Ajouter" id='submit_for_category_new_id' />

                        </div>

                    </form>

                </div>

            </div>

            <div className="popup" id="pop_up_product_list_edit">

                <div className='popup_content7'>

                    <form onSubmit={this.submit_add_product_info} method='POST'>
                       
                        <div className='product_info_add_product product_info_add_product1'>

                            <div className='qty_add_product qty_add_product1'>

                                <input required type="number" name="qty_add_product_name" id='qty_add_product_id'  placeholder='Quantite' />

                            </div>
                            
                            <div className='min_qty_alert_add_product min_qty_alert_add_product1'>

                                <input type="number" name="" id='min_qty_alert_id'  placeholder='Min QTY Alert' />

                            </div>

                        </div>

                        <div className='prices_add_product prices_add_product1'>

                            <div className='pu_devis_add_product pu_devis_add_product1'>

                                <input type="number" name="pu_devis_add_product_name" id='pu_devis_add_product_id' placeholder='P.U Devis'  />

                            </div>

                            <div className='prix_d_achat_add_product prix_d_achat_add_product1'>

                                <input type="number" name="prix_d_achat_add_product_name" id='prix_d_achat_add_product_id' placeholder='Prix d ACHAT'  />

                            </div>

                            <div className='prix_de_vente_add_product prix_de_vente_add_product1'>

                                <input type="number" name="prix_de_vente_add_product_name" id='prix_de_vente_add_product_id' placeholder='Prix de Vente'  />

                            </div>

                        </div>

                        <div className='submit_add_product submit_add_product1'>

                            <div className='submit_button_add_product'>

                                <input type="submit" name="submit_button_add_product_name" id='submit_button_add_product_id' value="Ajouter" />

                            </div>

                        </div>

                    </form>

                </div>

            </div>

            <div className="popup" id="pop_up_product_list_ref">

                <div className='popup_content8'>

                    <form action='' method='POST'>

                        <div className='all_info_for_product_list_product'>

                            <div className='info_for_product_list_product'>

                                {this.state.info_for_product.ref}<br />

                                {this.state.info_for_product.barcode}<br />

                                {this.state.info_for_product.fourn}<br />

                                {this.state.info_for_product.cate}

                            </div>

                            <div className='info1_for_product_list_product'>

                                {this.state.info_for_product.description}<br /><br />

                                {this.state.info_for_product.qtyall}

                            </div>

                            <div className='logo_for_product_list_product'>

                                <img src={'http://asyd12855.pythonanywhere.com/productlogo/' + this.state.info_for_product.logo_product} alt='productLogo' />

                            </div>

                        </div>

                        <div className='shipments_for_product_list'>

                            <ul>

                                {
                                    this.state.listinfoproduct.map((val, index) => {

                                        return (

                                            <li><p>{val.Date_operation_info_product}</p><p>{val.qty_info_product}</p><p>{val.prix_devis_info_product}</p><p>{val.prix_achat_info_product}</p><p>{val.prix_vente_info_product}</p></li>

                                        );

                                    })
                                }

                            </ul>

                        </div>

                    </form>

                </div>

            </div>

            <div className="popup" id="new_client_vente">

                <div className='popup_content9'>

                    <form onSubmit={this.submit_add_client_vente} method='POST'>

                        <div className='normal_info_add_client normal_info_add_client2'>

                            <div className='normal_info_add_client_name_add'>

                                <input required type="text" name="normal_info_add_client_name_add_name"  id='normal_info_add_client_name_add_id2' placeholder='Nom Client' />

                            </div>

                            <div className='normal_info_add_client_tele_number'>

                                <input type="text" name="normal_info_add_client_tele_number_name"  id='normal_info_add_client_tele_number_id2' placeholder='Numero TLF' />

                            </div>

                        </div>

                        <div className='cin_add_client cin_add_client2'>

                            <div className='cin_add_client_n_ice'>

                                <input type="text" name="cin_add_client_n_ice_name"  id='cin_add_client_n_ice_id2' placeholder='N* ICE' />

                            </div>

                            <div className='cin_add_client_cin'>

                                <input type="text" name="cin_add_client_cin_name"  id='cin_add_client_cin_id2' placeholder='CIN' />

                            </div>

                        </div>

                        <div className='address_add_client address_add_client2'>

                            <div className='address_add_client_adresse'>

                                <input type="text" name="address_add_client_adresse_name"  id='address_add_client_adresse_id2' placeholder='Adrresse' />

                            </div>

                        </div>

                        <div className='submit_add_client submit_add_client2'>

                            <div className='submit_add_client_submit submit_add_client_submit2'>

                                <input type="submit" name="submit_add_client_submit_name" value="Add" id='submit_add_client_submit_id' />

                            </div>

                        </div>

                    </form>

                </div>

            </div>

            <div className="popup" id="regelment_vente">

                <div className='popup_content10'>

                    <form onSubmit={this.submit_regelment_vente} method='POST'>

                        <div className='radio_btns_regelment'>

                            <label htmlFor="espece"><input required type="radio" id="espece" name="regelementvente" value="espece"/> Espece</label>

                            <label htmlFor="cheque"><input required onClick={this.checkbank} type="radio" id="cheque" name="regelementvente" value="cheque" /> Cheque</label>

                            <label htmlFor="credit"><input required type="radio" id="credit" name="regelementvente" value="credit" /> Credit</label>

                        </div>

                        <div className='price_btns_regelment'>

                            <input type="number" name="price_btns_regelment_name"  id='price_btns_regelment_id1' placeholder='Price' />

                        </div>

                        <div className='price_btns_regelment' id='checkbank_btns_regelement'>

                            <input type="number" name="check_number_btns_regelment_name"  id='check_btns_regelment_id1' placeholder='Numero Cheque' />

                        </div>

                        <div className='checkbox_btns_regelment'>

                            <input type="checkbox" id="checkbox_btns_regelment_id1" name="checkbox_btns_regelment_name" value="payall" />

                            <label htmlFor="payall"> paye all price</label>

                        </div>

                        <div className='submit_btns_regelment'>

                            <input type="submit" name="submit_btns_regelment_name" value="SAVE" id='submit_btns_regelment_id' />

                        </div>

                    </form>

                </div>

            </div>

            <div className="popup" id="edit_vente">

                <div className='popup_content11'>

                    <form action='' method='POST'>

                        <div className='product_add_info product_add_info1'>

                            <div className='product_add_info_div product_add_info_div1'>

                                <div className='barcodetext'>

                                    <input type="number" name="barcodename" id="bar_code_edit_vente_id" placeholder='BAR CODE' />

                                </div>

                                <div className='referancetext'>

                                    <input type="text" name="referancename" id="referance_edit_vente_id" placeholder='Referance' />

                                </div>

                                <div className='qtytext'>

                                    <input type="number" name="qtyname" id="qty_edit_vente_id" placeholder='QTY' />

                                </div>

                                <div className='remisetext'>

                                    <input type="number" name="remisename" id="remise_edit_vente_id" placeholder='Remise' />

                                </div>

                                <div className='addbtn addbtn1'>

                                    <div onClick={this.submit_edit_vente}>

                                        Modifier

                                    </div>

                                </div>

                            </div>

                        </div>

                    </form>

                </div>

            </div>

            <div className="popup" id="edit_avoire">

                <div className='popup_content12'>

                    <form action='' method='POST'>

                        <div className='product_add_info product_add_info1'>

                            <div className='product_add_info_div product_add_info_div1'>

                                <div className='qtytext'>

                                    <input type="number" name="qtyname" id="qtyid" placeholder='QTY' />

                                </div>

                                <div className='addbtn addbtn1 addbtn_avoire'>

                                    <div onClick={this.submit_edit_avoire}>

                                        Modifier

                                    </div>

                                </div>

                            </div>

                        </div>

                    </form>

                </div>

            </div>

            <div className="popup" id="regelment_avoire">

                <div className='popup_content13'>

                    <form onSubmit={this.submit_regelment_avoire} method='POST'>

                        <div className='radio_btns_regelment radio_btns_regelment1'>

                            <label htmlFor="espece"><input type="radio" required id="espece1" name="regelement" value="espece" /> Espece</label>

                            <label htmlFor="cheque"><input onClick={this.checkbank_avoire} type="radio" required id="cheque1" name="regelement" value="cheque" /> Cheque</label>

                        </div>

                        <div className='price_btns_regelment price_btns_regelment1'>

                            <input type="text" name="price_btns_regelment_name"  id='price_btns_regelment_id_avoire' placeholder='Price' />

                        </div>

                        <div className='price_btns_regelment price_btns_regelment1' id='checkbank_btns_regelement1'>

                            <input type="text" name="check_number_btns_regelment_name"  id='check_btns_regelment_id_avoire' placeholder='Numero Cheque' />

                        </div>

                        <div className='checkbox_btns_regelment checkbox_btns_regelment1'>

                            <input type="checkbox" id="checkbox_btns_regelment_id3" name="checkbox_btns_regelment_name" value="payall" />

                            <label htmlFor="payall"> paye all price</label>

                        </div>

                        <div className='submit_btns_regelment submit_btns_regelment1'>

                            <input type="submit" name="submit_btns_regelment_name" value="SAVE" id='submit_btns_regelment_id' />

                        </div>

                    </form>

                </div>

            </div>
        </div>);
    }
}

export default Dashbord;
