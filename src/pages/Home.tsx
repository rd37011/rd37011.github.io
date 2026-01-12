import { Card, CardContent } from '@/components/Card'
import ExperienceSection from '@/components/ExperienceSection'
import ProjectsSection from '@/components/ProjectsSection'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="text-center">
        {/* Introduction Section */}
        <div className="mb-12">
          <h2 className="text-3xl mb-4 font-noto-regular text-gray-900">Hi, I'm Ryan!</h2>
          <h3 className="text-2xl mb-4 font-noto-regular text-gray-800">
            I'm currently a software engineer working at Capital One.
          </h3>
          <p className="text-lg font-noto-light text-gray-700 max-w-4xl mx-auto">
            I'm a globally focused engineer passionate about a variety of subjects
            within the field of CS, such as natural language processing, cloud
            computing, computer architecture, and learning languages. My dream is
            to one day attend grad school to conduct research on computational
            linguistics, so that I can tackle problems I'm interested in. I hope
            to be able to weave my expertise in CS with my experience with
            languages, along with my interests in ML, NLP, and language learning!
          </p>
          <div className="border-t border-gray-300 mt-8 w-full"></div>
        </div>

        {/* About Me Section */}
        <div className="mb-12">
          <h2 id="about" className="text-3xl font-bold font-noto-light mb-4 text-gray-900">About me</h2>
          <div className="flex justify-center">
            <p className="font-noto-light text-gray-700 max-w-4xl">
              Tropically grown in Miami, Florida! I graduated from the University of
              Miami in 2019 with a Bachelor's of Science degree in Computer Science,
              with minors in Mathematics and Japanese. Currently based out of Tampa,
              Florida. I have a variety of interests beyond CS, including travel,
              soccer (COYG) history (specifically Japanese /
              European), cars, horology, gaming, and cooking.
            </p>
          </div>
        </div>

        {/* Experience Section */}
        <ExperienceSection />

        {/* Projects Section */}
        <ProjectsSection />

        <div className="border-t border-gray-300 mt-12 w-full"></div>

        {/* Contact Section */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold font-noto-light mb-8 text-gray-900">Contact me:</h2>
          <div className="flex justify-center">
            <Card className="max-w-md w-full">
              <CardContent className="py-6">
                <div className="mb-4">
                  <h4 className="font-noto-bold text-lg mb-2">Email me here:</h4>
                  <p className="font-noto-light text-gray-600">rd37011@gmail.com</p>
                  <p className="font-noto-light text-gray-600">or my alternate email: rxd234@miami.edu</p>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h4 className="font-noto-bold text-lg">This page is still under construction!</h4>
                  <p className="font-noto-light text-gray-600">Please check back later :)</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
