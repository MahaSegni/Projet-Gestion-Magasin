'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">miniprojet4 documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-415294df98ee14557fd6a07c938531e3d8e086b35a156c631f708e3ba6ca902ad41837aebdb2f8c0bcfeede95271d5a8836a165a85ffb29cefd354bc5f17a108"' : 'data-target="#xs-components-links-module-AppModule-415294df98ee14557fd6a07c938531e3d8e086b35a156c631f708e3ba6ca902ad41837aebdb2f8c0bcfeede95271d5a8836a165a85ffb29cefd354bc5f17a108"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-415294df98ee14557fd6a07c938531e3d8e086b35a156c631f708e3ba6ca902ad41837aebdb2f8c0bcfeede95271d5a8836a165a85ffb29cefd354bc5f17a108"' :
                                            'id="xs-components-links-module-AppModule-415294df98ee14557fd6a07c938531e3d8e086b35a156c631f708e3ba6ca902ad41837aebdb2f8c0bcfeede95271d5a8836a165a85ffb29cefd354bc5f17a108"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavbarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavbarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SidemenuComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SidemenuComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CodePromoModule.html" data-type="entity-link" >CodePromoModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CodePromoModule-9b54d05a0a186e653f2128479b6097e96ffa953d36a127b5f0f90fdb87cb01c7867635e9d3c4eb3ac8f6fa9ec949ba412671064a759d268209cc65e1eda1e79e"' : 'data-target="#xs-components-links-module-CodePromoModule-9b54d05a0a186e653f2128479b6097e96ffa953d36a127b5f0f90fdb87cb01c7867635e9d3c4eb3ac8f6fa9ec949ba412671064a759d268209cc65e1eda1e79e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CodePromoModule-9b54d05a0a186e653f2128479b6097e96ffa953d36a127b5f0f90fdb87cb01c7867635e9d3c4eb3ac8f6fa9ec949ba412671064a759d268209cc65e1eda1e79e"' :
                                            'id="xs-components-links-module-CodePromoModule-9b54d05a0a186e653f2128479b6097e96ffa953d36a127b5f0f90fdb87cb01c7867635e9d3c4eb3ac8f6fa9ec949ba412671064a759d268209cc65e1eda1e79e"' }>
                                            <li class="link">
                                                <a href="components/CodePromoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CodePromoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FormCodePromoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormCodePromoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FormFrontCodePromoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormFrontCodePromoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListCodePromoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListCodePromoComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CodePromoRoutingModule.html" data-type="entity-link" >CodePromoRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/FacturesModule.html" data-type="entity-link" >FacturesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-FacturesModule-c47abe40ac1dfedad584930b1e9bdeafa44bc543acb35f0795a8174f3164fe385062eb0571f40d5ae4b3d98dedc0a52cc0a7ecc8b1376a9488b92e2b9ad5ce8f"' : 'data-target="#xs-components-links-module-FacturesModule-c47abe40ac1dfedad584930b1e9bdeafa44bc543acb35f0795a8174f3164fe385062eb0571f40d5ae4b3d98dedc0a52cc0a7ecc8b1376a9488b92e2b9ad5ce8f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FacturesModule-c47abe40ac1dfedad584930b1e9bdeafa44bc543acb35f0795a8174f3164fe385062eb0571f40d5ae4b3d98dedc0a52cc0a7ecc8b1376a9488b92e2b9ad5ce8f"' :
                                            'id="xs-components-links-module-FacturesModule-c47abe40ac1dfedad584930b1e9bdeafa44bc543acb35f0795a8174f3164fe385062eb0571f40d5ae4b3d98dedc0a52cc0a7ecc8b1376a9488b92e2b9ad5ce8f"' }>
                                            <li class="link">
                                                <a href="components/CommandeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CommandeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FactureComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FactureComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FacturesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FacturesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FormDetailFactureComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormDetailFactureComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FormFactureComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormFactureComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PanierComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PanierComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PanierVideComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PanierVideComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FacturesRoutingModule.html" data-type="entity-link" >FacturesRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LikeDislikeModule.html" data-type="entity-link" >LikeDislikeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LikeDislikeModule-435a382760e9adbe378fb3368030a688b7d0c211e56af7e3a340b44233ad6c5812826819de7beadda5abe51c8df0b9a855c40cfb53898decefd2a99ac87f330e"' : 'data-target="#xs-components-links-module-LikeDislikeModule-435a382760e9adbe378fb3368030a688b7d0c211e56af7e3a340b44233ad6c5812826819de7beadda5abe51c8df0b9a855c40cfb53898decefd2a99ac87f330e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LikeDislikeModule-435a382760e9adbe378fb3368030a688b7d0c211e56af7e3a340b44233ad6c5812826819de7beadda5abe51c8df0b9a855c40cfb53898decefd2a99ac87f330e"' :
                                            'id="xs-components-links-module-LikeDislikeModule-435a382760e9adbe378fb3368030a688b7d0c211e56af7e3a340b44233ad6c5812826819de7beadda5abe51c8df0b9a855c40cfb53898decefd2a99ac87f330e"' }>
                                            <li class="link">
                                                <a href="components/LikeDislikeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LikeDislikeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListLikeDislikeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListLikeDislikeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LikeDislikeRoutingModule.html" data-type="entity-link" >LikeDislikeRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ProductsModule.html" data-type="entity-link" >ProductsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ProductsModule-0279fb6f73ff4de5e32b63329018657ff7b933f04acc3d77044649f2512a8e418d227aee44e7bafed40ce9fe460ed65ad5eb3f47fbb8f61f0495339e47e6d03b"' : 'data-target="#xs-components-links-module-ProductsModule-0279fb6f73ff4de5e32b63329018657ff7b933f04acc3d77044649f2512a8e418d227aee44e7bafed40ce9fe460ed65ad5eb3f47fbb8f61f0495339e47e6d03b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ProductsModule-0279fb6f73ff4de5e32b63329018657ff7b933f04acc3d77044649f2512a8e418d227aee44e7bafed40ce9fe460ed65ad5eb3f47fbb8f61f0495339e47e6d03b"' :
                                            'id="xs-components-links-module-ProductsModule-0279fb6f73ff4de5e32b63329018657ff7b933f04acc3d77044649f2512a8e418d227aee44e7bafed40ce9fe460ed65ad5eb3f47fbb8f61f0495339e47e6d03b"' }>
                                            <li class="link">
                                                <a href="components/CategorieProduitComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CategorieProduitComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FormCategorieproduitComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormCategorieproduitComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FormProduitComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormProduitComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProduitComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProduitComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProductsRoutingModule.html" data-type="entity-link" >ProductsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ReclamationsModule.html" data-type="entity-link" >ReclamationsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ReclamationsModule-fcc8d6e43545d71241105c5adeb115de0eb991250dbec33ec20fe47b99974ebdbf0d3199b2cedbaf01616ee7a58d0069a4a815764e91629d184db43f48db60e3"' : 'data-target="#xs-components-links-module-ReclamationsModule-fcc8d6e43545d71241105c5adeb115de0eb991250dbec33ec20fe47b99974ebdbf0d3199b2cedbaf01616ee7a58d0069a4a815764e91629d184db43f48db60e3"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ReclamationsModule-fcc8d6e43545d71241105c5adeb115de0eb991250dbec33ec20fe47b99974ebdbf0d3199b2cedbaf01616ee7a58d0069a4a815764e91629d184db43f48db60e3"' :
                                            'id="xs-components-links-module-ReclamationsModule-fcc8d6e43545d71241105c5adeb115de0eb991250dbec33ec20fe47b99974ebdbf0d3199b2cedbaf01616ee7a58d0069a4a815764e91629d184db43f48db60e3"' }>
                                            <li class="link">
                                                <a href="components/FormReclamationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormReclamationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FormReponsereclamationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormReponsereclamationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ReclamationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReclamationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ReclamationsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReclamationsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ReponseReclamationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReponseReclamationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StatReclamationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StatReclamationComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ReclamationsRoutingModule.html" data-type="entity-link" >ReclamationsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-UsersModule-372ed48f4e246c7fe64a3e72eef27e04267be923b5353e08eb8b238ec6d68f401c51a98cb707e46fe800d6f3f1c1c43c725b1c8f65150cc12783dc53f5355a11"' : 'data-target="#xs-components-links-module-UsersModule-372ed48f4e246c7fe64a3e72eef27e04267be923b5353e08eb8b238ec6d68f401c51a98cb707e46fe800d6f3f1c1c43c725b1c8f65150cc12783dc53f5355a11"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UsersModule-372ed48f4e246c7fe64a3e72eef27e04267be923b5353e08eb8b238ec6d68f401c51a98cb707e46fe800d6f3f1c1c43c725b1c8f65150cc12783dc53f5355a11"' :
                                            'id="xs-components-links-module-UsersModule-372ed48f4e246c7fe64a3e72eef27e04267be923b5353e08eb8b238ec6d68f401c51a98cb707e46fe800d6f3f1c1c43c725b1c8f65150cc12783dc53f5355a11"' }>
                                            <li class="link">
                                                <a href="components/ConnectionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConnectionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ForgetPasswordComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ForgetPasswordComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InscriptionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InscriptionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MainUserComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MainUserComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProfileComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProfileComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UpdatePswFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UpdatePswFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UsersComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersRoutingModule.html" data-type="entity-link" >UsersRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CategorieProduit.html" data-type="entity-link" >CategorieProduit</a>
                            </li>
                            <li class="link">
                                <a href="classes/CodePromo.html" data-type="entity-link" >CodePromo</a>
                            </li>
                            <li class="link">
                                <a href="classes/DetailFacture.html" data-type="entity-link" >DetailFacture</a>
                            </li>
                            <li class="link">
                                <a href="classes/Facture.html" data-type="entity-link" >Facture</a>
                            </li>
                            <li class="link">
                                <a href="classes/Fournisseur.html" data-type="entity-link" >Fournisseur</a>
                            </li>
                            <li class="link">
                                <a href="classes/ImageSnippet.html" data-type="entity-link" >ImageSnippet</a>
                            </li>
                            <li class="link">
                                <a href="classes/LikeDislike.html" data-type="entity-link" >LikeDislike</a>
                            </li>
                            <li class="link">
                                <a href="classes/NoteProduit.html" data-type="entity-link" >NoteProduit</a>
                            </li>
                            <li class="link">
                                <a href="classes/Panier.html" data-type="entity-link" >Panier</a>
                            </li>
                            <li class="link">
                                <a href="classes/Produit.html" data-type="entity-link" >Produit</a>
                            </li>
                            <li class="link">
                                <a href="classes/Reclamation.html" data-type="entity-link" >Reclamation</a>
                            </li>
                            <li class="link">
                                <a href="classes/ReponseReclamation.html" data-type="entity-link" >ReponseReclamation</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/CategorieProduitService.html" data-type="entity-link" >CategorieProduitService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CodePromoService.html" data-type="entity-link" >CodePromoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DetailFactureService.html" data-type="entity-link" >DetailFactureService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FactureService.html" data-type="entity-link" >FactureService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/imageService.html" data-type="entity-link" >imageService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LikeDislikeService.html" data-type="entity-link" >LikeDislikeService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NoteProduitService.html" data-type="entity-link" >NoteProduitService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProduitService.html" data-type="entity-link" >ProduitService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ReclamationService.html" data-type="entity-link" >ReclamationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ReponseReclamationService.html" data-type="entity-link" >ReponseReclamationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SessionService.html" data-type="entity-link" >SessionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});