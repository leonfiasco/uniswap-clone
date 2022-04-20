import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'mek2mqbg',
  dataset: 'production',
  apiVersion: 'v1',
  token:
    'skth9IcIZhWLYwIaKOYT94MJWARkl3quRI70p1Yh0wrFNV0FdqWS0q34idIVdTHeJsdgXbr5tKwINgE762x3XY7NzolDEPc0T1LC6kpOLqamQqUWmUkb91bwVInEe7n6pPJX2RShnqeDAMLdU15LNPgxsV4SJzU0bLqlA7pPuYKip4B8NKc6',
  useCdn: false,
  ignoreBrowserTokenWarning: true,
})
