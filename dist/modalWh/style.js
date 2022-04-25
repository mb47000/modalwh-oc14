"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledModalContent = exports.StyledModalContainer = exports.StyledModal = exports.StyledCloseButton = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledModal = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100vh;\n  background: rgba(0, 0, 0, 0.75);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  ", ";\n"])), function (props) {
  return props.customStyle;
});

exports.StyledModal = StyledModal;

var StyledModalContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  background: rgb(255, 255, 255);\n  border-radius: 5px;\n  width: 90%;\n  max-width: 400px;\n  padding: 38px;\n  position: relative;\n  ", ";\n"])), function (props) {
  return props.customStyle;
});

exports.StyledModalContainer = StyledModalContainer;

var StyledModalContent = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  text-align: center;\n  background: inherit;\n  ", ";\n"])), function (props) {
  return props.customStyle;
});

exports.StyledModalContent = StyledModalContent;

var StyledCloseButton = _styledComponents.default.a(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  position: absolute;\n  right: 5px;\n  top: 5px;\n  width: 32px;\n  height: 32px;\n  opacity: 0.3;\n\n  &:hover {\n    opacity: 1;\n    cursor: pointer;\n  }\n\n  &:before,\n  &:after {\n    position: absolute;\n    content: ' ';\n    height: 33px;\n    width: 2px;\n    left: 14px;\n    background-color: #333;\n  }\n\n  &:before {\n    transform: rotate(45deg);\n  }\n  &:after {\n    transform: rotate(-45deg);\n  }\n\n  ", ";\n"])), function (props) {
  return props.customStyle;
});

exports.StyledCloseButton = StyledCloseButton;