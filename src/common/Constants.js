/**
 * Created by emma on 18/08/17.
 */



export const TARIFS_SECONDAIRE_PROGRAMME_IVOIRIEN = {
    'TERMINALE': 88000,
    'PREMIERE': 88000,
    'SECONDE': 75000,
    'TROISIEME': 65000,
    'QUATRIEME': 55000,
    'CINQUIEME': 52000,
    'SIXIEME': 52000,
}


export const TARIFS_SECONDAIRE_PROGRAMME_FRANCAIS = {
    'TERMINALE': 105600,
    'PREMIERE': 105600,
    'SECONDE': 90000,
    'TROISIEME': 78000,
    'QUATRIEME': 66000,
    'CINQUIEME': 64200,
    'SIXIEME': 64200,
}


export const TARIFS_PRIMAIRE_PROGRAMME_FRANCAIS = {
    'TERMINALE': 88000,
    'PREMIERE': 88000,
    'SECONDE': 75000,
    'TROISIEME': 65000,
    'QUATRIEME': 55000,
    'CINQUIEME': 52000,
    'SIXIEME': 52000,
}

export const Classes = [
    {nom: 'CM1'},
    {nom: 'CM2'},
    {nom: 'SIXIEME'},
    {nom: 'CINQUIEME'},
    {nom: 'QUATRIEME'},
    {nom: 'TROISIEME'},
    {nom: 'SECONDE'},
    {nom: 'PREMIERE'},
    {nom: 'TERMINALE'}
]

export const TypeMatiere = {
    TECHNIQUE: 'TECHNIQUE',
    SCIENTIFIQUE: 'SCIENTIFIQUE',
    LITTERAIRE: 'LITTERAIRE'
}

export const MatieresSeconcaire = [
    {
        value: 'Mathématique',
        code: 'math',
       type:TypeMatiere.SCIENTIFIQUE

    },
    {
        value: 'Physique',
        code: 'phys',
        type:TypeMatiere.SCIENTIFIQUE
    },
    {
        value: 'Histoire Géo',
        code: 'histg',
        type:TypeMatiere.LITTERAIRE
    },
    {
        value: 'Anglais',
        code: 'angl',
        type:TypeMatiere.LITTERAIRE
    },
    {
        value: 'Français',
        code: 'fran',
        type:TypeMatiere.LITTERAIRE
    },
    {
        value: 'Phylosophie',
        code: 'phylo',
        type:TypeMatiere.LITTERAIRE
    },
    {
        value: 'SVT',
        code: 'svt',
        type:TypeMatiere.SCIENTIFIQUE
    },
    {
        value: 'Comptabilité',
        code: 'compt',
        type:TypeMatiere.TECHNIQUE
    },
    {
        value: 'Espagnol',
        code: 'espa',
        type:TypeMatiere.LITTERAIRE
    }
]



export const Programme = {
    FRANCAINS: 'FRANCAIS',
    IVOIRIEN: 'IVOIRIEN',
    AMERICAIN: 'AMERICAIN'
}