/**
 * Fields in a request to update a single TODO item.
 */
export interface UpdateDairyRequest {
  name: string
  dueDate: string
  done: boolean
}