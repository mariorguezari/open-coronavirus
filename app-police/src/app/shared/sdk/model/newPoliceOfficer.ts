/**
 * coronavirus-server - coronavirus-server
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * (Schema options: { title: \'NewPoliceOfficer\', exclude: [ \'id\' ] })
 */
export interface NewPoliceOfficer { 
  [key: string]: object | any;


    uniqueId: string;
    name: string;
    dni: string;
    age: number;
    street: string;
    city: string;
    postalCode: string;
    position: string;
}
