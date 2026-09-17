/**
 * @file comments
 * @module docmark-extension-ts/comments
 */

import { jsComments } from '@flex-development/docmark-extension-js'
import combine from '@flex-development/docmark-util-combine-extensions'
import { codes, constants } from '@flex-development/docmark-util-symbol'
import type { NormalizedExtension } from '@flex-development/docmark-util-types'

/**
 * The JavaScript comment syntax extension.
 *
 * @see {@linkcode NormalizedExtension}
 *
 * @const {NormalizedExtension} comments
 */
const comments: NormalizedExtension = combine(jsComments, {
  [constants.contentTypeSource]: {
    [codes.slash]: []
  }
})

export default comments
