import type { FieldHook } from 'payload/types'

import type { User } from '../../../payload-types'

export const resolveDuplicatePurchases: FieldHook<User> = async ({ value, operation }) => {
  console.log('resolveDuplicatePurchases', value, operation)
  if ((operation === 'create' || operation === 'update') && value) {
    // return Array.from(
    //   new Set(
    //     // value?.map(purchase => (typeof purchase === 'number' ? purchase : purchase.id)),
    //     value?.map(purchase => (typeof purchase === 'number' ? purchase : purchase.id)) || [],
    //   ),
    // )
    return value
  }
  return
}
