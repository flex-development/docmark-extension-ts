/**
 * @file comments
 * @module docmark-extension-ts/comments
 */

import { jsComments } from '@flex-development/docmark-extension-js'
import {
  combineExtensions
} from '@flex-development/docmark-util-combine-extensions'
import { codes, constants } from '@flex-development/docmark-util-symbol'
import type { NormalizedExtension } from '@flex-development/docmark-util-types'
import tripleSlashComment from './triple-slash.comment.mts'

/**
 * The TypeScript comments syntax extension.
 *
 * @see {@linkcode NormalizedExtension}
 *
 * @const {NormalizedExtension} comments
 */
const comments: NormalizedExtension = combineExtensions(jsComments, {
  [constants.contentTypeSource]: {
    [codes.slash]: tripleSlashComment
  }
})

export default comments
