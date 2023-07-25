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
 * @interface MedicalDayDTO
 */
export interface MedicalDayDTO {
    /**
     * 
     * @type {number}
     * @memberof MedicalDayDTO
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof MedicalDayDTO
     */
    data: string;
    /**
     * 
     * @type {Contratto}
     * @memberof MedicalDayDTO
     */
    contratto: Contratto;
    /**
     * 
     * @type {string}
     * @memberof MedicalDayDTO
     */
    statoMedicalDay: MedicalDayDTOStatoMedicalDayEnum;
}

/**
    * @export
    * @enum {string}
    */
export enum MedicalDayDTOStatoMedicalDayEnum {
    INLAVORAZIONE = 'IN_LAVORAZIONE',
    COMPLETO = 'COMPLETO'
}
