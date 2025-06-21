/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ \"./node_modules/css-loader/dist/runtime/sourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `#header {\n  display: flex;\n  margin: 24px;\n  justify-content: space-between;\n  font-family: Garamond;\n}\n\n#maintitle {\n  font-size: 36px;\n}\n\n#maincontainer {\n  width: calc(100% - 72px); /* Account for margins */\n  overflow: visible;\n  box-sizing: border-box;\n}\n\n#headerright {\n  display: flex;\n  gap: 32px;\n  align-items: center;\n}\n\n.folder-section {\n  margin-bottom: 60px;\n  overflow: visible;\n}\n\n.folder-section h2 {\n  margin-bottom: 24px;\n  text-transform: capitalize;\n  font-family: Garamond;\n  font-size: 24px;\n  color: #333;\n}\n\n.image-grid {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n  overflow: visible;\n  padding-right: 1px;\n  /* min-height: 100vh; */\n  /* height: auto !important; */\n}\n\n.image-row {\n  display: flex;\n  gap: 24px;\n  align-items: flex-start;\n  margin-bottom: 24px;\n  width: 100%;\n  flex-wrap: nowrap; /* Prevent wrapping */\n  overflow: visible; /* Ensure nothing gets cut off */\n}\n\n.image-row img {\n  flex-shrink: 1; /* Allow images to shrink if needed */\n  max-width: 100%; /* Never exceed container width */\n  height: auto !important; /* Maintain aspect ratio */\n  object-fit: contain;\n}\n\n.image-row img:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);\n}\n\n/* Special styling for single image rows */\n.single-image-row {\n  justify-content: center;\n}\n\n.single-image-row img {\n  max-width: 100%;\n  width: auto !important;\n  height: auto !important;\n  max-height: 60vh;\n}\n\n/* Lightbox styling with gray background and transitions */\n.lightbox {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(128, 128, 128, 0.9); /* Gray background */\n  z-index: 1000;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  opacity: 0;\n  visibility: hidden;\n  transition: opacity 0.3s ease, visibility 0.3s ease;\n}\n\n.lightbox.active {\n  opacity: 1;\n  visibility: visible;\n}\n\n.lightbox-content {\n  position: relative;\n  max-width: 90%;\n  max-height: 90%;\n  transform: scale(0.9);\n  transition: transform 0.3s ease;\n}\n\n.lightbox.active .lightbox-content {\n  transform: scale(1);\n}\n\n.lightbox-image {\n  max-width: 100%;\n  max-height: 90vh;\n  display: block;\n  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);\n  border-radius: 4px;\n}\n\n.lightbox-close {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  background: rgba(255, 255, 255, 0.9);\n  color: #333;\n  border: none;\n  border-radius: 50%;\n  width: 40px;\n  height: 40px;\n  font-size: 24px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background-color 0.2s ease, transform 0.2s ease;\n  opacity: 0;\n  transform: scale(0.8);\n  transition: opacity 0.3s ease 0.2s, transform 0.3s ease 0.2s,\n    background-color 0.2s ease;\n}\n\n.lightbox.active .lightbox-close {\n  opacity: 1;\n  transform: scale(1);\n}\n\n.lightbox-close:hover {\n  background-color: white;\n  transform: scale(1.1);\n}\n\nbody.lightbox-open {\n  overflow: hidden;\n}\n\n@media (max-width: 768px) {\n  #maincontainer {\n    margin: 16px;\n    padding: 16px;\n  }\n\n  .image-grid {\n    gap: 16px;\n  }\n\n  .image-row {\n    gap: 16px;\n  }\n\n  .lightbox-close {\n    width: 36px;\n    height: 36px;\n    font-size: 20px;\n    top: 10px;\n    right: 10px;\n  }\n}\n\n@media (max-width: 600px) {\n  .image-row {\n    flex-direction: column;\n    align-items: center;\n  }\n\n  .image-row img {\n    width: 100% !important;\n    max-width: 100%;\n  }\n}\n\n#categoryButton {\n  background-color: hsl(0, 0%, 100%);\n  padding: 16px;\n  font-size: 16px;\n  border: none;\n  cursor: pointer;\n}\n\n#categoryButton:hover,\n#categoryButton:focus {\n  background-color: #aeb2b4;\n}\n\n#filter {\n  position: relative;\n  display: inline-block;\n}\n\n#dropdown {\n  display: none;\n  position: absolute;\n  background-color: #f1f1f1;\n  min-width: 160px;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 1;\n}\n\n#dropdown a {\n  color: black;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block;\n}\n\n#dropdown a:hover {\n  background-color: #ddd;\n}\n\n#dropdown.show {\n  display: block;\n}\n\n.dropdown-item {\n  display: block;\n  padding: 10px 16px;\n  cursor: pointer;\n  transition: background-color 0.2s;\n  user-select: none;\n}\n\n.dropdown-item:hover {\n  background-color: #ddd;\n}\n\n.dropdown-separator {\n  height: 1px;\n  background-color: #ccc;\n  margin: 5px 0;\n}\n\n.category-checkbox {\n  margin-right: 8px;\n}\n\n#dropdown.show {\n  display: block;\n}\n\n/* Add smooth transitions for folder sections */\n.folder-section {\n  transition: opacity 0.4s ease, max-height 0.6s ease, margin-bottom 0.4s ease;\n  overflow: hidden;\n  opacity: 1;\n  /* max-height: 2000px;  */\n  transform-origin: top;\n}\n\n.folder-section.hidden {\n  opacity: 0;\n  max-height: 0;\n  margin-bottom: 0;\n  pointer-events: none;\n}\n\n/* Make filter button transitions smooth */\n#categoryButton {\n  transition: background-color 0.2s ease;\n}\n\n/* Smooth transitions for dropdown */\n#dropdown {\n  transition: opacity 0.3s ease, transform 0.3s ease;\n  opacity: 0;\n  transform: translateY(-10px);\n  pointer-events: none;\n}\n\n#dropdown.show {\n  opacity: 1;\n  transform: translateY(0);\n  pointer-events: auto;\n}\n\n/* Smoother checkbox transitions */\n.dropdown-item {\n  transition: background-color 0.2s ease;\n}\n\n/* Add a slight animation to checkboxes */\n.category-checkbox {\n  transition: transform 0.15s ease;\n}\n\n.category-checkbox:checked {\n  transform: scale(1.1);\n}\n\n/* Add a nice transition when hovering over the filter button */\n#categoryButton:hover {\n  background-color: #e9e9e9;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n\n#categoryButton:active {\n  background-color: #d5d5d5;\n}\n\n/* Style for when filtering is active */\n#categoryButton.filtering-active {\n  background-color: #e6f0ff;\n  border-left: 3px solid #4285f4;\n  padding-left: 13px; /* Adjust padding to account for border */\n  font-weight: bold;\n  color: #4285f4;\n}\n\n/* Checkbox container styling */\n.dropdown-item {\n  position: relative;\n  overflow: hidden;\n}\n\n/* Ripple effect for checkboxes */\n.dropdown-item::after {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 5px;\n  height: 5px;\n  background: rgba(0, 0, 0, 0.1);\n  opacity: 0;\n  border-radius: 100%;\n  transform: scale(1, 1) translate(-50%, -50%);\n  transform-origin: 50% 50%;\n}\n\n.dropdown-item:active::after {\n  opacity: 1;\n  width: 200px;\n  height: 200px;\n  animation: ripple 0.6s ease-out;\n}\n\n@keyframes ripple {\n  0% {\n    transform: scale(0, 0);\n    opacity: 0.5;\n  }\n  100% {\n    transform: scale(1, 1);\n    opacity: 0;\n  }\n}\n\n/* Tagging Interface Styles */\n/* .tagging-panel {\n  position: absolute;\n  top: 20px;\n  left: 20px;\n  background: white;\n  padding: 16px;\n  border-radius: 8px;\n  width: 300px;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);\n  z-index: 1001;\n  transition: transform 0.3s ease, opacity 0.3s ease;\n  transform: translateX(-20px);\n  opacity: 0;\n} */\n\n.tagging-panel {\n  position: absolute;\n  right: 20px;\n  top: 20px;\n  width: 300px;\n  max-width: 90vw;\n  background: rgba(255, 255, 255, 0.95); /* Translucent white */\n  backdrop-filter: blur(10px); /* Blur background for better readability */\n  border-radius: 8px;\n  padding: 20px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);\n  max-height: calc(100vh - 100px);\n  overflow-y: auto;\n  border: 1px solid rgba(255, 255, 255, 0.5);\n}\n\n.lightbox.active .tagging-panel {\n  position: absolute;\n  right: 20px;\n  top: 20px;\n  width: 300px;\n  max-width: 90vw;\n  background: rgba(255, 255, 255, 0.75); /* Translucent white */\n  backdrop-filter: blur(10px); /* Blur background for better readability */\n  border-radius: 8px;\n  padding: 20px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);\n  max-height: calc(100vh - 100px);\n  overflow-y: auto;\n  border: 1px solid rgba(255, 255, 255, 0.5);\n}\n\n.tag-section {\n  margin-bottom: 12px;\n}\n\n.tag-section label {\n  display: block;\n  margin-bottom: 4px;\n  font-weight: 500;\n}\n\n.tag-section input {\n  width: 100%;\n  padding: 8px;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  font-size: 14px;\n}\n\n.tag-hint {\n  font-size: 12px;\n  color: #666;\n  margin-left: 4px;\n}\n\n.tag-save-button {\n  background-color: #4285f4;\n  color: white;\n  border: none;\n  padding: 8px 16px;\n  border-radius: 4px;\n  font-weight: 500;\n  cursor: pointer;\n  margin-top: 8px;\n  transition: background-color 0.2s;\n}\n\n.tag-save-button:hover {\n  background-color: #2b68d9;\n}\n\n.tag-display {\n  margin-top: 16px;\n  padding-top: 12px;\n  border-top: 1px solid #eee;\n}\n\n.tags-list {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n\n.tag-item {\n  background-color: #e6f0ff;\n  padding: 4px 8px;\n  border-radius: 4px;\n  font-size: 13px;\n}\n\n/* Tag filter styles */\n#tagFilterButton {\n  background-color: white;\n  padding: 16px;\n  font-size: 16px;\n  border: none;\n  cursor: pointer;\n  margin-left: 8px;\n}\n\n#tagFilterButton:hover {\n  background-color: #e9e9e9;\n}\n\n#tagDropdown {\n  display: none;\n  position: absolute;\n  right: 0;\n  background-color: #f1f1f1;\n  min-width: 280px;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 1;\n  padding: 16px;\n  border-radius: 4px;\n  opacity: 0;\n  transform: translateY(-10px);\n  transition: opacity 0.3s ease, transform 0.3s ease;\n}\n\n#tagDropdown.show {\n  display: block;\n  opacity: 1;\n  transform: translateY(0);\n}\n\n.tag-filter-section {\n  margin-bottom: 16px;\n}\n\n.tag-filter-section h4 {\n  margin-top: 0;\n  margin-bottom: 8px;\n}\n\n.date-range-inputs {\n  display: flex;\n  gap: 8px;\n}\n\n.date-range-inputs input {\n  flex: 1;\n  padding: 6px;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n}\n\n#locationFilter,\n#subjectFilter {\n  width: 100%;\n  padding: 8px;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n}\n\n.filter-buttons {\n  display: flex;\n  justify-content: space-between;\n}\n\n#applyTagFilters {\n  background-color: #4285f4;\n  color: white;\n  border: none;\n  padding: 8px 16px;\n  border-radius: 4px;\n  cursor: pointer;\n}\n\n#clearTagFilters {\n  background-color: #f1f1f1;\n  border: 1px solid #ddd;\n  padding: 8px 16px;\n  border-radius: 4px;\n  cursor: pointer;\n}\n\n.folder-section.hidden-by-tag {\n  display: none;\n}\n\n/* Add individual image hiding */\n.gallery-image.tag-filtered-out {\n  display: none !important;\n}\n.lightbox {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.85); /* Translucent black background */\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  opacity: 0;\n  visibility: hidden;\n  transition: opacity 0.3s ease, visibility 0.3s ease;\n  z-index: 9999;\n  backdrop-filter: blur(\n    5px\n  ); /* Optional: adds a blur effect to the background */\n}\n\n.lightbox.active {\n  opacity: 1;\n  visibility: visible;\n}\n\n/* Lightbox content - keep opaque */\n.lightbox-content {\n  position: relative;\n  max-width: 90vw;\n  max-height: 90vh;\n  background: white;\n  border-radius: 8px;\n  overflow: hidden;\n  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);\n}\n\n.lightbox-image {\n  max-width: 100%;\n  max-height: 90vh;\n  object-fit: contain;\n  display: block;\n}\n\n/* Tagging panel */\n.tagging-panel {\n  position: absolute;\n  right: 20px;\n  top: 20px;\n  width: 300px;\n  max-width: 90vw;\n  background: rgba(255, 255, 255, 0.98);\n  border-radius: 8px;\n  padding: 20px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);\n  max-height: calc(100vh - 100px);\n  overflow-y: auto;\n}\n\n/* Fix date input field */\n.tag-section {\n  margin-bottom: 16px;\n  width: 100%;\n}\n\n.tag-section label {\n  display: block;\n  font-weight: 600;\n  margin-bottom: 4px;\n  color: #333;\n}\n\n.tag-section input[type=\"date\"],\n.tag-section input[type=\"text\"] {\n  width: 100%;\n  padding: 8px 12px;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  font-size: 14px;\n  box-sizing: border-box; /* Ensures padding is included in width */\n}\n\n/* Specifically ensure date input doesn't overflow */\n.tag-date {\n  max-width: 100%;\n  box-sizing: border-box;\n}\n\n/* Wrapper for inputs to contain autocomplete */\n.input-wrapper {\n  position: relative;\n  width: 100%;\n}\n\n/* Close button */\n.lightbox-close {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  background: rgba(255, 255, 255, 0.9);\n  border: none;\n  width: 40px;\n  height: 40px;\n  cursor: pointer;\n  font-size: 24px;\n  line-height: 40px;\n  text-align: center;\n  border-radius: 50%;\n  transition: all 0.3s ease;\n  z-index: 10;\n}\n\n.lightbox-close:hover {\n  background: white;\n  transform: scale(1.1);\n}\n\n/* Tag display */\n.tag-display {\n  margin-top: 20px;\n  padding-top: 20px;\n  border-top: 1px solid #eee;\n}\n\n.tag-display p {\n  color: #888;\n  text-align: center;\n  margin: 10px 0;\n}\n\n.tags-list {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.tag-item {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 6px 12px;\n  background: #f5f5f5;\n  border-radius: 4px;\n  font-size: 14px;\n}\n\n.tag-item.tag-date {\n  background: #e3f2fd;\n  color: #1976d2;\n}\n\n.tag-item.tag-location {\n  background: #f3e5f5;\n  color: #7b1fa2;\n}\n\n.tag-item.tag-subjects {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n\n/* Save button */\n.tag-save-button {\n  width: 100%;\n  padding: 10px 16px;\n  background: #007bff;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 16px;\n  font-weight: 600;\n  margin-top: 16px;\n  transition: background-color 0.3s ease;\n}\n\n.tag-save-button:hover {\n  background: #0056b3;\n}\n\n/* Tag hint */\n.tag-hint {\n  display: block;\n  font-size: 12px;\n  color: #666;\n  margin-top: 4px;\n}\n\n/* Responsive adjustments */\n@media (max-width: 768px) {\n  .tagging-panel {\n    position: static;\n    width: 100%;\n    margin-top: 20px;\n    max-width: none;\n  }\n\n  .lightbox-content {\n    display: flex;\n    flex-direction: column;\n    max-height: 100vh;\n    height: 100vh;\n  }\n\n  .lightbox-image {\n    flex: 1;\n    object-fit: contain;\n    max-height: 50vh;\n  }\n}\n\n/* Prevent body scroll when lightbox is open */\nbody.lightbox-open {\n  overflow: hidden;\n}\n\n.input-wrapper {\n  position: relative;\n  width: 100%;\n}\n\n.tag-location,\n.tag-subject {\n  width: 100%;\n  box-sizing: border-box;\n}\n\n.autocomplete-wrapper {\n  position: relative;\n}\n\n.autocomplete-dropdown {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  max-height: 200px;\n  overflow-y: auto;\n  background: white;\n  border: 1px solid #ddd;\n  border-top: none;\n  border-radius: 0 0 4px 4px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n  z-index: 1000;\n  display: none;\n}\n\n.autocomplete-dropdown.show {\n  display: block;\n}\n\n.autocomplete-item {\n  padding: 8px 12px;\n  cursor: pointer;\n  transition: background-color 0.2s;\n}\n\n.autocomplete-item:hover,\n.autocomplete-item.active {\n  background-color: #f5f5f5;\n}\n\n.autocomplete-item strong {\n  color: #007bff;\n  font-weight: 600;\n}\n\n.lightbox .tag-section label {\n  display: block;\n}\n\n.lightbox .tag-section input {\n  margin-top: 4px;\n}\n\n.image-container {\n  position: relative !important;\n  display: inline-block !important;\n  height: 100%;\n}\n\n.image-container img {\n  display: block;\n  object-fit: cover;\n}\n\n.image-row {\n  display: flex;\n  gap: 24px;\n  align-items: flex-start;\n}\n\n.image-row img {\n  flex: 0 0 auto;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  border-radius: 4px;\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n  object-fit: cover;\n  cursor: pointer;\n}\n\n.tag-item {\n  position: relative;\n  padding: 4px 32px 4px 8px; /* Added padding-right for delete button */\n  cursor: pointer;\n  transition: all 0.3s ease;\n  margin-bottom: 4px;\n  background-color: #f8f9fa;\n  border-radius: 4px;\n}\n\n.tag-item:hover {\n  background-color: #e9ecef;\n}\n\n.tag-delete {\n  position: absolute;\n  right: 8px;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  background-color: #dc3545;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n  cursor: pointer;\n  opacity: 0;\n  transition: opacity 0.3s ease, background-color 0.3s ease;\n}\n\n.tag-item:hover .tag-delete {\n  opacity: 1;\n}\n\n.tag-delete:hover {\n  background-color: #c82333;\n}\n\n.tags-list {\n  margin-top: 12px;\n}\n\n.tag-context-menu {\n  position: fixed; /* Changed from absolute to fixed */\n  background: white;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  padding: 8px 0;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n  z-index: 10001;\n  min-width: 120px;\n}\n\n.context-menu-item {\n  padding: 8px 16px;\n  cursor: pointer;\n  transition: background-color 0.2s ease;\n}\n\n.context-menu-item:hover {\n  background-color: #f5f5f5;\n}\n\n.context-menu-item.delete-tag {\n  color: #dc3545;\n}\n\n.context-menu-item.delete-tag:hover {\n  background-color: #dc3545;\n  color: white;\n}\n\n.notification {\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n  background-color: #333;\n  color: white;\n  padding: 15px 20px;\n  border-radius: 5px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);\n  transform: translateX(400px);\n  transition: transform 0.3s ease;\n  z-index: 10000;\n  max-width: 300px;\n}\n\n.notification.show {\n  transform: translateX(0);\n}\n`, \"\",{\"version\":3,\"sources\":[\"webpack://./src/styles.css\"],\"names\":[],\"mappings\":\"AAAA;EACE,aAAa;EACb,YAAY;EACZ,8BAA8B;EAC9B,qBAAqB;AACvB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,wBAAwB,EAAE,wBAAwB;EAClD,iBAAiB;EACjB,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,SAAS;EACT,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;EACE,mBAAmB;EACnB,0BAA0B;EAC1B,qBAAqB;EACrB,eAAe;EACf,WAAW;AACb;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,iBAAiB;EACjB,kBAAkB;EAClB,uBAAuB;EACvB,6BAA6B;AAC/B;;AAEA;EACE,aAAa;EACb,SAAS;EACT,uBAAuB;EACvB,mBAAmB;EACnB,WAAW;EACX,iBAAiB,EAAE,qBAAqB;EACxC,iBAAiB,EAAE,gCAAgC;AACrD;;AAEA;EACE,cAAc,EAAE,qCAAqC;EACrD,eAAe,EAAE,iCAAiC;EAClD,uBAAuB,EAAE,0BAA0B;EACnD,mBAAmB;AACrB;;AAEA;EACE,2BAA2B;EAC3B,0CAA0C;AAC5C;;AAEA,0CAA0C;AAC1C;EACE,uBAAuB;AACzB;;AAEA;EACE,eAAe;EACf,sBAAsB;EACtB,uBAAuB;EACvB,gBAAgB;AAClB;;AAEA,0DAA0D;AAC1D;EACE,eAAe;EACf,MAAM;EACN,OAAO;EACP,WAAW;EACX,YAAY;EACZ,0CAA0C,EAAE,oBAAoB;EAChE,aAAa;EACb,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,UAAU;EACV,kBAAkB;EAClB,mDAAmD;AACrD;;AAEA;EACE,UAAU;EACV,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,cAAc;EACd,eAAe;EACf,qBAAqB;EACrB,+BAA+B;AACjC;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,cAAc;EACd,yCAAyC;EACzC,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,WAAW;EACX,oCAAoC;EACpC,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,eAAe;EACf,eAAe;EACf,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,2DAA2D;EAC3D,UAAU;EACV,qBAAqB;EACrB;8BAC4B;AAC9B;;AAEA;EACE,UAAU;EACV,mBAAmB;AACrB;;AAEA;EACE,uBAAuB;EACvB,qBAAqB;AACvB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE;IACE,YAAY;IACZ,aAAa;EACf;;EAEA;IACE,SAAS;EACX;;EAEA;IACE,SAAS;EACX;;EAEA;IACE,WAAW;IACX,YAAY;IACZ,eAAe;IACf,SAAS;IACT,WAAW;EACb;AACF;;AAEA;EACE;IACE,sBAAsB;IACtB,mBAAmB;EACrB;;EAEA;IACE,sBAAsB;IACtB,eAAe;EACjB;AACF;;AAEA;EACE,kCAAkC;EAClC,aAAa;EACb,eAAe;EACf,YAAY;EACZ,eAAe;AACjB;;AAEA;;EAEE,yBAAyB;AAC3B;;AAEA;EACE,kBAAkB;EAClB,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,yBAAyB;EACzB,gBAAgB;EAChB,+CAA+C;EAC/C,UAAU;AACZ;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,qBAAqB;EACrB,cAAc;AAChB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;EACd,kBAAkB;EAClB,eAAe;EACf,iCAAiC;EACjC,iBAAiB;AACnB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,WAAW;EACX,sBAAsB;EACtB,aAAa;AACf;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,cAAc;AAChB;;AAEA,+CAA+C;AAC/C;EACE,4EAA4E;EAC5E,gBAAgB;EAChB,UAAU;EACV,yBAAyB;EACzB,qBAAqB;AACvB;;AAEA;EACE,UAAU;EACV,aAAa;EACb,gBAAgB;EAChB,oBAAoB;AACtB;;AAEA,0CAA0C;AAC1C;EACE,sCAAsC;AACxC;;AAEA,oCAAoC;AACpC;EACE,kDAAkD;EAClD,UAAU;EACV,4BAA4B;EAC5B,oBAAoB;AACtB;;AAEA;EACE,UAAU;EACV,wBAAwB;EACxB,oBAAoB;AACtB;;AAEA,kCAAkC;AAClC;EACE,sCAAsC;AACxC;;AAEA,yCAAyC;AACzC;EACE,gCAAgC;AAClC;;AAEA;EACE,qBAAqB;AACvB;;AAEA,+DAA+D;AAC/D;EACE,yBAAyB;EACzB,wCAAwC;AAC1C;;AAEA;EACE,yBAAyB;AAC3B;;AAEA,uCAAuC;AACvC;EACE,yBAAyB;EACzB,8BAA8B;EAC9B,kBAAkB,EAAE,yCAAyC;EAC7D,iBAAiB;EACjB,cAAc;AAChB;;AAEA,+BAA+B;AAC/B;EACE,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA,iCAAiC;AACjC;EACE,WAAW;EACX,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,UAAU;EACV,WAAW;EACX,8BAA8B;EAC9B,UAAU;EACV,mBAAmB;EACnB,4CAA4C;EAC5C,yBAAyB;AAC3B;;AAEA;EACE,UAAU;EACV,YAAY;EACZ,aAAa;EACb,+BAA+B;AACjC;;AAEA;EACE;IACE,sBAAsB;IACtB,YAAY;EACd;EACA;IACE,sBAAsB;IACtB,UAAU;EACZ;AACF;;AAEA,6BAA6B;AAC7B;;;;;;;;;;;;;GAaG;;AAEH;EACE,kBAAkB;EAClB,WAAW;EACX,SAAS;EACT,YAAY;EACZ,eAAe;EACf,qCAAqC,EAAE,sBAAsB;EAC7D,2BAA2B,EAAE,2CAA2C;EACxE,kBAAkB;EAClB,aAAa;EACb,yCAAyC;EACzC,+BAA+B;EAC/B,gBAAgB;EAChB,0CAA0C;AAC5C;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,SAAS;EACT,YAAY;EACZ,eAAe;EACf,qCAAqC,EAAE,sBAAsB;EAC7D,2BAA2B,EAAE,2CAA2C;EACxE,kBAAkB;EAClB,aAAa;EACb,yCAAyC;EACzC,+BAA+B;EAC/B,gBAAgB;EAChB,0CAA0C;AAC5C;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,cAAc;EACd,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,sBAAsB;EACtB,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,WAAW;EACX,gBAAgB;AAClB;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,YAAY;EACZ,iBAAiB;EACjB,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;EACf,eAAe;EACf,iCAAiC;AACnC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,0BAA0B;AAC5B;;AAEA;EACE,aAAa;EACb,eAAe;EACf,QAAQ;AACV;;AAEA;EACE,yBAAyB;EACzB,gBAAgB;EAChB,kBAAkB;EAClB,eAAe;AACjB;;AAEA,sBAAsB;AACtB;EACE,uBAAuB;EACvB,aAAa;EACb,eAAe;EACf,YAAY;EACZ,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,QAAQ;EACR,yBAAyB;EACzB,gBAAgB;EAChB,+CAA+C;EAC/C,UAAU;EACV,aAAa;EACb,kBAAkB;EAClB,UAAU;EACV,4BAA4B;EAC5B,kDAAkD;AACpD;;AAEA;EACE,cAAc;EACd,UAAU;EACV,wBAAwB;AAC1B;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,QAAQ;AACV;;AAEA;EACE,OAAO;EACP,YAAY;EACZ,sBAAsB;EACtB,kBAAkB;AACpB;;AAEA;;EAEE,WAAW;EACX,YAAY;EACZ,sBAAsB;EACtB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,YAAY;EACZ,iBAAiB;EACjB,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,yBAAyB;EACzB,sBAAsB;EACtB,iBAAiB;EACjB,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,aAAa;AACf;;AAEA,gCAAgC;AAChC;EACE,wBAAwB;AAC1B;AACA;EACE,eAAe;EACf,MAAM;EACN,OAAO;EACP,WAAW;EACX,YAAY;EACZ,qCAAqC,EAAE,iCAAiC;EACxE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,UAAU;EACV,kBAAkB;EAClB,mDAAmD;EACnD,aAAa;EACb;;GAEC,EAAE,mDAAmD;AACxD;;AAEA;EACE,UAAU;EACV,mBAAmB;AACrB;;AAEA,mCAAmC;AACnC;EACE,kBAAkB;EAClB,eAAe;EACf,gBAAgB;EAChB,iBAAiB;EACjB,kBAAkB;EAClB,gBAAgB;EAChB,0CAA0C;AAC5C;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,mBAAmB;EACnB,cAAc;AAChB;;AAEA,kBAAkB;AAClB;EACE,kBAAkB;EAClB,WAAW;EACX,SAAS;EACT,YAAY;EACZ,eAAe;EACf,qCAAqC;EACrC,kBAAkB;EAClB,aAAa;EACb,yCAAyC;EACzC,+BAA+B;EAC/B,gBAAgB;AAClB;;AAEA,yBAAyB;AACzB;EACE,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,cAAc;EACd,gBAAgB;EAChB,kBAAkB;EAClB,WAAW;AACb;;AAEA;;EAEE,WAAW;EACX,iBAAiB;EACjB,sBAAsB;EACtB,kBAAkB;EAClB,eAAe;EACf,sBAAsB,EAAE,yCAAyC;AACnE;;AAEA,oDAAoD;AACpD;EACE,eAAe;EACf,sBAAsB;AACxB;;AAEA,+CAA+C;AAC/C;EACE,kBAAkB;EAClB,WAAW;AACb;;AAEA,iBAAiB;AACjB;EACE,kBAAkB;EAClB,SAAS;EACT,WAAW;EACX,oCAAoC;EACpC,YAAY;EACZ,WAAW;EACX,YAAY;EACZ,eAAe;EACf,eAAe;EACf,iBAAiB;EACjB,kBAAkB;EAClB,kBAAkB;EAClB,yBAAyB;EACzB,WAAW;AACb;;AAEA;EACE,iBAAiB;EACjB,qBAAqB;AACvB;;AAEA,gBAAgB;AAChB;EACE,gBAAgB;EAChB,iBAAiB;EACjB,0BAA0B;AAC5B;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,QAAQ;AACV;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,QAAQ;EACR,iBAAiB;EACjB,mBAAmB;EACnB,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,mBAAmB;EACnB,cAAc;AAChB;;AAEA;EACE,mBAAmB;EACnB,cAAc;AAChB;;AAEA;EACE,mBAAmB;EACnB,cAAc;AAChB;;AAEA,gBAAgB;AAChB;EACE,WAAW;EACX,kBAAkB;EAClB,mBAAmB;EACnB,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,eAAe;EACf,eAAe;EACf,gBAAgB;EAChB,gBAAgB;EAChB,sCAAsC;AACxC;;AAEA;EACE,mBAAmB;AACrB;;AAEA,aAAa;AACb;EACE,cAAc;EACd,eAAe;EACf,WAAW;EACX,eAAe;AACjB;;AAEA,2BAA2B;AAC3B;EACE;IACE,gBAAgB;IAChB,WAAW;IACX,gBAAgB;IAChB,eAAe;EACjB;;EAEA;IACE,aAAa;IACb,sBAAsB;IACtB,iBAAiB;IACjB,aAAa;EACf;;EAEA;IACE,OAAO;IACP,mBAAmB;IACnB,gBAAgB;EAClB;AACF;;AAEA,8CAA8C;AAC9C;EACE,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,WAAW;AACb;;AAEA;;EAEE,WAAW;EACX,sBAAsB;AACxB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,OAAO;EACP,QAAQ;EACR,iBAAiB;EACjB,gBAAgB;EAChB,iBAAiB;EACjB,sBAAsB;EACtB,gBAAgB;EAChB,0BAA0B;EAC1B,wCAAwC;EACxC,aAAa;EACb,aAAa;AACf;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,iBAAiB;EACjB,eAAe;EACf,iCAAiC;AACnC;;AAEA;;EAEE,yBAAyB;AAC3B;;AAEA;EACE,cAAc;EACd,gBAAgB;AAClB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,6BAA6B;EAC7B,gCAAgC;EAChC,YAAY;AACd;;AAEA;EACE,cAAc;EACd,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,SAAS;EACT,uBAAuB;AACzB;;AAEA;EACE,cAAc;EACd,yCAAyC;EACzC,kBAAkB;EAClB,qDAAqD;EACrD,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,yBAAyB,EAAE,0CAA0C;EACrE,eAAe;EACf,yBAAyB;EACzB,kBAAkB;EAClB,yBAAyB;EACzB,kBAAkB;AACpB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,kBAAkB;EAClB,UAAU;EACV,QAAQ;EACR,2BAA2B;EAC3B,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,yBAAyB;EACzB,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,eAAe;EACf,eAAe;EACf,UAAU;EACV,yDAAyD;AAC3D;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,eAAe,EAAE,mCAAmC;EACpD,iBAAiB;EACjB,sBAAsB;EACtB,kBAAkB;EAClB,cAAc;EACd,yCAAyC;EACzC,cAAc;EACd,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;EACjB,eAAe;EACf,sCAAsC;AACxC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,yBAAyB;EACzB,YAAY;AACd;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,WAAW;EACX,sBAAsB;EACtB,YAAY;EACZ,kBAAkB;EAClB,kBAAkB;EAClB,yCAAyC;EACzC,4BAA4B;EAC5B,+BAA+B;EAC/B,cAAc;EACd,gBAAgB;AAClB;;AAEA;EACE,wBAAwB;AAC1B\",\"sourcesContent\":[\"#header {\\n  display: flex;\\n  margin: 24px;\\n  justify-content: space-between;\\n  font-family: Garamond;\\n}\\n\\n#maintitle {\\n  font-size: 36px;\\n}\\n\\n#maincontainer {\\n  width: calc(100% - 72px); /* Account for margins */\\n  overflow: visible;\\n  box-sizing: border-box;\\n}\\n\\n#headerright {\\n  display: flex;\\n  gap: 32px;\\n  align-items: center;\\n}\\n\\n.folder-section {\\n  margin-bottom: 60px;\\n  overflow: visible;\\n}\\n\\n.folder-section h2 {\\n  margin-bottom: 24px;\\n  text-transform: capitalize;\\n  font-family: Garamond;\\n  font-size: 24px;\\n  color: #333;\\n}\\n\\n.image-grid {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 24px;\\n  overflow: visible;\\n  padding-right: 1px;\\n  /* min-height: 100vh; */\\n  /* height: auto !important; */\\n}\\n\\n.image-row {\\n  display: flex;\\n  gap: 24px;\\n  align-items: flex-start;\\n  margin-bottom: 24px;\\n  width: 100%;\\n  flex-wrap: nowrap; /* Prevent wrapping */\\n  overflow: visible; /* Ensure nothing gets cut off */\\n}\\n\\n.image-row img {\\n  flex-shrink: 1; /* Allow images to shrink if needed */\\n  max-width: 100%; /* Never exceed container width */\\n  height: auto !important; /* Maintain aspect ratio */\\n  object-fit: contain;\\n}\\n\\n.image-row img:hover {\\n  transform: translateY(-2px);\\n  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);\\n}\\n\\n/* Special styling for single image rows */\\n.single-image-row {\\n  justify-content: center;\\n}\\n\\n.single-image-row img {\\n  max-width: 100%;\\n  width: auto !important;\\n  height: auto !important;\\n  max-height: 60vh;\\n}\\n\\n/* Lightbox styling with gray background and transitions */\\n.lightbox {\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n  width: 100%;\\n  height: 100%;\\n  background-color: rgba(128, 128, 128, 0.9); /* Gray background */\\n  z-index: 1000;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  opacity: 0;\\n  visibility: hidden;\\n  transition: opacity 0.3s ease, visibility 0.3s ease;\\n}\\n\\n.lightbox.active {\\n  opacity: 1;\\n  visibility: visible;\\n}\\n\\n.lightbox-content {\\n  position: relative;\\n  max-width: 90%;\\n  max-height: 90%;\\n  transform: scale(0.9);\\n  transition: transform 0.3s ease;\\n}\\n\\n.lightbox.active .lightbox-content {\\n  transform: scale(1);\\n}\\n\\n.lightbox-image {\\n  max-width: 100%;\\n  max-height: 90vh;\\n  display: block;\\n  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);\\n  border-radius: 4px;\\n}\\n\\n.lightbox-close {\\n  position: absolute;\\n  top: 20px;\\n  right: 20px;\\n  background: rgba(255, 255, 255, 0.9);\\n  color: #333;\\n  border: none;\\n  border-radius: 50%;\\n  width: 40px;\\n  height: 40px;\\n  font-size: 24px;\\n  cursor: pointer;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  transition: background-color 0.2s ease, transform 0.2s ease;\\n  opacity: 0;\\n  transform: scale(0.8);\\n  transition: opacity 0.3s ease 0.2s, transform 0.3s ease 0.2s,\\n    background-color 0.2s ease;\\n}\\n\\n.lightbox.active .lightbox-close {\\n  opacity: 1;\\n  transform: scale(1);\\n}\\n\\n.lightbox-close:hover {\\n  background-color: white;\\n  transform: scale(1.1);\\n}\\n\\nbody.lightbox-open {\\n  overflow: hidden;\\n}\\n\\n@media (max-width: 768px) {\\n  #maincontainer {\\n    margin: 16px;\\n    padding: 16px;\\n  }\\n\\n  .image-grid {\\n    gap: 16px;\\n  }\\n\\n  .image-row {\\n    gap: 16px;\\n  }\\n\\n  .lightbox-close {\\n    width: 36px;\\n    height: 36px;\\n    font-size: 20px;\\n    top: 10px;\\n    right: 10px;\\n  }\\n}\\n\\n@media (max-width: 600px) {\\n  .image-row {\\n    flex-direction: column;\\n    align-items: center;\\n  }\\n\\n  .image-row img {\\n    width: 100% !important;\\n    max-width: 100%;\\n  }\\n}\\n\\n#categoryButton {\\n  background-color: hsl(0, 0%, 100%);\\n  padding: 16px;\\n  font-size: 16px;\\n  border: none;\\n  cursor: pointer;\\n}\\n\\n#categoryButton:hover,\\n#categoryButton:focus {\\n  background-color: #aeb2b4;\\n}\\n\\n#filter {\\n  position: relative;\\n  display: inline-block;\\n}\\n\\n#dropdown {\\n  display: none;\\n  position: absolute;\\n  background-color: #f1f1f1;\\n  min-width: 160px;\\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\\n  z-index: 1;\\n}\\n\\n#dropdown a {\\n  color: black;\\n  padding: 12px 16px;\\n  text-decoration: none;\\n  display: block;\\n}\\n\\n#dropdown a:hover {\\n  background-color: #ddd;\\n}\\n\\n#dropdown.show {\\n  display: block;\\n}\\n\\n.dropdown-item {\\n  display: block;\\n  padding: 10px 16px;\\n  cursor: pointer;\\n  transition: background-color 0.2s;\\n  user-select: none;\\n}\\n\\n.dropdown-item:hover {\\n  background-color: #ddd;\\n}\\n\\n.dropdown-separator {\\n  height: 1px;\\n  background-color: #ccc;\\n  margin: 5px 0;\\n}\\n\\n.category-checkbox {\\n  margin-right: 8px;\\n}\\n\\n#dropdown.show {\\n  display: block;\\n}\\n\\n/* Add smooth transitions for folder sections */\\n.folder-section {\\n  transition: opacity 0.4s ease, max-height 0.6s ease, margin-bottom 0.4s ease;\\n  overflow: hidden;\\n  opacity: 1;\\n  /* max-height: 2000px;  */\\n  transform-origin: top;\\n}\\n\\n.folder-section.hidden {\\n  opacity: 0;\\n  max-height: 0;\\n  margin-bottom: 0;\\n  pointer-events: none;\\n}\\n\\n/* Make filter button transitions smooth */\\n#categoryButton {\\n  transition: background-color 0.2s ease;\\n}\\n\\n/* Smooth transitions for dropdown */\\n#dropdown {\\n  transition: opacity 0.3s ease, transform 0.3s ease;\\n  opacity: 0;\\n  transform: translateY(-10px);\\n  pointer-events: none;\\n}\\n\\n#dropdown.show {\\n  opacity: 1;\\n  transform: translateY(0);\\n  pointer-events: auto;\\n}\\n\\n/* Smoother checkbox transitions */\\n.dropdown-item {\\n  transition: background-color 0.2s ease;\\n}\\n\\n/* Add a slight animation to checkboxes */\\n.category-checkbox {\\n  transition: transform 0.15s ease;\\n}\\n\\n.category-checkbox:checked {\\n  transform: scale(1.1);\\n}\\n\\n/* Add a nice transition when hovering over the filter button */\\n#categoryButton:hover {\\n  background-color: #e9e9e9;\\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\\n}\\n\\n#categoryButton:active {\\n  background-color: #d5d5d5;\\n}\\n\\n/* Style for when filtering is active */\\n#categoryButton.filtering-active {\\n  background-color: #e6f0ff;\\n  border-left: 3px solid #4285f4;\\n  padding-left: 13px; /* Adjust padding to account for border */\\n  font-weight: bold;\\n  color: #4285f4;\\n}\\n\\n/* Checkbox container styling */\\n.dropdown-item {\\n  position: relative;\\n  overflow: hidden;\\n}\\n\\n/* Ripple effect for checkboxes */\\n.dropdown-item::after {\\n  content: \\\"\\\";\\n  position: absolute;\\n  top: 50%;\\n  left: 50%;\\n  width: 5px;\\n  height: 5px;\\n  background: rgba(0, 0, 0, 0.1);\\n  opacity: 0;\\n  border-radius: 100%;\\n  transform: scale(1, 1) translate(-50%, -50%);\\n  transform-origin: 50% 50%;\\n}\\n\\n.dropdown-item:active::after {\\n  opacity: 1;\\n  width: 200px;\\n  height: 200px;\\n  animation: ripple 0.6s ease-out;\\n}\\n\\n@keyframes ripple {\\n  0% {\\n    transform: scale(0, 0);\\n    opacity: 0.5;\\n  }\\n  100% {\\n    transform: scale(1, 1);\\n    opacity: 0;\\n  }\\n}\\n\\n/* Tagging Interface Styles */\\n/* .tagging-panel {\\n  position: absolute;\\n  top: 20px;\\n  left: 20px;\\n  background: white;\\n  padding: 16px;\\n  border-radius: 8px;\\n  width: 300px;\\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);\\n  z-index: 1001;\\n  transition: transform 0.3s ease, opacity 0.3s ease;\\n  transform: translateX(-20px);\\n  opacity: 0;\\n} */\\n\\n.tagging-panel {\\n  position: absolute;\\n  right: 20px;\\n  top: 20px;\\n  width: 300px;\\n  max-width: 90vw;\\n  background: rgba(255, 255, 255, 0.95); /* Translucent white */\\n  backdrop-filter: blur(10px); /* Blur background for better readability */\\n  border-radius: 8px;\\n  padding: 20px;\\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);\\n  max-height: calc(100vh - 100px);\\n  overflow-y: auto;\\n  border: 1px solid rgba(255, 255, 255, 0.5);\\n}\\n\\n.lightbox.active .tagging-panel {\\n  position: absolute;\\n  right: 20px;\\n  top: 20px;\\n  width: 300px;\\n  max-width: 90vw;\\n  background: rgba(255, 255, 255, 0.75); /* Translucent white */\\n  backdrop-filter: blur(10px); /* Blur background for better readability */\\n  border-radius: 8px;\\n  padding: 20px;\\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);\\n  max-height: calc(100vh - 100px);\\n  overflow-y: auto;\\n  border: 1px solid rgba(255, 255, 255, 0.5);\\n}\\n\\n.tag-section {\\n  margin-bottom: 12px;\\n}\\n\\n.tag-section label {\\n  display: block;\\n  margin-bottom: 4px;\\n  font-weight: 500;\\n}\\n\\n.tag-section input {\\n  width: 100%;\\n  padding: 8px;\\n  border: 1px solid #ddd;\\n  border-radius: 4px;\\n  font-size: 14px;\\n}\\n\\n.tag-hint {\\n  font-size: 12px;\\n  color: #666;\\n  margin-left: 4px;\\n}\\n\\n.tag-save-button {\\n  background-color: #4285f4;\\n  color: white;\\n  border: none;\\n  padding: 8px 16px;\\n  border-radius: 4px;\\n  font-weight: 500;\\n  cursor: pointer;\\n  margin-top: 8px;\\n  transition: background-color 0.2s;\\n}\\n\\n.tag-save-button:hover {\\n  background-color: #2b68d9;\\n}\\n\\n.tag-display {\\n  margin-top: 16px;\\n  padding-top: 12px;\\n  border-top: 1px solid #eee;\\n}\\n\\n.tags-list {\\n  display: flex;\\n  flex-wrap: wrap;\\n  gap: 8px;\\n}\\n\\n.tag-item {\\n  background-color: #e6f0ff;\\n  padding: 4px 8px;\\n  border-radius: 4px;\\n  font-size: 13px;\\n}\\n\\n/* Tag filter styles */\\n#tagFilterButton {\\n  background-color: white;\\n  padding: 16px;\\n  font-size: 16px;\\n  border: none;\\n  cursor: pointer;\\n  margin-left: 8px;\\n}\\n\\n#tagFilterButton:hover {\\n  background-color: #e9e9e9;\\n}\\n\\n#tagDropdown {\\n  display: none;\\n  position: absolute;\\n  right: 0;\\n  background-color: #f1f1f1;\\n  min-width: 280px;\\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\\n  z-index: 1;\\n  padding: 16px;\\n  border-radius: 4px;\\n  opacity: 0;\\n  transform: translateY(-10px);\\n  transition: opacity 0.3s ease, transform 0.3s ease;\\n}\\n\\n#tagDropdown.show {\\n  display: block;\\n  opacity: 1;\\n  transform: translateY(0);\\n}\\n\\n.tag-filter-section {\\n  margin-bottom: 16px;\\n}\\n\\n.tag-filter-section h4 {\\n  margin-top: 0;\\n  margin-bottom: 8px;\\n}\\n\\n.date-range-inputs {\\n  display: flex;\\n  gap: 8px;\\n}\\n\\n.date-range-inputs input {\\n  flex: 1;\\n  padding: 6px;\\n  border: 1px solid #ddd;\\n  border-radius: 4px;\\n}\\n\\n#locationFilter,\\n#subjectFilter {\\n  width: 100%;\\n  padding: 8px;\\n  border: 1px solid #ddd;\\n  border-radius: 4px;\\n}\\n\\n.filter-buttons {\\n  display: flex;\\n  justify-content: space-between;\\n}\\n\\n#applyTagFilters {\\n  background-color: #4285f4;\\n  color: white;\\n  border: none;\\n  padding: 8px 16px;\\n  border-radius: 4px;\\n  cursor: pointer;\\n}\\n\\n#clearTagFilters {\\n  background-color: #f1f1f1;\\n  border: 1px solid #ddd;\\n  padding: 8px 16px;\\n  border-radius: 4px;\\n  cursor: pointer;\\n}\\n\\n.folder-section.hidden-by-tag {\\n  display: none;\\n}\\n\\n/* Add individual image hiding */\\n.gallery-image.tag-filtered-out {\\n  display: none !important;\\n}\\n.lightbox {\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n  width: 100%;\\n  height: 100%;\\n  background-color: rgba(0, 0, 0, 0.85); /* Translucent black background */\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  opacity: 0;\\n  visibility: hidden;\\n  transition: opacity 0.3s ease, visibility 0.3s ease;\\n  z-index: 9999;\\n  backdrop-filter: blur(\\n    5px\\n  ); /* Optional: adds a blur effect to the background */\\n}\\n\\n.lightbox.active {\\n  opacity: 1;\\n  visibility: visible;\\n}\\n\\n/* Lightbox content - keep opaque */\\n.lightbox-content {\\n  position: relative;\\n  max-width: 90vw;\\n  max-height: 90vh;\\n  background: white;\\n  border-radius: 8px;\\n  overflow: hidden;\\n  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);\\n}\\n\\n.lightbox-image {\\n  max-width: 100%;\\n  max-height: 90vh;\\n  object-fit: contain;\\n  display: block;\\n}\\n\\n/* Tagging panel */\\n.tagging-panel {\\n  position: absolute;\\n  right: 20px;\\n  top: 20px;\\n  width: 300px;\\n  max-width: 90vw;\\n  background: rgba(255, 255, 255, 0.98);\\n  border-radius: 8px;\\n  padding: 20px;\\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);\\n  max-height: calc(100vh - 100px);\\n  overflow-y: auto;\\n}\\n\\n/* Fix date input field */\\n.tag-section {\\n  margin-bottom: 16px;\\n  width: 100%;\\n}\\n\\n.tag-section label {\\n  display: block;\\n  font-weight: 600;\\n  margin-bottom: 4px;\\n  color: #333;\\n}\\n\\n.tag-section input[type=\\\"date\\\"],\\n.tag-section input[type=\\\"text\\\"] {\\n  width: 100%;\\n  padding: 8px 12px;\\n  border: 1px solid #ddd;\\n  border-radius: 4px;\\n  font-size: 14px;\\n  box-sizing: border-box; /* Ensures padding is included in width */\\n}\\n\\n/* Specifically ensure date input doesn't overflow */\\n.tag-date {\\n  max-width: 100%;\\n  box-sizing: border-box;\\n}\\n\\n/* Wrapper for inputs to contain autocomplete */\\n.input-wrapper {\\n  position: relative;\\n  width: 100%;\\n}\\n\\n/* Close button */\\n.lightbox-close {\\n  position: absolute;\\n  top: 20px;\\n  right: 20px;\\n  background: rgba(255, 255, 255, 0.9);\\n  border: none;\\n  width: 40px;\\n  height: 40px;\\n  cursor: pointer;\\n  font-size: 24px;\\n  line-height: 40px;\\n  text-align: center;\\n  border-radius: 50%;\\n  transition: all 0.3s ease;\\n  z-index: 10;\\n}\\n\\n.lightbox-close:hover {\\n  background: white;\\n  transform: scale(1.1);\\n}\\n\\n/* Tag display */\\n.tag-display {\\n  margin-top: 20px;\\n  padding-top: 20px;\\n  border-top: 1px solid #eee;\\n}\\n\\n.tag-display p {\\n  color: #888;\\n  text-align: center;\\n  margin: 10px 0;\\n}\\n\\n.tags-list {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 8px;\\n}\\n\\n.tag-item {\\n  display: flex;\\n  align-items: center;\\n  gap: 8px;\\n  padding: 6px 12px;\\n  background: #f5f5f5;\\n  border-radius: 4px;\\n  font-size: 14px;\\n}\\n\\n.tag-item.tag-date {\\n  background: #e3f2fd;\\n  color: #1976d2;\\n}\\n\\n.tag-item.tag-location {\\n  background: #f3e5f5;\\n  color: #7b1fa2;\\n}\\n\\n.tag-item.tag-subjects {\\n  background: #e8f5e9;\\n  color: #2e7d32;\\n}\\n\\n/* Save button */\\n.tag-save-button {\\n  width: 100%;\\n  padding: 10px 16px;\\n  background: #007bff;\\n  color: white;\\n  border: none;\\n  border-radius: 4px;\\n  cursor: pointer;\\n  font-size: 16px;\\n  font-weight: 600;\\n  margin-top: 16px;\\n  transition: background-color 0.3s ease;\\n}\\n\\n.tag-save-button:hover {\\n  background: #0056b3;\\n}\\n\\n/* Tag hint */\\n.tag-hint {\\n  display: block;\\n  font-size: 12px;\\n  color: #666;\\n  margin-top: 4px;\\n}\\n\\n/* Responsive adjustments */\\n@media (max-width: 768px) {\\n  .tagging-panel {\\n    position: static;\\n    width: 100%;\\n    margin-top: 20px;\\n    max-width: none;\\n  }\\n\\n  .lightbox-content {\\n    display: flex;\\n    flex-direction: column;\\n    max-height: 100vh;\\n    height: 100vh;\\n  }\\n\\n  .lightbox-image {\\n    flex: 1;\\n    object-fit: contain;\\n    max-height: 50vh;\\n  }\\n}\\n\\n/* Prevent body scroll when lightbox is open */\\nbody.lightbox-open {\\n  overflow: hidden;\\n}\\n\\n.input-wrapper {\\n  position: relative;\\n  width: 100%;\\n}\\n\\n.tag-location,\\n.tag-subject {\\n  width: 100%;\\n  box-sizing: border-box;\\n}\\n\\n.autocomplete-wrapper {\\n  position: relative;\\n}\\n\\n.autocomplete-dropdown {\\n  position: absolute;\\n  top: 100%;\\n  left: 0;\\n  right: 0;\\n  max-height: 200px;\\n  overflow-y: auto;\\n  background: white;\\n  border: 1px solid #ddd;\\n  border-top: none;\\n  border-radius: 0 0 4px 4px;\\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\\n  z-index: 1000;\\n  display: none;\\n}\\n\\n.autocomplete-dropdown.show {\\n  display: block;\\n}\\n\\n.autocomplete-item {\\n  padding: 8px 12px;\\n  cursor: pointer;\\n  transition: background-color 0.2s;\\n}\\n\\n.autocomplete-item:hover,\\n.autocomplete-item.active {\\n  background-color: #f5f5f5;\\n}\\n\\n.autocomplete-item strong {\\n  color: #007bff;\\n  font-weight: 600;\\n}\\n\\n.lightbox .tag-section label {\\n  display: block;\\n}\\n\\n.lightbox .tag-section input {\\n  margin-top: 4px;\\n}\\n\\n.image-container {\\n  position: relative !important;\\n  display: inline-block !important;\\n  height: 100%;\\n}\\n\\n.image-container img {\\n  display: block;\\n  object-fit: cover;\\n}\\n\\n.image-row {\\n  display: flex;\\n  gap: 24px;\\n  align-items: flex-start;\\n}\\n\\n.image-row img {\\n  flex: 0 0 auto;\\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\\n  border-radius: 4px;\\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\\n  object-fit: cover;\\n  cursor: pointer;\\n}\\n\\n.tag-item {\\n  position: relative;\\n  padding: 4px 32px 4px 8px; /* Added padding-right for delete button */\\n  cursor: pointer;\\n  transition: all 0.3s ease;\\n  margin-bottom: 4px;\\n  background-color: #f8f9fa;\\n  border-radius: 4px;\\n}\\n\\n.tag-item:hover {\\n  background-color: #e9ecef;\\n}\\n\\n.tag-delete {\\n  position: absolute;\\n  right: 8px;\\n  top: 50%;\\n  transform: translateY(-50%);\\n  width: 20px;\\n  height: 20px;\\n  border-radius: 50%;\\n  background-color: #dc3545;\\n  color: white;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  font-size: 14px;\\n  cursor: pointer;\\n  opacity: 0;\\n  transition: opacity 0.3s ease, background-color 0.3s ease;\\n}\\n\\n.tag-item:hover .tag-delete {\\n  opacity: 1;\\n}\\n\\n.tag-delete:hover {\\n  background-color: #c82333;\\n}\\n\\n.tags-list {\\n  margin-top: 12px;\\n}\\n\\n.tag-context-menu {\\n  position: fixed; /* Changed from absolute to fixed */\\n  background: white;\\n  border: 1px solid #ddd;\\n  border-radius: 4px;\\n  padding: 8px 0;\\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\\n  z-index: 10001;\\n  min-width: 120px;\\n}\\n\\n.context-menu-item {\\n  padding: 8px 16px;\\n  cursor: pointer;\\n  transition: background-color 0.2s ease;\\n}\\n\\n.context-menu-item:hover {\\n  background-color: #f5f5f5;\\n}\\n\\n.context-menu-item.delete-tag {\\n  color: #dc3545;\\n}\\n\\n.context-menu-item.delete-tag:hover {\\n  background-color: #dc3545;\\n  color: white;\\n}\\n\\n.notification {\\n  position: fixed;\\n  bottom: 20px;\\n  right: 20px;\\n  background-color: #333;\\n  color: white;\\n  padding: 15px 20px;\\n  border-radius: 5px;\\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);\\n  transform: translateX(400px);\\n  transition: transform 0.3s ease;\\n  z-index: 10000;\\n  max-width: 300px;\\n}\\n\\n.notification.show {\\n  transform: translateX(0);\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NyYy9zdHlsZXMuY3NzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCLDhCQUE4QjtBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0Esa0JBQWtCO0FBQ2xCLG1CQUFtQjtBQUNuQiwyQkFBMkI7QUFDM0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekMsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU8saUZBQWlGLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLHdCQUF3QixhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLHdCQUF3Qix5QkFBeUIsT0FBTyxLQUFLLHNCQUFzQix1QkFBdUIseUJBQXlCLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLFlBQVksTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sWUFBWSxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSx3QkFBd0IsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE1BQU0sT0FBTyxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsS0FBSyxNQUFNLEtBQUssS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxZQUFZLE1BQU0sWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sWUFBWSxNQUFNLFlBQVksT0FBTyxZQUFZLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxZQUFZLE1BQU0sWUFBWSxPQUFPLFlBQVksTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sWUFBWSxNQUFNLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLFlBQVksTUFBTSxZQUFZLGFBQWEseUJBQXlCLGFBQWEsV0FBVyxPQUFPLFlBQVksTUFBTSxZQUFZLGFBQWEsT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxLQUFLLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxXQUFXLEtBQUssTUFBTSxZQUFZLGtCQUFrQixNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLHdCQUF3Qix5QkFBeUIsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSx3QkFBd0IseUJBQXlCLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLFlBQVksTUFBTSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLE1BQU0sWUFBWSxNQUFNLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSx3QkFBd0IsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLGlCQUFpQixPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sWUFBWSxNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxZQUFZLE1BQU0sWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sWUFBWSxNQUFNLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLHdCQUF3QixPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksT0FBTyxZQUFZLE1BQU0sWUFBWSxXQUFXLE1BQU0sWUFBWSxNQUFNLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sWUFBWSxNQUFNLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sVUFBVSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsT0FBTyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLE1BQU0sWUFBWSxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLE1BQU0sVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxZ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QWlCLGtCQUFrQix3QkFBd0IsNEJBQTRCLG9CQUFvQixvQkFBb0IsZUFBZSw4REFBOEQsR0FBRyxpQ0FBaUMsZUFBZSxHQUFHLHVCQUF1Qiw4QkFBOEIsR0FBRyxnQkFBZ0IscUJBQXFCLEdBQUcsdUJBQXVCLHFCQUFxQiwwREFBMEQsMkJBQTJCLHVCQUF1QixtQkFBbUIsOENBQThDLG1CQUFtQixxQkFBcUIsR0FBRyx3QkFBd0Isc0JBQXNCLG9CQUFvQiwyQ0FBMkMsR0FBRyw4QkFBOEIsOEJBQThCLEdBQUcsbUNBQW1DLG1CQUFtQixHQUFHLHlDQUF5Qyw4QkFBOEIsaUJBQWlCLEdBQUcsbUJBQW1CLG9CQUFvQixpQkFBaUIsZ0JBQWdCLDJCQUEyQixpQkFBaUIsdUJBQXVCLHVCQUF1Qiw4Q0FBOEMsaUNBQWlDLG9DQUFvQyxtQkFBbUIscUJBQXFCLEdBQUcsd0JBQXdCLDZCQUE2QixHQUFHLHFCQUFxQjtBQUNud3lCO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9waG90b2dyYXBoeXNpdGUvLi9zcmMvc3R5bGVzLmNzcz9lOWFhIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAjaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAyNHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGZvbnQtZmFtaWx5OiBHYXJhbW9uZDtcbn1cblxuI21haW50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMzZweDtcbn1cblxuI21haW5jb250YWluZXIge1xuICB3aWR0aDogY2FsYygxMDAlIC0gNzJweCk7IC8qIEFjY291bnQgZm9yIG1hcmdpbnMgKi9cbiAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbiNoZWFkZXJyaWdodCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMzJweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmZvbGRlci1zZWN0aW9uIHtcbiAgbWFyZ2luLWJvdHRvbTogNjBweDtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG59XG5cbi5mb2xkZXItc2VjdGlvbiBoMiB7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBmb250LWZhbWlseTogR2FyYW1vbmQ7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6ICMzMzM7XG59XG5cbi5pbWFnZS1ncmlkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAyNHB4O1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgcGFkZGluZy1yaWdodDogMXB4O1xuICAvKiBtaW4taGVpZ2h0OiAxMDB2aDsgKi9cbiAgLyogaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7ICovXG59XG5cbi5pbWFnZS1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDI0cHg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICB3aWR0aDogMTAwJTtcbiAgZmxleC13cmFwOiBub3dyYXA7IC8qIFByZXZlbnQgd3JhcHBpbmcgKi9cbiAgb3ZlcmZsb3c6IHZpc2libGU7IC8qIEVuc3VyZSBub3RoaW5nIGdldHMgY3V0IG9mZiAqL1xufVxuXG4uaW1hZ2Utcm93IGltZyB7XG4gIGZsZXgtc2hyaW5rOiAxOyAvKiBBbGxvdyBpbWFnZXMgdG8gc2hyaW5rIGlmIG5lZWRlZCAqL1xuICBtYXgtd2lkdGg6IDEwMCU7IC8qIE5ldmVyIGV4Y2VlZCBjb250YWluZXIgd2lkdGggKi9cbiAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7IC8qIE1haW50YWluIGFzcGVjdCByYXRpbyAqL1xuICBvYmplY3QtZml0OiBjb250YWluO1xufVxuXG4uaW1hZ2Utcm93IGltZzpob3ZlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgYm94LXNoYWRvdzogMCA2cHggMTZweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xufVxuXG4vKiBTcGVjaWFsIHN0eWxpbmcgZm9yIHNpbmdsZSBpbWFnZSByb3dzICovXG4uc2luZ2xlLWltYWdlLXJvdyB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uc2luZ2xlLWltYWdlLXJvdyBpbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuICBtYXgtaGVpZ2h0OiA2MHZoO1xufVxuXG4vKiBMaWdodGJveCBzdHlsaW5nIHdpdGggZ3JheSBiYWNrZ3JvdW5kIGFuZCB0cmFuc2l0aW9ucyAqL1xuLmxpZ2h0Ym94IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC45KTsgLyogR3JheSBiYWNrZ3JvdW5kICovXG4gIHotaW5kZXg6IDEwMDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBvcGFjaXR5OiAwO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlLCB2aXNpYmlsaXR5IDAuM3MgZWFzZTtcbn1cblxuLmxpZ2h0Ym94LmFjdGl2ZSB7XG4gIG9wYWNpdHk6IDE7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbi5saWdodGJveC1jb250ZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXgtd2lkdGg6IDkwJTtcbiAgbWF4LWhlaWdodDogOTAlO1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XG59XG5cbi5saWdodGJveC5hY3RpdmUgLmxpZ2h0Ym94LWNvbnRlbnQge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xufVxuXG4ubGlnaHRib3gtaW1hZ2Uge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDkwdmg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3gtc2hhZG93OiAwIDhweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4ubGlnaHRib3gtY2xvc2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjBweDtcbiAgcmlnaHQ6IDIwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcbiAgY29sb3I6ICMzMzM7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBmb250LXNpemU6IDI0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLCB0cmFuc2Zvcm0gMC4ycyBlYXNlO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlIDAuMnMsIHRyYW5zZm9ybSAwLjNzIGVhc2UgMC4ycyxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZTtcbn1cblxuLmxpZ2h0Ym94LmFjdGl2ZSAubGlnaHRib3gtY2xvc2Uge1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xufVxuXG4ubGlnaHRib3gtY2xvc2U6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuXG5ib2R5LmxpZ2h0Ym94LW9wZW4ge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgI21haW5jb250YWluZXIge1xuICAgIG1hcmdpbjogMTZweDtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICB9XG5cbiAgLmltYWdlLWdyaWQge1xuICAgIGdhcDogMTZweDtcbiAgfVxuXG4gIC5pbWFnZS1yb3cge1xuICAgIGdhcDogMTZweDtcbiAgfVxuXG4gIC5saWdodGJveC1jbG9zZSB7XG4gICAgd2lkdGg6IDM2cHg7XG4gICAgaGVpZ2h0OiAzNnB4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB0b3A6IDEwcHg7XG4gICAgcmlnaHQ6IDEwcHg7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5pbWFnZS1yb3cge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4gIC5pbWFnZS1yb3cgaW1nIHtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgfVxufVxuXG4jY2F0ZWdvcnlCdXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDEwMCUpO1xuICBwYWRkaW5nOiAxNnB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4jY2F0ZWdvcnlCdXR0b246aG92ZXIsXG4jY2F0ZWdvcnlCdXR0b246Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWViMmI0O1xufVxuXG4jZmlsdGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbiNkcm9wZG93biB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbiAgbWluLXdpZHRoOiAxNjBweDtcbiAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIHotaW5kZXg6IDE7XG59XG5cbiNkcm9wZG93biBhIHtcbiAgY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nOiAxMnB4IDE2cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbiNkcm9wZG93biBhOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbn1cblxuI2Ryb3Bkb3duLnNob3cge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmRyb3Bkb3duLWl0ZW0ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMTBweCAxNnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycztcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi5kcm9wZG93bi1pdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbn1cblxuLmRyb3Bkb3duLXNlcGFyYXRvciB7XG4gIGhlaWdodDogMXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xuICBtYXJnaW46IDVweCAwO1xufVxuXG4uY2F0ZWdvcnktY2hlY2tib3gge1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cblxuI2Ryb3Bkb3duLnNob3cge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLyogQWRkIHNtb290aCB0cmFuc2l0aW9ucyBmb3IgZm9sZGVyIHNlY3Rpb25zICovXG4uZm9sZGVyLXNlY3Rpb24ge1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNHMgZWFzZSwgbWF4LWhlaWdodCAwLjZzIGVhc2UsIG1hcmdpbi1ib3R0b20gMC40cyBlYXNlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBvcGFjaXR5OiAxO1xuICAvKiBtYXgtaGVpZ2h0OiAyMDAwcHg7ICAqL1xuICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XG59XG5cbi5mb2xkZXItc2VjdGlvbi5oaWRkZW4ge1xuICBvcGFjaXR5OiAwO1xuICBtYXgtaGVpZ2h0OiAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLyogTWFrZSBmaWx0ZXIgYnV0dG9uIHRyYW5zaXRpb25zIHNtb290aCAqL1xuI2NhdGVnb3J5QnV0dG9uIHtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2U7XG59XG5cbi8qIFNtb290aCB0cmFuc2l0aW9ucyBmb3IgZHJvcGRvd24gKi9cbiNkcm9wZG93biB7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlLCB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuI2Ryb3Bkb3duLnNob3cge1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xufVxuXG4vKiBTbW9vdGhlciBjaGVja2JveCB0cmFuc2l0aW9ucyAqL1xuLmRyb3Bkb3duLWl0ZW0ge1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZTtcbn1cblxuLyogQWRkIGEgc2xpZ2h0IGFuaW1hdGlvbiB0byBjaGVja2JveGVzICovXG4uY2F0ZWdvcnktY2hlY2tib3gge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xNXMgZWFzZTtcbn1cblxuLmNhdGVnb3J5LWNoZWNrYm94OmNoZWNrZWQge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59XG5cbi8qIEFkZCBhIG5pY2UgdHJhbnNpdGlvbiB3aGVuIGhvdmVyaW5nIG92ZXIgdGhlIGZpbHRlciBidXR0b24gKi9cbiNjYXRlZ29yeUJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOWU5ZTk7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbiNjYXRlZ29yeUJ1dHRvbjphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDVkNWQ1O1xufVxuXG4vKiBTdHlsZSBmb3Igd2hlbiBmaWx0ZXJpbmcgaXMgYWN0aXZlICovXG4jY2F0ZWdvcnlCdXR0b24uZmlsdGVyaW5nLWFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNmYwZmY7XG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgIzQyODVmNDtcbiAgcGFkZGluZy1sZWZ0OiAxM3B4OyAvKiBBZGp1c3QgcGFkZGluZyB0byBhY2NvdW50IGZvciBib3JkZXIgKi9cbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjNDI4NWY0O1xufVxuXG4vKiBDaGVja2JveCBjb250YWluZXIgc3R5bGluZyAqL1xuLmRyb3Bkb3duLWl0ZW0ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi8qIFJpcHBsZSBlZmZlY3QgZm9yIGNoZWNrYm94ZXMgKi9cbi5kcm9wZG93bi1pdGVtOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgd2lkdGg6IDVweDtcbiAgaGVpZ2h0OiA1cHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgb3BhY2l0eTogMDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKSB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XG59XG5cbi5kcm9wZG93bi1pdGVtOmFjdGl2ZTo6YWZ0ZXIge1xuICBvcGFjaXR5OiAxO1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMjAwcHg7XG4gIGFuaW1hdGlvbjogcmlwcGxlIDAuNnMgZWFzZS1vdXQ7XG59XG5cbkBrZXlmcmFtZXMgcmlwcGxlIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCwgMCk7XG4gICAgb3BhY2l0eTogMC41O1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuXG4vKiBUYWdnaW5nIEludGVyZmFjZSBTdHlsZXMgKi9cbi8qIC50YWdnaW5nLXBhbmVsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDIwcHg7XG4gIGxlZnQ6IDIwcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBwYWRkaW5nOiAxNnB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHdpZHRoOiAzMDBweDtcbiAgYm94LXNoYWRvdzogMCA0cHggMTZweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICB6LWluZGV4OiAxMDAxO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLCBvcGFjaXR5IDAuM3MgZWFzZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMHB4KTtcbiAgb3BhY2l0eTogMDtcbn0gKi9cblxuLnRhZ2dpbmctcGFuZWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAyMHB4O1xuICB0b3A6IDIwcHg7XG4gIHdpZHRoOiAzMDBweDtcbiAgbWF4LXdpZHRoOiA5MHZ3O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTUpOyAvKiBUcmFuc2x1Y2VudCB3aGl0ZSAqL1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7IC8qIEJsdXIgYmFja2dyb3VuZCBmb3IgYmV0dGVyIHJlYWRhYmlsaXR5ICovXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgcGFkZGluZzogMjBweDtcbiAgYm94LXNoYWRvdzogMCA0cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxMDBweCk7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbn1cblxuLmxpZ2h0Ym94LmFjdGl2ZSAudGFnZ2luZy1wYW5lbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDIwcHg7XG4gIHRvcDogMjBweDtcbiAgd2lkdGg6IDMwMHB4O1xuICBtYXgtd2lkdGg6IDkwdnc7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSk7IC8qIFRyYW5zbHVjZW50IHdoaXRlICovXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTsgLyogQmx1ciBiYWNrZ3JvdW5kIGZvciBiZXR0ZXIgcmVhZGFiaWxpdHkgKi9cbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3gtc2hhZG93OiAwIDRweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDEwMHB4KTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xufVxuXG4udGFnLXNlY3Rpb24ge1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xufVxuXG4udGFnLXNlY3Rpb24gbGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4udGFnLXNlY3Rpb24gaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogOHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLnRhZy1oaW50IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzY2NjtcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbn1cblxuLnRhZy1zYXZlLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0Mjg1ZjQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiA4cHggMTZweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzO1xufVxuXG4udGFnLXNhdmUtYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJiNjhkOTtcbn1cblxuLnRhZy1kaXNwbGF5IHtcbiAgbWFyZ2luLXRvcDogMTZweDtcbiAgcGFkZGluZy10b3A6IDEycHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWVlO1xufVxuXG4udGFncy1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBnYXA6IDhweDtcbn1cblxuLnRhZy1pdGVtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZjBmZjtcbiAgcGFkZGluZzogNHB4IDhweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbi8qIFRhZyBmaWx0ZXIgc3R5bGVzICovXG4jdGFnRmlsdGVyQnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG59XG5cbiN0YWdGaWx0ZXJCdXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllOWU5O1xufVxuXG4jdGFnRHJvcGRvd24ge1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xuICBtaW4td2lkdGg6IDI4MHB4O1xuICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgei1pbmRleDogMTtcbiAgcGFkZGluZzogMTZweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZSwgdHJhbnNmb3JtIDAuM3MgZWFzZTtcbn1cblxuI3RhZ0Ryb3Bkb3duLnNob3cge1xuICBkaXNwbGF5OiBibG9jaztcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xufVxuXG4udGFnLWZpbHRlci1zZWN0aW9uIHtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cblxuLnRhZy1maWx0ZXItc2VjdGlvbiBoNCB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuLmRhdGUtcmFuZ2UtaW5wdXRzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiA4cHg7XG59XG5cbi5kYXRlLXJhbmdlLWlucHV0cyBpbnB1dCB7XG4gIGZsZXg6IDE7XG4gIHBhZGRpbmc6IDZweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4jbG9jYXRpb25GaWx0ZXIsXG4jc3ViamVjdEZpbHRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA4cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLmZpbHRlci1idXR0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4jYXBwbHlUYWdGaWx0ZXJzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQyODVmNDtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDhweCAxNnB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI2NsZWFyVGFnRmlsdGVycyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIHBhZGRpbmc6IDhweCAxNnB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmZvbGRlci1zZWN0aW9uLmhpZGRlbi1ieS10YWcge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4vKiBBZGQgaW5kaXZpZHVhbCBpbWFnZSBoaWRpbmcgKi9cbi5nYWxsZXJ5LWltYWdlLnRhZy1maWx0ZXJlZC1vdXQge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG4ubGlnaHRib3gge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg1KTsgLyogVHJhbnNsdWNlbnQgYmxhY2sgYmFja2dyb3VuZCAqL1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgb3BhY2l0eTogMDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZSwgdmlzaWJpbGl0eSAwLjNzIGVhc2U7XG4gIHotaW5kZXg6IDk5OTk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cihcbiAgICA1cHhcbiAgKTsgLyogT3B0aW9uYWw6IGFkZHMgYSBibHVyIGVmZmVjdCB0byB0aGUgYmFja2dyb3VuZCAqL1xufVxuXG4ubGlnaHRib3guYWN0aXZlIHtcbiAgb3BhY2l0eTogMTtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cblxuLyogTGlnaHRib3ggY29udGVudCAtIGtlZXAgb3BhcXVlICovXG4ubGlnaHRib3gtY29udGVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWF4LXdpZHRoOiA5MHZ3O1xuICBtYXgtaGVpZ2h0OiA5MHZoO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3gtc2hhZG93OiAwIDIwcHggNDBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG59XG5cbi5saWdodGJveC1pbWFnZSB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogOTB2aDtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi8qIFRhZ2dpbmcgcGFuZWwgKi9cbi50YWdnaW5nLXBhbmVsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMjBweDtcbiAgdG9wOiAyMHB4O1xuICB3aWR0aDogMzAwcHg7XG4gIG1heC13aWR0aDogOTB2dztcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjk4KTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3gtc2hhZG93OiAwIDRweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDEwMHB4KTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLyogRml4IGRhdGUgaW5wdXQgZmllbGQgKi9cbi50YWctc2VjdGlvbiB7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udGFnLXNlY3Rpb24gbGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICBjb2xvcjogIzMzMztcbn1cblxuLnRhZy1zZWN0aW9uIGlucHV0W3R5cGU9XCJkYXRlXCJdLFxuLnRhZy1zZWN0aW9uIGlucHV0W3R5cGU9XCJ0ZXh0XCJdIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDhweCAxMnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogRW5zdXJlcyBwYWRkaW5nIGlzIGluY2x1ZGVkIGluIHdpZHRoICovXG59XG5cbi8qIFNwZWNpZmljYWxseSBlbnN1cmUgZGF0ZSBpbnB1dCBkb2Vzbid0IG92ZXJmbG93ICovXG4udGFnLWRhdGUge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi8qIFdyYXBwZXIgZm9yIGlucHV0cyB0byBjb250YWluIGF1dG9jb21wbGV0ZSAqL1xuLmlucHV0LXdyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4vKiBDbG9zZSBidXR0b24gKi9cbi5saWdodGJveC1jbG9zZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyMHB4O1xuICByaWdodDogMjBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xuICBib3JkZXI6IG5vbmU7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBsaW5lLWhlaWdodDogNDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gIHotaW5kZXg6IDEwO1xufVxuXG4ubGlnaHRib3gtY2xvc2U6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuXG4vKiBUYWcgZGlzcGxheSAqL1xuLnRhZy1kaXNwbGF5IHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWVlO1xufVxuXG4udGFnLWRpc3BsYXkgcCB7XG4gIGNvbG9yOiAjODg4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMTBweCAwO1xufVxuXG4udGFncy1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA4cHg7XG59XG5cbi50YWctaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogOHB4O1xuICBwYWRkaW5nOiA2cHggMTJweDtcbiAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi50YWctaXRlbS50YWctZGF0ZSB7XG4gIGJhY2tncm91bmQ6ICNlM2YyZmQ7XG4gIGNvbG9yOiAjMTk3NmQyO1xufVxuXG4udGFnLWl0ZW0udGFnLWxvY2F0aW9uIHtcbiAgYmFja2dyb3VuZDogI2YzZTVmNTtcbiAgY29sb3I6ICM3YjFmYTI7XG59XG5cbi50YWctaXRlbS50YWctc3ViamVjdHMge1xuICBiYWNrZ3JvdW5kOiAjZThmNWU5O1xuICBjb2xvcjogIzJlN2QzMjtcbn1cblxuLyogU2F2ZSBidXR0b24gKi9cbi50YWctc2F2ZS1idXR0b24ge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTBweCAxNnB4O1xuICBiYWNrZ3JvdW5kOiAjMDA3YmZmO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luLXRvcDogMTZweDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XG59XG5cbi50YWctc2F2ZS1idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMDA1NmIzO1xufVxuXG4vKiBUYWcgaGludCAqL1xuLnRhZy1oaW50IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM2NjY7XG4gIG1hcmdpbi10b3A6IDRweDtcbn1cblxuLyogUmVzcG9uc2l2ZSBhZGp1c3RtZW50cyAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC50YWdnaW5nLXBhbmVsIHtcbiAgICBwb3NpdGlvbjogc3RhdGljO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgbWF4LXdpZHRoOiBub25lO1xuICB9XG5cbiAgLmxpZ2h0Ym94LWNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXgtaGVpZ2h0OiAxMDB2aDtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICB9XG5cbiAgLmxpZ2h0Ym94LWltYWdlIHtcbiAgICBmbGV4OiAxO1xuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gICAgbWF4LWhlaWdodDogNTB2aDtcbiAgfVxufVxuXG4vKiBQcmV2ZW50IGJvZHkgc2Nyb2xsIHdoZW4gbGlnaHRib3ggaXMgb3BlbiAqL1xuYm9keS5saWdodGJveC1vcGVuIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmlucHV0LXdyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udGFnLWxvY2F0aW9uLFxuLnRhZy1zdWJqZWN0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5hdXRvY29tcGxldGUtd3JhcHBlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmF1dG9jb21wbGV0ZS1kcm9wZG93biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMDAlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgbWF4LWhlaWdodDogMjAwcHg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICBib3JkZXItdG9wOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAwIDAgNHB4IDRweDtcbiAgYm94LXNoYWRvdzogMCA0cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgei1pbmRleDogMTAwMDtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmF1dG9jb21wbGV0ZS1kcm9wZG93bi5zaG93IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5hdXRvY29tcGxldGUtaXRlbSB7XG4gIHBhZGRpbmc6IDhweCAxMnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycztcbn1cblxuLmF1dG9jb21wbGV0ZS1pdGVtOmhvdmVyLFxuLmF1dG9jb21wbGV0ZS1pdGVtLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG59XG5cbi5hdXRvY29tcGxldGUtaXRlbSBzdHJvbmcge1xuICBjb2xvcjogIzAwN2JmZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmxpZ2h0Ym94IC50YWctc2VjdGlvbiBsYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ubGlnaHRib3ggLnRhZy1zZWN0aW9uIGlucHV0IHtcbiAgbWFyZ2luLXRvcDogNHB4O1xufVxuXG4uaW1hZ2UtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5pbWFnZS1jb250YWluZXIgaW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4uaW1hZ2Utcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAyNHB4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cblxuLmltYWdlLXJvdyBpbWcge1xuICBmbGV4OiAwIDAgYXV0bztcbiAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZSwgYm94LXNoYWRvdyAwLjJzIGVhc2U7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi50YWctaXRlbSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogNHB4IDMycHggNHB4IDhweDsgLyogQWRkZWQgcGFkZGluZy1yaWdodCBmb3IgZGVsZXRlIGJ1dHRvbiAqL1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4udGFnLWl0ZW06aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllY2VmO1xufVxuXG4udGFnLWRlbGV0ZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDhweDtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGMzNTQ1O1xuICBjb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2UsIGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlO1xufVxuXG4udGFnLWl0ZW06aG92ZXIgLnRhZy1kZWxldGUge1xuICBvcGFjaXR5OiAxO1xufVxuXG4udGFnLWRlbGV0ZTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjODIzMzM7XG59XG5cbi50YWdzLWxpc3Qge1xuICBtYXJnaW4tdG9wOiAxMnB4O1xufVxuXG4udGFnLWNvbnRleHQtbWVudSB7XG4gIHBvc2l0aW9uOiBmaXhlZDsgLyogQ2hhbmdlZCBmcm9tIGFic29sdXRlIHRvIGZpeGVkICovXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHBhZGRpbmc6IDhweCAwO1xuICBib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgei1pbmRleDogMTAwMDE7XG4gIG1pbi13aWR0aDogMTIwcHg7XG59XG5cbi5jb250ZXh0LW1lbnUtaXRlbSB7XG4gIHBhZGRpbmc6IDhweCAxNnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlO1xufVxuXG4uY29udGV4dC1tZW51LWl0ZW06aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xufVxuXG4uY29udGV4dC1tZW51LWl0ZW0uZGVsZXRlLXRhZyB7XG4gIGNvbG9yOiAjZGMzNTQ1O1xufVxuXG4uY29udGV4dC1tZW51LWl0ZW0uZGVsZXRlLXRhZzpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkYzM1NDU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLm5vdGlmaWNhdGlvbiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAyMHB4O1xuICByaWdodDogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxNXB4IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg0MDBweCk7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XG4gIHotaW5kZXg6IDEwMDAwO1xuICBtYXgtd2lkdGg6IDMwMHB4O1xufVxuXG4ubm90aWZpY2F0aW9uLnNob3cge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWiw4QkFBOEI7RUFDOUIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHdCQUF3QixFQUFFLHdCQUF3QjtFQUNsRCxpQkFBaUI7RUFDakIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7RUFDVCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsaUJBQWlC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RUFDWixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsZUFBZTtFQUNmLFVBQVU7RUFDVix5REFBeUQ7QUFDM0Q7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlLEVBQUUsbUNBQW1DO0VBQ3BELGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCx5Q0FBeUM7RUFDekMsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2Ysc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIseUNBQXlDO0VBQ3pDLDRCQUE0QjtFQUM1QiwrQkFBK0I7RUFDL0IsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIjaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXJnaW46IDI0cHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBmb250LWZhbWlseTogR2FyYW1vbmQ7XFxufVxcblxcbiNtYWludGl0bGUge1xcbiAgZm9udC1zaXplOiAzNnB4O1xcbn1cXG5cXG4jbWFpbmNvbnRhaW5lciB7XFxuICB3aWR0aDogY2FsYygxMDAlIC0gNzJweCk7IC8qIEFjY291bnQgZm9yIG1hcmdpbnMgKi9cXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuI2hlYWRlcnJpZ2h0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDMycHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZm9sZGVyLXNlY3Rpb24ge1xcbiAgbWFyZ2luLWJvdHRvbTogNjBweDtcXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbn1cXG5cXG4uZm9sZGVyLXNlY3Rpb24gaDIge1xcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbiAgZm9udC1mYW1pbHk6IEdhcmFtb25kO1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgY29sb3I6ICMzMzM7XFxufVxcblxcbi5pbWFnZS1ncmlkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAyNHB4O1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxuICBwYWRkaW5nLXJpZ2h0OiAxcHg7XFxuICAvKiBtaW4taGVpZ2h0OiAxMDB2aDsgKi9cXG4gIC8qIGhlaWdodDogYXV0byAhaW1wb3J0YW50OyAqL1xcbn1cXG5cXG4uaW1hZ2Utcm93IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDI0cHg7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZsZXgtd3JhcDogbm93cmFwOyAvKiBQcmV2ZW50IHdyYXBwaW5nICovXFxuICBvdmVyZmxvdzogdmlzaWJsZTsgLyogRW5zdXJlIG5vdGhpbmcgZ2V0cyBjdXQgb2ZmICovXFxufVxcblxcbi5pbWFnZS1yb3cgaW1nIHtcXG4gIGZsZXgtc2hyaW5rOiAxOyAvKiBBbGxvdyBpbWFnZXMgdG8gc2hyaW5rIGlmIG5lZWRlZCAqL1xcbiAgbWF4LXdpZHRoOiAxMDAlOyAvKiBOZXZlciBleGNlZWQgY29udGFpbmVyIHdpZHRoICovXFxuICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDsgLyogTWFpbnRhaW4gYXNwZWN0IHJhdGlvICovXFxuICBvYmplY3QtZml0OiBjb250YWluO1xcbn1cXG5cXG4uaW1hZ2Utcm93IGltZzpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XFxuICBib3gtc2hhZG93OiAwIDZweCAxNnB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XFxufVxcblxcbi8qIFNwZWNpYWwgc3R5bGluZyBmb3Igc2luZ2xlIGltYWdlIHJvd3MgKi9cXG4uc2luZ2xlLWltYWdlLXJvdyB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnNpbmdsZS1pbWFnZS1yb3cgaW1nIHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XFxuICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcXG4gIG1heC1oZWlnaHQ6IDYwdmg7XFxufVxcblxcbi8qIExpZ2h0Ym94IHN0eWxpbmcgd2l0aCBncmF5IGJhY2tncm91bmQgYW5kIHRyYW5zaXRpb25zICovXFxuLmxpZ2h0Ym94IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC45KTsgLyogR3JheSBiYWNrZ3JvdW5kICovXFxuICB6LWluZGV4OiAxMDAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG9wYWNpdHk6IDA7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZSwgdmlzaWJpbGl0eSAwLjNzIGVhc2U7XFxufVxcblxcbi5saWdodGJveC5hY3RpdmUge1xcbiAgb3BhY2l0eTogMTtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblxcbi5saWdodGJveC1jb250ZW50IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1heC13aWR0aDogOTAlO1xcbiAgbWF4LWhlaWdodDogOTAlO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcXG59XFxuXFxuLmxpZ2h0Ym94LmFjdGl2ZSAubGlnaHRib3gtY29udGVudCB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbn1cXG5cXG4ubGlnaHRib3gtaW1hZ2Uge1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgbWF4LWhlaWdodDogOTB2aDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgYm94LXNoYWRvdzogMCA4cHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcblxcbi5saWdodGJveC1jbG9zZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDIwcHg7XFxuICByaWdodDogMjBweDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcXG4gIGNvbG9yOiAjMzMzO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgd2lkdGg6IDQwcHg7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2UsIHRyYW5zZm9ybSAwLjJzIGVhc2U7XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2UgMC4ycywgdHJhbnNmb3JtIDAuM3MgZWFzZSAwLjJzLFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZTtcXG59XFxuXFxuLmxpZ2h0Ym94LmFjdGl2ZSAubGlnaHRib3gtY2xvc2Uge1xcbiAgb3BhY2l0eTogMTtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxufVxcblxcbi5saWdodGJveC1jbG9zZTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuXFxuYm9keS5saWdodGJveC1vcGVuIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgI21haW5jb250YWluZXIge1xcbiAgICBtYXJnaW46IDE2cHg7XFxuICAgIHBhZGRpbmc6IDE2cHg7XFxuICB9XFxuXFxuICAuaW1hZ2UtZ3JpZCB7XFxuICAgIGdhcDogMTZweDtcXG4gIH1cXG5cXG4gIC5pbWFnZS1yb3cge1xcbiAgICBnYXA6IDE2cHg7XFxuICB9XFxuXFxuICAubGlnaHRib3gtY2xvc2Uge1xcbiAgICB3aWR0aDogMzZweDtcXG4gICAgaGVpZ2h0OiAzNnB4O1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIHRvcDogMTBweDtcXG4gICAgcmlnaHQ6IDEwcHg7XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgLmltYWdlLXJvdyB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuXFxuICAuaW1hZ2Utcm93IGltZyB7XFxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gIH1cXG59XFxuXFxuI2NhdGVnb3J5QnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLCAwJSwgMTAwJSk7XFxuICBwYWRkaW5nOiAxNnB4O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jY2F0ZWdvcnlCdXR0b246aG92ZXIsXFxuI2NhdGVnb3J5QnV0dG9uOmZvY3VzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhZWIyYjQ7XFxufVxcblxcbiNmaWx0ZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG5cXG4jZHJvcGRvd24ge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XFxuICBtaW4td2lkdGg6IDE2MHB4O1xcbiAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4jZHJvcGRvd24gYSB7XFxuICBjb2xvcjogYmxhY2s7XFxuICBwYWRkaW5nOiAxMnB4IDE2cHg7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuI2Ryb3Bkb3duIGE6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcXG59XFxuXFxuI2Ryb3Bkb3duLnNob3cge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5kcm9wZG93bi1pdGVtIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcGFkZGluZzogMTBweCAxNnB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi5kcm9wZG93bi1pdGVtOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XFxufVxcblxcbi5kcm9wZG93bi1zZXBhcmF0b3Ige1xcbiAgaGVpZ2h0OiAxcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xcbiAgbWFyZ2luOiA1cHggMDtcXG59XFxuXFxuLmNhdGVnb3J5LWNoZWNrYm94IHtcXG4gIG1hcmdpbi1yaWdodDogOHB4O1xcbn1cXG5cXG4jZHJvcGRvd24uc2hvdyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyogQWRkIHNtb290aCB0cmFuc2l0aW9ucyBmb3IgZm9sZGVyIHNlY3Rpb25zICovXFxuLmZvbGRlci1zZWN0aW9uIHtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC40cyBlYXNlLCBtYXgtaGVpZ2h0IDAuNnMgZWFzZSwgbWFyZ2luLWJvdHRvbSAwLjRzIGVhc2U7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgb3BhY2l0eTogMTtcXG4gIC8qIG1heC1oZWlnaHQ6IDIwMDBweDsgICovXFxuICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XFxufVxcblxcbi5mb2xkZXItc2VjdGlvbi5oaWRkZW4ge1xcbiAgb3BhY2l0eTogMDtcXG4gIG1heC1oZWlnaHQ6IDA7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi8qIE1ha2UgZmlsdGVyIGJ1dHRvbiB0cmFuc2l0aW9ucyBzbW9vdGggKi9cXG4jY2F0ZWdvcnlCdXR0b24ge1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2U7XFxufVxcblxcbi8qIFNtb290aCB0cmFuc2l0aW9ucyBmb3IgZHJvcGRvd24gKi9cXG4jZHJvcGRvd24ge1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2UsIHRyYW5zZm9ybSAwLjNzIGVhc2U7XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4jZHJvcGRvd24uc2hvdyB7XFxuICBvcGFjaXR5OiAxO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XFxufVxcblxcbi8qIFNtb290aGVyIGNoZWNrYm94IHRyYW5zaXRpb25zICovXFxuLmRyb3Bkb3duLWl0ZW0ge1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2U7XFxufVxcblxcbi8qIEFkZCBhIHNsaWdodCBhbmltYXRpb24gdG8gY2hlY2tib3hlcyAqL1xcbi5jYXRlZ29yeS1jaGVja2JveCB7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xNXMgZWFzZTtcXG59XFxuXFxuLmNhdGVnb3J5LWNoZWNrYm94OmNoZWNrZWQge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG5cXG4vKiBBZGQgYSBuaWNlIHRyYW5zaXRpb24gd2hlbiBob3ZlcmluZyBvdmVyIHRoZSBmaWx0ZXIgYnV0dG9uICovXFxuI2NhdGVnb3J5QnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlOWU5ZTk7XFxuICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbn1cXG5cXG4jY2F0ZWdvcnlCdXR0b246YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkNWQ1ZDU7XFxufVxcblxcbi8qIFN0eWxlIGZvciB3aGVuIGZpbHRlcmluZyBpcyBhY3RpdmUgKi9cXG4jY2F0ZWdvcnlCdXR0b24uZmlsdGVyaW5nLWFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZmMGZmO1xcbiAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjNDI4NWY0O1xcbiAgcGFkZGluZy1sZWZ0OiAxM3B4OyAvKiBBZGp1c3QgcGFkZGluZyB0byBhY2NvdW50IGZvciBib3JkZXIgKi9cXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6ICM0Mjg1ZjQ7XFxufVxcblxcbi8qIENoZWNrYm94IGNvbnRhaW5lciBzdHlsaW5nICovXFxuLmRyb3Bkb3duLWl0ZW0ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLyogUmlwcGxlIGVmZmVjdCBmb3IgY2hlY2tib3hlcyAqL1xcbi5kcm9wZG93bi1pdGVtOjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgd2lkdGg6IDVweDtcXG4gIGhlaWdodDogNXB4O1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgb3BhY2l0eTogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpIHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XFxufVxcblxcbi5kcm9wZG93bi1pdGVtOmFjdGl2ZTo6YWZ0ZXIge1xcbiAgb3BhY2l0eTogMTtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGhlaWdodDogMjAwcHg7XFxuICBhbmltYXRpb246IHJpcHBsZSAwLjZzIGVhc2Utb3V0O1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHJpcHBsZSB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCwgMCk7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbn1cXG5cXG4vKiBUYWdnaW5nIEludGVyZmFjZSBTdHlsZXMgKi9cXG4vKiAudGFnZ2luZy1wYW5lbCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDIwcHg7XFxuICBsZWZ0OiAyMHB4O1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBwYWRkaW5nOiAxNnB4O1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgYm94LXNoYWRvdzogMCA0cHggMTZweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcbiAgei1pbmRleDogMTAwMTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UsIG9wYWNpdHkgMC4zcyBlYXNlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMHB4KTtcXG4gIG9wYWNpdHk6IDA7XFxufSAqL1xcblxcbi50YWdnaW5nLXBhbmVsIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAyMHB4O1xcbiAgdG9wOiAyMHB4O1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgbWF4LXdpZHRoOiA5MHZ3O1xcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjk1KTsgLyogVHJhbnNsdWNlbnQgd2hpdGUgKi9cXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTsgLyogQmx1ciBiYWNrZ3JvdW5kIGZvciBiZXR0ZXIgcmVhZGFiaWxpdHkgKi9cXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBib3gtc2hhZG93OiAwIDRweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxMDBweCk7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xcbn1cXG5cXG4ubGlnaHRib3guYWN0aXZlIC50YWdnaW5nLXBhbmVsIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAyMHB4O1xcbiAgdG9wOiAyMHB4O1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgbWF4LXdpZHRoOiA5MHZ3O1xcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KTsgLyogVHJhbnNsdWNlbnQgd2hpdGUgKi9cXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTsgLyogQmx1ciBiYWNrZ3JvdW5kIGZvciBiZXR0ZXIgcmVhZGFiaWxpdHkgKi9cXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBib3gtc2hhZG93OiAwIDRweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxMDBweCk7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xcbn1cXG5cXG4udGFnLXNlY3Rpb24ge1xcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcXG59XFxuXFxuLnRhZy1zZWN0aW9uIGxhYmVsIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLnRhZy1zZWN0aW9uIGlucHV0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogOHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuXFxuLnRhZy1oaW50IHtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGNvbG9yOiAjNjY2O1xcbiAgbWFyZ2luLWxlZnQ6IDRweDtcXG59XFxuXFxuLnRhZy1zYXZlLWJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI4NWY0O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcGFkZGluZzogOHB4IDE2cHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbWFyZ2luLXRvcDogOHB4O1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzO1xcbn1cXG5cXG4udGFnLXNhdmUtYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyYjY4ZDk7XFxufVxcblxcbi50YWctZGlzcGxheSB7XFxuICBtYXJnaW4tdG9wOiAxNnB4O1xcbiAgcGFkZGluZy10b3A6IDEycHg7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2VlZTtcXG59XFxuXFxuLnRhZ3MtbGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgZ2FwOiA4cHg7XFxufVxcblxcbi50YWctaXRlbSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZmMGZmO1xcbiAgcGFkZGluZzogNHB4IDhweDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGZvbnQtc2l6ZTogMTNweDtcXG59XFxuXFxuLyogVGFnIGZpbHRlciBzdHlsZXMgKi9cXG4jdGFnRmlsdGVyQnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogMTZweDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbi1sZWZ0OiA4cHg7XFxufVxcblxcbiN0YWdGaWx0ZXJCdXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZTllOTtcXG59XFxuXFxuI3RhZ0Ryb3Bkb3duIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XFxuICBtaW4td2lkdGg6IDI4MHB4O1xcbiAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICB6LWluZGV4OiAxO1xcbiAgcGFkZGluZzogMTZweDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2UsIHRyYW5zZm9ybSAwLjNzIGVhc2U7XFxufVxcblxcbiN0YWdEcm9wZG93bi5zaG93IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgb3BhY2l0eTogMTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG59XFxuXFxuLnRhZy1maWx0ZXItc2VjdGlvbiB7XFxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xcbn1cXG5cXG4udGFnLWZpbHRlci1zZWN0aW9uIGg0IHtcXG4gIG1hcmdpbi10b3A6IDA7XFxuICBtYXJnaW4tYm90dG9tOiA4cHg7XFxufVxcblxcbi5kYXRlLXJhbmdlLWlucHV0cyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA4cHg7XFxufVxcblxcbi5kYXRlLXJhbmdlLWlucHV0cyBpbnB1dCB7XFxuICBmbGV4OiAxO1xcbiAgcGFkZGluZzogNnB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuXFxuI2xvY2F0aW9uRmlsdGVyLFxcbiNzdWJqZWN0RmlsdGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogOHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuXFxuLmZpbHRlci1idXR0b25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbiNhcHBseVRhZ0ZpbHRlcnMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQyODVmNDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDhweCAxNnB4O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jY2xlYXJUYWdGaWx0ZXJzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xcbiAgcGFkZGluZzogOHB4IDE2cHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5mb2xkZXItc2VjdGlvbi5oaWRkZW4tYnktdGFnIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qIEFkZCBpbmRpdmlkdWFsIGltYWdlIGhpZGluZyAqL1xcbi5nYWxsZXJ5LWltYWdlLnRhZy1maWx0ZXJlZC1vdXQge1xcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG4ubGlnaHRib3gge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg1KTsgLyogVHJhbnNsdWNlbnQgYmxhY2sgYmFja2dyb3VuZCAqL1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG9wYWNpdHk6IDA7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZSwgdmlzaWJpbGl0eSAwLjNzIGVhc2U7XFxuICB6LWluZGV4OiA5OTk5O1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKFxcbiAgICA1cHhcXG4gICk7IC8qIE9wdGlvbmFsOiBhZGRzIGEgYmx1ciBlZmZlY3QgdG8gdGhlIGJhY2tncm91bmQgKi9cXG59XFxuXFxuLmxpZ2h0Ym94LmFjdGl2ZSB7XFxuICBvcGFjaXR5OiAxO1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuXFxuLyogTGlnaHRib3ggY29udGVudCAtIGtlZXAgb3BhcXVlICovXFxuLmxpZ2h0Ym94LWNvbnRlbnQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWF4LXdpZHRoOiA5MHZ3O1xcbiAgbWF4LWhlaWdodDogOTB2aDtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJveC1zaGFkb3c6IDAgMjBweCA0MHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG59XFxuXFxuLmxpZ2h0Ym94LWltYWdlIHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIG1heC1oZWlnaHQ6IDkwdmg7XFxuICBvYmplY3QtZml0OiBjb250YWluO1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qIFRhZ2dpbmcgcGFuZWwgKi9cXG4udGFnZ2luZy1wYW5lbCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMjBweDtcXG4gIHRvcDogMjBweDtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIG1heC13aWR0aDogOTB2dztcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45OCk7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYm94LXNoYWRvdzogMCA0cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTAwcHgpO1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuLyogRml4IGRhdGUgaW5wdXQgZmllbGQgKi9cXG4udGFnLXNlY3Rpb24ge1xcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4udGFnLXNlY3Rpb24gbGFiZWwge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xcbiAgY29sb3I6ICMzMzM7XFxufVxcblxcbi50YWctc2VjdGlvbiBpbnB1dFt0eXBlPVxcXCJkYXRlXFxcIl0sXFxuLnRhZy1zZWN0aW9uIGlucHV0W3R5cGU9XFxcInRleHRcXFwiXSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDhweCAxMnB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIEVuc3VyZXMgcGFkZGluZyBpcyBpbmNsdWRlZCBpbiB3aWR0aCAqL1xcbn1cXG5cXG4vKiBTcGVjaWZpY2FsbHkgZW5zdXJlIGRhdGUgaW5wdXQgZG9lc24ndCBvdmVyZmxvdyAqL1xcbi50YWctZGF0ZSB7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4vKiBXcmFwcGVyIGZvciBpbnB1dHMgdG8gY29udGFpbiBhdXRvY29tcGxldGUgKi9cXG4uaW5wdXQtd3JhcHBlciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLyogQ2xvc2UgYnV0dG9uICovXFxuLmxpZ2h0Ym94LWNsb3NlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMjBweDtcXG4gIHJpZ2h0OiAyMHB4O1xcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgd2lkdGg6IDQwcHg7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBsaW5lLWhlaWdodDogNDBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxuICB6LWluZGV4OiAxMDtcXG59XFxuXFxuLmxpZ2h0Ym94LWNsb3NlOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG5cXG4vKiBUYWcgZGlzcGxheSAqL1xcbi50YWctZGlzcGxheSB7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgcGFkZGluZy10b3A6IDIwcHg7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2VlZTtcXG59XFxuXFxuLnRhZy1kaXNwbGF5IHAge1xcbiAgY29sb3I6ICM4ODg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDEwcHggMDtcXG59XFxuXFxuLnRhZ3MtbGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogOHB4O1xcbn1cXG5cXG4udGFnLWl0ZW0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDhweDtcXG4gIHBhZGRpbmc6IDZweCAxMnB4O1xcbiAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuXFxuLnRhZy1pdGVtLnRhZy1kYXRlIHtcXG4gIGJhY2tncm91bmQ6ICNlM2YyZmQ7XFxuICBjb2xvcjogIzE5NzZkMjtcXG59XFxuXFxuLnRhZy1pdGVtLnRhZy1sb2NhdGlvbiB7XFxuICBiYWNrZ3JvdW5kOiAjZjNlNWY1O1xcbiAgY29sb3I6ICM3YjFmYTI7XFxufVxcblxcbi50YWctaXRlbS50YWctc3ViamVjdHMge1xcbiAgYmFja2dyb3VuZDogI2U4ZjVlOTtcXG4gIGNvbG9yOiAjMmU3ZDMyO1xcbn1cXG5cXG4vKiBTYXZlIGJ1dHRvbiAqL1xcbi50YWctc2F2ZS1idXR0b24ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxMHB4IDE2cHg7XFxuICBiYWNrZ3JvdW5kOiAjMDA3YmZmO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIG1hcmdpbi10b3A6IDE2cHg7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcXG59XFxuXFxuLnRhZy1zYXZlLWJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjMDA1NmIzO1xcbn1cXG5cXG4vKiBUYWcgaGludCAqL1xcbi50YWctaGludCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGNvbG9yOiAjNjY2O1xcbiAgbWFyZ2luLXRvcDogNHB4O1xcbn1cXG5cXG4vKiBSZXNwb25zaXZlIGFkanVzdG1lbnRzICovXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICAudGFnZ2luZy1wYW5lbCB7XFxuICAgIHBvc2l0aW9uOiBzdGF0aWM7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICBtYXgtd2lkdGg6IG5vbmU7XFxuICB9XFxuXFxuICAubGlnaHRib3gtY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1heC1oZWlnaHQ6IDEwMHZoO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgfVxcblxcbiAgLmxpZ2h0Ym94LWltYWdlIHtcXG4gICAgZmxleDogMTtcXG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcXG4gICAgbWF4LWhlaWdodDogNTB2aDtcXG4gIH1cXG59XFxuXFxuLyogUHJldmVudCBib2R5IHNjcm9sbCB3aGVuIGxpZ2h0Ym94IGlzIG9wZW4gKi9cXG5ib2R5LmxpZ2h0Ym94LW9wZW4ge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLmlucHV0LXdyYXBwZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi50YWctbG9jYXRpb24sXFxuLnRhZy1zdWJqZWN0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLmF1dG9jb21wbGV0ZS13cmFwcGVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmF1dG9jb21wbGV0ZS1kcm9wZG93biB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDEwMCU7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBtYXgtaGVpZ2h0OiAyMDBweDtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XFxuICBib3JkZXItdG9wOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMCAwIDRweCA0cHg7XFxuICBib3gtc2hhZG93OiAwIDRweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgei1pbmRleDogMTAwMDtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5hdXRvY29tcGxldGUtZHJvcGRvd24uc2hvdyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLmF1dG9jb21wbGV0ZS1pdGVtIHtcXG4gIHBhZGRpbmc6IDhweCAxMnB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzO1xcbn1cXG5cXG4uYXV0b2NvbXBsZXRlLWl0ZW06aG92ZXIsXFxuLmF1dG9jb21wbGV0ZS1pdGVtLmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xcbn1cXG5cXG4uYXV0b2NvbXBsZXRlLWl0ZW0gc3Ryb25nIHtcXG4gIGNvbG9yOiAjMDA3YmZmO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLmxpZ2h0Ym94IC50YWctc2VjdGlvbiBsYWJlbCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLmxpZ2h0Ym94IC50YWctc2VjdGlvbiBpbnB1dCB7XFxuICBtYXJnaW4tdG9wOiA0cHg7XFxufVxcblxcbi5pbWFnZS1jb250YWluZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmltYWdlLWNvbnRhaW5lciBpbWcge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG59XFxuXFxuLmltYWdlLXJvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAyNHB4O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5pbWFnZS1yb3cgaW1nIHtcXG4gIGZsZXg6IDAgMCBhdXRvO1xcbiAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLCBib3gtc2hhZG93IDAuMnMgZWFzZTtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGFnLWl0ZW0ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcGFkZGluZzogNHB4IDMycHggNHB4IDhweDsgLyogQWRkZWQgcGFkZGluZy1yaWdodCBmb3IgZGVsZXRlIGJ1dHRvbiAqL1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXG4gIG1hcmdpbi1ib3R0b206IDRweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcblxcbi50YWctaXRlbTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllY2VmO1xcbn1cXG5cXG4udGFnLWRlbGV0ZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogOHB4O1xcbiAgdG9wOiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICB3aWR0aDogMjBweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkYzM1NDU7XFxuICBjb2xvcjogd2hpdGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlLCBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcXG59XFxuXFxuLnRhZy1pdGVtOmhvdmVyIC50YWctZGVsZXRlIHtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi50YWctZGVsZXRlOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjODIzMzM7XFxufVxcblxcbi50YWdzLWxpc3Qge1xcbiAgbWFyZ2luLXRvcDogMTJweDtcXG59XFxuXFxuLnRhZy1jb250ZXh0LW1lbnUge1xcbiAgcG9zaXRpb246IGZpeGVkOyAvKiBDaGFuZ2VkIGZyb20gYWJzb2x1dGUgdG8gZml4ZWQgKi9cXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIHBhZGRpbmc6IDhweCAwO1xcbiAgYm94LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICB6LWluZGV4OiAxMDAwMTtcXG4gIG1pbi13aWR0aDogMTIwcHg7XFxufVxcblxcbi5jb250ZXh0LW1lbnUtaXRlbSB7XFxuICBwYWRkaW5nOiA4cHggMTZweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlO1xcbn1cXG5cXG4uY29udGV4dC1tZW51LWl0ZW06aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcXG59XFxuXFxuLmNvbnRleHQtbWVudS1pdGVtLmRlbGV0ZS10YWcge1xcbiAgY29sb3I6ICNkYzM1NDU7XFxufVxcblxcbi5jb250ZXh0LW1lbnUtaXRlbS5kZWxldGUtdGFnOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkYzM1NDU7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5ub3RpZmljYXRpb24ge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiAyMHB4O1xcbiAgcmlnaHQ6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogMTVweCAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm94LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNDAwcHgpO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcXG4gIHotaW5kZXg6IDEwMDAwO1xcbiAgbWF4LXdpZHRoOiAzMDBweDtcXG59XFxuXFxuLm5vdGlmaWNhdGlvbi5zaG93IHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js!./src/styles.css\n");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9waG90b2dyYXBoeXNpdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzPzI0ZmIiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/runtime/api.js\n");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (item) {\n  var content = item[1];\n  var cssMapping = item[3];\n  if (!cssMapping) {\n    return content;\n  }\n  if (typeof btoa === \"function\") {\n    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));\n    var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n    var sourceMapping = \"/*# \".concat(data, \" */\");\n    return [content].concat([sourceMapping]).join(\"\\n\");\n  }\n  return [content].join(\"\\n\");\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIm1hcHBpbmdzIjoiQUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Bob3RvZ3JhcGh5c2l0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzP2FmMTIiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/runtime/sourceMaps.js\n");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9waG90b2dyYXBoeXNpdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanM/MmRiYSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\n");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Bob3RvZ3JhcGh5c2l0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanM/YjIxNCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/style-loader/dist/runtime/insertBySelector.js\n");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Bob3RvZ3JhcGh5c2l0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcz9kZTZjIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/style-loader/dist/runtime/insertStyleElement.js\n");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9waG90b2dyYXBoeXNpdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanM/ZGRjZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\n");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIm1hcHBpbmdzIjoiQUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Bob3RvZ3JhcGh5c2l0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzP2U0NzkiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/style-loader/dist/runtime/styleDomAPI.js\n");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIm1hcHBpbmdzIjoiQUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Bob3RvZ3JhcGh5c2l0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzPzFkZGUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/style-loader/dist/runtime/styleTagTransform.js\n");

