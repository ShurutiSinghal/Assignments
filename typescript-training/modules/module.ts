//modules in typescript : Module is all about: 
// each and every file will be treated as an independent component
//  within the TypeScript. Whenever we want to share any data or 
// common method from one file to another file,
//  we need to manually export from the source file and
//  import in the target file. 

//named_export
//export_all
//default_export
//duplicate_export

//export-> source file and import-> target file

// To do: so that it understand that we are used modules
//package.json
//{ "type":"module", 
// "devDependencies": { "ts-node": "^10.9.2", "typescript": "^5.9.3" }

//tsconfig.json
//Since It node understand Javascript
// we need to inform that typescript should be understood


//strict typechecking

// Adding module configurations to allow using ES Modules in Node.js 
// "noEmit": true,
// "allowImportingTsExtensions": true,
