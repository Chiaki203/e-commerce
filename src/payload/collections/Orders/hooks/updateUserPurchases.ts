import type { AfterChangeHook } from 'payload/dist/collections/config/types'

import type { Order } from '../../../payload-types'

export const updateUserPurchases: AfterChangeHook<Order> = async ({ doc, req, operation }) => {
  console.log('updateUserPurchases', doc, operation)
  const { payload } = req

  if ((operation === 'create' || operation === 'update') && doc.orderedBy && doc.items) {
    const orderedBy = typeof doc.orderedBy === 'number' ? doc.orderedBy : doc.orderedBy.id

    const user = await payload.findByID({
      collection: 'users',
      id: orderedBy,
    })

    console.log('updateUserPurchases', user, orderedBy, doc.items)
    console.log('updateUserPurchases doc.items.product', doc.items[0].product)

    if (user) {
      await payload.update({
        collection: 'users',
        id: orderedBy,
        data: {
          purchases: [
            // ...(user?.purchases?.map(purchase =>
            //   typeof purchase === 'number' ? purchase : purchase.id,
            // ) || []), // eslint-disable-line function-paren-newline
            ...doc?.items?.map(({ product }) =>
              typeof product === 'number' ? product : product.id,
            ), // eslint-disable-line function-paren-newline
          ],
          // purchases: [
          //   ...(user?.purchases?.map(purchase =>
          //     typeof purchase === 'number' ? purchase : purchase.id,
          //   ) || []), // eslint-disable-line function-paren-newline
          //   ...(doc?.items?.map(({ product }) =>
          //     typeof product === 'number' ? product : product.id,
          //   ) || []), // eslint-disable-line function-paren-newline
          // ],
        },
      })
    }
  }

  return
}
