// AQUI VAN LAS DESCRIPCIONES DE CADA ARCHIVO sunombre: descripcion
const filesDescriptions:any = {

};

import fs from 'fs';
import path from 'path';

// Configura la carpeta y el patrón de archivos en los que deseas agregar el encabezado
const excludedFolders:string[] = ['node_modules']; // Agrega los nombres de los directorios que deseas excluir
const excludedFiles:string[] = []; // Archivos a excluir

const vars:any = {
    projectName: "eCloud4 Backend service",
    description: "services for app and bo of eCloud4",
    date: new Date(),
    year: new Date().getFullYear(),
    author: "eCloud4",
    license: "MIT",
    version: "1.0.0",
    filename: "",
    fileDescription: ""
};

const files:any = {};

function addHeaderToFile(file:string,header:string) {
    const filePath = path.resolve(file);
    const filename = path.basename(filePath);
    const fileContents = fs.readFileSync(filePath, 'utf-8');

    // Verifica si el archivo ya tiene un encabezado y lo reemplaza
    const existingHeaderRegex = /^\/\*\*[\s\S]*?\*\//;
    const fileContentsWithoutHeader = fileContents.replace(existingHeaderRegex, '').trim();

    vars.filename = filename;
    const description = filesDescriptions[filename];
    vars.fileDescription = description;

    const newFileContents = header.replace(/<%=\s*(\w+)\s*%>/g, (match, varName) => {
        return vars[varName] || '';
    }) + fileContentsWithoutHeader;

    fs.writeFileSync(filePath, newFileContents, 'utf-8');
    console.log(filename + " Header Añadido con exito ");
    if (!description || description === 'descripcion') files[filename] = 'descripcion';
}

// Recorre los archivos en la carpeta y agrega o reemplaza el encabezado en los archivos correspondientes
export function processFilesInFolder(folderPath:string, filePattern:RegExp,header:string) {
    const folderName = path.basename(folderPath);

    // Verifica si el directorio actual debe excluirse
    if (excludedFolders.includes(folderName)) {
        console.log(`Directorio "${folderName}" excluido.`);
        return;
    }

    fs.readdirSync(folderPath).forEach(file => {
        const filePath = path.join(folderPath, file);
        const fileStat = fs.statSync(filePath);
        if (fileStat.isFile() && filePattern.test(file)) {
            if (excludedFiles.includes(file)) {
                console.log(`Archivo "${file}" excluido.`);
            } else {
                addHeaderToFile(filePath,header);
            }
        } else if (fileStat.isDirectory()) {
            processFilesInFolder(filePath,filePattern,header);
        }
    });
}