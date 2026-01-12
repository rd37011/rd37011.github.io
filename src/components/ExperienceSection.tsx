import { Timeline, TimelineItem } from './Timeline'
import c1Logo from '@/assets/images/company-assets/c1.png'
import tfLogo from '@/assets/images/company-assets/tf.png'
import jpmcLogo from '@/assets/images/company-assets/jpmc.png'

export default function ExperienceSection() {
  return (
    <div className="mb-12">
      <h2 id="experience" className="text-3xl font-bold font-noto-light mb-8 text-gray-900">
        Experience
      </h2>
      <Timeline>
        <TimelineItem
          icon={c1Logo}
          date="July 2020 - Present"
          title="Senior Associate Software Engineer"
          subtitle="Capital One Financial"
          side="right"
        >
          <ul className="list-disc list-inside text-left space-y-2">
            <li>
              Utilized Node and Angular with Django to build out web forms with the ability to create and
              update entries, leveraging the Enterprise GitHub API to automate issue creation, thereby
              shortening a days-long process to a few hours.
            </li>
            <li>
              Providing technical leadership to TIP interns by conducting code reviews, reviewing PRs, devising
              application architecture, and helping them to grow by exposing them to new technologies.
            </li>
            <li>
              Acted as an internal front-end consultant to other teams in the organization, and helped them to create functional, extensible web platforms.
            </li>
            <li>
              Utilized Node, Vue and inner-sourced tools to create
              responsive, user friendly web pages with VueX for state
              management, and leveraging eAPIs to facilitate and deliver
              good UX under a federated model.
            </li>
            <li>
              Led frontend architecture discussions and efforts to
              performance test critical APIs.
            </li>
            <li>
              Led efforts to accessibility test to ensure compliance to WCAG and equal accessibility to our site.
            </li>
          </ul>
        </TimelineItem>

        <TimelineItem
          icon={c1Logo}
          date="August 2019 - July 2020"
          title="Associate Software Engineer"
          subtitle="Capital One Financial"
          side="left"
        >
          <ul className="list-disc list-inside text-left space-y-2">
            <li>
              Worked as part of a full-stack team leveraging AWS S3,
              Lambda, Amazon Connect, Lex, and Polly to build a pilot
              project as part of an effort to integrate NLP and
              automation into the customer calling experience.
            </li>
            <li>
              Built/own a lambda using Node.js to test accuracy of
              speech utterances with capability to query S3 and deliver
              statistics on missed utterances, greatly aiding testing,
              debugging vis-a-vis Amazon Lex, and saving development
              time.
            </li>
            <li>
              Built lambdas in Python to assist
              with AWS DB compliance issues, collectively saving weeks of
              work to delete non compliant snapshots.
            </li>
          </ul>
        </TimelineItem>

        <TimelineItem
          icon={tfLogo}
          date="January 2019 - May 2019"
          title="Web Developer Intern"
          subtitle="Tickmark Inc."
          side="right"
        >
          <ul className="list-disc list-inside text-left space-y-2">
            <li>
              Leveraged React, TypeScript and SASS to build dynamic,
              responsive web pages with MobX for state management via
              graphic design specs subject to change under a fast-paced
              startup environment.
            </li>
            <li>
              Participated in active architecture discussions with
              software leads and CTO to flesh out scalable and
              cost-effective solutions to effectively serve an
              e-commerce site accessed by over 50,000 customers.
            </li>
          </ul>
        </TimelineItem>

        <TimelineItem
          icon={jpmcLogo}
          date="June 2018 - August 2018"
          title="Summer Technology Analyst"
          subtitle="JPMorgan Chase & Co."
          side="left"
        >
          <ul className="list-disc list-inside text-left space-y-2">
            <li>
              Built a UI to help streamline internal processes with
              developers as end users, on React, Spring Boot, and an
              internal React toolkit, while learning all technologies on
              the job.
            </li>
          </ul>
        </TimelineItem>
      </Timeline>
    </div>
  )
}