/***/ }),

/***/ "./src/assets/images sync recursive \\.(png%7Cjpg%7Cjpeg%7Cgif%7Csvg)$i":
/*!********************************************************************!*\
  !*** ./src/assets/images/ sync \.(png%7Cjpg%7Cjpeg%7Cgif%7Csvg)$i ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./birds/Aug 05 2024 7.1 286 500 99.jpg": "./src/assets/images/birds/Aug 05 2024 7.1 286 500 99.jpg",
	"./birds/Aug 16 2024 6.3 300 1000 123.jpg": "./src/assets/images/birds/Aug 16 2024 6.3 300 1000 123.jpg",
	"./birds/Aug 16 2024 6.3 300 640 124.jpg": "./src/assets/images/birds/Aug 16 2024 6.3 300 640 124.jpg",
	"./birds/Aug 16 2024 8 300 400 129.jpg": "./src/assets/images/birds/Aug 16 2024 8 300 400 129.jpg",
	"./birds/Aug 16 2024 9 300 400 135.jpg": "./src/assets/images/birds/Aug 16 2024 9 300 400 135.jpg",
	"./birds/Aug 23 2024 7.1 300 1000 149.jpg": "./src/assets/images/birds/Aug 23 2024 7.1 300 1000 149.jpg",
	"./birds/IMG_20170915_175614_853.jpg": "./src/assets/images/birds/IMG_20170915_175614_853.jpg",
	"./birds/IMG_20170924_212051_592.jpg": "./src/assets/images/birds/IMG_20170924_212051_592.jpg",
	"./birds/IMG_20170924_221201_142.jpg": "./src/assets/images/birds/IMG_20170924_221201_142.jpg",
	"./birds/IMG_20170925_083030_471.jpg": "./src/assets/images/birds/IMG_20170925_083030_471.jpg",
	"./birds/IMG_20170926_172240_744.jpg": "./src/assets/images/birds/IMG_20170926_172240_744.jpg",
	"./birds/IMG_20180511_100847_926.jpg": "./src/assets/images/birds/IMG_20180511_100847_926.jpg",
	"./birds/IMG_20230409_100404_988.jpg": "./src/assets/images/birds/IMG_20230409_100404_988.jpg",
	"./birds/IMG_20230423_172535_410.jpg": "./src/assets/images/birds/IMG_20230423_172535_410.jpg",
	"./birds/IMG_20230716_123750_367.jpg": "./src/assets/images/birds/IMG_20230716_123750_367.jpg",
	"./birds/IMG_20230724_141712_371.jpg": "./src/assets/images/birds/IMG_20230724_141712_371.jpg",
	"./birds/IMG_20230804_190740_465.jpg": "./src/assets/images/birds/IMG_20230804_190740_465.jpg",
	"./birds/IMG_20231016_194036_980.jpg": "./src/assets/images/birds/IMG_20231016_194036_980.jpg",
	"./birds/_DSC4144 Dec 27 2024.jpg": "./src/assets/images/birds/_DSC4144 Dec 27 2024.jpg",
	"./birds/_DSC4350 Jan 18 2025 7.1 300 2000 2.jpg": "./src/assets/images/birds/_DSC4350 Jan 18 2025 7.1 300 2000 2.jpg",
	"./birds/_DSC4454 Jan 18 2025 8 300 3200.jpg": "./src/assets/images/birds/_DSC4454 Jan 18 2025 8 300 3200.jpg",
	"./birds/_DSC5081 Apr 08 2025 7.1 287 6400.jpg": "./src/assets/images/birds/_DSC5081 Apr 08 2025 7.1 287 6400.jpg",
	"./birds/_DSC5361 Apr 17 2025 7.1 300 2500 3.jpg": "./src/assets/images/birds/_DSC5361 Apr 17 2025 7.1 300 2500 3.jpg",
	"./birds/_DSC5698 May 08 2025 7.1 300 1600 1.jpg": "./src/assets/images/birds/_DSC5698 May 08 2025 7.1 300 1600 1.jpg",
	"./birds/_DSC6037 May 17 2025 9 300 100 3.jpg": "./src/assets/images/birds/_DSC6037 May 17 2025 9 300 100 3.jpg",
	"./birds/_DSC6225 May 20 2025 7.1 300 5000 1.jpg": "./src/assets/images/birds/_DSC6225 May 20 2025 7.1 300 5000 1.jpg",
	"./family and travel/20161223_140522.jpg": "./src/assets/images/family and travel/20161223_140522.jpg",
	"./family and travel/20161223_140554.jpg": "./src/assets/images/family and travel/20161223_140554.jpg",
	"./family and travel/20161226_112412.jpg": "./src/assets/images/family and travel/20161226_112412.jpg",
	"./family and travel/20161231_115411.jpg": "./src/assets/images/family and travel/20161231_115411.jpg",
	"./family and travel/20170901_211918.jpg": "./src/assets/images/family and travel/20170901_211918.jpg",
	"./family and travel/20170912_094735.jpg": "./src/assets/images/family and travel/20170912_094735.jpg",
	"./family and travel/20170914_163808.jpg": "./src/assets/images/family and travel/20170914_163808.jpg",
	"./family and travel/20171226_144248.jpg": "./src/assets/images/family and travel/20171226_144248.jpg",
	"./family and travel/20180120_185041.jpg": "./src/assets/images/family and travel/20180120_185041.jpg",
	"./family and travel/20180121_182710.jpg": "./src/assets/images/family and travel/20180121_182710.jpg",
	"./family and travel/20180407_085022.jpg": "./src/assets/images/family and travel/20180407_085022.jpg",
	"./family and travel/20180411_090617.jpg": "./src/assets/images/family and travel/20180411_090617.jpg",
	"./family and travel/20180422_160812.jpg": "./src/assets/images/family and travel/20180422_160812.jpg",
	"./family and travel/20180424_221054.jpg": "./src/assets/images/family and travel/20180424_221054.jpg",
	"./family and travel/20180426_123423.jpg": "./src/assets/images/family and travel/20180426_123423.jpg",
	"./family and travel/20180506_220957.jpg": "./src/assets/images/family and travel/20180506_220957.jpg",
	"./family and travel/20180629_155331.jpg": "./src/assets/images/family and travel/20180629_155331.jpg",
	"./family and travel/20180727_185804.jpg": "./src/assets/images/family and travel/20180727_185804.jpg",
	"./family and travel/20181214_140423.jpg": "./src/assets/images/family and travel/20181214_140423.jpg",
	"./family and travel/20181214_140435.jpg": "./src/assets/images/family and travel/20181214_140435.jpg",
	"./family and travel/20181215_144430.jpg": "./src/assets/images/family and travel/20181215_144430.jpg",
	"./family and travel/20181215_144439.jpg": "./src/assets/images/family and travel/20181215_144439.jpg",
	"./family and travel/20190221_164801.jpg": "./src/assets/images/family and travel/20190221_164801.jpg",
	"./family and travel/20190508_204924.jpg": "./src/assets/images/family and travel/20190508_204924.jpg",
	"./family and travel/Apr 06 2024 9 70 800 25.jpg": "./src/assets/images/family and travel/Apr 06 2024 9 70 800 25.jpg",
	"./family and travel/Apr 06 2024 9 78 1000 26.jpg": "./src/assets/images/family and travel/Apr 06 2024 9 78 1000 26.jpg",
	"./family and travel/Aug 02 2024 6.3 24 1000 78.jpg": "./src/assets/images/family and travel/Aug 02 2024 6.3 24 1000 78.jpg",
	"./family and travel/Aug 02 2024 6.3 24 1250 112.jpg": "./src/assets/images/family and travel/Aug 02 2024 6.3 24 1250 112.jpg",
	"./family and travel/DSC00261.JPG": "./src/assets/images/family and travel/DSC00261.JPG",
	"./family and travel/DSC00559.JPG": "./src/assets/images/family and travel/DSC00559.JPG",
	"./family and travel/DSC00560.JPG": "./src/assets/images/family and travel/DSC00560.JPG",
	"./family and travel/DSC01431.JPG": "./src/assets/images/family and travel/DSC01431.JPG",
	"./family and travel/DSC01767.JPG": "./src/assets/images/family and travel/DSC01767.JPG",
	"./family and travel/DSC06832.JPG": "./src/assets/images/family and travel/DSC06832.JPG",
	"./family and travel/DSC08298.JPG": "./src/assets/images/family and travel/DSC08298.JPG",
	"./family and travel/DSC08410.JPG": "./src/assets/images/family and travel/DSC08410.JPG",
	"./family and travel/DSC08807.JPG": "./src/assets/images/family and travel/DSC08807.JPG",
	"./family and travel/DSC_0451.JPG": "./src/assets/images/family and travel/DSC_0451.JPG",
	"./family and travel/DSC_0486.JPG": "./src/assets/images/family and travel/DSC_0486.JPG",
	"./family and travel/DSC_0522.JPG": "./src/assets/images/family and travel/DSC_0522.JPG",
	"./family and travel/IMG-20230430-WA0007.jpg": "./src/assets/images/family and travel/IMG-20230430-WA0007.jpg",
	"./family and travel/IMG-20230625-WA0000.jpg": "./src/assets/images/family and travel/IMG-20230625-WA0000.jpg",
	"./family and travel/IMG-20230702-WA0001.jpg": "./src/assets/images/family and travel/IMG-20230702-WA0001.jpg",
	"./family and travel/IMG_20160308_154009.jpg": "./src/assets/images/family and travel/IMG_20160308_154009.jpg",
	"./family and travel/IMG_20161225_202530_762.jpg": "./src/assets/images/family and travel/IMG_20161225_202530_762.jpg",
	"./family and travel/IMG_20170905_163655_942.jpg": "./src/assets/images/family and travel/IMG_20170905_163655_942.jpg",
	"./family and travel/IMG_20170907_093248_063.jpg": "./src/assets/images/family and travel/IMG_20170907_093248_063.jpg",
	"./family and travel/IMG_20170909_141344_050.jpg": "./src/assets/images/family and travel/IMG_20170909_141344_050.jpg",
	"./family and travel/IMG_20170909_164720_680.jpg": "./src/assets/images/family and travel/IMG_20170909_164720_680.jpg",
	"./family and travel/IMG_20170909_213027_713.jpg": "./src/assets/images/family and travel/IMG_20170909_213027_713.jpg",
	"./family and travel/IMG_20180520_094828_464.jpg": "./src/assets/images/family and travel/IMG_20180520_094828_464.jpg",
	"./family and travel/IMG_20181111_151901_488.jpg": "./src/assets/images/family and travel/IMG_20181111_151901_488.jpg",
	"./family and travel/IMG_20190901_115736_381.jpg": "./src/assets/images/family and travel/IMG_20190901_115736_381.jpg",
	"./family and travel/IMG_20201018_164501.jpg": "./src/assets/images/family and travel/IMG_20201018_164501.jpg",
	"./family and travel/IMG_20201205_102453_894.jpg": "./src/assets/images/family and travel/IMG_20201205_102453_894.jpg",
	"./family and travel/IMG_20201207_200919_332.jpg": "./src/assets/images/family and travel/IMG_20201207_200919_332.jpg",
	"./family and travel/IMG_20201207_200919_333.jpg": "./src/assets/images/family and travel/IMG_20201207_200919_333.jpg",
	"./family and travel/IMG_20210205_133535_789.jpg": "./src/assets/images/family and travel/IMG_20210205_133535_789.jpg",
	"./family and travel/IMG_20210214_165301_187.jpg": "./src/assets/images/family and travel/IMG_20210214_165301_187.jpg",
	"./family and travel/IMG_20210425_112753_871.jpg": "./src/assets/images/family and travel/IMG_20210425_112753_871.jpg",
	"./family and travel/IMG_20210518_170510.jpg": "./src/assets/images/family and travel/IMG_20210518_170510.jpg",
	"./family and travel/IMG_20210530_112656_208.jpg": "./src/assets/images/family and travel/IMG_20210530_112656_208.jpg",
	"./family and travel/IMG_20220616_131236.jpg": "./src/assets/images/family and travel/IMG_20220616_131236.jpg",
	"./family and travel/IMG_20220616_131244.jpg": "./src/assets/images/family and travel/IMG_20220616_131244.jpg",
	"./family and travel/IMG_20220618_125735.jpg": "./src/assets/images/family and travel/IMG_20220618_125735.jpg",
	"./family and travel/IMG_20220618_172138.jpg": "./src/assets/images/family and travel/IMG_20220618_172138.jpg",
	"./family and travel/IMG_20220703_120548.jpg": "./src/assets/images/family and travel/IMG_20220703_120548.jpg",
	"./family and travel/IMG_20230508_090239.jpg": "./src/assets/images/family and travel/IMG_20230508_090239.jpg",
	"./family and travel/IMG_20230508_090253.jpg": "./src/assets/images/family and travel/IMG_20230508_090253.jpg",
	"./family and travel/IMG_20230508_090257.jpg": "./src/assets/images/family and travel/IMG_20230508_090257.jpg",
	"./family and travel/IMG_20231221_065527.jpg": "./src/assets/images/family and travel/IMG_20231221_065527.jpg",
	"./family and travel/IMG_20241114_164227.jpg": "./src/assets/images/family and travel/IMG_20241114_164227.jpg",
	"./family and travel/IMG_2296.jpg": "./src/assets/images/family and travel/IMG_2296.jpg",
	"./family and travel/IMG_5379.jpg": "./src/assets/images/family and travel/IMG_5379.jpg",
	"./family and travel/Jeremy and Connie - Hardwick MA November 2023.jpg": "./src/assets/images/family and travel/Jeremy and Connie - Hardwick MA November 2023.jpg",
	"./family and travel/Montreal3.jpg": "./src/assets/images/family and travel/Montreal3.jpg",
	"./family and travel/Monument to the Discoveries.jpg": "./src/assets/images/family and travel/Monument to the Discoveries.jpg",
	"./family and travel/Oct 04 2020 7.1 1-125s  400 006.jpg": "./src/assets/images/family and travel/Oct 04 2020 7.1 1-125s  400 006.jpg",
	"./family and travel/mms_20160115_133809.jpg": "./src/assets/images/family and travel/mms_20160115_133809.jpg",
	"./landscape and nature/20180711_163526.jpg": "./src/assets/images/landscape and nature/20180711_163526.jpg",
	"./landscape and nature/Aug 05 2024 8 70 1000 90.jpg": "./src/assets/images/landscape and nature/Aug 05 2024 8 70 1000 90.jpg",
	"./landscape and nature/Aug 06 2024 7.1 300 1000 102.jpg": "./src/assets/images/landscape and nature/Aug 06 2024 7.1 300 1000 102.jpg",
	"./landscape and nature/DSC00005.JPG": "./src/assets/images/landscape and nature/DSC00005.JPG",
	"./landscape and nature/DSC00027.JPG": "./src/assets/images/landscape and nature/DSC00027.JPG",
	"./landscape and nature/Dec 31 2022 7.1 1-160s  800 137.jpg": "./src/assets/images/landscape and nature/Dec 31 2022 7.1 1-160s  800 137.jpg",
	"./landscape and nature/IMG_20170909_214447_985.jpg": "./src/assets/images/landscape and nature/IMG_20170909_214447_985.jpg",
	"./landscape and nature/IMG_20171001_222100_576.jpg": "./src/assets/images/landscape and nature/IMG_20171001_222100_576.jpg",
	"./landscape and nature/IMG_20190613_122752_058.jpg": "./src/assets/images/landscape and nature/IMG_20190613_122752_058.jpg",
	"./landscape and nature/IMG_20201124_153057_787.jpg": "./src/assets/images/landscape and nature/IMG_20201124_153057_787.jpg",
	"./landscape and nature/IMG_20210214_083635_185.jpg": "./src/assets/images/landscape and nature/IMG_20210214_083635_185.jpg",
	"./landscape and nature/IMG_20211201_161430_763.jpg": "./src/assets/images/landscape and nature/IMG_20211201_161430_763.jpg",
	"./landscape and nature/IMG_20220710_102427_116.jpg": "./src/assets/images/landscape and nature/IMG_20220710_102427_116.jpg",
	"./landscape and nature/IMG_20220905_192730_135.jpg": "./src/assets/images/landscape and nature/IMG_20220905_192730_135.jpg",
	"./landscape and nature/IMG_20221231_190142_243.jpg": "./src/assets/images/landscape and nature/IMG_20221231_190142_243.jpg",
	"./landscape and nature/IMG_20221231_190142_290.jpg": "./src/assets/images/landscape and nature/IMG_20221231_190142_290.jpg",
	"./landscape and nature/IMG_20230508_081915_459.jpg": "./src/assets/images/landscape and nature/IMG_20230508_081915_459.jpg",
	"./landscape and nature/IMG_20230508_081915_500.jpg": "./src/assets/images/landscape and nature/IMG_20230508_081915_500.jpg",
	"./landscape and nature/Nov42018_1.jpg": "./src/assets/images/landscape and nature/Nov42018_1.jpg",
	"./landscape and nature/Oct 28 2023 6.3 1-1000s 1000 403.jpg": "./src/assets/images/landscape and nature/Oct 28 2023 6.3 1-1000s 1000 403.jpg",
	"./landscape and nature/_DSC5646 May 06 2025 10 161 4000.jpg": "./src/assets/images/landscape and nature/_DSC5646 May 06 2025 10 161 4000.jpg",
	"./landscape and nature/_DSC5662 May 06 2025 8 70 320.jpg": "./src/assets/images/landscape and nature/_DSC5662 May 06 2025 8 70 320.jpg",
	"./street/20161225_210334.jpg": "./src/assets/images/street/20161225_210334.jpg",
	"./street/20190320_095337.jpg": "./src/assets/images/street/20190320_095337.jpg",
	"./street/20190429_194310.jpg": "./src/assets/images/street/20190429_194310.jpg",
	"./street/20190430_153908.jpg": "./src/assets/images/street/20190430_153908.jpg",
	"./street/DSC00075.JPG": "./src/assets/images/street/DSC00075.JPG",
	"./street/DSC01821.JPG": "./src/assets/images/street/DSC01821.JPG",
	"./street/DSC05212 May 07 2025 2 24 1000.jpg": "./src/assets/images/street/DSC05212 May 07 2025 2 24 1000.jpg",
	"./street/DSC05230 May 08 2025 5 24 100 1.jpg": "./src/assets/images/street/DSC05230 May 08 2025 5 24 100 1.jpg",
	"./street/DSC07480.JPG": "./src/assets/images/street/DSC07480.JPG",
	"./street/IMG_20180822_201545_091.jpg": "./src/assets/images/street/IMG_20180822_201545_091.jpg",
	"./street/IMG_20180824_102501_232.jpg": "./src/assets/images/street/IMG_20180824_102501_232.jpg",
	"./street/IMG_20190317_100549_790.jpg": "./src/assets/images/street/IMG_20190317_100549_790.jpg",
	"./street/IMG_20191012_142421_111.jpg": "./src/assets/images/street/IMG_20191012_142421_111.jpg",
	"./street/IMG_20191012_142421_122.jpg": "./src/assets/images/street/IMG_20191012_142421_122.jpg",
	"./street/IMG_20210530_112445_399.jpg": "./src/assets/images/street/IMG_20210530_112445_399.jpg",
	"./street/IMG_20210530_112656_124.jpg": "./src/assets/images/street/IMG_20210530_112656_124.jpg",
	"./street/IMG_20210620_173748_494.jpg": "./src/assets/images/street/IMG_20210620_173748_494.jpg",
	"./street/RockefellerCenter04.jpg": "./src/assets/images/street/RockefellerCenter04.jpg",
	"./street/Rua da Junqueira, Belem.jpg": "./src/assets/images/street/Rua da Junqueira, Belem.jpg",
	"./street/Rue de Junqueira 345 Belem.jpg": "./src/assets/images/street/Rue de Junqueira 345 Belem.jpg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/assets/images sync recursive \\.(png%7Cjpg%7Cjpeg%7Cgif%7Csvg)$i";

/***/ }),

