import HistoryComponent from "../../Components/Layout/HistoryComponent.vue";

export default {
    component: HistoryComponent,
    description: "History ",
    importStatement: "import { HistoryComponent } from '@webilio-xyz/webilio-vue/Components';",
    propsToDemo: {
        props: {
            'history': {
                "2024-01-15": {
                    "clients": {
                        title: "Gestion Clients",
                        details: [
                            {
                                user: {
                                    idUser: 1,
                                    firstName: "Jean",
                                    lastName: "Dupont",
                                    userName: "jdupont"
                                },
                                type: "creation",
                                title: "Nouveau client Premium",
                                description: "Création du compte client pour Tesla Inc.",
                                date: "2024-01-15 09:30:00"
                            },
                            {
                                user: {
                                    firstName: "Marie",
                                    lastName: "Martin",
                                    userName: "mmartin"
                                },
                                type: "modification",
                                title: "Mise à jour coordonnées",
                                description: "Modification de l'adresse de facturation",
                                date: "2024-01-15 14:15:00"
                            }
                        ]
                    }
                },
                "2024-01-14": {
                    "factures": {
                        title: "Facturation",
                        details: [
                            {
                                user: {
                                    idUser: 3,
                                    firstName: "Pierre",
                                    lastName: "Dubois",
                                    userName: "pdubois"
                                },
                                type: "creation",
                                title: "Facture mensuelle",
                                description: "Génération des factures du mois",
                                date: "2024-01-14 10:00:00"
                            }
                        ]
                    },
                    "support": {
                        title: "Support Technique",
                        details: [
                            {
                                user: {
                                    firstName: "Sophie",
                                    lastName: "Lambert",
                                    userName: "slambert"
                                },
                                type: "incident",
                                title: "Résolution bug #234",
                                description: "Correction du problème de connexion",
                                date: "2024-01-14 16:45:00"
                            }
                        ]
                    }
                },
                "2024-01-13": {
                    "produits": {
                        title: "Catalogue Produits",
                        details: [
                            {
                                user: {
                                    id: 5,
                                    firstName: "Lucas",
                                    lastName: "Bernard",
                                    userName: "lbernard"
                                },
                                type: "creation",
                                title: "Nouveau produit",
                                description: "Ajout de la gamme été 2024",
                                date: "2024-01-13 11:20:00"
                            }
                        ]
                    },
                    "marketing": {
                        title: "Campagnes Marketing",
                        details: [
                            {
                                user: {
                                    id: 6,
                                    firstName: "Emma",
                                    lastName: "Petit",
                                    userName: "epetit"
                                },
                                type: "creation",
                                title: "Newsletter Janvier",
                                description: "Création de la newsletter mensuelle",
                                date: "2024-01-13 09:00:00"
                            },
                            {
                                user: {
                                    firstName: "Thomas",
                                    lastName: "Roux",
                                    userName: "troux"
                                },
                                type: "modification",
                                title: "Mise à jour promotion",
                                description: "Modification des offres spéciales",
                                date: "2024-01-13 15:30:00"
                            }
                        ]
                    }
                }
            }
        },
        'config': {
            props: {
                'date-icons': {
                    icon: 'HiCalendarDays',
                    classes: ['text-blue-600']
                },
                'group-icon': {
                    icon: 'HiBuildingOffice',
                    classes: ['text-blue-500']
                },
                'detail-icon': {
                    icon: 'HiPencilSquare',
                    classes: ['text-red-500']
                }
            }
        },
    },
}