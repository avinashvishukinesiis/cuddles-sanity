import { aboutUs } from './aboutUs'
import { program } from './program'
import { testimonial } from './testimonial'
import { footer } from './siteSettings'
import { homePage } from './homePage'
import { curriculum } from './curriculum'
import { partnerships } from './partnerships'
import { safety } from './safety'
import { assistance } from './assistance'
import { contact } from './contact'
import { type SchemaTypeDefinition } from 'sanity'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    aboutUs,
    program,
    testimonial,
    footer,
    homePage,
    curriculum,
    partnerships,
    safety,
    assistance,
    contact
  ],
}