/***/ "./src/assets/images/birds/Aug 05 2024 7.1 286 500 99.jpg":
/*!****************************************************************!*\
  !*** ./src/assets/images/birds/Aug 05 2024 7.1 286 500 99.jpg ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a5a9d43a9f698a8f249c.jpg";

/***/ }),

/***/ "./src/assets/images/birds/Aug 16 2024 6.3 300 1000 123.jpg":
/*!******************************************************************!*\
  !*** ./src/assets/images/birds/Aug 16 2024 6.3 300 1000 123.jpg ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "652e5958b886b2952b61.jpg";

/***/ }),

/***/ "./src/assets/images/birds/Aug 16 2024 6.3 300 640 124.jpg":
/*!*****************************************************************!*\
  !*** ./src/assets/images/birds/Aug 16 2024 6.3 300 640 124.jpg ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "1776ad0677a49511a95f.jpg";

/***/ }),

/***/ "./src/assets/images/birds/Aug 16 2024 8 300 400 129.jpg":
/*!***************************************************************!*\
  !*** ./src/assets/images/birds/Aug 16 2024 8 300 400 129.jpg ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "4ef80448293e3167bb7b.jpg";

/***/ }),

/***/ "./src/assets/images/birds/Aug 16 2024 9 300 400 135.jpg":
/*!***************************************************************!*\
  !*** ./src/assets/images/birds/Aug 16 2024 9 300 400 135.jpg ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "abdf69c62d0f97f2c303.jpg";

/***/ }),

