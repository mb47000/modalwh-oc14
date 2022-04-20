"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledModal = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledModal = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background-color: red;\n"]))); // export const StyledButton = styled.button`
//   display: block;
//   margin: 0;
//   padding: ${(props) => props.padding};
//   color: white;
//   font-size: ${(props) => props.fontSize};
//   font-weight: 700;
//   background: ${colors.primary500};
//   border-color: ${colors.primary500};
//   cursor: pointer;
//   ${(props) =>
//     props.fullWidth
//       ? `
//         width: 100%;`
//       : ``}
//   ${(props) =>
//     props.center
//       ? `
//         margin: 0 auto;`
//       : ``}
// ${(props) =>
//     props.fontSize
//       ? `
//         margin: 0 auto;`
//       : ``}
// `


exports.StyledModal = StyledModal;