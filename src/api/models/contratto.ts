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
import { Medico } from './medico';
import { Sede } from './sede';
/**
 * 
 * @export
 * @interface Contratto
 */
export interface Contratto {
    /**
     * 
     * @type {number}
     * @memberof Contratto
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof Contratto
     */
    dataInizio?: string;
    /**
     * 
     * @type {string}
     * @memberof Contratto
     */
    dataFine?: string;
    /**
     * 
     * @type {Medico}
     * @memberof Contratto
     */
    medico?: Medico;
    /**
     * 
     * @type {Sede}
     * @memberof Contratto
     */
    sede?: Sede;
    /**
     * 
     * @type {Date}
     * @memberof Contratto
     */
    dataCancellazione?: Date;
    /**
     * 
     * @type {boolean}
     * @memberof Contratto
     */
    attivo?: boolean;
}