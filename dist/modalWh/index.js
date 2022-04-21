"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _style = require("./style");

var _focusTrapReact = _interopRequireDefault(require("focus-trap-react"));

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var useOutsideClose = function useOutsideClose(ref, setModalState) {
  (0, _react.useEffect)(function () {
    /**
     * Close Modal if clicked on outside of the container
     */
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

var ModalWh = function ModalWh(_ref) {
  var children = _ref.children,
      modalState = _ref.modalState,
      setModalState = _ref.setModalState,
      modalStyle = _ref.modalStyle,
      customCloseButton = _ref.customCloseButton;
  var containerRef = (0, _react.useRef)(null);
  useOutsideClose(containerRef, setModalState);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, modalState && /*#__PURE__*/_react.default.createElement(_style.StyledModal, null, /*#__PURE__*/_react.default.createElement(_focusTrapReact.default, null, /*#__PURE__*/_react.default.createElement(_style.StyledModalContainer, {
    ref: containerRef
  }, customCloseButton || /*#__PURE__*/_react.default.createElement(_style.StyledCloseButton, {
    onClick: function onClick() {
      return setModalState(false);
    },
    tabIndex: "0"
  }), /*#__PURE__*/_react.default.createElement(_style.StyledModalContent, null, children)))));
};

var _default = ModalWh;
exports.default = _default;