/*
 * datastore
 *
 * (c) Harminder Virk <virk@adonisjs.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
*/

export type IDocNode = {
  permalink: string,
  title: string,
  toc: boolean,
  content: any,
  srcPath?: string,
  category?: string,
  sidebarLabel?: string,
  redirects?: string[],
  editUrl?: string,
  meta?: any,
}

export type IConfigVersion = {
  no: string,
  location: string,
  draft: boolean,
  depreciated: boolean,
  default: boolean,
  name?: string,
}

export type IConfigZone = {
  slug: string,
  name?: string,
  versions: IConfigVersion[],
}

export type IProjectConfig = {
  domain?: string,
  cname?: string,
  theme?: string,
  zones: IConfigZone[],
  translations: {
    [key: string]: any,
  },
  compilerOptions: any,
  themeOptions: any,
}

export type IConfigError = {
  message: string,
  ruleId: string,
}

export type IVersionJSON = {
  no: string,
  name: string,
  location: string,
  docs: { [jsonPath: string]: Partial<IDocNode> },
}

export type IStatsNode = { absPath: string, relativePath: string }
