/** Utils functions */

/** Response format in case of success */
export const success = (result) => ({ status: 'success', result })

/** Response format in case of error */
export const error = (message) => ({ status: 'error', message })

/** Check if returned object is an Error */
export const isErr = (err) => (err instanceof Error)

/** Return good format of response */
export const checkAndChange = (obj) => {
  if (this.isErr(obj)) {
    return (this.error(obj.message))
  } return (this.success(obj))
}