/***/ "./src/assets/images/birds/Aug 23 2024 7.1 300 1000 149.jpg":
/*!******************************************************************!*\
  !*** ./src/assets/images/birds/Aug 23 2024 7.1 300 1000 149.jpg ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "e246082a3d7c5ba2bb0b.jpg";

/***/ }),

/***/ "./src/assets/images/birds/IMG_20170915_175614_853.jpg":
/*!*************************************************************!*\
  !*** ./src/assets/images/birds/IMG_20170915_175614_853.jpg ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "bea82c54e61eeb4a68d6.jpg";

/***/ }),

/***/ "./src/assets/images/birds/IMG_20170924_212051_592.jpg":
/*!*************************************************************!*\
  !*** ./src/assets/images/birds/IMG_20170924_212051_592.jpg ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "af4dd8eb81abefe4edb8.jpg";

/***/ }),

/***/ "./src/assets/images/birds/IMG_20170924_221201_142.jpg":
/*!*************************************************************!*\
  !*** ./src/assets/images/birds/IMG_20170924_221201_142.jpg ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "9a99fe05d0d837038a05.jpg";

/***/ }),

/***/ "./src/assets/images/birds/IMG_20170925_083030_471.jpg":
/*!*************************************************************!*\
  !*** ./src/assets/images/birds/IMG_20170925_083030_471.jpg ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "2d7b213b95b2da438b59.jpg";

/***/ }),

/***/ "./src/assets/images/birds/IMG_20170926_172240_744.jpg":
/*!*************************************************************!*\
  !*** ./src/assets/images/birds/IMG_20170926_172240_744.jpg ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "1af2b3024fbcdff81754.jpg";

/***/ }),

/***/ "./src/assets/images/birds/IMG_20180511_100847_926.jpg":
/*!*************************************************************!*\
  !*** ./src/assets/images/birds/IMG_20180511_100847_926.jpg ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "20f946aa57a95cb0d27e.jpg";

/***/ }),

/***/ "./src/assets/images/birds/IMG_20230409_100404_988.jpg":
/*!*************************************************************!*\
  !*** ./src/assets/images/birds/IMG_20230409_100404_988.jpg ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "df4f038c6fadd421692d.jpg";

/***/ }),

/***/ "./src/assets/images/birds/IMG_20230423_172535_410.jpg":
/*!*************************************************************!*\
  !*** ./src/assets/images/birds/IMG_20230423_172535_410.jpg ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "280ac2d07ec955f2182b.jpg";

/***/ }),

/***/ "./src/assets/images/birds/IMG_20230716_123750_367.jpg":
/*!*************************************************************!*\
  !*** ./src/assets/images/birds/IMG_20230716_123750_367.jpg ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "8737422b25a7fb7f5d5a.jpg";

/***/ }),

/***/ "./src/assets/images/birds/IMG_20230724_141712_371.jpg":
/*!*************************************************************!*\
  !*** ./src/assets/images/birds/IMG_20230724_141712_371.jpg ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "cbe333a1298fbc812d86.jpg";

/***/ }),

/***/ "./src/assets/images/birds/IMG_20230804_190740_465.jpg":
/*!*************************************************************!*\
  !*** ./src/assets/images/birds/IMG_20230804_190740_465.jpg ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "9d7521586ad334d37223.jpg";

/***/ }),

/***/ "./src/assets/images/birds/IMG_20231016_194036_980.jpg":
/*!*************************************************************!*\
  !*** ./src/assets/images/birds/IMG_20231016_194036_980.jpg ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "4b0259a61f3c088708dd.jpg";

/***/ }),

/***/ "./src/assets/images/birds/_DSC4144 Dec 27 2024.jpg":
/*!**********************************************************!*\
  !*** ./src/assets/images/birds/_DSC4144 Dec 27 2024.jpg ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "57122f1a2895535049f4.jpg";

/***/ }),

/***/ "./src/assets/images/birds/_DSC4350 Jan 18 2025 7.1 300 2000 2.jpg":
/*!*************************************************************************!*\
  !*** ./src/assets/images/birds/_DSC4350 Jan 18 2025 7.1 300 2000 2.jpg ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ef0cd822466364a0de7e.jpg";

/***/ }),

/***/ "./src/assets/images/birds/_DSC4454 Jan 18 2025 8 300 3200.jpg":
/*!*********************************************************************!*\
  !*** ./src/assets/images/birds/_DSC4454 Jan 18 2025 8 300 3200.jpg ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "12a8ae74b53688f90b3f.jpg";

/***/ }),

/***/ "./src/assets/images/birds/_DSC5081 Apr 08 2025 7.1 287 6400.jpg":
/*!***********************************************************************!*\
  !*** ./src/assets/images/birds/_DSC5081 Apr 08 2025 7.1 287 6400.jpg ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "dfe863dedd5b18b79a60.jpg";

/***/ }),

/***/ "./src/assets/images/birds/_DSC5361 Apr 17 2025 7.1 300 2500 3.jpg":
/*!*************************************************************************!*\
  !*** ./src/assets/images/birds/_DSC5361 Apr 17 2025 7.1 300 2500 3.jpg ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "d4af676154e57d7adbd7.jpg";

/***/ }),

/***/ "./src/assets/images/birds/_DSC5698 May 08 2025 7.1 300 1600 1.jpg":
/*!*************************************************************************!*\
  !*** ./src/assets/images/birds/_DSC5698 May 08 2025 7.1 300 1600 1.jpg ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "b72c8881ffb702e1f386.jpg";

/***/ }),

/***/ "./src/assets/images/birds/_DSC6037 May 17 2025 9 300 100 3.jpg":
/*!**********************************************************************!*\
  !*** ./src/assets/images/birds/_DSC6037 May 17 2025 9 300 100 3.jpg ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ccba2eb7e0a0e1eb0bb6.jpg";

/***/ }),

/***/ "./src/assets/images/birds/_DSC6225 May 20 2025 7.1 300 5000 1.jpg":
/*!*************************************************************************!*\
  !*** ./src/assets/images/birds/_DSC6225 May 20 2025 7.1 300 5000 1.jpg ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "58c65262f7633a9a6888.jpg";

/***/ }),

/***/ "./src/assets/images/family and travel/20161223_140522.jpg":
/*!*****************************************************************!*\
  !*** ./src/assets/images/family and travel/20161223_140522.jpg ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "7185bc3a9414fb9d648c.jpg";

/***/ }),

/***/ "./src/assets/images/family and travel/20161223_140554.jpg":
/*!*****************************************************************!*\
  !*** ./src/assets/images/family and travel/20161223_140554.jpg ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fd0e243288100b46fe74.jpg";

/***/ }),

/***/ "./src/assets/images/family and travel/20161226_112412.jpg":
/*!*****************************************************************!*\
  !*** ./src/assets/images/family and travel/20161226_112412.jpg ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "babea32720e7846e0416.jpg";

/***/ }),

/***/ "./src/assets/images/family and travel/20161231_115411.jpg":
/*!*****************************************************************!*\
  !*** ./src/assets/images/family and travel/20161231_115411.jpg ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "73bfaf6a2d68a4881aa7.jpg";

/***/ }),

/***/ "./src/assets/images/family and travel/20170901_211918.jpg":
/*!*****************************************************************!*\
  !*** ./src/assets/images/family and travel/20170901_211918.jpg ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ef5c59d436357f199ca2.jpg";

/***/ }),

/***/ "./src/assets/images/family and travel/20170912_094735.jpg":
/*!*****************************************************************!*\
  !*** ./src/assets/images/family and travel/20170912_094735.jpg ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "0cc88b1090d358e49d73.jpg";

/***/ }),

/***/ "./src/assets/images/family and travel/20170914_163808.jpg":
/*!*****************************************************************!*\
  !*** ./src/assets/images/family and travel/20170914_163808.jpg ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "497195bd37278b616411.jpg";

/***/ }),

/***/ "./src/assets/images/family and travel/20171226_144248.jpg":
/*!*****************************************************************!*\
  !*** ./src/assets/images/family and travel/20171226_144248.jpg ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "12749ac2c2411056f8a8.jpg";

/***/ }),

/***/ "./src/assets/images/family and travel/20180120_185041.jpg":
/*!*****************************************************************!*\
  !*** ./src/assets/images/family and travel/20180120_185041.jpg ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fdf989719047d4f6a52b.jpg";

/***/ }),

/***/ "./src/assets/images/family and travel/20180121_182710.jpg":
/*!*****************************************************************!*\
  !*** ./src/assets/images/family and travel/20180121_182710.jpg ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "47edcbed101e7f05a4b7.jpg";

/***/ }),

/***/ "./src/assets/images/family and travel/20180407_085022.jpg":
/*!*****************************************************************!*\
  !*** ./src/assets/images/family and travel/20180407_085022.jpg ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "4a6892eeca99b30c301d.jpg";

/***/ }),

/***/ "./src/assets/images/family and travel/20180411_090617.jpg":
/*!*****************************************************************!*\
  !*** ./src/assets/images/family and travel/20180411_090617.jpg ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "5aa3fae12f9e39bf7a58.jpg";

/***/ }),

/***/ "./src/assets/images/family and travel/20180422_160812.jpg":
/*!*****************************************************************!*\
  !*** ./src/assets/images/family and travel/20180422_160812.jpg ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "d59bbeafcfddf268cd86.jpg";

/***/ }),

/***/ "./src/assets/images/family and travel/20180424_221054.jpg":
/*!*****************************************************************!*\
  !*** ./src/assets/images/family and travel/20180424_221054.jpg ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "eedf059d5582ced0d5ed.jpg";

/***/ }),

/***/ "./src/assets/images/family and travel/20180426_123423.jpg":
/*!*****************************************************************!*\
  !*** ./src/assets/images/family and travel/20180426_123423.jpg ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "88462c1fa821569c7919.jpg";

/***/ }),

/***/ "./src/assets/images/family and travel/20180506_220957.jpg":
/*!*****************************************************************!*\
  !*** ./src/assets/images/family and travel/20180506_220957.jpg ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "5aeb13a157f7e8042810.jpg";

/***/ }),

/***/ "./src/assets/images/family and travel/20180629_155331.jpg":
/*!*****************************************************************!*\
  !*** ./src/assets/images/family and travel/20180629_155331.jpg ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "3e359e9e152d439dbd94.jpg";

/***/ }),

/***/ "./src/assets/images/family and travel/20180727_185804.jpg":
/*!*****************************************************************!*\
  !*** ./src/assets/images/family and travel/20180727_185804.jpg ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "010813d641d3759e4e19.jpg";

/***/ }),

/***/ "./src/assets/images/family and travel/20181214_140423.jpg":
/*!*****************************************************************!*\
  !*** ./src/assets/images/family and travel/20181214_140423.jpg ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "1d8d43aa028258b88bd0.jpg";

/***/ }),

/***/ "./src/assets/images/family and travel/20181214_140435.jpg":
/*!*****************************************************************!*\
  !*** ./src/assets/images/family and travel/20181214_140435.jpg ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "48bb1ca9bfe1963851bf.jpg";

/***/ }),

/***/ "./src/assets/images/family and travel/20181215_144430.jpg":
/*!*****************************************************************!*\
  !*** ./src/assets/images/family and travel/20181215_144430.jpg ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a5122c6594ea56d4b3b2.jpg";

/***/ }),

/***/ "./src/assets/images/family and travel/20181215_144439.jpg":
/*!*****************************************************************!*\
  !*** ./src/assets/images/family and travel/20181215_144439.jpg ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "12f2cc656faaf2899e8d.jpg";

/***/ }),

/***/ "./src/assets/images/family and travel/20190221_164801.jpg":
/*!*****************************************************************!*\
  !*** ./src/assets/images/family and travel/20190221_164801.jpg ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "7dabe672f9520414e86e.jpg";

/***/ }),

/***/ "./src/assets/images/family and travel/20190508_204924.jpg":
/*!*****************************************************************!*\
  !*** ./src/assets/images/family and travel/20190508_204924.jpg ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "40cdb813563a6dc56cb6.jpg";

/***/ }),

/***/ "./src/assets/images/family and travel/Apr 06 2024 9 70 800 25.jpg":
/*!*************************************************************************!*\
  !*** ./src/assets/images/family and travel/Apr 06 2024 9 70 800 25.jpg ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "9a2da93a80c88a1f13d0.jpg";

/***/ }),

/***/ "./src/assets/images/family and travel/Apr 06 2024 9 78 1000 26.jpg":
/*!**************************************************************************!*\
  !*** ./src/assets/images/family and travel/Apr 06 2024 9 78 1000 26.jpg ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "8fd4ea401b682942dcda.jpg";

/***/ }),

/***/ "./src/assets/images/family and travel/Aug 02 2024 6.3 24 1000 78.jpg":
/*!****************************************************************************!*\
  !*** ./src/assets/images/family and travel/Aug 02 2024 6.3 24 1000 78.jpg ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "b2f1c266778df5f806c1.jpg";

/***/ }),

/***/ "./src/assets/images/family and travel/Aug 02 2024 6.3 24 1250 112.jpg":
/*!*****************************************************************************!*\
  !*** ./src/assets/images/family and travel/Aug 02 2024 6.3 24 1250 112.jpg ***!
  \*****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "0fb75c8c142cd3be265c.jpg";

/***/ }),

/***/ "./src/assets/images/family and travel/DSC00261.JPG":
/*!**********************************************************!*\
  !*** ./src/assets/images/family and travel/DSC00261.JPG ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "30d9be604725a98b9142.JPG";

/***/ }),

/***/ "./src/assets/images/family and travel/DSC00559.JPG":
/*!**********************************************************!*\
  !*** ./src/assets/images/family and travel/DSC00559.JPG ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "f7823444f45d33beb36c.JPG";

/***/ }),

/***/ "./src/assets/images/family and travel/DSC00560.JPG":
/*!**********************************************************!*\
  !*** ./src/assets/images/family and travel/DSC00560.JPG ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "79d09a2956d08d1a6505.JPG";

/***/ }),

/***/ "./src/assets/images/family and travel/DSC01431.JPG":
/*!**********************************************************!*\
  !*** ./src/assets/images/family and travel/DSC01431.JPG ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "7a90e5d03c74ebc8509b.JPG";

/***/ }),

/***/ "./src/assets/images/family and travel/DSC01767.JPG":
/*!**********************************************************!*\
  !*** ./src/assets/images/family and travel/DSC01767.JPG ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "2d6a252242161a7196e2.JPG";

/***/ }),

/***/ "./src/assets/images/family and travel/DSC06832.JPG":
/*!**********************************************************!*\
  !*** ./src/assets/images/family and travel/DSC06832.JPG ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a8b3251b4cd8586ad49a.JPG";

/***/ }),

/***/ "./src/assets/images/family and travel/DSC08298.JPG":
/*!**********************************************************!*\
  !*** ./src/assets/images/family and travel/DSC08298.JPG ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "dbcd787ce23a83ba8e63.JPG";

/***/ }),

