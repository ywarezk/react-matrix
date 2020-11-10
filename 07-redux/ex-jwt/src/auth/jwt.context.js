/**
 * Context that will hold the jwt token
 * So all the components under the context can access the jwt token
 */
 
import { createContext } from 'react';

// default
// string
// context<string>
export const JwtContext = createContext('hello world');
export const StamContext = createContext('hello world');
export const AviContext = createContext('hello world');