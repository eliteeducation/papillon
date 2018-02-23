/**
 * Created by emma on 18/08/17.
 */

import React from 'react';

const CM1 = Symbol();
const CM2 = Symbol();
const SIXIEME = Symbol();
const CINQUIEME = Symbol();
const QUATRIEME = Symbol();
const TROISIEME = Symbol();
const SECONDE = Symbol();
const PREMIERE = Symbol();
const TERMINALE = Symbol();

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


export const MatieresSeconcaire = {
    MAth: 'CM1',
    CM2: 'CM2',
    SIXIEME: 'SIXIEME',
    CINQUIEME: 'CINQUIEME',
    QUATRIEME: 'QUATRIEME',
    TROISIEME: 'TROISIEME',
    SECONDE: 'SECONDE',
    PREMIERE: 'PREMIERE',
    TERMINALE: 'TERMINALE'
}


export const TypeEnseignement = {
    TECHNIQUE: 'CM1',
    GENERAL: 'CM2'
}

export const Programme = {
    FRANCAINS: 'FRANCAIS',
    IVOIRIE: 'CM2'
}