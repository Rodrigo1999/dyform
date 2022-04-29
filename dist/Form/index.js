"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var dynamic_react_grid_1 = __importDefault(require("dynamic-react-grid"));
var react_2 = require("react");
var useErrors_1 = __importDefault(require("../hooks/useErrors"));
var useValues_1 = __importDefault(require("../hooks/useValues"));
var useData_1 = __importDefault(require("../hooks/useData"));
var utils_1 = require("../utils");
var Form = function (props, ref) {
    var _this = this;
    var _a, _b, _c, _d, _e, _g, _h;
    var Context = (0, react_2.useRef)({
        errorsControl: [],
        components: [],
        onError: function () { return null; },
        ComponentWrap: dynamic_react_grid_1.default,
        button: undefined,
        footerProps: {},
        context: {}
    });
    props = __assign(__assign({}, Context.current.context), props);
    var lastChangedField = (0, react_2.useRef)([]);
    var isSubmited = (0, react_2.useRef)(false);
    var form = (0, react_2.useRef)(null);
    var _j = (0, react_2.useState)([]), fieldsFromRender = _j[0], setFieldsFromRender = _j[1];
    var fields = (_b = (_a = props.fields) === null || _a === void 0 ? void 0 : _a.concat) === null || _b === void 0 ? void 0 : _b.call(_a, props.staticFields || []);
    var hookValues = (0, useValues_1.default)({
        fields: (fields || []).concat(fieldsFromRender.length ? fieldsFromRender : []),
        initialValues: (0, react_2.useMemo)(function () { return Object.assign({}, props.initialValues, props.fixedValues); }, [props.initialValues, props.fixedValues])
    });
    var hookErrors = (0, useErrors_1.default)({
        fields: (fields || []).concat(fieldsFromRender.length ? fieldsFromRender : []).filter(function (e) { return e.active != false; }),
        values: hookValues.valuesChain,
        errorsControl: (_c = Context === null || Context === void 0 ? void 0 : Context.current) === null || _c === void 0 ? void 0 : _c.errorsControl,
        yupSchema: props.validationSchema
    });
    var changeValue_data = (0, useData_1.default)({
        fieldsFromRender: fieldsFromRender,
        fields: props === null || props === void 0 ? void 0 : props.fields,
        hookValues: hookValues,
        hookErrors: hookErrors,
        isSubmited: isSubmited
    });
    (0, react_2.useEffect)(function () {
        if (lastChangedField.current[0] && isSubmited.current) {
            hookErrors.verifyAllErrors(lastChangedField.current[0]);
        }
    }, [hookValues.values, isSubmited]);
    //---------------------------------------------- ações básicas -------------------------------------
    var actions = (0, react_2.useMemo)(function () { return ({
        verifyAllErrors: function () {
            return changeValue_data(function (_a) {
                var hookErrors = _a.hookErrors;
                return hookErrors.verifyAllErrors();
            });
        },
        clean: function () {
            changeValue_data(function (_a) {
                var hookValues = _a.hookValues, hookErrors = _a.hookErrors, isSubmited = _a.isSubmited;
                setTimeout(function () {
                    hookErrors.cleanErrors();
                    hookValues.cleanValues();
                    isSubmited.current = false;
                });
            });
        },
        changeValue: function (evt, value, others) {
            changeValue_data(function (_a) {
                var fieldsFromRender = _a.fieldsFromRender, fields = _a.fields, hookValues = _a.hookValues;
                var _name = '';
                var _value;
                if (typeof evt == 'string') {
                    _name = evt;
                    _value = value;
                }
                else {
                    _name = evt.target.name;
                    _value = evt.target.value;
                }
                var fd = (0, utils_1.getField)((fields || []).concat(fieldsFromRender), _name, false);
                hookValues.changeValue(_name, _value, function (field, value) {
                    var _a;
                    lastChangedField.current = [_name, _value];
                    (_a = props.onChangeField) === null || _a === void 0 ? void 0 : _a.call(props, field || fd, value, others);
                });
            });
        }
    }); }, []);
    //---------------------------------------------- submição de formulário -------------------------------------
    var submit = function (evt) { return __awaiter(_this, void 0, void 0, function () {
        var errors, cloneValues, fd;
        var _a, _b, _c, _d, _e;
        return __generator(this, function (_g) {
            switch (_g.label) {
                case 0:
                    (_a = evt === null || evt === void 0 ? void 0 : evt.preventDefault) === null || _a === void 0 ? void 0 : _a.call(evt);
                    isSubmited.current = true;
                    return [4 /*yield*/, hookErrors.verifyAllErrors()];
                case 1:
                    errors = _g.sent();
                    cloneValues = (0, utils_1.clone)(hookValues.values);
                    if (fields) {
                        fd = (0, utils_1.getAllFields)(fields).filter(function (field) { return field.active != false; });
                        fd.filter(function (e) { return e.output && e.visible != false; }).forEach(function (e) {
                            if (e.name)
                                cloneValues[e.name] = e.output(hookValues.values[e.name]);
                        });
                    }
                    (_b = props.onBeforeSubmit) === null || _b === void 0 ? void 0 : _b.call(props, cloneValues);
                    if (!!Object.values(errors).length) {
                        (_d = (_c = Context === null || Context === void 0 ? void 0 : Context.current) === null || _c === void 0 ? void 0 : _c.onError) === null || _d === void 0 ? void 0 : _d.call(_c, errors);
                        return [2 /*return*/, false];
                    }
                    else {
                        if (props.formData)
                            cloneValues = (0, utils_1.objectToForm)(cloneValues);
                        (_e = props.onSubmit) === null || _e === void 0 ? void 0 : _e.call(props, cloneValues);
                        if (props.clean)
                            actions.clean();
                        return [2 /*return*/, true];
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    // -------------------------------------------- renderização flúida de um componente-----------------------
    function renderField(obj) {
        var comp = obj.wrap ? obj.wrap(wrapChildren(obj)) : wrapChildren(obj);
        comp = __assign({}, comp);
        Object.defineProperty(comp, 'constructorObject', {
            enumerable: false,
            configurable: true,
            value: obj
        });
        Object.defineProperty(comp, 'isRenderField', {
            enumerable: false,
            configurable: true,
            value: true
        });
        return comp;
    }
    var setFieldsFromRenderDebounce = (0, react_2.useMemo)(function () { return (0, utils_1.debounce)(function (fields, fieldsFromRender) {
        var filter = function (data) { return typeof data[1] != 'function'; };
        var formatFieldsToCompare = function (fields) { return fields.map(function (field) { return (0, utils_1.filterProperty)(field || {}, filter); }); };
        if (!(0, utils_1.dequal)(formatFieldsToCompare(fields), formatFieldsToCompare(fieldsFromRender))) {
            setFieldsFromRender(__spreadArray([], fields, true));
        }
    }, 100); }, []);
    function connectChildren(element) {
        setFieldsFromRenderDebounce((0, utils_1.findInComponent)(element), fieldsFromRender);
        return element;
    }
    //---------------------------------------------- inicialização ---------------------------------------------
    var argumentsToContexts = {
        props: props,
        errors: hookErrors.errors,
        values: hookValues.values,
        valuesChain: hookValues.valuesChain,
        verifyAllErrors: actions.verifyAllErrors,
        changeValue: actions.changeValue,
        submit: submit,
        clean: actions.clean,
        allFields: (fields ? (0, utils_1.getAllFields)(fields) : []).concat(fieldsFromRender),
        renderField: renderField
    };
    var localContext = (this === null || this === void 0 ? void 0 : this(argumentsToContexts)) || {};
    var propsContext = ((_d = props.create) === null || _d === void 0 ? void 0 : _d.call(props, argumentsToContexts)) || {};
    Context.current = {
        errorsControl: propsContext.errorsControl || localContext.errorsControl || [],
        components: propsContext.components || localContext.components || [],
        onError: propsContext.onError || localContext.onError || (function () { return null; }),
        ComponentWrap: propsContext.ComponentWrap || localContext.ComponentWrap || dynamic_react_grid_1.default,
        button: propsContext.button || localContext.button,
        footerProps: propsContext.footerProps || localContext.footerProps,
        context: propsContext.context || localContext.context,
    };
    //---------------------------------------------- controle de referência -------------------------------------
    (0, react_2.useImperativeHandle)(Object.keys(props.innerRef || ref || {}).length ? props.innerRef || ref : { current: null }, function () { return (__assign(__assign({}, argumentsToContexts), { form: form === null || form === void 0 ? void 0 : form.current, setValues: hookValues.setValues })); });
    //---------------------------------------------- controle de linhas e colunas -------------------------------------
    var configRow = {
        row: true,
        alignItems: props.alignItems || 'flex-start',
        justify: props.justify,
        align: props.align,
        direction: props.direction,
        spacing: props.spacing || 2,
    };
    function wrapChildren(f) {
        var _a, _b, _c, _d;
        if (fields || props.children) {
            if (f.fields)
                return render(f.fields);
            if (f.type == 'component' && f.content) {
                var comp = f.content(__assign(__assign({}, argumentsToContexts), { fields: fields || [] }));
                setFieldsFromRenderDebounce((0, utils_1.findInComponent)(comp), fieldsFromRender);
                return comp;
            }
            var _f = (0, utils_1.filterProperty)(f, ['input', 'output']);
            return (_d = (_c = ((0, utils_1.getComponentBase)((_a = Context === null || Context === void 0 ? void 0 : Context.current) === null || _a === void 0 ? void 0 : _a.components, _f) || (0, utils_1.getComponentBase)((_b = Context === null || Context === void 0 ? void 0 : Context.current) === null || _b === void 0 ? void 0 : _b.components, _f, 'default'))) === null || _c === void 0 ? void 0 : _c.content) === null || _d === void 0 ? void 0 : _d.call(_c, _f);
        }
    }
    var render = function (fields) {
        return (fields.filter(function (e) { return e.visible != false; }).map(function (field, index) {
            var _a, _b, _c, _d, _e, _g, _h, _j, _k;
            var componentBaseField = (0, utils_1.getComponentBase)((_a = Context === null || Context === void 0 ? void 0 : Context.current) === null || _a === void 0 ? void 0 : _a.components, field) || (0, utils_1.getComponentBase)((_b = Context === null || Context === void 0 ? void 0 : Context.current) === null || _b === void 0 ? void 0 : _b.components, field, 'default');
            return !props.children ? ((0, react_1.createElement)(Context.current.ComponentWrap, __assign({}, (!!field.fields ? configRow : {}), { xs: field.xs, "xs-m": field['xs-m'], sm: field.sm, "sm-m": field['sm-m'], md: field.md, "md-m": field['md-m'], lg: field.lg, "lg-m": field['lg-m'], xl: field.xl, "xl-m": field['xl-m'], order: field.order, key: field.name || index }, componentBaseField === null || componentBaseField === void 0 ? void 0 : componentBaseField.contentProps, (_c = props.grid) === null || _c === void 0 ? void 0 : _c.col, field.contentProps, { style: __assign(__assign(__assign({}, (_e = (_d = props.grid) === null || _d === void 0 ? void 0 : _d.col) === null || _e === void 0 ? void 0 : _e.style), (_g = componentBaseField === null || componentBaseField === void 0 ? void 0 : componentBaseField.contentProps) === null || _g === void 0 ? void 0 : _g.style), (_h = field.contentProps) === null || _h === void 0 ? void 0 : _h.style), className: ['form-field', (_j = componentBaseField === null || componentBaseField === void 0 ? void 0 : componentBaseField.contentProps) === null || _j === void 0 ? void 0 : _j.className, (_k = field.contentProps) === null || _k === void 0 ? void 0 : _k.className].filter(Boolean).join(' ') }),
                field.beforeContent,
                field.wrap ? field.wrap(wrapChildren(field)) : wrapChildren(field),
                field.afterContent)) : field.wrap ? field.wrap(wrapChildren(field)) : wrapChildren(field);
        }));
    };
    //---------------------------------------------- COMPONENTE -------------------------------------
    return ((0, jsx_runtime_1.jsx)(utils_1.Context.Provider, __assign({ value: argumentsToContexts }, { children: (0, jsx_runtime_1.jsx)("form", __assign({ onSubmit: submit, ref: form }, { children: props.children ? connectChildren(props.children(argumentsToContexts)) : ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Context.current.ComponentWrap, __assign({}, configRow, (_e = props.grid) === null || _e === void 0 ? void 0 : _e.row, { children: render(fields) })), !props.hiddenFooter && (props.beforeButtonElement || props.onSubmit || props.afterButtonElement) &&
                        (0, jsx_runtime_1.jsxs)(Context.current.ComponentWrap, __assign({ row: true, alignItems: 'flex-start', justify: 'flex-end', className: 'content-buttons', style: { marginTop: 20 } }, (_g = Context === null || Context === void 0 ? void 0 : Context.current) === null || _g === void 0 ? void 0 : _g.footerProps, { children: [props.beforeButtonElement, props.onSubmit && ((_h = Context === null || Context === void 0 ? void 0 : Context.current) === null || _h === void 0 ? void 0 : _h.button), props.afterButtonElement] }))] })) })) })));
};
var create = function (data) { return (0, react_2.forwardRef)(Form.bind(data)); };
exports.create = create;
exports.default = Form;
