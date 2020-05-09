/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

export interface AzureFunctionsExtensionApi {
    apiVersion: string;

    revealTreeItem(resourceId: string): Promise<void>;

    createFunction(options: ICreateFunctionOptions): Promise<void>;
}

export type ProjectLanguage = 'JavaScript' | 'TypeScript' | 'C#' | 'Python' | 'PowerShell' | 'Java';

export type ProjectVersion = '~1' | '~2' | '~3';

export interface ICreateFunctionOptions {
    /**
     * The folder containing the functions project
     */
    folderPath?: string;

    suppressCreateProjectPrompt?: boolean;

    suppressOpenFolder?: boolean;

    templateId?: string; // allow filter instead of id?
    functionName?: string;

    language?: ProjectLanguage;

    languageFilter?: RegExp;

    version?: ProjectVersion;


    triggerSettings?: { // todo don't like this name
        [key: string]: string | undefined
    }
}
