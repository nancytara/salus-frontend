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
import { RangeFilterLong } from './range-filter-long';
/**
 * 
 * @export
 * @interface LongFilter
 */
export interface LongFilter {
    /**
     * 
     * @type {number}
     * @memberof LongFilter
     */
    equals?: number;
    /**
     * 
     * @type {number}
     * @memberof LongFilter
     */
    notEquals?: number;
    /**
     * 
     * @type {boolean}
     * @memberof LongFilter
     */
    specified?: boolean;
    /**
     * 
     * @type {Array<number>}
     * @memberof LongFilter
     */
    _in?: Array<number>;
    /**
     * 
     * @type {Array<number>}
     * @memberof LongFilter
     */
    notIn?: Array<number>;
    /**
     * 
     * @type {number}
     * @memberof LongFilter
     */
    greaterThan?: number;
    /**
     * 
     * @type {number}
     * @memberof LongFilter
     */
    lessThan?: number;
    /**
     * 
     * @type {number}
     * @memberof LongFilter
     */
    greaterThanOrEqual?: number;
    /**
     * 
     * @type {number}
     * @memberof LongFilter
     */
    lessThanOrEqual?: number;
    /**
     * 
     * @type {RangeFilterLong}
     * @memberof LongFilter
     */
    lessOrEqualThan?: RangeFilterLong;
    /**
     * 
     * @type {RangeFilterLong}
     * @memberof LongFilter
     */
    greaterOrEqualThan?: RangeFilterLong;
}
