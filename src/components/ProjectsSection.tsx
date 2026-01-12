import { Card, CardImage, CardTitle, CardContent } from './Card'
import seivomImage from '@/assets/images/seivom2.png'

export default function ProjectsSection() {
  return (
    <div className="mb-12">
      <h2 id="projects" className="text-3xl font-bold font-noto-light mb-8 text-gray-900">
        Projects
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        <Card className="max-w-md">
          <CardImage src={seivomImage} alt="Seivom Project" className="h-40" />
          <CardTitle>Seivom</CardTitle>
          <CardContent>
            <div className="font-noto-light text-gray-700 text-left">
              A secure, full-stack web application built using Vue, NodeJS,
              and AWS to display movies, along with adding comments and
              reviews, similar to IMDB, with the capability to create, read,
              update, and delete movie entries from DynamoDB. Implemented
              authentication and permissions using JWT, plus separate
              experiences for both admins and users. The backend was built
              on AWS, using Amplify, provisioned API gateway, lambdas and
              database.
            </div>
          </CardContent>
        </Card>

        <Card className="max-w-md">
          <CardImage
            src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
            alt="RecipeSource Project"
            className="h-40"
          />
          <CardTitle>Recipesource</CardTitle>
          <CardContent>
            <div className="font-noto-light text-gray-700 text-left">
              A crowdsourcing site to aggregate the best tips on recipes.
              Coming soon!
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
