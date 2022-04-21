"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _style = require("./style");

var _focusTrapReact = _interopRequireDefault(require("focus-trap-react"));

var _react = require("react");

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
  return /*#__PURE__*/React.createElement(React.Fragment, null, modalState && /*#__PURE__*/React.createElement(_style.StyledModal, null, /*#__PURE__*/React.createElement(_focusTrapReact.default, null, /*#__PURE__*/React.createElement(_style.StyledModalContainer, {
    ref: containerRef
  }, customCloseButton || /*#__PURE__*/React.createElement(_style.StyledCloseButton, {
    onClick: function onClick() {
      return setModalState(false);
    },
    tabIndex: "0"
  }), /*#__PURE__*/React.createElement(_style.StyledModalContent, null, children)))));
};

var _default = ModalWh;
exports.default = _default;