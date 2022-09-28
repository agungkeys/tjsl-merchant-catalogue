/**
 * Local api for web client side
 */

 const axios = require('axios');
 const express = require('express');
 const bodyParser = require('body-parser');
 const WHITELIST = require('./constants/whitelist');
 
 const api = express.Router();
 
 function getBaseUrl(endpoint) {
   try {
     const url = new URL(endpoint);
     return `${url.protocol}//${url.hostname}`;
   } catch (_) {
     return false;
   }
 }
 
 api.use(bodyParser.urlencoded({ extended: true, limit: '500mb' }));
 
 api.all('/', (req, res) => {
   try {
     const {
       headers: {
         endpoint,
         authorization: Authorization,
         accept: Accept,
         prefer: Prefer,
         clientid,
         clientversion,
         contenttype,
       },
     } = req;
 
     const baseUrlEndpoint = getBaseUrl(endpoint);
     if (!baseUrlEndpoint || WHITELIST.indexOf(baseUrlEndpoint) === -1) {
       res.status(403);
       res.send({ error: { message: 'Forbidden' } });
       return true;
     }
 
     const headers = {
       ...(Authorization && { Authorization }),
       ...(Accept && { Accept }),
       ...(Prefer && { Prefer }),
       ...(clientid && { 'Client-Id': clientid }),
       ...(clientversion && { 'Client-Version': clientversion }),
       ...(contenttype && { 'Content-Type': contenttype }),
     };
 
     const isEmptyObj = (object) =>
       !Object.getOwnPropertySymbols(object).length &&
       !Object.getOwnPropertyNames(object).length;
 
     const options = {
       url: endpoint,
       method: req.method,
       ...(req.body && !isEmptyObj(req.body) && { data: req.body }),
       headers,
     };
 
     axios(options)
       .then((result) => {
         res.send(result.data);
       })
       .catch((error) => {
         if (error.response) {
           res.status(error.response.status);
         }
 
         res.send({ error, customResponse: error.response.data || {} });
       });
   } catch (error) {
     res.send({ error });
   }
   return true;
 });
 
 api.all('/about', (req, res) => {
   res.send('api web');
 });
 
 module.exports = api;
 