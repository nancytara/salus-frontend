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
import { LocalTime } from './local-time';
/**
 * 
 * @export
 * @interface UpdateVisitaMedicaDTO
 */
export interface UpdateVisitaMedicaDTO {
    /**
     * 
     * @type {LocalTime}
     * @memberof UpdateVisitaMedicaDTO
     */
    oraVisita: LocalTime;
    /**
     * 
     * @type {LocalTime}
     * @memberof UpdateVisitaMedicaDTO
     */
    oraFineVisita?: LocalTime;
    /**
     * 
     * @type {number}
     * @memberof UpdateVisitaMedicaDTO
     */
    idMedicalDay: number;
    /**
     * 
     * @type {number}
     * @memberof UpdateVisitaMedicaDTO
     */
    idDipendente: number;
    /**
     * 
     * @type {string}
     * @memberof UpdateVisitaMedicaDTO
     */
    statoVisitaMedica?: UpdateVisitaMedicaDTOStatoVisitaMedicaEnum;
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateVisitaMedicaDTOStatoVisitaMedicaEnum {
    INSERITA = 'INSERITA',
    EFFETTUATA = 'EFFETTUATA',
    NONEFFETTUATA = 'NON_EFFETTUATA'
}

