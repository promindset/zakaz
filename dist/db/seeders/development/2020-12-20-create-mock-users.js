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
Object.defineProperty(exports, "__esModule", { value: true });
exports.up = void 0;
const up = (queryInterface, Sequelize) => __awaiter(void 0, void 0, void 0, function* () {
    const users = [
        {
            Email: 'fawzinajjar@test.com',
            Username: 'xes3x',
            FirstName: 'fauzi',
            LastName: 'nazhzhar',
            Password: 'EE8D8728F435FD550F83852AABAB5234CE1DA528'
        },
        {
            Email: 'assaadnajjar@test.com',
            Username: 'rajjix',
            FirstName: 'assaad',
            LastName: 'najjar',
            Password: 'EE8D8728F435FD550F83852AABAB5234CE1DA528'
        }
    ];
    yield queryInterface.bulkInsert('User', users, {});
});
exports.up = up;
