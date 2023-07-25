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
import { RangeFilterLocalDate } from './range-filter-local-date';
/**
 * 
 * @export
 * @interface LocalDateFilter
 */
export interface LocalDateFilter {
    /**
     * 
     * @type {string}
     * @memberof LocalDateFilter
     */
    equals?: string;
    /**
     * 
     * @type {string}
     * @memberof LocalDateFilter
     */
    notEquals?: string;
    /**
     * 
     * @type {boolean}
     * @memberof LocalDateFilter
     */
    specified?: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof LocalDateFilter
     */
    _in?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof LocalDateFilter
     */
    notIn?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof LocalDateFilter
     */
    greaterThan?: string;
    /**
     * 
     * @type {string}
     * @memberof LocalDateFilter
     */
    lessThan?: string;
    /**
     * 
     * @type {string}
     * @memberof LocalDateFilter
     */
    greaterThanOrEqual?: string;
    /**
     * 
     * @type {string}
     * @memberof LocalDateFilter
     */
    lessThanOrEqual?: string;
    /**
     * 
     * @type {RangeFilterLocalDate}
     * @memberof LocalDateFilter
     */
    greaterOrEqualThan?: RangeFilterLocalDate;
    /**
     * 
     * @type {RangeFilterLocalDate}
     * @memberof LocalDateFilter
     */
    lessOrEqualThan?: RangeFilterLocalDate;
}
