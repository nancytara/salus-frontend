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
import { LocalDateFilter } from './local-date-filter';
import { LongFilter } from './long-filter';
import { StringFilter } from './string-filter';
/**
 * 
 * @export
 * @interface DipendenteCriteria
 */
export interface DipendenteCriteria {
    /**
     * 
     * @type {LongFilter}
     * @memberof DipendenteCriteria
     */
    idSede?: LongFilter;
    /**
     * 
     * @type {StringFilter}
     * @memberof DipendenteCriteria
     */
    nome?: StringFilter;
    /**
     * 
     * @type {StringFilter}
     * @memberof DipendenteCriteria
     */
    cognome?: StringFilter;
    /**
     * 
     * @type {StringFilter}
     * @memberof DipendenteCriteria
     */
    codiceFiscale?: StringFilter;
    /**
     * 
     * @type {number}
     * @memberof DipendenteCriteria
     */
    over?: number;
    /**
     * 
     * @type {boolean}
     * @memberof DipendenteCriteria
     */
    senzaScadenza?: boolean;
    /**
     * 
     * @type {LocalDateFilter}
     * @memberof DipendenteCriteria
     */
    scadenzaVisitaAl?: LocalDateFilter;
    /**
     * 
     * @type {LocalDateFilter}
     * @memberof DipendenteCriteria
     */
    scadenzaVisitaDal?: LocalDateFilter;
}
