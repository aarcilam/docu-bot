// AQUI VAN LAS DESCRIPCIONES DE CADA ARCHIVO sunombre: descripcion
const filesDescriptions:any = {
    'app.controller.ts': 'Root controller',
    'app.service.ts': 'Root service',
    'account.controller.ts': 'Account controller',
    'account.provider.ts': 'Account provider for de account entity',
    'account.service.ts': 'descripcion',
    'create-account.dto.ts': 'descripcion',
    'account.entity.ts': 'descripcion',
    'anchor.controller.ts': 'descripcion',
    'anchor.provider.ts': 'descripcion',
    'anchor.service.ts': 'descripcion',
    'auth.dto.ts': 'descripcion',
    'createAnchor.dto.ts': 'descripcion',
    'getCustomerCallback.dto.ts': 'descripcion',
    'getCustomerFiles.dto.ts': 'descripcion',
    'getCustomerInfo.dto.ts': 'descripcion',
    'getTransaction.dto.ts': 'descripcion',
    'postTransaction.dto.ts': 'descripcion',
    'quoteCrossborderPayment.dto.ts': 'descripcion',
    'sendCrossborderPayment.dto.ts': 'descripcion',
    'getInfo.dto.ts': 'descripcion',
    'trxDepositInteractive.dto.ts': 'descripcion',
    'trxWithdrawInteractive.dto.ts': 'descripcion',
    'Sep38PriceRequest.dto.ts': 'descripcion',
    'Sep38PricesRequest.dto.ts': 'descripcion',
    'sep38Quote.dto.ts': 'descripcion',
    'GetTrx.dto.ts': 'descripcion',
    'getTrxs.dto.ts': 'descripcion',
    'trxDeposit.dto.ts': 'descripcion',
    'trxUpdate.dto.ts': 'descripcion',
    'trxWithdraw.dto.ts': 'descripcion',
    'webAuthEndpoint.dto.ts': 'descripcion',
    'anchor.entity.ts': 'descripcion',
    'customerKYC.entity.ts': 'descripcion',
    'fileKYC.entity.ts': 'descripcion',
    'sep31Transaction.entity.ts': 'descripcion',
    'sep38Quote.entity.ts': 'descripcion',
    'sep6Transaction.entity.ts': 'descripcion',
    'AnchorSupportToken.interface.ts': 'descripcion',
    'CreateCustomerInfoResponse.interface.ts': 'descripcion',
    'CreateTransactionResponse.interface.ts': 'descripcion',
    'CustomErrorResponse.interface.ts': 'descripcion',
    'GetCustomerResponse.interface.ts': 'descripcion',
    'GetTransactionResponse.interface.ts': 'descripcion',
    'NaturalPersonKYCFields.interface.ts': 'descripcion',
    'OrganizationKYCfields.interface.ts': 'descripcion',
    'ReceivingAnchorInfoResponse.interface.ts': 'descripcion',
    'GetTrxResponse.interface.ts': 'descripcion',
    'GetTrxsResponse.interface.ts': 'descripcion',
    'TrxDepositResponse.interface.ts': 'descripcion',
    'TrxParamsForFilter.interface.ts': 'descripcion',
    'TrxResponse.interface.ts': 'descripcion',
    'TrxWithdrawResponse.interface.ts': 'descripcion',
    'sep_10.controller.ts': 'descripcion',
    'sep_10.service.ts': 'descripcion',
    'sep_12.controller.ts': 'descripcion',
    'sep_12.service.ts': 'descripcion',
    'sep_24.controller.ts': 'descripcion',
    'sep_24.service.ts': 'descripcion',
    'sep_31.controller.ts': 'descripcion',
    'sep_31.service.ts': 'descripcion',
    'sep_38.controller.ts': 'descripcion',
    'sep_38.service.ts': 'descripcion',
    'sep_6.controller.ts': 'descripcion',
    'sep_6.service.ts': 'descripcion',
    'asset.controller.ts': 'descripcion',
    'asset.provider.ts': 'descripcion',
    'asset.service.ts': 'descripcion',
    'create-asset.dto.ts': 'descripcion',
    'update-asset.dto.ts': 'descripcion',
    'asset.entity.ts': 'descripcion',
    'create-issuer.dto.ts': 'descripcion',
    'issuer.entity.ts': 'descripcion',
    'issuer.controller.ts': 'descripcion',
    'issuer.provider.ts': 'descripcion',
    'issuer.service.ts': 'descripcion',
    'balance-pool.dto.ts': 'descripcion',
    'create-external-liquidity-pool.dto.ts': 'descripcion',
    'create-liquidity-pool.dto.ts': 'descripcion',
    'liquidity-pool-info.dto.ts': 'descripcion',
    'list-pools.dto.ts': 'descripcion',
    'remove-liquidity-pool.dto.ts': 'descripcion',
    'spot-price-by-currencies.dto.ts': 'descripcion',
    'spot-price.dto.ts': 'descripcion',
    'liquidity-pool.entity.ts': 'descripcion',
    'movement.entity.ts': 'descripcion',
    'liquidity-pool.controller.ts': 'descripcion',
    'liquidity-pool.provider.ts': 'descripcion',
    'liquidity-pool.service.ts': 'descripcion',
    'rate.service.ts': 'descripcion',
    'stellar.service.ts': 'descripcion',
    'create-transaction.dto.ts': 'descripcion',
    'distribute.dto.ts': 'descripcion',
    'get-path-payment.dto.ts': 'descripcion',
    'path-payment.dto.ts': 'descripcion',
    'swap-transaction.dto.ts': 'descripcion',
    'update-transaction.dto.ts': 'descripcion',
    'pathPayment.entity.ts': 'descripcion',
    'swap.entity.ts': 'descripcion',
    'transaction.entity.ts': 'descripcion',
    'transaction.controller.ts': 'descripcion',
    'transaction.provider.ts': 'descripcion',
    'transaction.service.ts': 'descripcion',
    'cron.service.ts': 'descripcion',
    'shared.service.ts': 'descripcion'
};

import fs from 'fs';
import path from 'path';

// Configura la carpeta y el patrón de archivos en los que deseas agregar el encabezado
const excludedFolders:string[] = ['node_modules']; // Agrega los nombres de los directorios que deseas excluir
const excludedFiles:string[] = []; // Archivos a excluir

const header = `/**
 * <%= projectName %> - <%= description %>
 * @fileoverview <%= filename %>
 * @description <%= fileDescription %>
 * @version <%= version %>
 * @date <%= date %>
 * @company eCloud4 Corporation
 *
 * This software is the property of eCloud4 Corporation. Unauthorized reproduction or distribution of
 * this software, or any portion of it, may result in severe civil and criminal penalties, and will be
 * prosecuted to the maximum extent possible under the law.
 *
 * @license <%= license %>
 * @copyright Copyright (c) <%= year %> <%= author %>
 * @license eCloud4 Corporation Software License
 */
`;

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

function addHeaderToFile(file:string) {
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
export function processFilesInFolder(folderPath:string, filePattern:RegExp) {
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
                addHeaderToFile(filePath);
            }
        } else if (fileStat.isDirectory()) {
            processFilesInFolder(filePath,filePattern);
        }
    });
}