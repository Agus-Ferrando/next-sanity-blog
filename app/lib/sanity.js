import { createClient } from "next-sanity"

const projectId = 'fmqkknwu'
const dataset = 'production'
const apiVersion = '2023-07-27'

export const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: true
})