// @flow
export type AboutMe = {
  title: string,
  text: string,
  image: string
}

/* I could have used another type of export to achieve same thing
example:

class AboutMe {
  title: string,
  text: string,
  image:string
}
export default AboutMe || export AboutMe
|| export class AboutMe {
  title
  text
  image
}
*/