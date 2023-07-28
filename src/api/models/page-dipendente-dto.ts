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
import { DipendenteDTO } from './dipendente-dto';
import { PageableObject } from './pageable-object';
import { SortObject } from './sort-object';
/**
 * 
 * @export
 * @interface PageDipendenteDTO
 */
export interface PageDipendenteDTO {
    /**
     * 
     * @type {number}
     * @memberof PageDipendenteDTO
     */
    totalPages?: number;
    /**
     * 
     * @type {number}
     * @memberof PageDipendenteDTO
     */
    totalElements?: number;
    /**
     * 
     * @type {number}
     * @memberof PageDipendenteDTO
     */
    size?: number;
    /**
     * 
     * @type {Array<DipendenteDTO>}
     * @memberof PageDipendenteDTO
     */
    content?: Array<DipendenteDTO>;
    /**
     * 
     * @type {number}
     * @memberof PageDipendenteDTO
     */
    number?: number;
    /**
     * 
     * @type {SortObject}
     * @memberof PageDipendenteDTO
     */
    sort?: SortObject;
    /**
     * 
     * @type {boolean}
     * @memberof PageDipendenteDTO
     */
    first?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PageDipendenteDTO
     */
    last?: boolean;
    /**
     * 
     * @type {number}
     * @memberof PageDipendenteDTO
     */
    numberOfElements?: number;
    /**
     * 
     * @type {PageableObject}
     * @memberof PageDipendenteDTO
     */
    pageable?: PageableObject;
    /**
     * 
     * @type {boolean}
     * @memberof PageDipendenteDTO
     */
    empty?: boolean;
}
