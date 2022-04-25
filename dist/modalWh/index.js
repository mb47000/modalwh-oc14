"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _style = require("./style");

var _focusTrapReact = _interopRequireDefault(require("focus-trap-react"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Close Modal if clicked on outside of the container
 * @param {React.Component} ref The container of the modal
 * @param {function} setModalState The function to update the modal state.
 */
var useOutsideClose = function useOutsideClose(ref, setModalState) {
  (0, _react.useEffect)(function () {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setModalState(false);
      }
    } // Bind the event listener


    document.addEventListener('mousedown', handleClickOutside);
    return function () {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, setModalState]);
};
/**
 * A simple React Modal component, easy to customize
 * @component
 * @param {any} children The content of the modal, put anything you want
 * @param {boolean} modalState The state of the modal, true for show, false for hide.
 * @param {function} setModalState The function to update the modal state.
 * @param {Object} modalStyle Custom style css for the different part of the modal, object shape: {main: {}, container: {}, content: {}, customCloseButton: {}}.
 * @param {HtmlElement|ReactComponent} customCloseButton If you want to pass a personalized React component for close button.
 * @returns {React.Component} React Modal component
 */


var ModalWh = function ModalWh(_ref) {
  var children = _ref.children,
      modalState = _ref.modalState,
      setModalState = _ref.setModalState,
      modalStyle = _ref.modalStyle,
      customCloseButton = _ref.customCloseButton;
  var containerRef = (0, _react.useRef)(null);
  useOutsideClose(containerRef, setModalState);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, modalState && /*#__PURE__*/_react.default.createElement(_style.StyledModal, {
    customStyle: modalStyle === null || modalStyle === void 0 ? void 0 : modalStyle.main
  }, /*#__PURE__*/_react.default.createElement(_focusTrapReact.default, null, /*#__PURE__*/_react.default.createElement(_style.StyledModalContainer, {
    ref: containerRef,
    customStyle: modalStyle === null || modalStyle === void 0 ? void 0 : modalStyle.container
  }, customCloseButton || /*#__PURE__*/_react.default.createElement(_style.StyledCloseButton, {
    onClick: function onClick() {
      return setModalState(false);
    },
    tabIndex: "0",
    customStyle: modalStyle === null || modalStyle === void 0 ? void 0 : modalStyle.closeButton
  }), /*#__PURE__*/_react.default.createElement(_style.StyledModalContent, {
    customStyle: modalStyle === null || modalStyle === void 0 ? void 0 : modalStyle.content
  }, children)))));
};

ModalWh.propTypes = {
  modalState: _propTypes.default.bool.isRequired,
  setModalState: _propTypes.default.func.isRequired,
  customCloseButton: _propTypes.default.element,
  modalStyle: _propTypes.default.shape({
    main: _propTypes.default.string,
    container: _propTypes.default.string,
    content: _propTypes.default.string,
    closeButton: _propTypes.default.string
  }),
  children: _propTypes.default.any
};
var _default = ModalWh;
exports.default = _default;