/***/ "./src/assets/images/family and travel/DSC08410.JPG":
/*!**********************************************************!*\
  !*** ./src/assets/images/family and travel/DSC08410.JPG ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "462fbb05b09f5e20f6a4.JPG";

/***/ }),

/***/ "./src/assets/images/family and travel/DSC08807.JPG":
/*!**********************************************************!*\
  !*** ./src/assets/images/family and travel/DSC08807.JPG ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a78e90c9f33c14c7eef5.JPG";

/***/ }),

/***/ "./src/assets/images/family and travel/DSC_0451.JPG":
/*!**********************************************************!*\
  !*** ./src/assets/images/family and travel/DSC_0451.JPG ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "e5e83c5ec38fd9ab76ab.JPG";

/***/ }),

/***/ "./src/assets/images/family and travel/DSC_0486.JPG":
/*!**********************************************************!*\
  !*** ./src/assets/images/family and travel/DSC_0486.JPG ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "eb73f316bf2bfd3cfc68.JPG";

/***/ }),

/***/ "./src/assets/images/family and travel/DSC_0522.JPG":
/*!**********************************************************!*\
  !*** ./src/assets/images/family and travel/DSC_0522.JPG ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "105819b27b39aad93f3a.JPG";

/***/ }),

/***/ "./src/assets/images/family and travel/IMG-20230430-WA0007.jpg":
/*!*********************************************************************!*\
  !*** ./src/assets/images/family and travel/IMG-20230430-WA0007.jpg ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ff638c59bba2f007061d.jpg";

/***/ }),

/***/ "./src/assets/images/family and travel/IMG-20230625-WA0000.jpg":
/*!*********************************************************************!*\
  !*** ./src/assets/images/family and travel/IMG-20230625-WA0000.jpg ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "c0ca6e21fb285e2ad55e.jpg";

/***/ }),

/***/ "./src/assets/images/family and travel/IMG-20230702-WA0001.jpg":
/*!*********************************************************************!*\
  !*** ./src/assets/images/family and travel/IMG-20230702-WA0001.jpg ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "f512983b5e099e074083.jpg";

/***/ }),

/***/ "./src/assets/images/family and travel/IMG_20160308_154009.jpg":
/*!*********************************************************************!*\
  !*** ./src/assets/images/family and travel/IMG_20160308_154009.jpg ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "b748d22130786190cde9.jpg";

/***/ }),

/***/ "./src/assets/images/family and travel/IMG_20161225_202530_762.jpg":
/*!*************************************************************************!*\
  !*** ./src/assets/images/family and travel/IMG_20161225_202530_762.jpg ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a0bcdfe441af1825f537.jpg";

/***/ }),

/***/ "./src/assets/images/family and travel/IMG_20170905_163655_942.jpg":
/*!*************************************************************************!*\
  !*** ./src/assets/images/family and travel/IMG_20170905_163655_942.jpg ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "4e38ca290cd4c54057e8.jpg";

/***/ }),

/***/ "./src/assets/images/family and travel/IMG_20170907_093248_063.jpg":
/*!*************************************************************************!*\
  !*** ./src/assets/images/family and travel/IMG_20170907_093248_063.jpg ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "1bdab95e09d030496d8e.jpg";

/***/ }),

/***/ "./src/assets/images/family and travel/IMG_20170909_141344_050.jpg":
/*!*************************************************************************!*\
  !*** ./src/assets/images/family and travel/IMG_20170909_141344_050.jpg ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "176d153b9705d77f5f9f.jpg";

/***/ }),

/***/ "./src/assets/images/family and travel/IMG_20170909_164720_680.jpg":
/*!*************************************************************************!*\
  !*** ./src/assets/images/family and travel/IMG_20170909_164720_680.jpg ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ea312a2470bfe2b46db8.jpg";

/***/ }),

/***/ "./src/assets/images/family and travel/IMG_20170909_213027_713.jpg":
/*!*************************************************************************!*\
  !*** ./src/assets/images/family and travel/IMG_20170909_213027_713.jpg ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "01f2c43f9917086810e1.jpg";

/***/ }),

/***/ "./src/assets/images/family and travel/IMG_20180520_094828_464.jpg":
/*!*************************************************************************!*\
  !*** ./src/assets/images/family and travel/IMG_20180520_094828_464.jpg ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "7a94df31de649c8e82df.jpg";

/***/ }),

/***/ "./src/assets/images/family and travel/IMG_20181111_151901_488.jpg":
/*!*************************************************************************!*\
  !*** ./src/assets/images/family and travel/IMG_20181111_151901_488.jpg ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "9f79d023aa461e0d2d52.jpg";

/***/ }),

/***/ "./src/assets/images/family and travel/IMG_20190901_115736_381.jpg":
/*!*************************************************************************!*\
  !*** ./src/assets/images/family and travel/IMG_20190901_115736_381.jpg ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "6b1b50446a50f77159b3.jpg";

/***/ }),

/***/ "./src/assets/images/family and travel/IMG_20201018_164501.jpg":
/*!*********************************************************************!*\
  !*** ./src/assets/images/family and travel/IMG_20201018_164501.jpg ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "3332f36d68fbaa3c4451.jpg";

/***/ }),

/***/ "./src/assets/images/family and travel/IMG_20201205_102453_894.jpg":
/*!*************************************************************************!*\
  !*** ./src/assets/images/family and travel/IMG_20201205_102453_894.jpg ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "bbafec6a3cea475179cc.jpg";

/***/ }),

/***/ "./src/assets/images/family and travel/IMG_20201207_200919_332.jpg":
/*!*************************************************************************!*\
  !*** ./src/assets/images/family and travel/IMG_20201207_200919_332.jpg ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "384be1615a0a37088021.jpg";

/***/ }),

/***/ "./src/assets/images/family and travel/IMG_20201207_200919_333.jpg":
/*!*************************************************************************!*\
  !*** ./src/assets/images/family and travel/IMG_20201207_200919_333.jpg ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a4f60e1fa755b7908221.jpg";

/***/ }),

/***/ "./src/assets/images/family and travel/IMG_20210205_133535_789.jpg":
/*!*************************************************************************!*\
  !*** ./src/assets/images/family and travel/IMG_20210205_133535_789.jpg ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a0eb93aa9f4b1e1baf31.jpg";

/***/ }),

/***/ "./src/assets/images/family and travel/IMG_20210214_165301_187.jpg":
/*!*************************************************************************!*\
  !*** ./src/assets/images/family and travel/IMG_20210214_165301_187.jpg ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "e0e0b0a8b5ff40891a45.jpg";

/***/ }),

/***/ "./src/assets/images/family and travel/IMG_20210425_112753_871.jpg":
/*!*************************************************************************!*\
  !*** ./src/assets/images/family and travel/IMG_20210425_112753_871.jpg ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "47c1d8c1e7f33599bb0d.jpg";

/***/ }),

/***/ "./src/assets/images/family and travel/IMG_20210518_170510.jpg":
/*!*********************************************************************!*\
  !*** ./src/assets/images/family and travel/IMG_20210518_170510.jpg ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "bff3ccd08805cd515f56.jpg";

/***/ }),

/***/ "./src/assets/images/family and travel/IMG_20210530_112656_208.jpg":
/*!*************************************************************************!*\
  !*** ./src/assets/images/family and travel/IMG_20210530_112656_208.jpg ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "87552e995a618682937c.jpg";

/***/ }),

/***/ "./src/assets/images/family and travel/IMG_20220616_131236.jpg":
/*!*********************************************************************!*\
  !*** ./src/assets/images/family and travel/IMG_20220616_131236.jpg ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "32b9854f9abb64ffb9c6.jpg";

/***/ }),

/***/ "./src/assets/images/family and travel/IMG_20220616_131244.jpg":
/*!*********************************************************************!*\
  !*** ./src/assets/images/family and travel/IMG_20220616_131244.jpg ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "39833893ebeb3029f497.jpg";

/***/ }),

/***/ "./src/assets/images/family and travel/IMG_20220618_125735.jpg":
/*!*********************************************************************!*\
  !*** ./src/assets/images/family and travel/IMG_20220618_125735.jpg ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "f9363044e3372422b7dd.jpg";

/***/ }),

/***/ "./src/assets/images/family and travel/IMG_20220618_172138.jpg":
/*!*********************************************************************!*\
  !*** ./src/assets/images/family and travel/IMG_20220618_172138.jpg ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "9cf33d433f55c6ae8a32.jpg";

/***/ }),

/***/ "./src/assets/images/family and travel/IMG_20220703_120548.jpg":
/*!*********************************************************************!*\
  !*** ./src/assets/images/family and travel/IMG_20220703_120548.jpg ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "abf2f740be5b1577430c.jpg";

/***/ }),

/***/ "./src/assets/images/family and travel/IMG_20230508_090239.jpg":
/*!*********************************************************************!*\
  !*** ./src/assets/images/family and travel/IMG_20230508_090239.jpg ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "7e32f121916fc97321f1.jpg";

/***/ }),

/***/ "./src/assets/images/family and travel/IMG_20230508_090253.jpg":
/*!*********************************************************************!*\
  !*** ./src/assets/images/family and travel/IMG_20230508_090253.jpg ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fc1ae5531c3960a8163f.jpg";

/***/ }),

/***/ "./src/assets/images/family and travel/IMG_20230508_090257.jpg":
/*!*********************************************************************!*\
  !*** ./src/assets/images/family and travel/IMG_20230508_090257.jpg ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "112942c87671bbe2203d.jpg";

/***/ }),

/***/ "./src/assets/images/family and travel/IMG_20231221_065527.jpg":
/*!*********************************************************************!*\
  !*** ./src/assets/images/family and travel/IMG_20231221_065527.jpg ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "002eb594ac178bc4e603.jpg";

/***/ }),

/***/ "./src/assets/images/family and travel/IMG_20241114_164227.jpg":
/*!*********************************************************************!*\
  !*** ./src/assets/images/family and travel/IMG_20241114_164227.jpg ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "6e595c10b995ba9081ed.jpg";

/***/ }),

/***/ "./src/assets/images/family and travel/IMG_2296.jpg":
/*!**********************************************************!*\
  !*** ./src/assets/images/family and travel/IMG_2296.jpg ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "013bff40caddf5331033.jpg";

/***/ }),

/***/ "./src/assets/images/family and travel/IMG_5379.jpg":
/*!**********************************************************!*\
  !*** ./src/assets/images/family and travel/IMG_5379.jpg ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "7a01938d87738b972673.jpg";

/***/ }),

/***/ "./src/assets/images/family and travel/Jeremy and Connie - Hardwick MA November 2023.jpg":
/*!***********************************************************************************************!*\
  !*** ./src/assets/images/family and travel/Jeremy and Connie - Hardwick MA November 2023.jpg ***!
  \***********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "7652b023f93353777192.jpg";

/***/ }),

/***/ "./src/assets/images/family and travel/Montreal3.jpg":
/*!***********************************************************!*\
  !*** ./src/assets/images/family and travel/Montreal3.jpg ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ab67e9ef033f9c9f28b2.jpg";

/***/ }),

/***/ "./src/assets/images/family and travel/Monument to the Discoveries.jpg":
/*!*****************************************************************************!*\
  !*** ./src/assets/images/family and travel/Monument to the Discoveries.jpg ***!
  \*****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "60d7f06fd5e4171a88e2.jpg";

/***/ }),

/***/ "./src/assets/images/family and travel/Oct 04 2020 7.1 1-125s  400 006.jpg":
/*!*********************************************************************************!*\
  !*** ./src/assets/images/family and travel/Oct 04 2020 7.1 1-125s  400 006.jpg ***!
  \*********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ae8dc1e3a5355977bf27.jpg";

/***/ }),

/***/ "./src/assets/images/family and travel/mms_20160115_133809.jpg":
/*!*********************************************************************!*\
  !*** ./src/assets/images/family and travel/mms_20160115_133809.jpg ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "560708fc82182893500e.jpg";

/***/ }),

/***/ "./src/assets/images/landscape and nature/20180711_163526.jpg":
/*!********************************************************************!*\
  !*** ./src/assets/images/landscape and nature/20180711_163526.jpg ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "7326051972c4bfa2f8e8.jpg";

/***/ }),

/***/ "./src/assets/images/landscape and nature/Aug 05 2024 8 70 1000 90.jpg":
/*!*****************************************************************************!*\
  !*** ./src/assets/images/landscape and nature/Aug 05 2024 8 70 1000 90.jpg ***!
  \*****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "16f1822e5c2fd8c4c2c0.jpg";

/***/ }),

/***/ "./src/assets/images/landscape and nature/Aug 06 2024 7.1 300 1000 102.jpg":
/*!*********************************************************************************!*\
  !*** ./src/assets/images/landscape and nature/Aug 06 2024 7.1 300 1000 102.jpg ***!
  \*********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "b41f4f02b98738f9c186.jpg";

/***/ }),

/***/ "./src/assets/images/landscape and nature/DSC00005.JPG":
/*!*************************************************************!*\
  !*** ./src/assets/images/landscape and nature/DSC00005.JPG ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "d1b6ca1f198a7c52ce26.JPG";

/***/ }),

/***/ "./src/assets/images/landscape and nature/DSC00027.JPG":
/*!*************************************************************!*\
  !*** ./src/assets/images/landscape and nature/DSC00027.JPG ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a050fbc598c4caa5be7c.JPG";

/***/ }),

/***/ "./src/assets/images/landscape and nature/Dec 31 2022 7.1 1-160s  800 137.jpg":
/*!************************************************************************************!*\
  !*** ./src/assets/images/landscape and nature/Dec 31 2022 7.1 1-160s  800 137.jpg ***!
  \************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "c6479273045f967f52e8.jpg";

/***/ }),

/***/ "./src/assets/images/landscape and nature/IMG_20170909_214447_985.jpg":
/*!****************************************************************************!*\
  !*** ./src/assets/images/landscape and nature/IMG_20170909_214447_985.jpg ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "da0344ef663683ee6ff5.jpg";

/***/ }),

/***/ "./src/assets/images/landscape and nature/IMG_20171001_222100_576.jpg":
/*!****************************************************************************!*\
  !*** ./src/assets/images/landscape and nature/IMG_20171001_222100_576.jpg ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "eb1c99901f471592f601.jpg";

/***/ }),

/***/ "./src/assets/images/landscape and nature/IMG_20190613_122752_058.jpg":
/*!****************************************************************************!*\
  !*** ./src/assets/images/landscape and nature/IMG_20190613_122752_058.jpg ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "3dab591f2f92cdfde8c2.jpg";

/***/ }),

/***/ "./src/assets/images/landscape and nature/IMG_20201124_153057_787.jpg":
/*!****************************************************************************!*\
  !*** ./src/assets/images/landscape and nature/IMG_20201124_153057_787.jpg ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "89305eff3f4e53821caa.jpg";

/***/ }),

/***/ "./src/assets/images/landscape and nature/IMG_20210214_083635_185.jpg":
/*!****************************************************************************!*\
  !*** ./src/assets/images/landscape and nature/IMG_20210214_083635_185.jpg ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ef547eb96e4d475081ef.jpg";

/***/ }),

/***/ "./src/assets/images/landscape and nature/IMG_20211201_161430_763.jpg":
/*!****************************************************************************!*\
  !*** ./src/assets/images/landscape and nature/IMG_20211201_161430_763.jpg ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "412b1a8a516b4f0421da.jpg";

/***/ }),

/***/ "./src/assets/images/landscape and nature/IMG_20220710_102427_116.jpg":
/*!****************************************************************************!*\
  !*** ./src/assets/images/landscape and nature/IMG_20220710_102427_116.jpg ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "55a08959ef1e64d0f004.jpg";

/***/ }),

/***/ "./src/assets/images/landscape and nature/IMG_20220905_192730_135.jpg":
/*!****************************************************************************!*\
  !*** ./src/assets/images/landscape and nature/IMG_20220905_192730_135.jpg ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "44e9caf4ff368845f454.jpg";

/***/ }),

/***/ "./src/assets/images/landscape and nature/IMG_20221231_190142_243.jpg":
/*!****************************************************************************!*\
  !*** ./src/assets/images/landscape and nature/IMG_20221231_190142_243.jpg ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "215e2b0ec3a6000bdd43.jpg";

/***/ }),

/***/ "./src/assets/images/landscape and nature/IMG_20221231_190142_290.jpg":
/*!****************************************************************************!*\
  !*** ./src/assets/images/landscape and nature/IMG_20221231_190142_290.jpg ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a77b064af7fa226a4828.jpg";

/***/ }),

/***/ "./src/assets/images/landscape and nature/IMG_20230508_081915_459.jpg":
/*!****************************************************************************!*\
  !*** ./src/assets/images/landscape and nature/IMG_20230508_081915_459.jpg ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "65251887e0df62415737.jpg";

/***/ }),

/***/ "./src/assets/images/landscape and nature/IMG_20230508_081915_500.jpg":
/*!****************************************************************************!*\
  !*** ./src/assets/images/landscape and nature/IMG_20230508_081915_500.jpg ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ab56796915b951e91476.jpg";

/***/ }),

/***/ "./src/assets/images/landscape and nature/Nov42018_1.jpg":
/*!***************************************************************!*\
  !*** ./src/assets/images/landscape and nature/Nov42018_1.jpg ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "7a8e5845fe2c958a55d1.jpg";

/***/ }),

/***/ "./src/assets/images/landscape and nature/Oct 28 2023 6.3 1-1000s 1000 403.jpg":
/*!*************************************************************************************!*\
  !*** ./src/assets/images/landscape and nature/Oct 28 2023 6.3 1-1000s 1000 403.jpg ***!
  \*************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "cd3c9691ba57ba54f3a4.jpg";

/***/ }),

/***/ "./src/assets/images/landscape and nature/_DSC5646 May 06 2025 10 161 4000.jpg":
/*!*************************************************************************************!*\
  !*** ./src/assets/images/landscape and nature/_DSC5646 May 06 2025 10 161 4000.jpg ***!
  \*************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "be8ceffc05bf6aecb9c7.jpg";

/***/ }),

/***/ "./src/assets/images/landscape and nature/_DSC5662 May 06 2025 8 70 320.jpg":
/*!**********************************************************************************!*\
  !*** ./src/assets/images/landscape and nature/_DSC5662 May 06 2025 8 70 320.jpg ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "6645724ee56acd4cb9e2.jpg";

/***/ }),

/***/ "./src/assets/images/street/20161225_210334.jpg":
/*!******************************************************!*\
  !*** ./src/assets/images/street/20161225_210334.jpg ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "8e40e44b71ea8fd6d8b5.jpg";

/***/ }),

/***/ "./src/assets/images/street/20190320_095337.jpg":
/*!******************************************************!*\
  !*** ./src/assets/images/street/20190320_095337.jpg ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "96b1711c5f91a6570117.jpg";

/***/ }),

/***/ "./src/assets/images/street/20190429_194310.jpg":
/*!******************************************************!*\
  !*** ./src/assets/images/street/20190429_194310.jpg ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "19db8c695faa81e84286.jpg";

/***/ }),

/***/ "./src/assets/images/street/20190430_153908.jpg":
/*!******************************************************!*\
  !*** ./src/assets/images/street/20190430_153908.jpg ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "d90a3c504def41fbc7db.jpg";

/***/ }),

/***/ "./src/assets/images/street/DSC00075.JPG":
/*!***********************************************!*\
  !*** ./src/assets/images/street/DSC00075.JPG ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a32ebdca14ae38e8e799.JPG";

/***/ }),

/***/ "./src/assets/images/street/DSC01821.JPG":
/*!***********************************************!*\
  !*** ./src/assets/images/street/DSC01821.JPG ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "dd40f93e084470689eec.JPG";

/***/ }),

/***/ "./src/assets/images/street/DSC05212 May 07 2025 2 24 1000.jpg":
/*!*********************************************************************!*\
  !*** ./src/assets/images/street/DSC05212 May 07 2025 2 24 1000.jpg ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "0ef4da10970b2abd10a5.jpg";

/***/ }),

/***/ "./src/assets/images/street/DSC05230 May 08 2025 5 24 100 1.jpg":
/*!**********************************************************************!*\
  !*** ./src/assets/images/street/DSC05230 May 08 2025 5 24 100 1.jpg ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "6755fc598a56f5689fde.jpg";

/***/ }),

/***/ "./src/assets/images/street/DSC07480.JPG":
/*!***********************************************!*\
  !*** ./src/assets/images/street/DSC07480.JPG ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "047b94953675df99d7b9.JPG";

/***/ }),

/***/ "./src/assets/images/street/IMG_20180822_201545_091.jpg":
/*!**************************************************************!*\
  !*** ./src/assets/images/street/IMG_20180822_201545_091.jpg ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "745a4f38c7ba832f765e.jpg";

/***/ }),

/***/ "./src/assets/images/street/IMG_20180824_102501_232.jpg":
/*!**************************************************************!*\
  !*** ./src/assets/images/street/IMG_20180824_102501_232.jpg ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "9de901963859f335ad39.jpg";

/***/ }),

/***/ "./src/assets/images/street/IMG_20190317_100549_790.jpg":
/*!**************************************************************!*\
  !*** ./src/assets/images/street/IMG_20190317_100549_790.jpg ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "40f7c5b55461f4a9b85d.jpg";

/***/ }),

/***/ "./src/assets/images/street/IMG_20191012_142421_111.jpg":
/*!**************************************************************!*\
  !*** ./src/assets/images/street/IMG_20191012_142421_111.jpg ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a3455941a9845b76c024.jpg";

/***/ }),

/***/ "./src/assets/images/street/IMG_20191012_142421_122.jpg":
/*!**************************************************************!*\
  !*** ./src/assets/images/street/IMG_20191012_142421_122.jpg ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "23fe98381efbee5fd142.jpg";

/***/ }),

/***/ "./src/assets/images/street/IMG_20210530_112445_399.jpg":
/*!**************************************************************!*\
  !*** ./src/assets/images/street/IMG_20210530_112445_399.jpg ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "3dcd0cd2414733264d77.jpg";

/***/ }),

/***/ "./src/assets/images/street/IMG_20210530_112656_124.jpg":
/*!**************************************************************!*\
  !*** ./src/assets/images/street/IMG_20210530_112656_124.jpg ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "14b06e96315467bd16a7.jpg";

/***/ }),

/***/ "./src/assets/images/street/IMG_20210620_173748_494.jpg":
/*!**************************************************************!*\
  !*** ./src/assets/images/street/IMG_20210620_173748_494.jpg ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "878f208b37a3036b50c9.jpg";

/***/ }),

/***/ "./src/assets/images/street/RockefellerCenter04.jpg":
/*!**********************************************************!*\
  !*** ./src/assets/images/street/RockefellerCenter04.jpg ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a4966516c7d0287bdfd0.jpg";

/***/ }),

/***/ "./src/assets/images/street/Rua da Junqueira, Belem.jpg":
/*!**************************************************************!*\
  !*** ./src/assets/images/street/Rua da Junqueira, Belem.jpg ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "150b281c4c096576eb39.jpg";

/***/ }),

