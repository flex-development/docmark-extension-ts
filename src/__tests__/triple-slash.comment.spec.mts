/**
 * @file Unit Tests - tripleSlashComment
 * @module docmark-extension-ts/tests/unit/tripleSlashComment
 */

import { describe, expect, it } from 'vitest'
import testSubject from '../triple-slash.comment.mts'

describe('unit:tripleSlashComment', () => {
  it('should be comment construct', () => {
    expect(testSubject).to.have.property('continuation')
    expect(testSubject).toMatchSnapshot()
  })
})
