import type { FieldHook } from 'payload/types'

import type { Order } from '../../../payload-types'

export const populateOrderedBy: FieldHook<Order> = async ({ req, operation, value }) => {
  console.log('populateOrderedBy', value, operation)
  if ((operation === 'create' || operation === 'update') && !value) {
    return req.user.id
  }

  return value
}
