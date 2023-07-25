/* tslint:disable */
/* eslint-disable */
/**
 * Salus Management API
 * This API exposes endpoints to manage Salus' Entities
 *
 * OpenAPI spec version: 1.0
 * Contact: alessandro-giordano@fullstack-group.it
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { Contratto } from './contratto';
/**
 * 
 * @export
 * @interface Medico
 */
export interface Medico {
    /**
     * 
     * @type {number}
     * @memberof Medico
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof Medico
     */
    nome: string;
    /**
     * 
     * @type {string}
     * @memberof Medico
     */
    cognome: string;
    /**
     * 
     * @type {string}
     * @memberof Medico
     */
    dataNascita: string;
    /**
     * 
     * @type {string}
     * @memberof Medico
     */
    email?: string;
    /**
     * 
     * @type {string}
     * @memberof Medico
     */
    codiceFiscale: string;
    /**
     * 
     * @type {string}
     * @memberof Medico
     */
    sesso: MedicoSessoEnum;
    /**
     * 
     * @type {string}
     * @memberof Medico
     */
    numeroTelefono?: string;
    /**
     * 
     * @type {boolean}
     * @memberof Medico
     */
    societa?: boolean;
    /**
     * 
     * @type {Array<Contratto>}
     * @memberof Medico
     */
    contratti?: Array<Contratto>;
}

/**
    * @export
    * @enum {string}
    */
export enum MedicoSessoEnum {
    UOMO = 'UOMO',
    DONNA = 'DONNA',
    ALTRO = 'ALTRO'
}
