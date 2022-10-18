export default {
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    {
      name: "title",
      title: "Title",
      description: "Title of the skill",
      type: "string"
    },
    {
      name: "progress",
      title: "Progress",
      type: "number",
      description: "Progress of your skill from 0 to 100",
      validation: (Rule) => Rule.min(0).max(100),
    },
    {
    name: "profilePic",
    title: "ProfilePic",
    type: "image",
    options: {
      hotspot: true,
    }
  }
  ],
}
