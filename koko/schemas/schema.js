// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import pageInfo from './pageInfo'
import experience from './experience'
import project from './project'
import skill from './skill'
import social from './social'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    pageInfo,
    experience,
    project,
    skill,
    social
  ]),
})
