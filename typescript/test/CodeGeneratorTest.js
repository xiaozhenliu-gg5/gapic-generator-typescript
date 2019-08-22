var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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
var _this = this;
var execa = require('execa');
var util = require('util');
var path = require('path');
var fs = require('fs');
var assert = require('assert');
var cwd = process.cwd();
var SHOWCASE_CLIENT_LIB = path.join(cwd, 'showcase');
var TMP_CLIENT_LIB = path.join(cwd, 'showcase', 'tmp');
var GENERATED_CLIENT_LIB_DIR = '--typescript_gapic_out=' +
    path.join(__dirname, '..', '..', 'showcase', 'tmp');
var GENERATED_CLIENT_FILE = path.join(__dirname, '..', '..', 'showcase', 'tmp', 'src', 'v1beta1', 'echo_client.ts');
var GOOGLE_GAX_PROTOS_DIR = '-I/' +
    path.join('usr', 'local', 'lib', 'node_modules', 'google-gax/protos');
var LOCAL_CLIENT_LIB_DIR = '-I' + path.join(__dirname, 'protos');
console.log(LOCAL_CLIENT_LIB_DIR);
var PROTO_DIR = path.join('google', 'showcase', 'v1beta1', 'echo.proto');
var CLIENT_LIBRARY_BASELINE = path.join(__dirname, '..', '..', 'typescript', 'test', 'testdata', 'echo_client_baseline');
describe('CodeGeneratorTest', function () {
    describe('Generate client library', function () {
        it('Generated client library should have same output with baseline.', function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!fs.existsSync(SHOWCASE_CLIENT_LIB)) {
                            fs.mkdirSync(SHOWCASE_CLIENT_LIB);
                        }
                        if (!fs.existsSync(TMP_CLIENT_LIB)) {
                            fs.mkdirSync(TMP_CLIENT_LIB);
                        }
                        return [4 /*yield*/, execa('protoc', [
                                GENERATED_CLIENT_LIB_DIR, GOOGLE_GAX_PROTOS_DIR,
                                LOCAL_CLIENT_LIB_DIR, PROTO_DIR
                            ])];
                    case 1:
                        _a.sent();
                        assert(fs.readFileSync(GENERATED_CLIENT_FILE)
                            .equals(fs.readFileSync(CLIENT_LIBRARY_BASELINE)));
                        return [2 /*return*/];
                }
            });
        }); });
    });
});
