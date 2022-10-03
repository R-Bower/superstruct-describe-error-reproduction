import * as s from "superstruct"

interface Pet {
  name: string
  owner?: string
}

interface Dog extends Pet {
  breed: string
}

const petSchema: s.Describe<Pet> = s.type({
  name: s.string(),
  owner: s.optional(s.string()),
})

export const dogSchema: s.Describe<Dog> = s.type({
  ...petSchema.schema,
  breed: s.string(),
})
