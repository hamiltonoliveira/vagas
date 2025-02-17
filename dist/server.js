"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const app = (0, fastify_1.default)();
app.get('/hello', () => {
    return 'Hello world';
});
app.listen({
    port: 3333
}).then(() => {
    console.log('running server now');
});
