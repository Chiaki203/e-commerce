import type { AfterChangeHook } from 'payload/dist/collections/config/types'

import type { Order } from '../../../payload-types'

export const clearUserCart: AfterChangeHook<Order> = async ({ doc, req, operation }) => {
  const { payload } = req
  console.log('clearUserCart', doc, operation)
  if (operation === 'create' && doc.orderedBy) {
    const orderedBy = typeof doc.orderedBy === 'number' ? doc.orderedBy : doc.orderedBy.id

    const user = await payload.findByID({
      collection: 'users',
      id: orderedBy,
    })

    if (user) {
      await payload.update({
        collection: 'users',
        id: orderedBy,
        data: {
          cart: {
            items: [],
          },
        },
      })
    }
  }

  return
}
