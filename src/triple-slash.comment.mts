/**
 * @file tripleSlashComment
 * @module docmark-extension-ts/tripleSlashComment
 */

import { factoryLineComment } from '@flex-development/docmark-factory-line'
import { codes } from '@flex-development/docmark-util-symbol'
import type { ContinuableConstruct } from '@flex-development/docmark-util-types'

declare module '@flex-development/docmark-util-types' {
  interface TokenFields {
    /**
     * For comments, whether the comment is a TypeScript triple-slash comment.
     */
    triple?: boolean | undefined
  }
}

/**
 * The triple slash comment construct.
 *
 * This construct is expected to run at the `source` content level.
 *
 * @see {@linkcode ContinuableConstruct}
 *
 * @const {ContinuableConstruct} comment
 */
const comment: ContinuableConstruct = factoryLineComment({
  fields: { triple: true },
  markers: [codes.slash, codes.slash, codes.slash]
})

export default comment
