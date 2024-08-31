import { register } from 'node:module';
import { pathToFileURL } from 'node:url';
import "./global-setup.js";

// Aquí puedes agregar más funciones globales si es necesario.
// Registra tu loader personalizado
register('./alias-loader.js', pathToFileURL('./'));
