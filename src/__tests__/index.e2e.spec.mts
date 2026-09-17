/**
 * @file E2E Tests - api
 * @module docmark-extension-ts/tests/e2e/api
 */

import * as testSubject from '@flex-development/docmark-extension-ts'
import { describe, expect, it } from 'vitest'

describe('e2e:docmark-extension-ts', () => {
  it('should expose public api', () => {
    expect(Object.keys(testSubject)).toMatchSnapshot()
  })
})
