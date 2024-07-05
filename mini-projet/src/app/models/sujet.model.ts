export interface SujetModel {
    id:                 string;
    created:            Date;
    updated:            Date;
    titre:              string;
    nbPost:             number;
    dateDernierMessage: Date;
    auteurId:           string;
}
