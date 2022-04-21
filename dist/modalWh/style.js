"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledModalContent = exports.StyledModalContainer = exports.StyledModal = exports.StyledCloseButton = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledModal = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100vh;\n  background: ", ";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])), function (props) {
  return props.background || 'rgba(0, 0, 0, 0.75)';
});

exports.StyledModal = StyledModal;

var StyledModalContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  background: ", ";\n  border-radius: ", ";\n  width: ", ";\n  max-width: ", ";\n  padding: ", ";\n  position: relative;\n"])), function (props) {
  return props.background || 'rgb(255, 255, 255)';
}, function (props) {
  return props.borderRadius || '5px';
}, function (props) {
  return props.width || '90%';
}, function (props) {
  return props.maxWidth || '400px';
}, function (props) {
  return props.padding || '38px';
});

exports.StyledModalContainer = StyledModalContainer;

var StyledModalContent = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  text-align: ", ";\n  background: ", ";\n"])), function (props) {
  return props.textAlign || 'center';
}, function (props) {
  return props.background || 'inherit';
});

exports.StyledModalContent = StyledModalContent;

var StyledCloseButton = _styledComponents.default.a(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  position: absolute;\n  right: 5px;\n  top: 5px;\n  width: 32px;\n  height: 32px;\n  opacity: 0.3;\n\n  &:hover {\n    opacity: 1;\n    cursor: pointer;\n  }\n\n  &:before,\n  &:after {\n    position: absolute;\n    content: ' ';\n    height: 33px;\n    width: 2px;\n    left: 14px;\n    background-color: #333;\n  }\n\n  &:before {\n    transform: rotate(45deg);\n  }\n  &:after {\n    transform: rotate(-45deg);\n  }\n"])));

exports.StyledCloseButton = StyledCloseButton;