/***/ "./src/assets/images/street/Rue de Junqueira 345 Belem.jpg":
/*!*****************************************************************!*\
  !*** ./src/assets/images/street/Rue de Junqueira 345 Belem.jpg ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "eb771980be4e61200c70.jpg";

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n\n\n// Supabase configuration\nconst SUPABASE_URL = \"https://yflytqtefkryswvjyjah.supabase.co\"; // Replace with your Supabase URL\nconst SUPABASE_ANON_KEY =\n  \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlmbHl0cXRlZmtyeXN3dmp5amFoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA1NDAwMzIsImV4cCI6MjA2NjExNjAzMn0.3YArPfgIgJLGFvpPquhA0nIfjkosVYtiOmoRNAkPeoY\"; // Replace with your Supabase anon key\n\n// Initialize Supabase client\nconst supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);\n\n// Dynamically import all images from the assets/images directory\nconst images = __webpack_require__(\"./src/assets/images sync recursive \\\\.(png%7Cjpg%7Cjpeg%7Cgif%7Csvg)$i\");\n\n// Store image tags/metadata using image path as key\nconst imageMetadata = {};\n\n// Queue for pending tag updates\nlet pendingUpdates = {};\nlet updateTimer = null;\n\n// Load tags from Supabase\nasync function loadUniversalTags() {\n  try {\n    const { data, error } = await supabase.from(\"image_tags\").select(\"*\");\n\n    if (error) {\n      console.error(\"Error loading tags from Supabase:\", error);\n      return;\n    }\n\n    // Convert array of records back to object format\n    data.forEach((record) => {\n      imageMetadata[record.image_path] = {\n        date: record.date,\n        location: record.location,\n        subjects: record.subjects || [],\n      };\n    });\n\n    console.log(\"Loaded universal tags from Supabase\");\n  } catch (error) {\n    console.error(\"Error connecting to Supabase:\", error);\n  }\n}\n\n// Save tags to Supabase\nasync function saveToSupabase(imagePath, tags) {\n  try {\n    const { error } = await supabase.from(\"image_tags\").upsert({\n      image_path: imagePath,\n      date: tags.date || null,\n      location: tags.location || null,\n      subjects: tags.subjects || [],\n      updated_at: new Date().toISOString(),\n    });\n\n    if (error) {\n      console.error(\"Error saving to Supabase:\", error);\n      showNotification(\"Error saving tags to database. Tags saved locally.\");\n      return false;\n    }\n\n    console.log(\"Tags saved to Supabase successfully\");\n    return true;\n  } catch (error) {\n    console.error(\"Error connecting to Supabase:\", error);\n    showNotification(\"Unable to connect to database. Tags saved locally.\");\n    return false;\n  }\n}\n\n// Show user notifications\nfunction showNotification(message) {\n  const notification = document.createElement(\"div\");\n  notification.className = \"notification\";\n  notification.textContent = message;\n  document.body.appendChild(notification);\n\n  setTimeout(() => {\n    notification.classList.add(\"show\");\n  }, 100);\n\n  setTimeout(() => {\n    notification.classList.remove(\"show\");\n    setTimeout(() => notification.remove(), 300);\n  }, 5000);\n}\n\n// Save tags with batching\nfunction saveImageTags(imagePath, tags) {\n  imageMetadata[imagePath] = { ...imageMetadata[imagePath], ...tags };\n  pendingUpdates[imagePath] = imageMetadata[imagePath];\n\n  // Save locally immediately\n  localStorage.setItem(\"imageMetadata\", JSON.stringify(imageMetadata));\n  updateImageTagsDisplays(imagePath);\n\n  // Batch updates to Supabase\n  if (updateTimer) {\n    clearTimeout(updateTimer);\n  }\n\n  updateTimer = setTimeout(async () => {\n    if (Object.keys(pendingUpdates).length > 0) {\n      let successCount = 0;\n      let totalCount = Object.keys(pendingUpdates).length;\n\n      for (const [path, tagData] of Object.entries(pendingUpdates)) {\n        const success = await saveToSupabase(path, tagData);\n        if (success) successCount++;\n      }\n\n      if (successCount === totalCount) {\n        showNotification(`Successfully saved ${successCount} tag update(s)`);\n      } else if (successCount > 0) {\n        showNotification(`Saved ${successCount} of ${totalCount} tag updates`);\n      }\n\n      pendingUpdates = {};\n    }\n  }, 2000); // Wait 2 seconds before saving to Supabase\n}\n\n// Load previously saved tags from localStorage\nfunction loadSavedTags() {\n  const savedMetadata = localStorage.getItem(\"imageMetadata\");\n  if (savedMetadata) {\n    const localData = JSON.parse(savedMetadata);\n    // Merge local data with imageMetadata, preferring newer data\n    Object.keys(localData).forEach((key) => {\n      if (!imageMetadata[key]) {\n        imageMetadata[key] = localData[key];\n      }\n    });\n  }\n}\n\n// Delete a tag from Supabase\nasync function deleteTagFromSupabase(imagePath, updatedTags) {\n  try {\n    if (\n      Object.keys(updatedTags).length === 0 ||\n      (!updatedTags.date &&\n        !updatedTags.location &&\n        (!updatedTags.subjects || updatedTags.subjects.length === 0))\n    ) {\n      // If no tags left, delete the entire record\n      const { error } = await supabase\n        .from(\"image_tags\")\n        .delete()\n        .eq(\"image_path\", imagePath);\n\n      if (error) {\n        console.error(\"Error deleting from Supabase:\", error);\n        return false;\n      }\n    } else {\n      // Update with remaining tags\n      const { error } = await supabase.from(\"image_tags\").upsert({\n        image_path: imagePath,\n        date: updatedTags.date || null,\n        location: updatedTags.location || null,\n        subjects: updatedTags.subjects || [],\n        updated_at: new Date().toISOString(),\n      });\n\n      if (error) {\n        console.error(\"Error updating Supabase:\", error);\n        return false;\n      }\n    }\n\n    return true;\n  } catch (error) {\n    console.error(\"Error connecting to Supabase:\", error);\n    return false;\n  }\n}\n\n// Rest of your existing code remains the same...\nconst content = document.querySelector(\"#maincontainer\");\n\n// Group images by their folder structure\nconst imagesByFolder = images.keys().reduce((acc, key) => {\n  const path = key.replace(\"./\", \"\");\n  const parts = path.split(\"/\");\n  const fileName = parts.pop();\n  const folderName = parts.length > 0 ? parts[0] : \"uncategorized\";\n\n  if (!acc[folderName]) {\n    acc[folderName] = [];\n  }\n\n  acc[folderName].push({\n    fileName,\n    path: key,\n    url: images(key),\n  });\n\n  return acc;\n}, {});\n\n// [Include all your existing functions here - getImageDimensions, layoutImages, etc.]\n// I'll include the key ones that might need modification:\n\n// Modified deleteTag function to work with Supabase\nfunction deleteTag(tagItem) {\n  if (!tagItem) return;\n\n  const imagePath = tagItem.dataset.imagePath;\n  const tagType = tagItem.dataset.tagType;\n  const tags = imageMetadata[imagePath];\n\n  if (!tags) return;\n\n  const lightbox = document.getElementById(\"lightbox\");\n\n  switch (tagType) {\n    case \"date\":\n      delete tags.date;\n      if (lightbox && lightbox.dataset.currentImage === imagePath) {\n        lightbox.querySelector(\".tag-date\").value = \"\";\n      }\n      break;\n\n    case \"location\":\n      delete tags.location;\n      if (lightbox && lightbox.dataset.currentImage === imagePath) {\n        lightbox.querySelector(\".tag-location\").value = \"\";\n      }\n      break;\n\n    case \"subject\":\n      const subjectIndex = parseInt(tagItem.dataset.subjectIndex);\n      if (tags.subjects && tags.subjects.length > subjectIndex) {\n        tags.subjects.splice(subjectIndex, 1);\n        if (tags.subjects.length === 0) {\n          delete tags.subjects;\n        }\n        if (lightbox && lightbox.dataset.currentImage === imagePath) {\n          lightbox.querySelector(\".tag-subject\").value = tags.subjects\n            ? tags.subjects.join(\", \")\n            : \"\";\n        }\n      }\n      break;\n  }\n\n  // Save to both local storage and Supabase\n  localStorage.setItem(\"imageMetadata\", JSON.stringify(imageMetadata));\n  deleteTagFromSupabase(imagePath, tags);\n\n  updateImageTagsDisplays(imagePath);\n}\n\n// CONSOLIDATED DOMContentLoaded - All initialization happens here\ndocument.addEventListener(\"DOMContentLoaded\", async () => {\n  // 1. Load tags from both sources\n  loadSavedTags();\n  await loadUniversalTags();\n\n  // 2. Create image galleries\n  await initializeGalleries();\n\n  // 3. Setup lightbox\n  const lightbox = createLightbox();\n\n  // 4. Setup filtering\n  setupCategoryFilters();\n\n  // 5. Setup event handlers\n  setupEventHandlers(lightbox);\n\n  // 6. Setup resize handler\n  window.addEventListener(\"resize\", handleWindowResize);\n\n  // 7. Periodic sync with Supabase\n  setInterval(async () => {\n    await loadUniversalTags();\n  }, 30000); // Check for updates every 30 seconds\n});\n\nasync function initializeGalleries() {\n  // Create gallery sections for each folder\n  for (const [folder, images] of Object.entries(imagesByFolder)) {\n    const folderSection = document.createElement(\"div\");\n    folderSection.classList.add(\"folder-section\");\n\n    const folderTitle = document.createElement(\"h2\");\n    folderTitle.textContent = folder;\n    folderSection.appendChild(folderTitle);\n\n    const imageGrid = document.createElement(\"div\");\n    imageGrid.classList.add(\"image-grid\");\n    folderSection.appendChild(imageGrid);\n\n    // Load image dimensions\n    const imageDimensions = await Promise.all(\n      images.map(({ url }) => getImageDimensions(url))\n    );\n\n    // Store data for filtering and layout updates\n    folderData[folder] = {\n      section: folderSection,\n      images: images,\n      dimensions: imageDimensions,\n    };\n\n    layoutImages(folderSection, images, imageDimensions);\n    content.appendChild(folderSection);\n  }\n}\n\n// Get image dimensions asynchronously\nfunction getImageDimensions(src) {\n  return new Promise((resolve) => {\n    const img = new Image();\n    img.onload = () => {\n      resolve({ width: img.naturalWidth, height: img.naturalHeight });\n    };\n    img.src = src;\n  });\n}\n\n// Store folder references\nconst folderData = {};\n\n// Simplified image layout function\nfunction layoutImages(folderSection, images, imageDimensions) {\n  const imageGrid = folderSection.querySelector(\".image-grid\");\n\n  if (!imageGrid) {\n    console.error(\"Image grid not found for folder\");\n    return;\n  }\n\n  imageGrid.innerHTML = \"\";\n\n  // Simplified responsive layout\n  const getImagesPerRow = () => {\n    const width = window.innerWidth;\n    if (width < 768) return 1;\n    if (width < 1200) return 2;\n    return 3;\n  };\n\n  const imagesPerRow = getImagesPerRow();\n  const containerWidth = imageGrid.clientWidth || window.innerWidth - 40;\n  const gap = 24;\n\n  // Create rows of images\n  for (let i = 0; i < images.length; i += imagesPerRow) {\n    const rowImages = images.slice(i, i + imagesPerRow);\n    const rowDimensions = imageDimensions.slice(i, i + imagesPerRow);\n\n    const row = document.createElement(\"div\");\n    row.classList.add(\"image-row\");\n    row.style.display = \"flex\";\n    row.style.gap = gap + \"px\";\n    row.style.marginBottom = gap + \"px\";\n\n    // Calculate uniform height and proportional widths\n    const baseHeight = 300;\n    const availableWidth = containerWidth - gap * (rowImages.length - 1);\n\n    let totalAspectRatio = rowDimensions.reduce(\n      (sum, dim) => sum + dim.width / dim.height,\n      0\n    );\n    const adjustedHeight = Math.min(\n      baseHeight,\n      availableWidth / totalAspectRatio\n    );\n\n    // Create image elements\n    rowImages.forEach(({ fileName, url }, index) => {\n      const img = document.createElement(\"img\");\n      img.src = url;\n      img.alt = fileName;\n\n      const aspectRatio =\n        rowDimensions[index].width / rowDimensions[index].height;\n      const imageWidth = adjustedHeight * aspectRatio;\n\n      img.style.width = `${imageWidth}px`;\n      img.style.height = `${adjustedHeight}px`;\n      img.style.objectFit = \"cover\";\n      img.style.objectPosition = \"center center\";\n\n      img.classList.add(\"gallery-image\");\n      img.dataset.fullImage = url;\n\n      row.appendChild(img);\n    });\n\n    imageGrid.appendChild(row);\n  }\n}\n\n// Lightbox functionality\nfunction createLightbox() {\n  const lightbox = document.createElement(\"div\");\n  lightbox.id = \"lightbox\";\n  lightbox.classList.add(\"lightbox\");\n\n  const lightboxContent = document.createElement(\"div\");\n  lightboxContent.classList.add(\"lightbox-content\");\n\n  const lightboxImage = document.createElement(\"img\");\n  lightboxImage.classList.add(\"lightbox-image\");\n\n  const taggingPanel = document.createElement(\"div\");\n  taggingPanel.classList.add(\"tagging-panel\");\n\n  // Create form sections\n  const dateSection = document.createElement(\"div\");\n  dateSection.classList.add(\"tag-section\");\n  dateSection.innerHTML = `\n    <label>Date: \n      <input type=\"date\" class=\"tag-date\" />\n    </label>\n  `;\n\n  const locationSection = document.createElement(\"div\");\n  locationSection.classList.add(\"tag-section\");\n  locationSection.innerHTML = `\n    <label>Location: \n      <div class=\"input-wrapper\">\n        <input type=\"text\" class=\"tag-location\" placeholder=\"Add location...\" />\n      </div>\n    </label>\n  `;\n\n  const subjectSection = document.createElement(\"div\");\n  subjectSection.classList.add(\"tag-section\");\n  subjectSection.innerHTML = `\n    <label>Subject(s): \n      <div class=\"input-wrapper\">\n        <input type=\"text\" class=\"tag-subject\" placeholder=\"Add subjects...\" />\n      </div>\n      <span class=\"tag-hint\">(separate with commas)</span>\n    </label>\n  `;\n\n  const saveButton = document.createElement(\"button\");\n  saveButton.classList.add(\"tag-save-button\");\n  saveButton.textContent = \"Save Tags\";\n\n  const tagDisplay = document.createElement(\"div\");\n  tagDisplay.classList.add(\"tag-display\");\n\n  // Assemble components\n  taggingPanel.appendChild(dateSection);\n  taggingPanel.appendChild(locationSection);\n  taggingPanel.appendChild(subjectSection);\n  taggingPanel.appendChild(saveButton);\n  taggingPanel.appendChild(tagDisplay);\n\n  const closeButton = document.createElement(\"button\");\n  closeButton.classList.add(\"lightbox-close\");\n  closeButton.textContent = \"×\";\n\n  lightboxContent.appendChild(lightboxImage);\n  lightbox.appendChild(lightboxContent);\n  lightbox.appendChild(taggingPanel);\n  lightbox.appendChild(closeButton);\n  document.body.appendChild(lightbox);\n\n  // Initialize autocomplete\n  const locationInput = lightbox.querySelector(\".tag-location\");\n  const subjectInput = lightbox.querySelector(\".tag-subject\");\n\n  const existingTags = getAllExistingTags();\n  lightbox.locationAutocomplete = createAutocomplete(\n    locationInput,\n    existingTags.locations,\n    false\n  );\n  lightbox.subjectAutocomplete = createAutocomplete(\n    subjectInput,\n    existingTags.subjects,\n    true\n  );\n\n  lightbox.dataset.currentImage = \"\";\n\n  // Event handlers\n  saveButton.addEventListener(\"click\", () => {\n    const imagePath = lightbox.dataset.currentImage;\n    const date = lightbox.querySelector(\".tag-date\").value;\n    const location = lightbox.querySelector(\".tag-location\").value;\n    const subjectsRaw = lightbox.querySelector(\".tag-subject\").value;\n\n    const subjects = subjectsRaw\n      ? subjectsRaw\n          .split(\",\")\n          .map((s) => s.trim())\n          .filter((s) => s)\n      : [];\n\n    saveImageTags(imagePath, { date, location, subjects });\n\n    // Update autocomplete suggestions\n    const updatedTags = getAllExistingTags();\n    lightbox.locationAutocomplete.update(updatedTags.locations);\n    lightbox.subjectAutocomplete.update(updatedTags.subjects);\n  });\n\n  // Close handlers\n  lightbox.addEventListener(\"click\", (e) => {\n    if (e.target === lightbox || e.target === closeButton) {\n      closeLightbox(lightbox);\n    }\n  });\n\n  document.addEventListener(\"keydown\", (e) => {\n    if (e.key === \"Escape\" && lightbox.classList.contains(\"active\")) {\n      closeLightbox(lightbox);\n    }\n  });\n\n  return lightbox;\n}\n\nfunction getAllExistingTags() {\n  const locations = new Set();\n  const subjects = new Set();\n\n  Object.values(imageMetadata).forEach((tags) => {\n    if (tags.location) {\n      locations.add(tags.location);\n    }\n    if (tags.subjects && Array.isArray(tags.subjects)) {\n      tags.subjects.forEach((subject) => subjects.add(subject));\n    }\n  });\n\n  return {\n    locations: Array.from(locations).sort(),\n    subjects: Array.from(subjects).sort(),\n  };\n}\n\nfunction createAutocomplete(input, suggestions, multiValue = false) {\n  const autocompleteWrapper = document.createElement(\"div\");\n  autocompleteWrapper.classList.add(\"autocomplete-wrapper\");\n  input.parentElement.appendChild(autocompleteWrapper);\n\n  const dropdown = document.createElement(\"div\");\n  dropdown.classList.add(\"autocomplete-dropdown\");\n  autocompleteWrapper.appendChild(dropdown);\n\n  let currentFocus = -1;\n\n  function showSuggestions(value) {\n    dropdown.innerHTML = \"\";\n    currentFocus = \"\";\n\n    if (!value) {\n      dropdown.classList.remove(\"show\");\n      return;\n    }\n\n    let searchValue = value;\n    if (multiValue) {\n      const values = value.split(\",\");\n      searchValue = values[values.length - 1].trim();\n    }\n\n    const filtered = suggestions.filter((item) =>\n      item.toLowerCase().includes(searchValue.toLowerCase())\n    );\n\n    if (filtered.length === 0) {\n      dropdown.classList.remove(\"show\");\n      return;\n    }\n\n    dropdown.classList.add(\"show\");\n\n    filtered.forEach((item) => {\n      const div = document.createElement(\"div\");\n      div.classList.add(\"autocomplete-item\");\n\n      const regex = new RegExp(\"(\" + searchValue + \")\", \"gi\");\n      div.innerHTML = item.replace(regex, \"<strong>$1</strong>\");\n\n      div.addEventListener(\"click\", () => {\n        selectItem(item);\n      });\n\n      dropdown.appendChild(div);\n    });\n  }\n\n  function selectItem(value) {\n    if (multiValue) {\n      const currentValues = input.value.split(\",\").map((v) => v.trim());\n      currentValues[currentValues.length - 1] = value;\n      input.value = currentValues.join(\", \") + \", \";\n    } else {\n      input.value = value;\n    }\n    dropdown.classList.remove(\"show\");\n    input.focus();\n  }\n\n  function navigate(direction) {\n    const items = dropdown.querySelectorAll(\".autocomplete-item\");\n    if (items.length === 0) return;\n\n    if (currentFocus >= 0) {\n      items[currentFocus].classList.remove(\"active\");\n    }\n\n    currentFocus += direction;\n\n    if (currentFocus >= items.length) currentFocus = 0;\n    if (currentFocus < 0) currentFocus = items.length - 1;\n\n    items[currentFocus].classList.add(\"active\");\n    items[currentFocus].scrollIntoView({ block: \"nearest\" });\n  }\n\n  input.addEventListener(\"input\", (e) => {\n    showSuggestions(e.target.value);\n  });\n\n  input.addEventListener(\"keydown\", (e) => {\n    if (e.key === \"ArrowDown\") {\n      e.preventDefault();\n      navigate(1);\n    } else if (e.key === \"ArrowUp\") {\n      e.preventDefault();\n      navigate(-1);\n    } else if (e.key === \"Enter\") {\n      e.preventDefault();\n      const items = dropdown.querySelectorAll(\".autocomplete-item\");\n      if (currentFocus > -1 && currentFocus < items.length) {\n        items[currentFocus].click();\n      }\n    } else if (e.key === \"Escape\") {\n      dropdown.classList.remove(\"show\");\n    }\n  });\n\n  document.addEventListener(\"click\", (e) => {\n    if (!autocompleteWrapper.contains(e.target)) {\n      dropdown.classList.remove(\"show\");\n    }\n  });\n\n  return {\n    update: (newSuggestions) => {\n      suggestions = newSuggestions;\n    },\n  };\n}\n\n// Filtering functionality\nfunction setupCategoryFilters() {\n  const filter = document.querySelector(\"#filter\");\n\n  // Category filter setup\n  const categoryButton = document.createElement(\"button\");\n  categoryButton.textContent = \"Select Categories\";\n  categoryButton.id = \"categoryButton\";\n\n  const dropDown = document.createElement(\"div\");\n  dropDown.id = \"dropdown\";\n\n  filter.appendChild(categoryButton);\n  filter.appendChild(dropDown);\n\n  // Populate dropdown\n  dropDownOptions(imagesByFolder, dropDown);\n\n  // Category filter logic\n  const allCheckbox = document.querySelector('input[value=\"all\"]');\n  const categoryCheckboxes = document.querySelectorAll(\n    '.category-checkbox:not([value=\"all\"])'\n  );\n\n  allCheckbox.addEventListener(\"change\", function () {\n    categoryCheckboxes.forEach((checkbox) => {\n      checkbox.checked = this.checked;\n      checkbox.disabled = this.checked;\n    });\n    filterGallery();\n  });\n\n  categoryCheckboxes.forEach((checkbox) => {\n    checkbox.addEventListener(\"change\", function () {\n      const allSelected = Array.from(categoryCheckboxes).every(\n        (cb) => cb.checked\n      );\n      allCheckbox.checked = allSelected;\n\n      const noneSelected = Array.from(categoryCheckboxes).every(\n        (cb) => !cb.checked\n      );\n      if (noneSelected) {\n        allCheckbox.checked = true;\n        categoryCheckboxes.forEach((cb) => {\n          cb.checked = true;\n          cb.disabled = true;\n        });\n      }\n      filterGallery();\n    });\n  });\n\n  // Tag filtering setup\n  setupTagFilters(filter);\n\n  // Dropdown toggle\n  categoryButton.addEventListener(\"click\", function () {\n    dropDown.classList.toggle(\"show\");\n  });\n\n  // Close dropdowns when clicking outside\n  window.addEventListener(\"click\", function (event) {\n    if (\n      !event.target.matches(\"#categoryButton\") &&\n      !event.target.closest(\"#dropdown\")\n    ) {\n      dropDown.classList.remove(\"show\");\n    }\n  });\n\n  dropDown.addEventListener(\"click\", function (event) {\n    event.stopPropagation();\n  });\n}\n\nfunction dropDownOptions(obj, dropDown) {\n  // \"All Categories\" option\n  const allOption = document.createElement(\"label\");\n  allOption.className = \"dropdown-item\";\n\n  const allCheckbox = document.createElement(\"input\");\n  allCheckbox.type = \"checkbox\";\n  allCheckbox.checked = true;\n  allCheckbox.value = \"all\";\n  allCheckbox.className = \"category-checkbox\";\n\n  allOption.appendChild(allCheckbox);\n  allOption.appendChild(document.createTextNode(\" All Categories\"));\n  dropDown.appendChild(allOption);\n\n  const separator = document.createElement(\"div\");\n  separator.className = \"dropdown-separator\";\n  dropDown.appendChild(separator);\n\n  // Individual categories\n  for (const key in obj) {\n    if (obj.hasOwnProperty(key)) {\n      const option = document.createElement(\"label\");\n      option.className = \"dropdown-item\";\n\n      const checkbox = document.createElement(\"input\");\n      checkbox.type = \"checkbox\";\n      checkbox.checked = true;\n      checkbox.value = key;\n      checkbox.className = \"category-checkbox\";\n\n      option.appendChild(checkbox);\n      option.appendChild(document.createTextNode(\" \" + key));\n      dropDown.appendChild(option);\n    }\n  }\n}\n\nfunction setupTagFilters(filterSection) {\n  const tagFilterButton = document.createElement(\"button\");\n  tagFilterButton.id = \"tagFilterButton\";\n  tagFilterButton.textContent = \"Filter by Tags\";\n  filterSection.appendChild(tagFilterButton);\n\n  const tagDropdown = document.createElement(\"div\");\n  tagDropdown.id = \"tagDropdown\";\n  filterSection.appendChild(tagDropdown);\n\n  // Create filter form\n  tagDropdown.innerHTML = `\n    <div class=\"tag-filter-section\">\n      <h4>Date Range</h4>\n      <div class=\"date-range-inputs\">\n        <label>From: <input type=\"date\" id=\"dateFrom\"></label>\n        <label>To: <input type=\"date\" id=\"dateTo\"></label>\n      </div>\n    </div>\n    <div class=\"tag-filter-section\">\n      <h4>Location</h4>\n      <input type=\"text\" id=\"locationFilter\" placeholder=\"Filter by location...\">\n    </div>\n    <div class=\"tag-filter-section\">\n      <h4>Subject</h4>\n      <input type=\"text\" id=\"subjectFilter\" placeholder=\"Filter by subject...\">\n    </div>\n    <div class=\"filter-buttons\">\n      <button id=\"applyTagFilters\">Apply Filters</button>\n      <button id=\"clearTagFilters\">Clear</button>\n    </div>\n  `;\n\n  // Initialize autocomplete for tag filters\n  const locationInput = document.getElementById(\"locationFilter\");\n  const subjectInput = document.getElementById(\"subjectFilter\");\n  const existingTags = getAllExistingTags();\n\n  createAutocomplete(locationInput, existingTags.locations, false);\n  createAutocomplete(subjectInput, existingTags.subjects, true);\n\n  // Event listeners\n  tagFilterButton.addEventListener(\"click\", () => {\n    tagDropdown.classList.toggle(\"show\");\n  });\n\n  document.getElementById(\"applyTagFilters\").addEventListener(\"click\", () => {\n    const dateFrom = document.getElementById(\"dateFrom\").value;\n    const dateTo = document.getElementById(\"dateTo\").value;\n    const location = document\n      .getElementById(\"locationFilter\")\n      .value.toLowerCase();\n    const subject = document\n      .getElementById(\"subjectFilter\")\n      .value.toLowerCase();\n\n    filterImagesByTags(dateFrom, dateTo, location, subject);\n    tagDropdown.classList.remove(\"show\");\n\n    if (dateFrom || dateTo || location || subject) {\n      tagFilterButton.classList.add(\"filtering-active\");\n      tagFilterButton.textContent = \"Tags Filtered\";\n    } else {\n      tagFilterButton.classList.remove(\"filtering-active\");\n      tagFilterButton.textContent = \"Filter by Tags\";\n    }\n  });\n\n  document.getElementById(\"clearTagFilters\").addEventListener(\"click\", () => {\n    document.getElementById(\"dateFrom\").value = \"\";\n    document.getElementById(\"dateTo\").value = \"\";\n    document.getElementById(\"locationFilter\").value = \"\";\n    document.getElementById(\"subjectFilter\").value = \"\";\n\n    document.querySelectorAll(\".gallery-image\").forEach((img) => {\n      img.classList.remove(\"tag-filtered-out\");\n      img.style.display = \"\";\n    });\n\n    document.querySelectorAll(\".folder-section\").forEach((folder) => {\n      folder.classList.remove(\"hidden-by-tag\");\n    });\n\n    Object.values(folderData).forEach(({ section, images, dimensions }) => {\n      layoutImages(section, images, dimensions);\n    });\n\n    tagFilterButton.classList.remove(\"filtering-active\");\n    tagFilterButton.textContent = \"Filter by Tags\";\n  });\n\n  window.addEventListener(\"click\", (event) => {\n    if (\n      !event.target.matches(\"#tagFilterButton\") &&\n      !event.target.closest(\"#tagDropdown\")\n    ) {\n      tagDropdown.classList.remove(\"show\");\n    }\n  });\n\n  tagDropdown.addEventListener(\"click\", (event) => {\n    event.stopPropagation();\n  });\n}\n\nfunction setupEventHandlers(lightbox) {\n  // Handle clicks on gallery images\n  document.body.addEventListener(\"click\", (e) => {\n    if (e.target.classList.contains(\"gallery-image\")) {\n      const fullImageSrc = e.target.dataset.fullImage;\n      openLightbox(lightbox, fullImageSrc);\n    }\n  });\n}\n\nfunction handleWindowResize() {\n  clearTimeout(resizeTimeout);\n  resizeTimeout = setTimeout(() => {\n    Object.values(folderData).forEach(({ section, images, dimensions }) => {\n      layoutImages(section, images, dimensions);\n    });\n  }, 250);\n}\n\nfunction openLightbox(lightbox, imageSrc) {\n  const lightboxImage = lightbox.querySelector(\".lightbox-image\");\n\n  lightbox.dataset.currentImage = imageSrc;\n  lightboxImage.src = imageSrc;\n\n  // Fill existing tags\n  if (imageMetadata[imageSrc]) {\n    const tags = imageMetadata[imageSrc];\n    lightbox.querySelector(\".tag-date\").value = tags.date || \"\";\n    lightbox.querySelector(\".tag-location\").value = tags.location || \"\";\n\n    if (tags.subjects && Array.isArray(tags.subjects)) {\n      lightbox.querySelector(\".tag-subject\").value = tags.subjects.join(\", \");\n    } else {\n      lightbox.querySelector(\".tag-subject\").value = \"\";\n    }\n\n    updateTagDisplay(lightbox.querySelector(\".tag-display\"), tags, imageSrc);\n  } else {\n    // Clear form\n    lightbox.querySelector(\".tag-date\").value = \"\";\n    lightbox.querySelector(\".tag-location\").value = \"\";\n    lightbox.querySelector(\".tag-subject\").value = \"\";\n    lightbox.querySelector(\".tag-display\").innerHTML = \"<p>No tags yet</p>\";\n  }\n\n  requestAnimationFrame(() => {\n    lightbox.classList.add(\"active\");\n    document.body.classList.add(\"lightbox-open\");\n  });\n}\n\n// Tag display and deletion functions\nfunction updateTagDisplay(displayElement, tags, imagePath) {\n  if (!tags) {\n    displayElement.innerHTML = \"<p>No tags yet</p>\";\n    return;\n  }\n\n  let html = '<div class=\"tags-list\">';\n\n  if (tags.date) {\n    html += `<div class=\"tag-item tag-date\" data-tag-type=\"date\" data-image-path=\"${imagePath}\">\n      📅 ${new Date(tags.date).toLocaleDateString()}\n      <div class=\"tag-delete\" data-tag-type=\"date\">×</div>\n    </div>`;\n  }\n\n  if (tags.location) {\n    html += `<div class=\"tag-item tag-location\" data-tag-type=\"location\" data-image-path=\"${imagePath}\">\n      📍 ${tags.location}\n      <div class=\"tag-delete\" data-tag-type=\"location\">×</div>\n    </div>`;\n  }\n\n  if (tags.subjects && tags.subjects.length > 0) {\n    tags.subjects.forEach((subject, index) => {\n      html += `<div class=\"tag-item tag-subject\" data-tag-type=\"subject\" data-subject-index=\"${index}\" data-image-path=\"${imagePath}\">\n        🏷️ ${subject}\n        <div class=\"tag-delete\" data-tag-type=\"subject\" data-subject-index=\"${index}\">×</div>\n      </div>`;\n    });\n  }\n\n  html += \"</div>\";\n\n  if (\n    !tags.date &&\n    !tags.location &&\n    (!tags.subjects || tags.subjects.length === 0)\n  ) {\n    html = \"<p>No tags yet</p>\";\n  }\n\n  displayElement.innerHTML = html;\n\n  // Add event listeners\n  const tagItems = displayElement.querySelectorAll(\".tag-item\");\n  tagItems.forEach((tagItem) => {\n    tagItem.addEventListener(\"contextmenu\", (e) => {\n      e.preventDefault();\n      handleTagRightClick(e, tagItem);\n    });\n\n    const deleteButton = tagItem.querySelector(\".tag-delete\");\n    if (deleteButton) {\n      deleteButton.addEventListener(\"click\", (e) => {\n        e.stopPropagation();\n        deleteTag(tagItem);\n      });\n    }\n  });\n}\n\nfunction closeLightbox(lightbox) {\n  lightbox.classList.remove(\"active\");\n  document.body.classList.remove(\"lightbox-open\");\n\n  setTimeout(() => {\n    const lightboxImage = lightbox.querySelector(\".lightbox-image\");\n    lightboxImage.src = \"\";\n  }, 300);\n}\n\nfunction updateImageTagsDisplays(imagePath) {\n  const lightbox = document.getElementById(\"lightbox\");\n  if (lightbox && lightbox.dataset.currentImage === imagePath) {\n    updateTagDisplay(\n      lightbox.querySelector(\".tag-display\"),\n      imageMetadata[imagePath],\n      imagePath\n    );\n  }\n}\n\nfunction filterGallery() {\n  const allCheckbox = document.querySelector('input[value=\"all\"]');\n  const selectedCategories = [];\n\n  if (allCheckbox.checked) {\n    document.querySelectorAll(\".folder-section\").forEach((section) => {\n      section.classList.remove(\"hidden\");\n    });\n  } else {\n    document\n      .querySelectorAll(\".category-checkbox:checked\")\n      .forEach((checkbox) => {\n        if (checkbox.value !== \"all\") {\n          selectedCategories.push(checkbox.value);\n        }\n      });\n\n    document.querySelectorAll(\".folder-section\").forEach((section) => {\n      const folderName = section.querySelector(\"h2\").textContent;\n      if (selectedCategories.includes(folderName)) {\n        section.classList.remove(\"hidden\");\n      } else {\n        section.classList.add(\"hidden\");\n      }\n    });\n  }\n\n  updateFilterButtonText(selectedCategories, allCheckbox.checked);\n  setTimeout(revealFolders, 50);\n}\n\nfunction updateFilterButtonText(selectedCategories, isAllSelected) {\n  const button = document.getElementById(\"categoryButton\");\n\n  if (isAllSelected) {\n    button.textContent = \"All Categories\";\n    button.classList.remove(\"filtering-active\");\n  } else if (selectedCategories.length === 0) {\n    button.textContent = \"All Categories\";\n    button.classList.remove(\"filtering-active\");\n  } else if (selectedCategories.length === 1) {\n    button.textContent = selectedCategories[0];\n    button.classList.add(\"filtering-active\");\n  } else {\n    button.textContent = `${selectedCategories.length} Categories`;\n    button.classList.add(\"filtering-active\");\n  }\n}\n\nfunction revealFolders() {\n  const visibleFolders = document.querySelectorAll(\n    \".folder-section:not(.hidden)\"\n  );\n  visibleFolders.forEach((folder, index) => {\n    setTimeout(() => {\n      folder.style.transform = \"translateY(0)\";\n      folder.style.opacity = \"1\";\n    }, index * 50);\n  });\n}\n\nfunction filterImagesByTags(dateFrom, dateTo, location, subject) {\n  const allImages = document.querySelectorAll(\".gallery-image\");\n\n  allImages.forEach((img) => {\n    const imagePath = img.dataset.fullImage;\n    const tags = imageMetadata[imagePath] || {};\n    let isVisible = true;\n\n    if (dateFrom && tags.date && new Date(tags.date) < new Date(dateFrom)) {\n      isVisible = false;\n    }\n    if (dateTo && tags.date && new Date(tags.date) > new Date(dateTo)) {\n      isVisible = false;\n    }\n    if (\n      location &&\n      (!tags.location || !tags.location.toLowerCase().includes(location))\n    ) {\n      isVisible = false;\n    }\n    if (\n      subject &&\n      (!tags.subjects ||\n        !tags.subjects.some((s) => s.toLowerCase().includes(subject)))\n    ) {\n      isVisible = false;\n    }\n\n    if (isVisible) {\n      img.classList.remove(\"tag-filtered-out\");\n    } else {\n      img.classList.add(\"tag-filtered-out\");\n    }\n  });\n\n  reorganizeFilteredImages();\n}\n\nfunction reorganizeFilteredImages() {\n  Object.entries(folderData).forEach(([folderName, data]) => {\n    const { section, images, dimensions } = data;\n\n    const visibleImageIndices = [];\n    const imageElementsInGrid = section.querySelectorAll(\".gallery-image\");\n\n    imageElementsInGrid.forEach((imgElement) => {\n      if (!imgElement.classList.contains(\"tag-filtered-out\")) {\n        const imgUrl = imgElement.dataset.fullImage;\n        const originalIndex = images.findIndex((img) => img.url === imgUrl);\n        if (originalIndex !== -1) {\n          visibleImageIndices.push(originalIndex);\n        }\n      }\n    });\n\n    if (visibleImageIndices.length === 0) {\n      section.classList.add(\"hidden-by-tag\");\n      return;\n    } else {\n      section.classList.remove(\"hidden-by-tag\");\n    }\n\n    const visibleImages = visibleImageIndices.map((i) => images[i]);\n    const visibleDimensions = visibleImageIndices.map((i) => dimensions[i]);\n\n    layoutImages(section, visibleImages, visibleDimensions);\n  });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EseUNBQXlDLGtCQUFrQjtBQUMzRDs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTCx5Q0FBeUMsNkJBQTZCO0FBQ3RFO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsNkJBQTZCO0FBQ3RFO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxvRkFBb0YsVUFBVTtBQUM5RixXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNEZBQTRGLFVBQVU7QUFDdEcsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsK0ZBQStGLE1BQU0scUJBQXFCLFVBQVU7QUFDcEksY0FBYztBQUNkLDhFQUE4RSxNQUFNO0FBQ3BGO0FBQ0EsS0FBSztBQUNMOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKLDRCQUE0QiwyQkFBMkI7QUFDdkQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxZQUFZLDhCQUE4Qjs7QUFFMUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGhvdG9ncmFwaHlzaXRlLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCI7XG5cbi8vIFN1cGFiYXNlIGNvbmZpZ3VyYXRpb25cbmNvbnN0IFNVUEFCQVNFX1VSTCA9IFwiaHR0cHM6Ly95Zmx5dHF0ZWZrcnlzd3ZqeWphaC5zdXBhYmFzZS5jb1wiOyAvLyBSZXBsYWNlIHdpdGggeW91ciBTdXBhYmFzZSBVUkxcbmNvbnN0IFNVUEFCQVNFX0FOT05fS0VZID1cbiAgXCJleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKcGMzTWlPaUp6ZFhCaFltRnpaU0lzSW5KbFppSTZJbmxtYkhsMGNYUmxabXR5ZVhOM2RtcDVhbUZvSWl3aWNtOXNaU0k2SW1GdWIyNGlMQ0pwWVhRaU9qRTNOVEExTkRBd016SXNJbVY0Y0NJNk1qQTJOakV4TmpBek1uMC4zWUFyUGZnSWdKTEdGdnBQcXVoQTBuSWZqa29zVll0aU9tb1JOQWtQZW9ZXCI7IC8vIFJlcGxhY2Ugd2l0aCB5b3VyIFN1cGFiYXNlIGFub24ga2V5XG5cbi8vIEluaXRpYWxpemUgU3VwYWJhc2UgY2xpZW50XG5jb25zdCBzdXBhYmFzZSA9IHdpbmRvdy5zdXBhYmFzZS5jcmVhdGVDbGllbnQoU1VQQUJBU0VfVVJMLCBTVVBBQkFTRV9BTk9OX0tFWSk7XG5cbi8vIER5bmFtaWNhbGx5IGltcG9ydCBhbGwgaW1hZ2VzIGZyb20gdGhlIGFzc2V0cy9pbWFnZXMgZGlyZWN0b3J5XG5jb25zdCBpbWFnZXMgPSByZXF1aXJlLmNvbnRleHQoXG4gIFwiLi9hc3NldHMvaW1hZ2VzL1wiLFxuICB0cnVlLFxuICAvXFwuKHBuZ3xqcGd8anBlZ3xnaWZ8c3ZnKSQvaVxuKTtcblxuLy8gU3RvcmUgaW1hZ2UgdGFncy9tZXRhZGF0YSB1c2luZyBpbWFnZSBwYXRoIGFzIGtleVxuY29uc3QgaW1hZ2VNZXRhZGF0YSA9IHt9O1xuXG4vLyBRdWV1ZSBmb3IgcGVuZGluZyB0YWcgdXBkYXRlc1xubGV0IHBlbmRpbmdVcGRhdGVzID0ge307XG5sZXQgdXBkYXRlVGltZXIgPSBudWxsO1xuXG4vLyBMb2FkIHRhZ3MgZnJvbSBTdXBhYmFzZVxuYXN5bmMgZnVuY3Rpb24gbG9hZFVuaXZlcnNhbFRhZ3MoKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2UuZnJvbShcImltYWdlX3RhZ3NcIikuc2VsZWN0KFwiKlwiKTtcblxuICAgIGlmIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGxvYWRpbmcgdGFncyBmcm9tIFN1cGFiYXNlOlwiLCBlcnJvcik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gQ29udmVydCBhcnJheSBvZiByZWNvcmRzIGJhY2sgdG8gb2JqZWN0IGZvcm1hdFxuICAgIGRhdGEuZm9yRWFjaCgocmVjb3JkKSA9PiB7XG4gICAgICBpbWFnZU1ldGFkYXRhW3JlY29yZC5pbWFnZV9wYXRoXSA9IHtcbiAgICAgICAgZGF0ZTogcmVjb3JkLmRhdGUsXG4gICAgICAgIGxvY2F0aW9uOiByZWNvcmQubG9jYXRpb24sXG4gICAgICAgIHN1YmplY3RzOiByZWNvcmQuc3ViamVjdHMgfHwgW10sXG4gICAgICB9O1xuICAgIH0pO1xuXG4gICAgY29uc29sZS5sb2coXCJMb2FkZWQgdW5pdmVyc2FsIHRhZ3MgZnJvbSBTdXBhYmFzZVwiKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY29ubmVjdGluZyB0byBTdXBhYmFzZTpcIiwgZXJyb3IpO1xuICB9XG59XG5cbi8vIFNhdmUgdGFncyB0byBTdXBhYmFzZVxuYXN5bmMgZnVuY3Rpb24gc2F2ZVRvU3VwYWJhc2UoaW1hZ2VQYXRoLCB0YWdzKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgeyBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2UuZnJvbShcImltYWdlX3RhZ3NcIikudXBzZXJ0KHtcbiAgICAgIGltYWdlX3BhdGg6IGltYWdlUGF0aCxcbiAgICAgIGRhdGU6IHRhZ3MuZGF0ZSB8fCBudWxsLFxuICAgICAgbG9jYXRpb246IHRhZ3MubG9jYXRpb24gfHwgbnVsbCxcbiAgICAgIHN1YmplY3RzOiB0YWdzLnN1YmplY3RzIHx8IFtdLFxuICAgICAgdXBkYXRlZF9hdDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxuICAgIH0pO1xuXG4gICAgaWYgKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3Igc2F2aW5nIHRvIFN1cGFiYXNlOlwiLCBlcnJvcik7XG4gICAgICBzaG93Tm90aWZpY2F0aW9uKFwiRXJyb3Igc2F2aW5nIHRhZ3MgdG8gZGF0YWJhc2UuIFRhZ3Mgc2F2ZWQgbG9jYWxseS5cIik7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coXCJUYWdzIHNhdmVkIHRvIFN1cGFiYXNlIHN1Y2Nlc3NmdWxseVwiKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY29ubmVjdGluZyB0byBTdXBhYmFzZTpcIiwgZXJyb3IpO1xuICAgIHNob3dOb3RpZmljYXRpb24oXCJVbmFibGUgdG8gY29ubmVjdCB0byBkYXRhYmFzZS4gVGFncyBzYXZlZCBsb2NhbGx5LlwiKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuLy8gU2hvdyB1c2VyIG5vdGlmaWNhdGlvbnNcbmZ1bmN0aW9uIHNob3dOb3RpZmljYXRpb24obWVzc2FnZSkge1xuICBjb25zdCBub3RpZmljYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBub3RpZmljYXRpb24uY2xhc3NOYW1lID0gXCJub3RpZmljYXRpb25cIjtcbiAgbm90aWZpY2F0aW9uLnRleHRDb250ZW50ID0gbWVzc2FnZTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChub3RpZmljYXRpb24pO1xuXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIG5vdGlmaWNhdGlvbi5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKTtcbiAgfSwgMTAwKTtcblxuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBub3RpZmljYXRpb24uY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIik7XG4gICAgc2V0VGltZW91dCgoKSA9PiBub3RpZmljYXRpb24ucmVtb3ZlKCksIDMwMCk7XG4gIH0sIDUwMDApO1xufVxuXG4vLyBTYXZlIHRhZ3Mgd2l0aCBiYXRjaGluZ1xuZnVuY3Rpb24gc2F2ZUltYWdlVGFncyhpbWFnZVBhdGgsIHRhZ3MpIHtcbiAgaW1hZ2VNZXRhZGF0YVtpbWFnZVBhdGhdID0geyAuLi5pbWFnZU1ldGFkYXRhW2ltYWdlUGF0aF0sIC4uLnRhZ3MgfTtcbiAgcGVuZGluZ1VwZGF0ZXNbaW1hZ2VQYXRoXSA9IGltYWdlTWV0YWRhdGFbaW1hZ2VQYXRoXTtcblxuICAvLyBTYXZlIGxvY2FsbHkgaW1tZWRpYXRlbHlcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJpbWFnZU1ldGFkYXRhXCIsIEpTT04uc3RyaW5naWZ5KGltYWdlTWV0YWRhdGEpKTtcbiAgdXBkYXRlSW1hZ2VUYWdzRGlzcGxheXMoaW1hZ2VQYXRoKTtcblxuICAvLyBCYXRjaCB1cGRhdGVzIHRvIFN1cGFiYXNlXG4gIGlmICh1cGRhdGVUaW1lcikge1xuICAgIGNsZWFyVGltZW91dCh1cGRhdGVUaW1lcik7XG4gIH1cblxuICB1cGRhdGVUaW1lciA9IHNldFRpbWVvdXQoYXN5bmMgKCkgPT4ge1xuICAgIGlmIChPYmplY3Qua2V5cyhwZW5kaW5nVXBkYXRlcykubGVuZ3RoID4gMCkge1xuICAgICAgbGV0IHN1Y2Nlc3NDb3VudCA9IDA7XG4gICAgICBsZXQgdG90YWxDb3VudCA9IE9iamVjdC5rZXlzKHBlbmRpbmdVcGRhdGVzKS5sZW5ndGg7XG5cbiAgICAgIGZvciAoY29uc3QgW3BhdGgsIHRhZ0RhdGFdIG9mIE9iamVjdC5lbnRyaWVzKHBlbmRpbmdVcGRhdGVzKSkge1xuICAgICAgICBjb25zdCBzdWNjZXNzID0gYXdhaXQgc2F2ZVRvU3VwYWJhc2UocGF0aCwgdGFnRGF0YSk7XG4gICAgICAgIGlmIChzdWNjZXNzKSBzdWNjZXNzQ291bnQrKztcbiAgICAgIH1cblxuICAgICAgaWYgKHN1Y2Nlc3NDb3VudCA9PT0gdG90YWxDb3VudCkge1xuICAgICAgICBzaG93Tm90aWZpY2F0aW9uKGBTdWNjZXNzZnVsbHkgc2F2ZWQgJHtzdWNjZXNzQ291bnR9IHRhZyB1cGRhdGUocylgKTtcbiAgICAgIH0gZWxzZSBpZiAoc3VjY2Vzc0NvdW50ID4gMCkge1xuICAgICAgICBzaG93Tm90aWZpY2F0aW9uKGBTYXZlZCAke3N1Y2Nlc3NDb3VudH0gb2YgJHt0b3RhbENvdW50fSB0YWcgdXBkYXRlc2ApO1xuICAgICAgfVxuXG4gICAgICBwZW5kaW5nVXBkYXRlcyA9IHt9O1xuICAgIH1cbiAgfSwgMjAwMCk7IC8vIFdhaXQgMiBzZWNvbmRzIGJlZm9yZSBzYXZpbmcgdG8gU3VwYWJhc2Vcbn1cblxuLy8gTG9hZCBwcmV2aW91c2x5IHNhdmVkIHRhZ3MgZnJvbSBsb2NhbFN0b3JhZ2VcbmZ1bmN0aW9uIGxvYWRTYXZlZFRhZ3MoKSB7XG4gIGNvbnN0IHNhdmVkTWV0YWRhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImltYWdlTWV0YWRhdGFcIik7XG4gIGlmIChzYXZlZE1ldGFkYXRhKSB7XG4gICAgY29uc3QgbG9jYWxEYXRhID0gSlNPTi5wYXJzZShzYXZlZE1ldGFkYXRhKTtcbiAgICAvLyBNZXJnZSBsb2NhbCBkYXRhIHdpdGggaW1hZ2VNZXRhZGF0YSwgcHJlZmVycmluZyBuZXdlciBkYXRhXG4gICAgT2JqZWN0LmtleXMobG9jYWxEYXRhKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGlmICghaW1hZ2VNZXRhZGF0YVtrZXldKSB7XG4gICAgICAgIGltYWdlTWV0YWRhdGFba2V5XSA9IGxvY2FsRGF0YVtrZXldO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cbi8vIERlbGV0ZSBhIHRhZyBmcm9tIFN1cGFiYXNlXG5hc3luYyBmdW5jdGlvbiBkZWxldGVUYWdGcm9tU3VwYWJhc2UoaW1hZ2VQYXRoLCB1cGRhdGVkVGFncykge1xuICB0cnkge1xuICAgIGlmIChcbiAgICAgIE9iamVjdC5rZXlzKHVwZGF0ZWRUYWdzKS5sZW5ndGggPT09IDAgfHxcbiAgICAgICghdXBkYXRlZFRhZ3MuZGF0ZSAmJlxuICAgICAgICAhdXBkYXRlZFRhZ3MubG9jYXRpb24gJiZcbiAgICAgICAgKCF1cGRhdGVkVGFncy5zdWJqZWN0cyB8fCB1cGRhdGVkVGFncy5zdWJqZWN0cy5sZW5ndGggPT09IDApKVxuICAgICkge1xuICAgICAgLy8gSWYgbm8gdGFncyBsZWZ0LCBkZWxldGUgdGhlIGVudGlyZSByZWNvcmRcbiAgICAgIGNvbnN0IHsgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgICAgIC5mcm9tKFwiaW1hZ2VfdGFnc1wiKVxuICAgICAgICAuZGVsZXRlKClcbiAgICAgICAgLmVxKFwiaW1hZ2VfcGF0aFwiLCBpbWFnZVBhdGgpO1xuXG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGRlbGV0aW5nIGZyb20gU3VwYWJhc2U6XCIsIGVycm9yKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBVcGRhdGUgd2l0aCByZW1haW5pbmcgdGFnc1xuICAgICAgY29uc3QgeyBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2UuZnJvbShcImltYWdlX3RhZ3NcIikudXBzZXJ0KHtcbiAgICAgICAgaW1hZ2VfcGF0aDogaW1hZ2VQYXRoLFxuICAgICAgICBkYXRlOiB1cGRhdGVkVGFncy5kYXRlIHx8IG51bGwsXG4gICAgICAgIGxvY2F0aW9uOiB1cGRhdGVkVGFncy5sb2NhdGlvbiB8fCBudWxsLFxuICAgICAgICBzdWJqZWN0czogdXBkYXRlZFRhZ3Muc3ViamVjdHMgfHwgW10sXG4gICAgICAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIHVwZGF0aW5nIFN1cGFiYXNlOlwiLCBlcnJvcik7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY29ubmVjdGluZyB0byBTdXBhYmFzZTpcIiwgZXJyb3IpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG4vLyBSZXN0IG9mIHlvdXIgZXhpc3RpbmcgY29kZSByZW1haW5zIHRoZSBzYW1lLi4uXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluY29udGFpbmVyXCIpO1xuXG4vLyBHcm91cCBpbWFnZXMgYnkgdGhlaXIgZm9sZGVyIHN0cnVjdHVyZVxuY29uc3QgaW1hZ2VzQnlGb2xkZXIgPSBpbWFnZXMua2V5cygpLnJlZHVjZSgoYWNjLCBrZXkpID0+IHtcbiAgY29uc3QgcGF0aCA9IGtleS5yZXBsYWNlKFwiLi9cIiwgXCJcIik7XG4gIGNvbnN0IHBhcnRzID0gcGF0aC5zcGxpdChcIi9cIik7XG4gIGNvbnN0IGZpbGVOYW1lID0gcGFydHMucG9wKCk7XG4gIGNvbnN0IGZvbGRlck5hbWUgPSBwYXJ0cy5sZW5ndGggPiAwID8gcGFydHNbMF0gOiBcInVuY2F0ZWdvcml6ZWRcIjtcblxuICBpZiAoIWFjY1tmb2xkZXJOYW1lXSkge1xuICAgIGFjY1tmb2xkZXJOYW1lXSA9IFtdO1xuICB9XG5cbiAgYWNjW2ZvbGRlck5hbWVdLnB1c2goe1xuICAgIGZpbGVOYW1lLFxuICAgIHBhdGg6IGtleSxcbiAgICB1cmw6IGltYWdlcyhrZXkpLFxuICB9KTtcblxuICByZXR1cm4gYWNjO1xufSwge30pO1xuXG4vLyBbSW5jbHVkZSBhbGwgeW91ciBleGlzdGluZyBmdW5jdGlvbnMgaGVyZSAtIGdldEltYWdlRGltZW5zaW9ucywgbGF5b3V0SW1hZ2VzLCBldGMuXVxuLy8gSSdsbCBpbmNsdWRlIHRoZSBrZXkgb25lcyB0aGF0IG1pZ2h0IG5lZWQgbW9kaWZpY2F0aW9uOlxuXG4vLyBNb2RpZmllZCBkZWxldGVUYWcgZnVuY3Rpb24gdG8gd29yayB3aXRoIFN1cGFiYXNlXG5mdW5jdGlvbiBkZWxldGVUYWcodGFnSXRlbSkge1xuICBpZiAoIXRhZ0l0ZW0pIHJldHVybjtcblxuICBjb25zdCBpbWFnZVBhdGggPSB0YWdJdGVtLmRhdGFzZXQuaW1hZ2VQYXRoO1xuICBjb25zdCB0YWdUeXBlID0gdGFnSXRlbS5kYXRhc2V0LnRhZ1R5cGU7XG4gIGNvbnN0IHRhZ3MgPSBpbWFnZU1ldGFkYXRhW2ltYWdlUGF0aF07XG5cbiAgaWYgKCF0YWdzKSByZXR1cm47XG5cbiAgY29uc3QgbGlnaHRib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpZ2h0Ym94XCIpO1xuXG4gIHN3aXRjaCAodGFnVHlwZSkge1xuICAgIGNhc2UgXCJkYXRlXCI6XG4gICAgICBkZWxldGUgdGFncy5kYXRlO1xuICAgICAgaWYgKGxpZ2h0Ym94ICYmIGxpZ2h0Ym94LmRhdGFzZXQuY3VycmVudEltYWdlID09PSBpbWFnZVBhdGgpIHtcbiAgICAgICAgbGlnaHRib3gucXVlcnlTZWxlY3RvcihcIi50YWctZGF0ZVwiKS52YWx1ZSA9IFwiXCI7XG4gICAgICB9XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgXCJsb2NhdGlvblwiOlxuICAgICAgZGVsZXRlIHRhZ3MubG9jYXRpb247XG4gICAgICBpZiAobGlnaHRib3ggJiYgbGlnaHRib3guZGF0YXNldC5jdXJyZW50SW1hZ2UgPT09IGltYWdlUGF0aCkge1xuICAgICAgICBsaWdodGJveC5xdWVyeVNlbGVjdG9yKFwiLnRhZy1sb2NhdGlvblwiKS52YWx1ZSA9IFwiXCI7XG4gICAgICB9XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgXCJzdWJqZWN0XCI6XG4gICAgICBjb25zdCBzdWJqZWN0SW5kZXggPSBwYXJzZUludCh0YWdJdGVtLmRhdGFzZXQuc3ViamVjdEluZGV4KTtcbiAgICAgIGlmICh0YWdzLnN1YmplY3RzICYmIHRhZ3Muc3ViamVjdHMubGVuZ3RoID4gc3ViamVjdEluZGV4KSB7XG4gICAgICAgIHRhZ3Muc3ViamVjdHMuc3BsaWNlKHN1YmplY3RJbmRleCwgMSk7XG4gICAgICAgIGlmICh0YWdzLnN1YmplY3RzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIGRlbGV0ZSB0YWdzLnN1YmplY3RzO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsaWdodGJveCAmJiBsaWdodGJveC5kYXRhc2V0LmN1cnJlbnRJbWFnZSA9PT0gaW1hZ2VQYXRoKSB7XG4gICAgICAgICAgbGlnaHRib3gucXVlcnlTZWxlY3RvcihcIi50YWctc3ViamVjdFwiKS52YWx1ZSA9IHRhZ3Muc3ViamVjdHNcbiAgICAgICAgICAgID8gdGFncy5zdWJqZWN0cy5qb2luKFwiLCBcIilcbiAgICAgICAgICAgIDogXCJcIjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgYnJlYWs7XG4gIH1cblxuICAvLyBTYXZlIHRvIGJvdGggbG9jYWwgc3RvcmFnZSBhbmQgU3VwYWJhc2VcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJpbWFnZU1ldGFkYXRhXCIsIEpTT04uc3RyaW5naWZ5KGltYWdlTWV0YWRhdGEpKTtcbiAgZGVsZXRlVGFnRnJvbVN1cGFiYXNlKGltYWdlUGF0aCwgdGFncyk7XG5cbiAgdXBkYXRlSW1hZ2VUYWdzRGlzcGxheXMoaW1hZ2VQYXRoKTtcbn1cblxuLy8gQ09OU09MSURBVEVEIERPTUNvbnRlbnRMb2FkZWQgLSBBbGwgaW5pdGlhbGl6YXRpb24gaGFwcGVucyBoZXJlXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBhc3luYyAoKSA9PiB7XG4gIC8vIDEuIExvYWQgdGFncyBmcm9tIGJvdGggc291cmNlc1xuICBsb2FkU2F2ZWRUYWdzKCk7XG4gIGF3YWl0IGxvYWRVbml2ZXJzYWxUYWdzKCk7XG5cbiAgLy8gMi4gQ3JlYXRlIGltYWdlIGdhbGxlcmllc1xuICBhd2FpdCBpbml0aWFsaXplR2FsbGVyaWVzKCk7XG5cbiAgLy8gMy4gU2V0dXAgbGlnaHRib3hcbiAgY29uc3QgbGlnaHRib3ggPSBjcmVhdGVMaWdodGJveCgpO1xuXG4gIC8vIDQuIFNldHVwIGZpbHRlcmluZ1xuICBzZXR1cENhdGVnb3J5RmlsdGVycygpO1xuXG4gIC8vIDUuIFNldHVwIGV2ZW50IGhhbmRsZXJzXG4gIHNldHVwRXZlbnRIYW5kbGVycyhsaWdodGJveCk7XG5cbiAgLy8gNi4gU2V0dXAgcmVzaXplIGhhbmRsZXJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlV2luZG93UmVzaXplKTtcblxuICAvLyA3LiBQZXJpb2RpYyBzeW5jIHdpdGggU3VwYWJhc2VcbiAgc2V0SW50ZXJ2YWwoYXN5bmMgKCkgPT4ge1xuICAgIGF3YWl0IGxvYWRVbml2ZXJzYWxUYWdzKCk7XG4gIH0sIDMwMDAwKTsgLy8gQ2hlY2sgZm9yIHVwZGF0ZXMgZXZlcnkgMzAgc2Vjb25kc1xufSk7XG5cbmFzeW5jIGZ1bmN0aW9uIGluaXRpYWxpemVHYWxsZXJpZXMoKSB7XG4gIC8vIENyZWF0ZSBnYWxsZXJ5IHNlY3Rpb25zIGZvciBlYWNoIGZvbGRlclxuICBmb3IgKGNvbnN0IFtmb2xkZXIsIGltYWdlc10gb2YgT2JqZWN0LmVudHJpZXMoaW1hZ2VzQnlGb2xkZXIpKSB7XG4gICAgY29uc3QgZm9sZGVyU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZm9sZGVyU2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwiZm9sZGVyLXNlY3Rpb25cIik7XG5cbiAgICBjb25zdCBmb2xkZXJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBmb2xkZXJUaXRsZS50ZXh0Q29udGVudCA9IGZvbGRlcjtcbiAgICBmb2xkZXJTZWN0aW9uLmFwcGVuZENoaWxkKGZvbGRlclRpdGxlKTtcblxuICAgIGNvbnN0IGltYWdlR3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaW1hZ2VHcmlkLmNsYXNzTGlzdC5hZGQoXCJpbWFnZS1ncmlkXCIpO1xuICAgIGZvbGRlclNlY3Rpb24uYXBwZW5kQ2hpbGQoaW1hZ2VHcmlkKTtcblxuICAgIC8vIExvYWQgaW1hZ2UgZGltZW5zaW9uc1xuICAgIGNvbnN0IGltYWdlRGltZW5zaW9ucyA9IGF3YWl0IFByb21pc2UuYWxsKFxuICAgICAgaW1hZ2VzLm1hcCgoeyB1cmwgfSkgPT4gZ2V0SW1hZ2VEaW1lbnNpb25zKHVybCkpXG4gICAgKTtcblxuICAgIC8vIFN0b3JlIGRhdGEgZm9yIGZpbHRlcmluZyBhbmQgbGF5b3V0IHVwZGF0ZXNcbiAgICBmb2xkZXJEYXRhW2ZvbGRlcl0gPSB7XG4gICAgICBzZWN0aW9uOiBmb2xkZXJTZWN0aW9uLFxuICAgICAgaW1hZ2VzOiBpbWFnZXMsXG4gICAgICBkaW1lbnNpb25zOiBpbWFnZURpbWVuc2lvbnMsXG4gICAgfTtcblxuICAgIGxheW91dEltYWdlcyhmb2xkZXJTZWN0aW9uLCBpbWFnZXMsIGltYWdlRGltZW5zaW9ucyk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChmb2xkZXJTZWN0aW9uKTtcbiAgfVxufVxuXG4vLyBHZXQgaW1hZ2UgZGltZW5zaW9ucyBhc3luY2hyb25vdXNseVxuZnVuY3Rpb24gZ2V0SW1hZ2VEaW1lbnNpb25zKHNyYykge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWcub25sb2FkID0gKCkgPT4ge1xuICAgICAgcmVzb2x2ZSh7IHdpZHRoOiBpbWcubmF0dXJhbFdpZHRoLCBoZWlnaHQ6IGltZy5uYXR1cmFsSGVpZ2h0IH0pO1xuICAgIH07XG4gICAgaW1nLnNyYyA9IHNyYztcbiAgfSk7XG59XG5cbi8vIFN0b3JlIGZvbGRlciByZWZlcmVuY2VzXG5jb25zdCBmb2xkZXJEYXRhID0ge307XG5cbi8vIFNpbXBsaWZpZWQgaW1hZ2UgbGF5b3V0IGZ1bmN0aW9uXG5mdW5jdGlvbiBsYXlvdXRJbWFnZXMoZm9sZGVyU2VjdGlvbiwgaW1hZ2VzLCBpbWFnZURpbWVuc2lvbnMpIHtcbiAgY29uc3QgaW1hZ2VHcmlkID0gZm9sZGVyU2VjdGlvbi5xdWVyeVNlbGVjdG9yKFwiLmltYWdlLWdyaWRcIik7XG5cbiAgaWYgKCFpbWFnZUdyaWQpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiSW1hZ2UgZ3JpZCBub3QgZm91bmQgZm9yIGZvbGRlclwiKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpbWFnZUdyaWQuaW5uZXJIVE1MID0gXCJcIjtcblxuICAvLyBTaW1wbGlmaWVkIHJlc3BvbnNpdmUgbGF5b3V0XG4gIGNvbnN0IGdldEltYWdlc1BlclJvdyA9ICgpID0+IHtcbiAgICBjb25zdCB3aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIGlmICh3aWR0aCA8IDc2OCkgcmV0dXJuIDE7XG4gICAgaWYgKHdpZHRoIDwgMTIwMCkgcmV0dXJuIDI7XG4gICAgcmV0dXJuIDM7XG4gIH07XG5cbiAgY29uc3QgaW1hZ2VzUGVyUm93ID0gZ2V0SW1hZ2VzUGVyUm93KCk7XG4gIGNvbnN0IGNvbnRhaW5lcldpZHRoID0gaW1hZ2VHcmlkLmNsaWVudFdpZHRoIHx8IHdpbmRvdy5pbm5lcldpZHRoIC0gNDA7XG4gIGNvbnN0IGdhcCA9IDI0O1xuXG4gIC8vIENyZWF0ZSByb3dzIG9mIGltYWdlc1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGltYWdlcy5sZW5ndGg7IGkgKz0gaW1hZ2VzUGVyUm93KSB7XG4gICAgY29uc3Qgcm93SW1hZ2VzID0gaW1hZ2VzLnNsaWNlKGksIGkgKyBpbWFnZXNQZXJSb3cpO1xuICAgIGNvbnN0IHJvd0RpbWVuc2lvbnMgPSBpbWFnZURpbWVuc2lvbnMuc2xpY2UoaSwgaSArIGltYWdlc1BlclJvdyk7XG5cbiAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHJvdy5jbGFzc0xpc3QuYWRkKFwiaW1hZ2Utcm93XCIpO1xuICAgIHJvdy5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgcm93LnN0eWxlLmdhcCA9IGdhcCArIFwicHhcIjtcbiAgICByb3cuc3R5bGUubWFyZ2luQm90dG9tID0gZ2FwICsgXCJweFwiO1xuXG4gICAgLy8gQ2FsY3VsYXRlIHVuaWZvcm0gaGVpZ2h0IGFuZCBwcm9wb3J0aW9uYWwgd2lkdGhzXG4gICAgY29uc3QgYmFzZUhlaWdodCA9IDMwMDtcbiAgICBjb25zdCBhdmFpbGFibGVXaWR0aCA9IGNvbnRhaW5lcldpZHRoIC0gZ2FwICogKHJvd0ltYWdlcy5sZW5ndGggLSAxKTtcblxuICAgIGxldCB0b3RhbEFzcGVjdFJhdGlvID0gcm93RGltZW5zaW9ucy5yZWR1Y2UoXG4gICAgICAoc3VtLCBkaW0pID0+IHN1bSArIGRpbS53aWR0aCAvIGRpbS5oZWlnaHQsXG4gICAgICAwXG4gICAgKTtcbiAgICBjb25zdCBhZGp1c3RlZEhlaWdodCA9IE1hdGgubWluKFxuICAgICAgYmFzZUhlaWdodCxcbiAgICAgIGF2YWlsYWJsZVdpZHRoIC8gdG90YWxBc3BlY3RSYXRpb1xuICAgICk7XG5cbiAgICAvLyBDcmVhdGUgaW1hZ2UgZWxlbWVudHNcbiAgICByb3dJbWFnZXMuZm9yRWFjaCgoeyBmaWxlTmFtZSwgdXJsIH0sIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgaW1nLnNyYyA9IHVybDtcbiAgICAgIGltZy5hbHQgPSBmaWxlTmFtZTtcblxuICAgICAgY29uc3QgYXNwZWN0UmF0aW8gPVxuICAgICAgICByb3dEaW1lbnNpb25zW2luZGV4XS53aWR0aCAvIHJvd0RpbWVuc2lvbnNbaW5kZXhdLmhlaWdodDtcbiAgICAgIGNvbnN0IGltYWdlV2lkdGggPSBhZGp1c3RlZEhlaWdodCAqIGFzcGVjdFJhdGlvO1xuXG4gICAgICBpbWcuc3R5bGUud2lkdGggPSBgJHtpbWFnZVdpZHRofXB4YDtcbiAgICAgIGltZy5zdHlsZS5oZWlnaHQgPSBgJHthZGp1c3RlZEhlaWdodH1weGA7XG4gICAgICBpbWcuc3R5bGUub2JqZWN0Rml0ID0gXCJjb3ZlclwiO1xuICAgICAgaW1nLnN0eWxlLm9iamVjdFBvc2l0aW9uID0gXCJjZW50ZXIgY2VudGVyXCI7XG5cbiAgICAgIGltZy5jbGFzc0xpc3QuYWRkKFwiZ2FsbGVyeS1pbWFnZVwiKTtcbiAgICAgIGltZy5kYXRhc2V0LmZ1bGxJbWFnZSA9IHVybDtcblxuICAgICAgcm93LmFwcGVuZENoaWxkKGltZyk7XG4gICAgfSk7XG5cbiAgICBpbWFnZUdyaWQuYXBwZW5kQ2hpbGQocm93KTtcbiAgfVxufVxuXG4vLyBMaWdodGJveCBmdW5jdGlvbmFsaXR5XG5mdW5jdGlvbiBjcmVhdGVMaWdodGJveCgpIHtcbiAgY29uc3QgbGlnaHRib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsaWdodGJveC5pZCA9IFwibGlnaHRib3hcIjtcbiAgbGlnaHRib3guY2xhc3NMaXN0LmFkZChcImxpZ2h0Ym94XCIpO1xuXG4gIGNvbnN0IGxpZ2h0Ym94Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxpZ2h0Ym94Q29udGVudC5jbGFzc0xpc3QuYWRkKFwibGlnaHRib3gtY29udGVudFwiKTtcblxuICBjb25zdCBsaWdodGJveEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgbGlnaHRib3hJbWFnZS5jbGFzc0xpc3QuYWRkKFwibGlnaHRib3gtaW1hZ2VcIik7XG5cbiAgY29uc3QgdGFnZ2luZ1BhbmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGFnZ2luZ1BhbmVsLmNsYXNzTGlzdC5hZGQoXCJ0YWdnaW5nLXBhbmVsXCIpO1xuXG4gIC8vIENyZWF0ZSBmb3JtIHNlY3Rpb25zXG4gIGNvbnN0IGRhdGVTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGF0ZVNlY3Rpb24uY2xhc3NMaXN0LmFkZChcInRhZy1zZWN0aW9uXCIpO1xuICBkYXRlU2VjdGlvbi5pbm5lckhUTUwgPSBgXG4gICAgPGxhYmVsPkRhdGU6IFxuICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgY2xhc3M9XCJ0YWctZGF0ZVwiIC8+XG4gICAgPC9sYWJlbD5cbiAgYDtcblxuICBjb25zdCBsb2NhdGlvblNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsb2NhdGlvblNlY3Rpb24uY2xhc3NMaXN0LmFkZChcInRhZy1zZWN0aW9uXCIpO1xuICBsb2NhdGlvblNlY3Rpb24uaW5uZXJIVE1MID0gYFxuICAgIDxsYWJlbD5Mb2NhdGlvbjogXG4gICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtd3JhcHBlclwiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cInRhZy1sb2NhdGlvblwiIHBsYWNlaG9sZGVyPVwiQWRkIGxvY2F0aW9uLi4uXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvbGFiZWw+XG4gIGA7XG5cbiAgY29uc3Qgc3ViamVjdFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzdWJqZWN0U2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwidGFnLXNlY3Rpb25cIik7XG4gIHN1YmplY3RTZWN0aW9uLmlubmVySFRNTCA9IGBcbiAgICA8bGFiZWw+U3ViamVjdChzKTogXG4gICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtd3JhcHBlclwiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cInRhZy1zdWJqZWN0XCIgcGxhY2Vob2xkZXI9XCJBZGQgc3ViamVjdHMuLi5cIiAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8c3BhbiBjbGFzcz1cInRhZy1oaW50XCI+KHNlcGFyYXRlIHdpdGggY29tbWFzKTwvc3Bhbj5cbiAgICA8L2xhYmVsPlxuICBgO1xuXG4gIGNvbnN0IHNhdmVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBzYXZlQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJ0YWctc2F2ZS1idXR0b25cIik7XG4gIHNhdmVCdXR0b24udGV4dENvbnRlbnQgPSBcIlNhdmUgVGFnc1wiO1xuXG4gIGNvbnN0IHRhZ0Rpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0YWdEaXNwbGF5LmNsYXNzTGlzdC5hZGQoXCJ0YWctZGlzcGxheVwiKTtcblxuICAvLyBBc3NlbWJsZSBjb21wb25lbnRzXG4gIHRhZ2dpbmdQYW5lbC5hcHBlbmRDaGlsZChkYXRlU2VjdGlvbik7XG4gIHRhZ2dpbmdQYW5lbC5hcHBlbmRDaGlsZChsb2NhdGlvblNlY3Rpb24pO1xuICB0YWdnaW5nUGFuZWwuYXBwZW5kQ2hpbGQoc3ViamVjdFNlY3Rpb24pO1xuICB0YWdnaW5nUGFuZWwuYXBwZW5kQ2hpbGQoc2F2ZUJ1dHRvbik7XG4gIHRhZ2dpbmdQYW5lbC5hcHBlbmRDaGlsZCh0YWdEaXNwbGF5KTtcblxuICBjb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNsb3NlQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJsaWdodGJveC1jbG9zZVwiKTtcbiAgY2xvc2VCdXR0b24udGV4dENvbnRlbnQgPSBcIsOXXCI7XG5cbiAgbGlnaHRib3hDb250ZW50LmFwcGVuZENoaWxkKGxpZ2h0Ym94SW1hZ2UpO1xuICBsaWdodGJveC5hcHBlbmRDaGlsZChsaWdodGJveENvbnRlbnQpO1xuICBsaWdodGJveC5hcHBlbmRDaGlsZCh0YWdnaW5nUGFuZWwpO1xuICBsaWdodGJveC5hcHBlbmRDaGlsZChjbG9zZUJ1dHRvbik7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobGlnaHRib3gpO1xuXG4gIC8vIEluaXRpYWxpemUgYXV0b2NvbXBsZXRlXG4gIGNvbnN0IGxvY2F0aW9uSW5wdXQgPSBsaWdodGJveC5xdWVyeVNlbGVjdG9yKFwiLnRhZy1sb2NhdGlvblwiKTtcbiAgY29uc3Qgc3ViamVjdElucHV0ID0gbGlnaHRib3gucXVlcnlTZWxlY3RvcihcIi50YWctc3ViamVjdFwiKTtcblxuICBjb25zdCBleGlzdGluZ1RhZ3MgPSBnZXRBbGxFeGlzdGluZ1RhZ3MoKTtcbiAgbGlnaHRib3gubG9jYXRpb25BdXRvY29tcGxldGUgPSBjcmVhdGVBdXRvY29tcGxldGUoXG4gICAgbG9jYXRpb25JbnB1dCxcbiAgICBleGlzdGluZ1RhZ3MubG9jYXRpb25zLFxuICAgIGZhbHNlXG4gICk7XG4gIGxpZ2h0Ym94LnN1YmplY3RBdXRvY29tcGxldGUgPSBjcmVhdGVBdXRvY29tcGxldGUoXG4gICAgc3ViamVjdElucHV0LFxuICAgIGV4aXN0aW5nVGFncy5zdWJqZWN0cyxcbiAgICB0cnVlXG4gICk7XG5cbiAgbGlnaHRib3guZGF0YXNldC5jdXJyZW50SW1hZ2UgPSBcIlwiO1xuXG4gIC8vIEV2ZW50IGhhbmRsZXJzXG4gIHNhdmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb25zdCBpbWFnZVBhdGggPSBsaWdodGJveC5kYXRhc2V0LmN1cnJlbnRJbWFnZTtcbiAgICBjb25zdCBkYXRlID0gbGlnaHRib3gucXVlcnlTZWxlY3RvcihcIi50YWctZGF0ZVwiKS52YWx1ZTtcbiAgICBjb25zdCBsb2NhdGlvbiA9IGxpZ2h0Ym94LnF1ZXJ5U2VsZWN0b3IoXCIudGFnLWxvY2F0aW9uXCIpLnZhbHVlO1xuICAgIGNvbnN0IHN1YmplY3RzUmF3ID0gbGlnaHRib3gucXVlcnlTZWxlY3RvcihcIi50YWctc3ViamVjdFwiKS52YWx1ZTtcblxuICAgIGNvbnN0IHN1YmplY3RzID0gc3ViamVjdHNSYXdcbiAgICAgID8gc3ViamVjdHNSYXdcbiAgICAgICAgICAuc3BsaXQoXCIsXCIpXG4gICAgICAgICAgLm1hcCgocykgPT4gcy50cmltKCkpXG4gICAgICAgICAgLmZpbHRlcigocykgPT4gcylcbiAgICAgIDogW107XG5cbiAgICBzYXZlSW1hZ2VUYWdzKGltYWdlUGF0aCwgeyBkYXRlLCBsb2NhdGlvbiwgc3ViamVjdHMgfSk7XG5cbiAgICAvLyBVcGRhdGUgYXV0b2NvbXBsZXRlIHN1Z2dlc3Rpb25zXG4gICAgY29uc3QgdXBkYXRlZFRhZ3MgPSBnZXRBbGxFeGlzdGluZ1RhZ3MoKTtcbiAgICBsaWdodGJveC5sb2NhdGlvbkF1dG9jb21wbGV0ZS51cGRhdGUodXBkYXRlZFRhZ3MubG9jYXRpb25zKTtcbiAgICBsaWdodGJveC5zdWJqZWN0QXV0b2NvbXBsZXRlLnVwZGF0ZSh1cGRhdGVkVGFncy5zdWJqZWN0cyk7XG4gIH0pO1xuXG4gIC8vIENsb3NlIGhhbmRsZXJzXG4gIGxpZ2h0Ym94LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldCA9PT0gbGlnaHRib3ggfHwgZS50YXJnZXQgPT09IGNsb3NlQnV0dG9uKSB7XG4gICAgICBjbG9zZUxpZ2h0Ym94KGxpZ2h0Ym94KTtcbiAgICB9XG4gIH0pO1xuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XG4gICAgaWYgKGUua2V5ID09PSBcIkVzY2FwZVwiICYmIGxpZ2h0Ym94LmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkge1xuICAgICAgY2xvc2VMaWdodGJveChsaWdodGJveCk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gbGlnaHRib3g7XG59XG5cbmZ1bmN0aW9uIGdldEFsbEV4aXN0aW5nVGFncygpIHtcbiAgY29uc3QgbG9jYXRpb25zID0gbmV3IFNldCgpO1xuICBjb25zdCBzdWJqZWN0cyA9IG5ldyBTZXQoKTtcblxuICBPYmplY3QudmFsdWVzKGltYWdlTWV0YWRhdGEpLmZvckVhY2goKHRhZ3MpID0+IHtcbiAgICBpZiAodGFncy5sb2NhdGlvbikge1xuICAgICAgbG9jYXRpb25zLmFkZCh0YWdzLmxvY2F0aW9uKTtcbiAgICB9XG4gICAgaWYgKHRhZ3Muc3ViamVjdHMgJiYgQXJyYXkuaXNBcnJheSh0YWdzLnN1YmplY3RzKSkge1xuICAgICAgdGFncy5zdWJqZWN0cy5mb3JFYWNoKChzdWJqZWN0KSA9PiBzdWJqZWN0cy5hZGQoc3ViamVjdCkpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHtcbiAgICBsb2NhdGlvbnM6IEFycmF5LmZyb20obG9jYXRpb25zKS5zb3J0KCksXG4gICAgc3ViamVjdHM6IEFycmF5LmZyb20oc3ViamVjdHMpLnNvcnQoKSxcbiAgfTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQXV0b2NvbXBsZXRlKGlucHV0LCBzdWdnZXN0aW9ucywgbXVsdGlWYWx1ZSA9IGZhbHNlKSB7XG4gIGNvbnN0IGF1dG9jb21wbGV0ZVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBhdXRvY29tcGxldGVXcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJhdXRvY29tcGxldGUtd3JhcHBlclwiKTtcbiAgaW5wdXQucGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZChhdXRvY29tcGxldGVXcmFwcGVyKTtcblxuICBjb25zdCBkcm9wZG93biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRyb3Bkb3duLmNsYXNzTGlzdC5hZGQoXCJhdXRvY29tcGxldGUtZHJvcGRvd25cIik7XG4gIGF1dG9jb21wbGV0ZVdyYXBwZXIuYXBwZW5kQ2hpbGQoZHJvcGRvd24pO1xuXG4gIGxldCBjdXJyZW50Rm9jdXMgPSAtMTtcblxuICBmdW5jdGlvbiBzaG93U3VnZ2VzdGlvbnModmFsdWUpIHtcbiAgICBkcm9wZG93bi5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGN1cnJlbnRGb2N1cyA9IFwiXCI7XG5cbiAgICBpZiAoIXZhbHVlKSB7XG4gICAgICBkcm9wZG93bi5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgc2VhcmNoVmFsdWUgPSB2YWx1ZTtcbiAgICBpZiAobXVsdGlWYWx1ZSkge1xuICAgICAgY29uc3QgdmFsdWVzID0gdmFsdWUuc3BsaXQoXCIsXCIpO1xuICAgICAgc2VhcmNoVmFsdWUgPSB2YWx1ZXNbdmFsdWVzLmxlbmd0aCAtIDFdLnRyaW0oKTtcbiAgICB9XG5cbiAgICBjb25zdCBmaWx0ZXJlZCA9IHN1Z2dlc3Rpb25zLmZpbHRlcigoaXRlbSkgPT5cbiAgICAgIGl0ZW0udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hWYWx1ZS50b0xvd2VyQ2FzZSgpKVxuICAgICk7XG5cbiAgICBpZiAoZmlsdGVyZWQubGVuZ3RoID09PSAwKSB7XG4gICAgICBkcm9wZG93bi5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBkcm9wZG93bi5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKTtcblxuICAgIGZpbHRlcmVkLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBkaXYuY2xhc3NMaXN0LmFkZChcImF1dG9jb21wbGV0ZS1pdGVtXCIpO1xuXG4gICAgICBjb25zdCByZWdleCA9IG5ldyBSZWdFeHAoXCIoXCIgKyBzZWFyY2hWYWx1ZSArIFwiKVwiLCBcImdpXCIpO1xuICAgICAgZGl2LmlubmVySFRNTCA9IGl0ZW0ucmVwbGFjZShyZWdleCwgXCI8c3Ryb25nPiQxPC9zdHJvbmc+XCIpO1xuXG4gICAgICBkaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgc2VsZWN0SXRlbShpdGVtKTtcbiAgICAgIH0pO1xuXG4gICAgICBkcm9wZG93bi5hcHBlbmRDaGlsZChkaXYpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gc2VsZWN0SXRlbSh2YWx1ZSkge1xuICAgIGlmIChtdWx0aVZhbHVlKSB7XG4gICAgICBjb25zdCBjdXJyZW50VmFsdWVzID0gaW5wdXQudmFsdWUuc3BsaXQoXCIsXCIpLm1hcCgodikgPT4gdi50cmltKCkpO1xuICAgICAgY3VycmVudFZhbHVlc1tjdXJyZW50VmFsdWVzLmxlbmd0aCAtIDFdID0gdmFsdWU7XG4gICAgICBpbnB1dC52YWx1ZSA9IGN1cnJlbnRWYWx1ZXMuam9pbihcIiwgXCIpICsgXCIsIFwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbnB1dC52YWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgICBkcm9wZG93bi5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtcbiAgICBpbnB1dC5mb2N1cygpO1xuICB9XG5cbiAgZnVuY3Rpb24gbmF2aWdhdGUoZGlyZWN0aW9uKSB7XG4gICAgY29uc3QgaXRlbXMgPSBkcm9wZG93bi5xdWVyeVNlbGVjdG9yQWxsKFwiLmF1dG9jb21wbGV0ZS1pdGVtXCIpO1xuICAgIGlmIChpdGVtcy5sZW5ndGggPT09IDApIHJldHVybjtcblxuICAgIGlmIChjdXJyZW50Rm9jdXMgPj0gMCkge1xuICAgICAgaXRlbXNbY3VycmVudEZvY3VzXS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIH1cblxuICAgIGN1cnJlbnRGb2N1cyArPSBkaXJlY3Rpb247XG5cbiAgICBpZiAoY3VycmVudEZvY3VzID49IGl0ZW1zLmxlbmd0aCkgY3VycmVudEZvY3VzID0gMDtcbiAgICBpZiAoY3VycmVudEZvY3VzIDwgMCkgY3VycmVudEZvY3VzID0gaXRlbXMubGVuZ3RoIC0gMTtcblxuICAgIGl0ZW1zW2N1cnJlbnRGb2N1c10uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICBpdGVtc1tjdXJyZW50Rm9jdXNdLnNjcm9sbEludG9WaWV3KHsgYmxvY2s6IFwibmVhcmVzdFwiIH0pO1xuICB9XG5cbiAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChlKSA9PiB7XG4gICAgc2hvd1N1Z2dlc3Rpb25zKGUudGFyZ2V0LnZhbHVlKTtcbiAgfSk7XG5cbiAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcbiAgICBpZiAoZS5rZXkgPT09IFwiQXJyb3dEb3duXCIpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIG5hdmlnYXRlKDEpO1xuICAgIH0gZWxzZSBpZiAoZS5rZXkgPT09IFwiQXJyb3dVcFwiKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBuYXZpZ2F0ZSgtMSk7XG4gICAgfSBlbHNlIGlmIChlLmtleSA9PT0gXCJFbnRlclwiKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCBpdGVtcyA9IGRyb3Bkb3duLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYXV0b2NvbXBsZXRlLWl0ZW1cIik7XG4gICAgICBpZiAoY3VycmVudEZvY3VzID4gLTEgJiYgY3VycmVudEZvY3VzIDwgaXRlbXMubGVuZ3RoKSB7XG4gICAgICAgIGl0ZW1zW2N1cnJlbnRGb2N1c10uY2xpY2soKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGUua2V5ID09PSBcIkVzY2FwZVwiKSB7XG4gICAgICBkcm9wZG93bi5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtcbiAgICB9XG4gIH0pO1xuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGlmICghYXV0b2NvbXBsZXRlV3JhcHBlci5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgIGRyb3Bkb3duLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IChuZXdTdWdnZXN0aW9ucykgPT4ge1xuICAgICAgc3VnZ2VzdGlvbnMgPSBuZXdTdWdnZXN0aW9ucztcbiAgICB9LFxuICB9O1xufVxuXG4vLyBGaWx0ZXJpbmcgZnVuY3Rpb25hbGl0eVxuZnVuY3Rpb24gc2V0dXBDYXRlZ29yeUZpbHRlcnMoKSB7XG4gIGNvbnN0IGZpbHRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZmlsdGVyXCIpO1xuXG4gIC8vIENhdGVnb3J5IGZpbHRlciBzZXR1cFxuICBjb25zdCBjYXRlZ29yeUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNhdGVnb3J5QnV0dG9uLnRleHRDb250ZW50ID0gXCJTZWxlY3QgQ2F0ZWdvcmllc1wiO1xuICBjYXRlZ29yeUJ1dHRvbi5pZCA9IFwiY2F0ZWdvcnlCdXR0b25cIjtcblxuICBjb25zdCBkcm9wRG93biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRyb3BEb3duLmlkID0gXCJkcm9wZG93blwiO1xuXG4gIGZpbHRlci5hcHBlbmRDaGlsZChjYXRlZ29yeUJ1dHRvbik7XG4gIGZpbHRlci5hcHBlbmRDaGlsZChkcm9wRG93bik7XG5cbiAgLy8gUG9wdWxhdGUgZHJvcGRvd25cbiAgZHJvcERvd25PcHRpb25zKGltYWdlc0J5Rm9sZGVyLCBkcm9wRG93bik7XG5cbiAgLy8gQ2F0ZWdvcnkgZmlsdGVyIGxvZ2ljXG4gIGNvbnN0IGFsbENoZWNrYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbdmFsdWU9XCJhbGxcIl0nKTtcbiAgY29uc3QgY2F0ZWdvcnlDaGVja2JveGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAnLmNhdGVnb3J5LWNoZWNrYm94Om5vdChbdmFsdWU9XCJhbGxcIl0pJ1xuICApO1xuXG4gIGFsbENoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xuICAgIGNhdGVnb3J5Q2hlY2tib3hlcy5mb3JFYWNoKChjaGVja2JveCkgPT4ge1xuICAgICAgY2hlY2tib3guY2hlY2tlZCA9IHRoaXMuY2hlY2tlZDtcbiAgICAgIGNoZWNrYm94LmRpc2FibGVkID0gdGhpcy5jaGVja2VkO1xuICAgIH0pO1xuICAgIGZpbHRlckdhbGxlcnkoKTtcbiAgfSk7XG5cbiAgY2F0ZWdvcnlDaGVja2JveGVzLmZvckVhY2goKGNoZWNrYm94KSA9PiB7XG4gICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCBhbGxTZWxlY3RlZCA9IEFycmF5LmZyb20oY2F0ZWdvcnlDaGVja2JveGVzKS5ldmVyeShcbiAgICAgICAgKGNiKSA9PiBjYi5jaGVja2VkXG4gICAgICApO1xuICAgICAgYWxsQ2hlY2tib3guY2hlY2tlZCA9IGFsbFNlbGVjdGVkO1xuXG4gICAgICBjb25zdCBub25lU2VsZWN0ZWQgPSBBcnJheS5mcm9tKGNhdGVnb3J5Q2hlY2tib3hlcykuZXZlcnkoXG4gICAgICAgIChjYikgPT4gIWNiLmNoZWNrZWRcbiAgICAgICk7XG4gICAgICBpZiAobm9uZVNlbGVjdGVkKSB7XG4gICAgICAgIGFsbENoZWNrYm94LmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICBjYXRlZ29yeUNoZWNrYm94ZXMuZm9yRWFjaCgoY2IpID0+IHtcbiAgICAgICAgICBjYi5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICBjYi5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgZmlsdGVyR2FsbGVyeSgpO1xuICAgIH0pO1xuICB9KTtcblxuICAvLyBUYWcgZmlsdGVyaW5nIHNldHVwXG4gIHNldHVwVGFnRmlsdGVycyhmaWx0ZXIpO1xuXG4gIC8vIERyb3Bkb3duIHRvZ2dsZVxuICBjYXRlZ29yeUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIGRyb3BEb3duLmNsYXNzTGlzdC50b2dnbGUoXCJzaG93XCIpO1xuICB9KTtcblxuICAvLyBDbG9zZSBkcm9wZG93bnMgd2hlbiBjbGlja2luZyBvdXRzaWRlXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgaWYgKFxuICAgICAgIWV2ZW50LnRhcmdldC5tYXRjaGVzKFwiI2NhdGVnb3J5QnV0dG9uXCIpICYmXG4gICAgICAhZXZlbnQudGFyZ2V0LmNsb3Nlc3QoXCIjZHJvcGRvd25cIilcbiAgICApIHtcbiAgICAgIGRyb3BEb3duLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpO1xuICAgIH1cbiAgfSk7XG5cbiAgZHJvcERvd24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZHJvcERvd25PcHRpb25zKG9iaiwgZHJvcERvd24pIHtcbiAgLy8gXCJBbGwgQ2F0ZWdvcmllc1wiIG9wdGlvblxuICBjb25zdCBhbGxPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGFsbE9wdGlvbi5jbGFzc05hbWUgPSBcImRyb3Bkb3duLWl0ZW1cIjtcblxuICBjb25zdCBhbGxDaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgYWxsQ2hlY2tib3gudHlwZSA9IFwiY2hlY2tib3hcIjtcbiAgYWxsQ2hlY2tib3guY2hlY2tlZCA9IHRydWU7XG4gIGFsbENoZWNrYm94LnZhbHVlID0gXCJhbGxcIjtcbiAgYWxsQ2hlY2tib3guY2xhc3NOYW1lID0gXCJjYXRlZ29yeS1jaGVja2JveFwiO1xuXG4gIGFsbE9wdGlvbi5hcHBlbmRDaGlsZChhbGxDaGVja2JveCk7XG4gIGFsbE9wdGlvbi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIiBBbGwgQ2F0ZWdvcmllc1wiKSk7XG4gIGRyb3BEb3duLmFwcGVuZENoaWxkKGFsbE9wdGlvbik7XG5cbiAgY29uc3Qgc2VwYXJhdG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgc2VwYXJhdG9yLmNsYXNzTmFtZSA9IFwiZHJvcGRvd24tc2VwYXJhdG9yXCI7XG4gIGRyb3BEb3duLmFwcGVuZENoaWxkKHNlcGFyYXRvcik7XG5cbiAgLy8gSW5kaXZpZHVhbCBjYXRlZ29yaWVzXG4gIGZvciAoY29uc3Qga2V5IGluIG9iaikge1xuICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgb3B0aW9uLmNsYXNzTmFtZSA9IFwiZHJvcGRvd24taXRlbVwiO1xuXG4gICAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgIGNoZWNrYm94LnR5cGUgPSBcImNoZWNrYm94XCI7XG4gICAgICBjaGVja2JveC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgIGNoZWNrYm94LnZhbHVlID0ga2V5O1xuICAgICAgY2hlY2tib3guY2xhc3NOYW1lID0gXCJjYXRlZ29yeS1jaGVja2JveFwiO1xuXG4gICAgICBvcHRpb24uYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xuICAgICAgb3B0aW9uLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiIFwiICsga2V5KSk7XG4gICAgICBkcm9wRG93bi5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBzZXR1cFRhZ0ZpbHRlcnMoZmlsdGVyU2VjdGlvbikge1xuICBjb25zdCB0YWdGaWx0ZXJCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICB0YWdGaWx0ZXJCdXR0b24uaWQgPSBcInRhZ0ZpbHRlckJ1dHRvblwiO1xuICB0YWdGaWx0ZXJCdXR0b24udGV4dENvbnRlbnQgPSBcIkZpbHRlciBieSBUYWdzXCI7XG4gIGZpbHRlclNlY3Rpb24uYXBwZW5kQ2hpbGQodGFnRmlsdGVyQnV0dG9uKTtcblxuICBjb25zdCB0YWdEcm9wZG93biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRhZ0Ryb3Bkb3duLmlkID0gXCJ0YWdEcm9wZG93blwiO1xuICBmaWx0ZXJTZWN0aW9uLmFwcGVuZENoaWxkKHRhZ0Ryb3Bkb3duKTtcblxuICAvLyBDcmVhdGUgZmlsdGVyIGZvcm1cbiAgdGFnRHJvcGRvd24uaW5uZXJIVE1MID0gYFxuICAgIDxkaXYgY2xhc3M9XCJ0YWctZmlsdGVyLXNlY3Rpb25cIj5cbiAgICAgIDxoND5EYXRlIFJhbmdlPC9oND5cbiAgICAgIDxkaXYgY2xhc3M9XCJkYXRlLXJhbmdlLWlucHV0c1wiPlxuICAgICAgICA8bGFiZWw+RnJvbTogPGlucHV0IHR5cGU9XCJkYXRlXCIgaWQ9XCJkYXRlRnJvbVwiPjwvbGFiZWw+XG4gICAgICAgIDxsYWJlbD5UbzogPGlucHV0IHR5cGU9XCJkYXRlXCIgaWQ9XCJkYXRlVG9cIj48L2xhYmVsPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInRhZy1maWx0ZXItc2VjdGlvblwiPlxuICAgICAgPGg0PkxvY2F0aW9uPC9oND5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibG9jYXRpb25GaWx0ZXJcIiBwbGFjZWhvbGRlcj1cIkZpbHRlciBieSBsb2NhdGlvbi4uLlwiPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJ0YWctZmlsdGVyLXNlY3Rpb25cIj5cbiAgICAgIDxoND5TdWJqZWN0PC9oND5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwic3ViamVjdEZpbHRlclwiIHBsYWNlaG9sZGVyPVwiRmlsdGVyIGJ5IHN1YmplY3QuLi5cIj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiZmlsdGVyLWJ1dHRvbnNcIj5cbiAgICAgIDxidXR0b24gaWQ9XCJhcHBseVRhZ0ZpbHRlcnNcIj5BcHBseSBGaWx0ZXJzPC9idXR0b24+XG4gICAgICA8YnV0dG9uIGlkPVwiY2xlYXJUYWdGaWx0ZXJzXCI+Q2xlYXI8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgYDtcblxuICAvLyBJbml0aWFsaXplIGF1dG9jb21wbGV0ZSBmb3IgdGFnIGZpbHRlcnNcbiAgY29uc3QgbG9jYXRpb25JbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9jYXRpb25GaWx0ZXJcIik7XG4gIGNvbnN0IHN1YmplY3RJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3ViamVjdEZpbHRlclwiKTtcbiAgY29uc3QgZXhpc3RpbmdUYWdzID0gZ2V0QWxsRXhpc3RpbmdUYWdzKCk7XG5cbiAgY3JlYXRlQXV0b2NvbXBsZXRlKGxvY2F0aW9uSW5wdXQsIGV4aXN0aW5nVGFncy5sb2NhdGlvbnMsIGZhbHNlKTtcbiAgY3JlYXRlQXV0b2NvbXBsZXRlKHN1YmplY3RJbnB1dCwgZXhpc3RpbmdUYWdzLnN1YmplY3RzLCB0cnVlKTtcblxuICAvLyBFdmVudCBsaXN0ZW5lcnNcbiAgdGFnRmlsdGVyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgdGFnRHJvcGRvd24uY2xhc3NMaXN0LnRvZ2dsZShcInNob3dcIik7XG4gIH0pO1xuXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwbHlUYWdGaWx0ZXJzXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY29uc3QgZGF0ZUZyb20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGVGcm9tXCIpLnZhbHVlO1xuICAgIGNvbnN0IGRhdGVUbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF0ZVRvXCIpLnZhbHVlO1xuICAgIGNvbnN0IGxvY2F0aW9uID0gZG9jdW1lbnRcbiAgICAgIC5nZXRFbGVtZW50QnlJZChcImxvY2F0aW9uRmlsdGVyXCIpXG4gICAgICAudmFsdWUudG9Mb3dlckNhc2UoKTtcbiAgICBjb25zdCBzdWJqZWN0ID0gZG9jdW1lbnRcbiAgICAgIC5nZXRFbGVtZW50QnlJZChcInN1YmplY3RGaWx0ZXJcIilcbiAgICAgIC52YWx1ZS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgZmlsdGVySW1hZ2VzQnlUYWdzKGRhdGVGcm9tLCBkYXRlVG8sIGxvY2F0aW9uLCBzdWJqZWN0KTtcbiAgICB0YWdEcm9wZG93bi5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtcblxuICAgIGlmIChkYXRlRnJvbSB8fCBkYXRlVG8gfHwgbG9jYXRpb24gfHwgc3ViamVjdCkge1xuICAgICAgdGFnRmlsdGVyQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJmaWx0ZXJpbmctYWN0aXZlXCIpO1xuICAgICAgdGFnRmlsdGVyQnV0dG9uLnRleHRDb250ZW50ID0gXCJUYWdzIEZpbHRlcmVkXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRhZ0ZpbHRlckJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiZmlsdGVyaW5nLWFjdGl2ZVwiKTtcbiAgICAgIHRhZ0ZpbHRlckJ1dHRvbi50ZXh0Q29udGVudCA9IFwiRmlsdGVyIGJ5IFRhZ3NcIjtcbiAgICB9XG4gIH0pO1xuXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xlYXJUYWdGaWx0ZXJzXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRlRnJvbVwiKS52YWx1ZSA9IFwiXCI7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRlVG9cIikudmFsdWUgPSBcIlwiO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9jYXRpb25GaWx0ZXJcIikudmFsdWUgPSBcIlwiO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3ViamVjdEZpbHRlclwiKS52YWx1ZSA9IFwiXCI7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmdhbGxlcnktaW1hZ2VcIikuZm9yRWFjaCgoaW1nKSA9PiB7XG4gICAgICBpbWcuY2xhc3NMaXN0LnJlbW92ZShcInRhZy1maWx0ZXJlZC1vdXRcIik7XG4gICAgICBpbWcuc3R5bGUuZGlzcGxheSA9IFwiXCI7XG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZvbGRlci1zZWN0aW9uXCIpLmZvckVhY2goKGZvbGRlcikgPT4ge1xuICAgICAgZm9sZGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW4tYnktdGFnXCIpO1xuICAgIH0pO1xuXG4gICAgT2JqZWN0LnZhbHVlcyhmb2xkZXJEYXRhKS5mb3JFYWNoKCh7IHNlY3Rpb24sIGltYWdlcywgZGltZW5zaW9ucyB9KSA9PiB7XG4gICAgICBsYXlvdXRJbWFnZXMoc2VjdGlvbiwgaW1hZ2VzLCBkaW1lbnNpb25zKTtcbiAgICB9KTtcblxuICAgIHRhZ0ZpbHRlckJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiZmlsdGVyaW5nLWFjdGl2ZVwiKTtcbiAgICB0YWdGaWx0ZXJCdXR0b24udGV4dENvbnRlbnQgPSBcIkZpbHRlciBieSBUYWdzXCI7XG4gIH0pO1xuXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgaWYgKFxuICAgICAgIWV2ZW50LnRhcmdldC5tYXRjaGVzKFwiI3RhZ0ZpbHRlckJ1dHRvblwiKSAmJlxuICAgICAgIWV2ZW50LnRhcmdldC5jbG9zZXN0KFwiI3RhZ0Ryb3Bkb3duXCIpXG4gICAgKSB7XG4gICAgICB0YWdEcm9wZG93bi5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtcbiAgICB9XG4gIH0pO1xuXG4gIHRhZ0Ryb3Bkb3duLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHNldHVwRXZlbnRIYW5kbGVycyhsaWdodGJveCkge1xuICAvLyBIYW5kbGUgY2xpY2tzIG9uIGdhbGxlcnkgaW1hZ2VzXG4gIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImdhbGxlcnktaW1hZ2VcIikpIHtcbiAgICAgIGNvbnN0IGZ1bGxJbWFnZVNyYyA9IGUudGFyZ2V0LmRhdGFzZXQuZnVsbEltYWdlO1xuICAgICAgb3BlbkxpZ2h0Ym94KGxpZ2h0Ym94LCBmdWxsSW1hZ2VTcmMpO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVdpbmRvd1Jlc2l6ZSgpIHtcbiAgY2xlYXJUaW1lb3V0KHJlc2l6ZVRpbWVvdXQpO1xuICByZXNpemVUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgT2JqZWN0LnZhbHVlcyhmb2xkZXJEYXRhKS5mb3JFYWNoKCh7IHNlY3Rpb24sIGltYWdlcywgZGltZW5zaW9ucyB9KSA9PiB7XG4gICAgICBsYXlvdXRJbWFnZXMoc2VjdGlvbiwgaW1hZ2VzLCBkaW1lbnNpb25zKTtcbiAgICB9KTtcbiAgfSwgMjUwKTtcbn1cblxuZnVuY3Rpb24gb3BlbkxpZ2h0Ym94KGxpZ2h0Ym94LCBpbWFnZVNyYykge1xuICBjb25zdCBsaWdodGJveEltYWdlID0gbGlnaHRib3gucXVlcnlTZWxlY3RvcihcIi5saWdodGJveC1pbWFnZVwiKTtcblxuICBsaWdodGJveC5kYXRhc2V0LmN1cnJlbnRJbWFnZSA9IGltYWdlU3JjO1xuICBsaWdodGJveEltYWdlLnNyYyA9IGltYWdlU3JjO1xuXG4gIC8vIEZpbGwgZXhpc3RpbmcgdGFnc1xuICBpZiAoaW1hZ2VNZXRhZGF0YVtpbWFnZVNyY10pIHtcbiAgICBjb25zdCB0YWdzID0gaW1hZ2VNZXRhZGF0YVtpbWFnZVNyY107XG4gICAgbGlnaHRib3gucXVlcnlTZWxlY3RvcihcIi50YWctZGF0ZVwiKS52YWx1ZSA9IHRhZ3MuZGF0ZSB8fCBcIlwiO1xuICAgIGxpZ2h0Ym94LnF1ZXJ5U2VsZWN0b3IoXCIudGFnLWxvY2F0aW9uXCIpLnZhbHVlID0gdGFncy5sb2NhdGlvbiB8fCBcIlwiO1xuXG4gICAgaWYgKHRhZ3Muc3ViamVjdHMgJiYgQXJyYXkuaXNBcnJheSh0YWdzLnN1YmplY3RzKSkge1xuICAgICAgbGlnaHRib3gucXVlcnlTZWxlY3RvcihcIi50YWctc3ViamVjdFwiKS52YWx1ZSA9IHRhZ3Muc3ViamVjdHMuam9pbihcIiwgXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsaWdodGJveC5xdWVyeVNlbGVjdG9yKFwiLnRhZy1zdWJqZWN0XCIpLnZhbHVlID0gXCJcIjtcbiAgICB9XG5cbiAgICB1cGRhdGVUYWdEaXNwbGF5KGxpZ2h0Ym94LnF1ZXJ5U2VsZWN0b3IoXCIudGFnLWRpc3BsYXlcIiksIHRhZ3MsIGltYWdlU3JjKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBDbGVhciBmb3JtXG4gICAgbGlnaHRib3gucXVlcnlTZWxlY3RvcihcIi50YWctZGF0ZVwiKS52YWx1ZSA9IFwiXCI7XG4gICAgbGlnaHRib3gucXVlcnlTZWxlY3RvcihcIi50YWctbG9jYXRpb25cIikudmFsdWUgPSBcIlwiO1xuICAgIGxpZ2h0Ym94LnF1ZXJ5U2VsZWN0b3IoXCIudGFnLXN1YmplY3RcIikudmFsdWUgPSBcIlwiO1xuICAgIGxpZ2h0Ym94LnF1ZXJ5U2VsZWN0b3IoXCIudGFnLWRpc3BsYXlcIikuaW5uZXJIVE1MID0gXCI8cD5ObyB0YWdzIHlldDwvcD5cIjtcbiAgfVxuXG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgbGlnaHRib3guY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJsaWdodGJveC1vcGVuXCIpO1xuICB9KTtcbn1cblxuLy8gVGFnIGRpc3BsYXkgYW5kIGRlbGV0aW9uIGZ1bmN0aW9uc1xuZnVuY3Rpb24gdXBkYXRlVGFnRGlzcGxheShkaXNwbGF5RWxlbWVudCwgdGFncywgaW1hZ2VQYXRoKSB7XG4gIGlmICghdGFncykge1xuICAgIGRpc3BsYXlFbGVtZW50LmlubmVySFRNTCA9IFwiPHA+Tm8gdGFncyB5ZXQ8L3A+XCI7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgbGV0IGh0bWwgPSAnPGRpdiBjbGFzcz1cInRhZ3MtbGlzdFwiPic7XG5cbiAgaWYgKHRhZ3MuZGF0ZSkge1xuICAgIGh0bWwgKz0gYDxkaXYgY2xhc3M9XCJ0YWctaXRlbSB0YWctZGF0ZVwiIGRhdGEtdGFnLXR5cGU9XCJkYXRlXCIgZGF0YS1pbWFnZS1wYXRoPVwiJHtpbWFnZVBhdGh9XCI+XG4gICAgICDwn5OFICR7bmV3IERhdGUodGFncy5kYXRlKS50b0xvY2FsZURhdGVTdHJpbmcoKX1cbiAgICAgIDxkaXYgY2xhc3M9XCJ0YWctZGVsZXRlXCIgZGF0YS10YWctdHlwZT1cImRhdGVcIj7DlzwvZGl2PlxuICAgIDwvZGl2PmA7XG4gIH1cblxuICBpZiAodGFncy5sb2NhdGlvbikge1xuICAgIGh0bWwgKz0gYDxkaXYgY2xhc3M9XCJ0YWctaXRlbSB0YWctbG9jYXRpb25cIiBkYXRhLXRhZy10eXBlPVwibG9jYXRpb25cIiBkYXRhLWltYWdlLXBhdGg9XCIke2ltYWdlUGF0aH1cIj5cbiAgICAgIPCfk40gJHt0YWdzLmxvY2F0aW9ufVxuICAgICAgPGRpdiBjbGFzcz1cInRhZy1kZWxldGVcIiBkYXRhLXRhZy10eXBlPVwibG9jYXRpb25cIj7DlzwvZGl2PlxuICAgIDwvZGl2PmA7XG4gIH1cblxuICBpZiAodGFncy5zdWJqZWN0cyAmJiB0YWdzLnN1YmplY3RzLmxlbmd0aCA+IDApIHtcbiAgICB0YWdzLnN1YmplY3RzLmZvckVhY2goKHN1YmplY3QsIGluZGV4KSA9PiB7XG4gICAgICBodG1sICs9IGA8ZGl2IGNsYXNzPVwidGFnLWl0ZW0gdGFnLXN1YmplY3RcIiBkYXRhLXRhZy10eXBlPVwic3ViamVjdFwiIGRhdGEtc3ViamVjdC1pbmRleD1cIiR7aW5kZXh9XCIgZGF0YS1pbWFnZS1wYXRoPVwiJHtpbWFnZVBhdGh9XCI+XG4gICAgICAgIPCfj7fvuI8gJHtzdWJqZWN0fVxuICAgICAgICA8ZGl2IGNsYXNzPVwidGFnLWRlbGV0ZVwiIGRhdGEtdGFnLXR5cGU9XCJzdWJqZWN0XCIgZGF0YS1zdWJqZWN0LWluZGV4PVwiJHtpbmRleH1cIj7DlzwvZGl2PlxuICAgICAgPC9kaXY+YDtcbiAgICB9KTtcbiAgfVxuXG4gIGh0bWwgKz0gXCI8L2Rpdj5cIjtcblxuICBpZiAoXG4gICAgIXRhZ3MuZGF0ZSAmJlxuICAgICF0YWdzLmxvY2F0aW9uICYmXG4gICAgKCF0YWdzLnN1YmplY3RzIHx8IHRhZ3Muc3ViamVjdHMubGVuZ3RoID09PSAwKVxuICApIHtcbiAgICBodG1sID0gXCI8cD5ObyB0YWdzIHlldDwvcD5cIjtcbiAgfVxuXG4gIGRpc3BsYXlFbGVtZW50LmlubmVySFRNTCA9IGh0bWw7XG5cbiAgLy8gQWRkIGV2ZW50IGxpc3RlbmVyc1xuICBjb25zdCB0YWdJdGVtcyA9IGRpc3BsYXlFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFnLWl0ZW1cIik7XG4gIHRhZ0l0ZW1zLmZvckVhY2goKHRhZ0l0ZW0pID0+IHtcbiAgICB0YWdJdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjb250ZXh0bWVudVwiLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaGFuZGxlVGFnUmlnaHRDbGljayhlLCB0YWdJdGVtKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IHRhZ0l0ZW0ucXVlcnlTZWxlY3RvcihcIi50YWctZGVsZXRlXCIpO1xuICAgIGlmIChkZWxldGVCdXR0b24pIHtcbiAgICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgZGVsZXRlVGFnKHRhZ0l0ZW0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gY2xvc2VMaWdodGJveChsaWdodGJveCkge1xuICBsaWdodGJveC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJsaWdodGJveC1vcGVuXCIpO1xuXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGNvbnN0IGxpZ2h0Ym94SW1hZ2UgPSBsaWdodGJveC5xdWVyeVNlbGVjdG9yKFwiLmxpZ2h0Ym94LWltYWdlXCIpO1xuICAgIGxpZ2h0Ym94SW1hZ2Uuc3JjID0gXCJcIjtcbiAgfSwgMzAwKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlSW1hZ2VUYWdzRGlzcGxheXMoaW1hZ2VQYXRoKSB7XG4gIGNvbnN0IGxpZ2h0Ym94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaWdodGJveFwiKTtcbiAgaWYgKGxpZ2h0Ym94ICYmIGxpZ2h0Ym94LmRhdGFzZXQuY3VycmVudEltYWdlID09PSBpbWFnZVBhdGgpIHtcbiAgICB1cGRhdGVUYWdEaXNwbGF5KFxuICAgICAgbGlnaHRib3gucXVlcnlTZWxlY3RvcihcIi50YWctZGlzcGxheVwiKSxcbiAgICAgIGltYWdlTWV0YWRhdGFbaW1hZ2VQYXRoXSxcbiAgICAgIGltYWdlUGF0aFxuICAgICk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZmlsdGVyR2FsbGVyeSgpIHtcbiAgY29uc3QgYWxsQ2hlY2tib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFt2YWx1ZT1cImFsbFwiXScpO1xuICBjb25zdCBzZWxlY3RlZENhdGVnb3JpZXMgPSBbXTtcblxuICBpZiAoYWxsQ2hlY2tib3guY2hlY2tlZCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZm9sZGVyLXNlY3Rpb25cIikuZm9yRWFjaCgoc2VjdGlvbikgPT4ge1xuICAgICAgc2VjdGlvbi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvckFsbChcIi5jYXRlZ29yeS1jaGVja2JveDpjaGVja2VkXCIpXG4gICAgICAuZm9yRWFjaCgoY2hlY2tib3gpID0+IHtcbiAgICAgICAgaWYgKGNoZWNrYm94LnZhbHVlICE9PSBcImFsbFwiKSB7XG4gICAgICAgICAgc2VsZWN0ZWRDYXRlZ29yaWVzLnB1c2goY2hlY2tib3gudmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZm9sZGVyLXNlY3Rpb25cIikuZm9yRWFjaCgoc2VjdGlvbikgPT4ge1xuICAgICAgY29uc3QgZm9sZGVyTmFtZSA9IHNlY3Rpb24ucXVlcnlTZWxlY3RvcihcImgyXCIpLnRleHRDb250ZW50O1xuICAgICAgaWYgKHNlbGVjdGVkQ2F0ZWdvcmllcy5pbmNsdWRlcyhmb2xkZXJOYW1lKSkge1xuICAgICAgICBzZWN0aW9uLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICB1cGRhdGVGaWx0ZXJCdXR0b25UZXh0KHNlbGVjdGVkQ2F0ZWdvcmllcywgYWxsQ2hlY2tib3guY2hlY2tlZCk7XG4gIHNldFRpbWVvdXQocmV2ZWFsRm9sZGVycywgNTApO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVGaWx0ZXJCdXR0b25UZXh0KHNlbGVjdGVkQ2F0ZWdvcmllcywgaXNBbGxTZWxlY3RlZCkge1xuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhdGVnb3J5QnV0dG9uXCIpO1xuXG4gIGlmIChpc0FsbFNlbGVjdGVkKSB7XG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gXCJBbGwgQ2F0ZWdvcmllc1wiO1xuICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiZmlsdGVyaW5nLWFjdGl2ZVwiKTtcbiAgfSBlbHNlIGlmIChzZWxlY3RlZENhdGVnb3JpZXMubGVuZ3RoID09PSAwKSB7XG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gXCJBbGwgQ2F0ZWdvcmllc1wiO1xuICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiZmlsdGVyaW5nLWFjdGl2ZVwiKTtcbiAgfSBlbHNlIGlmIChzZWxlY3RlZENhdGVnb3JpZXMubGVuZ3RoID09PSAxKSB7XG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gc2VsZWN0ZWRDYXRlZ29yaWVzWzBdO1xuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZmlsdGVyaW5nLWFjdGl2ZVwiKTtcbiAgfSBlbHNlIHtcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSBgJHtzZWxlY3RlZENhdGVnb3JpZXMubGVuZ3RofSBDYXRlZ29yaWVzYDtcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZChcImZpbHRlcmluZy1hY3RpdmVcIik7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmV2ZWFsRm9sZGVycygpIHtcbiAgY29uc3QgdmlzaWJsZUZvbGRlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgIFwiLmZvbGRlci1zZWN0aW9uOm5vdCguaGlkZGVuKVwiXG4gICk7XG4gIHZpc2libGVGb2xkZXJzLmZvckVhY2goKGZvbGRlciwgaW5kZXgpID0+IHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGZvbGRlci5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZVkoMClcIjtcbiAgICAgIGZvbGRlci5zdHlsZS5vcGFjaXR5ID0gXCIxXCI7XG4gICAgfSwgaW5kZXggKiA1MCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBmaWx0ZXJJbWFnZXNCeVRhZ3MoZGF0ZUZyb20sIGRhdGVUbywgbG9jYXRpb24sIHN1YmplY3QpIHtcbiAgY29uc3QgYWxsSW1hZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5nYWxsZXJ5LWltYWdlXCIpO1xuXG4gIGFsbEltYWdlcy5mb3JFYWNoKChpbWcpID0+IHtcbiAgICBjb25zdCBpbWFnZVBhdGggPSBpbWcuZGF0YXNldC5mdWxsSW1hZ2U7XG4gICAgY29uc3QgdGFncyA9IGltYWdlTWV0YWRhdGFbaW1hZ2VQYXRoXSB8fCB7fTtcbiAgICBsZXQgaXNWaXNpYmxlID0gdHJ1ZTtcblxuICAgIGlmIChkYXRlRnJvbSAmJiB0YWdzLmRhdGUgJiYgbmV3IERhdGUodGFncy5kYXRlKSA8IG5ldyBEYXRlKGRhdGVGcm9tKSkge1xuICAgICAgaXNWaXNpYmxlID0gZmFsc2U7XG4gICAgfVxuICAgIGlmIChkYXRlVG8gJiYgdGFncy5kYXRlICYmIG5ldyBEYXRlKHRhZ3MuZGF0ZSkgPiBuZXcgRGF0ZShkYXRlVG8pKSB7XG4gICAgICBpc1Zpc2libGUgPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKFxuICAgICAgbG9jYXRpb24gJiZcbiAgICAgICghdGFncy5sb2NhdGlvbiB8fCAhdGFncy5sb2NhdGlvbi50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGxvY2F0aW9uKSlcbiAgICApIHtcbiAgICAgIGlzVmlzaWJsZSA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAoXG4gICAgICBzdWJqZWN0ICYmXG4gICAgICAoIXRhZ3Muc3ViamVjdHMgfHxcbiAgICAgICAgIXRhZ3Muc3ViamVjdHMuc29tZSgocykgPT4gcy50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHN1YmplY3QpKSlcbiAgICApIHtcbiAgICAgIGlzVmlzaWJsZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChpc1Zpc2libGUpIHtcbiAgICAgIGltZy5jbGFzc0xpc3QucmVtb3ZlKFwidGFnLWZpbHRlcmVkLW91dFwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaW1nLmNsYXNzTGlzdC5hZGQoXCJ0YWctZmlsdGVyZWQtb3V0XCIpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmVvcmdhbml6ZUZpbHRlcmVkSW1hZ2VzKCk7XG59XG5cbmZ1bmN0aW9uIHJlb3JnYW5pemVGaWx0ZXJlZEltYWdlcygpIHtcbiAgT2JqZWN0LmVudHJpZXMoZm9sZGVyRGF0YSkuZm9yRWFjaCgoW2ZvbGRlck5hbWUsIGRhdGFdKSA9PiB7XG4gICAgY29uc3QgeyBzZWN0aW9uLCBpbWFnZXMsIGRpbWVuc2lvbnMgfSA9IGRhdGE7XG5cbiAgICBjb25zdCB2aXNpYmxlSW1hZ2VJbmRpY2VzID0gW107XG4gICAgY29uc3QgaW1hZ2VFbGVtZW50c0luR3JpZCA9IHNlY3Rpb24ucXVlcnlTZWxlY3RvckFsbChcIi5nYWxsZXJ5LWltYWdlXCIpO1xuXG4gICAgaW1hZ2VFbGVtZW50c0luR3JpZC5mb3JFYWNoKChpbWdFbGVtZW50KSA9PiB7XG4gICAgICBpZiAoIWltZ0VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwidGFnLWZpbHRlcmVkLW91dFwiKSkge1xuICAgICAgICBjb25zdCBpbWdVcmwgPSBpbWdFbGVtZW50LmRhdGFzZXQuZnVsbEltYWdlO1xuICAgICAgICBjb25zdCBvcmlnaW5hbEluZGV4ID0gaW1hZ2VzLmZpbmRJbmRleCgoaW1nKSA9PiBpbWcudXJsID09PSBpbWdVcmwpO1xuICAgICAgICBpZiAob3JpZ2luYWxJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICB2aXNpYmxlSW1hZ2VJbmRpY2VzLnB1c2gob3JpZ2luYWxJbmRleCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICh2aXNpYmxlSW1hZ2VJbmRpY2VzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgc2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuLWJ5LXRhZ1wiKTtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2Uge1xuICAgICAgc2VjdGlvbi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuLWJ5LXRhZ1wiKTtcbiAgICB9XG5cbiAgICBjb25zdCB2aXNpYmxlSW1hZ2VzID0gdmlzaWJsZUltYWdlSW5kaWNlcy5tYXAoKGkpID0+IGltYWdlc1tpXSk7XG4gICAgY29uc3QgdmlzaWJsZURpbWVuc2lvbnMgPSB2aXNpYmxlSW1hZ2VJbmRpY2VzLm1hcCgoaSkgPT4gZGltZW5zaW9uc1tpXSk7XG5cbiAgICBsYXlvdXRJbWFnZXMoc2VjdGlvbiwgdmlzaWJsZUltYWdlcywgdmlzaWJsZURpbWVuc2lvbnMpO1xuICB9KTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3R5bGVzLmNzcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFvRztBQUNwRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhO0FBQ3JDLGlCQUFpQix1R0FBYTtBQUM5QixpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHVGQUFPOzs7O0FBSThDO0FBQ3RFLE9BQU8saUVBQWUsdUZBQU8sSUFBSSx1RkFBTyxVQUFVLHVGQUFPLG1CQUFtQixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGhvdG9ncmFwaHlzaXRlLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiJdLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/styles.css\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;