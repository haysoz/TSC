"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const oracledb_1 = __importDefault(require("oracledb"));
const dbConfig = {
    user: 'your_username',
    password: 'your_password',
    connectString: 'your_host:your_port/your_service_name',
};
function connectToDatabase() {
    return __awaiter(this, void 0, void 0, function* () {
        let connection;
        try {
            connection = yield oracledb_1.default.getConnection(dbConfig);
            console.log('Successfully connected to Oracle Database!');
            const result = yield connection.execute(`SELECT * FROM employees WHERE ROWNUM <= 5`);
            console.log('Query Result:', result.rows);
        }
        catch (err) {
            console.error('Error connecting to Oracle Database:', err);
        }
        finally {
            if (connection) {
                try {
                    yield connection.close();
                    console.log('Connection closed.');
                }
                catch (closeErr) {
                    console.error('Error closing connection:', closeErr);
                }
            }
        }
    });
}
connectToDatabase();
//# sourceMappingURL=oraconnection.js.map