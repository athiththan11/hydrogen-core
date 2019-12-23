'use strict';

const fs = require('fs');
const XMLJS = require('libxmljs');

const constants = require('../utils/constants');
const { logger } = require('./util.winston');

/**
 * method to parse synapse xml
 *
 * @param {*} filePath synapse xml file path
 * @returns parsed xml doc
 */
async function parseXML(filePath) {
    try {
        let parsed = fs.readFileSync(filePath, 'utf8');
        parsed = XMLJS.parseXml(parsed);
        return parsed;
    } catch (err) {
        logger.error(err);
    }
}

/**
 * method to alter an xml element and to append a comment with the provided descriptions
 *
 * @param {string} elem an xml element
 * @param {string} tag xml tag
 * @param {string} desc comment description
 * @returns altered xml element
 */
function alterElem(elem, tag, desc) {
	let altered =
		elem.substring(0, elem.indexOf(`<${tag}>`)) +
		commentElem(elem.substring(elem.indexOf(`<${tag}>`), elem.lastIndexOf(`<${tag}>`))) +
		`${constants.tabSpace}<!-- ${constants.comment}${desc ? desc : ''} -->\n${constants.tabSpace}` +
		elem.substring(elem.lastIndexOf(`<${tag}>`), elem.length);
	return altered;
}

/**
 * method to comment an xml element
 *
 * @param {string} elem xml element to be commented
 * @returns commented element
 */
function commentElem(elem) {
	return '<!-- ' + elem + ` -->${constants.newLine}`;
}

/**
 * method to remove declaration of xml version tags
 *
 * @param {string} xml xml document
 * @returns declaration removed xml document
 */
function removeDeclaration(xml) {
	return xml.split('<?xml version="1.0" encoding="UTF-8"?>\n')[1];
}

exports.parseXML = parseXML;
exports.alterElem = alterElem;
exports.commentElem = commentElem;
exports.removeDeclaration = removeDeclaration;