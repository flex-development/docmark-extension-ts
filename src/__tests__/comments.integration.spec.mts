/**
 * @file Integration Tests - comments
 * @module docmark-extension-ts/tests/integration/comments
 */

import snapshot from '#tests/utils/snapshot-events'
import { parse, postprocess, preprocess } from '@flex-development/docmark'
import testSubject from '@flex-development/docmark-extension-ts'
import type {
  Chunk,
  FileLike,
  ParseOptions
} from '@flex-development/docmark-util-types'
import pathe from '@flex-development/pathe'
import { readSync as read } from 'to-vfile'
import { beforeAll, describe, expect, it } from 'vitest'

describe('integration:comments', () => {
  let options: ParseOptions

  beforeAll(() => {
    options = { extensions: [testSubject] }
  })

  it.each<[path: string]>([
    ['source/01.txt'],
    ['source/02.txt'],
    ['source/03.txt']
  ])('should parse typescript comments (%j)', path => {
    // Arrange
    const file: FileLike = read(pathe.join('__fixtures__', path))
    const slice: Chunk[] = preprocess()(file, undefined, true)

    // Act
    const result = postprocess(parse(options).source().write(slice))

    // Expect
    expect(result).to.have.property('length').be.at.least(2)
    expect(result).to.each.have.nested.property('1.start')
    expect(result).to.each.have.nested.property('1.end')
    expect(snapshot(result)).toMatchSnapshot()
  })
})
